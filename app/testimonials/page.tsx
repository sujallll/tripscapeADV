import { TestimonialCarousel } from "@/components/shared/TestimonialCarousel";
import { Container } from "@/components/ui/Container";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsPage() {
  return <Container className="py-16"><h1 className="text-4xl font-semibold">Traveler Testimonials</h1><p className="mt-3 text-white/70">Repeat travelers, smooth planning, and fun trip leads.</p><div className="mt-8"><TestimonialCarousel items={testimonials} /></div></Container>;
}
