import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTopButton } from "@/components/ui/ScrollToTopButton";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tripscape Adventures | Ghumayenge, Sara Jahan",
  description:
    "Curated group tours across India. Premium adventures, real memories — Tripscape Adventures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${sora.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main className="relative min-h-screen overflow-x-clip pt-[5.5rem] sm:pt-24">{children}</main>
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
