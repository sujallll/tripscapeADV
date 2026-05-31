"use client";

import Image from "next/image";
import { Globe, Mail, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { INSTAGRAM_URL, NAV_LINKS, scrollToSection } from "@/lib/sections";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[rgba(63,94,60,0.15)] bg-brand-dark text-white">
      <Container className="grid gap-10 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Tripscape" width={48} height={48} className="h-12 w-12 rounded-full object-cover" />
            <div>
              <h3 className="font-display text-xl font-bold">Tripscape Adv</h3>
              <p className="tagline mt-0.5 text-white/60">Ghumayenge, Sara Jahan</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/70">
            Curated trips. Real memories. Built for travelers who want every journey to feel legendary.
          </p>
        </div>
        <div>
          <h4 className="tagline text-white/80">Quick Links</h4>
          <div className="mt-4 grid gap-2 text-sm text-white/75">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToSection(link.id)}
                className="text-left transition hover:text-white"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-2 text-sm text-white/75">
          <p className="flex items-center gap-2">
            <Phone size={14} /> +91 98765 43210
          </p>
          <p className="flex items-center gap-2">
            <Mail size={14} /> hello@tripscapeadventures.com
          </p>
          <p className="flex items-center gap-2">
            <MessageCircle size={14} /> WhatsApp Support
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition hover:text-white"
          >
            <InstagramIcon size={14} /> @tripscape_adventures
          </a>
          <p className="flex items-center gap-2">
            <Globe size={14} /> Group Tours India
          </p>
        </div>
      </Container>
    </footer>
  );
}
