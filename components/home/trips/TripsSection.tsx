"use client";

import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ExpandingCards } from "@/components/ui/expanding-cards";
import { TripsAnimatedHeading } from "@/components/home/trips/TripsAnimatedHeading";
import { upcomingTrips } from "@/data/upcomingTrips";
import { SECTION_IDS } from "@/lib/sections";
import { getTripSpotlight } from "@/lib/tripSpotlight";
import { tripsToExpandingCards } from "@/lib/tripsToExpandingCards";

const tripCards = tripsToExpandingCards(upcomingTrips);

export function TripsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleActiveChange = useCallback((index: number | null) => {
    setActiveIndex(index);
  }, []);

  const activeTrip = activeIndex !== null ? upcomingTrips[activeIndex] : null;
  const spotlight = activeTrip ? getTripSpotlight(activeTrip.slug) : null;

  return (
    <section id={SECTION_IDS.trips} ref={sectionRef} className="scroll-mt-32">
      <div className="relative">
        <motion.div
          aria-hidden
          animate={{
            opacity: activeTrip ? 1 : 0,
            background: spotlight
              ? `radial-gradient(ellipse 90% 70% at 50% 40%, ${spotlight.glow}, transparent 68%)`
              : "transparent",
          }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none absolute -inset-x-8 -inset-y-12 -z-10 rounded-[2.5rem] blur-2xl"
        />
        <motion.div
          aria-hidden
          animate={{
            opacity: activeTrip ? 0.65 : 0,
            background: spotlight
              ? `radial-gradient(circle at 20% 80%, ${spotlight.ambient}, transparent 50%)`
              : "transparent",
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="pointer-events-none absolute -inset-x-4 -inset-y-8 -z-10"
        />

        <TripsAnimatedHeading
          title="Trips"
          subtitle="Upcoming group departures — limited seats, premium itineraries. Hover or tap a card to explore."
        />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8"
        >
          <ExpandingCards
            items={tripCards}
            defaultActiveIndex={0}
            onActiveChange={handleActiveChange}
            className="mx-auto max-w-6xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
