import { motion } from 'framer-motion';
import { PlaylistCard } from './PlaylistCard';
import React, { useState, useEffect } from 'react';
import SpotifyService from '../services/SpotifyService';

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

// Fallback playlists in case the API is not available
const fallbackPlaylists = {
  happy: [
    { 
      title: 'Happy', 
      artist: 'Pharrell Williams', 
      embedId: 'ZbZSe6N_BXs', 
      genre: 'Pop',
      releaseYear: '2013',
      duration: '3:53',
      album: 'G I R L'
    },
    { 
      title: 'Uptown Funk', 
      artist: 'Mark Ronson ft. Bruno Mars', 
      embedId: 'OPf0YbXqDm0', 
      genre: 'Funk',
      releaseYear: '2014',
      duration: '4:30',
      album: 'Uptown Special'
    },
    { 
      title: "Can't Stop the Feeling!", 
      artist: 'Justin Timberlake', 
      embedId: 'ru0K8uYEZWw',
      genre: 'Disco Pop',
      releaseYear: '2016',
      duration: '3:56',
      album: 'Trolls (Original Motion Picture Soundtrack)'
    },
  ],
  sad: [
    { 
      title: 'Someone Like You', 
      artist: 'Adele', 
      embedId: 'hLQl3WQQoQ0',
      genre: 'Soul',
      releaseYear: '2011',
      duration: '4:45',
      album: '21'
    },
    { 
      title: 'Say Something', 
      artist: 'A Great Big World', 
      embedId: 'VVgixOjGhVU',
      genre: 'Indie Pop',
      releaseYear: '2013',
      duration: '3:49',
      album: 'Is There Anybody Out There?'
    },
    { 
      title: 'All of Me', 
      artist: 'John Legend', 
      embedId: '450p7goxZqg',
      genre: 'R&B',
      releaseYear: '2013',
      duration: '4:30',
      album: 'Love in the Future'
    },
  ],
  excited: [
    { 
      title: "Don't Stop Me Now", 
      artist: 'Queen', 
      embedId: 'HgzGwKwLmgM',
      genre: 'Rock',
      releaseYear: '1978',
      duration: '3:30',
      album: 'Jazz'
    },
    { 
      title: 'Titanium', 
      artist: 'David Guetta ft. Sia', 
      embedId: 'JRfuAukYTKg',
      genre: 'EDM',
      releaseYear: '2011',
      duration: '4:05',
      album: 'Nothing but the Beat'
    },
    { 
      title: 'Eye of the Tiger', 
      artist: 'Survivor', 
      embedId: 'btPJPFnesV4',
      genre: 'Rock',
      releaseYear: '1982',
      duration: '4:05',
      album: 'Eye of the Tiger'
    },
  ],
  relaxed: [
    { 
      title: 'Weightless', 
      artist: 'Marconi Union', 
      embedId: 'UfcAVejslrU',
      genre: 'Ambient',
      releaseYear: '2012',
      duration: '8:09',
      album: 'Weightless'
    },
    { 
      title: 'Clair de Lune', 
      artist: 'Claude Debussy', 
      embedId: 'WNcsUNKlAKw',
      genre: 'Classical',
      releaseYear: '1905',
      duration: '5:01',
      album: 'Suite bergamasque'
    },
    { 
      title: 'Waves', 
      artist: 'Mr. Probz', 
      embedId: 'pUjE9H8QlA4',
      genre: 'Deep House',
      releaseYear: '2013',
      duration: '3:28',
      album: 'Waves (Robin Schulz Remix)'
    },
  ],
  neutral: [
    { 
      title: 'Imagine', 
      artist: 'John Lennon', 
      embedId: 'YkgkThdzX-8',
      genre: 'Pop Rock',
      releaseYear: '1971',
      duration: '3:03',
      album: 'Imagine'
    },
    { 
      title: 'Viva la Vida', 
      artist: 'Coldplay', 
      embedId: 'dvgZkm1xWPE',
      genre: 'Alternative Rock',
      releaseYear: '2008',
      duration: '4:01',
      album: 'Viva la Vida or Death and All His Friends'
    },
    { 
      title: 'Thinking Out Loud', 
      artist: 'Ed Sheeran', 
      embedId: 'lp-EO5I60KA',
      genre: 'Pop Soul',
      releaseYear: '2014',
      duration: '4:41',
      album: 'x'
    },
  ],
};

export function PlaylistGrid({ mood }) {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Immediately use fallback playlist on mount
  useEffect(() => {
    if (!mood || !mood.value) {
      setLoading(false);
      return;
    }
    
    const loadFallbackPlaylist = () => {
      const moodValue = mood.value.toLowerCase();
      console.log("Loading fallback playlist for mood:", moodValue);
      
      if (fallbackPlaylists[moodValue] && fallbackPlaylists[moodValue].length > 0) {
        console.log("Fallback playlist found with", fallbackPlaylists[moodValue].length, "tracks");
        setTracks(fallbackPlaylists[moodValue]);
        setError("Using fallback playlists. Backend API not available.");
      } else {
        console.error("No fallback playlist found for mood:", moodValue);
        setTracks([]);
        setError(`No playlist available for mood: ${mood.name}`);
      }
      setLoading(false);
    };
    
    const fetchFromApi = async () => {
      try {
        setLoading(true);
        console.log("Attempting to fetch tracks for mood:", mood.value);
        
        const data = await SpotifyService.getRecommendationsByMood(mood.value);
        console.log("API Response:", data);
        
        if (data && data.tracks && data.tracks.length > 0) {
          const formattedTracks = data.tracks.map(track => ({
            title: track.name,
            artist: track.artist,
            imageUrl: track.imageUrl,
            spotifyUrl: track.spotifyUrl,
            previewUrl: track.previewUrl,
            embedId: track.id,
            album: track.album || 'Unknown',
            genre: 'Various',
            releaseYear: new Date().getFullYear()
          }));
          console.log("Setting", formattedTracks.length, "tracks from API");
          setTracks(formattedTracks);
          setError(null);
        } else {
          console.log("API returned no tracks, using fallback");
          loadFallbackPlaylist();
        }
      } catch (err) {
        console.error("Error fetching tracks:", err);
        loadFallbackPlaylist();
      }
    };
    
    // For now, skip API call and use fallbacks directly
    loadFallbackPlaylist();
    // Uncomment below to try API again later
    // fetchFromApi();
    
  }, [mood]);
  
  if (!mood) {
    return null;
  }
  
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
      <motion.div
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center flex items-center justify-center gap-2 sm:gap-3">
          {mood.emoji} <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Your {mood.name.toLowerCase()} playlist</span>
        </h2>
        <p className="text-spotify-subdued text-center mb-6 sm:mb-8">Perfect tracks to match your current vibe</p>
      </motion.div>
      
      {error && (
        <motion.div 
          className="bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 px-4 py-3 rounded relative mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {error}
        </motion.div>
      )}
      
      {loading ? (
        <motion.div 
          className="flex justify-center items-center py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="spinner-container">
            <div className="spinner border-t-4 border-blue-500 border-solid rounded-full w-12 h-12 animate-spin"></div>
            <p className="mt-4 text-spotify-text">Finding the perfect tracks...</p>
          </div>
        </motion.div>
      ) : tracks && tracks.length > 0 ? (
        <>
          <motion.div 
            className="mt-8 md:mt-12 bg-spotify-elevated rounded-lg p-4 md:p-6 shadow-md mx-2 md:m-6 lg:m-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg md:text-xl font-bold mb-3">Playlist details</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              <div>
                <p className="text-spotify-subdued text-sm">Mood</p>
                <p className="font-medium">{mood.name}</p>
              </div>
              <div>
                <p className="text-spotify-subdued text-sm">Songs</p>
                <p className="font-medium">{tracks.length}</p>
              </div>
              <div>
                <p className="text-spotify-subdued text-sm">Total time</p>
                <p className="font-medium">~{tracks.length * 3} min</p>
              </div>
              <div>
                <p className="text-spotify-subdued text-sm">Updated</p>
                <p className="font-medium">Today</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {tracks.map((song, index) => (
              <motion.div 
                key={`track-${index}`}
                variants={itemVariants}
              >
                <PlaylistCard 
                  song={song} 
                  index={index} 
                  moodColor={mood.value} 
                />
              </motion.div>
            ))}
          </motion.div>
        </>
      ) : (
        <div className="text-center py-10">
          <p className="text-xl text-spotify-subdued">No tracks found for this mood.</p>
          <p className="mt-2">Try selecting a different mood or check back later.</p>
        </div>
      )}
    </div>
  );
}
