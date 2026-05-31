import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { getTripBySlug } from "@/data/upcomingTrips";
import { faqs } from "@/data/faqs";

export default async function TripDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const trip = getTripBySlug(slug);
  if (!trip) return notFound();

  return (
    <>
      <section className="relative h-[54vh] overflow-hidden">
        <Image src={trip.image} alt={`${trip.destination} banner`} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-brand-navy/90" />
        <Container className="relative flex h-full items-end pb-10">
          <div className="on-dark">
            <p className="tagline">Trip Details</p>
            <h1 className="font-display mt-2 text-5xl">{trip.destination}</h1>
            {trip.tagline ? <p className="mt-1 text-xl text-white/90">{trip.tagline}</p> : null}
            <p className="lead mt-3 max-w-2xl">{trip.description}</p>
          </div>
        </Container>
      </section>

      <Container className="space-y-10 py-14">
        <section className="grid gap-6 lg:grid-cols-3">
          <div className="glass space-y-4 rounded-2xl p-6 lg:col-span-2">
            <h2 className="font-display text-2xl">Overview</h2>
            <p className="text-muted">
              <span className="font-semibold text-accent">{trip.duration}</span> · {trip.mood}
            </p>
            {trip.route ? (
              <p className="text-sm text-muted">
                <span className="font-semibold text-brand-ink">Route: </span>
                {trip.route}
              </p>
            ) : null}
            <p className="text-sm text-muted">
              <span className="font-semibold text-brand-ink">Departures: </span>
              {trip.departureDates}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {trip.inclusions.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-[rgba(63,94,60,0.1)] px-3 py-1 text-sm font-medium text-accent"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <aside className="glass rounded-2xl p-6">
            <p className="text-sm text-muted">Starting from</p>
            <p className="font-display mt-2 text-3xl text-accent">₹{trip.price.toLocaleString("en-IN")}</p>
            <Link href="/#contact" className="btn-primary mt-4 inline-block rounded-full px-5 py-2.5 text-sm font-semibold">
              Book Your Adventure
            </Link>
          </aside>
        </section>

        <section>
          <h2 className="font-display text-2xl">FAQ</h2>
          <div className="mt-4">
            <FAQAccordion items={faqs} />
          </div>
        </section>
      </Container>
    </>
  );
}
