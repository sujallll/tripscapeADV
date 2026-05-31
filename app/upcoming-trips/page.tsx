import { SectionRedirect } from "@/components/layout/SectionRedirect";
import { SECTION_IDS } from "@/lib/sections";

export default function UpcomingTripsPage() {
  return <SectionRedirect sectionId={SECTION_IDS.trips} />;
}
