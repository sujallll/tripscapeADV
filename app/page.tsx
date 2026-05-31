import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { ContactSection } from "@/components/home/ContactSection";
import { MemoriesSection } from "@/components/home/MemoriesSection";
import { TripsSection } from "@/components/home/trips/TripsSection";
import { Container } from "@/components/ui/Container";

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
