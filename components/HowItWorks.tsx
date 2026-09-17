"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AUDIENCES, HOW_IT_WORKS } from "@/lib/constants";
import SectionHeader from "./SectionHeader";

export default function HowItWorks() {
  const [active, setActive] = useState(AUDIENCES[0].id);
  const steps = HOW_IT_WORKS[active];

  return (
    <section id="cum-functioneaza" className="py-20 md:py-28">
      <div className="container-page">
        <div className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            className="mb-0 max-w-[58ch]"
            kicker="Proces"
            title="Cum funcționează DentVeerse"
            description={
              <>
                <p>Un punct de plecare. Experiențe diferite.</p>
                <p className="mt-4">
                  Fie că ești pacient, clinică sau laborator, DentVeerse îți oferă instrumentele
                  potrivite pentru a descoperi, comunica și construi conexiuni în lumea
                  stomatologiei.
                </p>
              </>
            }
          />
          <div className="flex flex-wrap gap-2 lg:shrink-0">
            {AUDIENCES.map((a) => (
              <button
                key={a.id}
                onClick={() => setActive(a.id)}
                className={`chip ${active === a.id ? "chip-active" : "chip-inactive"}`}
              >
                {a.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.ol
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {steps.map((s, i) => (
              <li key={s.step} className="glass-card-hover relative p-6 md:p-7">
                {i < steps.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute -right-2 top-1/2 hidden h-px w-4 bg-gradient-to-r from-primary/40 to-transparent lg:block"
                  />
                )}
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary-light/30 bg-primary/25 font-display text-lg font-bold text-primary-light">
                  {s.step}
                </span>
                <h3 className="mt-4 text-[16px] font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{s.body}</p>
              </li>
            ))}
          </motion.ol>
        </AnimatePresence>
      </div>
    </section>
  );
}
