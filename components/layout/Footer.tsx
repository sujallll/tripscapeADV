import Link from "next/link";
import { Globe, Mail, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-[#070b18]">
      <Container className="grid gap-10 py-12 md:grid-cols-3">
        <div>
          <h3 className="text-2xl font-semibold">Tripscape Adventures</h3>
          <p className="mt-3 text-sm text-white/70">Curated Trips. Real Memories. Built for travelers who want every journey to feel legendary.</p>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-cyan-300">Quick Links</h4>
          <div className="mt-4 grid gap-2 text-sm text-white/75">
            <Link href="/destinations">Destinations</Link>
            <Link href="/upcoming-trips">Upcoming Trips</Link>
            <Link href="/testimonials">Testimonials</Link>
            <Link href="/about">About</Link>
          </div>
        </div>
        <div className="space-y-2 text-sm text-white/75">
          <p className="flex items-center gap-2"><Phone size={14} /> +91 98765 43210</p>
          <p className="flex items-center gap-2"><Mail size={14} /> hello@tripscapeadventures.com</p>
          <p className="flex items-center gap-2"><MessageCircle size={14} /> WhatsApp Support</p>
          <p className="flex items-center gap-2"><Globe size={14} /> @tripscape.adventures</p>
        </div>
      </Container>
    </footer>
  );
}
