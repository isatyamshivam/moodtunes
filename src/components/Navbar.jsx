import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (hash) => {
    if (location.pathname === '/') {
      // Already on home — just scroll
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to home, then scroll after render
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 no-underline">
          <img
            src="/MoodTunes_logo.svg"
            alt="MoodTunes logo"
            className="w-9 h-9 rounded-xl object-cover"
            loading="lazy"
          />
          <span className="text-3xl font-bold bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
            MoodTunes
          </span>
        </Link>
        <div className="flex items-center gap-6">
          <button
            onClick={() => scrollToSection('mood-detect')}
            className="hidden sm:inline text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer"
          >
            Automatic
          </button>
          <button
            onClick={() => scrollToSection('pick-vibe')}
            className="hidden sm:inline text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer"
          >
            Manual
          </button>
        </div>
      </div>
    </nav>
  );
}