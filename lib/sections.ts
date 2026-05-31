export const SECTION_IDS = {
  home: "home",
  trips: "trips",
  memories: "memories",
  about: "about",
  contact: "contact",
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];

export const NAV_LINKS: { id: SectionId; label: string }[] = [
  { id: SECTION_IDS.home, label: "Home" },
  { id: SECTION_IDS.trips, label: "Trips" },
  { id: SECTION_IDS.memories, label: "Memories" },
  { id: SECTION_IDS.about, label: "About" },
  { id: SECTION_IDS.contact, label: "Contact" },
];

export const INSTAGRAM_URL = "https://www.instagram.com/tripscape_adventures/?hl=en";

export const NAV_SECTION_IDS = NAV_LINKS.map((link) => link.id);

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
  }
}
