import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Confidențialitate",
  description: "Politica de confidențialitate și protecție a datelor DentVeerse, conformă GDPR.",
};

export default function ConfidentialitatePage() {
  return (
    <LegalLayout title="Politica de confidențialitate" updated="17 septembrie 2026">
      <p>
        Această politică explică ce date colectăm prin platforma DentVeerse, de
        ce le colectăm și cum le protejăm, în conformitate cu Regulamentul
        General privind Protecția Datelor (GDPR).
      </p>

      <h2 className="font-display text-xl text-ink">1. Ce date colectăm</h2>
      <p>
        Colectăm datele necesare creării și funcționării unui cont: nume,
        email, tip de cont (pacient, clinică, laborator), locație
        aproximativă pentru afișarea pe hartă, și conținutul pe care îl
        publici sau trimiți în platformă (postări, mesaje, recenzii).
        Pentru conturile de clinică și laborator care solicită badge-ul
        Verified, colectăm documente de verificare a activității.
      </p>

      <h2 className="font-display text-xl text-ink">2. Cum folosim datele</h2>
      <p>
        Folosim datele exclusiv pentru funcționarea platformei: afișarea
        profilurilor, activarea căutării și hărții, livrarea mesajelor și
        notificărilor, și verificarea conturilor. Nu vindem datele
        utilizatorilor către terți.
      </p>

      <h2 className="font-display text-xl text-ink">3. Documente de verificare</h2>
      <p>
        Documentele transmise pentru verificarea unui cont de clinică sau
        laborator sunt vizibile exclusiv echipei de administrare DentVeerse.
        Nu sunt afișate public și nu sunt distribuite altor utilizatori.
      </p>

      <h2 className="font-display text-xl text-ink">4. Drepturile tale</h2>
      <p>
        Ai dreptul de a accesa, corecta sau solicita ștergerea datelor tale.
        Funcția de export al datelor din cont este în pregătire (roadmap).
        Pentru orice solicitare, ne poți scrie la{" "}
        <a href={`mailto:${SITE.email}`} className="text-primary-light underline underline-offset-4">
          {SITE.email}
        </a>
        .
      </p>

      <h2 className="font-display text-xl text-ink">5. Stocare și securitate</h2>
      <p>
        Aplicăm măsuri tehnice și organizatorice pentru protejarea datelor
        împotriva accesului neautorizat, inclusiv restricționarea accesului
        la documentele de verificare exclusiv echipei de administrare.
      </p>

      <h2 className="font-display text-xl text-ink">6. Modificări ale politicii</h2>
      <p>
        Putem actualiza această politică pe măsură ce platforma evoluează.
        Vom anunța modificările importante prin aplicație sau email.
      </p>
    </LegalLayout>
  );
}
