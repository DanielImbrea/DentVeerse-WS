"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HashlessScrollLink from "@/components/HashlessScrollLink";
import { SITE } from "@/lib/constants";

const LINKS = [
  { href: "#audiente", label: "Pentru cine" },
  { href: "#aplicatie", label: "App" },
  { href: "#functii", label: "Funcții" },
  { href: "#cum-functioneaza", label: "Pași" },
  { href: "#intrebari", label: "FAQ" },
];

function LogoMark() {
  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-btn">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3c-2 0-3.5 1.2-4 3-.3 1.2-.2 2.5.3 3.6-.8.5-1.3 1.4-1.3 2.4 0 1.7 1.3 3 3 3 .8 0 1.5-.3 2-.8.5.5 1.2.8 2 .8 1.7 0 3-1.3 3-3 0-1-.5-1.9-1.3-2.4.5-1.1.6-2.4.3-3.6-.5-1.8-2-3-4-3z"
          fill="currentColor"
          opacity="0.95"
        />
      </svg>
    </span>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-6">
      <motion.div
        initial={{ y: -8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`mx-auto max-w-[1200px] transition-all duration-500 ${
          scrolled ? "glass-panel rounded-2xl px-2 py-1" : "rounded-2xl bg-white/[0.02] px-0 py-0 backdrop-blur-sm"
        }`}
      >
        <nav className="flex h-14 items-center justify-between px-3 md:h-[3.75rem] md:px-4">
          <HashlessScrollLink
            sectionId="top"
            className="focus-ring group flex items-center gap-3 rounded-xl"
          >
            <LogoMark />
            <span className="font-display text-[1.15rem] font-semibold tracking-tight text-ink">
              {SITE.name}
            </span>
          </HashlessScrollLink>

          <ul className="hidden items-center gap-1 md:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <HashlessScrollLink
                  sectionId={l.href.replace(/^#/, "")}
                  className="focus-ring rounded-full px-4 py-2 text-[14px] font-medium text-ink-soft transition-colors hover:bg-white/10 hover:text-ink"
                >
                  {l.label}
                </HashlessScrollLink>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            <HashlessScrollLink sectionId="waitlist" className="btn-primary focus-ring">
              Fii primul anunțat
            </HashlessScrollLink>
          </div>

          <button
            aria-label={open ? "Închide meniul" : "Deschide meniul"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="focus-ring flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 md:hidden"
          >
            <div className="flex flex-col gap-[5px]">
              <span
                className={`block h-0.5 w-5 rounded-full bg-ink transition-transform ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-ink transition-opacity ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-ink transition-transform ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </nav>

        {open && (
          <div className="border-t border-border/80 px-3 pb-4 pt-2 md:hidden">
            <ul className="flex flex-col gap-1">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <HashlessScrollLink
                    sectionId={l.href.replace(/^#/, "")}
                    onNavigate={() => setOpen(false)}
                    className="focus-ring block rounded-xl px-3 py-2.5 text-[15px] font-medium text-ink"
                  >
                    {l.label}
                  </HashlessScrollLink>
                </li>
              ))}
              <li className="pt-2">
                <HashlessScrollLink
                  sectionId="waitlist"
                  onNavigate={() => setOpen(false)}
                  className="btn-primary focus-ring w-full"
                >
                  Fii primul anunțat
                </HashlessScrollLink>
              </li>
            </ul>
          </div>
        )}
      </motion.div>
    </header>
  );
}
