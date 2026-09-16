"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "dentveerse-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function accept(choice: "all" | "essential") {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      /* ignore */
    }
    setVisible(false);
    // Analytics/marketing scripts would load here only when choice === "all"
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-title"
      className="fixed bottom-4 left-4 right-4 z-[100] mx-auto max-w-xl md:left-auto md:right-6"
    >
      <div className="glass-panel border-white/15 p-5 shadow-glass-lg">
        <p id="cookie-title" className="text-[15px] font-semibold text-ink">
          Cookie-uri pe dentveerse.com
        </p>
        <p className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">
          Folosim cookie-uri esențiale pentru funcționarea site-ului. Cookie-urile de analiză se activează
          doar cu acordul tău. Detalii în{" "}
          <Link href="/cookies" className="text-primary-light underline underline-offset-2">
            politica de cookie-uri
          </Link>
          .
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <button type="button" onClick={() => accept("essential")} className="focus-ring rounded-full border border-white/15 px-4 py-2 text-[13px] font-semibold text-ink-soft">
            Doar esențiale
          </button>
          <button type="button" onClick={() => accept("all")} className="btn-primary focus-ring text-[13px]">
            Accept toate
          </button>
        </div>
      </div>
    </div>
  );
}
