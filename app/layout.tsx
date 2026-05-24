import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTopButton } from "@/components/ui/ScrollToTopButton";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tripscape Adventures | Travel Beyond Ordinary",
  description:
    "Curated premium group trips with cinematic experiences and unforgettable community moments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${sora.variable}`}>
      <body className="bg-[#060914] text-white">
        <Navbar />
        <main className="relative min-h-screen overflow-x-clip">{children}</main>
        <Footer />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
