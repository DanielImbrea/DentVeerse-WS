# Audit — Dentora landing page

## Checklist

- [x] Toate feature-urile produsului sunt menționate — 10 funcții în
      `FeatureGrid` (feed, search/filtre, hartă, mesagerie, follow/favorite,
      Opportunities B2B, recenzii, cont verificat, notificări, moderare).
- [x] Cele 3 audiențe au secțiuni dedicate — `AudienceTabs` (tab switcher)
      + `HowItWorks` (pași separați per audiență, cu tab switcher propriu).
- [x] Non-goals sunt clare — secțiune „Pentru cine NU e Dentora” în
      `TrustSafety`, plus mențiune explicită în hero și în `/termeni`.
- [x] Brand colors exact match token-urile — definite o singură dată în
      `tailwind.config.ts` (`primary #0F6B66`, `primary-dark #0A4A47`,
      `accent #C98A3B`, `bg #FAF9F7`, `surface #FFFFFF`, `border #E6E3DF`,
      `ink #1C1E21`, `ink-soft #6B6F76`) și folosite exclusiv prin clase
      Tailwind derivate — niciun hex hardcodat în afara acestora, cu
      excepția SVG-urilor ilustrative din `PhoneMockup`.
- [x] Responsive: breakpoints Tailwind implicite (`sm`/`md`/`lg`) aplicate
      pe grid-uri, navbar (meniu hamburger sub `md`), hero (coloană unică
      sub `md`). Verificat vizual în cod pentru 375 / 768 / 1280px; **nu a
      putut fi verificat într-un browser real** (fără acces la rețea /
      npm în acest mediu — vezi secțiunea „Limitări” mai jos).
- [ ] `npm run build` — **nu a putut fi rulat** (rețea dezactivată în acest
      mediu de generare). Am făcut în schimb un audit static: verificare de
      structură, import-uri, acolade/paranteze echilibrate pe fiecare
      fișier `.ts`/`.tsx`, și o recitire completă a fiecărei componente.
      Rulează `npm run build` local ca prim pas — vezi „Limitări”.
- [ ] Lighthouse — nu a putut fi rulat (necesită build + browser local).
      Codul respectă premisele unui scor bun: fonturi via `next/font`
      (fără render-blocking extern), `next/image` neutilizat (SVG-uri
      inline, deci zero cereri de imagine în afară de `og-image.png`),
      `prefers-reduced-motion` respectat, focus states vizibile, alt-text
      pe elementele semnificative, un singur `<h1>` per pagină.
- [x] SEO: `title`/`description`/OpenGraph/Twitter card complete în
      `app/layout.tsx`, `canonical`, JSON-LD (`MobileApplication`) în
      `page.tsx`, `sitemap.ts` + `robots.ts` dinamice, `og-image.png`
      1200×630 generat.
- [x] A11y: focus-ring vizibil global, `aria-expanded`/`aria-controls` pe
      FAQ, `aria-pressed` pe toggle-uri, elemente decorative `aria-hidden`,
      contrast text/fundal verificat vizual pe toate combinațiile de
      culoare din brief.
- [x] Legal pages există (`/termeni`, `/confidentialitate`, `/cookies`) și
      sunt linkuite în footer.
- [x] App Store buttons = „Disponibil în curând” (tooltip), fără link-uri
      moarte — duc spre `#waitlist`.
- [x] Waitlist form funcțional cu fallback `mailto:` fără backend, plus
      `TODO` explicit în cod pentru integrare Formspree.
- [ ] „No console errors, no broken links” — nu a putut fi verificat în
      browser real (fără `npm install` posibil aici). Toate link-urile
      interne (`href`/`Link`) au fost verificate manual în cod și duc spre
      rute sau ancore existente.
- [x] README deploy Vercel complet, inclusiv pași GitHub, domeniu custom
      și ce se schimbă după lansarea în store.

## Limitări ale acestui mediu de generare

Containerul în care a fost construit acest proiect **nu are acces la
internet**, deci nu s-a putut rula `npm install`, `npm run build` sau
Lighthouse. Codul a fost scris cu atenție la sintaxa Next.js 14 / React 18
/ TypeScript și verificat static (structură de foldere, import-uri
consistente, echilibrul acoladelor/parantezelor pe fiecare fișier), dar
**primul pas obligatoriu înainte de deploy este să rulezi local**:

```bash
npm install
npm run build
```

și să corectezi orice eroare de tip sau de lint care apare — proiectele
Next.js generate manual pot avea ocazional mici discrepanțe de tipuri pe
care doar compilatorul TypeScript le prinde.

## Ce am schimbat față de brief

- Numele produsului: brief-ul menționează atât „DentVeerse” cât și
  „Dentora”, cu instrucțiunea explicită „numele e deja folosit de
  altcineva, folosește Dentora”. Am folosit **Dentora** peste tot (brand,
  metadata, email, footer). Câteva referințe reziduale la „DentVeerse” din
  structura de fișiere sugerată în brief au fost înlocuite cu foldere/nume
  neutre.
- Nu am livrat arhivă `.zip` separată din folderul de lucru local, conform
  ultimei instrucțiuni din brief; fișierele sunt livrate ca atare, iar
  arhiva oferită prin chat este doar pentru transferul din acest mediu.
