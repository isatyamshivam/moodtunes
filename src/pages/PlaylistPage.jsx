import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MOODS_BY_VALUE, MOOD_PLAYLISTS } from '../data/moods';

const MotionSection = motion.section;
const MotionDiv = motion.div;

// Mood-specific accent colors for playlist cards
const moodCardStyles = {
  happy: 'border-purple-300 hover:border-purple-400',
  excited: 'border-violet-300 hover:border-violet-400',
  relaxed: 'border-indigo-300 hover:border-indigo-400',
  sad: 'border-slate-300 hover:border-slate-400',
  neutral: 'border-gray-300 hover:border-gray-400',
};

const moodTagColors = {
  happy: 'bg-purple-100 text-purple-700',
  excited: 'bg-violet-100 text-violet-700',
  relaxed: 'bg-indigo-100 text-indigo-700',
  sad: 'bg-slate-100 text-slate-700',
  neutral: 'bg-gray-100 text-gray-700',
};

export function PlaylistPage() {
  const { moodId } = useParams();
  const navigate = useNavigate();
  const mood = moodId ? MOODS_BY_VALUE[moodId] : null;
  const playlists = moodId ? MOOD_PLAYLISTS[moodId] || [] : [];

  if (!mood) {
    return (
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center text-gray-900">
        <div className="rounded-2xl bg-white border border-gray-200 p-10 shadow-sm">
          <h1 className="text-3xl font-black mb-4">Mood not found</h1>
          <p className="text-gray-500 mb-6">Pick a mood from the home page or try detecting again.</p>
          <button
            className="px-6 py-3 rounded-full bg-[#2D2D2D] text-white font-semibold hover:bg-[#444] transition-colors"
            onClick={() => navigate('/')}
          >
            Back to home
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-12 space-y-10">
      {/* ─── Mood Header ─── */}
      <MotionSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-2xl border border-gray-200 bg-[#FFF9E6] p-8 sm:p-12 shadow-sm"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-72 h-72 bg-yellow-200/30 blur-[120px] -top-24 -right-10" />
          <div className="absolute w-64 h-64 bg-yellow-300/20 blur-[120px] bottom-0 left-4" />
        </div>

        <div className="relative flex flex-col items-center text-center gap-4">
          <p className="uppercase text-xs tracking-[0.5em] text-gray-500">Choose a playlist</p>
          <div className="flex items-center gap-4">
            <span className="text-4xl sm:text-5xl drop-shadow">{mood.emoji}</span>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight text-gray-900">
              {mood.name}
            </h1>
          </div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
            {mood.tagline}
          </p>
          <button
            onClick={() => navigate('/')}
            className="mt-2 relative inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 sm:px-8 py-3 text-base font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50"
          >
            <span>Try another mood</span>
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-white text-sm">
              →
            </span>
          </button>
        </div>
      </MotionSection>

      {/* ─── Playlist Selection ─── */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
            Pick a playlist
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-lg mx-auto">
            Choose from {playlists.length} curated playlists for your <span className="font-semibold">{mood.name}</span> mood.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {playlists.map((playlist, index) => {
            const firstSong = playlist.songs[0];
            const thumbnailUrl = firstSong
              ? `https://img.youtube.com/vi/${firstSong.embedId}/hqdefault.jpg`
              : null;

            return (
              <MotionDiv
                key={playlist.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ y: -6 }}
              >
                <button
                  onClick={() => navigate(`/playlist/${moodId}/${playlist.id}`)}
                  className={`w-full text-left rounded-2xl border-2 ${moodCardStyles[mood.value] || 'border-gray-300'} bg-white overflow-hidden shadow-sm hover:shadow-lg transition-all group`}
                >
                  {/* Playlist thumbnail */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                    {thumbnailUrl && (
                      <img
                        src={thumbnailUrl}
                        alt={playlist.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4">
                      <h3 className="text-lg sm:text-xl font-black text-white leading-tight drop-shadow-sm">
                        {playlist.name}
                      </h3>
                    </div>
                    {/* Song count badge */}
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                      {playlist.songs.length} songs
                    </div>
                  </div>

                  {/* Playlist info */}
                  <div className="p-4 space-y-3">
                    <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
                      {playlist.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {[...new Set(playlist.songs.slice(0, 4).map(s => s.genre))].slice(0, 3).map(genre => (
                        <span
                          key={genre}
                          className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${moodTagColors[mood.value] || 'bg-gray-100 text-gray-600'}`}
                        >
                          {genre}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors flex items-center gap-1.5">
                      Play this playlist
                      <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                    </p>
                  </div>
                </button>
              </MotionDiv>
            );
          })}
        </div>
      </section>
    </main>
  );
}
