import { HeroSection } from "@/components/home/HeroSection";
import { Container } from "@/components/ui/Container";
import { stats } from "@/data/stats";
import { destinations } from "@/data/destinations";
import { upcomingTrips } from "@/data/upcomingTrips";
import { testimonials } from "@/data/testimonials";
import { galleryImages } from "@/data/gallery";
import { DestinationCard } from "@/components/shared/DestinationCard";
import { TripCard } from "@/components/shared/TripCard";
import { TestimonialCarousel } from "@/components/shared/TestimonialCarousel";
import { GalleryMasonry } from "@/components/shared/GalleryMasonry";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { faqs } from "@/data/faqs";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Container className="space-y-20 py-14">
        <section className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 sm:grid-cols-2 lg:grid-cols-4">{stats.map((item) => <div key={item.label}><p className="text-3xl text-cyan-200">{item.value}</p><p className="text-sm text-white/70">{item.label}</p></div>)}</section>
        <section><h2 className="text-3xl font-semibold">Featured Destinations</h2><div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{destinations.map((d) => <DestinationCard key={d.slug} destination={d} />)}</div></section>
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{["Curated group experiences","End-to-end planning","Trusted trip leaders","Memorable itineraries","Budget to premium options","Community-first travel"].map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5">{item}</div>)}</section>
        <section><h2 className="text-3xl font-semibold">Upcoming Trips</h2><div className="mt-8 grid gap-6 md:grid-cols-2">{upcomingTrips.map((trip) => <TripCard key={trip.slug} trip={trip} />)}</div></section>
        <section><h2 className="text-3xl font-semibold">Past Trips / Memories</h2><div className="mt-8"><GalleryMasonry images={galleryImages} /></div></section>
        <section><h2 className="text-3xl font-semibold">Testimonials</h2><div className="mt-8"><TestimonialCarousel items={testimonials} /></div></section>
        <section className="grid gap-4 md:grid-cols-4">{["Browse trips","Pick your adventure","Reserve your slot","Travel with the crew"].map((step, idx) => <div key={step} className="rounded-2xl border border-white/10 bg-white/5 p-5"><p className="text-sm text-cyan-300">Step {idx + 1}</p><p className="mt-2">{step}</p></div>)}</section>
        <section><h2 className="text-3xl font-semibold">FAQ</h2><div className="mt-6"><FAQAccordion items={faqs} /></div></section>
        <section className="glass rounded-3xl p-8 text-center"><p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Your Next Story Starts Here</p><h2 className="mt-3 text-4xl font-semibold">Book Your Next Adventure</h2><Link href="/contact" className="mt-6 inline-block rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 font-semibold text-[#020617]">Plan Your Trip</Link></section>
      </Container>
    </>
  );
}
