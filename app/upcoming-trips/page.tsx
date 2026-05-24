import { TripCard } from "@/components/shared/TripCard";
import { Container } from "@/components/ui/Container";
import { upcomingTrips } from "@/data/upcomingTrips";

export default function UpcomingTripsPage() {
  return <Container className="py-16"><h1 className="text-4xl font-semibold">Upcoming Trips</h1><p className="mt-3 text-white/70">Limited seats. Premium itineraries. High-conversion departures.</p><div className="mt-8 grid gap-6 md:grid-cols-2">{upcomingTrips.map((trip) => <TripCard key={trip.slug} trip={trip} />)}</div></Container>;
}
