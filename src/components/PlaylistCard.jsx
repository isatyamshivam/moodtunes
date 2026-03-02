import { motion } from 'framer-motion';
import React from 'react';
import { usePlayer } from '../context/PlayerContext';

const MotionCard = motion.div;

const moodAccentColors = {
  happy: 'bg-purple-400',
  sad: 'bg-slate-400',
  excited: 'bg-violet-400',
  relaxed: 'bg-indigo-300',
  neutral: 'bg-gray-400',
};

const moodRingColors = {
  happy: 'ring-purple-400',
  sad: 'ring-slate-400',
  excited: 'ring-violet-400',
  relaxed: 'ring-indigo-300',
  neutral: 'ring-gray-400',
};

export function PlaylistCard({ song, index, moodColor, allSongs }) {
  const { play, currentSong, isPlaying } = usePlayer();

  const thumbnailUrl = `https://img.youtube.com/vi/${song.embedId}/hqdefault.jpg`;
  const isCurrentSong = currentSong?.embedId === song.embedId;

  const handlePlay = () => {
    play(song, allSongs, moodColor);
  };

  return (
    <MotionCard
      className={`bg-white rounded-2xl overflow-hidden shadow-sm border transition-shadow cursor-pointer ${
        isCurrentSong
          ? `ring-2 ${moodRingColors[moodColor] || 'ring-gray-400'} border-transparent shadow-md`
          : 'border-gray-200 hover:shadow-md'
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      onClick={handlePlay}
    >
      <div className={`h-1 w-full ${moodAccentColors[moodColor] || 'bg-gray-300'}`}></div>

      <div className="relative aspect-video group">
        <img
          src={thumbnailUrl}
          alt={`Thumbnail for ${song.title}`}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            const fb = [
              `https://img.youtube.com/vi/${song.embedId}/mqdefault.jpg`,
              `https://img.youtube.com/vi/${song.embedId}/default.jpg`,
            ];
            const tried = e.target.dataset.fallbackIndex ? parseInt(e.target.dataset.fallbackIndex) : 0;
            if (tried < fb.length) {
              e.target.dataset.fallbackIndex = tried + 1;
              e.target.src = fb[tried];
            }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

        {/* Playing indicator or play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          {isCurrentSong && isPlaying ? (
            <div className="h-14 w-14 rounded-full bg-white/90 text-gray-900 flex items-center justify-center shadow-lg">
              {/* Animated equalizer bars */}
              <div className="flex items-end gap-[3px] h-5">
                <span className="w-[3px] bg-gray-900 rounded-full animate-[equalize_0.8s_ease-in-out_infinite]" style={{ height: '60%' }} />
                <span className="w-[3px] bg-gray-900 rounded-full animate-[equalize_0.8s_ease-in-out_0.2s_infinite]" style={{ height: '100%' }} />
                <span className="w-[3px] bg-gray-900 rounded-full animate-[equalize_0.8s_ease-in-out_0.4s_infinite]" style={{ height: '40%' }} />
                <span className="w-[3px] bg-gray-900 rounded-full animate-[equalize_0.8s_ease-in-out_0.1s_infinite]" style={{ height: '80%' }} />
              </div>
            </div>
          ) : (
            <div className="h-14 w-14 rounded-full bg-white/90 text-gray-900 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
              <span className="sr-only">Play {song.title}</span>
            </div>
          )}
        </div>

        {isCurrentSong && (
          <div className="absolute top-3 left-3">
            <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white ${moodAccentColors[moodColor] || 'bg-gray-400'}`}>
              Now Playing
            </span>
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