export type Game = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  /** External URL the game is hosted at. Opens in a new tab. */
  url: string;
  /**
   * Image path inside `public/`.
   * Example: drop your screenshot at `public/games/vector-golf.png`
   * then set `image: "/games/vector-golf.png"`.
   */
  image: string;
  tags: string[];
  featured?: boolean;
};

export const games: Game[] = [
  {
    slug: "gale-force-golf",
    title: "Gale Force Golf",
    tagline: "Pixel art golf vs. the wind",
    description:
      "Tee off on a windswept sunset course. Read the gale, time your swing and sink it in this casual pixel art golf game that plays instantly in your browser.",
    url: "https://falkdahl.github.io/vector-golf",
    image: "/games/GaleForceGolf.jpg",
    tags: ["Casual", "Sports", "Pixel art", "1 player"],
    featured: true,
  },
  {
    slug: "mycelium-space",
    title: "Mycelium Space",
    tagline: "The Bloom",
    description:
      "Grow a living mycelium network across the stars. Connect nodes, bloom across planets and spread through the galaxy in this casual space strategy game that plays instantly in your browser.",
    url: "https://mansfritzner.github.io/the-bloom",
    image: "/games/MycelimSpace.png",
    tags: ["Casual", "Space", "Strategy", "1 player"],
  },
  {
    slug: "tapup",
    title: "TapUp",
    tagline: "Tap. Rotate. Score.",
    description:
      "Swing an orbiting ball around the center, smash through blocks, dodge the spikes and rack up points in this fast, casual arcade tapper that plays instantly in your browser.",
    url: "https://moeidheidari.com/tapup/",
    image: "/games/tapup.png",
    tags: ["Casual", "Arcade", "Reflex", "1 player"],
  },
  {
    slug: "roguelite",
    title: "Roguelite",
    tagline: "Survive. Evolve. Conquer.",
    description:
      "Dodge the swarm, blast through stages and conquer the Obelisks in this wave survival roguelite that plays instantly in your browser.",
    url: "https://mansfritzner.github.io/test-game/",
    image: "/games/roguelite.jpg",
    tags: ["Casual", "Action", "Roguelite", "1 player"],
  },
  // ── How to add your next game ──────────────────────────────
  // 1. Drop a cover image in `public/games/` (e.g. `/games/my-game.png`,
  //    1200×630 works great).
  // 2. Add an entry here:
  // {
  //   slug: "my-game",
  //   title: "My Game",
  //   tagline: "One-line hook",
  //   description: "1 to 2 sentences on why it's fun.",
  //   url: "https://…",
  //   image: "/games/my-game.png",
  //   tags: ["Casual"],
  // },
];
