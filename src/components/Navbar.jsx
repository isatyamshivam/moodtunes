import React from 'react';

export function Navbar() {
  return (
    <nav className="w-full py-2 px-4 flex justify-between items-center relative z-10 bg-spotify-base border-b border-spotify-highlight">
      <div className="flex items-center gap-2">    
        <div className="relative w-10 h-10">        
          <img 
            src="/MoodTunes_logo.svg" 
            alt="MoodTunes Logo" 
            className="w-full h-full rounded-full"
          />
        </div>
        <span className="text-lg font-bold bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent tracking-tight">
          MoodTunes
        </span>
      </div>
    </nav>
  );
}
