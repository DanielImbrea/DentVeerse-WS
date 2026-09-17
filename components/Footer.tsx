"use client";

import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-16">
      <div className="container-page">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <BrandLogo size={44} />
              <span className="font-display text-2xl font-semibold tracking-tight text-ink">{SITE.name}</span>
            </div>
            <p className="mt-1 text-[14px] font-medium text-primary-light">{SITE.tagline}</p>
            <p className="mt-4 max-w-[36ch] text-[15px] leading-relaxed text-ink-soft">
              {SITE.tagline}. {SITE.positioning}
            </p>
          </div>

          <div>
            <h3 className="text-kicker text-ink-muted">Legal</h3>
            <ul className="mt-4 space-y-3 text-[14.5px] text-ink-soft">
              <li>
                <Link href="/confidentialitate" className="focus-ring hover:text-primary-light">
                  Confidențialitate
                </Link>
              </li>
              <li>
                <Link href="/termeni" className="focus-ring hover:text-primary-light">
                  Termeni
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="focus-ring hover:text-primary-light">
                  Cookie-uri
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-kicker text-ink-muted">Contact</h3>
            <ul className="mt-4 space-y-3 text-[14.5px] text-ink-soft">
              <li>
                <a href={`mailto:${SITE.email}`} className="focus-ring hover:text-primary-light">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-start justify-between gap-4 border-t border-white/10 pt-8 text-[13px] text-ink-muted md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Toate drepturile rezervate.
          </p>
          <p className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1">
            Disponibil în curând pe iOS și Android
          </p>
        </div>
      </div>
    </footer>
  );
}
