import { SectionHeading } from "@/components/ui/SectionHeading";
import { SECTION_IDS } from "@/lib/sections";

export function AboutSection() {
  return (
    <section id={SECTION_IDS.about} className="scroll-mt-32 space-y-6">
      <SectionHeading
        title="About Tripscape Adventures"
        subtitle="Tripscape was built to make group travel feel curated, social, premium, and unforgettable — Ghumayenge, Sara Jahan."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <article className="surface-card rounded-2xl p-6">
          <h3 className="font-display text-2xl font-bold">Mission</h3>
          <div className="brush-divider" />
          <p className="mt-3 text-muted">
            Design curated adventures that turn strangers into travel crews and memories into
            lifelong stories.
          </p>
        </article>
        <article className="surface-card rounded-2xl p-6">
          <h3 className="font-display text-2xl font-bold">Why Different</h3>
          <div className="brush-divider" />
          <p className="mt-3 text-muted">
            Strong trip leads, smart logistics, premium visuals, and energetic community vibes from
            day one.
          </p>
        </article>
      </div>
    </section>
  );
}
