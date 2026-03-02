import React, { useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePlayer } from '../context/PlayerContext';

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export function FullPlayer() {
  const {
    currentSong,
    isPlaying,
    playlist,
    currentIndex,
    showFullPlayer,
    progress,
    elapsed,
    songDuration,
    togglePlay,
    next,
    prev,
    stop,
    seekTo,
    setShowFullPlayer,
  } = usePlayer();

  const progressBarRef = useRef(null);

  const handleProgressClick = useCallback((e) => {
    const bar = progressBarRef.current;
    if (!bar) return;
    const rect = bar.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    seekTo(ratio * songDuration);
  }, [seekTo, songDuration]);

  useEffect(() => {
    if (showFullPlayer) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [showFullPlayer]);

  if (!currentSong) return null;

  const hasMultiple = playlist.length > 1;
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

  return (
    <AnimatePresence>
      {showFullPlayer && (
        <motion.div
          key="full-player"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 35 }}
          className="fixed inset-0 z-[100] flex flex-col overflow-hidden"
          style={{
            background: 'linear-gradient(165deg, #1a0a2e 0%, #0f0f19 35%, #0f0f19 65%, #0a1a24 100%)',
          }}
        >
          {/* Ambient background glow blobs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-[120px] opacity-30" style={{ background: '#8b5cf6' }} />
            <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20" style={{ background: '#06b6d4' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full blur-[100px] opacity-10" style={{ background: '#8b5cf6' }} />
          </div>

          {/* ─── Top bar ─── */}
          <div className="relative flex items-center justify-between px-4 sm:px-8 pt-4 sm:pt-6 pb-2">
            <button
              onClick={() => setShowFullPlayer(false)}
              className="h-10 w-10 rounded-full border border-white/10 text-white/60 flex items-center justify-center hover:text-white hover:border-white/25 transition-colors backdrop-blur-sm"
              aria-label="Minimize player"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            <p
              className="text-xs uppercase tracking-[0.3em] font-semibold bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(to right, #8b5cf6, #06b6d4)' }}
            >
              Now Playing
            </p>

            <button
              onClick={() => { stop(); setShowFullPlayer(false); }}
              className="h-10 w-10 rounded-full border border-white/10 text-white/60 flex items-center justify-center hover:text-white hover:border-white/25 transition-colors backdrop-blur-sm"
              aria-label="Close player"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* ─── Artwork + Info ─── */}
          <div className="relative flex-1 flex flex-col items-center justify-center px-4 sm:px-8 gap-4 sm:gap-5 overflow-y-auto min-h-0 py-2">
            <motion.div
              key={currentSong.embedId}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="relative flex-shrink-0"
            >
              {/* Glow behind artwork */}
              <div className="absolute -inset-8 rounded-3xl blur-3xl opacity-40" style={{ background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)' }} />

              <div
                className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-2xl"
                style={{ border: '1px solid rgba(139,92,246,0.25)' }}
              >
                <img
                  src={thumbnailUrl}
                  alt={currentSong.title}
                  className="w-full h-full object-cover"
                  onError={handleImgError}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                {/* Playing indicator */}
                {isPlaying && (
                  <div className="absolute bottom-4 right-4">
                    <div className="flex items-end gap-[2px] h-4">
                      <span className="w-[3px] bg-white rounded-full animate-[equalize_0.8s_ease-in-out_infinite]" style={{ height: '60%' }} />
                      <span className="w-[3px] bg-white rounded-full animate-[equalize_0.8s_ease-in-out_0.2s_infinite]" style={{ height: '100%' }} />
                      <span className="w-[3px] bg-white rounded-full animate-[equalize_0.8s_ease-in-out_0.4s_infinite]" style={{ height: '40%' }} />
                      <span className="w-[3px] bg-white rounded-full animate-[equalize_0.8s_ease-in-out_0.1s_infinite]" style={{ height: '80%' }} />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Song info */}
            <div className="text-center space-y-1.5 max-w-lg flex-shrink-0">
              <motion.h2
                key={currentSong.embedId + '-title'}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight"
              >
                {currentSong.title}
              </motion.h2>
              <p className="text-base sm:text-lg text-gray-400">
                {currentSong.artist}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold pt-1">
                {currentSong.genre && (
                  <span className="px-3 py-1 rounded-full text-white/70" style={{ background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.2)' }}>
                    {currentSong.genre}
                  </span>
                )}
                {currentSong.vibe && (
                  <span className="px-3 py-1 rounded-full text-white/70" style={{ background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.18)' }}>
                    {currentSong.vibe}
                  </span>
                )}
                {currentSong.releaseYear && (
                  <span className="px-3 py-1 rounded-full bg-white/5 text-white/50 border border-white/10">
                    {currentSong.releaseYear}
                  </span>
                )}
              </div>
              {currentSong.description && (
                <p className="text-sm text-gray-500 pt-1 hidden sm:block">{currentSong.description}</p>
              )}
            </div>
          </div>

          {/* ─── Progress bar ─── */}
          <div className="relative w-full max-w-lg mx-auto px-6 sm:px-8 flex-shrink-0">
            <div className="flex items-center gap-3">
              <span className="text-[11px] tabular-nums text-gray-400 w-10 text-right">
                {formatTime(elapsed)}
              </span>
              <div
                ref={progressBarRef}
                onClick={handleProgressClick}
                className="relative flex-1 h-1.5 rounded-full group cursor-pointer"
                style={{ background: 'rgba(255,255,255,0.08)' }}
                role="slider"
                aria-label="Song progress"
                aria-valuenow={Math.round(elapsed)}
                aria-valuemin={0}
                aria-valuemax={songDuration}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowRight') seekTo(Math.min(elapsed + 5, songDuration));
                  else if (e.key === 'ArrowLeft') seekTo(Math.max(elapsed - 5, 0));
                }}
              >
                <div
                  className="h-full rounded-full transition-[width] duration-300 ease-linear"
                  style={{
                    width: `${progress}%`,
                    background: 'linear-gradient(to right, #8b5cf6, #06b6d4)',
                  }}
                />
                <div
                  className="absolute top-1/2 -translate-y-1/2 h-3.5 w-3.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ left: `calc(${progress}% - 7px)`, background: '#06b6d4' }}
                />
              </div>
              <span className="text-[11px] tabular-nums text-gray-400 w-10">
                {formatTime(songDuration)}
              </span>
            </div>
          </div>

          {/* ─── Controls ─── */}
          <div className="relative px-4 sm:px-8 pb-4 sm:pb-8 pt-3 flex-shrink-0">
            <div className="flex items-center justify-center gap-4 sm:gap-6">
              {hasMultiple && (
                <button
                  onClick={prev}
                  className="h-12 w-12 rounded-full border border-white/10 text-white/60 flex items-center justify-center hover:text-white hover:border-white/25 transition-colors"
                  aria-label="Previous song"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                    <path d="M6 6h2v12H6V6zm3.5 6l8.5 6V6l-8.5 6z" />
                  </svg>
                </button>
              )}

              <button
                onClick={togglePlay}
                className="h-16 w-16 sm:h-18 sm:w-18 rounded-full bg-white text-gray-900 flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-transform"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 sm:h-8 sm:w-8">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 sm:h-8 sm:w-8 ml-1">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>

              {hasMultiple && (
                <button
                  onClick={next}
                  className="h-12 w-12 rounded-full border border-white/10 text-white/60 flex items-center justify-center hover:text-white hover:border-white/25 transition-colors"
                  aria-label="Next song"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                    <path d="M16 18h2V6h-2v12zM6 18l8.5-6L6 6v12z" />
                  </svg>
                </button>
              )}
            </div>

            <div className="flex items-center justify-center gap-4 mt-3">
              {playlist.length > 1 && (
                <p className="text-xs text-gray-500">
                  {currentIndex + 1} of {playlist.length}
                </p>
              )}
              <button
                onClick={() =>
                  window.open(
                    `https://www.youtube.com/watch?v=${currentSong.embedId}`,
                    '_blank',
                    'noopener'
                  )
                }
                className="text-xs text-gray-500 hover:text-white transition-colors flex items-center gap-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Watch on YouTube
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
