import { SITE } from "@/lib/constants";

function MapPinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0">
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
        <div className="glass-panel flex flex-col gap-6 px-6 py-7 md:flex-row md:items-center md:justify-between md:gap-10 md:px-8">
          <p className="max-w-[52ch] text-[15px] leading-relaxed text-ink-soft md:text-[16px]">
            <span className="font-semibold text-ink">{SITE.productName}</span> — discovery, portofoliu,
            feed și colaborări B2B pentru stomatologie. Nu CRM, facturare sau dosare medicale.
          </p>

          <div className="flex shrink-0 items-center gap-4 rounded-xl border border-primary-light/25 bg-gradient-to-r from-primary/20 to-primary-dark/30 px-5 py-4 shadow-btn">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-primary-light">
              <MapPinIcon />
            </span>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-light">
                Dental Map
              </p>
              <p className="mt-0.5 text-[15px] font-semibold text-ink">Clinici & laboratoare pe hartă</p>
              <p className="mt-0.5 text-[13px] text-ink-soft">Descoperire locală cu filtre live</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
