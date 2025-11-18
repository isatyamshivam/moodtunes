import { motion } from 'framer-motion';
import { PlaylistCard } from './PlaylistCard';
import React, { useMemo, useState } from 'react';
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

export function PlaylistGrid({ mood }) {
  const activeMood = mood?.value ? MOODS_BY_VALUE[mood.value] : null;
  const [activeEmbedId, setActiveEmbedId] = useState(null);
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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {tracks.map((song, index) => (
          <MotionDiv key={`track-${song.embedId}-${index}`} variants={itemVariants}>
            <PlaylistCard
              song={song}
              index={index}
              moodColor={mood.value}
              activeEmbedId={activeEmbedId}
              setActiveEmbedId={setActiveEmbedId}
            />
          </MotionDiv>
        ))}
      </MotionDiv>
    </section>
  );
}
