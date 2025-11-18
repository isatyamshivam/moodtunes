import { motion } from 'framer-motion';
import React, { useState } from 'react';

const MotionCard = motion.div;
const MotionButton = motion.button;

export function PlaylistCard({ song, index, moodColor, activeEmbedId, setActiveEmbedId }) {
  const [hasError, setHasError] = useState(false);

  const moodGradients = {
    happy: 'from-[#F4EFFF] via-[#D9CEFF] to-[#BFAFF3]',
    sad: 'from-[#D7DBFF] via-[#A4A7C6] to-[#6B667F]',
    excited: 'from-[#E8DFFF] via-[#C1B4FF] to-[#9E93D8]',
    relaxed: 'from-[#F2F6FF] via-[#CED8FF] to-[#A8B4D4]',
    neutral: 'from-[#E9E9F4] via-[#BABCCE] to-[#5D5B73]',
  };

  const youtubeUrl = `https://www.youtube.com/watch?v=${song.embedId}`;
  const thumbnailUrl = `https://img.youtube.com/vi/${song.embedId}/hqdefault.jpg`;

  const handlePlay = () => {
    setHasError(false);
    setActiveEmbedId(song.embedId);
  };

  const isActive = activeEmbedId === song.embedId;

  return (
    <MotionCard
      className="bg-white/90 dark:bg-[#1f1a2c]/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(34,27,51,0.35)] border border-white/20 dark:border-white/10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      whileHover={{ y: -6, scale: 1.01 }}
    >
      <div className={`h-1 w-full bg-gradient-to-r ${moodGradients[moodColor] || 'from-purple-400 to-blue-500'}`}></div>

      <div className="relative aspect-video group">
        {isActive && !hasError ? (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${song.embedId}?autoplay=1&rel=0`}
            title={song.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-b-3xl"
            onError={() => setHasError(true)}
          />
        ) : (
          <button
            type="button"
            className="relative w-full h-full cursor-pointer"
            onClick={handlePlay}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                handlePlay();
              }
            }}
          >
            <img
              src={thumbnailUrl}
              alt={`Thumbnail for ${song.title}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
            <div className="absolute inset-0 flex flex-col justify-between p-4 text-left">
              <p className="text-xs uppercase tracking-[0.4em] text-white/80">YouTube Preview</p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-16 w-16 rounded-full bg-white/90 text-[#1f1a2c] flex items-center justify-center shadow-xl shadow-black/50 transition-transform duration-300 group-hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-7 w-7"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span className="sr-only">Play {song.title}</span>
              </div>
            </div>
          </button>
        )}

        {hasError && isActive && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#120d1f]/95 text-white text-center px-4 rounded-b-3xl">
            <p className="text-sm font-semibold">This video can't play inline</p>
            <p className="text-xs text-white/70">It might be restricted from embedding. You can still open it on YouTube.</p>
            <MotionButton
              onClick={() => window.open(youtubeUrl, '_blank', 'noopener')}
              className="bg-white text-[#1f1a2c] rounded-full px-4 py-2 text-xs font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Open YouTube
            </MotionButton>
          </div>
        )}
      </div>

      <div className="p-5 sm:p-6 flex flex-col gap-3 bg-white/95 dark:bg-[#120d1f]">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[#7c7899] dark:text-[#b0a8d6]">featured track</p>
          <h3 className="font-black text-xl sm:text-2xl text-[#1d182d] dark:text-white">{song.title}</h3>
          <p className="text-sm sm:text-base text-[#3b3551] dark:text-[#d4cff6]">{song.artist}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#514d65] dark:text-[#c1b5f7]">
          {song.genre && <span className="px-3 py-1 rounded-full bg-white/80 border border-white/60 text-[#312a46] dark:bg-white/10 dark:text-white/90 dark:border-white/20">{song.genre}</span>}
          {song.vibe && <span className="px-3 py-1 rounded-full bg-[#f3f0ff]/90 border border-white/60 text-[#3c3650] dark:bg-white/5 dark:text-white/80 dark:border-white/20">{song.vibe}</span>}
          {song.releaseYear && <span className="px-3 py-1 rounded-full border border-white/60 text-[#353145] dark:text-white/80 dark:border-white/20">{song.releaseYear}</span>}
        </div>

        {song.description && (
          <p className="text-sm text-[#4d4763] dark:text-[#d4cff5] leading-relaxed">
            {song.description}
          </p>
        )}
      </div>
    </MotionCard>
  );
}