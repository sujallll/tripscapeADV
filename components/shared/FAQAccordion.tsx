"use client";

import { useState } from "react";

type FAQ = { question: string; answer: string };

export function FAQAccordion({ items }: { items: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return <div className="space-y-3">{items.map((item, index) => <div key={item.question} className="rounded-2xl border border-white/10 bg-white/5"><button type="button" className="flex w-full items-center justify-between px-5 py-4 text-left" onClick={() => setOpen(open === index ? null : index)}><span>{item.question}</span><span>{open === index ? "-" : "+"}</span></button>{open === index ? <p className="px-5 pb-5 text-sm text-white/70">{item.answer}</p> : null}</div>)}</div>;
}
