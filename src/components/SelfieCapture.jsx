import { useEffect, useRef, useState } from 'react';
import * as faceapi from '@vladmandic/face-api';
import { motion } from 'framer-motion';
import React from 'react';
import { MOODS_BY_VALUE } from '../data/moods';

const MotionButton = motion.button;

export function SelfieCapture({ onMoodDetected }) {
  const videoRef = useRef();
  const canvasRef = useRef();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadModels = async () => {
      const MODEL_URL = 'https://justadudewhohacks.github.io/face-api.js/models';
      try {
        console.log('Loading models from:', MODEL_URL);
        await Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
          faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
        ]);
        console.log('Models loaded successfully');
        setIsLoading(false);
      } catch (err) {
        const errorMessage = 'Failed to load face detection models: ' + err.message;
        console.error(errorMessage, err);
        setError(errorMessage);
      }
    };

    loadModels();
  }, []);

  useEffect(() => {
    const startVideo = async () => {
      try {
        console.log('Requesting camera access...');
        const stream = await navigator.mediaDevices.getUserMedia({ 
          video: { 
            width: { ideal: 1280 },
            height: { ideal: 720 },
            facingMode: 'user'
          } 
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          console.log('Camera stream started');
        }
      } catch (err) {
        const errorMessage = 'Unable to access camera: ' + err.message;
        console.error(errorMessage, err);
        setError(errorMessage);
      }
    };

    if (!isLoading) {
      startVideo();
    }

    const activeVideo = videoRef.current;

    return () => {
      if (activeVideo?.srcObject) {
        activeVideo.srcObject.getTracks().forEach(track => track.stop());
        console.log('Camera stream stopped');
      }
    };
  }, [isLoading]);

  const captureImage = async () => {
    if (videoRef.current && canvasRef.current) {
      try {
        console.log('Starting face detection...');
        const detections = await faceapi
          .detectSingleFace(videoRef.current, new faceapi.TinyFaceDetectorOptions())
          .withFaceExpressions();

        console.log('Face detection result:', detections);

        if (detections) {
          const expressions = detections.expressions;
          console.log('Detected expressions:', expressions);
          
          // Find the strongest expression
          const expression = Object.entries(expressions).reduce((a, b) =>
            expressions[a] > expressions[b[0]] ? a : b[0]
          );
          console.log('Detected expression:', expression);

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
          console.log('Mapped mood:', mappedMood);
          onMoodDetected(mappedMood);
        } else {
          throw new Error('No face detected in the image');
        }
      } catch (err) {
        const errorMessage = err.message || 'Error during face detection';
        console.error(errorMessage, err);
        setError(errorMessage);
        
        // Clear error after 3 seconds
        setTimeout(() => setError(null), 3000);
      }
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
    <div className="relative w-full max-w-md mx-auto px-3 sm:px-0">
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#1d1a2b]/80 rounded-xl">
          <div className="text-white flex items-center gap-3">
            <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-[#c8c1ff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Loading models...
          </div>
        </div>
      )}
      <div className="aspect-video relative rounded-xl overflow-hidden border-2 border-white/40 shadow-[0_20px_45px_rgba(33,25,56,0.35)] bg-[#0f0e17]">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-full h-full object-cover"
        />
        <canvas ref={canvasRef} className="hidden" />
      </div>
      <div className="mt-4 sm:mt-6 text-center">
        <MotionButton
          onClick={captureImage}
          className="bg-gradient-to-r from-aurora-bloom via-aurora-iris to-aurora-midnight text-white font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-full text-sm sm:text-base shadow-lg shadow-[#2b2341]/30"
          whileHover={{ scale: 1.05, brightness: 1.1 }}
          whileTap={{ scale: 0.95 }}
          disabled={isLoading}
        >
          Detect Mood
        </MotionButton>
      </div>
    </div>
  );
}
