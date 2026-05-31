"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { MountainSilhouette } from "@/components/ui/MountainSilhouette";
import { SECTION_IDS, scrollToSection } from "@/lib/sections";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const mountainY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section
      ref={ref}
      id={SECTION_IDS.home}
      className="relative -mt-[5.5rem] flex min-h-screen min-h-[100svh] scroll-mt-28 items-center overflow-hidden sm:-mt-24 sm:scroll-mt-32"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#2a4228]/85 via-[#1a2e1a]/90 to-[#0f1f3d]/95" />

      <motion.div style={{ y: mountainY }} className="pointer-events-none absolute inset-x-0 bottom-0 text-[#0a1628]">
        <MountainSilhouette className="h-32 w-full opacity-90 sm:h-44" />
        <MountainSilhouette className="-mt-20 h-24 w-2/3 opacity-60 blur-[1px] sm:-mt-24 sm:h-28" />
      </motion.div>

      <div className="ambient-orb ambient-orb--green left-[5%] top-[20%] h-48 w-48" />
      <div className="ambient-orb ambient-orb--navy right-[8%] top-[30%] h-56 w-56" />

      <Container className="relative py-32 sm:py-40 lg:py-44">
        <motion.div style={{ y: contentY }}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display max-w-4xl text-5xl text-white sm:text-6xl lg:text-7xl xl:text-[5.25rem]"
          >
            Travel <span className="gradient-text">Beyond Ordinary</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-white/90 sm:mt-10 sm:text-xl lg:text-2xl"
          >
            Curated group adventures across India — cinematic landscapes, trusted trip leaders, and
            crews that feel like family from day one.
          </motion.p>

          <div className="mt-12 flex flex-wrap gap-4 sm:mt-14">
            <button
              type="button"
              onClick={() => scrollToSection(SECTION_IDS.trips)}
              className="btn-primary rounded-full px-8 py-4 text-sm font-semibold sm:text-base"
            >
              Explore Trips
            </button>
            <button
              type="button"
              onClick={() => scrollToSection(SECTION_IDS.contact)}
              className="btn-outline rounded-full px-8 py-4 text-sm font-semibold sm:text-base"
            >
              Book Your Adventure
            </button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
