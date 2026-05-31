"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { useActiveSection } from "@/hooks/useActiveSection";
import {
  INSTAGRAM_URL,
  NAV_LINKS,
  NAV_SECTION_IDS,
  SECTION_IDS,
  scrollToSection,
} from "@/lib/sections";

function NavItem({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative z-10 px-3 py-1.5 text-sm font-medium transition-colors ${
        isActive ? "text-white" : "text-white/70 hover:text-white"
      }`}
    >
      {isActive && (
        <motion.span
          layoutId="nav-active-pill"
          className="absolute inset-0 rounded-full border border-white bg-transparent"
          transition={{ type: "spring", stiffness: 380, damping: 32 }}
        />
      )}
      <span className="relative">{label}</span>
    </button>
  );
}

export function Navbar() {
  const activeId = useActiveSection(NAV_SECTION_IDS);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMobileOpen(false);
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-4 sm:px-5 sm:pt-5">
      <motion.div
        animate={{ y: scrolled ? 0 : 2, scale: scrolled ? 0.985 : 1 }}
        transition={{ type: "spring", stiffness: 420, damping: 36 }}
        className="pointer-events-auto w-full max-w-6xl"
      >
        <div
          className={`nav-pill relative flex items-center justify-between gap-2 rounded-full border px-3 py-2 sm:gap-3 sm:px-4 sm:py-2.5 ${
            scrolled ? "nav-pill--scrolled" : ""
          }`}
        >
          <button
            type="button"
            onClick={() => handleNavClick(SECTION_IDS.home)}
            className="relative z-10 flex shrink-0 items-center gap-2.5 rounded-full pr-1 transition hover:opacity-90"
          >
            <Image
              src="/logo.png"
              alt="Tripscape Adventures"
              width={40}
              height={40}
              priority
              className="h-9 w-9 rounded-full object-cover ring-2 ring-white/20"
            />
            <span className="font-display hidden text-[0.95rem] font-semibold text-white sm:inline">
              Tripscape
              <span className="hidden font-normal text-white/50 xl:inline"> Adv</span>
            </span>
          </button>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-0.5 md:flex">
            {NAV_LINKS.map((link) => (
              <NavItem
                key={link.id}
                label={link.label}
                isActive={activeId === link.id}
                onClick={() => handleNavClick(link.id)}
              />
            ))}
          </nav>

          <div className="relative z-10 flex shrink-0 items-center gap-1.5 sm:gap-2">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full p-2 text-white/60 transition hover:bg-white/10 hover:text-white sm:inline-flex"
              aria-label="Tripscape Adventures on Instagram"
            >
              <InstagramIcon size={18} />
            </a>

            <button
              type="button"
              onClick={() => handleNavClick(SECTION_IDS.contact)}
              className="nav-cta hidden rounded-full px-4 py-2 text-sm font-semibold sm:inline-block"
            >
              Let&apos;s Talk
            </button>

            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              className="rounded-full border border-white/15 p-2 text-white/85 transition hover:bg-white/10 md:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.22 }}
              className="nav-pill mt-2 rounded-3xl border px-3 py-3 md:hidden"
            >
              <div className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => handleNavClick(link.id)}
                    className={
                      activeId === link.id
                        ? "rounded-2xl border border-white/30 bg-white/10 px-4 py-2.5 text-left text-sm font-medium text-white"
                        : "rounded-2xl px-4 py-2.5 text-left text-sm text-white/75 transition hover:bg-white/5"
                    }
                  >
                    {link.label}
                  </button>
                ))}
              </div>
              <div className="mt-3 flex items-center gap-2 border-t border-white/10 pt-3">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 py-2.5 text-sm text-white/75"
                >
                  <InstagramIcon size={16} />
                  Instagram
                </a>
                <button
                  type="button"
                  onClick={() => handleNavClick(SECTION_IDS.contact)}
                  className="nav-cta flex-1 rounded-full py-2.5 text-sm font-semibold"
                >
                  Let&apos;s Talk
                </button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
