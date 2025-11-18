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
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center text-[#1f1b2a]">
        <div className="rounded-3xl bg-white/60 border border-white/40 p-10 backdrop-blur">
          <h1 className="text-3xl font-black mb-4">Mood not found</h1>
          <p className="text-[#4a4860] mb-6">Pick a mood from the home page or try detecting again.</p>
          <button
            className="px-6 py-3 rounded-full bg-[#4f4c59] text-white font-semibold"
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
        className="relative overflow-hidden rounded-[32px] border border-white/40 bg-gradient-to-r from-[#ede8ff] via-[#d3cafc] to-[#b4a6f6] p-8 sm:p-12 shadow-[0_35px_70px_rgba(31,21,60,0.35)]"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-72 h-72 bg-white/30 blur-[120px] -top-24 -right-10" />
          <div className="absolute w-64 h-64 bg-[#c8b9ff]/40 blur-[120px] bottom-0 left-4" />
        </div>

        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-3 text-[#1f1b2c]">
            <p className="uppercase text-xs tracking-[0.5em] text-[#7c74a5]">Now playing</p>
            <div className="flex items-center gap-4">
              <span className="text-4xl sm:text-5xl drop-shadow">{mood.emoji}</span>
              <div>
                <h1 className="text-4xl sm:text-5xl font-black leading-tight drop-shadow text-[#1b1635]">
                  {mood.name}
                </h1>
                <p className="text-base sm:text-lg text-[#3b3457] max-w-2xl">
                  {mood.tagline}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={() => navigate('/')}
            className="relative inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/20 px-6 sm:px-8 py-3 text-base font-semibold text-[#1f1b2c] backdrop-blur-xl shadow-lg shadow-[#1b0f36]/40 transition hover:bg-white/30"
          >
            <span>Try another mood</span>
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#1f1b2c] text-white text-sm">
              →
            </span>
            <span className="absolute inset-0 rounded-full border border-white/50 opacity-40" aria-hidden="true"></span>
          </button>
        </div>
  </MotionSection>

      <PlaylistGrid mood={mood} />
    </main>
  );
}
