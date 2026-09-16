"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { APP_TABS, SITE } from "@/lib/constants";
import SectionHeader from "./SectionHeader";

export default function AppExperience() {
  const [active, setActive] = useState(APP_TABS[0].id);
  const tab = APP_TABS.find((t) => t.id === active)!;

  return (
    <section id="aplicatie" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          kicker="În aplicație"
          title={`${SITE.productName} — cinci tab-uri, un singur ecosistem.`}
          description="Conturile se creează în app (iOS & Android). Site-ul le explică; experiența completă trăiește pe telefon."
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
                <p className="mt-3 text-[17px] leading-relaxed text-ink-soft">{tab.body}</p>
                <p className="mt-6 text-[13px] text-ink-muted">
                  Deep link:{" "}
                  <code className="rounded-md bg-black/25 px-2 py-0.5 text-primary-light">
                    {SITE.appDeepLink}
                  </code>
                </p>
              </div>
              <div className="relative flex min-h-[200px] items-center justify-center rounded-2xl border border-white/10 bg-black/20 p-6">
                <div className="absolute inset-x-8 top-6 flex justify-between text-[10px] font-medium uppercase tracking-widest text-ink-muted">
                  <span>9:41</span>
                  <span>{SITE.productName}</span>
                </div>
                <div className="mt-8 w-full max-w-[280px] space-y-3">
                  <div className="h-3 w-3/4 rounded-full bg-white/15" />
                  <div className="h-3 w-full rounded-full bg-white/10" />
                  <div className="h-24 rounded-xl border border-white/10 bg-gradient-to-br from-primary/20 to-transparent" />
                  <div className="flex gap-2">
                    <div className="h-8 flex-1 rounded-lg bg-white/10" />
                    <div className="h-8 flex-1 rounded-lg bg-primary/30" />
                  </div>
                </div>
                <p className="absolute bottom-4 text-[12px] text-ink-muted">
                  Screenshot-uri store — în curând
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
