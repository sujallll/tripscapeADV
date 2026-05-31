"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import type { SectionId } from "@/lib/sections";
import { scrollToSection } from "@/lib/sections";

export function SectionRedirect({ sectionId }: { sectionId: SectionId }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") {
      router.replace(`/#${sectionId}`);
      return;
    }
    scrollToSection(sectionId);
  }, [pathname, router, sectionId]);

  return null;
}
