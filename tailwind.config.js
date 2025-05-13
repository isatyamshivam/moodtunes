/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
        mood: {
          happy: '#FFD93D',
          sad: '#4F709C',
          angry: '#FF6B6B',
          chill: '#98D8AA',
          energetic: '#FF9843'
        }      },
    },
  },
  plugins: [],
}
