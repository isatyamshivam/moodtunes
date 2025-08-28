import { motion } from 'framer-motion';
import { useCallback } from 'react';
import React from 'react';

const moods = [
  { emoji: '😊', name: 'Happy', color: 'from-yellow-300 to-amber-400', value: 'happy' },
  { emoji: '😢', name: 'Sad', color: 'from-blue-500 to-blue-700', value: 'sad' },
  { emoji: '🤩', name: 'Excited', color: 'from-purple-400 to-purple-600', value: 'excited' },
  { emoji: '😌', name: 'Relaxed', color: 'from-green-400 to-teal-500', value: 'relaxed' },
  { emoji: '�', name: 'Neutral', color: 'from-gray-300 to-gray-500', value: 'neutral' },
];

export function MoodSelector({ onMoodSelect }) {
  const handleMoodClick = useCallback((mood) => {
    onMoodSelect(mood);
  }, [onMoodSelect]);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
        {moods.map((mood) => (
          <motion.button
            key={mood.name}
            onClick={() => handleMoodClick(mood)}
            className={`bg-gradient-to-br ${mood.color} rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center gap-2 sm:gap-3 shadow-lg hover:shadow-xl transition-all`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-4xl sm:text-5xl">{mood.emoji}</span>
            <span className="font-medium text-sm sm:text-lg text-black">{mood.name}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
