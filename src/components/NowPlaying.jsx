import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePlayer } from '../context/PlayerContext';

const accentMap = {
  happy: 'bg-purple-500',
  excited: 'bg-violet-500',
  relaxed: 'bg-indigo-400',
  sad: 'bg-slate-500',
  neutral: 'bg-gray-500',
};

const progressAccent = {
  happy: 'bg-purple-400',
  excited: 'bg-violet-400',
  relaxed: 'bg-indigo-300',
  sad: 'bg-slate-400',
  neutral: 'bg-gray-400',
};

export function NowPlaying() {
  const { currentSong, isPlaying, moodColor, togglePlay, stop } = usePlayer();
  const iframeRef = useRef(null);
  const [progress, setProgress] = useState(0);

  // Simulate a progress bar while playing
  useEffect(() => {
    if (!isPlaying) return;
    setProgress(0);
    const duration = 240; // ~4 min simulated
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 100 / duration;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying, currentSong?.embedId]);

  // Post message to YouTube iframe to play/pause
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    try {
      const cmd = isPlaying
        ? '{"event":"command","func":"playVideo","args":""}'
        : '{"event":"command","func":"pauseVideo","args":""}';
      iframe.contentWindow.postMessage(cmd, '*');
    } catch {
      // cross-origin — ignored
    }
  }, [isPlaying]);

  if (!currentSong) return null;

  const thumbnailUrl = `https://img.youtube.com/vi/${currentSong.embedId}/mqdefault.jpg`;

  return (
    <AnimatePresence>
      {currentSong && (
        <motion.div
          key="now-playing"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50"
        >
          {/* Progress bar */}
          <div className="h-1 w-full bg-gray-800">
            <motion.div
              className={`h-full ${progressAccent[moodColor] || 'bg-gray-400'}`}
              style={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>

          <div className="bg-[#181818] border-t border-gray-800 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3 flex items-center gap-3 sm:gap-5">
              {/* Thumbnail */}
              <div className="relative flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={thumbnailUrl}
                  alt={currentSong.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${accentMap[moodColor] || 'bg-gray-500'}`} />
              </div>

              {/* Song info */}
              <div className="flex-1 min-w-0">
                <p className="text-sm sm:text-base font-bold text-white truncate">
                  {currentSong.title}
                </p>
                <p className="text-xs sm:text-sm text-gray-400 truncate">
                  {currentSong.artist}
                </p>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                {/* Play / Pause */}
                <button
                  onClick={togglePlay}
                  className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white text-gray-900 flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-transform"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 sm:h-6 sm:w-6">
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 sm:h-6 sm:w-6">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>

                {/* Open on YouTube */}
                <button
                  onClick={() =>
                    window.open(
                      `https://www.youtube.com/watch?v=${currentSong.embedId}`,
                      '_blank',
                      'noopener'
                    )
                  }
                  className="h-8 w-8 sm:h-9 sm:w-9 rounded-full border border-gray-600 text-gray-400 flex items-center justify-center hover:text-white hover:border-gray-400 transition-colors"
                  aria-label="Open on YouTube"
                  title="Open on YouTube"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </button>

                {/* Close */}
                <button
                  onClick={stop}
                  className="h-8 w-8 sm:h-9 sm:w-9 rounded-full border border-gray-600 text-gray-400 flex items-center justify-center hover:text-white hover:border-gray-400 transition-colors"
                  aria-label="Close player"
                  title="Close player"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Hidden YouTube iframe for audio playback */}
          {isPlaying && (
            <iframe
              ref={iframeRef}
              src={`https://www.youtube.com/embed/${currentSong.embedId}?autoplay=1&enablejsapi=1&rel=0`}
              title="Now playing"
              allow="autoplay; encrypted-media"
              className="absolute w-0 h-0 opacity-0 pointer-events-none"
              tabIndex={-1}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
