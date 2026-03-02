import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { SelfieCapture } from '../components/SelfieCapture';
import { MoodSelector } from '../components/MoodSelector';
import { MOODS } from '../data/moods';

const MotionSection = motion.section;

export function Home() {
  const navigate = useNavigate();
  const heroMood = MOODS[0];

  const goToPlaylist = (mood) => {
    if (!mood) return;
    navigate(`/playlist/${mood.value}`);
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      {/* ─── Hero Section ─── */}
      <MotionSection
        className="bg-[#FFF9E6] py-14 sm:py-20 px-4 sm:px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-gray-900">
            MoodTunes now lets you scan or select.
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
            Let our AI read your expression for an instant &ldquo;{heroMood.name}&rdquo; vibe, or jump straight into a curated mood board.
          </p>

          {/* Two navigation cards */}
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto pt-4">
            <button
              onClick={() => scrollTo('mood-detect')}
              className="text-left rounded-2xl bg-[#2D2D2D] p-5 sm:p-6 text-white shadow-lg hover:bg-[#3a3a3a] transition-colors group"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 group-hover:text-gray-300">Automatic</p>
              <h3 className="text-lg font-black mt-1">Mood-based playlist</h3>
              <p className="text-sm text-gray-400 mt-1">Open the camera only when you tap detect, then jump into a tailored setlist.</p>
            </button>
            <button
              onClick={() => scrollTo('pick-vibe')}
              className="text-left rounded-2xl bg-[#2D2D2D] p-5 sm:p-6 text-white shadow-lg hover:bg-[#3a3a3a] transition-colors group"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 group-hover:text-gray-300">Manual</p>
              <h3 className="text-lg font-black mt-1">Pick a vibe playlist</h3>
              <p className="text-sm text-gray-400 mt-1">Browse hand-picked moods and tap one to explore its playlist hub.</p>
            </button>
          </div>
        </div>
      </MotionSection>

      {/* ─── Mood-based Playlist (Camera Section) ─── */}
      <section id="mood-detect" className="bg-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-left">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900">Mood-based playlist</h2>
            <p className="text-sm sm:text-base text-gray-500 mt-1">
              Open the camera only when you tap detect, then jump into a tailored setlist.
            </p>
          </div>
          <SelfieCapture />
        </div>
      </section>

      {/* ─── Pick a Vibe Section ─── */}
      <section id="pick-vibe" className="bg-[#FFF9E6] py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="text-left">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900">Pick a vibe playlist</h2>
            <p className="text-sm sm:text-base text-gray-500 mt-1">
              Browse hand-picked moods and tap one to explore its playlist hub.
            </p>
          </div>
          <MoodSelector onMoodSelect={goToPlaylist} />
        </div>
      </section>
    </main>
  );
}
