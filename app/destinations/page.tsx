"use client";

import { useMemo, useState } from "react";
import { DestinationCard } from "@/components/shared/DestinationCard";
import { Container } from "@/components/ui/Container";
import { destinations } from "@/data/destinations";

export default function DestinationsPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const filtered = useMemo(() => destinations.filter((d) => d.name.toLowerCase().includes(query.toLowerCase()) && (filter === "all" || d.category === filter || d.tier === filter)), [query, filter]);

  return (
    <Container className="py-16">
      <h1 className="text-4xl font-semibold">Destinations</h1>
      <div className="glass mt-6 rounded-2xl p-4">
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search destination..." className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3" />
        <div className="mt-3 flex flex-wrap gap-2">{["all","beach","mountains","international","budget","premium"].map((f) => <button key={f} onClick={() => setFilter(f)} className={filter === f ? "rounded-full bg-cyan-300 px-4 py-2 text-sm text-[#02101f]" : "rounded-full border border-white/20 px-4 py-2 text-sm text-white/75"}>{f}</button>)}</div>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{filtered.map((item) => <DestinationCard key={item.slug} destination={item} />)}</div>
    </Container>
  );
}
