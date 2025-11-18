import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { MoodSelector } from './components/MoodSelector';
import { SelfieCapture } from './components/SelfieCapture';
import { PlaylistGrid } from './components/PlaylistGrid';
import React from 'react';
import './App.css';
import { MOODS, MOOD_PLAYLISTS } from './data/moods';

const MotionSection = motion.section;
const MotionDiv = motion.div;

function App() {
  const [selectedMood, setSelectedMood] = useState(null);
  const heroMood = selectedMood || MOODS[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-aurora-mist via-[#bfb8ff]/70 to-aurora-midnight text-[#1f1b2a]">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-12">
        <MotionSection
          className="rounded-[32px] p-6 sm:p-10 bg-gradient-to-br from-aurora-mist via-aurora-bloom to-[#7d78a8] text-[#1f1a30] shadow-[0_35px_60px_-15px_rgba(40,28,84,0.35)] border border-white/30 backdrop-blur-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <p className="uppercase tracking-[0.5em] text-xs text-[#6a6785]">mood-based radio</p>
              <h1 className="text-4xl sm:text-5xl font-black leading-tight text-[#1b1731]">Hear your face. Feel your vibe.</h1>
              <p className="text-base sm:text-lg text-[#3f3a5c]">
                MoodTunes scans your expression or lets you tap a vibe, then instantly spins up a YouTube-powered micro playlist to keep your energy aligned.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setSelectedMood(heroMood)}
                  className="bg-[#4f4c59] text-white font-semibold px-6 py-2 rounded-full shadow-lg shadow-[#2b243d]/30 hover:bg-[#645f73] transition-colors"
                >
                  Play {heroMood.name}
                </button>
                <button
                  onClick={() => setSelectedMood(null)}
                  className="bg-transparent border border-[#4f4c59]/30 text-[#4f4c59] font-semibold px-6 py-2 rounded-full hover:border-[#4f4c59]"
                >
                  Start fresh
                </button>
              </div>
            </div>
            <div className="w-full">
              <SelfieCapture onMoodDetected={setSelectedMood} />
            </div>
          </div>
  </MotionSection>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="uppercase text-xs tracking-[0.4em] text-[#7c779e]">pick a vibe</p>
              <h2 className="text-2xl sm:text-3xl font-black text-[#1f1b2a]">Hand-curated mood boards</h2>
            </div>
          </div>
          <MoodSelector onMoodSelect={setSelectedMood} />
        </section>

        <AnimatePresence mode="wait">
          {selectedMood ? (
            <MotionDiv key={selectedMood.value} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <PlaylistGrid mood={selectedMood} />
              <div className="text-center mt-6">
                <button
                  onClick={() => setSelectedMood(null)}
                  className="px-6 py-2 rounded-full border border-white/20 text-white/80 hover:text-white"
                >
                  Explore another mood
                </button>
              </div>
            </MotionDiv>
          ) : (
            <MotionSection key="vibes" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <p className="uppercase text-xs tracking-[0.4em] text-[#7c779e] mb-3">preview the moods</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {MOODS.map((mood) => (
                  <div key={mood.value} className={`rounded-3xl p-5 sm:p-6 bg-gradient-to-br ${mood.gradient} text-[#221d33] shadow-lg border border-white/40 backdrop-blur`}> 
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="uppercase text-xs tracking-[0.4em] text-[#5f587a]">vibe</p>
                        <h3 className="text-2xl font-black text-[#1b1731]">{mood.name}</h3>
                        <p className="text-sm text-[#3f3757] max-w-xs">{mood.tagline}</p>
                      </div>
                      <span className="text-4xl">{mood.emoji}</span>
                    </div>
                    <div className="mt-4 flex flex-col gap-2 text-sm">
                      {(MOOD_PLAYLISTS[mood.value] || []).slice(0, 2).map((track) => (
                        <div key={track.embedId} className="flex items-center justify-between bg-white/60 rounded-2xl px-3 py-2 backdrop-blur border border-white/30">
                          <div className="text-left">
                            <p className="font-semibold text-[#1f1b2a]">{track.title}</p>
                            <p className="text-xs text-[#4a4860]">{track.artist}</p>
                          </div>
                          <button className="text-xs font-bold text-[#4f4c59] hover:text-[#2e293d]" onClick={() => setSelectedMood(mood)}>Play</button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </MotionSection>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;