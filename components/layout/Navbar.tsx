"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Destinations" },
  { href: "/upcoming-trips", label: "Upcoming Trips" },
  { href: "/memories", label: "Memories" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070b18]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold tracking-wide">Tripscape Adventures</Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {links.map((link) => <Link key={link.href} href={link.href} className={pathname === link.href ? "text-cyan-300" : "text-white/75 hover:text-white"}>{link.label}</Link>)}
        </nav>
        <Link href="/contact" className="rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-2 text-sm font-semibold text-[#020617]">Book Now</Link>
      </div>
    </header>
  );
}
