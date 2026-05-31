"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { memoryGalleryRowOne, memoryGalleryRowTwo } from "@/data/gallery";
import { memoryVideos } from "@/data/memoriesVideos";
import { MemoryMarquee } from "@/components/home/memories/MemoryMarquee";
import { MemoryReelShowcase } from "@/components/home/memories/MemoryReelCarousel";
import { SECTION_IDS } from "@/lib/sections";

export function MemoriesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [24, -24]);

  return (
    <section id={SECTION_IDS.memories} ref={sectionRef} className="scroll-mt-32">
      <motion.div style={{ y: parallaxY }} className="memories-shell on-dark relative overflow-hidden rounded-[2rem] px-4 py-14 sm:px-8 sm:py-16 lg:px-10">
        <div className="ambient-orb ambient-orb--green memories-orb-left pointer-events-none absolute -left-20 top-10 h-56 w-56 opacity-20" />
        <div className="ambient-orb ambient-orb--navy memories-orb-right pointer-events-none absolute -right-16 bottom-16 h-64 w-64 opacity-25" />

        <motion.header
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-12 sm:mb-14"
        >
          <p className="tagline">Captured on the road</p>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl">Memories</h2>
          <div className="memories-brush-divider" />
          <p className="lead mt-4 max-w-2xl">
            Moments from the road — highlights from completed adventures, told in frames and reels.
          </p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="relative space-y-5 sm:space-y-6"
        >
          <MemoryMarquee images={memoryGalleryRowOne} direction="ltr" />
          <MemoryMarquee images={memoryGalleryRowTwo} direction="rtl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-16 border-t border-white/10 pt-14 sm:mt-20 sm:pt-16"
        >
          <header className="mb-10 text-center sm:mb-12">
            <p className="tagline">Reel highlights</p>
            <h3 className="font-display mt-2 text-2xl sm:text-3xl">Video Memories</h3>
            <div className="memories-brush-divider mx-auto" />
          </header>

          <MemoryReelShowcase videos={memoryVideos} />
        </motion.div>
      </motion.div>
    </section>
  );
}
