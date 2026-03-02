import { motion } from 'framer-motion';
import React, { useState } from 'react';

const MotionCard = motion.div;
const MotionButton = motion.button;

const moodAccentColors = {
  happy: 'bg-purple-400',
  sad: 'bg-slate-400',
  excited: 'bg-violet-400',
  relaxed: 'bg-indigo-300',
  neutral: 'bg-gray-400',
};

export function PlaylistCard({ song, index, moodColor, activeEmbedId, setActiveEmbedId }) {
  const [hasError, setHasError] = useState(false);

  const youtubeUrl = `https://www.youtube.com/watch?v=${song.embedId}`;
  const thumbnailUrl = `https://img.youtube.com/vi/${song.embedId}/hqdefault.jpg`;

  const handlePlay = () => {
    setHasError(false);
    setActiveEmbedId(song.embedId);
  };

  const isActive = activeEmbedId === song.embedId;

  return (
    <MotionCard
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
    >
      <div className={`h-1 w-full ${moodAccentColors[moodColor] || 'bg-gray-300'}`}></div>

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
            className="w-full h-full"
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
            <div className="absolute inset-0 flex flex-col justify-between p-4 text-left">
              <p className="text-xs uppercase tracking-widest text-white/80">YouTube Preview</p>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-14 w-14 rounded-full bg-white/90 text-gray-900 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span className="sr-only">Play {song.title}</span>
              </div>
            </div>
          </button>
        )}

        {hasError && isActive && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gray-900/95 text-white text-center px-4">
            <p className="text-sm font-semibold">This video can&apos;t play inline</p>
            <p className="text-xs text-white/70">It might be restricted from embedding. You can still open it on YouTube.</p>
            <MotionButton
              onClick={() => window.open(youtubeUrl, '_blank', 'noopener')}
              className="bg-white text-gray-900 rounded-full px-4 py-2 text-xs font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Open YouTube
            </MotionButton>
          </div>
        )}
      </div>

      <div className="p-5 sm:p-6 flex flex-col gap-3">
        <div>
          <p className="text-xs uppercase tracking-widest text-gray-400">featured track</p>
          <h3 className="font-black text-xl sm:text-2xl text-gray-900">{song.title}</h3>
          <p className="text-sm sm:text-base text-gray-500">{song.artist}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
          {song.genre && <span className="px-3 py-1 rounded-full bg-gray-100 border border-gray-200 text-gray-600">{song.genre}</span>}
          {song.vibe && <span className="px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-gray-600">{song.vibe}</span>}
          {song.releaseYear && <span className="px-3 py-1 rounded-full border border-gray-200 text-gray-500">{song.releaseYear}</span>}
        </div>

        {song.description && (
          <p className="text-sm text-gray-500 leading-relaxed">
            {song.description}
          </p>
        )}
      </div>
    </MotionCard>
  );
}