import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MiniPlayer } from './components/MiniPlayer';
import { FullPlayer } from './components/FullPlayer';
import { Home } from './pages/Home';
import { PlaylistPage } from './pages/PlaylistPage';
import { SongsPage } from './pages/SongsPage';
import { ScrollToTop } from './components/ScrollToTop';
import { PlayerProvider } from './context/PlayerContext';

function App() {
  return (
    <PlayerProvider>
      <div className="min-h-screen flex flex-col text-[#1f1b2a] bg-white">
        <ScrollToTop />
        <Navbar />
        <div className="flex-1 pb-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/playlist/:moodId" element={<PlaylistPage />} />
            <Route path="/playlist/:moodId/:playlistId" element={<SongsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Footer />
        <MiniPlayer />
        <FullPlayer />
      </div>
    </PlayerProvider>
  );
}

export default App;