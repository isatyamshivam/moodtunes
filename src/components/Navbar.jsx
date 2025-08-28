import React from 'react';
import { ThemeSwitcher } from './ThemeSwitcher';

export function Navbar() {
  return (
    <nav className="w-full py-2 px-3 sm:px-4 flex justify-between items-center relative z-10 bg-light-base dark:bg-spotify-base border-b border-light-border dark:border-spotify-highlight transition-colors duration-300">
      <div className="flex items-center gap-1 sm:gap-2">    
        <div className="relative w-8 h-8 sm:w-10 sm:h-10">        
          <img 
            src="/MoodTunes_logo.svg" 
            alt="MoodTunes Logo" 
            className="w-full h-full rounded-full"
          />
        </div>
        <span className="text-base sm:text-lg font-bold bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent tracking-tight">
          MoodTunes
        </span>
      </div>
      
      {/* Add theme switcher */}
      <ThemeSwitcher />
    </nav>
  );
}