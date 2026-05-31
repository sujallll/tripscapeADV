"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const spring = { type: "spring" as const, stiffness: 420, damping: 32 };

export function TripsAnimatedHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  const reducedMotion = usePrefersReducedMotion();
  const chars = title.split("");

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
      <h2 className="font-display flex overflow-hidden text-3xl sm:text-4xl" aria-label={title}>
        {chars.map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            initial={{ y: "100%", opacity: 0, filter: "blur(8px)" }}
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ ...spring, delay: index * 0.045 }}
            className="inline-block"
            style={{ whiteSpace: char === " " ? "pre" : undefined }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, delay: chars.length * 0.045 + 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="brush-divider origin-left"
      />
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: chars.length * 0.045 + 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="lead mt-4 max-w-2xl"
      >
        {subtitle}
      </motion.p>
    </div>
  );
}
