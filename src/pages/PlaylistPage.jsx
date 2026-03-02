import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PlaylistGrid } from '../components/PlaylistGrid';
import { MOODS_BY_VALUE } from '../data/moods';

const MotionSection = motion.section;

export function PlaylistPage() {
  const { moodId } = useParams();
  const navigate = useNavigate();
  const mood = moodId ? MOODS_BY_VALUE[moodId] : null;

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

        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-3 text-gray-900">
            <p className="uppercase text-xs tracking-[0.5em] text-gray-500">Now playing</p>
            <div className="flex items-center gap-4">
              <span className="text-4xl sm:text-5xl drop-shadow">{mood.emoji}</span>
              <div>
                <h1 className="text-4xl sm:text-5xl font-black leading-tight text-gray-900">
                  {mood.name}
                </h1>
                <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
                  {mood.tagline}
                </p>
              </div>
            </div>
          </div>

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
  </MotionSection>

      <PlaylistGrid mood={mood} />
    </main>
  );
}
