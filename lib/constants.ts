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
  statsFooterLine1: "O comunitate dentară, într-un singur loc",
  statsFooterLine2: "Pacienți, clinici, medici și laboratoare — conectați.",
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
    headline: "Un feed pentru comunitatea dentară.",
    body:
      "Vezi lucrări, noutăți și postări publicate de clinici și laboratoare. Apreciază, comentează sau salvează conținutul care îți atrage atenția și rămâi conectat la ceea ce se întâmplă în rețea.",
  },
  {
    id: "descopera",
    label: "Descoperă",
    headline: "Găsește oamenii și locurile potrivite pentru tine.",
    body:
      "Caută clinici, medici și laboratoare după locație, specializare și alte criterii relevante. Explorează profilurile direct de pe hartă, descoperă portofolii și servicii și găsește mai ușor profesioniștii cu care vrei să intri în contact.",
  },
  {
    id: "colaborari",
    label: "Colaborări",
    headline: "Găsește partenerii potriviți pentru următorul proiect.",
    body:
      "Clinicile și laboratoarele pot publica și descoperi oportunități de colaborare, își pot exprima interesul și pot continua discuția direct prin mesagerie. Un spațiu dedicat colaborărilor profesionale, construit pentru relații B2B în stomatologie.",
  },
  {
    id: "mesaje",
    label: "Mesaje",
    headline: "Vorbește direct cu oamenii din rețeaua DentVeerse.",
    body:
      "Contactează clinici, pacienți și parteneri profesionali într-un singur loc. Trimite mesaje, fotografii și fișiere atunci când ai nevoie să explici mai clar o situație sau să discuți detaliile unei colaborări.",
  },
  {
    id: "notificari",
    label: "Notificări",
    headline: "Rămâi la curent cu ceea ce contează.",
    body:
      "Primește notificări atunci când cineva îți scrie, interacționează cu profilul sau conținutul tău, îți lasă o recenzie sau apare o nouă oportunitate de colaborare.",
  },
];

export const AUDIENCES = [
  {
    id: "pacienti",
    label: "Pacienți",
    kicker: "Cauți un dentist de încredere?",
    headline: "Descoperă clinici și medici înainte să faci o alegere.",
    body:
      "Nu te limita la prima clinică pe care o găsești. Descoperă clinici și medici din apropierea ta, caută după specializare, verifică profilurile, portofoliile și recenziile pacienților, apoi păstrează-i pe cei care îți inspiră încredere.",
    pointsLead: "Tot ce ai nevoie pentru a găsi mai ușor locul potrivit pentru tine.",
    points: [
      "Hartă & căutare — găsește clinici, medici și laboratoare după locație și specializare.",
      "Profiluri & portofolii — vezi serviciile, echipa și lucrările prezentate de fiecare clinică.",
      "Recenzii reale — descoperă experiențele pacienților și ratingul clinicilor.",
      "Follow & favorite — urmărește clinicile care te interesează și salvează-le pentru mai târziu.",
      "Mesaje directe — contactează o clinică direct din aplicație și trimite inclusiv fotografii atunci când ai nevoie.",
    ],
  },
  {
    id: "clinici",
    label: "Clinici",
    kicker: "Cabinet sau clinică stomatologică",
    headline: "Un profil care arată ce faceți și un loc în care puteți crește.",
    body:
      "Prezintă-ți clinica, echipa și serviciile într-un profil profesional, arată-ți lucrările printr-un portofoliu și rămâi conectat cu pacienții și profesioniștii din domeniu. De la vizibilitate până la colaborări, totul este într-un singur loc.",
    points: [
      "Profil profesional — locație pe hartă, echipă, servicii, program și informații despre clinică.",
      "Portofoliu — prezintă lucrări foto și video și construiește o imagine profesională a clinicii.",
      "Încredere & vizibilitate — primește recenzii de la pacienți și afișează badge-ul Verificat.",
      "Colaborări — găsește laboratoare și alte oportunități prin „Open for Collaboration” și Opportunities.",
    ],
  },
  {
    id: "laboratoare",
    label: "Laboratoare",
    kicker: "Laborator dentar",
    headline: "Arată ce poate face laboratorul tău. Găsește clinicile potrivite pentru colaborare.",
    body:
      "Construiește un profil profesional în care să prezinți experiența, echipa, serviciile și lucrările laboratorului. Fă-ți portofoliul vizibil pentru clinici, publică proiecte și noutăți și intră în contact direct cu profesioniștii cu care vrei să lucrezi.",
    points: [
      "Profil profesional — prezintă experiența laboratorului, echipa, serviciile și zona în care colaborați.",
      "Portofoliu tehnic — organizează și prezintă lucrările pe categorii, de la zirconiu și CAD/CAM până la proteze și alte servicii.",
      "Colaborări B2B — activează „Open for Collaboration” și descoperă oportunități de colaborare cu clinici.",
      "Mesagerie directă — discută cu clinicile într-un spațiu dedicat colaborărilor profesionale.",
      "Feed profesional — publică lucrări, noutăți și informații despre laborator și rămâi conectat cu comunitatea dentară.",
      "Profil verificat — după verificarea documentelor necesare, laboratorul poate primi badge-ul Verificat.",
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
    {
      step: "1",
      title: "Descarcă DentVeerse",
      body: "Instalează aplicația și creează-ți contul în câteva momente.",
    },
    {
      step: "2",
      title: "Creează-ți profilul",
      body: "Alege contul de pacient și pregătește-te să descoperi rețeaua dentară.",
    },
    {
      step: "3",
      title: "Găsește ce cauți",
      body: "Explorează clinici și medici pe hartă, folosește filtrele și descoperă servicii, portofolii și recenzii.",
    },
    {
      step: "4",
      title: "Conectează-te",
      body: "Urmărește și salvează clinicile care te interesează sau contactează-le direct prin mesagerie.",
    },
  ],
  clinici: [
    {
      step: "1",
      title: "Creează profilul clinicii",
      body: "Deschide-ți contul și completează profilul cu informațiile, echipa, serviciile și locația clinicii.",
    },
    {
      step: "2",
      title: "Obține verificarea",
      body: "Trimite documentele necesare pentru verificare și afișează badge-ul Verificat pe profil după confirmare.",
    },
    {
      step: "3",
      title: "Prezintă-ți clinica",
      body: "Publică lucrări și noutăți, construiește-ți portofoliul și fă-ți serviciile vizibile pentru pacienții din rețea.",
    },
    {
      step: "4",
      title: "Construiește colaborări",
      body: "Descoperă laboratoare, răspunde oportunităților de colaborare și discută direct cu potențialii parteneri.",
    },
  ],
  laboratoare: [
    {
      step: "1",
      title: "Cont Laborator",
      body: "Profil tehnic cu zonă de colaborare și servicii lab.",
    },
    {
      step: "2",
      title: "Portofoliu",
      body: "Media organizată pe categorii — element central al profilului.",
    },
    {
      step: "3",
      title: "Disponibil",
      body: "„Open for Collaboration” + răspuns la Opportunities.",
    },
    {
      step: "4",
      title: "Mesaje B2B",
      body: "Chat direct cu clinicile după accept sau contact.",
    },
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

export const TRUST = {
  title: "Mai multă încredere în fiecare conexiune.",
  intro:
    "DentVeerse este construită pentru o comunitate profesională în care oamenii și organizațiile pot fi identificați și verificați. Profilurile eligibile pot primi badge-ul Verificat după verificarea documentelor necesare.",
  items: [
    {
      title: "Verificare reală",
      body: "Clinicile și laboratoarele trec printr-un proces de verificare înainte de a primi badge-ul Verificat. Documentele necesare sunt analizate de echipa platformei și nu sunt afișate public.",
    },
    {
      title: "Datele tale rămân private",
      body: "Informațiile și documentele furnizate pentru verificare sunt păstrate private. DentVeerse oferă, de asemenea, instrumente pentru gestionarea, exportul și ștergerea datelor personale.",
    },
    {
      title: "O platformă construită pentru oameni reali",
      body: "Conținutul și interacțiunile pot fi raportate, iar utilizatorii pot bloca profilurile cu care nu doresc să interacționeze. Scopul este o rețea în care conexiunile profesionale și experiența utilizatorilor rămân în centrul platformei.",
    },
  ],
};

export const FOR = [
  {
    role: "Pacienți",
    body: "pentru cei care vor să descopere clinici și medici, să consulte portofolii și recenzii și să ia legătura direct cu clinicile.",
  },
  {
    role: "Clinici",
    body: "pentru cabinete și clinici care vor să-și prezinte echipa, serviciile și lucrările și să construiască relații cu pacienții și laboratoarele.",
  },
  {
    role: "Laboratoare",
    body: "pentru laboratoare care vor să-și prezinte portofoliul și să descopere noi oportunități de colaborare cu clinicile.",
  },
];

export const NOT_FOR_SUMMARY =
  "DentVeerse nu este un sistem de CRM, facturare sau contabilitate și nu înlocuiește software-ul intern al unei clinici. Platforma nu este destinată gestionării dosarelor medicale sau stocării fișelor pacienților.";
