"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const SCREENS = [
  { id: "feed", label: "Feed" },
  { id: "harta", label: "Hartă" },
  { id: "mesaje", label: "Mesaje" },
] as const;

function FeedScreen() {
  return (
    <g>
      <rect x="14" y="14" width="232" height="46" rx="10" fill="#FFFFFF" stroke="#DDE5E2" />
      <circle cx="34" cy="37" r="12" fill="#0F6B66" />
      <rect x="52" y="27" width="90" height="8" rx="4" fill="#0F1412" opacity="0.85" />
      <rect x="52" y="40" width="60" height="6" rx="3" fill="#5C6B66" opacity="0.6" />
      <rect x="14" y="70" width="232" height="120" rx="10" fill="#FFFFFF" stroke="#DDE5E2" />
      <rect x="14" y="70" width="232" height="70" rx="10" fill="#0A4A47" opacity="0.1" />
      <rect x="26" y="150" width="140" height="8" rx="4" fill="#0F1412" opacity="0.8" />
      <rect x="26" y="164" width="100" height="6" rx="3" fill="#5C6B66" opacity="0.55" />
      <rect x="14" y="200" width="232" height="96" rx="10" fill="#FFFFFF" stroke="#DDE5E2" />
      <circle cx="34" cy="222" r="10" fill="#C98A3B" />
      <rect x="50" y="215" width="80" height="7" rx="3.5" fill="#0F1412" opacity="0.8" />
      <rect x="26" y="240" width="200" height="44" rx="8" fill="#F4F7F6" />
    </g>
  );
}

function MapScreen() {
  return (
    <g>
      <rect x="14" y="14" width="232" height="282" rx="12" fill="#E8EEEC" />
      <path d="M14 90 L246 70" stroke="#C5D0CB" strokeWidth="2" />
      <path d="M14 160 L246 180" stroke="#C5D0CB" strokeWidth="2" />
      <path d="M60 14 L40 296" stroke="#C5D0CB" strokeWidth="2" />
      <path d="M190 14 L210 296" stroke="#C5D0CB" strokeWidth="2" />
      {[
        [90, 110],
        [160, 150],
        [120, 210],
        [200, 100],
      ].map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="16" fill="#0F6B66" opacity="0.18">
            <animate attributeName="r" values="10;22;10" dur="2.6s" repeatCount="indefinite" begin={`${i * 0.4}s`} />
            <animate attributeName="opacity" values="0.35;0;0.35" dur="2.6s" repeatCount="indefinite" begin={`${i * 0.4}s`} />
          </circle>
          <circle cx={cx} cy={cy} r="7" fill="#0F6B66" stroke="#FFFFFF" strokeWidth="2" />
        </g>
      ))}
      <rect x="28" y="260" width="204" height="24" rx="12" fill="#FFFFFF" />
      <rect x="40" y="269" width="120" height="6" rx="3" fill="#5C6B66" opacity="0.6" />
    </g>
  );
}

function MessagesScreen() {
  return (
    <g>
      <rect x="14" y="14" width="232" height="282" rx="12" fill="#FFFFFF" stroke="#DDE5E2" />
      <rect x="14" y="14" width="232" height="50" rx="12" fill="#0A4A47" />
      <circle cx="40" cy="39" r="12" fill="#F4F7F6" opacity="0.9" />
      <rect x="58" y="31" width="100" height="8" rx="4" fill="#F4F7F6" opacity="0.9" />
      <rect x="58" y="43" width="60" height="6" rx="3" fill="#F4F7F6" opacity="0.6" />
      <rect x="28" y="82" width="150" height="34" rx="14" fill="#EEF2F0" />
      <rect x="40" y="94" width="110" height="7" rx="3.5" fill="#0F1412" opacity="0.65" />
      <rect x="98" y="128" width="140" height="34" rx="14" fill="#0F6B66" />
      <rect x="112" y="140" width="100" height="7" rx="3.5" fill="#F4F7F6" opacity="0.9" />
      <rect x="28" y="174" width="170" height="60" rx="14" fill="#EEF2F0" />
      <rect x="40" y="186" width="130" height="7" rx="3.5" fill="#0F1412" opacity="0.6" />
      <rect x="40" y="200" width="90" height="7" rx="3.5" fill="#0F1412" opacity="0.4" />
      <rect x="28" y="270" width="190" height="16" rx="8" fill="#E8EEEC" />
    </g>
  );
}

export default function PhoneMockup() {
  const [active, setActive] = useState<(typeof SCREENS)[number]["id"]>("feed");

  return (
    <div className="relative select-none">
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 -z-10 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-[3rem] bg-gradient-to-b from-primary/20 to-transparent blur-2xl"
      />
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative mx-auto w-[250px] md:w-[280px]"
      >
        <div className="relative rounded-[42px] border-[7px] border-[#0F1412] bg-[#0F1412] p-2.5 shadow-phone">
          <div className="absolute left-1/2 top-3 z-10 h-[22px] w-[88px] -translate-x-1/2 rounded-full bg-[#0F1412]" />
          <div className="overflow-hidden rounded-[32px] bg-bg ring-1 ring-white/10">
            <svg viewBox="0 0 260 310" className="h-[440px] w-full md:h-[480px]">
              <rect width="260" height="310" fill="#F4F7F6" />
              {active === "feed" && <FeedScreen />}
              {active === "harta" && <MapScreen />}
              {active === "mesaje" && <MessagesScreen />}
            </svg>
          </div>
        </div>
      </motion.div>

      <div className="mt-8 flex justify-center gap-2">
        {SCREENS.map((s) => (
          <button
            key={s.id}
            onClick={() => setActive(s.id)}
            className={`focus-ring rounded-full border px-4 py-2 text-[13px] font-semibold transition-all duration-300 ${
              active === s.id
                ? "chip-active border-transparent"
                : "chip-inactive border-white/20"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>
    </div>
  );
}
