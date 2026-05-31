import type { ReactNode } from "react";
import { Mountain, Sun, Waves, MountainSnow, Sunrise } from "lucide-react";
import type { CardItem } from "@/components/ui/expanding-cards";
import type { Trip } from "@/data/upcomingTrips";

const tripIcons: Record<string, ReactNode> = {
  goa: <Sun size={24} />,
  malvan: <Waves size={24} />,
  "spiti-valley": <Mountain size={24} />,
  manali: <MountainSnow size={24} />,
  uttarakhand: <Sunrise size={24} />,
};

export function tripsToExpandingCards(trips: Trip[]): CardItem[] {
  return trips.map((trip) => ({
    id: trip.slug,
    title: trip.destination,
    description: trip.description,
    imgSrc: trip.image,
    icon: tripIcons[trip.slug] ?? <Mountain size={24} />,
    linkHref: `/trips/${trip.slug}`,
    meta: `${trip.duration} · ${trip.mood}`,
    priceLabel: `From ₹${trip.price.toLocaleString("en-IN")}`,
  }));
}
