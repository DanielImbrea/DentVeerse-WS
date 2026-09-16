import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Politica de cookie-uri",
  description: "Cum folosește DentVeerse cookie-uri și tehnologii similare pe site.",
};

export default function CookiesPage() {
  return (
    <LegalLayout title="Politica de cookie-uri" updated="17 septembrie 2026">
      <p>
        Acest site folosește un număr minim de cookie-uri, necesare pentru
        funcționarea de bază — de exemplu, reținerea preferinței de aspect
        (mod luminos/întunecat) local, în browserul tău.
      </p>

      <h2 className="font-display text-xl text-ink">1. Cookie-uri strict necesare</h2>
      <p>
        Folosite pentru funcționarea site-ului (ex. navigare, formular de
        listă de așteptare). Acestea nu pot fi dezactivate fără a afecta
        funcționarea site-ului.
      </p>

      <h2 className="font-display text-xl text-ink">2. Cookie-uri de analiză</h2>
      <p>
        La momentul lansării, putem introduce cookie-uri de analiză
        anonimizată pentru a înțelege cum este folosit site-ul. Vei fi
        informat printr-un banner de consimțământ înainte de activare.
      </p>

      <h2 className="font-display text-xl text-ink">3. Controlul cookie-urilor</h2>
      <p>
        Poți controla și șterge cookie-urile din setările browserului tău.
        Dezactivarea completă poate afecta unele funcționalități ale
        site-ului.
      </p>

      <h2 className="font-display text-xl text-ink">4. Contact</h2>
      <p>
        Întrebări legate de această politică:{" "}
        <a href="mailto:contact@dentveerse.com" className="text-primary-light underline underline-offset-4">
          contact@dentveerse.com
        </a>
        .
      </p>
    </LegalLayout>
  );
}
