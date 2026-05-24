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
  { slug: "manali", name: "Manali", category: "mountains", tier: "budget", duration: "5D/4N", startingPrice: 14999, season: "Oct - Mar", groupSize: "12-18", description: "Snow trails, cafe nights, and curated mountain escapes.", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80" },
  { slug: "goa", name: "Goa", category: "beach", tier: "premium", duration: "4D/3N", startingPrice: 18999, season: "Nov - Feb", groupSize: "16-24", description: "Sunset beach scenes, social nights, and premium stays.", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80" },
  { slug: "ladakh", name: "Ladakh", category: "mountains", tier: "premium", duration: "7D/6N", startingPrice: 32999, season: "Jun - Sep", groupSize: "10-14", description: "High altitude roads, surreal landscapes, legendary vibes.", image: "https://images.unsplash.com/photo-1626014896506-6f5f2a57bc50?auto=format&fit=crop&w=1200&q=80" },
  { slug: "kasol", name: "Kasol", category: "mountains", tier: "budget", duration: "4D/3N", startingPrice: 12999, season: "Sep - Apr", groupSize: "12-20", description: "Riverside hostels, pine forests, and social backpacking culture.", image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80" },
  { slug: "bali", name: "Bali", category: "international", tier: "premium", duration: "6D/5N", startingPrice: 64999, season: "Apr - Oct", groupSize: "10-16", description: "Island luxury, waterfalls, and unforgettable group moments.", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80" },
  { slug: "dubai", name: "Dubai", category: "international", tier: "premium", duration: "5D/4N", startingPrice: 57999, season: "Nov - Mar", groupSize: "10-18", description: "Skyline nights, desert adventures, and elite experiences.", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80" },
];
