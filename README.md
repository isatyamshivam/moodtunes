# 🎵 MoodTunes: AI-Powered Mood-Based Music Recommender

MoodTunes is an innovative web application that creates personalized music experiences by analyzing your mood through facial expressions or manual selection. Built with modern web technologies, it offers a seamless and interactive way to discover music that matches your emotional state.

[🔗 Visit Site](https://moodtunes-isatyamshivam.vercel.app/)

## 🛠️ Technology Stack

- **Frontend Framework**: React with Vite
- **Styling**: Tailwind CSS for utility-first styling
- **Animations**: Framer Motion
- **Face Detection**: @vladmandic/face-api
- **UI Components**: Radix UI
- **Development Tools**: 
  - ESLint for code quality
  - PostCSS for CSS processing
  - TypeScript for type safety

## ✨ Features

- 🎭 **AI-Powered Mood Detection**
  - Capture selfies using your device's camera
  - Advanced facial expression analysis using face-api.js
  - Detects multiple emotions: Happy, Sad, Angry, Chill, Energetic

- 🎧 **Mood-Based Music Recommendations**
  - Curated playlists for each emotional state
  - YouTube video embeds for instant playback
  - Detailed song information including genre, release year, and duration

- 🎨 **Dynamic UI/UX**
  - Smooth animations with Framer Motion
  - Mood-specific color schemes
  - Responsive design for all devices
  - Beautiful gradient effects
  - Loading states and error handling

## 📦 Installation

```bash

# 1. Clone the repository:
   
   git clone [your-repository-url]
   cd moodtunes

# 2. Install dependencies:

   npm install

# 3. Start the development server:

   npm run dev

# 4. Open your browser and navigate to:

   http://localhost:5173

```

## 🎯 Usage

1. **Select Your Mood:**
   - Take a selfie for automatic mood detection
   - Or manually select your current mood

2. **Explore Music:**
   - Browse through mood-specific playlists
   - Watch and listen to songs directly in the app
   - View detailed song information

3. **Switch Moods:**
   - Change your mood selection anytime
   - Get new playlist recommendations

## 💡 Key Components

- `App.jsx`: Main application component and routing logic
- `SelfieCapture.jsx`: Handles camera access and mood detection
- `MoodSelector.jsx`: Manual mood selection interface
- `PlaylistGrid.jsx`: Displays mood-based music recommendations
- `PlaylistCard.jsx`: Individual song card with video player

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Face detection powered by [@vladmandic/face-api](https://github.com/vladmandic/face-api)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- UI components from [Radix UI](https://www.radix-ui.com/)

---
