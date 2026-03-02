import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SongList } from '../components/SongList';
import { MOODS_BY_VALUE, MOOD_PLAYLISTS } from '../data/moods';

const MotionSection = motion.section;

export function SongsPage() {
  const { moodId, playlistId } = useParams();
  const navigate = useNavigate();
  const mood = moodId ? MOODS_BY_VALUE[moodId] : null;
  const playlists = moodId ? MOOD_PLAYLISTS[moodId] || [] : [];
  const playlist = playlists.find((p) => p.id === playlistId) || null;

  if (!mood || !playlist) {
    return (
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center text-gray-900">
        <div className="rounded-2xl bg-white border border-gray-200 p-10 shadow-sm">
          <h1 className="text-3xl font-black mb-4">Playlist not found</h1>
          <p className="text-gray-500 mb-6">
            This playlist doesn&apos;t exist. Go back and pick one.
          </p>
          <button
            className="px-6 py-3 rounded-full bg-[#2D2D2D] text-white font-semibold hover:bg-[#444] transition-colors"
            onClick={() => navigate(mood ? `/playlist/${mood.value}` : '/')}
          >
            {mood ? 'Browse playlists' : 'Back to home'}
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-12 space-y-10">
      {/* ─── Header ─── */}
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
          <p className="uppercase text-xs tracking-[0.5em] text-gray-500">Now playing</p>
          <div className="flex items-center gap-4">
            <span className="text-4xl sm:text-5xl drop-shadow">{mood.emoji}</span>
            <h1 className="text-3xl sm:text-4xl font-black leading-tight text-gray-900">
              {playlist.name}
            </h1>
          </div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
            {playlist.description}
          </p>
          <p className="text-sm text-gray-500">{playlist.songs.length} songs</p>
          <div className="mt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => navigate(`/playlist/${moodId}`)}
              className="relative inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 sm:px-8 py-3 text-base font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-white text-sm">
                ←
              </span>
              <span>All playlists</span>
            </button>
            <button
              onClick={() => navigate('/')}
              className="relative inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 sm:px-8 py-3 text-base font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50"
            >
              <span>Try another mood</span>
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-900 text-white text-sm">
                →
              </span>
            </button>
          </div>
        </div>
      </MotionSection>

      {/* ─── Songs List ─── */}
      <SongList mood={mood} songs={playlist.songs} />
    </main>
  );
}
