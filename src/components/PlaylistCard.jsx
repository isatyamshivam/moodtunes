import { motion } from 'framer-motion';
import React from 'react';

const MotionCard = motion.div;
const MotionButton = motion.button;

export function PlaylistCard({ song, index, moodColor }) {
  const moodGradients = {
    happy: 'from-[#F4EFFF] via-[#D9CEFF] to-[#BFAFF3]',
    sad: 'from-[#D7DBFF] via-[#A4A7C6] to-[#6B667F]',
    excited: 'from-[#E8DFFF] via-[#C1B4FF] to-[#9E93D8]',
    relaxed: 'from-[#F2F6FF] via-[#CED8FF] to-[#A8B4D4]',
    neutral: 'from-[#E9E9F4] via-[#BABCCE] to-[#5D5B73]',
  };

  const youtubeUrl = `https://www.youtube.com/watch?v=${song.embedId}`;

  return (
    <MotionCard
      className="bg-white/70 dark:bg-[#2a2439]/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(34,27,51,0.35)] border border-white/30"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      whileHover={{ y: -6, scale: 1.01 }}
    >
      <div className={`h-1 w-full bg-gradient-to-r ${moodGradients[moodColor] || 'from-purple-400 to-blue-500'}`}></div>

      <div className="aspect-video relative">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${song.embedId}`}
          title={song.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-b-3xl"
        />
        <MotionButton
          onClick={() => window.open(youtubeUrl, '_blank', 'noopener')}
          className="absolute bottom-4 right-4 bg-[#4f4c59] text-white rounded-full px-4 py-2 text-sm font-semibold shadow-lg shadow-[#1f1a2c]/40"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Watch on YouTube
        </MotionButton>
      </div>

      <div className="p-5 sm:p-6 flex flex-col gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[#7c7899]">featured track</p>
          <h3 className="font-black text-xl sm:text-2xl text-[#1d182d]">{song.title}</h3>
          <p className="text-sm sm:text-base text-[#4a465f]">{song.artist}</p>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-[#514d65]">
          {song.genre && <span className="px-3 py-1 rounded-full bg-white/70 border border-white/50">{song.genre}</span>}
          {song.vibe && <span className="px-3 py-1 rounded-full bg-[#f3f0ff]/70 border border-white/40">{song.vibe}</span>}
          {song.releaseYear && <span className="px-3 py-1 rounded-full border border-white/50 text-[#353145]">{song.releaseYear}</span>}
        </div>

        {song.description && (
          <p className="text-sm text-[#4d4763] leading-relaxed">
            {song.description}
          </p>
        )}
      </div>
    </MotionCard>
  );
}