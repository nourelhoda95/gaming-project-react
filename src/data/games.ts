export interface Game {
  id: string;
  title: string;
  description: string;
  genre: string;
  releaseDate: string;
  developer: string;
  rating: number;
  platforms: ('pc' | 'playstation' | 'xbox' | 'switch')[];
  coverImage: string;
  heroImage: string;
  screenshots: string[];
}

export const games: Game[] = [
  {
    id: '1',
    title: 'Neon Uprising',
    description: 'Dive into a breathtaking cyberpunk metropolis where neon lights illuminate dark alleys and corporate secrets. As a rogue hacker, navigate through sprawling districts, uncover conspiracies, and fight for freedom in a world controlled by mega-corporations. Your choices shape the future of the city.',
    genre: 'Action RPG',
    releaseDate: '2024-03-15',
    developer: 'NeonWave Studios',
    rating: 9.2,
    platforms: ['pc', 'playstation', 'xbox'],
    coverImage: 'https://images.unsplash.com/photo-1611023624193-31924e0e7d3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBnYW1lJTIwbmVvbiUyMGNpdHl8ZW58MXx8fHwxNzcwMzAwNTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    heroImage: 'https://images.unsplash.com/photo-1611023624193-31924e0e7d3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBnYW1lJTIwbmVvbiUyMGNpdHl8ZW58MXx8fHwxNzcwMzAwNTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    screenshots: [
      'https://images.unsplash.com/photo-1611023624193-31924e0e7d3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBnYW1lJTIwbmVvbiUyMGNpdHl8ZW58MXx8fHwxNzcwMzAwNTc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1080',
      'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=1080',
      'https://images.unsplash.com/photo-1614850715649-1d0106293bd1?w=1080',
    ],
  },
  {
    id: '2',
    title: 'Legends of Aethermoor',
    description: 'Embark on an epic journey through mystical lands filled with ancient magic and legendary warriors. As the chosen hero, forge alliances, master powerful spells, and face mythical creatures in your quest to restore balance to the realm. Every battle tests your courage and strategy.',
    genre: 'Fantasy Adventure',
    releaseDate: '2024-05-22',
    developer: 'Mythic Forge',
    rating: 9.5,
    platforms: ['pc', 'playstation', 'xbox', 'switch'],
    coverImage: 'https://images.unsplash.com/photo-1765606290905-b9d377ea4d5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwbWVkaWV2YWwlMjB3YXJyaW9yJTIwZ2FtZXxlbnwxfHx8fDE3NzAzODI5MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    heroImage: 'https://images.unsplash.com/photo-1765606290905-b9d377ea4d5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwbWVkaWV2YWwlMjB3YXJyaW9yJTIwZ2FtZXxlbnwxfHx8fDE3NzAzODI5MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    screenshots: [
      'https://images.unsplash.com/photo-1765606290905-b9d377ea4d5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwbWVkaWV2YWwlMjB3YXJyaW9yJTIwZ2FtZXxlbnwxfHx8fDE3NzAzODI5MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1080',
      'https://images.unsplash.com/photo-1596727362302-b8d891c42ab8?w=1080',
      'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=1080',
    ],
  },
  {
    id: '3',
    title: 'Stellar Frontier',
    description: 'Command your fleet across the vast expanse of space in this stunning sci-fi odyssey. Explore uncharted star systems, engage in tactical space combat, and uncover the mysteries of an ancient alien civilization. The future of humanity rests in your hands.',
    genre: 'Sci-Fi Strategy',
    releaseDate: '2024-07-10',
    developer: 'Cosmic Dawn Interactive',
    rating: 8.9,
    platforms: ['pc', 'xbox'],
    coverImage: 'https://images.unsplash.com/photo-1627645835237-0743e52b991f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMHNjaS1maSUyMGdhbWUlMjBmdXR1cmlzdGljfGVufDF8fHx8MTc3MDM4MjkzNHww&ixlib=rb-4.1.0&q=80&w=1080',
    heroImage: 'https://images.unsplash.com/photo-1627645835237-0743e52b991f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMHNjaS1maSUyMGdhbWUlMjBmdXR1cmlzdGljfGVufDF8fHx8MTc3MDM4MjkzNHww&ixlib=rb-4.1.0&q=80&w=1080',
    screenshots: [
      'https://images.unsplash.com/photo-1627645835237-0743e52b991f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMHNjaS1maSUyMGdhbWUlMjBmdXR1cmlzdGljfGVufDF8fHx8MTc3MDM4MjkzNHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1080',
      'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=1080',
      'https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=1080',
    ],
  },
  {
    id: '4',
    title: 'Velocity Rush',
    description: 'Experience the ultimate racing adrenaline rush. Push your limits on cutting-edge supercars through stunning global locations. Master hairpin turns, draft opponents, and customize your dream machine. Every race is a test of speed, skill, and reflexes.',
    genre: 'Racing',
    releaseDate: '2024-09-05',
    developer: 'Apex Speed Games',
    rating: 8.7,
    platforms: ['pc', 'playstation', 'xbox'],
    coverImage: 'https://images.unsplash.com/photo-1597523535985-ecae0b9b1d22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjBjYXIlMjBnYW1lJTIwc3BlZWR8ZW58MXx8fHwxNzcwMzgyOTM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    heroImage: 'https://images.unsplash.com/photo-1597523535985-ecae0b9b1d22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjBjYXIlMjBnYW1lJTIwc3BlZWR8ZW58MXx8fHwxNzcwMzgyOTM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    screenshots: [
      'https://images.unsplash.com/photo-1597523535985-ecae0b9b1d22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjBjYXIlMjBnYW1lJTIwc3BlZWR8ZW58MXx8fHwxNzcwMzgyOTM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1080',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1080',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1080',
    ],
  },
  {
    id: '5',
    title: 'Whispers in the Dark',
    description: 'Survive the nightmare. Trapped in an abandoned asylum, you must uncover the truth behind disturbing experiments while evading unspeakable horrors. Every shadow hides danger, every sound could be your last. Can you escape before darkness consumes you?',
    genre: 'Survival Horror',
    releaseDate: '2024-10-31',
    developer: 'Dread Studios',
    rating: 9.0,
    platforms: ['pc', 'playstation', 'xbox'],
    coverImage: 'https://images.unsplash.com/photo-1766186616102-5f2bcb39b678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3Jyb3IlMjBkYXJrJTIwYXRtb3NwaGVyaWMlMjBnYW1lfGVufDF8fHx8MTc3MDM4MjkzNXww&ixlib=rb-4.1.0&q=80&w=1080',
    heroImage: 'https://images.unsplash.com/photo-1766186616102-5f2bcb39b678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3Jyb3IlMjBkYXJrJTIwYXRtb3NwaGVyaWMlMjBnYW1lfGVufDF8fHx8MTc3MDM4MjkzNXww&ixlib=rb-4.1.0&q=80&w=1080',
    screenshots: [
      'https://images.unsplash.com/photo-1766186616102-5f2bcb39b678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3Jyb3IlMjBkYXJrJTIwYXRtb3NwaGVyaWMlMjBnYW1lfGVufDF8fHx8MTc3MDM4MjkzNXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=1080',
      'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=1080',
      'https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?w=1080',
    ],
  },
  {
    id: '6',
    title: 'Jungle Expedition',
    description: 'Venture deep into uncharted wilderness filled with ancient ruins and hidden treasures. Solve intricate puzzles, navigate treacherous terrain, and survive encounters with exotic wildlife. Your adventure begins where civilization ends.',
    genre: 'Adventure',
    releaseDate: '2024-11-20',
    developer: 'Explorer Games',
    rating: 8.5,
    platforms: ['pc', 'playstation', 'switch'],
    coverImage: 'https://images.unsplash.com/photo-1654757084171-233ab65154b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjBqdW5nbGUlMjBleHBsb3JhdGlvbiUyMGdhbWV8ZW58MXx8fHwxNzcwMzgyOTM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    heroImage: 'https://images.unsplash.com/photo-1654757084171-233ab65154b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjBqdW5nbGUlMjBleHBsb3JhdGlvbiUyMGdhbWV8ZW58MXx8fHwxNzcwMzgyOTM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    screenshots: [
      'https://images.unsplash.com/photo-1654757084171-233ab65154b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjBqdW5nbGUlMjBleHBsb3JhdGlvbiUyMGdhbWV8ZW58MXx8fHwxNzcwMzgyOTM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1516410529446-2c777cb7366d?w=1080',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1080',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1080',
    ],
  },
  {
    id: '7',
    title: 'Warzone Elite',
    description: 'Join the frontlines in this intense tactical shooter. Coordinate with your squad, master advanced weaponry, and complete high-stakes missions across dynamic battlefields. Victory requires precision, teamwork, and nerves of steel.',
    genre: 'First-Person Shooter',
    releaseDate: '2025-01-18',
    developer: 'Tactical Force Studios',
    rating: 9.3,
    platforms: ['pc', 'playstation', 'xbox'],
    coverImage: 'https://images.unsplash.com/photo-1639069422496-03416b5daa28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBzaG9vdGVyJTIwbWlsaXRhcnklMjBnYW1lfGVufDF8fHx8MTc3MDM4MjkzNnww&ixlib=rb-4.1.0&q=80&w=1080',
    heroImage: 'https://images.unsplash.com/photo-1639069422496-03416b5daa28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBzaG9vdGVyJTIwbWlsaXRhcnklMjBnYW1lfGVufDF8fHx8MTc3MDM4MjkzNnww&ixlib=rb-4.1.0&q=80&w=1080',
    screenshots: [
      'https://images.unsplash.com/photo-1639069422496-03416b5daa28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3Rpb24lMjBzaG9vdGVyJTIwbWlsaXRhcnklMjBnYW1lfGVufDF8fHx8MTc3MDM4MjkzNnww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1526566661780-1a67ea3c863e?w=1080',
      'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=1080',
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1080',
    ],
  },
  {
    id: '8',
    title: 'Champion Arena',
    description: 'Step into the ultimate sports arena where legends are made. Experience realistic physics, dynamic weather, and roaring crowds. Build your dynasty, master every play, and claim your place among the greatest champions in history.',
    genre: 'Sports',
    releaseDate: '2025-02-14',
    developer: 'Arena Sports Interactive',
    rating: 8.8,
    platforms: ['pc', 'playstation', 'xbox', 'switch'],
    coverImage: 'https://images.unsplash.com/photo-1650124077853-b6fcb0231cc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBnYW1lJTIwc3RhZGl1bXxlbnwxfHx8fDE3NzAyOTM1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    heroImage: 'https://images.unsplash.com/photo-1650124077853-b6fcb0231cc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBnYW1lJTIwc3RhZGl1bXxlbnwxfHx8fDE3NzAyOTM1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    screenshots: [
      'https://images.unsplash.com/photo-1650124077853-b6fcb0231cc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBnYW1lJTIwc3RhZGl1bXxlbnwxfHx8fDE3NzAyOTM1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1080',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1080',
      'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1080',
    ],
  },
];
