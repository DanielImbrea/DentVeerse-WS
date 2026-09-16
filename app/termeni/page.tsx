import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Termeni și condiții",
  description: "Termenii și condițiile de utilizare a platformei DentVeerse.",
};

export default function TermeniPage() {
  return (
    <LegalLayout title="Termeni și condiții" updated="17 septembrie 2026">
      <p>
        Acești termeni reglementează utilizarea platformei DentVeerse (aplicație
        mobilă și site asociat), aflată în prezent în etapă de testare
        (beta). Prin crearea unui cont sau utilizarea platformei, ești de
        acord cu termenii de mai jos.
      </p>

      <h2 className="font-display text-xl text-ink">1. Ce este DentVeerse</h2>
      <p>
        DentVeerse este o platformă de descoperire, networking și marketing
        profesional pentru pacienți, clinici dentare și laboratoare dentare.
        Platforma facilitează căutarea, comunicarea și colaborarea între
        aceste categorii de utilizatori.
      </p>

      <h2 className="font-display text-xl text-ink">2. Ce nu este DentVeerse</h2>
      <p>
        DentVeerse nu este un sistem de gestiune a lucrărilor de laborator, un
        CRM clinic, un instrument de facturare sau un sistem de fișe
        medicale ale pacienților (EHR). Nu ne asumăm responsabilitatea
        pentru administrarea internă a activității clinicilor sau
        laboratoarelor.
      </p>

      <h2 className="font-display text-xl text-ink">3. Conturi și verificare</h2>
      <p>
        Conturile de tip clinică și laborator pot solicita verificare prin
        transmiterea de documente relevante activității. Documentele sunt
        analizate exclusiv de echipa de administrare DentVeerse și nu sunt
        publicate sau distribuite terților.
      </p>

      <h2 className="font-display text-xl text-ink">4. Conținut generat de utilizatori</h2>
      <p>
        Utilizatorii sunt responsabili pentru conținutul publicat (postări,
        recenzii, mesaje, imagini). Ne rezervăm dreptul de a elimina
        conținut care încalcă acești termeni sau legislația aplicabilă, în
        urma unei semnalări sau verificări interne.
      </p>

      <h2 className="font-display text-xl text-ink">5. Recenzii</h2>
      <p>
        Recenziile pot fi lăsate exclusiv de pacienți către clinici.
        Recenziile trebuie să reflecte o experiență reală; recenziile false
        sau abuzive pot fi eliminate.
      </p>

      <h2 className="font-display text-xl text-ink">6. Beta și disponibilitate</h2>
      <p>
        Platforma se află în etapă de testare. Funcționalitățile pot suferi
        modificări înainte de lansarea publică pe App Store și Google Play,
        iar disponibilitatea nu este garantată la o dată fixă.
      </p>

      <h2 className="font-display text-xl text-ink">7. Contact</h2>
      <p>
        Pentru întrebări legate de acești termeni, ne poți scrie la{" "}
        <a href={`mailto:${SITE.email}`} className="text-primary-light underline underline-offset-4">
          {SITE.email}
        </a>
        .
      </p>
    </LegalLayout>
  );
}
