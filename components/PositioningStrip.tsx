import { SITE } from "@/lib/constants";

function MapPinIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0">
      <path
        d="M12 21s-6-5.2-6-10a6 6 0 1112 0c0 4.8-6 10-6 10z"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <circle cx="12" cy="11" r="2.25" fill="currentColor" />
    </svg>
  );
}

export default function PositioningStrip() {
  return (
    <section className="pb-6 md:pb-10">
      <div className="container-page">
        <div className="glass-panel flex flex-col gap-8 px-6 py-8 md:flex-row md:items-stretch md:justify-between md:gap-12 md:px-9 md:py-9">
          <div className="max-w-[54ch] space-y-3">
            <p className="text-[15px] leading-relaxed text-ink-soft md:text-[16px]">
              <span className="font-semibold text-ink">{SITE.productName}</span> — descoperire,
              portofolii, conținut și colaborări pentru ecosistemul dentar.
            </p>
            <p className="text-[14px] leading-relaxed text-ink-muted md:text-[15px]">
              Un spațiu în care pacienții, clinicile, medicii și laboratoarele se conectează,
              comunică și descoperă noi oportunități.
            </p>
          </div>

          <div className="flex shrink-0 flex-col justify-center md:max-w-[280px] md:flex-1">
            <div className="flex items-start gap-4 rounded-2xl border border-white/15 bg-gradient-to-br from-primary/25 via-primary-dark/20 to-black/20 px-5 py-5 shadow-glass">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary-light/30 bg-primary/30 text-primary-light shadow-inner-glow">
                <MapPinIcon />
              </span>
              <div className="min-w-0 pt-0.5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-light">
                  Harta dentară
                </p>
                <p className="mt-1.5 text-[16px] font-semibold leading-snug tracking-tight text-ink">
                  Clinici și laboratoare, pe hartă
                </p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-ink-soft">
                  Descoperă profesioniști și servicii din apropierea ta
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
