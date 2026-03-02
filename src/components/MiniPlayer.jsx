import React, { useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePlayer } from '../context/PlayerContext';

export function MiniPlayer() {
  const {
    currentSong,
    isPlaying,
    playlist,
    progress,
    elapsed,
    songDuration,
    togglePlay,
    stop,
    next,
    prev,
    seekTo,
    setShowFullPlayer,
  } = usePlayer();

  const miniBarRef = useRef(null);

  const handleBarClick = useCallback((e) => {
    e.stopPropagation();
    const bar = miniBarRef.current;
    if (!bar) return;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    seekTo(ratio * songDuration);
  }, [seekTo, songDuration]);

  if (!currentSong) return null;

  const thumbnailUrl = `https://img.youtube.com/vi/${currentSong.embedId}/hqdefault.jpg`;

  const handleImgError = (e) => {
    const fallbacks = [
      `https://img.youtube.com/vi/${currentSong.embedId}/mqdefault.jpg`,
      `https://img.youtube.com/vi/${currentSong.embedId}/default.jpg`,
    ];
    const tried = e.target.dataset.fallbackIndex ? parseInt(e.target.dataset.fallbackIndex) : 0;
    if (tried < fallbacks.length) {
      e.target.dataset.fallbackIndex = tried + 1;
      e.target.src = fallbacks[tried];
    }
  };
  const hasNext = playlist.length > 1;
  const hasPrev = playlist.length > 1;

  return (
    <AnimatePresence>
      {currentSong && (
        <motion.div
          key="mini-player"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50"
        >
          {/* Gradient progress bar */}
          <div
            ref={miniBarRef}
            onClick={handleBarClick}
            className="h-1 w-full cursor-pointer group hover:h-2 transition-all"
            style={{ background: 'rgba(139,92,246,0.15)' }}
            role="slider"
            aria-label="Song progress"
            aria-valuenow={Math.round(elapsed)}
            aria-valuemin={0}
            aria-valuemax={songDuration}
          >
            <div
              className="h-full transition-[width] duration-300 ease-linear relative"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(to right, #8b5cf6, #06b6d4)',
              }}
            >
              <div
                className="absolute right-0 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: '#06b6d4' }}
              />
            </div>
          </div>

          {/* Player body */}
          <div
            className="relative overflow-hidden backdrop-blur-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(139,92,246,0.12) 0%, rgba(15,15,25,0.97) 40%, rgba(15,15,25,0.97) 60%, rgba(6,182,212,0.10) 100%)',
              borderTop: '1px solid rgba(139,92,246,0.15)',
            }}
          >
            {/* Subtle ambient glow */}
            <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(139,92,246,0.06)' }} />
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(6,182,212,0.04)' }} />

            <div className="relative max-w-7xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3 flex items-center gap-3 sm:gap-5">
              {/* Clickable area — opens full player */}
              <button
                onClick={() => setShowFullPlayer(true)}
                className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0 text-left"
              >
                {/* Thumbnail */}
                <div className="relative flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden shadow-lg ring-1 ring-white/10">
                  <img
                    src={thumbnailUrl}
                    alt={currentSong.title}
                    className="w-full h-full object-cover"
                    onError={handleImgError}
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 h-[2px]"
                    style={{ background: 'linear-gradient(to right, #8b5cf6, #06b6d4)' }}
                  />
                </div>

                {/* Song info */}
                <div className="min-w-0">
                  <p className="text-sm sm:text-base font-bold text-white truncate">
                    {currentSong.title}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400 truncate">
                    {currentSong.artist}
                  </p>
                </div>

                {/* Expand chevron */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 flex-shrink-0 hidden sm:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="18 15 12 9 6 15" />
                </svg>
              </button>

              {/* Controls */}
              <div className="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0">
                {/* Previous */}
                {hasPrev && (
                  <button
                    onClick={prev}
                    className="h-9 w-9 sm:h-10 sm:w-10 rounded-full border border-white/20 text-white/80 flex items-center justify-center hover:text-white hover:border-white/40 hover:bg-white/10 transition-colors"
                    aria-label="Previous song"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 sm:h-5 sm:w-5">
                      <path d="M6 6h2v12H6V6zm3.5 6l8.5 6V6l-8.5 6z" />
                    </svg>
                  </button>
                )}

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

                {/* Next */}
                {hasNext && (
                  <button
                    onClick={next}
                    className="h-9 w-9 sm:h-10 sm:w-10 rounded-full border border-white/20 text-white/80 flex items-center justify-center hover:text-white hover:border-white/40 hover:bg-white/10 transition-colors"
                    aria-label="Next song"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 sm:h-5 sm:w-5">
                      <path d="M16 18h2V6h-2v12zM6 18l8.5-6L6 6v12z" />
                    </svg>
                  </button>
                )}

                {/* Close */}
                <button
                  onClick={stop}
                  className="h-8 w-8 sm:h-9 sm:w-9 rounded-full border border-white/20 text-white/70 flex items-center justify-center hover:text-white hover:border-white/40 hover:bg-white/10 transition-colors ml-1"
                  aria-label="Close player"
                  title="Close player"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
