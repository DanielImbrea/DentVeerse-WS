export const SITE = {
  /** Brand public site / domeniu */
  name: "DentVeerse",
  /** Alias brand (același nume peste tot pe site) */
  productName: "DentVeerse",
  tagline: "Rețeaua stomatologică din România",
  positioning:
    "LinkedIn + Instagram + Maps pentru stomatologie: discovery, portofoliu, feed, networking și colaborări B2B — nu CRM, facturare sau dosare medicale.",
  domain: "https://www.dentveerse.com",
  email: "dentveerse@gmail.com",
  descriptionShort:
    "Ecosistemul profesional care leagă pacienți, clinici și laboratoare dentare — descoperire, verificare, mesagerie și colaborări B2B, direct din aplicație.",
  appDeepLink: "dentalconnect://",
  iosBundle: "ro.dentalconnect.app",
  languages: "Română (implicit) · English în app",
  launchNote:
    "La lansare, platforma este gratuită pentru toți (~6–12 luni). Fără abonamente PRO promovate pe site până la anunț oficial.",
};

export const AUTH = {
  callbackPath: "/auth/callback",
  resetPasswordPath: "/auth/reset-password",
  appSignInDeepLink: "dentalconnect://sign-in?confirmed=1",
  appSignInAfterReset: "dentalconnect://sign-in?reset=1",
};

export const APP_TABS = [
  {
    id: "acasa",
    label: "Acasă",
    body: "Feed profesional: postări, like-uri, comentarii și salvări de la clinici și laboratoare.",
  },
  {
    id: "descopera",
    label: "Descoperă",
    body: "Căutare globală cu filtre și Dental Map — clinici, medici și laboratoare pe hartă.",
  },
  {
    id: "colaborari",
    label: "Colaborări",
    body: "Opportunities B2B: cereri structurate între clinici și laboratoare, cu accept multiplu.",
  },
  {
    id: "mesaje",
    label: "Mesaje",
    body: "Mesagerie privată text, foto și fișiere — pacient ↔ clinică ↔ laborator.",
  },
  {
    id: "notificari",
    label: "Notificări",
    body: "Alerte in-app (și push la lansare publică) pentru mesaje, recenzii și colaborări.",
  },
];

export const AUDIENCES = [
  {
    id: "pacienti",
    label: "Pacienți",
    kicker: "Cauți un dentist de încredere",
    headline: "Găsești clinica potrivită, nu prima din listă.",
    body:
      "Cauți clinici și medici pe hartă sau prin filtre, vezi portofolii before/after, citești recenzii (1–5 stele) și trimiți mesaje direct din app. Urmărești și salvezi favorite — fără cont de clinică sau laborator.",
    points: [
      "Dental Map + căutare după oraș, specializare, verificat",
      "Recenzii de la pacienți reali, vizibile pe profilul clinicii",
      "Follow & favorite (listele de follow sunt publice)",
      "Mesaje către clinică, cu poze atașate",
    ],
  },
  {
    id: "clinici",
    label: "Clinici",
    kicker: "Cabinet sau clinică stomatologică",
    headline: "Profil public, feed și colaborări — într-un singur loc.",
    body:
      "Logo, cover, echipă (medici), servicii, program, portofoliu media și feed profesional. Badge Verificat după documente RO. Open for Collaboration + Opportunities către laboratoare. Mesagerie cu pacienți și parteneri B2B.",
    points: [
      "Profil complet: locație pe hartă, echipă, catalog servicii",
      "Portofoliu foto/video (până la ~25 media per item, anti-spam)",
      "Recenzii primite de la pacienți + status prezență în app",
      "Opportunities: mai mulți laboratoare pot fi acceptați la o cerere",
    ],
  },
  {
    id: "laboratoare",
    label: "Laboratoare",
    kicker: "Laborator dentar",
    headline: "Portofoliul tău tehnic, vizibil pentru clinicile potrivite.",
    body:
      "Profil cu experiență, mărime echipă și zonă (Local / România / Europa / Internațional). Servicii lab, feed și colaborări în ambe sensuri. Verificare cu documente tehnice — badge Verificat, fără expunere publică a fișierelor.",
    points: [
      "Portofoliu central: zirconiu, CAD/CAM, proteze, categorii media",
      "Open for Collaboration + Opportunities (max ~5 active/cont)",
      "Mesagerie B2B directă cu clinicile",
      "Feed pentru lucrări, anunțuri și parteneriate",
    ],
  },
];

export const FEATURES = [
  {
    title: "Feed profesional",
    body:
      "Tab Acasă: postări foto/video, reacții, comentarii și salvări — ca un jurnal al activității clinicii sau laboratorului.",
  },
  {
    title: "Descoperă & Dental Map",
    body:
      "Căutare globală cu filtre (oraș, specializare, verificat, colaborare) plus hartă live cu clinici, medici și laboratoare.",
  },
  {
    title: "Colaborări B2B",
    body:
      "Tab Colaborări: Opportunities structurate clinică ↔ laborator; interes → accept → chat. Mai mulți parteneri pot fi acceptați.",
  },
  {
    title: "Mesagerie privată",
    body:
      "Text, foto și fișiere între pacient și clinică sau între clinică și laborator — fără numere pierdute la recepție.",
  },
  {
    title: "Follow & favorite",
    body:
      "Urmărești profiluri relevante; listele de followers/following sunt publice, inclusiv pentru pacienți.",
  },
  {
    title: "Open for Collaboration",
    body:
      "Badge și mesaj pe profilul clinică/laborator când ești deschis la parteneriate noi — filtrabil în Descoperă.",
  },
  {
    title: "Recenzii pacienți",
    body:
      "Rating 1–5 stele către clinici; la ștergere cont, recenziile sunt eliminate complet și ratingul se recalculează.",
  },
  {
    title: "Cont verificat",
    body:
      "Clinică: CUI, autorizație DSP, CI reprezentant. Lab: CUI, certificat tehnician, CI. Documentele rămân doar la admin.",
  },
  {
    title: "Prezență & notificări",
    body:
      "Status online global în app; notificări in-app pentru mesaje, recenzii și colaborări (+ push la lansare publică).",
  },
  {
    title: "Siguranță & GDPR",
    body:
      "Block ascunde complet din feed, search și hartă. Raportare cu moderare umană. Export date și ștergere hard din setări.",
  },
];

export const HOW_IT_WORKS: Record<
  string,
  { step: string; title: string; body: string }[]
> = {
  pacienti: [
    { step: "1", title: "Descarcă app-ul", body: "Contul se creează în DentVeerse (iOS / Android)." },
    { step: "2", title: "Alege Pacient", body: "Tipul de cont se setează la onboarding și nu se schimbă ulterior." },
    { step: "3", title: "Descoperă", body: "Hartă, filtre, portofolii și recenzii înainte să contactezi." },
    { step: "4", title: "Conectează-te", body: "Mesaje, follow și favorite — totul în aplicație." },
  ],
  clinici: [
    { step: "1", title: "Cont Clinică", body: "Onboarding cu tip cont imutabil; completezi profilul public." },
    { step: "2", title: "Verificare", body: "Trimiți documentele RO; primești badge Verificat după review admin." },
    { step: "3", title: "Publică & atrage", body: "Feed, portofoliu, servicii — pacienții te găsesc în Descoperă." },
    { step: "4", title: "Colaborează", body: "Opportunities și mesaje B2B cu laboratoare partenere." },
  ],
  laboratoare: [
    { step: "1", title: "Cont Laborator", body: "Profil tehnic cu zonă de colaborare și servicii lab." },
    { step: "2", title: "Portofoliu", body: "Media organizată pe categorii — element central al profilului." },
    { step: "3", title: "Disponibil", body: "Open for Collaboration + răspuns la Opportunities." },
    { step: "4", title: "Mesaje B2B", body: "Chat direct cu clinicile după accept sau contact." },
  ],
};

export const FAQ = [
  {
    q: "DentVeerse este gratuit?",
    a: "La lansare, da — estimăm ~6–12 luni gratuite pentru toți tipurile de cont, fără abonament PRO promovat acum. Limite tehnice anti-spam (ex. ~25 media per item portofoliu, max ~5 Opportunities active) se aplică pentru calitatea platformei.",
  },
  {
    q: "Pot crea contul pe site?",
    a: "Conturile se creează și se folosesc în aplicația mobilă (iOS/Android). Site-ul servește prezentare, pagini legale și legătura auth din email (confirmare, reset parolă).",
  },
  {
    q: "Cum funcționează resetarea parolei?",
    a: "Primești email de la DentVeerse (dentveerse@gmail.com), linkul deschide dentveerse.com/auth/reset-password, setezi parola nouă, apoi revii în app la sign-in (deep link dentalconnect://).",
  },
  {
    q: "Pot schimba tipul de cont (pacient → clinică)?",
    a: "Nu. Tipul de cont (pacient / clinică / laborator) se alege la onboarding și este imutabil — alege corect de la început.",
  },
  {
    q: "Cum funcționează verificarea?",
    a: "Clinică: CUI, autorizație DSP, CI reprezentant. Laborator: CUI, certificat tehnician responsabil, CI reprezentant. Documentele sunt văzute doar de admin; public apare doar badge-ul Verificat.",
  },
  {
    q: "Ce NU face platforma?",
    a: "Nu gestionăm comenzi lab, tracking lucrări, CRM clinică, facturare, contabilitate sau dosare medicale / EHR. Suntem stratul de discovery, marketing și networking profesional.",
  },
  {
    q: "Followers sunt privați?",
    a: "Nu. Listele de followers și following sunt publice, inclusiv când pacienții urmăresc o clinică.",
  },
  {
    q: "Ce se întâmplă când blochez pe cineva?",
    a: "Persoana dispare complet din feed, căutare și hartă — nu doar din chat.",
  },
  {
    q: "Datele mele și GDPR?",
    a: "Export din setările app; ștergerea contului elimină datele personale (hard delete). Recenziile tale sunt șterse complet, cu recalcul rating. Politica completă: /confidentialitate.",
  },
  {
    q: "Când e pe App Store și Google Play?",
    a: "Aplicația este în beta. Intră pe lista de așteptare — te anunțăm când store-urile sunt live în regiunea ta.",
  },
];

export const NOT_FOR = [
  "Comenzi lab sau tracking lucrări",
  "CRM, programări interne sau facturare clinică",
  "Contabilitate",
  "Fișe medicale / dosare pacient (EHR)",
];

export const FOR = [
  "Pacienți care caută clinici verificate, cu recenzii și portofoliu real",
  "Clinici care vor vizibilitate, feed și colaborări cu laboratoare",
  "Laboratoare care vor discovery B2B, nu doar recomandări informale",
];
