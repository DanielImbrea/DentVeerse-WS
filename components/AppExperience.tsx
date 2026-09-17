"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { APP_TABS, SITE } from "@/lib/constants";
import { AppTabIllustration } from "./app-tab-illustrations";
import SectionHeader from "./SectionHeader";

export default function AppExperience() {
  const [active, setActive] = useState(APP_TABS[0].id);
  const tab = APP_TABS.find((t) => t.id === active)!;

  return (
    <section id="aplicatie" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          kicker="În aplicație"
          title="Tot ce se întâmplă în rețeaua dentară, într-un singur loc."
          description={
            <>
              <p>
                Descoperă oameni, lucrări și oportunități. Conectează-te cu comunitatea dentară.
              </p>
              <p className="mt-4">
                {SITE.name} reunește într-o singură aplicație pacienți, clinici, medici și
                laboratoare — fiecare cu propriul său rol, dar conectați în aceeași rețea.
              </p>
            </>
          }
        />

        <div className="glass-panel overflow-hidden p-2 md:p-3">
          <div
            role="tablist"
            aria-label="Tab-uri aplicație"
            className="flex flex-wrap gap-1 border-b border-white/10 pb-2"
          >
            {APP_TABS.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={active === t.id}
                onClick={() => setActive(t.id)}
                className={`focus-ring rounded-xl px-4 py-2.5 text-[13px] font-semibold transition-all md:px-5 md:text-[14px] ${
                  active === t.id
                    ? "bg-white/10 text-ink shadow-inner-glow"
                    : "border border-transparent bg-white/10 text-ink hover:bg-white/[0.14]"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={tab.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.35 }}
              className="grid gap-8 p-6 md:grid-cols-[1fr_1.1fr] md:p-8"
            >
              <div>
                <p className="text-kicker text-primary-light">{tab.label}</p>
                {"headline" in tab && tab.headline && (
                  <p className="mt-2 text-[18px] font-semibold leading-snug text-ink md:text-[19px]">
                    {tab.headline}
                  </p>
                )}
                <p className="mt-3 text-[17px] leading-relaxed text-ink-soft">{tab.body}</p>
                <p className="mt-6 text-[13px] text-ink-muted">
                  Disponibil în aplicația <span className="text-ink-soft">{SITE.name}</span> pentru
                  iOS și Android.
                </p>
              </div>
              <div className="flex min-h-[240px] items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-black/25 via-primary/5 to-black/30 p-5 md:min-h-[280px] md:p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="w-full"
                    aria-hidden
                  >
                    <AppTabIllustration tabId={tab.id} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
