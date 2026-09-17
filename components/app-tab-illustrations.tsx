"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

function IllustrationShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto w-full max-w-[320px]">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/25 via-transparent to-accent-light/10 blur-2xl"
      />
      <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-gradient-to-b from-white/[0.08] to-black/30 p-4 shadow-glass backdrop-blur-sm md:p-5">
        {children}
      </div>
    </div>
  );
}

export function FeedTabIllustration() {
  return (
    <IllustrationShell>
      <div className="space-y-3">
        {[0, 1].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className={`rounded-xl border border-white/10 bg-white/[0.06] p-3 ${i === 1 ? "ml-4 scale-[0.96] opacity-80" : ""}`}
          >
            <div className="flex items-center gap-2">
              <div
                className={`h-8 w-8 rounded-full bg-gradient-to-br ${i === 0 ? "from-primary to-primary-dark" : "from-accent to-accent-light"}`}
              />
              <div className="flex-1 space-y-1.5">
                <div className="h-2 w-24 rounded-full bg-white/25" />
                <div className="h-1.5 w-16 rounded-full bg-white/15" />
              </div>
            </div>
            <div
              className={`mt-2.5 overflow-hidden rounded-lg ${i === 0 ? "aspect-[16/9] bg-gradient-to-br from-primary/40 via-primary-light/30 to-accent-light/25" : "h-14 bg-white/10"}`}
            >
              {i === 0 && (
                <div className="flex h-full items-end p-2">
                  <span className="rounded-md bg-black/30 px-2 py-0.5 text-[9px] font-medium text-white backdrop-blur-sm">
                    Lucrare finalizată
                  </span>
                </div>
              )}
            </div>
            {i === 0 && (
              <div className="mt-2 flex gap-3 text-[10px] text-ink-muted">
                <span className="flex items-center gap-1 text-primary-light">
                  <HeartIcon /> 48
                </span>
                <span className="flex items-center gap-1">
                  <CommentIcon /> 6
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </IllustrationShell>
  );
}

export function DiscoverTabIllustration() {
  return (
    <IllustrationShell>
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#1a2834]">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(rgba(94,196,188,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(94,196,188,0.08) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="absolute left-3 right-3 top-3 flex gap-1.5">
          <div className="h-7 flex-1 rounded-full border border-white/15 bg-white/10 backdrop-blur-sm" />
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/40 text-primary-light">
            <SearchIcon />
          </div>
        </div>
        {[
          { top: "38%", left: "28%" },
          { top: "52%", left: "58%" },
          { top: "65%", left: "40%" },
        ].map((p, i) => (
          <motion.span
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1 + i * 0.1, type: "spring", stiffness: 260 }}
            className="absolute h-3 w-3 rounded-full border-2 border-white bg-primary shadow-[0_0_12px_rgba(94,196,188,0.5)]"
            style={{ top: p.top, left: p.left }}
          />
        ))}
        <div className="absolute bottom-3 left-3 right-3 rounded-lg border border-white/15 bg-white/95 p-2.5 shadow-lg">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-primary to-primary-dark" />
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-semibold text-[#0F1412]">Clinică · Verificat</p>
              <p className="text-[9px] text-[#6B7280]">Implantologie · 2 km</p>
            </div>
          </div>
        </div>
      </div>
    </IllustrationShell>
  );
}

export function CollaborationsTabIllustration() {
  return (
    <IllustrationShell>
      <div className="relative flex items-stretch justify-between gap-2 py-2">
        <OrgNode label="Clinică" color="from-primary to-primary-dark" delay={0} />
        <div className="relative flex flex-1 flex-col items-center justify-center px-1">
          <div
            aria-hidden
            className="absolute inset-x-0 top-1/2 border-t border-dashed border-primary-light/35"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="relative z-10 w-full rounded-xl border border-accent-light/30 bg-gradient-to-b from-accent/25 to-black/20 px-2 py-3 text-center shadow-glass"
          >
            <BriefcaseIcon className="mx-auto text-accent-light" />
            <p className="mt-1.5 text-[9px] font-semibold leading-tight text-ink">Oportunitate B2B</p>
            <p className="mt-0.5 text-[8px] text-ink-muted">Coroane · zirconiu</p>
          </motion.div>
        </div>
        <OrgNode label="Laborator" color="from-accent to-accent-light" delay={0.08} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="mt-3 flex justify-center gap-2"
      >
        <span className="rounded-full bg-primary/30 px-2.5 py-1 text-[9px] font-medium text-primary-light">
          Interes exprimat
        </span>
        <span className="rounded-full border border-white/15 px-2.5 py-1 text-[9px] text-ink-soft">
          Mesaj
        </span>
      </motion.div>
    </IllustrationShell>
  );
}

function OrgNode({
  label,
  color,
  delay,
}: {
  label: string;
  color: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="flex w-[72px] flex-col items-center gap-2"
    >
      <div className={`h-11 w-11 rounded-2xl bg-gradient-to-br ${color} shadow-glass`} />
      <span className="text-[9px] font-medium text-ink-soft">{label}</span>
    </motion.div>
  );
}

export function MessagesTabIllustration() {
  return (
    <IllustrationShell>
      <div className="space-y-2.5">
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          className="max-w-[78%] rounded-2xl rounded-tl-md border border-white/10 bg-white/10 px-3 py-2"
        >
          <p className="text-[10px] leading-relaxed text-ink-soft">
            Bună! Putem discuta detaliile lucrării?
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="ml-auto max-w-[78%] rounded-2xl rounded-tr-md bg-gradient-to-r from-primary to-primary-dark px-3 py-2 shadow-btn"
        >
          <p className="text-[10px] leading-relaxed text-white">Da, trimit fișierele acum.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.18 }}
          className="max-w-[85%] rounded-2xl rounded-tl-md border border-white/10 bg-white/10 px-3 py-2"
        >
          <div className="mb-1.5 flex h-14 items-center justify-center rounded-lg border border-dashed border-white/20 bg-black/20">
            <span className="text-[9px] font-medium text-ink-muted">Fotografie atașată</span>
          </div>
          <p className="text-[10px] text-ink-soft">Referință pentru coroane</p>
        </motion.div>
      </div>
    </IllustrationShell>
  );
}

export function NotificationsTabIllustration() {
  const items = [
    { icon: <MessageDotIcon />, title: "Mesaj nou", sub: "Laborator Demo", tint: "primary" as const },
    { icon: <StarIcon />, title: "Recenzie nouă", sub: "5 stele · Clinică", tint: "accent" as const },
    { icon: <BriefcaseIcon />, title: "Colaborare", sub: "Oportunitate potrivită", tint: "primary" as const },
  ];

  return (
    <IllustrationShell>
      <div className="mb-3 flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/25 text-primary-light">
          <BellIcon />
        </div>
        <div>
          <p className="text-[11px] font-semibold text-ink">Notificări</p>
          <p className="text-[9px] text-ink-muted">3 noi astăzi</p>
        </div>
      </div>
      <div className="space-y-2">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.05] p-2.5"
          >
            <div
              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${item.tint === "accent" ? "bg-accent/25 text-accent-light" : "bg-primary/25 text-primary-light"}`}
            >
              {item.icon}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-semibold text-ink">{item.title}</p>
              <p className="truncate text-[9px] text-ink-muted">{item.sub}</p>
            </div>
            <span className="h-2 w-2 shrink-0 rounded-full bg-primary-light" />
          </motion.div>
        ))}
      </div>
    </IllustrationShell>
  );
}

const ILLUSTRATIONS: Record<string, () => JSX.Element> = {
  acasa: FeedTabIllustration,
  descopera: DiscoverTabIllustration,
  colaborari: CollaborationsTabIllustration,
  mesaje: MessagesTabIllustration,
  notificari: NotificationsTabIllustration,
};

export function AppTabIllustration({ tabId }: { tabId: string }) {
  const Component = ILLUSTRATIONS[tabId] ?? FeedTabIllustration;
  return <Component />;
}

function HeartIcon() {
  return (
    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.18L12 21z" />
    </svg>
  );
}

function CommentIcon() {
  return (
    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="11" cy="11" r="6" />
      <path strokeLinecap="round" d="M16 16l4 4" />
    </svg>
  );
}

function BriefcaseIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V6a2 2 0 012-2h4a2 2 0 012 2v1M5 9h14v9a2 2 0 01-2 2H7a2 2 0 01-2-2V9z" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 00-12 0v3.2c0 .5-.2 1-.6 1.4L4 17h5m6 0a3 3 0 01-6 0" />
    </svg>
  );
}

function MessageDotIcon() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M5 6.5h14a1.5 1.5 0 011.5 1.5v7a1.5 1.5 0 01-1.5 1.5H9l-4 3v-3H5a1.5 1.5 0 01-1.5-1.5V8a1.5 1.5 0 011.5-1.5z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M12 2l2.4 4.8 5.3.8-3.8 3.7 1 5.3L12 14.8 7.1 16.6l1-5.3L4.3 7.6l5.3-.8L12 2z" />
    </svg>
  );
}
