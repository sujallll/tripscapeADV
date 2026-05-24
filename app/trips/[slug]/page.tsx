import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { destinations } from "@/data/destinations";
import { faqs } from "@/data/faqs";

export default async function TripDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const trip = destinations.find((item) => item.slug === slug);
  if (!trip) return notFound();

  return (
    <>
      <section className="relative h-[54vh] overflow-hidden">
        <Image src={trip.image} alt={`${trip.name} banner`} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-[#060914]" />
        <Container className="relative flex h-full items-end pb-10"><div><p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Trip Details</p><h1 className="mt-2 text-5xl font-semibold">{trip.name}</h1><p className="mt-2 max-w-2xl text-white/75">{trip.description}</p></div></Container>
      </section>
      <Container className="space-y-10 py-14">
        <section className="grid gap-6 lg:grid-cols-3"><div className="glass rounded-2xl p-6 lg:col-span-2"><h2 className="text-2xl font-semibold">Overview</h2><p className="mt-3 text-white/75">Curated departure blending scenic highlights, social experiences, and smooth logistics.</p></div><aside className="glass rounded-2xl p-6"><p className="text-sm text-white/70">Starting from</p><p className="mt-2 text-3xl text-cyan-200">Rs {trip.startingPrice.toLocaleString("en-IN")}</p><Link href="/contact" className="mt-4 inline-block rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-2 font-semibold text-[#020617]">Book Your Adventure</Link></aside></section>
        <section><h2 className="text-2xl font-semibold">FAQ</h2><div className="mt-4"><FAQAccordion items={faqs} /></div></section>
      </Container>
    </>
  );
}
