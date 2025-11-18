export const MOODS = [
  {
    value: 'happy',
    name: 'Golden Glow',
    emoji: '😊',
    tagline: 'Sun-soaked pop and funk that keeps the smile going.',
    gradient: 'from-[#F1ECFF] via-[#D9D0FF] to-[#B9ADEE]',
    accent: 'bg-white/80 text-[#2a2440] border border-white/70',
    accentHex: '#d9d0ff',
    spotlightTracks: ['Good as Hell', 'Levitating']
  },
  {
    value: 'excited',
    name: 'Electric Rush',
    emoji: '🤩',
    tagline: 'High-voltage anthems for dance floors and dream-chasing.',
    gradient: 'from-[#E6DCFF] via-[#C5BAFF] to-[#9A92D7]',
    accent: 'bg-[#f7f4ff]/70 text-[#2b2346] border border-white/60',
    accentHex: '#c5baff',
    spotlightTracks: ['Blinding Lights', 'Don\'t Start Now']
  },
  {
    value: 'relaxed',
    name: 'Cloud Drift',
    emoji: '😌',
    tagline: 'Laid-back grooves for gentle afternoons and deep breaths.',
    gradient: 'from-[#F2F5FF] via-[#CED7FF] to-[#A4B1D7]',
    accent: 'bg-white/75 text-[#2a2b3f] border border-white/60',
    accentHex: '#ced7ff',
    spotlightTracks: ['Peach Jam', 'Sunset Lover']
  },
  {
    value: 'sad',
    name: 'Indigo Haze',
    emoji: '😢',
    tagline: 'Tender ballads to lean into every feeling.',
    gradient: 'from-[#E0E2FF] via-[#AEB2D3] to-[#6F6A87]',
    accent: 'bg-[#f2f2ff]/60 text-[#2b273d] border border-white/40',
    accentHex: '#b5b8dd',
    spotlightTracks: ['drivers license', 'Jealous']
  },
  {
    value: 'neutral',
    name: 'Midnight Drive',
    emoji: '😎',
    tagline: 'Cinematic synths and alt grooves for every vibe.',
    gradient: 'from-[#E9E9F5] via-[#BABCCE] to-[#5D5B73]',
    accent: 'bg-white/60 text-[#2a2838] border border-white/40',
    accentHex: '#babccd',
    spotlightTracks: ['Night Changes', 'Retrograde']
  }
];

export const MOOD_PLAYLISTS = {
  happy: [
    {
      title: 'Good as Hell',
      artist: 'Lizzo',
      embedId: 'vuq-VAiW9tA',
      genre: 'Pop',
      releaseYear: '2016',
      vibe: 'Confidence boost',
      description: 'Instant sunshine with brass stabs and unapologetic energy.'
    },
    {
      title: 'Levitating',
      artist: 'Dua Lipa',
      embedId: 'TUVcZfQe-Kw',
      genre: 'Disco Pop',
      releaseYear: '2020',
      vibe: 'Glitter grooves',
      description: 'Retro synths and feel-good hooks for a personal dance floor.'
    },
    {
      title: 'About Damn Time',
      artist: 'Lizzo',
      embedId: 'IXXxciRUMzE',
      genre: 'Funk Pop',
      releaseYear: '2022',
      vibe: 'Glow-up anthem',
      description: 'Bass-driven swagger that celebrates every little win.'
    },
    {
      title: 'Walking on Sunshine',
      artist: 'Katrina & The Waves',
      embedId: 'iPUmE-tne5U',
      genre: '80s Pop',
      releaseYear: '1985',
      vibe: 'Retro joyride',
      description: 'Bright horns and unstoppable optimism from the first hit.'
    }
  ],
  excited: [
    {
      title: 'Blinding Lights',
      artist: 'The Weeknd',
      embedId: '4NRXx6U8ABQ',
      genre: 'Synthwave',
      releaseYear: '2019',
      vibe: 'Neon chase',
      description: 'Pulsing basslines tailor-made for late-night drives.'
    },
    {
      title: "Don't Start Now",
      artist: 'Dua Lipa',
      embedId: 'oygrmJFKYZY',
      genre: 'Nu Disco',
      releaseYear: '2019',
      vibe: 'Dancefloor armor',
      description: 'Bass slaps and violins that force a shoulder shimmy.'
    },
    {
      title: 'Industry Baby',
      artist: 'Lil Nas X & Jack Harlow',
      embedId: 'UTHLKHL_whs',
      genre: 'Hip-Hop',
      releaseYear: '2021',
      vibe: 'Victory lap',
      description: 'Trumpets blazing and drums that hit like fireworks.'
    },
    {
      title: 'Turn Down for What',
      artist: 'DJ Snake & Lil Jon',
      embedId: 'HMUDVMiITOU',
      genre: 'Trap',
      releaseYear: '2013',
      vibe: 'Adrenaline spike',
      description: 'A drop so chaotic it practically flips the table for you.'
    }
  ],
  relaxed: [
    {
      title: 'Sunset Lover',
      artist: 'Petit Biscuit',
      embedId: 'x6fSk-0DWEs',
      genre: 'Chillwave',
      releaseYear: '2015',
      vibe: 'Ocean breeze',
      description: 'Glass-like synths that feel like drifting above clouds.'
    },
    {
      title: 'Peaches',
      artist: 'Justin Bieber ft. Daniel Caesar & Giveon',
      embedId: 'tQ0yjYUFKAE',
      genre: 'R&B',
      releaseYear: '2021',
      vibe: 'Lazy afternoon',
      description: 'Silky vocals over butter-smooth chords and bass.'
    },
    {
      title: 'Pink + White',
      artist: 'Frank Ocean',
      embedId: 'mXb6m-TDAEw',
      genre: 'Alt R&B',
      releaseYear: '2016',
      vibe: 'Weightless',
      description: 'Melting harmonies that turn any room golden.'
    },
    {
      title: 'Slow Dancing in the Dark',
      artist: 'Joji',
      embedId: 'K3Qzzggn--s',
      genre: 'Lo-fi R&B',
      releaseYear: '2018',
      vibe: 'Soft glow',
      description: 'Dreamy chords and echoes that feel like floating.'
    }
  ],
  sad: [
    {
      title: 'drivers license',
      artist: 'Olivia Rodrigo',
      embedId: 'ZmDBbnmKpqQ',
      genre: 'Indie Pop',
      releaseYear: '2021',
      vibe: 'Cinematic heartbreak',
      description: 'The ache of headlights and unanswered texts.'
    },
    {
      title: 'Jealous',
      artist: 'Labrinth',
      embedId: 'P8QA4V0MY1c',
      genre: 'Soul',
      releaseYear: '2014',
      vibe: 'Slow tear',
      description: 'A stripped vocal performance that feels like a confession.'
    },
    {
      title: 'Lose You To Love Me',
      artist: 'Selena Gomez',
      embedId: 'zlJDTxahav0',
      genre: 'Pop Ballad',
      releaseYear: '2019',
      vibe: 'Closure',
      description: 'Piano pulses and strings that bloom with resilience.'
    },
    {
      title: 'All I Want',
      artist: 'Kodaline',
      embedId: 'mtf7hC17IBM',
      genre: 'Indie Folk',
      releaseYear: '2013',
      vibe: 'Slow burn',
      description: 'Echoed guitars that make every raindrop louder.'
    }
  ],
  neutral: [
    {
      title: 'Night Changes',
      artist: 'One Direction',
      embedId: 'syFZfO_wfMQ',
      genre: 'Acoustic Pop',
      releaseYear: '2014',
      vibe: 'Nostalgia drive',
      description: 'Soft strums capturing the magic of unplanned nights.'
    },
    {
      title: 'Retrograde',
      artist: 'James Blake',
      embedId: '6p6PcFFUm5I',
      genre: 'Alt Electronic',
      releaseYear: '2013',
      vibe: 'Moody orbit',
      description: 'Hazy vocals over a heartbeat of analog synths.'
    },
    {
      title: 'Tokyo Drift (Freestyle)',
      artist: 'Lil Uzi Vert',
      embedId: 'Rshe_GJIq8k',
      genre: 'Cloud Rap',
      releaseYear: '2020',
      vibe: 'Night ride',
      description: 'Sub-bass cruising for city lights and skyline views.'
    },
    {
      title: 'Heat Waves',
      artist: 'Glass Animals',
      embedId: 'mRD0-GxqHVo',
      genre: 'Psychedelic Pop',
      releaseYear: '2020',
      vibe: 'Summer haze',
      description: 'Looping hooks that feel like watching sunsets on repeat.'
    }
  ]
};

export const MOODS_BY_VALUE = MOODS.reduce((acc, mood) => {
  acc[mood.value] = mood;
  return acc;
}, {});
