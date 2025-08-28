import { useEffect, useRef, useState } from 'react';
import * as faceapi from '@vladmandic/face-api';
import { motion } from 'framer-motion';
import React from 'react';

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

    return () => {
      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
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
          const mood = Object.entries(expressions).reduce((a, b) => 
            expressions[a] > expressions[b[0]] ? a : b[0]
          );
          console.log('Detected mood:', mood);

          const moodMap = {
            happy: { name: 'Happy', emoji: '😊' },
            sad: { name: 'Sad', emoji: '😢' },
            angry: { name: 'Angry', emoji: '😠' },
            neutral: { name: 'Chill', emoji: '😌' },
            surprised: { name: 'Energetic', emoji: '😎' },
            fearful: { name: 'Chill', emoji: '😌' },
            disgusted: { name: 'Angry', emoji: '😠' },
          };

          const mappedMood = moodMap[mood] || moodMap.neutral;
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
      <div className="text-red-500 text-center p-4 bg-red-100 rounded-lg">
        {error}
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-md mx-auto px-3 sm:px-0">
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-spotify-base bg-opacity-80 rounded-xl">
          <div className="text-spotify-text flex items-center gap-3">
            <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-spotify-green" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Loading models...
          </div>
        </div>
      )}
      <div className="aspect-video relative rounded-xl overflow-hidden border-2 border-spotify-highlight shadow-xl">
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
        <motion.button
          onClick={captureImage}
          className="bg-gradient-to-r from-purple-500 to-blue-400 text-white font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-full text-sm sm:text-base"
          whileHover={{ scale: 1.05, brightness: 1.1 }}
          whileTap={{ scale: 0.95 }}
          disabled={isLoading}
        >
          Detect Mood
        </motion.button>
      </div>
    </div>
  );
}
