"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AUDIENCES } from "@/lib/constants";
import SectionHeader from "./SectionHeader";

export default function AudienceTabs() {
  const [active, setActive] = useState(AUDIENCES[0].id);
  const current = AUDIENCES.find((a) => a.id === active)!;

  return (
    <section id="audiente" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          kicker="Audiențe"
          title="O platformă, trei perspective."
          description="Fiecare tip de cont vede DentVeerse diferit — construit în jurul a ceea ce chiar ai nevoie să faci în stomatologie."
        />

        <div
          role="tablist"
          aria-label="Audiențe DentVeerse"
          className="glass-panel mb-10 inline-flex flex-wrap gap-2 p-1.5"
        >
          {AUDIENCES.map((a) => (
            <button
              key={a.id}
              role="tab"
              aria-selected={active === a.id}
              onClick={() => setActive(a.id)}
              className={`focus-ring relative rounded-xl px-5 py-2.5 text-[14px] font-semibold transition-all duration-300 md:px-7 ${
                active === a.id
                  ? "chip-active border-transparent"
                  : "border border-transparent bg-white/10 text-ink hover:bg-white/[0.14]"
              }`}
            >
              {a.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card overflow-hidden p-8 md:p-10 lg:grid lg:grid-cols-[0.95fr_1.05fr] lg:gap-12"
          >
            <div className="relative">
              <p className="text-kicker text-accent">{current.kicker}</p>
              <h3 className="font-display mt-3 text-[2rem] font-semibold leading-[1.15] tracking-tight text-ink md:text-[2.25rem]">
                {current.headline}
              </h3>
              <p className="mt-5 max-w-prose text-[16px] leading-relaxed text-ink-soft md:text-[17px]">
                {current.body}
              </p>
            </div>
            <div className="mt-10 lg:mt-0">
              {"pointsLead" in current && current.pointsLead && (
                <p className="mb-4 text-[15px] font-medium leading-snug text-ink md:text-[16px]">
                  {current.pointsLead}
                </p>
              )}
            <ul className="grid content-start gap-3 sm:grid-cols-2">
              {current.points.map((p, i) => (
                <motion.li
                  key={p}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex gap-3 rounded-xl border border-white/15 bg-black/25 p-4 text-[14.5px] leading-snug text-ink-soft"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-primary/25 text-[11px] font-bold text-primary-light">
                    {i + 1}
                  </span>
                  {p}
                </motion.li>
              ))}
            </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
