import { motion } from 'framer-motion';
import { useCallback } from 'react';
import React from 'react';
const moods = [
  { emoji: '😊', name: 'Happy', color: 'from-yellow-300 to-amber-400' },
  { emoji: '😢', name: 'Sad', color: 'from-blue-500 to-blue-700' },
  { emoji: '😠', name: 'Angry', color: 'from-red-500 to-red-600' },
  { emoji: '😌', name: 'Chill', color: 'from-green-400 to-teal-500' },
  { emoji: '😎', name: 'Energetic', color: 'from-orange-400 to-orange-600' },
];

export function MoodSelector({ onMoodSelect }) {
  const handleMoodClick = useCallback((mood) => {
    onMoodSelect(mood);
  }, [onMoodSelect]);

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {moods.map((mood) => (
          <motion.button
            key={mood.name}
            onClick={() => handleMoodClick(mood)}
            className={`bg-gradient-to-br ${mood.color} rounded-xl p-6 flex flex-col items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-5xl">{mood.emoji}</span>
            <span className="font-medium text-lg text-black">{mood.name}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
