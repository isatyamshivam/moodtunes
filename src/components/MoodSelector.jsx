import { motion } from 'framer-motion';
import { useCallback } from 'react';
import React from 'react';
import { MOODS } from '../data/moods';

const MotionDiv = motion.div;

// Border color per mood
const moodBorderColors = {
  happy: 'border-purple-300',
  excited: 'border-violet-400',
  relaxed: 'border-indigo-300',
  sad: 'border-slate-400',
  neutral: 'border-gray-400',
};

export function MoodSelector({ onMoodSelect }) {
  const handleMoodClick = useCallback((mood) => {
    onMoodSelect(mood);
  }, [onMoodSelect]);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {MOODS.map((mood, i) => (
          <MotionDiv
            key={mood.value}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
          >
            <button
              onClick={() => handleMoodClick(mood)}
              className={`w-full text-left rounded-2xl border-2 ${moodBorderColors[mood.value] || 'border-gray-300'} bg-white overflow-hidden shadow-sm hover:shadow-md transition-all group`}
            >
              {/* Emoji area */}
              <div className="bg-[#e8e4ff] flex items-center justify-center py-8">
                <span className="text-7xl drop-shadow-md group-hover:scale-110 transition-transform duration-300">{mood.emoji}</span>
              </div>
              {/* Info area */}
              <div className="p-4">
                <h3 className="text-lg font-black text-gray-900">{mood.name}</h3>
                <p className="text-sm text-gray-500 mt-1 line-clamp-2">{mood.tagline}</p>
                <p className="mt-3 text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                  Browse the playlist →
                </p>
              </div>
            </button>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
}
