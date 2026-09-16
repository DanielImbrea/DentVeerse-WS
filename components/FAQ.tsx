"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FAQ as FAQ_ITEMS } from "@/lib/constants";
import SectionHeader from "./SectionHeader";

function FaqItem({
  q,
  a,
  isOpen,
  onToggle,
  id,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
}) {
  return (
    <div className="glass-card mb-3 overflow-hidden transition-shadow hover:shadow-glass-lg">
      <h3>
        <button
          id={`${id}-btn`}
          aria-expanded={isOpen}
          aria-controls={`${id}-panel`}
          onClick={onToggle}
          className="focus-ring flex w-full items-center justify-between gap-6 px-5 py-5 text-left md:px-6"
        >
          <span className="text-[16px] font-semibold text-ink">{q}</span>
          <span
            aria-hidden
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-lg font-light text-ink transition-transform duration-300 ${
              isOpen ? "rotate-45 border-primary-light/40 bg-primary/25 text-primary-light" : ""
            }`}
          >
            +
          </span>
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-btn`}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-prose px-5 pb-5 text-[15px] leading-relaxed text-ink-soft md:px-6 md:pb-6">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="intrebari" className="py-20 md:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            className="mb-0 max-w-none"
            kicker="FAQ"
            title="Întrebări frecvente"
            description={
              <>
                Nu găsești răspunsul? Scrie-ne la{" "}
                <a
                  href="mailto:contact@dentveerse.com"
                  className="focus-ring font-semibold text-primary-light underline decoration-primary-light/30 underline-offset-4"
                >
                  contact@dentveerse.com
                </a>
                .
              </>
            }
          />
        </motion.div>
        <div>
          {FAQ_ITEMS.map((item, i) => (
            <FaqItem
              key={item.q}
              id={`faq-${i}`}
              q={item.q}
              a={item.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
