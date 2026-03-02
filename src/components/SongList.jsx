import React from 'react';
import { motion } from 'framer-motion';
import { usePlayer } from '../context/PlayerContext';

const MotionRow = motion.div;

const moodAccentColors = {
  happy: 'bg-purple-400',
  sad: 'bg-slate-400',
  excited: 'bg-violet-400',
  relaxed: 'bg-indigo-300',
  neutral: 'bg-gray-400',
};

const moodTextColors = {
  happy: 'text-purple-500',
  sad: 'text-slate-500',
  excited: 'text-violet-500',
  relaxed: 'text-indigo-500',
  neutral: 'text-gray-500',
};

const moodHoverBg = {
  happy: 'hover:bg-purple-50',
  sad: 'hover:bg-slate-50',
  excited: 'hover:bg-violet-50',
  relaxed: 'hover:bg-indigo-50',
  neutral: 'hover:bg-gray-50',
};

export function SongList({ mood, songs = [] }) {
  const { play, currentSong, isPlaying } = usePlayer();

  if (!mood || songs.length === 0) return null;

  return (
    <section className="w-full max-w-4xl mx-auto">
      {/* Column headers */}
      <div className="grid grid-cols-[2.5rem_1fr_minmax(0,1fr)_4rem] sm:grid-cols-[2.5rem_1fr_minmax(0,1fr)_6rem_4rem] gap-3 px-4 sm:px-6 py-2 text-xs uppercase tracking-wider text-gray-400 border-b border-gray-200">
        <span className="text-center">#</span>
        <span>Title</span>
        <span className="hidden sm:block">Genre</span>
        <span className="hidden sm:block text-center">Year</span>
        <span className="text-center">
          {/* clock icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        </span>
      </div>

      {/* Song rows */}
      <div className="divide-y divide-gray-100">
        {songs.map((song, index) => {
          const isCurrentSong = currentSong?.embedId === song.embedId;
          const thumbnailUrl = `https://img.youtube.com/vi/${song.embedId}/hqdefault.jpg`;

          return (
            <MotionRow
              key={`song-${song.embedId}-${index}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: index * 0.04 }}
              onClick={() => play(song, songs, mood.value)}
              className={`group grid grid-cols-[2.5rem_1fr_minmax(0,1fr)_4rem] sm:grid-cols-[2.5rem_1fr_minmax(0,1fr)_6rem_4rem] gap-3 items-center px-4 sm:px-6 py-3 cursor-pointer transition-colors rounded-lg ${
                isCurrentSong
                  ? 'bg-gray-50'
                  : `${moodHoverBg[mood.value] || 'hover:bg-gray-50'}`
              }`}
            >
              {/* Number / play indicator */}
              <div className="flex items-center justify-center">
                {isCurrentSong && isPlaying ? (
                  <div className="flex items-end gap-[2px] h-4">
                    <span className={`w-[2.5px] ${moodAccentColors[mood.value] || 'bg-gray-400'} rounded-full animate-[equalize_0.8s_ease-in-out_infinite]`} style={{ height: '60%' }} />
                    <span className={`w-[2.5px] ${moodAccentColors[mood.value] || 'bg-gray-400'} rounded-full animate-[equalize_0.8s_ease-in-out_0.2s_infinite]`} style={{ height: '100%' }} />
                    <span className={`w-[2.5px] ${moodAccentColors[mood.value] || 'bg-gray-400'} rounded-full animate-[equalize_0.8s_ease-in-out_0.4s_infinite]`} style={{ height: '40%' }} />
                  </div>
                ) : (
                  <>
                    <span className={`text-sm font-medium group-hover:hidden ${isCurrentSong ? (moodTextColors[mood.value] || 'text-gray-500') : 'text-gray-400'}`}>
                      {index + 1}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-gray-900 hidden group-hover:block">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </>
                )}
              </div>

              {/* Thumbnail + Title + Artist */}
              <div className="flex items-center gap-3 min-w-0">
                <div className="relative flex-shrink-0 w-10 h-10 rounded-md overflow-hidden shadow-sm">
                  <img
                    src={thumbnailUrl}
                    alt={song.title}
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
                  {isCurrentSong && (
                    <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${moodAccentColors[mood.value] || 'bg-gray-400'}`} />
                  )}
                </div>
                <div className="min-w-0">
                  <p className={`text-sm font-semibold truncate ${isCurrentSong ? (moodTextColors[mood.value] || 'text-gray-900') : 'text-gray-900'}`}>
                    {song.title}
                  </p>
                  <p className="text-xs text-gray-500 truncate">{song.artist}</p>
                </div>
              </div>

              {/* Genre / vibe */}
              <div className="hidden sm:flex items-center gap-2 min-w-0">
                {song.genre && (
                  <span className="px-2.5 py-0.5 rounded-full bg-gray-100 text-[11px] font-medium text-gray-600 truncate">
                    {song.genre}
                  </span>
                )}
                {song.vibe && (
                  <span className="px-2.5 py-0.5 rounded-full bg-gray-50 text-[11px] font-medium text-gray-500 truncate">
                    {song.vibe}
                  </span>
                )}
              </div>

              {/* Year */}
              <span className="hidden sm:block text-xs text-gray-400 text-center">
                {song.releaseYear || '—'}
              </span>

              {/* Duration */}
              <span className="text-xs text-gray-400 text-center">
                {song.duration ? `${Math.floor(song.duration / 60)}:${String(song.duration % 60).padStart(2, '0')}` : '—'}
              </span>
            </MotionRow>
          );
        })}
      </div>
    </section>
  );
}
