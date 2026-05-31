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
  weight: ["400", "500", "600", "700"],
});

const sora = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://tripscapeadventures.in"),
  title: {
    default: "Tripscape Adventures | Ghumayenge, Sara Jahan",
    template: "%s | Tripscape Adventures",
  },
  description:
    "Curated group tours across India. Premium adventures, real memories — Tripscape Adventures.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Tripscape Adventures",
    title: "Tripscape Adventures | Ghumayenge, Sara Jahan",
    description:
      "Curated group tours across India. Premium adventures, real memories — Tripscape Adventures.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tripscape Adventures",
    description: "Curated group tours across India — premium adventures, real memories.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
