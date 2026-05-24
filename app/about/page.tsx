import { Container } from "@/components/ui/Container";

export default function AboutPage() {
  return (
    <Container className="space-y-8 py-16">
      <h1 className="text-4xl font-semibold">About Tripscape Adventures</h1>
      <p className="max-w-3xl text-white/75">Tripscape Adventures was started to make group travel feel curated, social, premium, and unforgettable. We combine planning expertise with community-first experiences.</p>
      <section className="grid gap-6 lg:grid-cols-2"><article className="rounded-2xl border border-white/10 bg-white/5 p-6"><h2 className="text-2xl font-semibold">Mission</h2><p className="mt-3 text-white/75">Design curated adventures that turn strangers into travel crews and memories into lifelong stories.</p></article><article className="rounded-2xl border border-white/10 bg-white/5 p-6"><h2 className="text-2xl font-semibold">Why Different</h2><p className="mt-3 text-white/75">Strong trip leads, smart logistics, premium visuals, and energetic community vibes from day one.</p></article></section>
    </Container>
  );
}
