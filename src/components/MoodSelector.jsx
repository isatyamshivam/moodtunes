import { motion } from 'framer-motion';
import { useCallback } from 'react';
import React from 'react';
import { MOODS } from '../data/moods';

const MotionButton = motion.button;

export function MoodSelector({ onMoodSelect }) {
  const handleMoodClick = useCallback((mood) => {
    onMoodSelect(mood);
  }, [onMoodSelect]);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {MOODS.map((mood) => (
          <MotionButton
            key={mood.value}
            onClick={() => handleMoodClick(mood)}
            className={`group bg-gradient-to-br ${mood.gradient} rounded-3xl p-6 sm:p-8 text-left shadow-[0_25px_50px_rgba(34,27,51,0.25)] border border-white/40 transition-all text-[#211b35]`}
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-4">
              <span className="text-4xl sm:text-5xl drop-shadow-lg">{mood.emoji}</span>
              <div>
                <p className="uppercase tracking-[0.4em] text-xs text-[#6c6588]">mood</p>
                <h3 className="text-2xl sm:text-3xl font-black text-[#1c1730] drop-shadow">{mood.name}</h3>
              </div>
            </div>
            <p className="mt-3 text-sm sm:text-base text-[#3e3658] max-w-xs">{mood.tagline}</p>
          </MotionButton>
        ))}
      </div>
    </div>
  );
}
