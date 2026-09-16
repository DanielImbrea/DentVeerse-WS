"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const SCREENS = [
  { id: "feed", label: "Feed", tab: "acasa" as const },
  { id: "harta", label: "Hartă", tab: "descopera" as const },
  { id: "mesaje", label: "Mesaje", tab: "mesaje" as const },
] as const;

type ScreenId = (typeof SCREENS)[number]["id"];
type TabId =
  | "acasa"
  | "descopera"
  | "colaborari"
  | "mesaje"
  | "notificari"
  | "profil";

function StatusBar({ onDark = false }: { onDark?: boolean }) {
  const fg = onDark ? "text-white" : "text-[#0F1412]";
  const island = onDark ? "bg-black/85" : "bg-[#0F1412]";
  const border = onDark ? "border-white/70" : "border-[#0F1412]/80";

  return (
    <div
      className={`relative z-20 flex items-center justify-between px-5 pt-2.5 text-[10px] font-semibold ${onDark ? "pb-2.5" : "pb-1"} ${fg}`}
    >
      <span>9:41</span>
      <div className={`absolute left-1/2 top-2 h-[22px] w-[72px] -translate-x-1/2 rounded-full ${island}`} />
      <div className="flex items-center gap-1">
        <span className={`h-2 w-3 rounded-sm border ${border}`} aria-hidden />
        <span className={`h-2.5 w-4 rounded-[2px] border ${border}`} aria-hidden />
      </div>
    </div>
  );
}

const TAB_ITEMS: { id: TabId; label: string; icon: JSX.Element }[] = [
  {
    id: "acasa",
    label: "Acasă",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 10.5L12 4l8 6.5V19a1.5 1.5 0 01-1.5 1.5H5.5A1.5 1.5 0 014 19v-8.5z"
      />
    ),
  },
  {
    id: "descopera",
    label: "Descoperă",
    icon: (
      <>
        <circle cx="11" cy="11" r="6" />
        <path strokeLinecap="round" d="M16 16l4 4" />
      </>
    ),
  },
  {
    id: "colaborari",
    label: "Colaborări",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 7V6a2 2 0 012-2h4a2 2 0 012 2v1M5 9h14v9a2 2 0 01-2 2H7a2 2 0 01-2-2V9z"
      />
    ),
  },
  {
    id: "mesaje",
    label: "Mesaje",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 6.5h14a1.5 1.5 0 011.5 1.5v7a1.5 1.5 0 01-1.5 1.5H9l-4 3v-3H5a1.5 1.5 0 01-1.5-1.5V8a1.5 1.5 0 011.5-1.5z"
      />
    ),
  },
  {
    id: "notificari",
    label: "Notificări",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 00-12 0v3.2c0 .5-.2 1-.6 1.4L4 17h5m6 0a3 3 0 01-6 0"
      />
    ),
  },
  {
    id: "profil",
    label: "Profil",
    icon: (
      <>
        <circle cx="12" cy="8" r="3.5" />
        <path strokeLinecap="round" d="M5 19c0-3.3 3.1-6 7-6s7 2.7 7 6" />
      </>
    ),
  },
];

function TabBar({ active }: { active: TabId }) {
  return (
    <div className="flex shrink-0 justify-center border-t border-[#E8EEEC] bg-white pb-[6px] pt-[5px]">
      <div className="flex items-end justify-center gap-px">
      {TAB_ITEMS.map((item) => {
        const on = active === item.id;
        return (
          <div key={item.id} className="flex w-[41px] flex-col items-center justify-end gap-[3px]">
            <svg
              className={`h-[13px] w-[13px] shrink-0 ${on ? "text-[#0A4A47]" : "text-[#9CA3AF]"}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={on ? 2 : 1.6}
            >
              {item.icon}
            </svg>
            <span
              className={`w-full text-center text-[6.75px] font-medium leading-[1.05] tracking-[-0.045em] ${on ? "text-[#0A4A47]" : "text-[#9CA3AF]"}`}
            >
              {item.label}
            </span>
          </div>
        );
      })}
      </div>
    </div>
  );
}

function FeedScreen() {
  return (
    <motion.div
      key="feed"
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -12 }}
      transition={{ duration: 0.25 }}
      className="flex min-h-0 flex-1 flex-col overflow-hidden bg-[#FAFBFA]"
    >
      <div className="shrink-0 px-3.5 pb-2 pt-1">
        <div>
          <h3 className="text-[15px] font-bold tracking-tight text-[#0F1412]">Acasă</h3>
          <p className="mt-0.5 text-[8px] leading-snug text-[#6B7280]">
            Postări de la clinici și laboratoare pe care le urmărești.
          </p>
        </div>

        <div className="mt-2.5 flex rounded-full border border-[#E5E7EB] bg-white p-0.5 shadow-sm">
          <span className="flex-1 rounded-full bg-[#0A4A47] py-1.5 text-center text-[9px] font-semibold text-white">
            Pentru tine
          </span>
          <span className="flex-1 py-1.5 text-center text-[9px] font-medium text-[#6B7280]">Cele mai noi</span>
        </div>

        <div className="mt-2 flex gap-1 overflow-hidden">
          {["Toate", "Clinici", "Lab", "Foto"].map((chip, i) => (
            <span
              key={chip}
              className={`shrink-0 rounded-full px-2 py-1 text-[8px] font-semibold ${
                i === 0
                  ? "bg-[#0A4A47] text-white"
                  : "border border-[#E5E7EB] bg-white text-[#374151]"
              }`}
            >
              {chip}
            </span>
          ))}
        </div>
      </div>

      <div className="min-h-0 flex-1 space-y-2 overflow-hidden px-3.5 pb-2">
        <article className="overflow-hidden rounded-xl border border-[#E8EEEC] bg-white shadow-[0_2px_12px_rgba(15,20,18,0.06)]">
          <div className="flex items-center gap-2 p-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#0F6B66] to-[#0A4A47] text-[10px] font-bold text-white">
              CD
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[10px] font-semibold text-[#0F1412]">Clinică Demo Verificată</p>
              <p className="text-[8px] text-[#9CA3AF]">București · acum 2 h</p>
            </div>
            <span className="rounded-md bg-[#0F6B66]/15 px-1.5 py-0.5 text-[7px] font-bold uppercase tracking-wide text-[#0A4A47]">
              Verificat
            </span>
          </div>
          <div className="relative mx-2.5 mb-2.5 aspect-[16/10] overflow-hidden rounded-lg bg-gradient-to-br from-[#0A4A47] via-[#0F6B66] to-[#5EC4BC]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_55%)]" />
            <div className="absolute bottom-2 left-2 right-2 rounded-md bg-black/25 px-2 py-1 backdrop-blur-sm">
              <p className="text-[8px] font-medium text-white">Fațete — rezultat final</p>
            </div>
          </div>
          <p className="px-2.5 pb-1 text-[9px] leading-snug text-[#374151]">
            Proiect finalizat cu echipa noastră. Mulțumim partenerilor lab!
          </p>
          <div className="flex gap-3 px-2.5 pb-2.5 text-[8px] text-[#9CA3AF]">
            <span>♥ 124</span>
            <span>12 comentarii</span>
          </div>
        </article>

        <article className="overflow-hidden rounded-xl border border-[#E8EEEC] bg-white opacity-95 shadow-sm">
          <div className="flex items-center gap-2 p-2.5">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#C98A3B] to-[#E8C978] text-[9px] font-bold text-white">
              LP
            </div>
            <p className="text-[10px] font-semibold text-[#0F1412]">Laborator Demo</p>
          </div>
          <div className="mx-2.5 mb-2.5 h-14 rounded-lg bg-[#F3F4F6]" />
        </article>
      </div>

      <TabBar active="acasa" />
    </motion.div>
  );
}

function MapScreen() {
  return (
    <motion.div
      key="harta"
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -12 }}
      transition={{ duration: 0.25 }}
      className="relative flex min-h-0 flex-1 flex-col overflow-hidden bg-[#1a2332]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(125deg,#1e293b_0%,#0f172a_40%,#1a3a32_100%)]" />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute left-[20%] top-[35%] h-24 w-24 rounded-full bg-[#0F6B66]/20 blur-2xl" />
      <div className="absolute right-[15%] top-[50%] h-20 w-20 rounded-full bg-[#C98A3B]/15 blur-2xl" />

      <div className="relative z-10 shrink-0 px-3.5 pb-2.5 pt-4">
        <div className="flex items-center gap-2">
          <div
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.22)]"
            aria-hidden
          >
            <svg className="h-3 w-3 text-[#0A4A47]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
            </svg>
          </div>
          <div className="flex min-w-0 flex-1 gap-1.5">
            <span className="flex flex-1 items-center justify-center rounded-full bg-[#0A4A47] py-1.5 text-[8.5px] font-semibold tracking-tight text-white shadow-[0_2px_8px_rgba(10,74,71,0.45)]">
              Clinici
            </span>
            <span className="flex flex-1 items-center justify-center rounded-full bg-[#B8925F] py-1.5 text-[8.5px] font-semibold tracking-tight text-white shadow-[0_2px_8px_rgba(184,146,95,0.35)]">
              Laboratoare
            </span>
          </div>
        </div>
      </div>

      <div className="relative z-10 min-h-0 flex-1">
        {[
          { top: "28%", left: "35%" },
          { top: "42%", left: "58%" },
          { top: "55%", left: "42%" },
        ].map((pos, i) => (
          <div key={i} className="absolute" style={{ top: pos.top, left: pos.left }}>
            <span className="absolute -inset-2 animate-ping rounded-full bg-[#5EC4BC]/30" style={{ animationDuration: "2.5s" }} />
            <span className="relative block h-3 w-3 rounded-full border-2 border-white bg-[#0F6B66] shadow-lg" />
          </div>
        ))}

        <div className="absolute bottom-16 left-3 right-3 rounded-xl border border-white/20 bg-white/95 p-2.5 shadow-xl backdrop-blur-sm">
          <p className="text-[10px] font-bold text-[#0F1412]">Dental Map · București</p>
          <p className="mt-0.5 text-[8px] text-[#6B7280]">3 clinici verificate în zonă</p>
          <div className="mt-2 flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#0F6B66] to-[#0A4A47]" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[9px] font-semibold text-[#0F1412]">Clinică Demo Verificată</p>
              <p className="text-[8px] text-[#9CA3AF]">Implantologie · 4.8 ★</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 shrink-0">
        <TabBar active="descopera" />
      </div>
    </motion.div>
  );
}

function MessagesScreen() {
  return (
    <motion.div
      key="mesaje"
      initial={{ opacity: 0, x: 12 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -12 }}
      transition={{ duration: 0.25 }}
      className="flex min-h-0 flex-1 flex-col overflow-hidden bg-[#FAFBFA]"
    >
      <div className="shrink-0 px-3.5 pb-2 pt-1">
        <div>
          <h3 className="text-[15px] font-bold text-[#0F1412]">Mesaje</h3>
          <p className="mt-0.5 text-[8px] text-[#6B7280]">Discuții cu clinici și laboratoare.</p>
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-hidden px-3.5">
        <div className="space-y-1.5">
          {[
            { initials: "LP", name: "Laborator Demo", preview: "Trimit fișierele CAD/CAM mâine dimineață.", time: "14:32", unread: true, color: "from-[#C98A3B] to-[#E8C978]" },
            { initials: "CD", name: "Clinică Demo", preview: "Mulțumim! Propunerea de colaborare e ok.", time: "Ieri", unread: false, color: "from-[#0F6B66] to-[#0A4A47]" },
          ].map((thread) => (
            <div
              key={thread.name}
              className="flex items-center gap-2 rounded-xl border border-[#E8EEEC] bg-white p-2 shadow-sm"
            >
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${thread.color} text-[9px] font-bold text-white`}
              >
                {thread.initials}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-1">
                  <p className="truncate text-[10px] font-semibold text-[#0F1412]">{thread.name}</p>
                  <span className="shrink-0 text-[8px] text-[#9CA3AF]">{thread.time}</span>
                </div>
                <p className="truncate text-[8px] text-[#6B7280]">{thread.preview}</p>
              </div>
              {thread.unread && <span className="h-2 w-2 shrink-0 rounded-full bg-[#0F6B66]" />}
            </div>
          ))}
        </div>

        <div className="mt-3 rounded-xl border border-[#E8EEEC] bg-white p-2.5 shadow-sm">
          <div className="mb-2 flex items-center gap-2 border-b border-[#F3F4F6] pb-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#C98A3B] to-[#E8C978] text-[8px] font-bold text-white">
              LP
            </div>
            <p className="text-[10px] font-semibold text-[#0F1412]">Laborator Demo</p>
          </div>
          <div className="space-y-1.5">
            <div className="max-w-[85%] rounded-2xl rounded-tl-md bg-[#EEF2F0] px-2.5 py-1.5">
              <p className="text-[8px] leading-snug text-[#374151]">Bună! Aveți nevoie de coroane pe implant?</p>
            </div>
            <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-md bg-[#0F6B66] px-2.5 py-1.5">
              <p className="text-[8px] leading-snug text-white">Da, 4 unități — zirconiu multistrat.</p>
            </div>
          </div>
        </div>
      </div>

      <TabBar active="mesaje" />
    </motion.div>
  );
}

export default function PhoneMockup() {
  const [active, setActive] = useState<ScreenId>("feed");

  return (
    <div className="relative select-none">
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -z-10 h-[115%] w-[115%] -translate-x-1/2 -translate-y-1/2 rounded-[3rem] bg-gradient-to-b from-primary-light/25 via-primary/10 to-transparent blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -right-4 top-8 -z-10 h-32 w-32 rounded-full bg-accent-light/20 blur-2xl"
      />

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative mx-auto w-[268px] md:w-[292px]"
      >
        <div className="relative rounded-[44px] bg-gradient-to-b from-[#3d4543] via-[#1a1f1e] to-[#0a0c0b] p-[3px] shadow-phone">
          <div className="absolute inset-x-[18%] top-[5px] z-30 h-[3px] rounded-full bg-white/20" aria-hidden />
          <div className="relative overflow-hidden rounded-[41px] bg-[#0F1412] p-[6px]">
            <div className="overflow-hidden rounded-[35px] bg-white ring-1 ring-black/10">
              <div className="flex h-[480px] flex-col md:h-[520px]">
                <StatusBar onDark={active === "harta"} />
                <AnimatePresence mode="wait">
                  {active === "feed" && <FeedScreen />}
                  {active === "harta" && <MapScreen />}
                  {active === "mesaje" && <MessagesScreen />}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mt-8 flex justify-center gap-2">
        {SCREENS.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setActive(s.id)}
            className={`focus-ring rounded-full border px-4 py-2 text-[13px] font-semibold transition-all duration-300 ${
              active === s.id ? "chip-active border-transparent" : "chip-inactive border-white/20"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>
    </div>
  );
}
