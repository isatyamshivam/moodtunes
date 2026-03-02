import React, { createContext, useContext, useState, useCallback, useRef, useEffect } from 'react';

const PlayerContext = createContext(null);

export function PlayerProvider({ children }) {
  const [playlist, setPlaylistState] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [moodColor, setMoodColor] = useState('neutral');
  const [showFullPlayer, setShowFullPlayer] = useState(false);
  const iframeRef = useRef(null);
  // Track a unique key so we can remount the iframe on song change
  const [iframeKey, setIframeKey] = useState(0);
  // Shared progress state (0-100) and elapsed seconds
  const [progress, setProgress] = useState(0);
  const [elapsed, setElapsed] = useState(0);

  const currentSong = playlist.length > 0 ? playlist[currentIndex] : null;
  const songDuration = currentSong?.duration || 240;

  // Shared progress timer — runs whenever playing, resets on song change
  useEffect(() => {
    if (!isPlaying || !currentSong) return;
    const interval = setInterval(() => {
      setElapsed((prev) => {
        const next = prev + 1;
        if (next >= songDuration) {
          clearInterval(interval);
          return songDuration;
        }
        return next;
      });
      setProgress((prev) => {
        const next = prev + 100 / songDuration;
        return next >= 100 ? 100 : next;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying, currentSong?.embedId, songDuration]);

  // Play a song from a given playlist
  const play = useCallback((song, songs, moodValue) => {
    const idx = songs.findIndex((s) => s.embedId === song.embedId);
    setPlaylistState(songs);
    setCurrentIndex(idx >= 0 ? idx : 0);
    setMoodColor(moodValue || 'neutral');
    setIsPlaying(true);
    setProgress(0);
    setElapsed(0);
    setIframeKey((k) => k + 1); // force new iframe
  }, []);

  const togglePlay = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  const pause = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const resume = useCallback(() => {
    if (currentSong) setIsPlaying(true);
  }, [currentSong]);

  const stop = useCallback(() => {
    setIsPlaying(false);
    setPlaylistState([]);
    setCurrentIndex(0);
    setShowFullPlayer(false);
  }, []);

  const next = useCallback(() => {
    if (playlist.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % playlist.length);
    setIsPlaying(true);
    setProgress(0);
    setElapsed(0);
    setIframeKey((k) => k + 1);
  }, [playlist.length]);

  const prev = useCallback(() => {
    if (playlist.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
    setIsPlaying(true);
    setProgress(0);
    setElapsed(0);
    setIframeKey((k) => k + 1);
  }, [playlist.length]);

  // Seek to a specific second in the song
  const seekTo = useCallback((seconds) => {
    const clamped = Math.max(0, Math.min(seconds, songDuration));
    setElapsed(clamped);
    setProgress((clamped / songDuration) * 100);

    // Tell YouTube iframe to seek
    const iframe = iframeRef.current;
    if (iframe) {
      try {
        const cmd = JSON.stringify({ event: 'command', func: 'seekTo', args: [clamped, true] });
        iframe.contentWindow.postMessage(cmd, '*');
      } catch {
        // cross-origin — ignored
      }
    }
  }, [songDuration]);

  // Listen for YouTube player errors (unplayable videos) and auto-skip
  useEffect(() => {
    const handleMessage = (e) => {
      if (!e.origin.includes('youtube.com')) return;
      try {
        const data = typeof e.data === 'string' ? JSON.parse(e.data) : e.data;
        // YouTube sends error event when video is unavailable/unembeddable
        if (data.event === 'onError' || data.info === 150 || data.info === 101) {
          // Auto-skip to next song
          if (playlist.length > 1) {
            setCurrentIndex((prev) => (prev + 1) % playlist.length);
            setProgress(0);
            setElapsed(0);
            setIframeKey((k) => k + 1);
          }
        }
      } catch {
        // not JSON — ignore
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [playlist.length]);

  // Post play/pause commands to the YouTube iframe
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    try {
      const cmd = isPlaying
        ? '{"event":"command","func":"playVideo","args":""}'
        : '{"event":"command","func":"pauseVideo","args":""}';
      iframe.contentWindow.postMessage(cmd, '*');
    } catch {
      // cross-origin — ignored
    }
  }, [isPlaying]);

  const value = {
    playlist,
    currentIndex,
    currentSong,
    isPlaying,
    moodColor,
    showFullPlayer,
    iframeRef,
    iframeKey,
    progress,
    elapsed,
    songDuration,
    play,
    togglePlay,
    pause,
    resume,
    stop,
    next,
    prev,
    seekTo,
    setShowFullPlayer,
  };

  return (
    <PlayerContext.Provider value={value}>
      {children}

      {/* ─── Persistent hidden YouTube iframe for audio playback ─── */}
      {currentSong && (
        <iframe
          key={iframeKey}
          ref={iframeRef}
          src={`https://www.youtube.com/embed/${currentSong.embedId}?autoplay=1&enablejsapi=1&rel=0&origin=${window.location.origin}`}
          title="Audio player"
          allow="autoplay; encrypted-media"
          className="fixed -bottom-[9999px] -left-[9999px] w-0 h-0 opacity-0 pointer-events-none"
          tabIndex={-1}
          aria-hidden="true"
          onError={() => {
            // iframe itself failed to load — skip to next
            if (playlist.length > 1) {
              setCurrentIndex((prev) => (prev + 1) % playlist.length);
              setProgress(0);
              setElapsed(0);
              setIframeKey((k) => k + 1);
            }
          }}
        />
      )}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error('usePlayer must be used within a PlayerProvider');
  return ctx;
}
