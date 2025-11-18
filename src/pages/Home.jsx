import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { SelfieCapture } from '../components/SelfieCapture';
import { MoodSelector } from '../components/MoodSelector';
import { MOODS, MOOD_PLAYLISTS } from '../data/moods';

const MotionSection = motion.section;
const MotionDiv = motion.div;

export function Home() {
  const navigate = useNavigate();
  const heroMood = MOODS[0];
  const [detectedMood, setDetectedMood] = useState(null);
  const detectedTracks = detectedMood ? MOOD_PLAYLISTS[detectedMood.value] || [] : [];
  const leadTrack = detectedTracks[0];

  const goToPlaylist = (mood) => {
    if (!mood) return;
    navigate(`/playlist/${mood.value}`);
  };

  const handleMoodDetected = (mood) => {
    setDetectedMood(mood);
  };

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-12">
      <MotionSection
        className="relative overflow-hidden rounded-[36px] p-6 sm:p-10 md:p-12 bg-gradient-to-br from-[#e7e2ff] via-[#cfc5ff] to-[#a798f0] text-[#1f1a30] shadow-[0_40px_80px_rgba(30,19,66,0.35)] border border-white/30 backdrop-blur-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-80 h-80 bg-white/35 blur-[140px] -top-32 -left-20" />
          <div className="absolute w-72 h-72 bg-[#c7b9ff]/40 blur-[140px] bottom-0 right-6" />
          <div className="absolute inset-0 rounded-[36px] border border-white/20" />
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 relative z-10">
            <p className="uppercase tracking-[0.6em] text-sm font-semibold text-[#6d658f] drop-shadow-[0_5px_15px_rgba(98,73,166,0.35)]">choose your path</p>
            <h1 className="text-4xl sm:text-5xl font-black leading-tight text-[#1b1731]">
              MoodTunes now lets you scan or select.
            </h1>
            <p className="text-base sm:text-lg text-[#3b3460] max-w-xl">
              Let our AI read your expression for an instant "{heroMood.name}" vibe, or jump straight into a curated mood board.
            </p>
            <div className="grid gap-4">
              <div className="p-5 rounded-3xl bg-white/35 border border-white/60 shadow-[0_20px_45px_rgba(33,25,56,0.25)]">
                <p className="uppercase text-xs tracking-[0.4em] text-[#5f587a]">automatic</p>
                <h3 className="text-2xl font-black text-[#211b35]">Mood-based playlist</h3>
                <p className="text-sm text-[#4a4860]">Open the camera only when you tap detect, then jump into a tailored setlist.</p>
              </div>
              <div className="p-5 rounded-3xl bg-white/25 border border-white/50 shadow-[0_20px_45px_rgba(33,25,56,0.2)]">
                <p className="uppercase text-xs tracking-[0.4em] text-[#5f587a]">manual</p>
                <h3 className="text-2xl font-black text-[#211b35]">Pick a vibe</h3>
                <p className="text-sm text-[#4a4860]">Browse hand-picked moods and tap one to explore its playlist hub.</p>
              </div>
            </div>
          </div>
          <div className="w-full space-y-4 relative z-10">
            <SelfieCapture onMoodDetected={handleMoodDetected} />
            {detectedMood && (
              <MotionDiv
                className="rounded-3xl bg-white/80 border border-white/70 p-5 shadow-[0_20px_45px_rgba(34,27,51,0.25)] backdrop-blur"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p className="uppercase text-xs tracking-[0.4em] text-[#6a6785] mb-2">detected mood</p>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-3xl">{detectedMood.emoji}</span>
                  <div>
                    <h3 className="text-xl font-black text-[#1b1731]">{detectedMood.name}</h3>
                    <p className="text-sm text-[#4a4860]">{detectedMood.tagline}</p>
                  </div>
                </div>
                {leadTrack && (
                  <div className="mb-4 text-sm text-[#403c55]">
                    <p className="font-semibold">Playlist: {detectedMood.name} flow</p>
                    <p className="text-xs text-[#6b6788]">Lead track: {leadTrack.title} · {leadTrack.artist}</p>
                  </div>
                )}
                <button
                  className="w-full sm:w-auto px-5 py-2 rounded-full bg-[#4f4c59] text-white font-semibold hover:bg-[#3c3947] transition"
                  onClick={() => goToPlaylist(detectedMood)}
                >
                  Open {detectedMood.name} playlist
                </button>
              </MotionDiv>
            )}
          </div>
        </div>
      </MotionSection>

      <section className="space-y-6">
        <div>
          <p className="uppercase text-sm tracking-[0.5em] font-semibold text-[#6c6399] drop-shadow-[0_6px_20px_rgba(66,52,122,0.35)]">pick a vibe</p>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1f1b2a]">Hand-curated mood boards</h2>
        </div>
        <MoodSelector onMoodSelect={goToPlaylist} />
      </section>

      <MotionSection
        className="rounded-[28px] p-6 sm:p-8 bg-white/50 border border-white/40 backdrop-blur space-y-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
  <p className="uppercase text-sm tracking-[0.5em] font-semibold text-[#665d92] drop-shadow-[0_6px_20px_rgba(66,52,122,0.3)] mb-3">preview the moods</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {MOODS.map((mood) => (
            <div
              key={mood.value}
              className={`rounded-3xl p-5 sm:p-6 bg-gradient-to-br ${mood.gradient} text-[#221d33] shadow-lg border border-white/40 backdrop-blur`}
            >
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
                  <div
                    key={track.embedId}
                    className="flex items-center justify-between bg-white/60 rounded-2xl px-3 py-2 backdrop-blur border border-white/30"
                  >
                    <div className="text-left">
                      <p className="font-semibold text-[#1f1b2a]">{track.title}</p>
                      <p className="text-xs text-[#4a4860]">{track.artist}</p>
                    </div>
                    <button
                      className="text-xs font-bold text-[#4f4c59] hover:text-[#2e293d]"
                      onClick={() => goToPlaylist(mood)}
                    >
                      View
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </MotionSection>
    </main>
  );
}
