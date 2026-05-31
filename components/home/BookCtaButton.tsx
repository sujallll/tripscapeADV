"use client";

import { SECTION_IDS, scrollToSection } from "@/lib/sections";

export function BookCtaButton() {
  return (
    <button
      type="button"
      onClick={() => scrollToSection(SECTION_IDS.contact)}
      className="btn-primary mt-6 rounded-full px-8 py-3 font-semibold"
    >
      Plan Your Trip
    </button>
  );
}
