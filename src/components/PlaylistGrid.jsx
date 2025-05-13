import { motion } from 'framer-motion';
import { PlaylistCard } from './PlaylistCard';
import React from 'react';
const playlists = {
  Happy: [
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
  Sad: [
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
  Angry: [
    { 
      title: 'In The End', 
      artist: 'Linkin Park', 
      embedId: 'eVTXPUF4Oz4',
      genre: 'Nu Metal',
      releaseYear: '2000',
      duration: '3:36',
      album: 'Hybrid Theory'
    },
    { 
      title: 'Break Stuff', 
      artist: 'Limp Bizkit', 
      embedId: 'ZpUYjpKg9KY',
      genre: 'Nu Metal',
      releaseYear: '2000',
      duration: '2:46',
      album: 'Significant Other'
    },
    { 
      title: 'Bodies', 
      artist: 'Drowning Pool', 
      embedId: '04F4xlWSFh0',
      genre: 'Nu Metal',
      releaseYear: '2001',
      duration: '3:22',
      album: 'Sinner'
    },
  ],
  Chill: [
    { 
      title: 'Waves', 
      artist: 'Mr Probz', 
      embedId: 'pUjE9H8QlA4',
      genre: 'Deep House',
      releaseYear: '2013',
      duration: '3:28',
      album: 'The Treatment'
    },
    { 
      title: 'Stay High', 
      artist: 'Tove Lo', 
      embedId: 'Oh2GUqZkNYo',
      genre: 'Electropop',
      releaseYear: '2014',
      duration: '3:27',
      album: 'Queen of the Clouds'
    },
    { 
      title: 'Don\'t Let Me Down', 
      artist: 'The Chainsmokers', 
      embedId: 'Io0fBr1XBUA',
      genre: 'Future Bass',
      releaseYear: '2016',
      duration: '3:28',
      album: 'Collage EP'
    },
  ],
  Energetic: [
    { 
      title: 'Wake Me Up', 
      artist: 'Avicii', 
      embedId: 'IcrbM1l_BoI',
      genre: 'EDM',
      releaseYear: '2013',
      duration: '4:09',
      album: 'True'
    },
    { 
      title: 'Titanium', 
      artist: 'David Guetta ft. Sia', 
      embedId: 'JRfuAukYTKg',
      genre: 'EDM',
      releaseYear: '2011',
      duration: '4:06',
      album: 'Nothing but the Beat'
    },
    { 
      title: 'Levels', 
      artist: 'Avicii', 
      embedId: '_ovdm2yX4MA',
      genre: 'EDM',
      releaseYear: '2011',
      duration: '3:19',
      album: 'Levels'
    },
  ],
};

export function PlaylistGrid({ mood }) {
  if (!mood || !playlists[mood.name]) {
    return null;
  }
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-2 text-center flex items-center justify-center gap-3">
          {mood.emoji} <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">Your {mood.name.toLowerCase()} playlist</span>
        </h2>
        <p className="text-spotify-subdued text-center mb-8">Perfect tracks to match your current vibe</p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {playlists[mood.name].map((song, index) => (
          <PlaylistCard 
            key={song.embedId} 
            song={song} 
            index={index} 
            moodColor={mood.name} 
          />
        ))}
      </div>
      
      {/* Playlist stats */}
      <div className="mt-12 bg-spotify-elevated rounded-lg p-6 shadow-md">
        <h3 className="text-xl font-bold mb-3">Playlist details</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <p className="text-spotify-subdued text-sm">Mood</p>
            <p className="font-medium">{mood.name}</p>
          </div>
          <div>
            <p className="text-spotify-subdued text-sm">Songs</p>
            <p className="font-medium">{playlists[mood.name].length}</p>
          </div>
          <div>
            <p className="text-spotify-subdued text-sm">Total time</p>
            <p className="font-medium">{playlists[mood.name].reduce((total, song) => {
              const [minutes, seconds] = (song.duration || '0:00').split(':').map(Number);
              return total + minutes * 60 + seconds;
            }, 0) / 60 | 0} min</p>
          </div>
          <div>
            <p className="text-spotify-subdued text-sm">Updated</p>
            <p className="font-medium">Today</p>
          </div>
        </div>
      </div>
    </div>
  );
}
