import { Container } from "@/components/ui/Container";

export default function ContactPage() {
  return (
    <Container className="space-y-8 py-16">
      <h1 className="text-4xl font-semibold">Contact Tripscape Adventures</h1>
      <section className="grid gap-6 lg:grid-cols-[1.4fr,1fr]">
        <form className="glass space-y-4 rounded-2xl p-6">
          <label className="block text-sm">Full Name<input className="mt-1 w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3" /></label>
          <label className="block text-sm">Email<input type="email" className="mt-1 w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3" /></label>
          <label className="block text-sm">Phone<input className="mt-1 w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3" /></label>
          <label className="block text-sm">Custom Package Inquiry<textarea rows={5} className="mt-1 w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3" /></label>
          <button type="submit" className="rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 font-semibold text-[#020617]">Send Inquiry</button>
        </form>
        <div className="space-y-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5"><h3 className="text-xl font-semibold">WhatsApp CTA</h3><p className="mt-2 text-white/70">Get instant replies and itinerary suggestions.</p></div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5"><h3 className="text-xl font-semibold">Phone and Email</h3><p className="mt-2 text-white/70">+91 98765 43210 | hello@tripscapeadventures.com</p></div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5"><h3 className="text-xl font-semibold">Map Placeholder</h3><p className="mt-2 text-white/70">Embed office location or meetup spot here.</p></div>
        </div>
      </section>
    </Container>
  );
}
