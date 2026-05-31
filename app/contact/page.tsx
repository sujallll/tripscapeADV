import { SectionRedirect } from "@/components/layout/SectionRedirect";
import { SECTION_IDS } from "@/lib/sections";

export default function ContactPage() {
  return <SectionRedirect sectionId={SECTION_IDS.contact} />;
}
