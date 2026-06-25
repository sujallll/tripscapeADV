"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const ease = [0.22, 1, 0.36, 1] as const;

export function TripsAnimatedHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  const reducedMotion = usePrefersReducedMotion();

  if (reducedMotion) {
    return (
      <div>
        <h2 className="font-display text-3xl sm:text-4xl">{title}</h2>
        <div className="brush-divider" />
        <p className="lead mt-4 max-w-2xl">{subtitle}</p>
      </div>
    );
  }

  return (
    <div>
      <motion.h2
        className="font-display text-3xl sm:text-4xl"
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.65, ease }}
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, delay: 0.15, ease }}
        className="brush-divider origin-left"
      />
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.25, ease }}
        className="lead mt-4 max-w-2xl"
      >
        {subtitle}
      </motion.p>
    </div>
  );
}
