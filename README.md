<div align="center">
  <img src="./public/MoodTunes_logo.svg" alt="MoodTunes" width="60"/>
  
  # MoodTunes

  *An AI-powered music recommender that reads your vibe and instantly spins up curated YouTube playlists without any backend servers.*
</div>

---

## 🎧 What is MoodTunes?

Have you ever spent 10 minutes just trying to decide what to listen to? **MoodTunes** solves that. 

Using your device's camera, it runs a lightweight, **100% private** face-detection model directly in your browser. It instantly scans your expression, detects how you're feeling (Happy, Sad, Neutral, Relaxed, or Excited), and immediately drops you into a curated music playlist matching your exact vibe.

*Don't want to use the camera?* You can also manually pick a vibe!

### ✨ Key Features
- **Zero Backend Required:** All AI detection runs entirely in your browser using TensorFlow.js. Your camera feed never leaves your device.
- **Embedded YouTube Player:** Listen to and watch curated tracks seamlessly with a built-in mini-player.
- **Vibrant Modern UI:** Glassmorphic navigation, buttery smooth Framer Motion animations, and gorgeous, bright gradients.
- **Automatic & Manual Modes:** Let the AI decide your mood or pick your exact vibe from the homepage grid.

---

## 🛠️ Tech Stack

This project was built focusing on speed, aesthetics, and privacy:
- **Frontend Framework:** React 19 + Vite 6
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **AI / Machine Learning:** TensorFlow.js + BlazeFace + FER-2013 MobileNet CNN
- **Routing:** React Router v7

---

## 🚀 Installation & Setup

Because MoodTunes uses a locally-hosted AI model, you will need to download the model files during setup.

**1. Clone the repository**
```bash
git clone https://github.com/isatyamshivam/moodtunes.git
cd moodtunes
```

**2. Install dependencies**
```bash
npm install
```

**3. Download the AI model (~2.5 MB)**
This script safely downloads the required open-source emotion detection model into the project.
```bash
npm run download-model
```

*Note for Windows/Linux users: If the Node script fails, you can alternatively run `./download-cnn-model.ps1` (PowerShell) or `bash download-cnn-model.sh` (Linux/Mac) directly.*

**4. Start the app**
```bash
npm run dev
```

Your app will be running at `http://localhost:5173`. Accept the camera permissions to test the automatic mood detection!

---

## 📂 Project File Structure

Here is a map of the repository so you know exactly where everything lives:

```text
moodtunes/
├── models/                      # Downloaded TF.js Emotion & Face models
│   └── mobilenet-emotion/       # CNN brain (model.json + binary shards)
│
├── public/                      # Static assets 
│   └── MoodTunes_logo.svg       # Application logo
│
├── src/                         # Core Application Code
│   ├── components/              # Reusable React components
│   │   ├── Footer.jsx           # Dark footer panel
│   │   ├── FullPlayer.jsx       # Maximized YouTube player
│   │   ├── MiniPlayer.jsx       # Floating minimal player
│   │   ├── MoodSelector.jsx     # Manual mood-vibe picking grid
│   │   ├── Navbar.jsx           # Sticky glassmorphic top navigation
│   │   ├── PlaylistCard.jsx     # Single playlist card UI
│   │   ├── PlaylistGrid.jsx     # Grid wrapper for playlists
│   │   ├── ScrollToTop.jsx      # Route-change scroll utility
│   │   ├── SelfieCapture.jsx    # UI & WebCam loop for Face Detection
│   │   └── SongList.jsx         # The list of playable YouTube tracks
│   │
│   ├── context/
│   │   └── PlayerContext.jsx    # Global state (currently playing track)
│   │
│   ├── data/
│   │   └── moods.js             # The single source-of-truth database for songs/playlists
│   │
│   ├── hooks/
│   │   └── useEmotionDetection.js # The "Brain": handles loading & running the TF.js models
│   │
│   ├── pages/                   # Application Views
│   │   ├── Home.jsx             # The landing page with gradient background
│   │   ├── PlaylistPage.jsx     # Shows all playlists available for a mood
│   │   └── SongsPage.jsx        # Shows all songs inside a chosen playlist
│   │
│   ├── utils/
│   │   └── emotionMapper.js     # Maps raw TF.js expressions (7 classes) -> 5 Moods
│   │
│   ├── App.jsx                  # Main router and layout wrapper
│   ├── index.css                # Global CSS (animations, custom scrollbars)
│   └── main.jsx                 # React root mount point
│
├── download-cnn-model.mjs       # Node.js script to fetch the TF.js model
├── download-cnn-model.ps1       # Windows equivalent block
├── download-cnn-model.sh        # Mac/Linux equivalent block
├── package.json                 # Project dependencies & build scripts
├── tailwind.config.js           # Tailwind v3 fallback settings (if needed)
├── vercel.json                  # Vercel deployment & routing config
└── vite.config.js               # Dev server settings & model middleware
```

---

## 🧠 How the AI Works

1. **The Camera**: `SelfieCapture.jsx` starts a hidden HTML video element.
2. **Face Detection**: BlazeFace (a lightning-fast Google model) identifies exactly where your face is in the frame.
3. **Cropping**: A square crop is taken around your face, converted to Grayscale, and downsized to `48x48` pixels.
4. **Classification**: The `FER-2013` MobileNet CNN analyzes the crop and scores you on 7 emotions.
5. **Mapping**: `utils/emotionMapper.js` converts the winning emotion directly into a curated MoodTunes playlist.

All of this happens inside a `tf.tidy()` memory block in `useEmotionDetection.js` to ensure zero memory leaks!

---

## 📄 License
This project is open-source under the **MIT License**. Feel free to fork it, learn from it, and build your own versions!

---

## 🙏 Acknowledgments

- Face detection powered by [TensorFlow.js](https://www.tensorflow.org/js) running the wildly efficient [BlazeFace](https://github.com/google/mediapipe) pipeline.
- Emotion classification CNN trained on the [FER-2013](https://www.kaggle.com/datasets/msambare/fer2013) dataset, adapted directly from the incredible open-source [tfjs-emotion-classification](https://github.com/floriankapaun/tfjs-emotion-classification) project by Florian Kapaun (MIT).
- All application micro-interactions powered by [Framer Motion](https://www.framer.com/motion/).