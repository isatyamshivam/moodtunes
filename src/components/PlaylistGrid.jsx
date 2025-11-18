import { motion } from 'framer-motion';
import { PlaylistCard } from './PlaylistCard';
import React, { useMemo } from 'react';
import { MOOD_PLAYLISTS, MOODS_BY_VALUE } from '../data/moods';

const MotionDiv = motion.div;

// Animation variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export function PlaylistGrid({ mood }) {
  const activeMood = mood?.value ? MOODS_BY_VALUE[mood.value] : null;
  const tracks = useMemo(() => {
    if (!mood?.value) return [];
    return MOOD_PLAYLISTS[mood.value] || [];
  }, [mood]);

  if (!mood || !activeMood) {
    return null;
  }

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
      <MotionDiv
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        className={`rounded-3xl p-6 sm:p-10 mb-8 sm:mb-12 bg-gradient-to-br ${activeMood.gradient} text-[#1f1b2a] shadow-2xl border border-white/50 backdrop-blur`}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-[#6b6788]">Mood detected</p>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-3xl sm:text-4xl">{activeMood.emoji}</span>
              <div>
                <h2 className="text-3xl sm:text-4xl font-black drop-shadow-lg text-[#161227]">
                  {activeMood.name}
                </h2>
                <p className="text-base sm:text-lg text-[#3d3656] max-w-xl">
                  {activeMood.tagline}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            {activeMood.spotlightTracks.map((track) => (
              <div key={track} className={`px-4 py-2 rounded-full text-sm font-semibold ${activeMood.accent}`}>
                {track}
              </div>
            ))}
          </div>
        </div>
      </MotionDiv>

      <MotionDiv 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {tracks.map((song, index) => (
          <MotionDiv key={`track-${song.embedId}-${index}`} variants={itemVariants}>
            <PlaylistCard song={song} index={index} moodColor={mood.value} />
          </MotionDiv>
        ))}
      </MotionDiv>
    </section>
  );
}
