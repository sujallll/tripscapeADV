import Image from "next/image";
import Link from "next/link";
import type { Destination } from "@/data/destinations";

export function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <article className="surface-card group overflow-hidden rounded-2xl transition hover:-translate-y-1">
      <div className="relative h-52 overflow-hidden">
        <Image
          src={destination.image}
          alt={`${destination.name} scenic view`}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />
      </div>
      <div className="space-y-3 p-5">
        <h3 className="font-display text-2xl font-bold">{destination.name}</h3>
        <p className="text-sm text-muted">{destination.description}</p>
        <p className="text-sm font-semibold text-accent">
          From Rs {destination.startingPrice.toLocaleString("en-IN")}
        </p>
        <Link
          href={`/trips/${destination.slug}`}
          className="inline-block rounded-full border border-[rgba(63,94,60,0.3)] px-4 py-2 text-sm font-medium transition hover:border-brand hover:bg-brand hover:text-white"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}
