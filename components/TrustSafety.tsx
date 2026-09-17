import { FOR, NOT_FOR_SUMMARY, SITE, TRUST } from "@/lib/constants";

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

export default function TrustSafety() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div>
          <VerifiedBadge />
          <h2 className="font-display mt-6 max-w-[20ch] text-[2rem] font-semibold leading-[1.12] tracking-tight text-ink md:text-[2.65rem]">
            {TRUST.title}
          </h2>
          <p className="mt-4 max-w-prose text-[15px] leading-relaxed text-ink-soft md:text-[16px]">
            {TRUST.intro}
          </p>
          <div className="mt-10 grid gap-4">
            {TRUST.items.map((item) => (
              <div key={item.title} className="glass-panel p-5 transition-colors hover:bg-white/[0.09]">
                <h3 className="text-[15px] font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <div className="glass-panel border-emerald-400/15 bg-emerald-950/20 p-6 md:p-7">
            <h3 className="text-[15px] font-semibold text-primary-light">
              Pentru cine este {SITE.name}?
            </h3>
            <ul className="mt-4 space-y-4">
              {FOR.map((f) => (
                <li key={f.role} className="text-[14.5px] leading-relaxed text-ink-soft">
                  <span className="font-semibold text-ink">{f.role}</span>
                  {" — "}
                  {f.body}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-panel bg-black/15 p-6 md:p-7">
            <h3 className="text-[15px] font-semibold text-ink">Ce nu este {SITE.name}</h3>
            <p className="mt-4 text-[14.5px] leading-relaxed text-ink-muted">{NOT_FOR_SUMMARY}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
