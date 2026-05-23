export type Module = {
  id: string;
  number: string;
  title: string;
  code: string;
  period: string;
  duration: string;
  languages: string;
  courses: { code: string; title: string; dates: string }[];
  evaluation: string;
};

export const MODULES: Module[] = [
  {
    id: "fcsb",
    number: "01",
    title: "Fondements de la Foi Chrétienne",
    code: "FCSB",
    period: "Février 2026",
    duration: "1 mois",
    languages: "Français & Anglais",
    courses: [
      { code: "FCSB : C", title: "Christologie", dates: "04 Février" },
      { code: "FCSB : OS", title: "Œuvre du Salut", dates: "07 Février" },
      { code: "FCSB : BC", title: "Bases Chrétiennes", dates: "11 Février" },
      { code: "FCSB : HID", title: "Histoire et Identité", dates: "14 Février" },
      { code: "FCSB : R", title: "Repentance", dates: "18 Février" },
      { code: "Cas Pratiques", title: "Mise en situation", dates: "21 – 28 Février" },
    ],
    evaluation: "04 Mars 2026",
  },
  {
    id: "r",
    number: "02",
    title: "Restauration & Renouvellement",
    code: "R",
    period: "Mars – Avril 2026",
    duration: "1 mois",
    languages: "Français & Anglais",
    courses: [
      { code: "R : TSD", title: "Théologie du Saint-Esprit", dates: "07 – 11 Mars" },
      { code: "R : RCP", title: "Reconstruction du Cœur", dates: "14 – 18 Mars" },
      { code: "R : AP", title: "Autorité & Puissance", dates: "21 – 25 Mars" },
      { code: "R : RD", title: "Renouvellement par la Parole", dates: "27 – 28 Mars" },
      { code: "R : CE", title: "Croissance Évangélique", dates: "01 – 04 Avril" },
      { code: "R : RR", title: "Restauration Relationnelle", dates: "08 – 11 Avril" },
      { code: "R : TF", title: "Théologie de la Foi", dates: "15 – 18 Avril" },
      { code: "Cas Pratiques", title: "Mise en situation", dates: "22 – 29 Avril" },
    ],
    evaluation: "02 Mai 2026",
  },
  {
    id: "nn",
    number: "03",
    title: "Nouvelle Naissance",
    code: "NN",
    period: "Mai – Juin 2026",
    duration: "1 mois",
    languages: "Français & Anglais",
    courses: [
      { code: "NN : ON", title: "Origine de la Nouvelle Naissance", dates: "06 – 09 Mai" },
      { code: "NN : TE", title: "Transformation Évangélique", dates: "13 – 16 Mai" },
      { code: "NN : CM", title: "Caractère du Ministère", dates: "20 – 23 Mai" },
      { code: "NN : PDM", title: "Puissance de la Mission", dates: "27 – 30 Mai" },
      { code: "NN : ADCDA", title: "Appel & Disciple", dates: "03 – 06 Juin" },
      { code: "NN : P", title: "Prière", dates: "10 – 13 Juin" },
      { code: "NN : E", title: "Évangélisation", dates: "17 – 20 Juin" },
      { code: "NN : IL", title: "Intégration Locale", dates: "24 Juin" },
      { code: "Cas Pratiques", title: "Mise en situation", dates: "27 Juin – 04 Juillet" },
    ],
    evaluation: "08 Juillet 2026",
  },
  {
    id: "fd",
    number: "04",
    title: "Formation au Discipulat",
    code: "FD",
    period: "Juillet – Août 2026",
    duration: "1 mois",
    languages: "Français & Anglais",
    courses: [
      { code: "FD : CD", title: "Concept du Discipulat", dates: "11 – 15 Juillet" },
      { code: "FD : PD", title: "Pratique du Discipulat", dates: "18 – 22 Juillet" },
      { code: "FD : VS", title: "Vie Spirituelle", dates: "25 – 29 Juillet" },
      { code: "FD : D", title: "Disciple", dates: "01 – 05 Août" },
      { code: "FD : RC", title: "Relation Communautaire", dates: "08 – 12 Août" },
      { code: "FD : MA", title: "Maturité Apostolique", dates: "15 – 19 Août" },
      { code: "Cas Pratiques", title: "Mise en situation", dates: "22 – 29 Août" },
    ],
    evaluation: "02 Septembre 2026",
  },
  {
    id: "dda",
    number: "05",
    title: "Dons & Appels",
    code: "DDA",
    period: "Septembre – Octobre 2026",
    duration: "1 mois",
    languages: "Français & Anglais",
    courses: [
      { code: "DDA : AP", title: "Appel Pastoral", dates: "05 – 09 Septembre" },
      { code: "DDA : AS", title: "Appel & Service", dates: "12 – 19 Septembre" },
      { code: "DDA : CA", title: "Confirmation de l'Appel", dates: "23 Septembre – 10 Octobre" },
      { code: "Cas Pratiques", title: "Mise en situation", dates: "14 – 21 Octobre" },
    ],
    evaluation: "25 Octobre 2026",
  },
  {
    id: "mpd",
    number: "06",
    title: "Mission, Prière & Délivrance",
    code: "MPD",
    period: "Novembre 2026",
    duration: "1 mois",
    languages: "Français & Anglais",
    courses: [
      { code: "MPD : RAM", title: "Rôle de l'Armée Missionnaire", dates: "02 – 05 Novembre" },
      { code: "MPD : CE", title: "Combat Spirituel & Évangélisation", dates: "09 – 12 Novembre" },
      { code: "Cas Pratiques", title: "Mise en situation", dates: "16 – 23 Novembre" },
    ],
    evaluation: "26 Novembre 2026",
  },
  {
    id: "ffc",
    number: "07",
    title: "Formation Finale du Chrétien",
    code: "FFC",
    period: "Décembre 2026 – Janvier 2027",
    duration: "1 mois",
    languages: "Français & Anglais",
    courses: [
      { code: "FFC : T", title: "Théologie", dates: "02 Décembre" },
      { code: "FFC : JC", title: "Jésus-Christ", dates: "09 – 12 Décembre" },
      { code: "FFC : B", title: "Bible", dates: "16 – 19 Décembre" },
      { code: "FFC : S", title: "Spiritualité", dates: "23 – 26 Décembre" },
      { code: "FFC : SE", title: "Service & Église", dates: "30 Décembre – 02 Janvier" },
      { code: "FFC : AU", title: "Autorité", dates: "02 Janvier" },
      { code: "FFC : B", title: "Bénédiction", dates: "06 – 09 Janvier" },
      { code: "FFC : C", title: "Consécration", dates: "13 Janvier" },
      { code: "FFC : P", title: "Pastorat", dates: "16 Janvier" },
      { code: "FFC : E", title: "Envoi", dates: "20 Janvier" },
      { code: "Cas Pratiques", title: "Mise en situation", dates: "23 – 30 Janvier" },
    ],
    evaluation: "Fin Janvier 2027",
  },
];

// Tarifs
export const FEES = {
  registration: { xaf: 25000, usd: 42 },
  training: { xaf: 75000, usd: 125 },
  total: { xaf: 100000, usd: 167 },
  rate: 600, // 1 USD ≈ 600 XAF
};

export const fmtXAF = (n: number) => n.toLocaleString("fr-FR") + " XAF";
export const fmtUSD = (n: number) => "$" + n.toLocaleString("en-US");
