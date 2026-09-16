"use client";

import { motion } from "framer-motion";
import { revealContainer, revealUp } from "@/lib/animations";
import { SITE } from "@/lib/constants";

const STATS = [
  { value: "3", label: "tipuri de cont imutabile la onboarding" },
  { value: "5", label: "tab-uri în app: Acasă → Notificări" },
  { value: "0", label: "date medicale / EHR pe platformă" },
  { value: "6–12", label: "luni gratuite estimate la lansare" },
];

export default function StatsBar() {
  return (
    <section className="pb-4 md:pb-8">
      <div className="container-page">
        <motion.div
          variants={revealContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="glass-panel grid grid-cols-2 gap-px overflow-hidden p-px md:grid-cols-4"
        >
          {STATS.map((s) => (
            <motion.div
              key={s.label}
              variants={revealUp}
              className="bg-bg/40 px-6 py-8 backdrop-blur-sm md:px-8"
            >
              <div className="font-display bg-gradient-to-br from-primary-light to-accent bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-[2.75rem]">
                {s.value}
              </div>
              <div className="mt-2 text-[14px] leading-snug text-ink-soft">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
        <p className="mt-3 text-center text-[12px] text-ink-muted">{SITE.languages}</p>
      </div>
    </section>
  );
}
