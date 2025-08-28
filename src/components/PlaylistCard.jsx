import { motion } from 'framer-motion';
import { useState } from 'react';
import React from 'react';
export function PlaylistCard({ song, index, moodColor }) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Define background colors based on mood
  const moodGradients = {
    Happy: 'from-yellow-400 to-amber-500',
    Sad: 'from-blue-500 to-indigo-600',
    Angry: 'from-red-500 to-red-600',
    Chill: 'from-green-400 to-teal-500',
    Energetic: 'from-orange-400 to-orange-600',
  };
  
  // Extract year if available in the title
  const releaseYear = song.releaseYear || 'Unknown';
  
  // Calculate animation delay based on index for staggered animation
  const animationDelay = index * 0.1;

  return (
    <motion.div
      className="bg-light-elevated dark:bg-spotify-elevated rounded-lg overflow-hidden shadow-lg transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: animationDelay }}
      whileHover={{ 
        scale: 1.03, 
        y: -5,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top gradient banner with mood color */}
      <div className={`h-1 w-full bg-gradient-to-r ${moodGradients[moodColor] || 'from-purple-500 to-blue-400'}`}></div>
      
      {/* Video embed */}
      <div className="aspect-video relative">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${song.embedId}`}
          title={song.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        
        {/* Play indicator overlay with improved animation */}
        {isHovered && (
          <motion.div 
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div 
              className="rounded-full bg-spotify-green p-2 sm:p-3"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-black">
                <path d="M8 5v14l11-7z" />
              </svg>
            </motion.div>
          </motion.div>
        )}
      </div>
      
      {/* Song details */}
      <div className="p-3 sm:p-5">
        <h3 className="font-bold text-lg sm:text-xl text-light-text dark:text-spotify-text">{song.title}</h3>
        <p className="text-sm sm:text-base text-light-subdued dark:text-spotify-subdued mt-1">{song.artist}</p>
        
        {/* Additional song details */}
        <div className="flex items-center justify-between mt-2 sm:mt-3">
          <span className="text-xs text-light-subdued dark:text-spotify-subdued">{releaseYear}</span>
          <div className="flex items-center gap-2">
            {song.genre && (
              <span className="bg-light-highlight dark:bg-spotify-highlight px-1.5 py-0.5 sm:px-2 sm:py-1 rounded text-xs">
                {song.genre}
              </span>
            )}
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="text-light-subdued dark:text-spotify-subdued hover:text-spotify-green"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}