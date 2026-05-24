"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#02040b]/30 via-[#050a16]/75 to-[#060914]" />
      <Container className="relative py-20">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-5 text-sm uppercase tracking-[0.25em] text-cyan-300">Escape the Usual</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl text-5xl font-semibold leading-tight sm:text-6xl">Travel <span className="gradient-text">Beyond Ordinary</span></motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mt-6 max-w-2xl text-lg text-white/75">Curated group adventures crafted for modern travelers who want cinematic landscapes and unforgettable community moments.</motion.p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/upcoming-trips" className="rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 text-sm font-semibold text-[#020617]">Explore Trips</Link>
          <Link href="/contact" className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold hover:bg-white/10">Book Your Adventure</Link>
        </div>
      </Container>
    </section>
  );
}
