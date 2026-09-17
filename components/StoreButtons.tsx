"use client";

import { useState } from "react";
import HashlessScrollLink from "@/components/HashlessScrollLink";

function Tooltip({ show }: { show: boolean }) {
  return (
    <span
      role="status"
      className={`pointer-events-none absolute -top-10 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/15 bg-[#0a3d36] px-3 py-1.5 text-[12px] font-medium text-ink transition-all duration-200 ${
        show ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
      }`}
    >
      Disponibil în curând
    </span>
  );
}

function StoreButton({ kind }: { kind: "ios" | "android" }) {
  const [hover, setHover] = useState(false);
  const isIos = kind === "ios";

  return (
    <div className="relative">
      <Tooltip show={hover} />
      <HashlessScrollLink
        sectionId="waitlist"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onFocus={() => setHover(true)}
        onBlur={() => setHover(false)}
        aria-label={
          isIos ? "Descarcă pentru iOS — disponibil în curând" : "Descarcă pentru Android — disponibil în curând"
        }
        className="focus-ring group flex h-[52px] min-w-[168px] items-center gap-3 rounded-xl border border-white/[0.12] bg-[#0a0a0a] px-4 text-white shadow-btn transition-all duration-200 hover:border-white/25 hover:bg-black"
      >
        {isIos ? (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="shrink-0">
            <path d="M16.365 1.43c0 1.14-.462 2.11-1.213 2.86-.79.79-2.06 1.39-3.06 1.31-.13-1.1.44-2.24 1.2-2.98.79-.78 2.15-1.36 3.07-1.19zM20.52 17.34c-.46 1.06-.99 2.05-1.68 2.98-.94 1.28-1.71 2.16-2.9 2.18-1.15.02-1.52-.75-3.17-.75-1.65 0-2.07.73-3.15.77-1.14.04-2.01-1.38-2.96-2.65-1.9-2.57-3.36-7.26-1.4-10.44.97-1.58 2.71-2.58 4.59-2.61 1.13-.02 2.2.77 2.9.77.7 0 1.99-.95 3.35-.81.57.02 2.17.23 3.19 1.75-.08.05-1.9 1.13-1.88 3.36.02 2.68 2.31 3.57 2.34 3.58-.02.06-.36 1.28-1.23 2.87z" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="shrink-0">
            <path d="M3.6 2.6c-.3.3-.5.7-.5 1.2v16.4c0 .5.2.9.5 1.2l.1.1L13 12.2v-.4L3.7 2.5l-.1.1z" />
            <path d="M16.1 15.3 13 12.2v-.4l3.1-3.1 3.6 2.1c1 .6 1 1.6 0 2.2l-3.6 2.3z" />
            <path d="M13 12l3.1 3.3-9.4 5.4c-.4.2-.9.2-1.2-.1L13 12z" />
            <path d="M13 12 5.5 3.4c.3-.3.8-.3 1.2-.1l9.4 5.4L13 12z" />
          </svg>
        )}
        <span className="text-left leading-none">
          <span className="block text-[10px] font-normal tracking-wide text-white/75">
            {isIos ? "Descarcă din" : "Disponibil în"}
          </span>
          <span className="mt-1 block text-[17px] font-semibold tracking-tight text-white">
            {isIos ? "App Store" : "Google Play"}
          </span>
        </span>
      </HashlessScrollLink>
    </div>
  );
}

export default function StoreButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <StoreButton kind="ios" />
      <StoreButton kind="android" />
    </div>
  );
}
