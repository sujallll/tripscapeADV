import Image from "next/image";
import Link from "next/link";
import type { Destination } from "@/data/destinations";

export function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:bg-white/10">
      <div className="relative h-52"><Image src={destination.image} alt={`${destination.name} scenic view`} fill className="object-cover" /></div>
      <div className="space-y-3 p-5">
        <h3 className="text-2xl font-semibold">{destination.name}</h3>
        <p className="text-sm text-white/70">{destination.description}</p>
        <p className="text-sm text-cyan-200">From Rs {destination.startingPrice.toLocaleString("en-IN")}</p>
        <Link href={`/trips/${destination.slug}`} className="inline-block rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white/10">View Details</Link>
      </div>
    </article>
  );
}
