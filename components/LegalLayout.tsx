import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import SiteBackground from "@/components/SiteBackground";
import { SITE } from "@/lib/constants";

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <SiteBackground />
      <header className="border-b border-white/10">
        <div className="container-page flex h-16 items-center justify-between">
          <Link href="/" className="focus-ring flex items-center gap-2.5">
            <BrandLogo size={32} />
            <span className="font-display text-lg font-semibold text-ink">{SITE.name}</span>
          </Link>
          <Link href="/" className="focus-ring text-[14px] text-ink-soft hover:text-primary-light">
            Înapoi la site
          </Link>
        </div>
      </header>
      <main className="container-page max-w-[72ch] py-16">
        <h1 className="font-display text-3xl text-ink md:text-4xl">{title}</h1>
        <p className="mt-2 text-[14px] text-ink-muted">Ultima actualizare: {updated}</p>
        <div className="prose-legal mt-10 space-y-6 text-[15.5px] leading-relaxed">{children}</div>
      </main>
      <footer className="border-t border-white/10 py-8">
        <div className="container-page text-[13px] text-ink-muted">
          © {new Date().getFullYear()} {SITE.name}. {SITE.email}
        </div>
      </footer>
    </div>
  );
}
