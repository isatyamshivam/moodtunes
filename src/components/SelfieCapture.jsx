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
      try {
        await Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
          faceapi.nets.faceExpressionNet.loadFromUri('/models'),
        ]);
        setIsLoading(false);
      } catch (err) {
        setError('Failed to load face detection models');
        console.error(err);
      }
    };

    loadModels();
  }, []);

  useEffect(() => {
    const startVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        setError('Unable to access camera');
        console.error(err);
      }
    };

    if (!isLoading) {
      startVideo();
    }

    return () => {
      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
    };
  }, [isLoading]);

  const captureImage = async () => {
    if (videoRef.current && canvasRef.current) {
      const detections = await faceapi
        .detectSingleFace(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceExpressions();

      if (detections) {
        const expressions = detections.expressions;
        const mood = Object.entries(expressions).reduce((a, b) => 
          expressions[a] > expressions[b[0]] ? a : b[0]
        );

        const moodMap = {
          happy: { name: 'Happy', emoji: '😊' },
          sad: { name: 'Sad', emoji: '😢' },
          angry: { name: 'Angry', emoji: '😠' },
          neutral: { name: 'Chill', emoji: '😌' },
          surprised: { name: 'Energetic', emoji: '😎' },
        };

        onMoodDetected(moodMap[mood] || moodMap.neutral);
      } else {
        setError('No face detected');
      }
    }
  };

  if (error) {
    return <div className="text-red-500 text-center p-4">{error}</div>;
  }
  return (
    <div className="relative w-full max-w-md mx-auto">
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-spotify-base bg-opacity-80 rounded-xl">
          <div className="text-spotify-text flex items-center gap-3">
            <svg className="animate-spin h-5 w-5 text-spotify-green" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
          muted
          className="w-full h-full object-cover"
        />
        <canvas ref={canvasRef} className="absolute top-0 left-0" />
      </div>
      <motion.button
        onClick={captureImage}
        className="mt-6 w-full bg-spotify-green hover:bg-opacity-80 text-black font-bold py-3 px-6 rounded-full shadow-md"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={isLoading}
      >
        Detect Mood
      </motion.button>
    </div>
  );
}
