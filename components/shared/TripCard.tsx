"use client";

import Image from "next/image";
import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Bus, Coffee, Hotel, MapPin } from "lucide-react";
import type { Trip } from "@/data/upcomingTrips";
import { MagneticLink } from "@/components/ui/MagneticLink";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const inclusionIcons: Record<string, typeof Hotel> = {
  "Hotel Stays": Hotel,
  "Beachfront Resort": Hotel,
  Meals: Coffee,
  "All Meals": Coffee,
  Transport: Bus,
  "AC 2×2 Bus": Bus,
  Guide: MapPin,
  "Guided Tours": MapPin,
  "Trip Lead": MapPin,
};

const cardSpring = { type: "spring" as const, stiffness: 380, damping: 28 };

type TripCardProps = {
  trip: Trip;
  index: number;
  isActive: boolean;
  isDimmed: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
};

export function TripCard({
  trip,
  index,
  isActive,
  isDimmed,
  onActivate,
  onDeactivate,
}: TripCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const reducedMotion = usePrefersReducedMotion();
  const enablePremium = isDesktop && !reducedMotion;

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const smoothX = useSpring(mouseX, { stiffness: 180, damping: 22 });
  const smoothY = useSpring(mouseY, { stiffness: 180, damping: 22 });

  const rotateX = useTransform(smoothY, [0, 1], [7, -7]);
  const rotateY = useTransform(smoothX, [0, 1], [-7, 7]);
  const glareX = useTransform(smoothX, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(smoothY, [0, 1], ["0%", "100%"]);
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.22), transparent 55%)`;

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    if (!enablePremium || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width);
    mouseY.set((event.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
    onDeactivate();
  };

  return (
    <motion.article
      ref={cardRef}
      layout
      layoutId={`trip-card-${trip.slug}`}
      initial={{ opacity: 0, y: 56, rotate: index % 2 === 0 ? -2.5 : 2.5, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, rotate: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px", amount: 0.2 }}
      transition={{ ...cardSpring, delay: index * 0.1 }}
      animate={{
        scale: isActive ? 1.03 : isDimmed ? 0.975 : 1,
        y: isActive ? -10 : 0,
      }}
      style={
        enablePremium
          ? {
              rotateX,
              rotateY,
              transformPerspective: 1200,
              transformStyle: "preserve-3d",
            }
          : undefined
      }
      onMouseMove={handleMouseMove}
      onMouseEnter={onActivate}
      onMouseLeave={handleMouseLeave}
      onFocus={onActivate}
      onBlur={onDeactivate}
      className={`glass group relative overflow-hidden rounded-2xl transition-shadow duration-500 ${
        isActive ? "trip-card-active z-10" : "z-0"
      }`}
    >
      {isActive && enablePremium ? (
        <motion.div
          layoutId={`trip-glow-${trip.slug}`}
          className="trip-card-glow pointer-events-none absolute -inset-4 -z-10 rounded-3xl opacity-100"
          transition={{ type: "spring", stiffness: 260, damping: 30 }}
        />
      ) : null}

      <div className="relative h-52 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={trip.image}
            alt={`${trip.destination} trip`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className={`object-cover ${enablePremium ? "trip-ken-burns" : "transition duration-500 group-hover:scale-105"}`}
          />
        </div>
        <motion.div
          animate={{
            opacity: isActive ? 0.95 : 0.75,
            background:
              isActive && enablePremium
                ? "linear-gradient(to top, rgba(15,31,61,0.92) 0%, rgba(15,31,61,0.45) 45%, transparent 100%)"
                : "linear-gradient(to top, rgba(15,31,61,0.9) 0%, rgba(15,31,61,0.35) 50%, transparent 100%)",
          }}
          transition={{ duration: 0.45 }}
          className="on-dark absolute inset-0"
        />
        {enablePremium ? (
          <motion.div
            style={{ background: glareBackground }}
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        ) : null}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="absolute left-4 top-4 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white"
        >
          {trip.duration}
        </motion.div>
        <div className="on-dark absolute bottom-4 left-4 right-4">
          <motion.h3
            initial={false}
            animate={{ y: isActive ? -2 : 0 }}
            transition={cardSpring}
            className="font-display text-2xl"
          >
            {trip.destination}
          </motion.h3>
          {trip.tagline ? (
            <motion.p
              initial={{ opacity: 0.85 }}
              animate={{ opacity: isActive ? 1 : 0.9, y: isActive ? 0 : 2 }}
              transition={{ duration: 0.35, delay: isActive ? 0.05 : 0 }}
              className="text-sm text-white/90"
            >
              {trip.tagline}
            </motion.p>
          ) : null}
        </div>
      </div>

      <div className="space-y-4 p-5">
        <motion.p
          initial={false}
          animate={{ opacity: isDimmed ? 0.65 : 1 }}
          className="text-sm text-muted"
        >
          {trip.departureDates}
        </motion.p>
        {trip.route ? (
          <motion.p
            initial={false}
            animate={{ opacity: isDimmed ? 0.65 : 1 }}
            className="text-xs font-medium text-accent"
          >
            {trip.route}
          </motion.p>
        ) : null}

        <div className="flex flex-wrap gap-2">
          {trip.inclusions.slice(0, 4).map((item, badgeIndex) => {
            const Icon = inclusionIcons[item] ?? MapPin;
            return (
              <motion.span
                key={item}
                initial={false}
                animate={{
                  opacity: isDimmed ? 0.55 : 1,
                  scale: isActive ? 1 : 0.98,
                }}
                transition={{ delay: isActive ? badgeIndex * 0.04 : 0 }}
                className="inline-flex items-center gap-1 rounded-full bg-[rgba(63,94,60,0.1)] px-2.5 py-1 text-xs font-medium text-accent"
              >
                <Icon size={12} />
                {item}
              </motion.span>
            );
          })}
        </div>

        <div className="flex items-center justify-between border-t border-[rgba(63,94,60,0.12)] pt-4">
          <motion.div animate={{ opacity: isDimmed ? 0.65 : 1 }}>
            <p className="text-xs text-muted">Starting from</p>
            <p className="font-display text-xl text-accent">₹{trip.price.toLocaleString("en-IN")}</p>
          </motion.div>
          <MagneticLink
            href={`/trips/${trip.slug}`}
            className="rounded-full border border-[rgba(63,94,60,0.3)] px-4 py-2 text-sm font-semibold transition hover:border-brand hover:bg-brand hover:text-white"
          >
            View Details
          </MagneticLink>
        </div>
      </div>
    </motion.article>
  );
}
