import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PlaylistCard } from './PlaylistCard';
import SpotifyService from '../services/SpotifyService';
import React from 'react';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', { 
    month: 'short', 
    day: 'numeric',
    year: 'numeric'
  }).format(date);
};

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

export function DiscoverWeekly() {
  const [playlist, setPlaylist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Map mood to emoji
  const moodEmojis = {
    HAPPY: '😊',
    SAD: '😢',
    EXCITED: '🤩',
    RELAXED: '😌',
    NEUTRAL: '😐'
  };
  
  useEffect(() => {
    const fetchDiscoverWeekly = async () => {
      try {
        setLoading(true);
        const data = await SpotifyService.getDiscoverWeekly();
        setPlaylist(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching Discover Weekly:', err);
        setError('Unable to load your personalized playlist. Please try again later.');
        
        // For demo purposes - create mock data if API fails
        setPlaylist({
          id: 1,
          generatedAt: new Date().toISOString(),
          expiresAt: new Date(Date.now() + 7*24*60*60*1000).toISOString(),
          dominantMood: 'HAPPY',
          tracks: [
            {
              id: '1234',
              name: 'Happy Song',
              artist: 'Happy Artist',
              imageUrl: 'https://via.placeholder.com/300',
              previewUrl: 'https://example.com/preview',
              spotifyUrl: 'https://open.spotify.com',
              recommendationReason: 'Based on your happy mood patterns'
            },
            {
              id: '5678',
              name: 'Another Happy Song',
              artist: 'Another Artist',
              imageUrl: 'https://via.placeholder.com/300',
              previewUrl: 'https://example.com/preview',
              spotifyUrl: 'https://open.spotify.com',
              recommendationReason: 'Similar to songs you liked'
            }
          ]
        });
      } finally {
        setLoading(false);
      }
    };
    
    fetchDiscoverWeekly();
  }, []);
  
  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="spinner-container">
          <div className="spinner border-t-4 border-blue-500 border-solid rounded-full w-12 h-12 animate-spin"></div>
          <p className="mt-4 text-spotify-text">Loading your weekly discovery...</p>
        </div>
      </div>
    );
  }
  
  if (error && !playlist) {
    return (
      <div className="bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 px-4 py-3 rounded relative mx-auto max-w-3xl my-8">
        {error}
      </div>
    );
  }
  
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <motion.div
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        className="text-center mb-8"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          Discover Weekly
        </h2>
        <p className="text-light-subdued dark:text-spotify-subdued mb-2">
          Your personalized playlist based on your mood history
        </p>
        <div className="flex items-center justify-center gap-2 text-sm text-light-subdued dark:text-spotify-subdued">
          <span>Created: {formatDate(playlist.generatedAt)}</span>
          <span>•</span>
          <span>Expires: {formatDate(playlist.expiresAt)}</span>
        </div>
      </motion.div>
      
      <motion.div 
        className="bg-light-elevated dark:bg-spotify-elevated rounded-lg p-6 shadow-md mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-400 rounded-full">
            <span className="text-2xl">{moodEmojis[playlist.dominantMood] || '🎵'}</span>
          </div>
          <div>
            <h3 className="text-xl font-bold">Your weekly mood: {playlist.dominantMood}</h3>
            <p className="text-light-subdued dark:text-spotify-subdued">
              This playlist was curated based on your recent mood patterns.
            </p>
          </div>
        </div>
        <p className="text-sm text-light-subdued dark:text-spotify-subdued italic">
          Your personalized playlist refreshes every Monday with new songs that match your recent mood.
        </p>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {playlist.tracks.map((track, index) => (
          <motion.div 
            key={`track-${track.id}-${index}`}
            variants={itemVariants}
            className="relative"
          >
            <PlaylistCard 
              song={{
                title: track.name,
                artist: track.artist,
                imageUrl: track.imageUrl,
                spotifyUrl: track.spotifyUrl,
                previewUrl: track.previewUrl,
                embedId: track.id,
                genre: "Recommended",
                releaseYear: new Date().getFullYear()
              }} 
              index={index} 
              moodColor={playlist.dominantMood.toLowerCase()}
            />
            <div className="mt-2 px-2 text-xs text-light-subdued dark:text-spotify-subdued italic">
              {track.recommendationReason}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
