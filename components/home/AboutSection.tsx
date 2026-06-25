"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { SECTION_IDS } from "@/lib/sections";
import { InstagramIcon } from "@/components/ui/InstagramIcon";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease, delay },
  }),
};

/* ── Animated counter ── */
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame: number;
    const start = performance.now();
    const duration = 1800;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ── Founder card ── */
const founders = [
  {
    name: "Chetan Zore",
    role: "Co-Founder",
    education: "Engineer",
    quote: "Adventure begins where comfort ends.",
    instagram: "https://www.instagram.com/chetan_zoree/",
    photo: "/founders/chetan.jpg",
    gradient: "from-[#3f5e3c] to-[#2a4228]",
    initials: "CZ",
  },
  {
    name: "Atharva Parmar",
    role: "Co-Founder",
    education: "Bachelor of Mass Media (BMM)",
    quote: "Every trip should become someone's favorite memory.",
    instagram: "https://www.instagram.com/athuuuuu_17/",
    photo: "/founders/atharva.jpg",
    gradient: "from-[#0f1f3d] to-[#3f5e3c]",
    initials: "AP",
  },
];

function FounderCard({ founder, delay }: { founder: (typeof founders)[0]; delay: number }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      custom={delay}
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -8, transition: { duration: 0.3, ease } }}
      className="relative flex flex-col items-center rounded-3xl border border-white/60 bg-white/70 p-8 shadow-[0_8px_40px_rgba(63,94,60,0.10)] backdrop-blur-sm"
    >
      {/* Avatar */}
      <div className="relative h-28 w-28 overflow-hidden rounded-full shadow-lg ring-4 ring-white">
        <Image
          src={founder.photo}
          alt={founder.name}
          fill
          sizes="112px"
          className="object-cover object-top"
        />
      </div>

      <h3 className="font-display mt-5 text-xl font-bold">{founder.name}</h3>
      <p className="tagline mt-1 text-brand">{founder.role}</p>
      <p className="mt-0.5 text-sm text-brand-ink/60">{founder.education}</p>

      <blockquote className="mt-5 text-center text-sm italic leading-relaxed text-brand-ink/70">
        "{founder.quote}"
      </blockquote>

      <a
        href={founder.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-6 inline-flex items-center gap-2 rounded-full border border-[rgba(63,94,60,0.25)] bg-brand-cream px-5 py-2.5 text-sm font-semibold text-brand transition-all duration-300 hover:border-brand hover:bg-brand hover:text-white hover:shadow-[0_0_16px_rgba(63,94,60,0.35)]"
      >
        <InstagramIcon size={15} />
        Follow on Instagram
      </a>
    </motion.div>
  );
}

/* ── Stats ── */
const stats = [
  { value: 1, suffix: "+", label: "Year of Adventures" },
  { value: 20, suffix: "+", label: "Successful Trips" },
  { value: 500, suffix: "+", label: "Happy Travelers" },
  { value: 1000, suffix: "+", label: "Memories Made" },
];

/* ── Why cards ── */
const whyCards = [
  {
    emoji: "🌍",
    title: "Passion for Travel",
    desc: "We believe every destination has a story worth experiencing.",
  },
  {
    emoji: "🤝",
    title: "Community First",
    desc: "Every traveler should feel like they're traveling with friends.",
  },
  {
    emoji: "✨",
    title: "Experiences Over Tourism",
    desc: "We create memories — not just itineraries.",
  },
];

/* ── Main section ── */
export function AboutSection() {
  return (
    <section id={SECTION_IDS.about} className="scroll-mt-32 space-y-24">

      {/* ── Hero ── */}
      <div className="space-y-6 text-center">
        <motion.p
          className="tagline"
          variants={fadeUp} initial="hidden" whileInView="visible" custom={0}
          viewport={{ once: true }}
        >
          Our Story
        </motion.p>
        <motion.h2
          className="font-display mx-auto max-w-3xl text-3xl sm:text-4xl lg:text-5xl"
          variants={fadeUp} initial="hidden" whileInView="visible" custom={0.08}
          viewport={{ once: true }}
        >
          More Than a Travel Company —{" "}
          <span className="bg-gradient-to-r from-brand to-brand-light bg-clip-text text-transparent">
            A Dream Built by Two Friends
          </span>
        </motion.h2>
        <motion.p
          className="lead mx-auto max-w-2xl"
          variants={fadeUp} initial="hidden" whileInView="visible" custom={0.16}
          viewport={{ once: true }}
        >
          Some journeys begin with a destination. Ours began with a friendship, countless chai
          conversations, and a dream to build unforgettable travel experiences.
        </motion.p>
      </div>

      {/* ── Story + Founders ── */}
      <div className="grid gap-12 lg:grid-cols-[1fr,1.1fr] lg:gap-16 lg:items-start">
        {/* Story */}
        <motion.div
          className="space-y-6"
          variants={fadeUp} initial="hidden" whileInView="visible" custom={0}
          viewport={{ once: true, margin: "-60px" }}
        >
          <div className="space-y-4 rounded-3xl border border-[rgba(63,94,60,0.12)] bg-white/60 p-8 shadow-sm backdrop-blur-sm">
            <p className="tagline text-brand">How It Started</p>
            <p className="text-brand-ink/80 leading-relaxed">
              TripScape Adventures was founded nearly a year ago by two childhood friends —{" "}
              <strong className="text-brand-navy">Chetan Zore</strong>, an Engineer, and{" "}
              <strong className="text-brand-navy">Atharva Parmar</strong>, a Bachelor of Mass Media
              graduate. Fresh out of college, they shared one thing in common: an obsession with
              exploring new places and creating memories that last forever.
            </p>
            <p className="text-brand-ink/80 leading-relaxed">
              Instead of waiting for the "right time," they turned their passion into a company. Since
              then, TripScape Adventures has successfully organized multiple trips, welcomed hundreds of
              happy travelers, and built a growing community of adventure seekers.
            </p>
            <div className="mt-4 rounded-2xl bg-gradient-to-br from-brand/8 to-brand-navy/5 p-5 border border-brand/10">
              <p className="font-display text-lg font-semibold text-brand-navy">
                Their goal has always been simple:
              </p>
              <p className="mt-1 text-brand-ink/75 italic">
                Create trips they would proudly join themselves.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Founders */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {founders.map((founder, i) => (
            <FounderCard key={founder.name} founder={founder} delay={i * 0.12} />
          ))}
        </div>
      </div>

      {/* ── Stats ── */}
      <motion.div
        className="memories-shell on-dark relative overflow-hidden rounded-[2rem] px-6 py-14 sm:px-10"
        variants={fadeUp} initial="hidden" whileInView="visible" custom={0}
        viewport={{ once: true, margin: "-60px" }}
      >
        <div className="ambient-orb ambient-orb--green pointer-events-none absolute -left-16 top-8 h-52 w-52 opacity-20" />
        <div className="ambient-orb ambient-orb--navy pointer-events-none absolute -right-12 bottom-8 h-60 w-60 opacity-25" />
        <p className="tagline mb-3 text-center">Journey in Numbers</p>
        <h2 className="font-display mb-10 text-center text-2xl sm:text-3xl">What We've Built Together</h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="text-center"
              variants={fadeUp} initial="hidden" whileInView="visible" custom={i * 0.1}
              viewport={{ once: true, margin: "-40px" }}
            >
              <p className="font-display text-4xl font-bold text-white sm:text-5xl">
                <AnimatedCounter target={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-sm text-white/65">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ── Ruia Katta ── */}
      <div className="relative overflow-hidden rounded-3xl border border-[rgba(63,94,60,0.12)] bg-gradient-to-br from-brand-cream via-white to-brand-cream p-8 sm:p-12 shadow-sm">
        {/* Floating travel icons */}
        {["✈️","🏔️","🌊","🏕️","🗺️","🌅"].map((icon, i) => (
          <motion.span
            key={i}
            className="pointer-events-none absolute select-none text-2xl opacity-[0.07]"
            style={{
              top: `${[10, 70, 20, 80, 40, 60][i]}%`,
              left: `${[5, 15, 85, 80, 92, 3][i]}%`,
            }}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
          >
            {icon}
          </motion.span>
        ))}

        <div className="relative max-w-2xl">
          <motion.p
            className="tagline text-brand"
            variants={fadeUp} initial="hidden" whileInView="visible" custom={0}
            viewport={{ once: true }}
          >
            The Origin
          </motion.p>
          <motion.h3
            className="font-display mt-3 text-2xl sm:text-3xl"
            variants={fadeUp} initial="hidden" whileInView="visible" custom={0.08}
            viewport={{ once: true }}
          >
            Where Every Great Journey Began
          </motion.h3>
          <div className="brush-divider" />
          <motion.div
            className="mt-4 space-y-4 text-brand-ink/75 leading-relaxed"
            variants={fadeUp} initial="hidden" whileInView="visible" custom={0.16}
            viewport={{ once: true }}
          >
            <p>
              Before TripScape Adventures became a company, it was just two friends and a place they
              called <strong className="text-brand-navy">Ruia Katta</strong>. That spot became their
              second home — filled with endless conversations, crazy travel plans, late-night ideas, and
              lifelong friendships.
            </p>
            <p>
              The Katta Friends weren't just spectators. They became the biggest supporters of the
              journey — helping during events, volunteering on trips, spreading the word, and
              celebrating every milestone.
            </p>
            <p className="font-semibold text-brand-navy">
              TripScape Adventures isn't just built by two founders. It's built on a community.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── Why We Started ── */}
      <div>
        <motion.div
          className="mb-10 text-center"
          variants={fadeUp} initial="hidden" whileInView="visible" custom={0}
          viewport={{ once: true }}
        >
          <p className="tagline">Our Purpose</p>
          <h3 className="font-display mt-2 text-2xl sm:text-3xl">Why We Started</h3>
          <div className="brush-divider mx-auto" />
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-3">
          {whyCards.map((card, i) => (
            <motion.div
              key={card.title}
              className="rounded-3xl border border-[rgba(63,94,60,0.12)] bg-white/70 p-7 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md"
              variants={fadeUp} initial="hidden" whileInView="visible" custom={i * 0.1}
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -4, transition: { duration: 0.25, ease } }}
            >
              <span className="text-3xl">{card.emoji}</span>
              <h4 className="font-display mt-4 text-lg font-semibold">{card.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-brand-ink/65">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
