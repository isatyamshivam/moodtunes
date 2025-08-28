import React from 'react';
import { ThemeSwitcher } from './ThemeSwitcher';
import { motion } from 'framer-motion';

export function Navbar({ onNavigate, currentPage = 'home' }) {
  return (
    <nav className="w-full py-2 px-3 sm:px-4 flex justify-between items-center relative z-10 bg-light-base dark:bg-spotify-base border-b border-light-border dark:border-spotify-highlight transition-colors duration-300">
      <div className="flex items-center gap-1 sm:gap-2 cursor-pointer" onClick={() => onNavigate('home')}>    
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
      
      {/* Navigation Links */}
      <div className="flex-1 flex justify-center items-center gap-2 sm:gap-4 mx-4">
        <NavLink 
          active={currentPage === 'home'} 
          onClick={() => onNavigate('home')}
        >
          Home
        </NavLink>
        <NavLink 
          active={currentPage === 'discover-weekly'} 
          onClick={() => onNavigate('discover-weekly')}
        >
          Discover Weekly
        </NavLink>
      </div>
      
      {/* Theme switcher */}
      <ThemeSwitcher />
    </nav>
  );
}

function NavLink({ active, onClick, children }) {
  return (
    <motion.button
      onClick={onClick}
      className={`py-1 px-2 rounded-md relative ${
        active 
          ? 'text-light-text dark:text-spotify-text' 
          : 'text-light-subdued dark:text-spotify-subdued hover:text-light-text dark:hover:text-spotify-text'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      {active && (
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-400 rounded-full"
          layoutId="activeTab"
        />
      )}
    </motion.button>
  );
}