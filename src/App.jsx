import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { PlaylistPage } from './pages/PlaylistPage';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-aurora-mist via-[#bfb8ff]/70 to-aurora-midnight text-[#1f1b2a]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playlist/:moodId" element={<PlaylistPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;