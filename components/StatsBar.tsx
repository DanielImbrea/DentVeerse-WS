"use client";

import { motion } from "framer-motion";
import { revealContainer, revealUp } from "@/lib/animations";
import { SITE } from "@/lib/constants";

const STATS = [
  {
    value: "3",
    title: "tipuri de cont",
    subtitle: "Pacient · Clinică · Laborator",
  },
  {
    value: "1",
    title: "ecosistem dentar",
    subtitle: "Conectat într-un singur spațiu digital",
  },
  {
    value: null,
    title: "posibilități de conectare",
    subtitle: "Descoperă, urmărește, comunică și colaborează",
  },
  {
    value: "0",
    title: "dosare medicale",
    subtitle: "Platformă construită pentru networking, nu pentru EHR",
  },
] as const;

function ConnectIcon() {
  return (
    <svg
      className="h-9 w-9 text-primary-light md:h-10 md:w-10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path strokeLinecap="round" d="M8.2 11.2 15.5 7.2M8.2 12.8l7.3 4" />
    </svg>
  );
}

export default function StatsBar() {
  return (
    <section className="pb-4 md:pb-8">
      <div className="container-page">
        <motion.div
          variants={revealContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="glass-panel overflow-hidden rounded-2xl border border-white/12"
        >
          <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 md:grid-cols-4 md:divide-x md:divide-y-0">
            {STATS.map((s) => (
              <motion.div
                key={s.title}
                variants={revealUp}
                className="group px-6 py-8 transition-colors hover:bg-white/[0.03] md:px-7 md:py-9"
              >
                <div className="flex h-[2.75rem] items-end md:h-[3rem]">
                  {s.value !== null ? (
                    <div className="font-display bg-gradient-to-br from-primary-light to-accent-light bg-clip-text text-4xl font-bold leading-none tracking-tight text-transparent md:text-[2.65rem]">
                      {s.value}
                    </div>
                  ) : (
                    <ConnectIcon />
                  )}
                </div>
                <p className="mt-3 text-[15px] font-semibold leading-snug text-ink">{s.title}</p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-ink-soft">{s.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <div className="mt-5 space-y-1 text-center">
          <p className="text-[13px] font-medium text-ink-soft">{SITE.statsFooterLine1}</p>
          <p className="text-[12px] text-ink-muted">{SITE.statsFooterLine2}</p>
        </div>
      </div>
    </section>
  );
}
