"use client";

import { motion } from "framer-motion";
import { revealContainer, revealUp } from "@/lib/animations";
import { FEATURES } from "@/lib/constants";
import { FeatureIcon } from "@/lib/feature-icons";
import SectionHeader from "./SectionHeader";

export default function FeatureGrid() {
  return (
    <section id="functii" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          kicker="Funcționalități"
          title="Descoperire, marketing și networking — într-un singur flux."
          description="Tot ce e în MVP-ul aplicației — descoperire, feed, hartă, colaborări, mesaje, verificare. Fără CRM, facturare sau EHR."
        />

        <motion.div
          variants={revealContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURES.map((f, i) => (
            <motion.article
              key={f.title}
              variants={revealUp}
              className="glass-card-hover group relative overflow-hidden p-6 md:p-7"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="flex items-start justify-between gap-4">
                <FeatureIcon title={f.title} />
                <span className="font-display text-[12px] font-semibold text-accent/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 text-[17px] font-semibold tracking-tight text-ink">{f.title}</h3>
              <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-soft">{f.body}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
