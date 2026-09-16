"use client";

import { motion } from "framer-motion";
import { heroItem, revealContainer } from "@/lib/animations";
import PhoneMockup from "./PhoneMockup";
import StoreButtons from "./StoreButtons";
import { SITE } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-6 md:pt-10">
      <div className="container-page grid items-center gap-12 pb-16 md:grid-cols-[1.05fr_0.95fr] md:gap-10 md:pb-20 lg:pb-24">
        <motion.div
          variants={revealContainer}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-[48ch]"
        >
          <motion.div variants={heroItem} className="mb-7 inline-flex">
            <span className="glass-panel inline-flex items-center gap-2 px-4 py-2 text-[13px] font-medium text-ink-soft">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulseDot rounded-full bg-primary-light opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-light" />
              </span>
              {SITE.productName} · beta · App Store & Google Play în curând
            </span>
          </motion.div>

          <motion.p variants={heroItem} className="text-kicker text-primary-light">
            {SITE.tagline}
          </motion.p>

          <motion.h1
            variants={heroItem}
            className="font-display mt-3 text-[2.65rem] font-semibold leading-[1.05] tracking-[-0.03em] md:text-[3.65rem] lg:text-[3.85rem]"
          >
            <span className="hero-gradient-text">Rețeaua profesională</span>
            <span className="mt-1 block text-ink"> a stomatologiei — pacienți, clinici, laboratoare.</span>
          </motion.h1>

          <motion.p
            variants={heroItem}
            className="mt-7 text-[18px] leading-[1.65] text-ink-soft md:text-[19px]"
          >
            {SITE.descriptionShort}
          </motion.p>

          <motion.div variants={heroItem} className="mt-10">
            <StoreButtons />
            <p className="mt-5 text-[14px] text-ink-muted">
              Conturile se creează în app ·{" "}
              <a
                href="#waitlist"
                className="focus-ring font-semibold text-primary-light underline decoration-primary-light/30 underline-offset-4"
              >
                Lista de așteptare
              </a>
            </p>
          </motion.div>

          <motion.div
            variants={heroItem}
            className="mt-12 flex flex-wrap gap-6 border-t border-white/10 pt-8"
          >
            {["Verificare RO", "GDPR", "Fără dosare medicale"].map((item) => (
              <span key={item} className="flex items-center gap-2 text-[13px] font-medium text-ink-soft">
                <svg className="h-4 w-4 text-primary-light" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative flex justify-center md:justify-end"
        >
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 -z-10 h-[min(420px,90vw)] w-[min(420px,90vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl"
          />
          <PhoneMockup />
        </motion.div>
      </div>
    </section>
  );
}
