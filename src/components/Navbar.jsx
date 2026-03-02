import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
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
          <a
            href="#mood-detect"
            className="hidden sm:inline text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors no-underline"
          >
            Automatic
          </a>
          <a
            href="#pick-vibe"
            className="hidden sm:inline text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors no-underline"
          >
            Manual
          </a>
        </div>
      </div>
    </nav>
  );
}