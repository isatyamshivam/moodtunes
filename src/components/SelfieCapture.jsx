import { useCallback, useEffect, useRef, useState } from 'react';
import * as faceapi from '@vladmandic/face-api';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MOODS_BY_VALUE } from '../data/moods';

const MotionButton = motion.button;
const MotionDiv = motion.div;

// States: idle | camera-on | captured | analyzing | result
export function SelfieCapture() {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [modelsLoading, setModelsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [phase, setPhase] = useState('idle'); // idle | camera-on | captured | analyzing | result
  const [capturedImage, setCapturedImage] = useState(null);
  const [detectedMood, setDetectedMood] = useState(null);

  // Load face-api models
  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = '/models';
      try {
        await Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
          faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
        ]);
        setModelsLoading(false);
      } catch (err) {
        setError('Failed to load face detection models: ' + err.message);
      }
    };
    loadModels();
  }, []);

  const stopCamera = useCallback(() => {
    if (videoRef.current?.srcObject) {
      videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
  }, []);

  useEffect(() => {
    return () => stopCamera();
  }, [stopCamera]);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 640 }, height: { ideal: 480 }, facingMode: 'user' },
        audio: false,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await new Promise((resolve) => {
          videoRef.current.onloadedmetadata = () => {
            videoRef.current.play();
            resolve();
          };
        });
        setPhase('camera-on');
      }
    } catch (err) {
      setError('Camera access denied. Please allow camera permission.');
      setTimeout(() => setError(null), 4000);
    }
  };

  const capturePhoto = () => {
    if (!videoRef.current) return;
    const canvas = canvasRef.current;
    const video = videoRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0);
    const imageData = canvas.toDataURL('image/jpeg');
    setCapturedImage(imageData);
    // Stop camera right after drawing to canvas — we no longer need the live feed
    stopCamera();
    setPhase('captured');
    // Immediately start analyzing the captured canvas frame
    analyzeFace();
  };

  const analyzeFace = async () => {
    setPhase('analyzing');
    try {
      // Small delay for scan animation to be visible
      await new Promise((r) => setTimeout(r, 800));

      const canvas = canvasRef.current;
      if (!canvas || canvas.width === 0) throw new Error('No captured frame to analyze.');

      // Run detection on the CANVAS (the captured snapshot), not the video
      const detections = await faceapi
        .detectSingleFace(canvas, new faceapi.TinyFaceDetectorOptions({ inputSize: 416, scoreThreshold: 0.4 }))
        .withFaceExpressions();

      if (detections) {
        const expressions = detections.expressions;

        // Find the expression with the highest confidence score
        let bestExpression = 'neutral';
        let bestScore = 0;
        for (const [key, score] of Object.entries(expressions)) {
          if (score > bestScore) {
            bestScore = score;
            bestExpression = key;
          }
        }

        console.log('[MoodTunes] Detected expressions:', expressions);
        console.log(`[MoodTunes] Best expression: ${bestExpression} (${(bestScore * 100).toFixed(1)}%)`);

        const moodMap = {
          happy: 'happy',
          sad: 'sad',
          angry: 'neutral',
          neutral: 'neutral',
          surprised: 'excited',
          fearful: 'relaxed',
          disgusted: 'sad',
        };

        const targetValue = moodMap[bestExpression] || 'neutral';
        const mappedMood = MOODS_BY_VALUE[targetValue] || MOODS_BY_VALUE['neutral'];

        // Delay for animation effect
        await new Promise((r) => setTimeout(r, 1000));
        setDetectedMood(mappedMood);
        setPhase('result');
      } else {
        throw new Error('No face detected. Make sure your face is clearly visible and well-lit.');
      }
    } catch (err) {
      stopCamera();
      setError(err.message || 'Error during face detection');
      setCapturedImage(null);
      setPhase('idle');
      setTimeout(() => setError(null), 5000);
    }
  };

  const reset = () => {
    stopCamera();
    setCapturedImage(null);
    setDetectedMood(null);
    setPhase('idle');
  };

  if (error) {
    return (
      <div className="w-full">
        <div className="text-red-600 text-center p-4 bg-red-50 rounded-xl border border-red-200 text-sm">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Camera / Captured image area */}
      <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-200 border border-gray-300">
        {/* Hidden video (always mounted for camera stream) */}
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className={`absolute inset-0 w-full h-full object-cover ${phase === 'camera-on' ? 'block' : 'hidden'}`}
        />
        {/* Canvas is hidden — used for capturing frame + running detection */}
        <canvas ref={canvasRef} className="hidden" />

        {/* Idle state — gray placeholder */}
        {phase === 'idle' && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 gap-3">
            {modelsLoading ? (
              <>
                <svg className="animate-spin h-8 w-8 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <p className="text-sm font-medium">Loading face detection models...</p>
              </>
            ) : (
              <>
                <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
                </svg>
                <p className="text-sm font-medium">Camera is off</p>
                <p className="text-xs text-gray-400">Click &quot;Start Camera&quot; to begin</p>
              </>
            )}
          </div>
        )}

        {/* Captured / Analyzing state — show captured image + scan overlay */}
        {(phase === 'captured' || phase === 'analyzing') && capturedImage && (
          <div className="absolute inset-0">
            <img src={capturedImage} alt="Captured" className="w-full h-full object-cover" />
            {/* Scanning overlay */}
            <div className="absolute inset-0 bg-black/20">
              <div className="absolute left-0 right-0 h-0.5 bg-green-400 shadow-[0_0_15px_rgba(74,222,128,0.7)] animate-scan-line" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/60 rounded-2xl px-6 py-3 flex items-center gap-3">
                  <svg className="animate-spin h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span className="text-white text-sm font-semibold">Analyzing your mood...</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Result state — show captured image with mood badge */}
        {phase === 'result' && capturedImage && (
          <div className="absolute inset-0">
            <img src={capturedImage} alt="Captured" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        )}
      </div>

      {/* Controls area below the camera */}
      <div className="mt-4 flex flex-col items-center gap-3">
        <AnimatePresence mode="wait">
          {/* Idle — Start Camera button */}
          {phase === 'idle' && !modelsLoading && (
            <MotionButton
              key="start"
              onClick={startCamera}
              className="px-8 py-3 rounded-full bg-[#2D2D2D] text-white font-bold text-sm hover:bg-[#444] transition-colors shadow-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Start Camera
            </MotionButton>
          )}

          {/* Camera on — Capture Photo button */}
          {phase === 'camera-on' && (
            <MotionButton
              key="capture"
              onClick={capturePhoto}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] text-white font-bold text-sm hover:bg-blue-700 transition-colors shadow-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              📸 Capture & Detect
            </MotionButton>
          )}

          {/* Analyzing state */}
          {(phase === 'captured' || phase === 'analyzing') && (
            <MotionDiv
              key="analyzing"
              className="text-sm font-semibold text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Scanning your expression...
            </MotionDiv>
          )}

          {/* Result — detected mood card */}
          {phase === 'result' && detectedMood && (
            <MotionDiv
              key="result"
              className="w-full max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-lg text-left">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Detected Mood</p>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">{detectedMood.emoji}</span>
                  <div>
                    <h3 className="text-xl font-black text-gray-900">{detectedMood.name}</h3>
                    <p className="text-sm text-gray-500">{detectedMood.tagline}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => navigate(`/playlist/${detectedMood.value}`)}
                    className="flex-1 px-5 py-2.5 rounded-full bg-[#2D2D2D] text-white font-bold text-sm hover:bg-[#444] transition-colors"
                  >
                    Browse {detectedMood.name} playlist →
                  </button>
                  <button
                    onClick={reset}
                    className="px-4 py-2.5 rounded-full border border-gray-300 text-gray-600 font-semibold text-sm hover:bg-gray-50 transition-colors"
                  >
                    Retry
                  </button>
                </div>
              </div>
            </MotionDiv>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
