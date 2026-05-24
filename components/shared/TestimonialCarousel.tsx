"use client";

export function TestimonialCarousel({ items }: { items: Array<{ name: string; city: string; rating: number; quote: string }> }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <article key={item.name} className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="mb-2 text-amber-300">{"*".repeat(item.rating)}{".".repeat(5 - item.rating)}</div>
          <p>&ldquo;{item.quote}&rdquo;</p>
          <p className="mt-3 text-sm text-cyan-200">{item.name} - {item.city}</p>
        </article>
      ))}
    </div>
  );
}
