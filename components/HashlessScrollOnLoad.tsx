"use client";

import { useEffect } from "react";
import { scrollToSection } from "@/lib/hashless-scroll";

export default function HashlessScrollOnLoad() {
  useEffect(() => {
    const id = window.location.hash.replace(/^#/, "");
    if (!id) return;

    const timer = window.setTimeout(() => {
      scrollToSection(id, "auto");
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  return null;
}
