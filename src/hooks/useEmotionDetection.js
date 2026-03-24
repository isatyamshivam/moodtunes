/**
 * useEmotionDetection.js
 * ─────────────────────────────────────────────────────────────
 * Custom React hook that encapsulates the full TensorFlow.js
 * emotion-detection pipeline:
 *
 *   1. BlazeFace  → fast face bounding-box detection
 *   2. FER-2013 mini-CNN → 7-class emotion classification
 *
 * Returns { detectEmotion, isLoading, error } so the consuming
 * component never touches TF.js directly.
 */

import { useEffect, useRef, useState, useCallback } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as blazeface from '@tensorflow-models/blazeface';
import { EMOTION_LABELS } from '../utils/emotionMapper';

/** Path to the TF.js-converted emotion model in public/ */
const EMOTION_MODEL_URL = '/models/mobilenet-emotion/model.json';

/**
 * Input size the emotion CNN expects (48×48 grayscale — FER-2013 standard).
 */
const MODEL_INPUT_SIZE = 48;

export function useEmotionDetection() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Persist model references across renders without triggering re-renders.
  const faceModelRef = useRef(null);
  const emotionModelRef = useRef(null);

  /* ──────────────────── Load models on mount ──────────────────── */
  useEffect(() => {
    let cancelled = false;

    const loadModels = async () => {
      try {
        // Ensure WebGL backend is ready (fastest for most browsers)
        await tf.setBackend('webgl');
        await tf.ready();

        // 1. BlazeFace — lightweight face detector (~100 KB)
        const faceModel = await blazeface.load();

        // 2. FER-2013 emotion CNN stored in public/models/mobilenet-emotion/
        const emotionModel = await tf.loadLayersModel(EMOTION_MODEL_URL);

        if (!cancelled) {
          faceModelRef.current = faceModel;
          emotionModelRef.current = emotionModel;
          setIsLoading(false);
        }
      } catch (err) {
        if (!cancelled) {
          console.error('[useEmotionDetection] Model load failed:', err);
          setError(
            'Failed to load emotion detection models. ' +
              'Make sure you ran the model download script. ' +
              err.message
          );
          setIsLoading(false);
        }
      }
    };

    loadModels();

    return () => {
      cancelled = true;
    };
  }, []);

  /* ──────────── Detect emotion from an HTMLCanvasElement ──────── */

  /**
   * Run face detection + emotion classification on a canvas element.
   *
   * @param {HTMLCanvasElement} canvas — frame captured from the webcam
   * @returns {Promise<{ emotion: string, confidence: number }>}
   * @throws if no face is detected or models aren't loaded
   */
  const detectEmotion = useCallback(async (canvas) => {
    const faceModel = faceModelRef.current;
    const emotionModel = emotionModelRef.current;

    if (!faceModel || !emotionModel) {
      throw new Error('Models are not loaded yet.');
    }

    // ── Step 1: Detect face bounding box via BlazeFace ──────────
    const predictions = await faceModel.estimateFaces(canvas, false);

    if (!predictions || predictions.length === 0) {
      throw new Error(
        'No face detected. Make sure your face is clearly visible and well-lit.'
      );
    }

    // Use the first (highest-confidence) face prediction
    const face = predictions[0];

    // BlazeFace returns topLeft [x, y] and bottomRight [x, y]
    const [x1, y1] = face.topLeft;
    const [x2, y2] = face.bottomRight;

    // Add 20 % padding around the bounding box for better cropping
    const w = x2 - x1;
    const h = y2 - y1;
    const pad = 0.2;
    const cropX = Math.max(0, Math.floor(x1 - w * pad));
    const cropY = Math.max(0, Math.floor(y1 - h * pad));
    const cropW = Math.min(canvas.width - cropX, Math.ceil(w * (1 + 2 * pad)));
    const cropH = Math.min(canvas.height - cropY, Math.ceil(h * (1 + 2 * pad)));

    // ── Step 2: Crop, resize to 48×48 grayscale, normalise ──────
    const result = tf.tidy(() => {
      // Read pixels from the full canvas
      let img = tf.browser.fromPixels(canvas);

      // Crop the face region
      img = tf.slice(img, [cropY, cropX, 0], [cropH, cropW, 3]);

      // Resize to MODEL_INPUT_SIZE × MODEL_INPUT_SIZE
      img = tf.image.resizeBilinear(img, [MODEL_INPUT_SIZE, MODEL_INPUT_SIZE]);

      // Convert to grayscale: 0.299*R + 0.587*G + 0.114*B
      const r = tf.slice(img, [0, 0, 0], [-1, -1, 1]);
      const g = tf.slice(img, [0, 0, 1], [-1, -1, 1]);
      const b = tf.slice(img, [0, 0, 2], [-1, -1, 1]);
      const gray = tf.add(
        tf.add(tf.mul(r, 0.299), tf.mul(g, 0.587)),
        tf.mul(b, 0.114)
      );

      // Normalise to [0, 1]
      const normalised = tf.div(gray, 255.0);

      // Reshape to batch: [1, 48, 48, 1]
      const batched = normalised.reshape([
        1,
        MODEL_INPUT_SIZE,
        MODEL_INPUT_SIZE,
        1,
      ]);

      // ── Step 3: Run emotion CNN inference ───────────────────
      const preds = emotionModel.predict(batched);

      // preds shape: [1, 7] — softmax probabilities
      return preds.dataSync();
    });

    // ── Step 4: Map softmax output → emotion label + confidence ─
    let maxIdx = 0;
    let maxVal = 0;
    for (let i = 0; i < result.length; i++) {
      if (result[i] > maxVal) {
        maxVal = result[i];
        maxIdx = i;
      }
    }

    const emotion = EMOTION_LABELS[maxIdx];
    const confidence = maxVal;

    console.log(
      `[useEmotionDetection] Detected: ${emotion} (${(confidence * 100).toFixed(1)}%)`
    );

    return { emotion, confidence };
  }, []);

  return { detectEmotion, isLoading, error };
}
