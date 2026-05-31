import { SectionHeading } from "@/components/ui/SectionHeading";
import { SECTION_IDS } from "@/lib/sections";

export function ContactSection() {
  return (
    <section id={SECTION_IDS.contact} className="scroll-mt-32 space-y-6">
      <SectionHeading
        title="Contact Tripscape Adventures"
        subtitle="Tell us about your dream trip and we will craft the perfect itinerary."
      />
      <div className="grid gap-6 lg:grid-cols-[1.4fr,1fr]">
        <form className="glass space-y-4 rounded-2xl p-6">
          <label className="block text-sm font-medium">
            Full Name
            <input className="mt-1 w-full rounded-xl border border-[rgba(63,94,60,0.2)] bg-brand-cream px-4 py-3 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
          </label>
          <label className="block text-sm font-medium">
            Email
            <input type="email" className="mt-1 w-full rounded-xl border border-[rgba(63,94,60,0.2)] bg-brand-cream px-4 py-3 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
          </label>
          <label className="block text-sm font-medium">
            Phone
            <input className="mt-1 w-full rounded-xl border border-[rgba(63,94,60,0.2)] bg-brand-cream px-4 py-3 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
          </label>
          <label className="block text-sm font-medium">
            Custom Package Inquiry
            <textarea rows={5} className="mt-1 w-full rounded-xl border border-[rgba(63,94,60,0.2)] bg-brand-cream px-4 py-3 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
          </label>
          <button type="submit" className="btn-primary rounded-full px-6 py-3 font-semibold">
            Send Inquiry
          </button>
        </form>
        <div className="space-y-4">
          <div className="surface-card rounded-2xl p-5">
            <h3 className="font-display text-xl font-bold">WhatsApp</h3>
            <p className="mt-2 text-muted">Get instant replies and itinerary suggestions.</p>
          </div>
          <div className="surface-card rounded-2xl p-5">
            <h3 className="font-display text-xl font-bold">Phone & Email</h3>
            <p className="mt-2 text-muted">+91 98765 43210 | hello@tripscapeadventures.com</p>
          </div>
          <div className="surface-card rounded-2xl p-5">
            <h3 className="font-display text-xl font-bold">Meet us</h3>
            <p className="mt-2 text-muted">Group tours across India — adventures that feel legendary.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
