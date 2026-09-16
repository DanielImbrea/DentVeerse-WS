import { FOR, NOT_FOR, SITE } from "@/lib/constants";

function VerifiedBadge() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[13px] font-semibold text-white backdrop-blur-md">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M9 12.5l2.2 2.2L16 9.5"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.4" opacity="0.5" />
      </svg>
      <span className="shimmer-badge animate-shimmer bg-clip-text text-transparent">Verificat</span>
    </span>
  );
}

const TRUST_ITEMS = [
  {
    title: "Cont verificat",
    body: "Clinică: CUI, autorizație DSP, CI. Lab: CUI, certificat tehnician, CI. Badge public după review admin.",
  },
  {
    title: "Documente private",
    body: "Fișierele de verificare nu apar niciodată public — doar echipa admin le procesează.",
  },
  {
    title: "GDPR",
    body: "Export date și ștergere hard din app. Fără stocare de dosare medicale pe platformă.",
  },
  {
    title: "Moderare umană",
    body: "Raportări analizate manual; block elimină profilul din feed, search și hartă.",
  },
];

export default function TrustSafety() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div>
          <VerifiedBadge />
          <h2 className="font-display mt-6 max-w-[16ch] text-[2rem] font-semibold leading-[1.12] tracking-tight text-ink md:text-[2.65rem]">
            Încredere construită pe verificare, nu pe promisiuni.
          </h2>
          <p className="mt-4 max-w-prose text-[15px] leading-relaxed text-ink-soft">
            {SITE.launchNote}
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {TRUST_ITEMS.map((item) => (
              <div key={item.title} className="glass-panel p-5 transition-colors hover:bg-white/[0.09]">
                <h3 className="text-[15px] font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <div className="glass-panel border-emerald-400/15 bg-emerald-950/20 p-6">
            <h3 className="text-[15px] font-semibold text-primary-light">Pentru cine e {SITE.name}</h3>
            <ul className="mt-4 space-y-3">
              {FOR.map((f) => (
                <li key={f} className="flex gap-3 text-[14.5px] leading-relaxed text-ink-soft">
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-accent to-amber-200"
                  />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-panel bg-black/15 p-6">
            <h3 className="text-[15px] font-semibold text-ink">Pentru cine NU e platforma</h3>
            <ul className="mt-4 space-y-3">
              {NOT_FOR.map((f) => (
                <li key={f} className="flex gap-3 text-[14.5px] leading-relaxed text-ink-muted">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/25" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
