import React from 'react';
import { ThemeSwitcher } from './ThemeSwitcher';

export function Navbar() {
  return (
    <nav className="w-full border-b border-white/20 bg-gradient-to-r from-aurora-midnight/90 via-[#5b5870]/80 to-aurora-dusk/70 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between text-white">
        <div className="flex items-center gap-3">
          <img
            src="/MoodTunes_logo.svg"
            alt="MoodTunes logo"
            className="w-11 h-11 rounded-2xl object-cover shadow-lg border border-white/30"
            loading="lazy"
          />
          <div>
            <p className="font-black text-lg tracking-tight">MoodTunes</p>
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">feel your soundtrack</p>
          </div>
        </div>
        <ThemeSwitcher />
      </div>
    </nav>
  );
}