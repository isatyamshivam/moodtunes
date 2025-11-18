import { useCallback, useEffect, useRef, useState } from 'react';
import * as faceapi from '@vladmandic/face-api';
import { motion } from 'framer-motion';
import React from 'react';
import { MOODS_BY_VALUE } from '../data/moods';

const MotionButton = motion.button;

export function SelfieCapture({ onMoodDetected }) {
  const videoRef = useRef(null);
  const [modelsLoading, setModelsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [isDetecting, setIsDetecting] = useState(false);

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = 'https://justadudewhohacks.github.io/face-api.js/models';
      try {
        await Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
          faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
        ]);
        setModelsLoading(false);
      } catch (err) {
        const errorMessage = 'Failed to load face detection models: ' + err.message;
        setError(errorMessage);
      }
    };

    loadModels();
  }, []);

  const stopCamera = useCallback(() => {
    if (videoRef.current?.srcObject) {
      videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsCameraActive(false);
  }, []);

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, [stopCamera]);

  const startCamera = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        width: { ideal: 1280 },
        height: { ideal: 720 },
        facingMode: 'user',
      },
      audio: false,
    });

    if (videoRef.current) {
      videoRef.current.srcObject = stream;
      setIsCameraActive(true);
      await new Promise((resolve) => {
        videoRef.current.onloadedmetadata = () => {
          videoRef.current.play();
          resolve();
        };
      });
    }
  };

  const detectMood = async () => {
    if (modelsLoading || isDetecting) return;

    try {
      setIsDetecting(true);
      await startCamera();

      if (!videoRef.current) {
        throw new Error('Camera unavailable');
      }

      const detections = await faceapi
        .detectSingleFace(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceExpressions();

      if (detections) {
        const expressions = detections.expressions;
        const expression = Object.entries(expressions).reduce((a, b) =>
          expressions[a] > expressions[b[0]] ? a : b[0]
        );

        const moodMap = {
          happy: 'happy',
          sad: 'sad',
          angry: 'neutral',
          neutral: 'neutral',
          surprised: 'excited',
          fearful: 'relaxed',
          disgusted: 'sad',
        };

        const targetValue = moodMap[expression] || 'neutral';
        const mappedMood = MOODS_BY_VALUE[targetValue] || MOODS_BY_VALUE['neutral'];
        onMoodDetected(mappedMood);
      } else {
        throw new Error('No face detected. Try better lighting.');
      }
    } catch (err) {
      const errorMessage = err.message || 'Error during face detection';
      setError(errorMessage);
      setTimeout(() => setError(null), 3000);
    } finally {
      stopCamera();
      setIsDetecting(false);
    }
  };

  if (error) {
    return (
      <div className="text-[#5a3f6b] text-center p-4 bg-[#f4e8ff] rounded-lg border border-[#e0ccff]">
        {error}
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-md mx-auto md:ml-auto">
      <div className="relative rounded-[32px] border border-white/30 bg-white/10 backdrop-blur-2xl p-4 sm:p-6 shadow-[0_35px_70px_rgba(18,8,40,0.35)]">
        {modelsLoading && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#1d1a2b]/80 rounded-[32px]">
            <div className="text-white flex items-center gap-3">
              <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-[#c8c1ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Loading models...
            </div>
          </div>
        )}
        <div className="aspect-video relative rounded-[28px] overflow-hidden border border-white/30 shadow-[0_25px_60px_rgba(20,10,40,0.55)] bg-[#0a0915]/90 backdrop-blur-xl">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-full h-full object-cover"
        />
        {!isCameraActive && !modelsLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 text-white text-sm text-center px-6">
            <span className="text-base font-semibold">Camera is off</span>
            <span className="text-xs text-white/70">Tap Detect Mood to enable</span>
          </div>
        )}
      </div>
        <div className="mt-4 sm:mt-6 text-center">
          <MotionButton
            onClick={detectMood}
            className="inline-flex items-center justify-center bg-white/20 border border-white/50 text-white font-bold py-2 px-8 sm:py-3 sm:px-10 rounded-full text-sm sm:text-base shadow-[0_15px_35px_rgba(21,14,36,0.4)] backdrop-blur-xl disabled:opacity-60 disabled:cursor-not-allowed"
            whileHover={{ scale: modelsLoading || isDetecting ? 1 : 1.05, brightness: 1.1 }}
            whileTap={{ scale: 0.95 }}
            disabled={modelsLoading || isDetecting}
          >
            {isDetecting ? 'Detecting mood…' : 'Detect Mood'}
          </MotionButton>
        </div>
      </div>
    </div>
  );
}
