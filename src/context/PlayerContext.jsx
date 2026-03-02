import React, { createContext, useContext, useState, useCallback } from 'react';

const PlayerContext = createContext(null);

export function PlayerProvider({ children }) {
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [moodColor, setMoodColor] = useState('neutral');

  const playSong = useCallback((song, mood = 'neutral') => {
    if (currentSong?.embedId === song.embedId) {
      // Same song — toggle play/pause
      setIsPlaying((prev) => !prev);
    } else {
      setCurrentSong(song);
      setMoodColor(mood);
      setIsPlaying(true);
    }
  }, [currentSong]);

  const togglePlay = useCallback(() => {
    if (currentSong) setIsPlaying((prev) => !prev);
  }, [currentSong]);

  const stop = useCallback(() => {
    setCurrentSong(null);
    setIsPlaying(false);
  }, []);

  return (
    <PlayerContext.Provider
      value={{ currentSong, isPlaying, moodColor, playSong, togglePlay, stop }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error('usePlayer must be used within PlayerProvider');
  return ctx;
}
