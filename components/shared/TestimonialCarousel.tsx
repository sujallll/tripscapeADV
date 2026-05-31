type Testimonial = (typeof import("@/data/testimonials").testimonials)[number];

export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article key={item.name} className="surface-card rounded-2xl p-5">
          <p className="text-sm text-muted">&ldquo;{item.quote}&rdquo;</p>
          <p className="font-display mt-4 font-bold">{item.name}</p>
          <p className="tagline mt-1 text-accent">{item.city}</p>
        </article>
      ))}
    </div>
  );
}
