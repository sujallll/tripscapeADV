export type Destination = {
  slug: string;
  name: string;
  category: "beach" | "mountains" | "international";
  tier: "budget" | "premium";
  duration: string;
  startingPrice: number;
  season: string;
  groupSize: string;
  description: string;
  image: string;
};

export const destinations: Destination[] = [
  {
    slug: "goa",
    name: "Goa",
    category: "beach",
    tier: "budget",
    duration: "6D/5N",
    startingPrice: 12999,
    season: "May – Jun",
    groupSize: "16-24",
    description: "Sunset beaches, social nights, and curated group getaways.",
    image: "/trips/goa.png",
  },
  {
    slug: "malvan",
    name: "Malvan",
    category: "beach",
    tier: "budget",
    duration: "5D/4N",
    startingPrice: 15999,
    season: "Oct – Mar",
    groupSize: "12-20",
    description: "Konkan coast — forts, seafood, and turquoise waters.",
    image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "spiti-valley",
    name: "Spiti Valley",
    category: "mountains",
    tier: "premium",
    duration: "11D/10N",
    startingPrice: 22999,
    season: "Jun – Aug",
    groupSize: "10-14",
    description: "High-altitude roadtrip with Chandratal Lake.",
    image: "/trips/spiti-valley.png",
  },
  {
    slug: "manali",
    name: "Manali",
    category: "mountains",
    tier: "budget",
    duration: "5D/4N",
    startingPrice: 14999,
    season: "Oct – Mar",
    groupSize: "12-18",
    description: "Snow trails, cafe nights, and mountain escapes.",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "uttarakhand",
    name: "Uttarakhand",
    category: "mountains",
    tier: "budget",
    duration: "6D/5N",
    startingPrice: 16999,
    season: "Mar – Nov",
    groupSize: "12-18",
    description: "Hill towns, river valleys, and Himalayan views.",
    image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80",
  },
];
