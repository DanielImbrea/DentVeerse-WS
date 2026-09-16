const iconClass = "h-5 w-5";

const DEFAULT_ICON = (
  <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
    <circle cx="12" cy="12" r="8" />
  </svg>
);

export const FEATURE_ICONS: Record<string, JSX.Element> = {
  "Feed profesional": (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <path d="M7 9h10M7 13h6" strokeLinecap="round" />
    </svg>
  ),
  "Descoperă & Dental Map": (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M12 21s-7-4.5-7-10a7 7 0 1114 0c0 5.5-7 10-7 10z" />
      <circle cx="12" cy="11" r="2.5" />
    </svg>
  ),
  "Colaborări B2B": (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M8 7h8M8 12h5M8 17h8" strokeLinecap="round" />
      <rect x="4" y="3" width="16" height="18" rx="2" />
    </svg>
  ),
  "Mesagerie privată": (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H9l-5 4V6z" />
    </svg>
  ),
  "Follow & Favorite": (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M12 21l-1.5-1.35C5.5 15.5 2 12.4 2 8.5 2 5.8 4.2 4 6.8 4c1.5 0 2.9.7 3.8 1.8C11.5 4.7 12.9 4 14.4 4 17 4 19.2 5.8 19.2 8.5c0 3.9-3.5 7-8.5 11.15L12 21z" />
    </svg>
  ),
  "Open for Collaboration": (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M7 12h10M12 7v10" strokeLinecap="round" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  ),
  "Recenzii de la pacienți": (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M12 2l2.4 4.8 5.3.8-3.8 3.7 1 5.3L12 14.8 7.1 16.6l1-5.3L4.3 7.6l5.3-.8L12 2z" />
    </svg>
  ),
  "Profiluri verificate": (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 3l7 3v6c0 4.5-3 8.5-7 9-4-.5-7-4.5-7-9V6l7-3z" />
    </svg>
  ),
  "Prezență & notificări": (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M18 8a6 6 0 10-12 0c0 7-3 7-3 7h18s-3 0-3-7" />
      <path d="M10 21a2 2 0 004 0" strokeLinecap="round" />
    </svg>
  ),
  "Siguranță & GDPR": (
    <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M12 9v4M12 17h.01" strokeLinecap="round" />
      <path d="M10.3 4.5h3.4L20 12l-6.3 7.5h-3.4L4 12l6.3-7.5z" />
    </svg>
  ),
};

export function FeatureIcon({ title }: { title: string }) {
  return (
    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary-light/20 bg-primary/15 text-primary-light shadow-inner-glow">
      {FEATURE_ICONS[title] ?? DEFAULT_ICON}
    </span>
  );
}
