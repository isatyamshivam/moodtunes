/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        spotify: {
          base: '#121212',
          elevated: '#181818',
          highlight: '#282828',
          green: '#1DB954',
          text: '#FFFFFF',
          subdued: '#B3B3B3',
        },
        aurora: {
          mist: '#DCDDFF',
          bloom: '#BBB3FF',
          iris: '#8E88C5',
          dusk: '#6A6785',
          midnight: '#4F4C59',
        },
        mood: {
          happy: '#FFD93D',
          sad: '#4F709C',
          angry: '#FF6B6B',
          chill: '#98D8AA',
          energetic: '#FF9843'
        },
        // Dark mode specific colors
        dark: {
          base: '#0A0A0A',
          elevated: '#121212',
          highlight: '#1F1F1F',
          border: '#333333',
          text: '#FFFFFF',
          subdued: '#A0A0A0',
        },
        light: {
          base: '#FFFFFF',
          elevated: '#F5F5F5',
          highlight: '#EAEAEA',
          border: '#E0E0E0',
          text: '#121212',
          subdued: '#6B7280',
        }
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.16' }],
      },
      screens: {
        'xs': '475px',
        // Default Tailwind breakpoints
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}