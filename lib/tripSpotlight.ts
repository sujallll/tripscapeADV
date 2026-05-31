export const TRIP_SPOTLIGHT: Record<
  string,
  { glow: string; ambient: string; particle: string }
> = {
  goa: {
    glow: "rgba(255, 170, 90, 0.22)",
    ambient: "rgba(255, 140, 60, 0.12)",
    particle: "rgba(255, 200, 120, 0.45)",
  },
  malvan: {
    glow: "rgba(56, 189, 180, 0.2)",
    ambient: "rgba(34, 211, 238, 0.1)",
    particle: "rgba(120, 220, 210, 0.4)",
  },
  "spiti-valley": {
    glow: "rgba(100, 160, 255, 0.22)",
    ambient: "rgba(59, 130, 246, 0.11)",
    particle: "rgba(147, 197, 253, 0.42)",
  },
  manali: {
    glow: "rgba(200, 220, 255, 0.24)",
    ambient: "rgba(148, 163, 184, 0.14)",
    particle: "rgba(226, 232, 240, 0.35)",
  },
  uttarakhand: {
    glow: "rgba(251, 191, 120, 0.2)",
    ambient: "rgba(245, 158, 11, 0.1)",
    particle: "rgba(253, 186, 116, 0.4)",
  },
};

export const DEFAULT_SPOTLIGHT = {
  glow: "rgba(90, 125, 86, 0.18)",
  ambient: "rgba(63, 94, 60, 0.1)",
  particle: "rgba(120, 160, 110, 0.35)",
};

export function getTripSpotlight(slug: string) {
  return TRIP_SPOTLIGHT[slug] ?? DEFAULT_SPOTLIGHT;
}
