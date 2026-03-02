export const MOODS = [
  {
    value: "happy",
    name: "Happy",
    emoji: "😊",
    tagline: "Sun-soaked pop and funk that keeps the smile going.",
    gradient: "from-[#F1ECFF] via-[#D9D0FF] to-[#B9ADEE]",
    accent: "bg-white/80 text-[#2a2440] border border-white/70",
    accentHex: "#d9d0ff",
    spotlightTracks: ["Good as Hell", "Levitating"],
  },
  {
    value: "excited",
    name: "Excited",
    emoji: "🤩",
    tagline: "High-voltage anthems for dance floors and dream-chasing.",
    gradient: "from-[#E6DCFF] via-[#C5BAFF] to-[#9A92D7]",
    accent: "bg-[#f7f4ff]/70 text-[#2b2346] border border-white/60",
    accentHex: "#c5baff",
    spotlightTracks: ["Blinding Lights", "Don't Start Now"],
  },
  {
    value: "relaxed",
    name: "Relaxed",
    emoji: "😌",
    tagline: "Laid-back grooves for gentle afternoons and deep breaths.",
    gradient: "from-[#F2F5FF] via-[#CED7FF] to-[#A4B1D7]",
    accent: "bg-white/75 text-[#2a2b3f] border border-white/60",
    accentHex: "#ced7ff",
    spotlightTracks: ["Peach Jam", "Sunset Lover"],
  },
  {
    value: "sad",
    name: "Sad",
    emoji: "😢",
    tagline: "Tender ballads to lean into every feeling.",
    gradient: "from-[#E0E2FF] via-[#AEB2D3] to-[#6F6A87]",
    accent: "bg-[#f2f2ff]/60 text-[#2b273d] border border-white/40",
    accentHex: "#b5b8dd",
    spotlightTracks: ["drivers license", "Jealous"],
  },
  {
    value: "neutral",
    name: "Neutral",
    emoji: "😎",
    tagline: "Cinematic synths and alt grooves for every vibe.",
    gradient: "from-[#E9E9F5] via-[#BABCCE] to-[#5D5B73]",
    accent: "bg-white/60 text-[#2a2838] border border-white/40",
    accentHex: "#babccd",
    spotlightTracks: ["Night Changes", "Retrograde"],
  },
];

// ─── MOOD PLAYLISTS ──────────────────────────────────────────────
// Each mood has 5 themed playlists, each containing 12-13 songs.
// Structure: { id, name, description, songs: [...] }

export const MOOD_PLAYLISTS = {
  // ═══════════════════════════════════════════════════════════════
  // HAPPY
  // ═══════════════════════════════════════════════════════════════
  happy: [
    {
      id: "happy-feel-good-pop",
      name: "Feel-Good Pop Anthems",
      description:
        "The brightest pop hits that radiate pure joy and make you want to sing along.",
      songs: [
        {
          title: "Happy",
          artist: "Pharrell Williams",
          embedId: "ZbZSe6N_BXs",
          genre: "Neo Soul",
          releaseYear: "2013",
          vibe: "Pure joy",
          description:
            "Handclaps, choirs, and sunshine bottled into three minutes.",
        },
        {
          title: "Good as Hell",
          artist: "Lizzo",
          embedId: "vuq-VAiW9tA",
          genre: "Pop",
          releaseYear: "2016",
          vibe: "Confidence boost",
          description:
            "Instant sunshine with brass stabs and unapologetic energy.",
        },
        {
          title: "Levitating",
          artist: "Dua Lipa",
          embedId: "TUVcZfQe-Kw",
          genre: "Disco Pop",
          releaseYear: "2020",
          vibe: "Glitter grooves",
          description:
            "Retro synths and feel-good hooks for a personal dance floor.",
        },
        {
          title: "About Damn Time",
          artist: "Lizzo",
          embedId: "IXXxciRUMzE",
          genre: "Funk Pop",
          releaseYear: "2022",
          vibe: "Glow-up anthem",
          description: "Bass-driven swagger that celebrates every little win.",
        },
        {
          title: "Uptown Funk",
          artist: "Mark Ronson ft. Bruno Mars",
          embedId: "OPf0YbXqDm0",
          genre: "Funk Pop",
          releaseYear: "2014",
          vibe: "Block party",
          description:
            "Horn stabs and swaggering vocals engineered for pure celebration.",
        },
        {
          title: "Can't Stop the Feeling!",
          artist: "Justin Timberlake",
          embedId: "ru0K8uYEZWw",
          genre: "Pop",
          releaseYear: "2016",
          vibe: "Feel-good rush",
          description:
            "Shimmering guitars and falsetto choruses that demand a grin.",
        },
        {
          title: "Shake It Off",
          artist: "Taylor Swift",
          embedId: "nfWlot6h_JM",
          genre: "Pop",
          releaseYear: "2014",
          vibe: "Carefree anthem",
          description:
            "Bouncy beats and carefree lyrics that shake away every worry.",
        },
        {
          title: "Dynamite",
          artist: "BTS",
          embedId: "gdZLi9oWNZg",
          genre: "Disco Pop",
          releaseYear: "2020",
          vibe: "Global energy",
          description:
            "Retro disco-pop with infectious choreography and stadium energy.",
        },
        {
          title: "Juice",
          artist: "Lizzo",
          embedId: "XaCrQL_8eMY",
          genre: "Funk Pop",
          releaseYear: "2019",
          vibe: "Main character",
          description:
            "Sassy basslines and call-and-response vocals dripping with confidence.",
        },
        {
          title: "24K Magic",
          artist: "Bruno Mars",
          embedId: "UqyT8IEBkvY",
          genre: "Funk Pop",
          releaseYear: "2016",
          vibe: "VIP energy",
          description:
            "Synth-funk swagger and velvet vocals for a night of luxury.",
        },
        {
          title: "Roar",
          artist: "Katy Perry",
          embedId: "CevxZvSJLk8",
          genre: "Pop",
          releaseYear: "2013",
          vibe: "Power anthem",
          description:
            "Stomping drums and empowering lyrics that ignite inner strength.",
        },
        {
          title: "Shut Up and Dance",
          artist: "WALK THE MOON",
          embedId: "6JCLY0Rlx6Q",
          genre: "Indie Pop",
          releaseYear: "2014",
          vibe: "Prom night",
          description:
            "New-wave guitars and shouted hooks that beg for dancing.",
        },
      ],
    },
    {
      id: "happy-sunshine-funk",
      name: "Sunshine Funk & Soul",
      description: "Soulful grooves and vintage funk that light up any room.",
      songs: [
        {
          title: "Treasure",
          artist: "Bruno Mars",
          embedId: "nPvuNsRccVw",
          genre: "Pop Funk",
          releaseYear: "2012",
          vibe: "Retro crush",
          description: "Doo-wop nostalgia fused with modern pop perfection.",
        },
        {
          title: "September",
          artist: "Earth, Wind & Fire",
          embedId: "Gs069dndIYk",
          genre: "Disco Funk",
          releaseYear: "1978",
          vibe: "Disco classic",
          description:
            "The ultimate feel-good anthem with brass, grooves, and pure celebration.",
        },
        {
          title: "Dancing Queen",
          artist: "ABBA",
          embedId: "xFrGuyw1V8s",
          genre: "Disco Pop",
          releaseYear: "1976",
          vibe: "Dancefloor queen",
          description:
            "Timeless disco perfection that turns everyone into royalty.",
        },
        {
          title: "Superstition",
          artist: "Stevie Wonder",
          embedId: "0CFuCYNx30g",
          genre: "Funk",
          releaseYear: "1972",
          vibe: "Groove master",
          description:
            "Clavinet riffs and funky drums that invented feel-good music.",
        },
        {
          title: "Lovely Day",
          artist: "Bill Withers",
          embedId: "bEeaS6fuUoA",
          genre: "Soul",
          releaseYear: "1977",
          vibe: "Morning glow",
          description:
            "A vocal note held for an eternity of pure warmth and optimism.",
        },
        {
          title: "I Want You Back",
          artist: "The Jackson 5",
          embedId: "s3Q80mk7bxE",
          genre: "Pop Soul",
          releaseYear: "1969",
          vibe: "Infectious joy",
          description:
            "Bouncing bass and young vocals that overflow with irresistible charm.",
        },
        {
          title: "Don't Stop Me Now",
          artist: "Queen",
          embedId: "HgzGwKwLmgM",
          genre: "Rock",
          releaseYear: "1978",
          vibe: "Unstoppable rush",
          description:
            "Freddie Mercury at maximum throttle, turning every moment into a victory lap.",
        },
        {
          title: "You Make My Dreams",
          artist: "Hall & Oates",
          embedId: "EErSKhC0CZs",
          genre: "Pop Rock",
          releaseYear: "1981",
          vibe: "Daydream fuel",
          description:
            "Keyboards and harmonies that soundtrack every romantic comedy montage.",
        },
        {
          title: "Get Lucky",
          artist: "Daft Punk ft. Pharrell Williams",
          embedId: "5NV6Rdv1a3I",
          genre: "Disco",
          releaseYear: "2013",
          vibe: "Midnight magic",
          description:
            "Silky guitar licks and robot funk for endless summer nights.",
        },
        {
          title: "Walking on Sunshine",
          artist: "Katrina & The Waves",
          embedId: "iPUmE-tne5U",
          genre: "80s Pop",
          releaseYear: "1985",
          vibe: "Retro joyride",
          description:
            "Bright horns and unstoppable optimism from the first hit.",
        },
        {
          title: "I Gotta Feeling",
          artist: "Black Eyed Peas",
          embedId: "uSD4vsh1zDA",
          genre: "Electro Pop",
          releaseYear: "2009",
          vibe: "Party starter",
          description:
            "The definitive pre-party anthem that guarantees a good night.",
        },
        {
          title: "Boogie Wonderland",
          artist: "Earth, Wind & Fire",
          embedId: "god7hAPv8f0",
          genre: "Disco",
          releaseYear: "1979",
          vibe: "Disco paradise",
          description:
            "Horns, strings, and groove explosion for nonstop dance energy.",
        },
      ],
    },
    {
      id: "happy-throwback",
      name: "Throwback Happy Hits",
      description:
        "Classic feel-good songs from the 80s, 90s, and 2000s that never get old.",
      songs: [
        {
          title: "I'm a Believer",
          artist: "Smash Mouth",
          embedId: "2Q_ZzBGPdqE",
          genre: "Alt Pop",
          releaseYear: "2001",
          vibe: "Cartoon happiness",
          description:
            "Power chords and bright harmonies that trigger instant nostalgia.",
        },
        {
          title: "Mr. Blue Sky",
          artist: "Electric Light Orchestra",
          embedId: "aQUlA8Hcv4s",
          genre: "Art Rock",
          releaseYear: "1977",
          vibe: "Morning bliss",
          description:
            "Orchestra meets rock in the most joyful sunrise anthem ever composed.",
        },
        {
          title: "Girls Just Want to Have Fun",
          artist: "Cyndi Lauper",
          embedId: "PIb6AZdTr-A",
          genre: "Pop",
          releaseYear: "1983",
          vibe: "Freedom anthem",
          description:
            "New-wave synths and carefree spirit that defined a generation.",
        },
        {
          title: "Livin' on a Prayer",
          artist: "Bon Jovi",
          embedId: "lDK9QqIzhwk",
          genre: "Rock",
          releaseYear: "1986",
          vibe: "Arena chorus",
          description:
            "Talk-box intro and stadium-sized chorus that lifts every crowd.",
        },
        {
          title: "Take on Me",
          artist: "a-ha",
          embedId: "djV11Xbc914",
          genre: "Synth Pop",
          releaseYear: "1985",
          vibe: "Synth chase",
          description:
            "Iconic synth riff and sky-high vocals that never lose their thrill.",
        },
        {
          title: "Don't Stop Believin'",
          artist: "Journey",
          embedId: "1k8craCGpgs",
          genre: "Rock",
          releaseYear: "1981",
          vibe: "Road anthem",
          description:
            "Piano intro and building grandeur that fuels endless road trips.",
        },
        {
          title: "Eye of the Tiger",
          artist: "Survivor",
          embedId: "btPJPFnesV4",
          genre: "Rock",
          releaseYear: "1982",
          vibe: "Champion mindset",
          description:
            "Power chords and determination wrapped in the ultimate training montage.",
        },
        {
          title: "Good Time",
          artist: "Owl City & Carly Rae Jepsen",
          embedId: "H7HmzwI67ec",
          genre: "Electro Pop",
          releaseYear: "2012",
          vibe: "Road-trip cheer",
          description:
            "Sparkling synths and group vocals built for carefree drives.",
        },
        {
          title: "Footloose",
          artist: "Kenny Loggins",
          embedId: "ltrMfT4Qz5Y",
          genre: "Pop Rock",
          releaseYear: "1984",
          vibe: "Dance rebellion",
          description:
            "High-energy grooves that kick off shoes and start the party.",
        },
        {
          title: "Wake Me Up Before You Go-Go",
          artist: "Wham!",
          embedId: "pIgZ7gMze7A",
          genre: "Pop",
          releaseYear: "1984",
          vibe: "Retro energy",
          description:
            "Jitterbug synths and George Michael's voice dripping with fun.",
        },
        {
          title: "Hey Ya!",
          artist: "Outkast",
          embedId: "PWgvGjAhvIw",
          genre: "Funk Pop",
          releaseYear: "2003",
          vibe: "Funky rebellion",
          description:
            "Genre-bending grooves and shake-it polaroid energy in every beat.",
        },
        {
          title: "MMMBop",
          artist: "Hanson",
          embedId: "NHozn0YXAeE",
          genre: "Pop",
          releaseYear: "1997",
          vibe: "90s nostalgia",
          description:
            "Catchy hooks and youthful harmonies that defined 90s sunshine pop.",
        },
        {
          title: "Everybody (Backstreet's Back)",
          artist: "Backstreet Boys",
          embedId: "6M6samPEMpM",
          genre: "Pop",
          releaseYear: "1997",
          vibe: "Boy band bliss",
          description:
            "Iconic 90s pop with harmonies and choreography built for singalongs.",
        },
      ],
    },
    {
      id: "happy-dance-party",
      name: "Dance Party Essentials",
      description:
        "Infectious beats that fill the dance floor with smiles and sing-alongs.",
      songs: [
        {
          title: "Despacito",
          artist: "Luis Fonsi ft. Daddy Yankee",
          embedId: "kJQP7kiw5Fk",
          genre: "Reggaeton",
          releaseYear: "2017",
          vibe: "Latin heat",
          description:
            "The reggaeton anthem that conquered the entire world with its groove.",
        },
        {
          title: "Party in the U.S.A.",
          artist: "Miley Cyrus",
          embedId: "M11SvDtPBhA",
          genre: "Pop",
          releaseYear: "2009",
          vibe: "Celebration anthem",
          description:
            "Nodding your head like yeah, moving your hips like yeah.",
        },
        {
          title: "Cheap Thrills",
          artist: "Sia ft. Sean Paul",
          embedId: "nYh-n7EOtMA",
          genre: "Dancehall Pop",
          releaseYear: "2016",
          vibe: "Budget party",
          description:
            "Reggae-pop fusion that proves you don't need money to dance.",
        },
        {
          title: "Rather Be",
          artist: "Clean Bandit ft. Jess Glynne",
          embedId: "m-M1AtrxztU",
          genre: "Dance Pop",
          releaseYear: "2014",
          vibe: "Everywhere anthem",
          description:
            "Classical strings meet electronic drops in a burst of euphoria.",
        },
        {
          title: "Moves Like Jagger",
          artist: "Maroon 5 ft. Christina Aguilera",
          embedId: "iEPTlhBmwRg",
          genre: "Pop Rock",
          releaseYear: "2011",
          vibe: "Swagger grooves",
          description:
            "Funky whistle hooks and electric energy that command the floor.",
        },
        {
          title: "Timber",
          artist: "Pitbull ft. Ke$ha",
          embedId: "hHUbLv4ThOo",
          genre: "EDM Pop",
          releaseYear: "2013",
          vibe: "Floor dropper",
          description: "Country-flavored EDM that brings the whole club down.",
        },
        {
          title: "Starships",
          artist: "Nicki Minaj",
          embedId: "SeIJmciN8mo",
          genre: "Dance Pop",
          releaseYear: "2012",
          vibe: "Galaxy party",
          description:
            "Big drops and fierce verses launched into the pop stratosphere.",
        },
        {
          title: "TiK ToK",
          artist: "Ke$ha",
          embedId: "iP6XpLQM2Cs",
          genre: "Electro Pop",
          releaseYear: "2009",
          vibe: "Morning party",
          description:
            "Glitter-bomb pop that starts the party before you even wake up.",
        },
        {
          title: "Firework",
          artist: "Katy Perry",
          embedId: "QGJuMBdaqIw",
          genre: "Pop",
          releaseYear: "2010",
          vibe: "Inner spark",
          description:
            "Explosive chorus and uplifting spirit that lights up every sky.",
        },
        {
          title: "Dance Monkey",
          artist: "Tones and I",
          embedId: "q0hyYWKXF0Q",
          genre: "Electro Pop",
          releaseYear: "2019",
          vibe: "Viral groove",
          description:
            "Quirky vocals and an unstoppable beat that took over the planet.",
        },
        {
          title: "Sorry",
          artist: "Justin Bieber",
          embedId: "fRh_vgS2dFE",
          genre: "Tropical House",
          releaseYear: "2015",
          vibe: "Dancehall apology",
          description:
            "Tropical beats and an irresistible hook wrapped in pop perfection.",
        },
        {
          title: "This Is What You Came For",
          artist: "Calvin Harris ft. Rihanna",
          embedId: "kOkQ4T5WO9E",
          genre: "EDM",
          releaseYear: "2016",
          vibe: "Summer anthem",
          description:
            "Pulsing synths and Rihanna's vocals at their sleekest and coolest.",
        },
      ],
    },
    {
      id: "happy-indie-sunshine",
      name: "Indie Sunshine",
      description:
        "Alternative and indie tracks that bring warmth, wonder, and happiness.",
      songs: [
        {
          title: "Feel It Still",
          artist: "Portugal. The Man",
          embedId: "pBkHHoOIIn8",
          genre: "Psychedelic Pop",
          releaseYear: "2017",
          vibe: "Retro strut",
          description:
            "Slinky grooves and falsetto melodies that shimmy endlessly.",
        },
        {
          title: "Ho Hey",
          artist: "The Lumineers",
          embedId: "zvCBSSwgtg4",
          genre: "Indie Folk",
          releaseYear: "2012",
          vibe: "Heartfelt singalong",
          description:
            "Stomping folk-pop with a chorus that begs everyone to join in.",
        },
        {
          title: "Home",
          artist: "Edward Sharpe & The Magnetic Zeros",
          embedId: "DHEOF_rcND8",
          genre: "Indie Folk",
          releaseYear: "2009",
          vibe: "Free spirit",
          description:
            "Whistling melodies and communal warmth of a traveling band.",
        },
        {
          title: "Tongue Tied",
          artist: "Grouplove",
          embedId: "1x1wjGKHjBI",
          genre: "Indie Rock",
          releaseYear: "2011",
          vibe: "Carefree energy",
          description:
            "Explosive indie energy with shouted choruses and playful abandon.",
        },
        {
          title: "Some Nights",
          artist: "Fun.",
          embedId: "qQkBeOisNM0",
          genre: "Indie Pop",
          releaseYear: "2012",
          vibe: "Arena indie",
          description: "Anthemic vocals layered with orchestral pop grandeur.",
        },
        {
          title: "Pumped Up Kicks",
          artist: "Foster The People",
          embedId: "SDTZ7iX4vTQ",
          genre: "Indie Pop",
          releaseYear: "2010",
          vibe: "Infectious hook",
          description:
            "Breezy synth-bass groove with a whistleable melody for miles.",
        },
        {
          title: "Budapest",
          artist: "George Ezra",
          embedId: "VHrLPs3_1Fs",
          genre: "Indie Folk",
          releaseYear: "2014",
          vibe: "European escape",
          description:
            "Deep-voiced folk charm that paints postcards with every chorus.",
        },
        {
          title: "Shotgun",
          artist: "George Ezra",
          embedId: "v_B3qkp4nO0",
          genre: "Indie Pop",
          releaseYear: "2018",
          vibe: "Summer windows",
          description:
            "Sun-kissed melodies and carefree energy for open-road adventures.",
        },
        {
          title: "Dog Days Are Over",
          artist: "Florence + The Machine",
          embedId: "iWOyfLBYtuU",
          genre: "Indie Pop",
          releaseYear: "2008",
          vibe: "Euphoric escape",
          description:
            "Thundering drums and soaring vocals that build to pure exhilaration.",
        },
        {
          title: "On Top of the World",
          artist: "Imagine Dragons",
          embedId: "w5tWYmIOWGk",
          genre: "Indie Pop",
          releaseYear: "2012",
          vibe: "Summit feeling",
          description:
            "Bright melodies and grateful lyrics for celebrating every small win.",
        },
        {
          title: "Little Talks",
          artist: "Of Monsters and Men",
          embedId: "ghb6eDopW8I",
          genre: "Indie Folk",
          releaseYear: "2011",
          vibe: "Whimsical adventure",
          description:
            "Dueling vocals and brass that paint a fantastical musical journey.",
        },
        {
          title: "Stolen Dance",
          artist: "Milky Chance",
          embedId: "iX-QaNkd-AM",
          genre: "Indie Folk",
          releaseYear: "2013",
          vibe: "Breezy groove",
          description:
            "Lo-fi guitar loops and laid-back vocals for carefree afternoons.",
        },
      ],
    },
  ],

  // ═══════════════════════════════════════════════════════════════
  // EXCITED
  // ═══════════════════════════════════════════════════════════════
  excited: [
    {
      id: "excited-edm-festival",
      name: "EDM Festival Bangers",
      description:
        "Explosive drops and festival anthems that electrify any moment.",
      songs: [
        {
          title: "Animals",
          artist: "Martin Garrix",
          embedId: "gCYcHz2k5x0",
          genre: "Big Room",
          releaseYear: "2013",
          vibe: "Drop city",
          description:
            "Minimal leads and pounding kicks for maximal adrenaline.",
        },
        {
          title: "Levels",
          artist: "Avicii",
          embedId: "_ovdm2yX4MA",
          genre: "Progressive House",
          releaseYear: "2011",
          vibe: "Summit climb",
          description: "Euphoric synth leads that keep rising with no ceiling.",
        },
        {
          title: "Titanium",
          artist: "David Guetta ft. Sia",
          embedId: "JRfuAukYTKg",
          genre: "Electro House",
          releaseYear: "2011",
          vibe: "Invincible",
          description:
            "Explosive drops and powerhouse vocals to armor every sprint.",
        },
        {
          title: "Bangarang",
          artist: "Skrillex ft. Sirah",
          embedId: "YJVmu6yttiw",
          genre: "Dubstep",
          releaseYear: "2012",
          vibe: "Bass chaos",
          description:
            "Laser FX and wobbles engineered for the wildest moments.",
        },
        {
          title: "Turn Down for What",
          artist: "DJ Snake & Lil Jon",
          embedId: "HMUDVMiITOU",
          genre: "Trap",
          releaseYear: "2013",
          vibe: "Adrenaline spike",
          description:
            "A drop so chaotic it practically flips the table for you.",
        },
        {
          title: "We Found Love",
          artist: "Rihanna ft. Calvin Harris",
          embedId: "tg00YEETFzg",
          genre: "Dance Pop",
          releaseYear: "2011",
          vibe: "Laser hearts",
          description:
            "Euphoric hooks and neon synths for lightning-strike crushes.",
        },
        {
          title: "Clarity",
          artist: "Zedd ft. Foxes",
          embedId: "IxxstCcJlsc",
          genre: "Electro House",
          releaseYear: "2012",
          vibe: "Crystal drop",
          description:
            "Soaring vocals meet razor-sharp synths in an emotional anthem.",
        },
        {
          title: "Faded",
          artist: "Alan Walker",
          embedId: "60ItHLz5WEA",
          genre: "Electro House",
          releaseYear: "2015",
          vibe: "Ethereal drop",
          description:
            "Atmospheric pads and massive drops that haunt beautifully.",
        },
        {
          title: "Wake Me Up",
          artist: "Avicii",
          embedId: "IcrbM1l_BoI",
          genre: "EDM Folk",
          releaseYear: "2013",
          vibe: "Festival sunrise",
          description:
            "Acoustic guitar meets festival drops in a genre-defying anthcm.",
        },
        {
          title: "Don't You Worry Child",
          artist: "Swedish House Mafia",
          embedId: "1y6smkh6c-0",
          genre: "Progressive House",
          releaseYear: "2012",
          vibe: "Festival farewell",
          description:
            "Epic piano and uplifting drops that close every festival perfectly.",
        },
        {
          title: "Lean On",
          artist: "Major Lazer & DJ Snake ft. MØ",
          embedId: "YqeW9_5kURI",
          genre: "Dancehall EDM",
          releaseYear: "2015",
          vibe: "Tropical bass",
          description:
            "Tropical synths and dancehall rhythms for an global dance anthem.",
        },
        {
          title: "Scared to Be Lonely",
          artist: "Martin Garrix & Dua Lipa",
          embedId: "e2vBLDIl9oY",
          genre: "Future Bass",
          releaseYear: "2017",
          vibe: "Emotional drop",
          description:
            "Vulnerable lyrics paired with powerful festival-ready production.",
        },
      ],
    },
    {
      id: "excited-hiphop-hype",
      name: "Hip-Hop Hype Train",
      description:
        "Hard-hitting bars and beats that get the adrenaline pumping.",
      songs: [
        {
          title: "Industry Baby",
          artist: "Lil Nas X & Jack Harlow",
          embedId: "UTHLKHL_whs",
          genre: "Hip-Hop",
          releaseYear: "2021",
          vibe: "Victory lap",
          description: "Trumpets blazing and drums that hit like fireworks.",
        },
        {
          title: "POWER",
          artist: "Kanye West",
          embedId: "L53gjP-TtGE",
          genre: "Hip-Hop",
          releaseYear: "2010",
          vibe: "Rally cry",
          description:
            "Chanting choirs and stomping drums that feel gladiator-sized.",
        },
        {
          title: "Can't Hold Us",
          artist: "Macklemore & Ryan Lewis ft. Ray Dalton",
          embedId: "2zNSgSzhBfM",
          genre: "Hip-Hop",
          releaseYear: "2013",
          vibe: "Victory lap",
          description:
            "Rolling pianos and horns that build to a festival-sized chant.",
        },
        {
          title: "HUMBLE.",
          artist: "Kendrick Lamar",
          embedId: "tvTRZJ-4EyI",
          genre: "Hip-Hop",
          releaseYear: "2017",
          vibe: "Raw power",
          description:
            "Minimalist piano and commanding bars that demand respect.",
        },
        {
          title: "god's plan",
          artist: "Drake",
          embedId: "xpVfcZ0ZcFM",
          genre: "Hip-Hop",
          releaseYear: "2018",
          vibe: "Blessings flow",
          description:
            "Smooth flows over lush beats, celebrating life and generosity.",
        },
        {
          title: "Stronger",
          artist: "Kanye West",
          embedId: "PsO6ZnUZI0g",
          genre: "Hip-Hop",
          releaseYear: "2007",
          vibe: "Power surge",
          description:
            "Daft Punk samples fused with Kanye's relentless ambition.",
        },
        {
          title: "Lose Yourself",
          artist: "Eminem",
          embedId: "_Yhyp-_hX2s",
          genre: "Hip-Hop",
          releaseYear: "2002",
          vibe: "One shot",
          description:
            "The most intense motivational rap ever written, bar for bar.",
        },
        {
          title: "All of the Lights",
          artist: "Kanye West",
          embedId: "HAfFfqiYLp0",
          genre: "Hip-Hop",
          releaseYear: "2010",
          vibe: "Grand spectacle",
          description:
            "Orchestral bombast with an all-star cast of voices and horns.",
        },
        {
          title: "Old Town Road",
          artist: "Lil Nas X ft. Billy Ray Cyrus",
          embedId: "r7qovpFAGrQ",
          genre: "Country Rap",
          releaseYear: "2019",
          vibe: "Genre breaker",
          description:
            "The genre-bending smash that rode to record-breaking heights.",
        },
        {
          title: "Congratulations",
          artist: "Post Malone ft. Quavo",
          embedId: "SC4xMk98Pdc",
          genre: "Hip-Hop",
          releaseYear: "2017",
          vibe: "Celebration",
          description:
            "Triumphant production and melodic flows for life's biggest wins.",
        },
        {
          title: "DNA.",
          artist: "Kendrick Lamar",
          embedId: "NLZRYQMLDW4",
          genre: "Hip-Hop",
          releaseYear: "2017",
          vibe: "Relentless energy",
          description:
            "Rapid-fire bars over a beat that hits harder with every listen.",
        },
        {
          title: "Sicko Mode",
          artist: "Travis Scott",
          embedId: "6ONRf7h3Mdk",
          genre: "Hip-Hop",
          releaseYear: "2018",
          vibe: "Beat switch chaos",
          description:
            "Multiple beat switches and cinematic production that rewrite the rules.",
        },
      ],
    },
    {
      id: "excited-pop-energy",
      name: "Pop Energy Boost",
      description:
        "High-octane pop tracks that fuel unstoppable energy all day.",
      songs: [
        {
          title: "Don't Start Now",
          artist: "Dua Lipa",
          embedId: "oygrmJFKYZY",
          genre: "Nu Disco",
          releaseYear: "2019",
          vibe: "Dancefloor armor",
          description: "Bass slaps and violins that force a shoulder shimmy.",
        },
        {
          title: "Blinding Lights",
          artist: "The Weeknd",
          embedId: "4NRXx6U8ABQ",
          genre: "Synthwave",
          releaseYear: "2019",
          vibe: "Neon chase",
          description: "Pulsing basslines tailor-made for late-night drives.",
        },
        {
          title: "Physical",
          artist: "Dua Lipa",
          embedId: "9HDEHj2yzew",
          genre: "Synth Pop",
          releaseYear: "2020",
          vibe: "Workout groove",
          description:
            "Retro aerobics energy wrapped in sleek modern production.",
        },
        {
          title: "good 4 u",
          artist: "Olivia Rodrigo",
          embedId: "gNi_6U5Pm_o",
          genre: "Pop Punk",
          releaseYear: "2021",
          vibe: "Angry energy",
          description:
            "Pop-punk fury and breakup rage channeled into pure adrenaline.",
        },
        {
          title: "Believer",
          artist: "Imagine Dragons",
          embedId: "7wtfhZwyrcc",
          genre: "Pop Rock",
          releaseYear: "2017",
          vibe: "Pain to power",
          description:
            "Thundering drums and raw vocals that turn struggle into strength.",
        },
        {
          title: "Whatever It Takes",
          artist: "Imagine Dragons",
          embedId: "gOsM-DYAEhY",
          genre: "Pop Rock",
          releaseYear: "2017",
          vibe: "Determined fire",
          description:
            "Glitchy beats and fierce determination in every syllable.",
        },
        {
          title: "Natural",
          artist: "Imagine Dragons",
          embedId: "0I647GU3Jsc",
          genre: "Pop Rock",
          releaseYear: "2018",
          vibe: "Survival instinct",
          description:
            "Arena-ready drums and primal energy that ignites competitive fire.",
        },
        {
          title: "Enemy",
          artist: "Imagine Dragons x JID",
          embedId: "D9G1VOjN_84",
          genre: "Pop Rap",
          releaseYear: "2021",
          vibe: "Battle mode",
          description:
            "Cinematic intensity with hip-hop edge for every boss battle.",
        },
        {
          title: "Flowers",
          artist: "Miley Cyrus",
          embedId: "G7KNmW9a75Y",
          genre: "Pop",
          releaseYear: "2023",
          vibe: "Self-power",
          description:
            "Self-love anthem with grooves that celebrate independence.",
        },
        {
          title: "As It Was",
          artist: "Harry Styles",
          embedId: "H5v3kku4y6Q",
          genre: "Synth Pop",
          releaseYear: "2022",
          vibe: "Running energy",
          description:
            "Driving synths and urgent vocals that feel like sprinting forward.",
        },
        {
          title: "Havana",
          artist: "Camila Cabello",
          embedId: "BQ0mxQXmLsk",
          genre: "Latin Pop",
          releaseYear: "2017",
          vibe: "Latin fire",
          description:
            "Tropical rhythms and sultry vocals with an infectious hook.",
        },
        {
          title: "Watermelon Sugar",
          artist: "Harry Styles",
          embedId: "E07s5ZYadZw",
          genre: "Pop Rock",
          releaseYear: "2019",
          vibe: "Summer rush",
          description:
            "Funky guitar riffs and sun-soaked energy for endless summer days.",
        },
      ],
    },
    {
      id: "excited-rock-adrenaline",
      name: "Rock & Alt Adrenaline",
      description:
        "Hard-hitting rock and alternative tracks that unleash raw, unfiltered power.",
      songs: [
        {
          title: "Smells Like Teen Spirit",
          artist: "Nirvana",
          embedId: "hTWKbfoikeg",
          genre: "Grunge",
          releaseYear: "1991",
          vibe: "Rebellion anthem",
          description:
            "The sound of a generation exploding with distorted fury.",
        },
        {
          title: "Enter Sandman",
          artist: "Metallica",
          embedId: "CD-E-LDc384",
          genre: "Metal",
          releaseYear: "1991",
          vibe: "Heavy thunder",
          description:
            "Crushing riffs and pounding drums that shake the earth.",
        },
        {
          title: "Radioactive",
          artist: "Imagine Dragons",
          embedId: "ktvTqknDobU",
          genre: "Alt Rock",
          releaseYear: "2012",
          vibe: "Awakening",
          description:
            "Slow-building anthem that erupts into apocalyptic energy.",
        },
        {
          title: "Thunder",
          artist: "Imagine Dragons",
          embedId: "fKopy74weus",
          genre: "Alt Pop",
          releaseYear: "2017",
          vibe: "Lightning strike",
          description:
            "Thunderous drops and pitched vocals that electrify the sky.",
        },
        {
          title: "Mr. Brightside",
          artist: "The Killers",
          embedId: "gGdGFtwCNBE",
          genre: "Alt Rock",
          releaseYear: "2003",
          vibe: "Eternal anthem",
          description:
            "Synth-driven rock perfection that never leaves any playlist.",
        },
        {
          title: "Bohemian Rhapsody",
          artist: "Queen",
          embedId: "fJ9rUzIMcZQ",
          genre: "Rock",
          releaseYear: "1975",
          vibe: "Epic opera",
          description:
            "Six minutes of genre-defying genius from operatic to headbanging.",
        },
        {
          title: "Seven Nation Army",
          artist: "The White Stripes",
          embedId: "0J2QdDbelmY",
          genre: "Alt Rock",
          releaseYear: "2003",
          vibe: "Stadium chant",
          description:
            "The most recognizable guitar riff in every stadium on earth.",
        },
        {
          title: "We Will Rock You",
          artist: "Queen",
          embedId: "-tJYN-eG1zk",
          genre: "Rock",
          releaseYear: "1977",
          vibe: "Stomp anthem",
          description:
            "Stomp-stomp-clap: the simplest and most powerful rhythm ever created.",
        },
        {
          title: "Back in Black",
          artist: "AC/DC",
          embedId: "pAgnJDJN4VA",
          genre: "Hard Rock",
          releaseYear: "1980",
          vibe: "Raw power",
          description:
            "Razor-sharp riffs and relentless energy that define hard rock.",
        },
        {
          title: "Welcome to the Jungle",
          artist: "Guns N' Roses",
          embedId: "o1tj2zJ2Wvg",
          genre: "Hard Rock",
          releaseYear: "1987",
          vibe: "Wild ride",
          description:
            "Screeching intro and Axl Rose at his most dangerous and thrilling.",
        },
        {
          title: "Uprising",
          artist: "Muse",
          embedId: "w8KQmps-Sog",
          genre: "Alt Rock",
          releaseYear: "2009",
          vibe: "Revolution call",
          description:
            "Synth basslines and stadium rock that sound like a revolution.",
        },
        {
          title: "Heathens",
          artist: "Twenty One Pilots",
          embedId: "UprcpdanIMo",
          genre: "Alt Pop",
          releaseYear: "2016",
          vibe: "Dark energy",
          description:
            "Moody beats and hypnotic vocals for controlled intensity.",
        },
      ],
    },
    {
      id: "excited-power-anthems",
      name: "Power Anthem Collection",
      description:
        "Cross-genre anthems built for maximum energy and crowd sing-alongs.",
      songs: [
        {
          title: "Light It Up",
          artist: "Major Lazer & Nyla",
          embedId: "dPKG1EUipFQ",
          genre: "Dancehall",
          releaseYear: "2015",
          vibe: "Carnival fire",
          description:
            "Tropical percussion and chopped vocals to ignite any crowd.",
        },
        {
          title: "Closer",
          artist: "The Chainsmokers ft. Halsey",
          embedId: "PT2_F-1esPk",
          genre: "EDM Pop",
          releaseYear: "2016",
          vibe: "Summer anthem",
          description:
            "The defining summer anthem with a drop that never gets old.",
        },
        {
          title: "Something Just Like This",
          artist: "The Chainsmokers & Coldplay",
          embedId: "FM7MFYoylVs",
          genre: "EDM Pop",
          releaseYear: "2017",
          vibe: "Heroic glow",
          description:
            "Chris Martin's vocals soaring over feel-good electronic production.",
        },
        {
          title: "Happier",
          artist: "Marshmello & Bastille",
          embedId: "m7Bc3pLyij0",
          genre: "EDM Pop",
          releaseYear: "2018",
          vibe: "Bittersweet energy",
          description:
            "Emotional lyrics over euphoric drops that hit hard every time.",
        },
        {
          title: "Save Your Tears",
          artist: "The Weeknd",
          embedId: "XXYlFuWEuKI",
          genre: "Synth Pop",
          releaseYear: "2020",
          vibe: "Retro pulse",
          description:
            "80s-inspired synths and vocal hooks that sparkle and soar.",
        },
        {
          title: "Sunflower",
          artist: "Post Malone & Swae Lee",
          embedId: "ApXoWvfEYVU",
          genre: "Pop Rap",
          releaseYear: "2018",
          vibe: "Breezy hit",
          description:
            "Effortlessly cool melodies that became an instant classic.",
        },
        {
          title: "Counting Stars",
          artist: "OneRepublic",
          embedId: "hT_nvWreIhg",
          genre: "Pop Rock",
          releaseYear: "2013",
          vibe: "Midnight fire",
          description:
            "Building intensity and philosophical lyrics that explode at the chorus.",
        },
        {
          title: "A Sky Full of Stars",
          artist: "Coldplay",
          embedId: "VPRjCeoBqrI",
          genre: "Dance Rock",
          releaseYear: "2014",
          vibe: "Cosmic rush",
          description:
            "EDM-infused Coldplay at their most euphoric and danceable.",
        },
        {
          title: "Viva la Vida",
          artist: "Coldplay",
          embedId: "dvgZkm1xWPE",
          genre: "Indie Pop",
          releaseYear: "2008",
          vibe: "Epic grandeur",
          description:
            "Orchestral strings and revolutionary energy in a pop masterpiece.",
        },
        {
          title: "STAY",
          artist: "The Kid LAROI & Justin Bieber",
          embedId: "kTJczUoc26U",
          genre: "Pop",
          releaseYear: "2021",
          vibe: "Urgency",
          description:
            "Short, explosive, and irresistibly catchy pop at maximum speed.",
        },
        {
          title: "Roses (Imanbek Remix)",
          artist: "SAINt JHN",
          embedId: "ele2DMU49Jk",
          genre: "Dance",
          releaseYear: "2019",
          vibe: "Remix magic",
          description:
            "The remix that turned a slow burn into a dance floor explosion.",
        },
        {
          title: "We Are Young",
          artist: "Fun. ft. Janelle Monáe",
          embedId: "Nntd2fgMUYw",
          genre: "Indie Pop",
          releaseYear: "2012",
          vibe: "Invincible youth",
          description:
            "Arena chorus and youthful defiance wrapped in orchestral pop.",
        },
      ],
    },
  ],

  // ═══════════════════════════════════════════════════════════════
  // RELAXED
  // ═══════════════════════════════════════════════════════════════
  relaxed: [
    {
      id: "relaxed-lofi-chill",
      name: "Lo-fi & Chill Beats",
      description:
        "Mellow beats and soft melodies for peaceful, introspective moments.",
      songs: [
        {
          title: "Slow Dancing in the Dark",
          artist: "Joji",
          embedId: "K3Qzzggn--s",
          genre: "Lo-fi R&B",
          releaseYear: "2018",
          vibe: "Soft glow",
          description: "Dreamy chords and echoes that feel like floating.",
        },
        {
          title: "Get You the Moon",
          artist: "Kina ft. Snøw",
          embedId: "wdt1tyFe9vY",
          genre: "Lo-fi",
          releaseYear: "2018",
          vibe: "Starry confessional",
          description:
            "Soft keys and whispered vocals that feel like a diary entry.",
        },
        {
          title: "Coffee",
          artist: "beabadoobee",
          embedId: "3-NTv0CdFCk",
          genre: "Indie Folk",
          releaseYear: "2017",
          vibe: "Lazy cuddle",
          description:
            "Lo-fi acoustic warmth steeped in tape hiss and sweetness.",
        },
        {
          title: "Movements",
          artist: "Pham ft. Yung Fusion",
          embedId: "Mkx-9wSxJW0",
          genre: "Chill Trap",
          releaseYear: "2016",
          vibe: "Lo-fi breeze",
          description:
            "Silky pads and chopped vocals perfect for focus or floating.",
        },
        {
          title: "Sweater Weather",
          artist: "The Neighbourhood",
          embedId: "GCdwKhTtNNw",
          genre: "Indie Rock",
          releaseYear: "2012",
          vibe: "Cozy autumn",
          description:
            "Moody guitar tones and breathy vocals wrapped in autumn air.",
        },
        {
          title: "Let Me Down Slowly",
          artist: "Alec Benjamin",
          embedId: "50VNCymT-Cs",
          genre: "Indie Pop",
          releaseYear: "2018",
          vibe: "Gentle descent",
          description:
            "Delicate voiced storytelling over minimal, heartfelt production.",
        },
        {
          title: "Heather",
          artist: "Conan Gray",
          embedId: "GPUg7n8-M6o",
          genre: "Indie Pop",
          releaseYear: "2020",
          vibe: "Wistful gaze",
          description:
            "Soft vocals painting a picture of quiet longing and beauty.",
        },
        {
          title: "Everything I Wanted",
          artist: "Billie Eilish",
          embedId: "EgBJmlPo8Xw",
          genre: "Dream Pop",
          releaseYear: "2019",
          vibe: "Weightless",
          description: "Whispery layers that float between dream and reality.",
        },
        {
          title: "lovely",
          artist: "Billie Eilish & Khalid",
          embedId: "V1Pl8CzNzCw",
          genre: "Dark Pop",
          releaseYear: "2018",
          vibe: "Haunted calm",
          description:
            "Duet harmonies over sparse beats that create intimate stillness.",
        },
        {
          title: "Circles",
          artist: "Post Malone",
          embedId: "wXhTHyIgQ_U",
          genre: "Pop Rock",
          releaseYear: "2019",
          vibe: "Gentle loop",
          description:
            "Melancholic guitar loops and smooth vocals on an infinite cycle.",
        },
        {
          title: "Stay With Me",
          artist: "Sam Smith",
          embedId: "pB-5XG-DbAA",
          genre: "Soul Pop",
          releaseYear: "2014",
          vibe: "Quiet plea",
          description:
            "Gospel-tinged vocals and piano that speak straight to the heart.",
        },
        {
          title: "Glimpse of Us",
          artist: "Joji",
          embedId: "FvOpPeKSf_4",
          genre: "Piano Ballad",
          releaseYear: "2022",
          vibe: "Quiet reflection",
          description:
            "Tender piano and aching vocals for the most introspective moments.",
        },
      ],
    },
    {
      id: "relaxed-acoustic-calm",
      name: "Acoustic & Folk Calm",
      description:
        "Gentle acoustic strums and folk harmonies for cozy, peaceful evenings.",
      songs: [
        {
          title: "Better Together",
          artist: "Jack Johnson",
          embedId: "seZMOTGCDag",
          genre: "Acoustic",
          releaseYear: "2005",
          vibe: "Sun porch",
          description:
            "Gentle guitar strums tailor-made for golden-hour company.",
        },
        {
          title: "Mystery of Love",
          artist: "Sufjan Stevens",
          embedId: "6NPyR9nFtlI",
          genre: "Indie Folk",
          releaseYear: "2017",
          vibe: "Tender drift",
          description:
            "Featherlight strings and hushed vocals for wistful afternoons.",
        },
        {
          title: "Gravity",
          artist: "John Mayer",
          embedId: "vMFcxkjwv-U",
          genre: "Soul",
          releaseYear: "2006",
          vibe: "Slow sway",
          description:
            "Warm guitar bends and hushed vocals for reflective evenings.",
        },
        {
          title: "Photograph",
          artist: "Ed Sheeran",
          embedId: "nSDgHBxUbVQ",
          genre: "Acoustic Pop",
          releaseYear: "2014",
          vibe: "Memory lane",
          description:
            "Nostalgic guitar picking that turns photographs into feelings.",
        },
        {
          title: "Perfect",
          artist: "Ed Sheeran",
          embedId: "2Vv-BfVoq4g",
          genre: "Pop Ballad",
          releaseYear: "2017",
          vibe: "Wedding waltz",
          description:
            "The modern love ballad with strings that swell perfectly.",
        },
        {
          title: "Thinking Out Loud",
          artist: "Ed Sheeran",
          embedId: "lp-EO5I60KA",
          genre: "Soul Pop",
          releaseYear: "2014",
          vibe: "Timeless love",
          description:
            "Blue-eyed soul with guitar work that defines romantic devotion.",
        },
        {
          title: "Riptide",
          artist: "Vance Joy",
          embedId: "uJ_1HMAGb4k",
          genre: "Indie Folk",
          releaseYear: "2013",
          vibe: "Coastal calm",
          description:
            "Ukulele strums and singalong hooks to keep things breezy.",
        },
        {
          title: "Yellow",
          artist: "Coldplay",
          embedId: "yKNxeF4KMsY",
          genre: "Alt Rock",
          releaseYear: "2000",
          vibe: "Starlit serenade",
          description:
            "Soft guitar arpeggios and Chris Martin's tender vocals beneath the stars.",
        },
        {
          title: "A Thousand Years",
          artist: "Christina Perri",
          embedId: "rtOvBOTyX00",
          genre: "Pop Ballad",
          releaseYear: "2011",
          vibe: "Eternal promise",
          description:
            "Sweeping strings and gentle piano that feel like a lifelong vow.",
        },
        {
          title: "I'm Yours",
          artist: "Jason Mraz",
          embedId: "EkHTsc9PU2A",
          genre: "Acoustic",
          releaseYear: "2008",
          vibe: "Island breeze",
          description:
            "Reggae-tinged acoustic pop that pairs perfectly with sunshine.",
        },
        {
          title: "All of Me",
          artist: "John Legend",
          embedId: "450p7goxZqg",
          genre: "R&B Ballad",
          releaseYear: "2013",
          vibe: "Devoted love",
          description:
            "Piano-driven tender vocals that define modern romantic ballads.",
        },
        {
          title: "Put Your Records On",
          artist: "Corinne Bailey Rae",
          embedId: "rjOhZZyn388",
          genre: "Neo Soul",
          releaseYear: "2006",
          vibe: "Carefree stroll",
          description:
            "Breezy soul-pop with a warm smile woven into every note.",
        },
      ],
    },
    {
      id: "relaxed-dream-pop",
      name: "Dream Pop Escape",
      description:
        "Ethereal soundscapes and dreamy vocals for floating away from it all.",
      songs: [
        {
          title: "Ocean Eyes",
          artist: "Billie Eilish",
          embedId: "viimfQi_pUw",
          genre: "Dream Pop",
          releaseYear: "2016",
          vibe: "Weightless",
          description:
            "Featherlight harmonies that feel like floating in deep blue.",
        },
        {
          title: "Good Days",
          artist: "SZA",
          embedId: "3u5cfUl1u_0",
          genre: "Alt R&B",
          releaseYear: "2020",
          vibe: "Floating hope",
          description:
            "Airy harmonies and twinkling guitars that feel like lucid dreaming.",
        },
        {
          title: "Peaches",
          artist: "Justin Bieber ft. Daniel Caesar & Giveon",
          embedId: "tQ0yjYUFKAE",
          genre: "R&B",
          releaseYear: "2021",
          vibe: "Lazy afternoon",
          description: "Silky vocals over butter-smooth chords and bass.",
        },
        {
          title: "Lost in Japan",
          artist: "Shawn Mendes",
          embedId: "x0mKVeKxF44",
          genre: "Pop R&B",
          releaseYear: "2018",
          vibe: "Jet-lag dream",
          description:
            "Silky basslines with a jazzy bounce perfect for midnight wandering.",
        },
        {
          title: "Location",
          artist: "Khalid",
          embedId: "by3yRdlQvzs",
          genre: "Alt R&B",
          releaseYear: "2016",
          vibe: "Late-night text",
          description: "808s and crooning verses that feel like a gentle DM.",
        },
        {
          title: "Midnight City",
          artist: "M83",
          embedId: "dX3k_QDnzHE",
          genre: "Dream Pop",
          releaseYear: "2011",
          vibe: "City skyline",
          description:
            "Soaring synth arps and a driving beat for endless neon rides.",
        },
        {
          title: "Space Song",
          artist: "Beach House",
          embedId: "RBtlPT23PTM",
          genre: "Dream Pop",
          releaseYear: "2015",
          vibe: "Zero gravity",
          description:
            "Reverb-drenched guitars and vocals drifting through cosmic space.",
        },
        {
          title: "Video Games",
          artist: "Lana Del Rey",
          embedId: "cE6wxDqdOV0",
          genre: "Indie Pop",
          releaseYear: "2011",
          vibe: "Cinematic haze",
          description:
            "Nostalgic strings and breathy vocals painting Hollywood sunset dreams.",
        },
        {
          title: "Holocene",
          artist: "Bon Iver",
          embedId: "TWcyIpul8OE",
          genre: "Indie Folk",
          releaseYear: "2011",
          vibe: "Mountain mist",
          description:
            "Falsetto auras and layered guitars dissolving into peaceful wilderness.",
        },
        {
          title: "Heat Waves",
          artist: "Glass Animals",
          embedId: "mRD0-GxqHVo",
          genre: "Psychedelic Pop",
          releaseYear: "2020",
          vibe: "Summer haze",
          description:
            "Looping hooks that feel like watching sunsets on repeat.",
        },
        {
          title: "What a Wonderful World",
          artist: "Louis Armstrong",
          embedId: "A3yCcXgbKrE",
          genre: "Jazz",
          releaseYear: "1967",
          vibe: "Gratitude",
          description:
            "The most heartwarming vocal performance in musical history.",
        },
        {
          title: "Bloom",
          artist: "The Paper Kites",
          embedId: "w4LdMVrlScU",
          genre: "Indie Folk",
          releaseYear: "2013",
          vibe: "Night garden",
          description:
            "Whispered vocals and gentle fingerpicking blooming in the dark.",
        },
      ],
    },
    {
      id: "relaxed-smooth-rnb",
      name: "Smooth R&B Evening",
      description:
        "Silky R&B vocals and mellow grooves for a laid-back evening mood.",
      songs: [
        {
          title: "Tadow",
          artist: "Masego & FKJ",
          embedId: "hC8CH0Z3L54",
          genre: "Neo Soul",
          releaseYear: "2017",
          vibe: "Silk lounge",
          description:
            "Sax riffs and smooth basslines drifting through lo-fi haze.",
        },
        {
          title: "Electric",
          artist: "Alina Baraz ft. Khalid",
          embedId: "FkDJuP0kFJw",
          genre: "Alt R&B",
          releaseYear: "2017",
          vibe: "Midnight bloom",
          description:
            "Lush synth chords and whispered harmonies basking in moonlight.",
        },
        {
          title: "Hold On, We're Going Home",
          artist: "Drake ft. Majid Jordan",
          embedId: "GxgqpCdOKak",
          genre: "R&B Pop",
          releaseYear: "2013",
          vibe: "City lights",
          description:
            "Glass-clear vocals and synth pads built for skyline drives.",
        },
        {
          title: "Love Yourself",
          artist: "Justin Bieber",
          embedId: "oyEuk8j8imI",
          genre: "Acoustic Pop",
          releaseYear: "2015",
          vibe: "Quiet truth",
          description:
            "Stripped-back guitar and honest vocals that resonate deeply.",
        },
        {
          title: "Earned It",
          artist: "The Weeknd",
          embedId: "waU75jdUnYw",
          genre: "R&B",
          releaseYear: "2015",
          vibe: "Velvet nights",
          description:
            "Orchestral strings and falsetto creating cinematic intimacy.",
        },
        {
          title: "Call Out My Name",
          artist: "The Weeknd",
          embedId: "09R8_2nJtjg",
          genre: "R&B",
          releaseYear: "2018",
          vibe: "Aching soul",
          description:
            "Raw emotion and atmospheric production at its most beautiful.",
        },
        {
          title: "Shape of You",
          artist: "Ed Sheeran",
          embedId: "JGwWNGJdvx8",
          genre: "Pop",
          releaseYear: "2017",
          vibe: "Smooth groove",
          description:
            "Tropical house meets pop perfection in an irresistible rhythm.",
        },
        {
          title: "Memories",
          artist: "Maroon 5",
          embedId: "SlPhMPnQ58k",
          genre: "Pop",
          releaseYear: "2019",
          vibe: "Bittersweet toast",
          description:
            "Canon in D inspired chords lifting glasses to those who matter.",
        },
        {
          title: "Night Changes",
          artist: "One Direction",
          embedId: "syFZfO_wfMQ",
          genre: "Acoustic Pop",
          releaseYear: "2014",
          vibe: "Nostalgia drive",
          description: "Soft strums capturing the magic of unplanned nights.",
        },
        {
          title: "Golden Hour",
          artist: "JVKE",
          embedId: "PEM0Vs8jf1w",
          genre: "Pop",
          releaseYear: "2022",
          vibe: "Warm glow",
          description:
            "Delicate piano and ethereal production bathed in sunset light.",
        },
        {
          title: "Too Good at Goodbyes",
          artist: "Sam Smith",
          embedId: "J_ub7Etch2U",
          genre: "Soul Pop",
          releaseYear: "2017",
          vibe: "Guarded heart",
          description:
            "Vulnerable vocals building to powerful, resonant choruses.",
        },
        {
          title: "Die For You",
          artist: "The Weeknd",
          embedId: "mTLQhPjS7CQ",
          genre: "R&B",
          releaseYear: "2016",
          vibe: "Deep devotion",
          description:
            "Synth-wave romance and soaring vocals that surrender completely.",
        },
      ],
    },
    {
      id: "relaxed-sunset-indie",
      name: "Sunset Indie Vibes",
      description: "Warm indie tones perfect for winding down as the sun sets.",
      songs: [
        {
          title: "Electric Feel",
          artist: "MGMT",
          embedId: "MmZexg8sxyk",
          genre: "Psychedelic Pop",
          releaseYear: "2008",
          vibe: "Indie shimmer",
          description:
            "Slinky basslines and surreal vocals for neon-lit cruising.",
        },
        {
          title: "Stolen Dance",
          artist: "Milky Chance",
          embedId: "iX-QaNkd-AM",
          genre: "Indie Folk",
          releaseYear: "2013",
          vibe: "Breezy groove",
          description:
            "Lo-fi guitar loops and laid-back vocals drifting through warm air.",
        },
        {
          title: "Retrograde",
          artist: "James Blake",
          embedId: "6p6PcFFUm5I",
          genre: "Alt Electronic",
          releaseYear: "2013",
          vibe: "Moody orbit",
          description: "Hazy vocals over a heartbeat of analog synths.",
        },
        {
          title: "Bad Habits",
          artist: "Ed Sheeran",
          embedId: "orJSJGHjBLI",
          genre: "Alt Pop",
          releaseYear: "2021",
          vibe: "Midnight loop",
          description:
            "Throbbing synths and falsetto lines perfect for late-night pacing.",
        },
        {
          title: "cardigan",
          artist: "Taylor Swift",
          embedId: "K-a8s8OLBSE",
          genre: "Indie Folk",
          releaseYear: "2020",
          vibe: "Moody story",
          description:
            "Muted drums and whispered storytelling for introspective nights.",
        },
        {
          title: "505",
          artist: "Arctic Monkeys",
          embedId: "qU9mHegkTc4",
          genre: "Indie Rock",
          releaseYear: "2007",
          vibe: "Late-night drive",
          description:
            "Organ swells and smoky vocals suited for endless highways.",
        },
        {
          title: "Take Me to Church",
          artist: "Hozier",
          embedId: "PVjiKRfKpPI",
          genre: "Indie Rock",
          releaseYear: "2013",
          vibe: "Soulful devotion",
          description:
            "Raw gospel energy wrapped in indie rock passion and power.",
        },
        {
          title: "Somebody That I Used to Know",
          artist: "Gotye ft. Kimbra",
          embedId: "8UVNT4wvIGY",
          genre: "Indie Pop",
          releaseYear: "2011",
          vibe: "Faded memory",
          description:
            "Xylophone loops and dueling vocals painting a portrait of loss.",
        },
        {
          title: "Skinny Love",
          artist: "Bon Iver",
          embedId: "ssdgFoHLwnk",
          genre: "Indie Folk",
          releaseYear: "2008",
          vibe: "Fragile beauty",
          description:
            "Cracking falsetto and raw guitar that expose pure vulnerability.",
        },
        {
          title: "The Less I Know the Better",
          artist: "Tame Impala",
          embedId: "sBzrzS1Ag_g",
          genre: "Psychedelic Pop",
          releaseYear: "2015",
          vibe: "Dreamy groove",
          description:
            "Funky bass and swirling psychedelia for twilight contemplation.",
        },
        {
          title: "Do I Wanna Know?",
          artist: "Arctic Monkeys",
          embedId: "bpOSxM0rNPM",
          genre: "Indie Rock",
          releaseYear: "2013",
          vibe: "Slow burn",
          description:
            "Heavy riff and hypnotic rhythm that builds desire with every beat.",
        },
        {
          title: "Rhiannon",
          artist: "Fleetwood Mac",
          embedId: "py3cgTmmGWk",
          genre: "Rock",
          releaseYear: "1975",
          vibe: "Mystic glow",
          description:
            "Stevie Nicks weaving mystical vocals over timeless rock grooves.",
        },
      ],
    },
  ],

  // ═══════════════════════════════════════════════════════════════
  // SAD
  // ═══════════════════════════════════════════════════════════════
  sad: [
    {
      id: "sad-heartbreak-ballads",
      name: "Heartbreak Ballads",
      description:
        "Timeless ballads for when your heart needs to feel every ache.",
      songs: [
        {
          title: "Someone Like You",
          artist: "Adele",
          embedId: "hLQl3WQQoQ0",
          genre: "Piano Ballad",
          releaseYear: "2011",
          vibe: "Bittersweet goodbye",
          description: "A soaring farewell wrapped in raw, trembling vocals.",
        },
        {
          title: "All Too Well (10 Minute Version)",
          artist: "Taylor Swift",
          embedId: "tollGa3S0o8",
          genre: "Folk Pop",
          releaseYear: "2021",
          vibe: "Memoir mode",
          description:
            "Storybook lyricism stretching every detail of a love undone.",
        },
        {
          title: "Lose You To Love Me",
          artist: "Selena Gomez",
          embedId: "zlJDTxahav0",
          genre: "Pop Ballad",
          releaseYear: "2019",
          vibe: "Closure",
          description: "Piano pulses and strings that bloom with resilience.",
        },
        {
          title: "Hello",
          artist: "Adele",
          embedId: "YQHsXMglC9A",
          genre: "Piano Ballad",
          releaseYear: "2015",
          vibe: "Reaching out",
          description:
            "Powerhouse vocals and piano reaching across years of silence.",
        },
        {
          title: "Rolling in the Deep",
          artist: "Adele",
          embedId: "rYEDA3JcQqw",
          genre: "Pop Soul",
          releaseYear: "2011",
          vibe: "Scorching fury",
          description:
            "Drums and fire in every syllable of righteous heartbreak.",
        },
        {
          title: "Easy On Me",
          artist: "Adele",
          embedId: "U3ASj1L6_sY",
          genre: "Pop Ballad",
          releaseYear: "2021",
          vibe: "Tender plea",
          description:
            "Gentle piano and vocals asking for understanding and grace.",
        },
        {
          title: "Say Something",
          artist: "A Great Big World & Christina Aguilera",
          embedId: "BmErRm-vApI",
          genre: "Piano Ballad",
          releaseYear: "2013",
          vibe: "Quiet surrender",
          description:
            "Stripped-back piano and layered vocals in devastating simplicity.",
        },
        {
          title: "when the party's over",
          artist: "Billie Eilish",
          embedId: "pbMwTqkKSps",
          genre: "Alt Pop",
          releaseYear: "2018",
          vibe: "Blue hour",
          description:
            "Sparse harmonies and glass-clink percussion that haunt gently.",
        },
        {
          title: "Secret Love Song",
          artist: "Little Mix ft. Jason Derulo",
          embedId: "qgy7vEje5-w",
          genre: "Pop Ballad",
          releaseYear: "2015",
          vibe: "Hidden feelings",
          description:
            "Belting harmonies for every love that has to stay a whisper.",
        },
        {
          title: "Jealous",
          artist: "Labrinth",
          embedId: "P8QA4V0MY1c",
          genre: "Soul",
          releaseYear: "2014",
          vibe: "Slow tear",
          description:
            "A stripped vocal performance that feels like a confession.",
        },
        {
          title: "Fix You",
          artist: "Coldplay",
          embedId: "k4V3Mo61fJM",
          genre: "Alt Rock",
          releaseYear: "2005",
          vibe: "Healing light",
          description:
            "Building from whisper to roar, a beacon through the darkest nights.",
        },
        {
          title: "Let Her Go",
          artist: "Passenger",
          embedId: "RBumgq5yVrA",
          genre: "Indie Folk",
          releaseYear: "2012",
          vibe: "Painful wisdom",
          description:
            "Gentle fingerpicking and the timeless truth about love's absence.",
        },
      ],
    },
    {
      id: "sad-indie-tears",
      name: "Indie Tears",
      description:
        "Indie and folk songs woven with melancholy, longing, and quiet pain.",
      songs: [
        {
          title: "The Night We Met",
          artist: "Lord Huron",
          embedId: "KtlgYxa6BMU",
          genre: "Indie Folk",
          releaseYear: "2015",
          vibe: "Ghost story",
          description:
            "Echoed crooning and swelling strings for aching flashbacks.",
        },
        {
          title: "All I Want",
          artist: "Kodaline",
          embedId: "mtf7hC17IBM",
          genre: "Indie Folk",
          releaseYear: "2013",
          vibe: "Slow burn",
          description: "Echoed guitars that make every raindrop louder.",
        },
        {
          title: "Skinny Love",
          artist: "Birdy",
          embedId: "aNzCDt2eidg",
          genre: "Indie Folk",
          releaseYear: "2011",
          vibe: "Delicate ache",
          description:
            "Featherweight piano and pleading vocals that crack open hearts.",
        },
        {
          title: "Arcade",
          artist: "Duncan Laurence",
          embedId: "bMAZiVMDMqs",
          genre: "Indie Pop",
          releaseYear: "2019",
          vibe: "Melancholy tide",
          description: "Cathedral echo vocals chasing hope through heartache.",
        },
        {
          title: "Youth",
          artist: "Daughter",
          embedId: "VEpMj-tqixs",
          genre: "Indie Folk",
          releaseYear: "2013",
          vibe: "Fading youth",
          description:
            "Ethereal guitars and devastating lyrics about growing apart.",
        },
        {
          title: "Liability",
          artist: "Lorde",
          embedId: "BtvJaNeELic",
          genre: "Indie Pop",
          releaseYear: "2017",
          vibe: "Lonely walk",
          description:
            "Solo piano and raw vocals embracing the pain of being too much.",
        },
        {
          title: "The Scientist",
          artist: "Coldplay",
          embedId: "RB-RcX5DS5A",
          genre: "Alt Rock",
          releaseYear: "2002",
          vibe: "Going back",
          description: "Piano-driven plea to rewind time and undo heartbreak.",
        },
        {
          title: "Losing My Religion",
          artist: "R.E.M.",
          embedId: "xwtdhWltSIg",
          genre: "Alt Rock",
          releaseYear: "1991",
          vibe: "Obsessive doubt",
          description:
            "Mandolin riffs and Michael Stipe's vocals spiraling in uncertainty.",
        },
        {
          title: "Cigarettes After Sex",
          artist: "Apocalypse",
          embedId: "sElE_BfQ67s",
          genre: "Dream Pop",
          releaseYear: "2017",
          vibe: "Fading love",
          description:
            "Hushed vocals and slow-motion guitars dissolving into the night.",
        },
        {
          title: "Motion Sickness",
          artist: "Phoebe Bridgers",
          embedId: "MqiGVRb5tuc",
          genre: "Indie Rock",
          releaseYear: "2017",
          vibe: "Bitter clarity",
          description:
            "Sardonic wit and aching melodies that cut deep with every line.",
        },
        {
          title: "Creep",
          artist: "Radiohead",
          embedId: "XFkzRNyygfk",
          genre: "Alt Rock",
          releaseYear: "1993",
          vibe: "Outsider pain",
          description:
            "Quietly building desperation that explodes into cathartic distortion.",
        },
        {
          title: "Mad World",
          artist: "Gary Jules",
          embedId: "4N3N1MlvVc4",
          genre: "Alt Pop",
          releaseYear: "2001",
          vibe: "Empty gaze",
          description:
            "Haunting piano simplicity that makes the world feel impossibly heavy.",
        },
      ],
    },
    {
      id: "sad-modern-heartache",
      name: "Modern Heartache",
      description:
        "Recent hits that channel heartbreak, loneliness, and emotional rawness.",
      songs: [
        {
          title: "drivers license",
          artist: "Olivia Rodrigo",
          embedId: "ZmDBbnmKpqQ",
          genre: "Indie Pop",
          releaseYear: "2021",
          vibe: "Cinematic heartbreak",
          description: "The ache of headlights and unanswered texts.",
        },
        {
          title: "Happier Than Ever",
          artist: "Billie Eilish",
          embedId: "5GJWxDKyk3A",
          genre: "Alt Pop",
          releaseYear: "2021",
          vibe: "Quiet rage",
          description:
            "Whisper-to-scream catharsis released in devastating waves.",
        },
        {
          title: "Glimpse of Us",
          artist: "Joji",
          embedId: "FvOpPeKSf_4",
          genre: "Piano Ballad",
          releaseYear: "2022",
          vibe: "Haunted memory",
          description:
            "Raw piano and gutting honesty about seeing someone in everyone.",
        },
        {
          title: "Someone You Loved",
          artist: "Lewis Capaldi",
          embedId: "zABLecsR5UE",
          genre: "Piano Ballad",
          releaseYear: "2019",
          vibe: "Open wound",
          description:
            "Powerful vocals and piano that inhabit the deepest loss.",
        },
        {
          title: "Before You Go",
          artist: "Lewis Capaldi",
          embedId: "Jtauh8GcxBY",
          genre: "Pop Ballad",
          releaseYear: "2019",
          vibe: "Guilt and grief",
          description:
            "Aching vocals questioning what could have been done differently.",
        },
        {
          title: "Lonely",
          artist: "Justin Bieber & benny blanco",
          embedId: "xQOO2xGQ1Pc",
          genre: "Pop Ballad",
          releaseYear: "2020",
          vibe: "Fame's cost",
          description:
            "Stripped-back vulnerability about isolation behind the spotlight.",
        },
        {
          title: "deja vu",
          artist: "Olivia Rodrigo",
          embedId: "cii6ruuycQA",
          genre: "Pop",
          releaseYear: "2021",
          vibe: "Jealous ache",
          description: "Breezy melodies masking the sting of being replaced.",
        },
        {
          title: "traitor",
          artist: "Olivia Rodrigo",
          embedId: "IgLcHb4dRvA",
          genre: "Indie Pop",
          releaseYear: "2021",
          vibe: "Quiet betrayal",
          description:
            "Acoustic heartbreak about the cruelty of technicalities in love.",
        },
        {
          title: "We Can't Be Friends",
          artist: "Ariana Grande",
          embedId: "cS-1JOhgFVQ",
          genre: "Pop",
          releaseYear: "2024",
          vibe: "Bittersweet closure",
          description:
            "Sweeping production and vocals accepting the end of something beautiful.",
        },
        {
          title: "Snooze",
          artist: "SZA",
          embedId: "LTfHIR88nZg",
          genre: "R&B",
          releaseYear: "2022",
          vibe: "Devoted ache",
          description:
            "Layered vocals and dreamy production about fighting for love.",
        },
        {
          title: "Kill Bill",
          artist: "SZA",
          embedId: "hG4lT4fxj8M",
          genre: "R&B Pop",
          releaseYear: "2022",
          vibe: "Vengeful fantasy",
          description:
            "Sweet melodies wrapping dark revenge fantasies in velvet.",
        },
        {
          title: "Vampire",
          artist: "Olivia Rodrigo",
          embedId: "RlPNh_PBZb4",
          genre: "Pop Rock",
          releaseYear: "2023",
          vibe: "Bitter realization",
          description:
            "Building from piano to anthem, calling out emotional predators.",
        },
      ],
    },
    {
      id: "sad-acoustic-melancholy",
      name: "Acoustic Melancholy",
      description:
        "Stripped-back acoustic and piano tracks for the most vulnerable moments.",
      songs: [
        {
          title: "From the Dining Table",
          artist: "Harry Styles",
          embedId: "wZ1g1CLoQbY",
          genre: "Acoustic Ballad",
          releaseYear: "2017",
          vibe: "Lonely dawn",
          description:
            "Sparse guitar and reverb-soaked vocals for post-midnight thoughts.",
        },
        {
          title: "Falling",
          artist: "Harry Styles",
          embedId: "olGSAI2akI4",
          genre: "Piano Ballad",
          releaseYear: "2019",
          vibe: "Free fall",
          description:
            "Intimate piano and raw self-reflection sinking into solitude.",
        },
        {
          title: "Love Yourself",
          artist: "Justin Bieber",
          embedId: "oyEuk8j8imI",
          genre: "Acoustic Pop",
          releaseYear: "2015",
          vibe: "Quiet goodbye",
          description:
            "Gentle guitar delivering a farewell with devastating calm.",
        },
        {
          title: "Yellow",
          artist: "Coldplay",
          embedId: "yKNxeF4KMsY",
          genre: "Alt Rock",
          releaseYear: "2000",
          vibe: "Devotion",
          description:
            "Starlit guitar arpeggios and tender vocals offering everything.",
        },
        {
          title: "Hallelujah",
          artist: "Jeff Buckley",
          embedId: "y8AWFf7EAc4",
          genre: "Indie Rock",
          releaseYear: "1994",
          vibe: "Sacred sorrow",
          description:
            "Transcendent vocals and guitar creating a cathedral of emotion.",
        },
        {
          title: "Hurt",
          artist: "Johnny Cash",
          embedId: "8AHCfZTRGiI",
          genre: "Country",
          releaseYear: "2002",
          vibe: "Life review",
          description:
            "A lifetime of pain distilled into four minutes of raw truth.",
        },
        {
          title: "Tears in Heaven",
          artist: "Eric Clapton",
          embedId: "JxPj3GAYYZ0",
          genre: "Acoustic Ballad",
          releaseYear: "1992",
          vibe: "Eternal loss",
          description:
            "The most heartbreaking guitar and vocal performance ever recorded.",
        },
        {
          title: "I Will Follow You into the Dark",
          artist: "Death Cab for Cutie",
          embedId: "NDHY1D0tKRA",
          genre: "Indie Folk",
          releaseYear: "2005",
          vibe: "Devoted until end",
          description:
            "Ukulele and whispered promises that transcend mortality.",
        },
        {
          title: "Skinny Love",
          artist: "Bon Iver",
          embedId: "ssdgFoHLwnk",
          genre: "Indie Folk",
          releaseYear: "2008",
          vibe: "Fragile beauty",
          description:
            "Cracking falsetto and raw guitar that expose pure vulnerability.",
        },
        {
          title: "Fast Car",
          artist: "Tracy Chapman",
          embedId: "DwrHwZyFN7M",
          genre: "Folk Rock",
          releaseYear: "1988",
          vibe: "Escape dream",
          description:
            "Fingerpicked guitar and storytelling about dreams and disappointment.",
        },
        {
          title: "Nothing Compares 2 U",
          artist: "Sinéad O'Connor",
          embedId: "0-EF60neguk",
          genre: "Pop",
          releaseYear: "1990",
          vibe: "Devastating void",
          description:
            "A single tear and one of the most powerful vocal performances ever.",
        },
        {
          title: "Everybody Hurts",
          artist: "R.E.M.",
          embedId: "5rOiW_xY-kc",
          genre: "Alt Rock",
          releaseYear: "1992",
          vibe: "Hold on",
          description:
            "A slow anthem of solidarity for when the world feels too heavy.",
        },
      ],
    },
    {
      id: "sad-soul-blues",
      name: "Soul & R&B Blues",
      description:
        "Soulful vocals and bluesy grooves for leaning into every feeling.",
      songs: [
        {
          title: "Set Fire to the Rain",
          artist: "Adele",
          embedId: "Ri7-vnrJD3k",
          genre: "Pop Soul",
          releaseYear: "2011",
          vibe: "Burning love",
          description:
            "Dramatic vocals and production stoking the flames of lost love.",
        },
        {
          title: "Chandelier",
          artist: "Sia",
          embedId: "2vjPBrBU-TM",
          genre: "Pop",
          releaseYear: "2014",
          vibe: "Desperate dance",
          description:
            "Vocal acrobatics masking pain beneath party-girl facade.",
        },
        {
          title: "Stay",
          artist: "Rihanna ft. Mikky Ekko",
          embedId: "JF8BRvqGCNs",
          genre: "Pop Ballad",
          releaseYear: "2012",
          vibe: "Fragile plea",
          description:
            "Stripped production and raw vocals begging for connection.",
        },
        {
          title: "Unsteady",
          artist: "X Ambassadors",
          embedId: "V0lw3qylVfY",
          genre: "Alt Pop",
          releaseYear: "2015",
          vibe: "Shaking ground",
          description:
            "Minimal production amplifying the desperate need for stability.",
        },
        {
          title: "Take Me to Church",
          artist: "Hozier",
          embedId: "PVjiKRfKpPI",
          genre: "Indie Rock",
          releaseYear: "2013",
          vibe: "Soulful devotion",
          description:
            "Gospel-infused passion and raw emotional power in every note.",
        },
        {
          title: "Wrecking Ball",
          artist: "Miley Cyrus",
          embedId: "My2FRPA3Gf8",
          genre: "Pop Ballad",
          releaseYear: "2013",
          vibe: "Destructive love",
          description:
            "Powerhouse vocals crashing through walls of emotional devastation.",
        },
        {
          title: "I Can't Make You Love Me",
          artist: "Bonnie Raitt",
          embedId: "nW9Cu6GYqxo",
          genre: "Blues Ballad",
          releaseYear: "1991",
          vibe: "Accepting pain",
          description:
            "The most devastating acceptance of unrequited love ever sung.",
        },
        {
          title: "Back to Black",
          artist: "Amy Winehouse",
          embedId: "TJAfLE39ZZ8",
          genre: "Soul",
          releaseYear: "2006",
          vibe: "Dark spiral",
          description:
            "Retro soul production wrapping around raw, devastating vulnerability.",
        },
        {
          title: "Gravity",
          artist: "Sara Bareilles",
          embedId: "rEXhAMtbaIw",
          genre: "Pop",
          releaseYear: "2007",
          vibe: "Pull of the past",
          description:
            "Piano-driven vocals about the inescapable pull of past love.",
        },
        {
          title: "If I Ain't Got You",
          artist: "Alicia Keys",
          embedId: "Ju8Hr50Ckwk",
          genre: "R&B",
          releaseYear: "2003",
          vibe: "Essential truth",
          description:
            "Soulful piano and vocals defining what truly matters in life.",
        },
        {
          title: "No One",
          artist: "Alicia Keys",
          embedId: "rywUS-ohqeE",
          genre: "R&B",
          releaseYear: "2007",
          vibe: "Unbreakable bond",
          description:
            "Triumphant piano chords celebrating love that overcomes everything.",
        },
        {
          title: "Un-Break My Heart",
          artist: "Toni Braxton",
          embedId: "p2Rch6WvPJE",
          genre: "R&B Ballad",
          releaseYear: "1996",
          vibe: "Shattered plea",
          description:
            "Dramatic strings and soaring vocals begging love to return.",
        },
      ],
    },
  ],

  // ═══════════════════════════════════════════════════════════════
  // NEUTRAL
  // ═══════════════════════════════════════════════════════════════
  neutral: [
    {
      id: "neutral-indie-essentials",
      name: "Indie Essentials Mix",
      description:
        "The definitive indie collection for every in-between moment.",
      songs: [
        {
          title: "Riptide",
          artist: "Vance Joy",
          embedId: "uJ_1HMAGb4k",
          genre: "Indie Folk",
          releaseYear: "2013",
          vibe: "Coastal calm",
          description:
            "Ukulele strums and singalong hooks to keep things breezy.",
        },
        {
          title: "Heat Waves",
          artist: "Glass Animals",
          embedId: "mRD0-GxqHVo",
          genre: "Psychedelic Pop",
          releaseYear: "2020",
          vibe: "Summer haze",
          description:
            "Looping hooks that feel like watching sunsets on repeat.",
        },
        {
          title: "Mr. Brightside",
          artist: "The Killers",
          embedId: "gGdGFtwCNBE",
          genre: "Alt Rock",
          releaseYear: "2003",
          vibe: "Eternal anthem",
          description:
            "Synth-driven rock perfection that never leaves any playlist.",
        },
        {
          title: "Pumped Up Kicks",
          artist: "Foster The People",
          embedId: "SDTZ7iX4vTQ",
          genre: "Indie Pop",
          releaseYear: "2010",
          vibe: "Casual hook",
          description: "Breezy synth-bass groove that floats through any mood.",
        },
        {
          title: "Somebody That I Used to Know",
          artist: "Gotye ft. Kimbra",
          embedId: "8UVNT4wvIGY",
          genre: "Indie Pop",
          releaseYear: "2011",
          vibe: "Faded memory",
          description:
            "Xylophone loops and dueling vocals painting a portrait of change.",
        },
        {
          title: "Stressed Out",
          artist: "Twenty One Pilots",
          embedId: "pXRviuL6vMY",
          genre: "Alt Pop",
          releaseYear: "2015",
          vibe: "Nostalgic worry",
          description: "Childhood nostalgia wrestling with adult anxieties.",
        },
        {
          title: "Ride",
          artist: "Twenty One Pilots",
          embedId: "Pw-0pbY9JeU",
          genre: "Alt Pop",
          releaseYear: "2015",
          vibe: "Existential cruise",
          description:
            "Reggae-tinted philosophizing about the experience of being alive.",
        },
        {
          title: "Stolen Dance",
          artist: "Milky Chance",
          embedId: "iX-QaNkd-AM",
          genre: "Indie Folk",
          releaseYear: "2013",
          vibe: "Breezy groove",
          description:
            "Lo-fi guitar loops and laid-back vocals for neutral afternoons.",
        },
        {
          title: "Ophelia",
          artist: "The Lumineers",
          embedId: "pTOC_q0NLRk",
          genre: "Indie Folk",
          releaseYear: "2016",
          vibe: "Storybook",
          description:
            "Stomping folk-rock with anthemic chorus and literary charm.",
        },
        {
          title: "The Less I Know the Better",
          artist: "Tame Impala",
          embedId: "sBzrzS1Ag_g",
          genre: "Psychedelic Pop",
          releaseYear: "2015",
          vibe: "Dreamy groove",
          description:
            "Funky bass and swirling psychedelia for any state of mind.",
        },
        {
          title: "Come As You Are",
          artist: "Nirvana",
          embedId: "vabnZ9-ex7o",
          genre: "Grunge",
          releaseYear: "1992",
          vibe: "Acceptance",
          description:
            "Atmospheric guitar and Kurt Cobain's vocals welcoming everyone.",
        },
        {
          title: "Do I Wanna Know?",
          artist: "Arctic Monkeys",
          embedId: "bpOSxM0rNPM",
          genre: "Indie Rock",
          releaseYear: "2013",
          vibe: "Slow burn",
          description:
            "Heavy riff and hypnotic rhythm that builds tension beautifully.",
        },
      ],
    },
    {
      id: "neutral-late-night-drive",
      name: "Late Night Drive",
      description:
        "Atmospheric tracks for cruising through city lights at midnight.",
      songs: [
        {
          title: "Night Changes",
          artist: "One Direction",
          embedId: "syFZfO_wfMQ",
          genre: "Acoustic Pop",
          releaseYear: "2014",
          vibe: "Nostalgia drive",
          description: "Soft strums capturing the magic of unplanned nights.",
        },
        {
          title: "Midnight City",
          artist: "M83",
          embedId: "dX3k_QDnzHE",
          genre: "Dream Pop",
          releaseYear: "2011",
          vibe: "City skyline",
          description:
            "Soaring synth arps and a driving beat for endless neon rides.",
        },
        {
          title: "Retrograde",
          artist: "James Blake",
          embedId: "6p6PcFFUm5I",
          genre: "Alt Electronic",
          releaseYear: "2013",
          vibe: "Moody orbit",
          description: "Hazy vocals over a heartbeat of analog synths.",
        },
        {
          title: "Blinding Lights",
          artist: "The Weeknd",
          embedId: "4NRXx6U8ABQ",
          genre: "Synthwave",
          releaseYear: "2019",
          vibe: "Neon chase",
          description: "Pulsing basslines tailor-made for late-night drives.",
        },
        {
          title: "505",
          artist: "Arctic Monkeys",
          embedId: "qU9mHegkTc4",
          genre: "Indie Rock",
          releaseYear: "2007",
          vibe: "Late-night drive",
          description:
            "Organ swells and smoky vocals suited for endless highways.",
        },
        {
          title: "Starboy",
          artist: "The Weeknd ft. Daft Punk",
          embedId: "34Na4j8AVgA",
          genre: "Pop",
          releaseYear: "2016",
          vibe: "Dark luxury",
          description:
            "Daft Punk production and atmospheric vocals for after-dark ambition.",
        },
        {
          title: "Hotline Bling",
          artist: "Drake",
          embedId: "uxpDa-c-4Mc",
          genre: "R&B",
          releaseYear: "2015",
          vibe: "Late-night call",
          description:
            "Minimal beats and smooth vocals for contemplative midnight moments.",
        },
        {
          title: "Sweater Weather",
          artist: "The Neighbourhood",
          embedId: "GCdwKhTtNNw",
          genre: "Indie Rock",
          releaseYear: "2012",
          vibe: "Cozy autumn",
          description:
            "Moody guitar tones and breathy vocals wrapped in night air.",
        },
        {
          title: "Can't Feel My Face",
          artist: "The Weeknd",
          embedId: "KEI4qSrkPAs",
          genre: "Pop",
          releaseYear: "2015",
          vibe: "Dark euphoria",
          description:
            "Michael Jackson energy meeting Abel's signature dark themes.",
        },
        {
          title: "Take Me Home",
          artist: "Cash Cash ft. Bebe Rexha",
          embedId: "mEKXD6T-GRk",
          genre: "EDM",
          releaseYear: "2013",
          vibe: "Highway glow",
          description: "Emotional EDM perfect for driving through the night.",
        },
        {
          title: "Drive",
          artist: "Oh Wonder",
          embedId: "iFvX0pCHTdE",
          genre: "Electropop",
          releaseYear: "2015",
          vibe: "Quiet road",
          description:
            "Hushed dual vocals and minimal production for contemplative journeys.",
        },
        {
          title: "After Dark",
          artist: "Mr.Kitty",
          embedId: "sVx1mJDeUjY",
          genre: "Synthwave",
          releaseYear: "2014",
          vibe: "Midnight synths",
          description:
            "Dark synth-wave atmospherics for cruising through neon-lit streets.",
        },
      ],
    },
    {
      id: "neutral-alternative-vibes",
      name: "Alternative Atmosphere",
      description:
        "Alt-rock and atmospheric tracks that fit any mood or moment.",
      songs: [
        {
          title: "Electric Feel",
          artist: "MGMT",
          embedId: "MmZexg8sxyk",
          genre: "Psychedelic Pop",
          releaseYear: "2008",
          vibe: "Indie shimmer",
          description:
            "Slinky basslines and surreal vocals for neon-lit cruising.",
        },
        {
          title: "Bad Habits",
          artist: "Ed Sheeran",
          embedId: "orJSJGHjBLI",
          genre: "Alt Pop",
          releaseYear: "2021",
          vibe: "Midnight loop",
          description:
            "Throbbing synths and falsetto lines perfect for late-night pacing.",
        },
        {
          title: "Circles",
          artist: "Post Malone",
          embedId: "wXhTHyIgQ_U",
          genre: "Pop Rock",
          releaseYear: "2019",
          vibe: "Gentle loop",
          description:
            "Guitar loops and smooth vocals cycling through bittersweet feelings.",
        },
        {
          title: "Radioactive",
          artist: "Imagine Dragons",
          embedId: "ktvTqknDobU",
          genre: "Alt Rock",
          releaseYear: "2012",
          vibe: "Awakening",
          description:
            "Slow-building anthem that erupts into something powerful.",
        },
        {
          title: "Paradise",
          artist: "Coldplay",
          embedId: "1G4isv_Fylg",
          genre: "Alt Rock",
          releaseYear: "2011",
          vibe: "Dream chase",
          description:
            "Orchestral swells and synths chasing a dreamer's paradise.",
        },
        {
          title: "Creep",
          artist: "Radiohead",
          embedId: "XFkzRNyygfk",
          genre: "Alt Rock",
          releaseYear: "1993",
          vibe: "Outsider anthem",
          description:
            "Quiet verses exploding into cathartic distortion and emotion.",
        },
        {
          title: "Black Hole Sun",
          artist: "Soundgarden",
          embedId: "3mbBbFH9fAg",
          genre: "Grunge",
          releaseYear: "1994",
          vibe: "Surreal haze",
          description:
            "Psychedelic grunge with Chris Cornell's unmatched vocal power.",
        },
        {
          title: "Clocks",
          artist: "Coldplay",
          embedId: "d020hcWA_Wg",
          genre: "Alt Rock",
          releaseYear: "2002",
          vibe: "Ticking urgency",
          description:
            "Piano ostinato and atmospheric rock that never stops moving.",
        },
        {
          title: "Wonderwall",
          artist: "Oasis",
          embedId: "6hzrDeceEKc",
          genre: "Britpop",
          releaseYear: "1995",
          vibe: "Eternal singalong",
          description:
            "The most recognizable chord progression in acoustic rock history.",
        },
        {
          title: "High and Dry",
          artist: "Radiohead",
          embedId: "7qFfFVSerQo",
          genre: "Alt Rock",
          releaseYear: "1995",
          vibe: "Wistful gaze",
          description:
            "Jangly guitars and Thom Yorke's vulnerable falsetto in perfect balance.",
        },
        {
          title: "Under the Bridge",
          artist: "Red Hot Chili Peppers",
          embedId: "lwlogyj7nFE",
          genre: "Alt Rock",
          releaseYear: "1991",
          vibe: "Urban reflection",
          description:
            "Lonely introspection building to group harmony and warmth.",
        },
        {
          title: "Karma Police",
          artist: "Radiohead",
          embedId: "1uYWYWPc9HU",
          genre: "Alt Rock",
          releaseYear: "1997",
          vibe: "Dark wit",
          description:
            "Beatles-esque piano meets dystopian lyrics in a moody masterpiece.",
        },
      ],
    },
    {
      id: "neutral-neo-soul-jazz",
      name: "Neo Soul & Jazz Lounge",
      description:
        "Smooth jazz, neo-soul, and sophisticated grooves for easy listening.",
      songs: [
        {
          title: "Tadow",
          artist: "Masego & FKJ",
          embedId: "hC8CH0Z3L54",
          genre: "Neo Soul",
          releaseYear: "2017",
          vibe: "Silk lounge",
          description:
            "Sax riffs and smooth basslines drifting through lo-fi haze.",
        },
        {
          title: "Electric",
          artist: "Alina Baraz ft. Khalid",
          embedId: "FkDJuP0kFJw",
          genre: "Alt R&B",
          releaseYear: "2017",
          vibe: "Midnight bloom",
          description:
            "Lush synth chords and whispered harmonies basking in moonlight.",
        },
        {
          title: "Hold On, We're Going Home",
          artist: "Drake ft. Majid Jordan",
          embedId: "GxgqpCdOKak",
          genre: "R&B Pop",
          releaseYear: "2013",
          vibe: "City lights",
          description:
            "Glass-clear vocals and synth pads built for skyline drives.",
        },
        {
          title: "Put Your Records On",
          artist: "Corinne Bailey Rae",
          embedId: "rjOhZZyn388",
          genre: "Neo Soul",
          releaseYear: "2006",
          vibe: "Carefree stroll",
          description:
            "Breezy soul-pop with a warm smile woven into every note.",
        },
        {
          title: "Fly Me to the Moon",
          artist: "Frank Sinatra",
          embedId: "ZEcqHA7dbwM",
          genre: "Jazz",
          releaseYear: "1964",
          vibe: "Classic charm",
          description:
            "Timeless swing and Sinatra's velvet voice at their most romantic.",
        },
        {
          title: "Feeling Good",
          artist: "Nina Simone",
          embedId: "D5Y11hwjMNs",
          genre: "Jazz",
          releaseYear: "1965",
          vibe: "New dawn",
          description:
            "Orchestral jazz building from whisper to empowering declaration.",
        },
        {
          title: "What a Wonderful World",
          artist: "Louis Armstrong",
          embedId: "A3yCcXgbKrE",
          genre: "Jazz",
          releaseYear: "1967",
          vibe: "Gratitude",
          description: "The most comforting vocal performance in all of music.",
        },
        {
          title: "Lovely Day",
          artist: "Bill Withers",
          embedId: "bEeaS6fuUoA",
          genre: "Soul",
          releaseYear: "1977",
          vibe: "Morning glow",
          description: "A vocal note held for an eternity of pure warmth.",
        },
        {
          title: "I Put a Spell on You",
          artist: "Nina Simone",
          embedId: "ua2k52n_Bvw",
          genre: "Jazz",
          releaseYear: "1965",
          vibe: "Dark enchantment",
          description:
            "Haunting vocals and orchestral drama that mesmerize completely.",
        },
        {
          title: "Come Away with Me",
          artist: "Norah Jones",
          embedId: "lbjZPFBD6JU",
          genre: "Jazz Pop",
          releaseYear: "2002",
          vibe: "Quiet escape",
          description:
            "Intimate piano-jazz vocals perfect for rainy window gazing.",
        },
        {
          title: "Golden Hour",
          artist: "JVKE",
          embedId: "PEM0Vs8jf1w",
          genre: "Pop",
          releaseYear: "2022",
          vibe: "Warm glow",
          description:
            "Delicate piano and ethereal production bathed in sunset light.",
        },
        {
          title: "Get Lucky",
          artist: "Daft Punk ft. Pharrell",
          embedId: "5NV6Rdv1a3I",
          genre: "Disco",
          releaseYear: "2013",
          vibe: "Midnight magic",
          description:
            "Silky guitar licks and robot funk that groove effortlessly.",
        },
      ],
    },
    {
      id: "neutral-electronic-chill",
      name: "Electronic Chill",
      description:
        "Ambient electronic and synth tracks for focused, steady vibes.",
      songs: [
        {
          title: "cardigan",
          artist: "Taylor Swift",
          embedId: "K-a8s8OLBSE",
          genre: "Indie Folk",
          releaseYear: "2020",
          vibe: "Moody story",
          description:
            "Muted drums and whispered storytelling for introspective moments.",
        },
        {
          title: "Faded",
          artist: "Alan Walker",
          embedId: "60ItHLz5WEA",
          genre: "Electro House",
          releaseYear: "2015",
          vibe: "Ethereal drift",
          description:
            "Atmospheric pads and a haunting melody that floats into the void.",
        },
        {
          title: "Stay",
          artist: "Rihanna ft. Mikky Ekko",
          embedId: "JF8BRvqGCNs",
          genre: "Pop Ballad",
          releaseYear: "2012",
          vibe: "Fragile beauty",
          description:
            "Stripped production and raw vocals in intimate electronic space.",
        },
        {
          title: "Lean On",
          artist: "Major Lazer & DJ Snake ft. MØ",
          embedId: "YqeW9_5kURI",
          genre: "Dancehall EDM",
          releaseYear: "2015",
          vibe: "Tropical drift",
          description: "Effortless tropical beats that work for any mindset.",
        },
        {
          title: "Something Just Like This",
          artist: "The Chainsmokers & Coldplay",
          embedId: "FM7MFYoylVs",
          genre: "EDM Pop",
          releaseYear: "2017",
          vibe: "Heroic calm",
          description:
            "Chris Martin's vocals floating over gentle electronic production.",
        },
        {
          title: "Let Me Down Slowly",
          artist: "Alec Benjamin",
          embedId: "50VNCymT-Cs",
          genre: "Indie Pop",
          releaseYear: "2018",
          vibe: "Gentle descent",
          description:
            "Delicate storytelling and production that settles softly.",
        },
        {
          title: "Closer",
          artist: "The Chainsmokers ft. Halsey",
          embedId: "PT2_F-1esPk",
          genre: "EDM Pop",
          releaseYear: "2016",
          vibe: "Summer nostalgia",
          description:
            "Breezy electronic production wrapping around nostalgic vocals.",
        },
        {
          title: "After Dark",
          artist: "Mr.Kitty",
          embedId: "sVx1mJDeUjY",
          genre: "Synthwave",
          releaseYear: "2014",
          vibe: "Midnight synths",
          description:
            "Dark synth-wave atmospherics for any contemplative moment.",
        },
        {
          title: "Happier",
          artist: "Marshmello & Bastille",
          embedId: "m7Bc3pLyij0",
          genre: "EDM Pop",
          releaseYear: "2018",
          vibe: "Bittersweet",
          description:
            "Emotional electronic anthem balancing joy and melancholy.",
        },
        {
          title: "Memories",
          artist: "Maroon 5",
          embedId: "SlPhMPnQ58k",
          genre: "Pop",
          releaseYear: "2019",
          vibe: "Reflective toast",
          description:
            "Canon-inspired chords and Adam Levine at his most tender.",
        },
        {
          title: "Space Song",
          artist: "Beach House",
          embedId: "RBtlPT23PTM",
          genre: "Dream Pop",
          releaseYear: "2015",
          vibe: "Zero gravity",
          description:
            "Reverb-drenched guitars and vocals drifting through cosmic space.",
        },
        {
          title: "Sunflower",
          artist: "Post Malone & Swae Lee",
          embedId: "ApXoWvfEYVU",
          genre: "Pop Rap",
          releaseYear: "2018",
          vibe: "Easy vibes",
          description:
            "Effortlessly cool melodies that float through any moment.",
        },
      ],
    },
  ],
};

export const MOODS_BY_VALUE = MOODS.reduce((acc, mood) => {
  acc[mood.value] = mood;
  return acc;
}, {});
