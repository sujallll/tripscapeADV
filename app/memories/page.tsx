import { GalleryMasonry } from "@/components/shared/GalleryMasonry";
import { Container } from "@/components/ui/Container";
import { galleryImages } from "@/data/gallery";

export default function MemoriesPage() {
  return <Container className="py-16"><h1 className="text-4xl font-semibold">Moments from the Road</h1><p className="mt-3 text-white/70">Completed trip highlights with a social traveler vibe.</p><div className="mt-8"><GalleryMasonry images={galleryImages} /></div></Container>;
}
