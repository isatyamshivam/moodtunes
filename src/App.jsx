import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { MoodSelector } from './components/MoodSelector';
import { SelfieCapture } from './components/SelfieCapture';
import React from 'react';
import { PlaylistGrid } from './components/PlaylistGrid';
import './App.css';

function App() {
  const [showSelfie, setShowSelfie] = useState(false);
  const [selectedMood, setSelectedMood] = useState(null);

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood);
    setShowSelfie(false);
  };

  const handleSelfieComplete = (mood) => {
    setSelectedMood(mood);
    setShowSelfie(false);
  };

  return (
    <div className="min-h-screen bg-spotify-base text-spotify-text">
      <Navbar />
      
      <main className="container mx-auto px-6 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">Welcome to MoodTunes</h1>
          <p className="text-xl mb-10 text-spotify-subdued">Discover music that matches your mood</p>
          
          {!selectedMood && !showSelfie && (
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-2xl font-bold mb-8 text-center">How are you feeling today?</h2>
              <motion.button
                onClick={() => setShowSelfie(true)}
                className="bg-gradient-to-r from-purple-500 to-blue-400 text-white font-bold py-3 px-8 rounded-full"
                whileHover={{ scale: 1.05, brightness: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Take a Selfie
              </motion.button>
              <p className="text-lg font-bold text-spotify-subdued">Or</p>
              <p className="text-xl font-bold text-spotify-text mt-2">Choose the Mood</p>
            </div>
          )}
        </motion.div>

        <AnimatePresence mode="wait">
          {showSelfie ? (
            <motion.div
              key="selfie"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
            >
              <SelfieCapture onMoodDetected={handleSelfieComplete} />
            </motion.div>
          ) : !selectedMood ? (
            <motion.div
              key="selector"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
            >
              <MoodSelector onMoodSelect={handleMoodSelect} />
            </motion.div>
          ) : (
            <motion.div
              key="playlist"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
            >
              <PlaylistGrid mood={selectedMood} />
              <div className="text-center mt-10">
                <motion.button
                  onClick={() => setSelectedMood(null)}
                  className="bg-gradient-to-r from-purple-500 to-blue-400 text-white font-bold py-3 px-8 rounded-full"
                  whileHover={{ scale: 1.05, brightness: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Choose Another Mood
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App
