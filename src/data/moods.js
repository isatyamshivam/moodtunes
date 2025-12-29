export const MOODS = [
  {
    value: 'happy',
    name: 'Happy',
    emoji: '😊',
    tagline: 'Sun-soaked pop and funk that keeps the smile going.',
    gradient: 'from-[#F1ECFF] via-[#D9D0FF] to-[#B9ADEE]',
    accent: 'bg-white/80 text-[#2a2440] border border-white/70',
    accentHex: '#d9d0ff',
    spotlightTracks: ['Good as Hell', 'Levitating']
  },
  {
    value: 'excited',
    name: 'Excited',
    emoji: '🤩',
    tagline: 'High-voltage anthems for dance floors and dream-chasing.',
    gradient: 'from-[#E6DCFF] via-[#C5BAFF] to-[#9A92D7]',
    accent: 'bg-[#f7f4ff]/70 text-[#2b2346] border border-white/60',
    accentHex: '#c5baff',
    spotlightTracks: ['Blinding Lights', 'Don\'t Start Now']
  },
  {
    value: 'relaxed',
    name: 'Relaxed',
    emoji: '😌',
    tagline: 'Laid-back grooves for gentle afternoons and deep breaths.',
    gradient: 'from-[#F2F5FF] via-[#CED7FF] to-[#A4B1D7]',
    accent: 'bg-white/75 text-[#2a2b3f] border border-white/60',
    accentHex: '#ced7ff',
    spotlightTracks: ['Peach Jam', 'Sunset Lover']
  },
  {
    value: 'sad',
    name: 'Sad',
    emoji: '😢',
    tagline: 'Tender ballads to lean into every feeling.',
    gradient: 'from-[#E0E2FF] via-[#AEB2D3] to-[#6F6A87]',
    accent: 'bg-[#f2f2ff]/60 text-[#2b273d] border border-white/40',
    accentHex: '#b5b8dd',
    spotlightTracks: ['drivers license', 'Jealous']
  },
  {
    value: 'neutral',
    name: 'Neutral',
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
    },
    {
      title: 'Uptown Funk',
      artist: 'Mark Ronson ft. Bruno Mars',
      embedId: 'OPf0YbXqDm0',
      genre: 'Funk Pop',
      releaseYear: '2014',
      vibe: 'Block party',
      description: 'Horn stabs and swaggering vocals engineered for pure celebration.'
    },
    {
      title: "Can't Stop the Feeling!",
      artist: 'Justin Timberlake',
      embedId: 'ru0K8uYEZWw',
      genre: 'Pop',
      releaseYear: '2016',
      vibe: 'Feel-good rush',
      description: 'Shimmering guitars and falsetto choruses that demand a grin.'
    },
    {
      title: 'Happy',
      artist: 'Pharrell Williams',
      embedId: 'ZbZSe6N_BXs',
      genre: 'Neo Soul',
      releaseYear: '2013',
      vibe: 'Pure joy',
      description: 'Handclaps, choirs, and sunshine bottled into three minutes.'
    },
    {
      title: "I'm a Believer",
      artist: 'Smash Mouth',
      embedId: '2Q_ZzBGPdqE',
      genre: 'Alt Pop',
      releaseYear: '2001',
      vibe: 'Cartoon happiness',
      description: 'Power chords and bright harmonies that trigger instant nostalgia.'
    },
    {
      title: 'Good Time',
      artist: 'Owl City & Carly Rae Jepsen',
      embedId: 'H7HmzwI67ec',
      genre: 'Electro Pop',
      releaseYear: '2012',
      vibe: 'Road-trip cheer',
      description: 'Sparkling synths and group vocals built for carefree drives.'
    },
    {
      title: 'Shut Up and Dance',
      artist: 'WALK THE MOON',
      embedId: '6JCLY0Rlx6Q',
      genre: 'Indie Pop',
      releaseYear: '2014',
      vibe: 'Prom night',
      description: 'New-wave guitars and shouted hooks that beg for dancing.'
    },
    {
      title: 'Juice',
      artist: 'Lizzo',
      embedId: 'XaCrQL_8eMY',
      genre: 'Funk Pop',
      releaseYear: '2019',
      vibe: 'Main character',
      description: 'Sassy basslines and call-and-response vocals dripping with confidence.'
    },
    {
      title: 'Feel It Still',
      artist: 'Portugal. The Man',
      embedId: 'pBkHHoOIIn8',
      genre: 'Psychedelic Pop',
      releaseYear: '2017',
      vibe: 'Retro strut',
      description: 'Slinky grooves and falsetto melodies that shimmy endlessly.'
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
    },
    {
      title: 'Titanium',
      artist: 'David Guetta ft. Sia',
      embedId: 'JRfuAukYTKg',
      genre: 'Electro House',
      releaseYear: '2011',
      vibe: 'Invincible',
      description: 'Explosive drops and powerhouse vocals to armor every sprint.'
    },
    {
      title: 'POWER',
      artist: 'Kanye West',
      embedId: 'L53gjP-TtGE',
      genre: 'Hip-Hop',
      releaseYear: '2010',
      vibe: 'Rally cry',
      description: 'Chanting choirs and stomping drums that feel gladiator-sized.'
    },
    {
      title: 'Bangarang',
      artist: 'Skrillex ft. Sirah',
      embedId: 'YJVmu6yttiw',
      genre: 'Dubstep',
      releaseYear: '2012',
      vibe: 'Bass chaos',
      description: 'Laser FX and wobbles engineered for the wildest moments.'
    },
    {
      title: "Can't Hold Us",
      artist: 'Macklemore & Ryan Lewis ft. Ray Dalton',
      embedId: '2zNSgSzhBfM',
      genre: 'Hip-Hop',
      releaseYear: '2013',
      vibe: 'Victory lap',
      description: 'Rolling pianos and horns that build to a festival-sized chant.'
    },
    {
      title: 'Light It Up',
      artist: 'Major Lazer & Nyla',
      embedId: 'dPKG1EUipFQ',
      genre: 'Dancehall',
      releaseYear: '2015',
      vibe: 'Carnival fire',
      description: 'Tropical percussion and chopped vocals to ignite any crowd.'
    },
    {
      title: 'Animals',
      artist: 'Martin Garrix',
      embedId: 'gCYcHz2k5x0',
      genre: 'Big Room',
      releaseYear: '2013',
      vibe: 'Drop city',
      description: 'Minimal leads and pounding kicks for maximal adrenaline.'
    },
    {
      title: 'Levels',
      artist: 'Avicii',
      embedId: 'q2G74RoGVl8',
      genre: 'Progressive House',
      releaseYear: '2011',
      vibe: 'Summit climb',
      description: 'Euphoric synth leads that keep rising with no ceiling.'
    },
    {
      title: 'We Found Love',
      artist: 'Rihanna ft. Calvin Harris',
      embedId: 'tg00YEETFzg',
      genre: 'Dance Pop',
      releaseYear: '2011',
      vibe: 'Laser hearts',
      description: 'Euphoric hooks and neon synths for lightning-strike crushes.'
    }
  ],
  relaxed: [
    {
      title: 'Mystery of Love',
      artist: 'Sufjan Stevens',
      embedId: '6NPyR9nFtlI',
      genre: 'Indie Folk',
      releaseYear: '2017',
      vibe: 'Tender drift',
      description: 'Featherlight strings and hushed vocals for wistful afternoons.'
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
      title: 'Good Days',
      artist: 'SZA',
      embedId: '3u5cfUl1u_0',
      genre: 'Alt R&B',
      releaseYear: '2020',
      vibe: 'Floating hope',
      description: 'Airy harmonies and twinkling guitars that feel like lucid dreaming.'
    },
    {
      title: 'Slow Dancing in the Dark',
      artist: 'Joji',
      embedId: 'K3Qzzggn--s',
      genre: 'Lo-fi R&B',
      releaseYear: '2018',
      vibe: 'Soft glow',
      description: 'Dreamy chords and echoes that feel like floating.'
    },
    {
      title: 'Better Together',
      artist: 'Jack Johnson',
      embedId: 'seZMOTGCDag',
      genre: 'Acoustic',
      releaseYear: '2005',
      vibe: 'Sun porch',
      description: 'Gentle guitar strums tailor-made for golden-hour company.'
    },
    {
      title: 'Get You the Moon',
      artist: 'Kina ft. Snøw',
      embedId: 'wdt1tyFe9vY',
      genre: 'Lo-fi',
      releaseYear: '2018',
      vibe: 'Starry confessional',
      description: 'Soft keys and whispered vocals that feel like a diary entry.'
    },
    {
      title: 'Coffee',
      artist: 'beabadoobee',
      embedId: '3-NTv0CdFCk',
      genre: 'Indie Folk',
      releaseYear: '2017',
      vibe: 'Lazy cuddle',
      description: 'Lo-fi acoustic warmth steeped in tape hiss and sweetness.'
    },
    {
      title: 'Lost in Japan',
      artist: 'Shawn Mendes',
      embedId: 'x0mKVeKxF44',
      genre: 'Pop R&B',
      releaseYear: '2018',
      vibe: 'Jet-lag dream',
      description: 'Silky basslines with a jazzy bounce perfect for midnight wandering.'
    },
    {
      title: 'Location',
      artist: 'Khalid',
      embedId: 'by3yRdlQvzs',
      genre: 'Alt R&B',
      releaseYear: '2016',
      vibe: 'Late-night text',
      description: '808s and crooning verses that feel like a gentle DM.'
    },
    {
      title: 'Gravity',
      artist: 'John Mayer',
      embedId: 'vMFcxkjwv-U',
      genre: 'Soul',
      releaseYear: '2006',
      vibe: 'Slow sway',
      description: 'Warm guitar bends and hushed vocals for reflective evenings.'
    },
    {
      title: 'Ocean Eyes',
      artist: 'Billie Eilish',
      embedId: 'viimfQi_pUw',
      genre: 'Dream Pop',
      releaseYear: '2016',
      vibe: 'Weightless',
      description: 'Featherlight harmonies that feel like floating in deep blue.'
    },
    {
      title: 'Movements',
      artist: 'Pham ft. Yung Fusion',
      embedId: 'Mkx-9wSxJW0',
      genre: 'Chill Trap',
      releaseYear: '2016',
      vibe: 'Lo-fi breeze',
      description: 'Silky pads and chopped vocals perfect for focus or floating.'
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
    },
    {
      title: 'Someone Like You',
      artist: 'Adele',
      embedId: 'hLQl3WQQoQ0',
      genre: 'Piano Ballad',
      releaseYear: '2011',
      vibe: 'Bittersweet goodbye',
      description: 'A soaring farewell wrapped in raw, trembling vocals.'
    },
    {
      title: "when the party's over",
      artist: 'Billie Eilish',
      embedId: 'pbMwTqkKSps',
      genre: 'Alt Pop',
      releaseYear: '2018',
      vibe: 'Blue hour',
      description: 'Sparse harmonies and glass-clink percussion that haunt gently.'
    },
    {
      title: 'Secret Love Song',
      artist: 'Little Mix ft. Jason Derulo',
      embedId: 'qgy7vEje5-w',
      genre: 'Pop Ballad',
      releaseYear: '2015',
      vibe: 'Hidden feelings',
      description: 'Belting harmonies for every love that has to stay a whisper.'
    },
    {
      title: 'The Night We Met',
      artist: 'Lord Huron',
      embedId: 'KtlgYxa6BMU',
      genre: 'Indie Folk',
      releaseYear: '2015',
      vibe: 'Ghost story',
      description: 'Echoed crooning and swelling strings for aching flashbacks.'
    },
    {
      title: 'From the Dining Table',
      artist: 'Harry Styles',
      embedId: 'wZ1g1CLoQbY',
      genre: 'Acoustic Ballad',
      releaseYear: '2017',
      vibe: 'Lonely dawn',
      description: 'Sparse guitar and reverb-soaked vocals for post-midnight thoughts.'
    },
    {
      title: 'Skinny Love',
      artist: 'Birdy',
      embedId: 'aNzCDt2eidg',
      genre: 'Indie Folk',
      releaseYear: '2011',
      vibe: 'Delicate ache',
      description: 'Featherweight piano and pleading vocals that crack open hearts.'
    },
    {
      title: 'All Too Well (10 Minute Version)',
      artist: 'Taylor Swift',
      embedId: 'tollGa3S0o8',
      genre: 'Folk Pop',
      releaseYear: '2021',
      vibe: 'Memoir mode',
      description: 'Storybook lyricism stretching every detail of a love undone.'
    },
    {
      title: 'Arcade',
      artist: 'Duncan Laurence',
      embedId: 'bMAZiVMDMqs',
      genre: 'Indie Pop',
      releaseYear: '2019',
      vibe: 'Melancholy tide',
      description: 'Cathedral echo vocals chasing hope through heartache.'
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
      title: 'Midnight City',
      artist: 'M83',
      embedId: 'dX3k_QDnzHE',
      genre: 'Dream Pop',
      releaseYear: '2011',
      vibe: 'City skyline',
      description: 'Soaring synth arps and a driving beat for endless neon rides.'
    },
    {
      title: 'Heat Waves',
      artist: 'Glass Animals',
      embedId: 'mRD0-GxqHVo',
      genre: 'Psychedelic Pop',
      releaseYear: '2020',
      vibe: 'Summer haze',
      description: 'Looping hooks that feel like watching sunsets on repeat.'
    },
    {
      title: 'Electric Feel',
      artist: 'MGMT',
      embedId: 'MmZexg8sxyk',
      genre: 'Psychedelic Pop',
      releaseYear: '2008',
      vibe: 'Indie shimmer',
      description: 'Slinky basslines and surreal vocals for neon-lit cruising.'
    },
    {
      title: 'Bad Habits',
      artist: 'Ed Sheeran',
      embedId: 'orJSJGHjBLI',
      genre: 'Alt Pop',
      releaseYear: '2021',
      vibe: 'Midnight loop',
      description: 'Throbbing synths and falsetto lines perfect for late-night pacing.'
    },
    {
      title: 'Riptide',
      artist: 'Vance Joy',
      embedId: 'uJ_1HMAGb4k',
      genre: 'Indie Folk',
      releaseYear: '2013',
      vibe: 'Coastal calm',
      description: 'Ukulele strums and singalong hooks to keep things breezy.'
    },
    {
      title: 'Tadow',
      artist: 'Masego & FKJ',
      embedId: 'hC8CH0Z3L54',
      genre: 'Neo Soul',
      releaseYear: '2017',
      vibe: 'Silk lounge',
      description: 'Sax riffs and smooth basslines drifting through lo-fi haze.'
    },
    {
      title: "Hold On, We're Going Home",
      artist: 'Drake ft. Majid Jordan',
      embedId: 'GxgqpCdOKak',
      genre: 'R&B Pop',
      releaseYear: '2013',
      vibe: 'City lights',
      description: 'Glass-clear vocals and synth pads built for skyline drives.'
    },
    {
      title: 'cardigan',
      artist: 'Taylor Swift',
      embedId: 'a1kbLQ0J3WY',
      genre: 'Indie Folk',
      releaseYear: '2020',
      vibe: 'Moody story',
      description: 'Muted drums and whispered storytelling for introspective nights.'
    },
    {
      title: '505',
      artist: 'Arctic Monkeys',
      embedId: 'qU9mHegkTc4',
      genre: 'Indie Rock',
      releaseYear: '2007',
      vibe: 'Late-night drive',
      description: 'Organ swells and smoky vocals suited for endless highways.'
    },
    {
      title: 'Electric',
      artist: 'Alina Baraz ft. Khalid',
      embedId: 'FkDJuP0kFJw',
      genre: 'Alt R&B',
      releaseYear: '2017',
      vibe: 'Midnight bloom',
      description: 'Lush synth chords and whispered harmonies basking in moonlight.'
    }
  ]
};

export const MOODS_BY_VALUE = MOODS.reduce((acc, mood) => {
  acc[mood.value] = mood;
  return acc;
}, {});
