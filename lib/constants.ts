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
    subtitle: "Un spațiu pentru activitatea și poveștile din lumea dentară.",
    body:
      "Descoperă postări foto și video, reacții, comentarii și conținut publicat de clinici și laboratoare. Prezintă proiecte, rezultate și activitatea echipei într-un spațiu construit pentru comunitatea dentară.",
  },
  {
    title: "Descoperă & Dental Map",
    subtitle: "Găsește profesioniștii și serviciile potrivite.",
    body:
      "Explorează clinici, medici și laboratoare prin căutare sau direct pe hartă. Folosește filtre precum orașul, specializarea, verificarea profilului sau disponibilitatea pentru colaborare pentru a ajunge mai rapid la conexiunile relevante.",
  },
  {
    title: "Colaborări B2B",
    subtitle: "Oportunități reale pentru parteneriate profesionale.",
    body:
      "Clinicile și laboratoarele pot publica și descoperi oportunități de colaborare, își pot exprima interesul și pot continua discuția direct prin mesagerie. Un singur proiect poate conecta mai mulți parteneri atunci când colaborarea o cere.",
  },
  {
    title: "Mesagerie privată",
    subtitle: "Comunicare directă între oamenii potriviți.",
    body:
      "Discută în privat cu clinici, laboratoare sau pacienți și trimite mesaje, fotografii și fișiere într-un singur loc. Fără canale separate și fără informații importante pierdute între conversații.",
  },
  {
    title: "Follow & Favorite",
    subtitle: "Păstrează aproape profilurile care contează.",
    body:
      "Urmărește clinici, laboratoare și alte profiluri relevante pentru a rămâne conectat la activitatea lor. Salvează ceea ce vrei să regăsești mai târziu și construiește-ți propriul spațiu de conexiuni.",
  },
  {
    title: "Open for Collaboration",
    subtitle: "Fă cunoscut faptul că ești deschis către noi oportunități.",
    body:
      "Clinicile și laboratoarele își pot afișa disponibilitatea pentru colaborări direct pe profil. Astfel, partenerii interesați pot identifica mai ușor organizațiile deschise către noi proiecte și conexiuni profesionale.",
  },
  {
    title: "Recenzii de la pacienți",
    subtitle: "Experiențele pacienților construiesc încredere.",
    body:
      "Pacienții pot evalua clinicile prin ratinguri și recenzii de la 1 la 5 stele. Feedbackul oferă viitorilor pacienți o perspectivă asupra experiențelor altora și contribuie la o prezență online mai transparentă.",
  },
  {
    title: "Profiluri verificate",
    subtitle: "Mai multă transparență. Mai multă încredere.",
    body:
      "Clinicile și laboratoarele pot trece printr-un proces de verificare bazat pe documente oficiale. După validare, profilul primește badge-ul Verificat, iar documentele transmise rămân accesibile exclusiv administratorilor autorizați.",
  },
  {
    title: "Prezență & notificări",
    subtitle: "Rămâi conectat la conversațiile și oportunitățile importante.",
    body:
      "Vezi disponibilitatea online a utilizatorilor și primește notificări pentru mesaje, recenzii și colaborări. Astfel, interacțiunile importante rămân aproape, chiar și atunci când nu ești activ în aplicație.",
  },
  {
    title: "Siguranță & GDPR",
    subtitle: "Un spațiu digital construit cu respect pentru datele tale.",
    body:
      "Funcțiile de blocare și raportare oferă control asupra interacțiunilor, iar conținutul raportat poate fi analizat prin moderare. Utilizatorii își pot solicita datele și își pot șterge definitiv contul din setări, conform politicilor de protecție a datelor.",
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
    a: "Primești email de la DentVeerse (dentveerse@gmail.com), linkul deschide dentveerse.com/auth/reset-password, setezi parola nouă, apoi revii în aplicația DentVeerse.",
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
