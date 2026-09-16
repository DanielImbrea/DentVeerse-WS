# DentVeerse-WS

Site de prezentare **DentVeerse** — rețeaua stomatologică din România (pacienți · clinici · laboratoare).

Stack: Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Rulare locală

```bash
npm install
npm run dev
```

Deschide **http://localhost:3021** (port fix — nu folosi 3000).

```bash
npm run build
npm run start
```

Copiază `.env.example` în `.env.local` și completează variabilele Supabase pentru paginile `/auth/*`.

## Deploy

Proiectul e gata pentru [Vercel](https://vercel.com): import din GitHub, framework Next.js, root `.`.

Variabile recomandate: `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `PORT=3021` (doar local).
