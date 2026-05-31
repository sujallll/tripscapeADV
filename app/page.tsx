import dynamic from "next/dynamic";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ContactSection } from "@/components/home/ContactSection";
import { TripsSection } from "@/components/home/trips/TripsSection";
import { Container } from "@/components/ui/Container";

const MemoriesSection = dynamic(
  () => import("@/components/home/MemoriesSection").then((mod) => mod.MemoriesSection),
  {
    loading: () => (
      <section aria-hidden className="scroll-mt-32">
        <div className="h-[720px] animate-pulse rounded-[2rem] bg-brand-navy/10" />
      </section>
    ),
  },
);

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Container className="space-y-20 py-14">
        <TripsSection />
        <MemoriesSection />
        <AboutSection />
        <ContactSection />
      </Container>
    </>
  );
}
