"use client";

import { useState } from "react";
type FAQ = (typeof import("@/data/faqs").faqs)[number];

export function FAQAccordion({ items }: { items: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={item.question} className="surface-card rounded-2xl">
          <button
            type="button"
            className="flex w-full items-center justify-between px-5 py-4 text-left font-medium"
            onClick={() => setOpen(open === index ? null : index)}
          >
            <span>{item.question}</span>
            <span className="font-display text-xl text-accent">{open === index ? "−" : "+"}</span>
          </button>
          {open === index ? <p className="px-5 pb-5 text-sm text-muted">{item.answer}</p> : null}
        </div>
      ))}
    </div>
  );
}
