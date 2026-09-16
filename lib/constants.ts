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
    a: "Da. La lansare, DentVeerse va fi gratuit pentru toate tipurile de cont. În această etapă nu este disponibil un abonament PRO. Pentru a menține platforma sigură și echilibrată, anumite funcții pot avea limite tehnice privind volumul de conținut sau activitățile realizate.",
  },
  {
    q: "Pot crea un cont direct pe site?",
    a: "Conturile DentVeerse sunt create și utilizate în aplicația mobilă, disponibilă pentru iOS și Android. Site-ul este dedicat prezentării platformei, informațiilor despre DentVeerse, documentației legale și proceselor de autentificare asociate contului.",
  },
  {
    q: "Cum îmi resetez parola?",
    a: "Dacă ai uitat parola, solicită resetarea acesteia din aplicație. Vei primi un email de la DentVeerse cu un link securizat, prin care îți poți seta o parolă nouă. După finalizare, te poți autentifica din nou în aplicație.",
  },
  {
    q: "Pot schimba tipul de cont după înregistrare?",
    a: "Tipul de cont — pacient, clinică sau laborator — este stabilit în momentul înregistrării și nu poate fi modificat ulterior. Alegerea este importantă deoarece determină experiența și funcțiile disponibile în platformă.",
  },
  {
    q: "Cum funcționează verificarea profilurilor?",
    a: "Verificarea este disponibilă pentru clinici și laboratoare și presupune verificarea unor documente relevante. Pentru clinici sunt solicitate, printre altele, CUI-ul, autorizația DSP și actul de identitate al reprezentantului. Pentru laboratoare, procesul include CUI-ul, certificatul tehnicianului responsabil și actul de identitate al reprezentantului. Documentele sunt accesibile doar administratorilor autorizați. În profilul public este afișat doar badge-ul Verificat.",
  },
  {
    q: "Pentru ce este construit DentVeerse?",
    a: "DentVeerse este construit pentru descoperire, prezență digitală, comunicare și colaborare în ecosistemul dentar. Nu înlocuiește sistemele de management ale clinicilor sau laboratoarelor și nu gestionează comenzi de laborator, facturare, contabilitate sau dosare medicale.",
  },
  {
    q: "Listele de followers și following sunt private?",
    a: "Nu. Listele de followers și following sunt publice. Acest lucru permite utilizatorilor să descopere mai ușor profesioniști, clinici și alte profiluri relevante din comunitatea DentVeerse.",
  },
  {
    q: "Ce se întâmplă când blochez un utilizator?",
    a: "Blocarea elimină interacțiunea dintre cele două conturi. Utilizatorul blocat nu va mai apărea în feed, rezultatele căutării sau pe hartă și nu va mai putea interacționa cu tine prin platformă.",
  },
  {
    q: "Cum sunt protejate datele mele?",
    a: "DentVeerse acordă o atenție deosebită protecției datelor și drepturilor utilizatorilor. Din aplicație poți solicita exportul datelor tale, iar ștergerea contului elimină datele personale conform politicii platformei. Recenziile asociate contului sunt, de asemenea, eliminate, iar ratingurile sunt recalculate. Pentru detalii despre prelucrarea datelor și drepturile tale, consultă Politica de confidențialitate (/confidentialitate).",
  },
  {
    q: "Când va fi disponibilă aplicația pe App Store și Google Play?",
    a: "DentVeerse se află în etapa beta. Disponibilitatea pe App Store și Google Play va fi anunțată pe măsură ce aplicația devine disponibilă în regiunea ta. Te poți înscrie pe lista de așteptare pentru a primi noutăți despre lansare.",
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
