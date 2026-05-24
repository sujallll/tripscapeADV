import Image from "next/image";
import Link from "next/link";

type Trip = { slug: string; destination: string; date: string; duration: string; price: number; seatsLeft: number; mood: string; image: string };

export function TripCard({ trip }: { trip: Trip }) {
  return (
    <article className="glass rounded-2xl p-4">
      <div className="relative mb-4 h-44 overflow-hidden rounded-xl"><Image src={trip.image} alt={`${trip.destination} trip photo`} fill className="object-cover" /></div>
      <h3 className="text-xl font-semibold">{trip.destination}</h3>
      <div className="mt-2 flex flex-wrap gap-2 text-xs">
        <span className="rounded-full bg-cyan-400/20 px-3 py-1 text-cyan-200">{trip.duration}</span>
        <span className="rounded-full bg-violet-400/20 px-3 py-1 text-violet-100">{trip.mood}</span>
        <span className="rounded-full bg-amber-300/20 px-3 py-1 text-amber-100">{trip.seatsLeft} seats left</span>
      </div>
      <p className="mt-2 text-sm text-white/70">{new Date(trip.date).toDateString()}</p>
      <div className="mt-4 flex items-center justify-between"><p className="font-semibold text-cyan-200">Rs {trip.price.toLocaleString("en-IN")}</p><Link href={`/trips/${trip.slug}`} className="rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white/10">View Details</Link></div>
    </article>
  );
}
