export type Trip = {
  slug: string;
  destination: string;
  tagline?: string;
  duration: string;
  price: number;
  departureDates: string;
  route?: string;
  inclusions: string[];
  mood: string;
  image: string;
  description: string;
};

export const upcomingTrips: Trip[] = [
  {
    slug: "goa",
    destination: "Goa",
    tagline: "& Good Times",
    duration: "6D/5N",
    price: 12999,
    departureDates: "24 May – 29 May · 30 May – 4 Jun · 6 Jun – 11 Jun",
    inclusions: ["Hotel Stays", "Meals", "AC 2×2 Bus", "Guide"],
    mood: "Beach + Social",
    image: "/trips/goa.png",
    description: "Sun, sand, and curated group vibes — beach days, social nights, and hassle-free travel with Tripscape.",
  },
  {
    slug: "malvan",
    destination: "Malvan",
    tagline: "Konkan Coastal Trip",
    duration: "5D/4N",
    price: 15999,
    departureDates: "Multiple batches across the Konkan coast",
    route: "Malvan · Goa · Ratnagiri",
    inclusions: ["Beachfront Resort", "All Meals", "Transport", "Guided Tours"],
    mood: "Coastal + Culture",
    image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&w=1200&q=80",
    description: "Explore the Konkan coastline — turquoise waters, seafood trails, forts, and golden sunsets with your travel crew.",
  },
  {
    slug: "spiti-valley",
    destination: "Spiti Valley",
    tagline: "With Chandratal Lake",
    duration: "11D/10N",
    price: 22999,
    departureDates: "Jun: 05, 10, 14 · Jul: 10, 19 · Aug: 07, 21",
    route: "Shimla · Sangla · Chitkul · Kalpa · Tabo · Kaza · Chandratal · Manali",
    inclusions: ["Hotel Stays", "Meals", "Transport", "Guide"],
    mood: "Himalayan Roadtrip",
    image: "/trips/spiti-valley.png",
    description: "A legendary Spiti circuit through high-altitude villages, monasteries, and the surreal beauty of Chandratal Lake.",
  },
  {
    slug: "manali",
    destination: "Manali",
    tagline: "Mountains & Meadows",
    duration: "5D/4N",
    price: 14999,
    departureDates: "Weekly batches · Oct – Mar season",
    route: "Manali · Solang · Old Manali · Nearby valleys",
    inclusions: ["Hotel Stays", "Meals", "Transport", "Trip Lead"],
    mood: "Snow + Scenic",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
    description: "Pine forests, mountain cafes, adventure activities, and cozy group stays in the heart of Himachal.",
  },
  {
    slug: "uttarakhand",
    destination: "Uttarakhand",
    tagline: "Dev Bhoomi Escape",
    duration: "6D/5N",
    price: 16999,
    departureDates: "Mar – Jun · Sep – Nov batches",
    route: "Rishikesh · Mussoorie · Nearby hill gems",
    inclusions: ["Hotel Stays", "Meals", "Transport", "Guide"],
    mood: "Spiritual + Scenic",
    image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80",
    description: "River valleys, hill towns, and breathtaking Himalayan views — curated for travelers who love nature and culture.",
  },
];

export function getTripBySlug(slug: string) {
  return upcomingTrips.find((trip) => trip.slug === slug);
}
