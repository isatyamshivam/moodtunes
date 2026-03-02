import { motion } from 'framer-motion';
import { PlaylistCard } from './PlaylistCard';
import React from 'react';

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

export function PlaylistGrid({ mood, songs = [] }) {
  if (!mood || songs.length === 0) {
    return null;
  }

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
      <MotionDiv 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {songs.map((song, index) => (
          <MotionDiv key={`track-${song.embedId}-${index}`} variants={itemVariants}>
            <PlaylistCard
              song={song}
              index={index}
              moodColor={mood.value}
              allSongs={songs}
            />
          </MotionDiv>
        ))}
      </MotionDiv>
    </section>
  );
}
