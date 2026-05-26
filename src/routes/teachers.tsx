import { createFileRoute } from "@tanstack/react-router";
import { BookCheck, Languages, UserRound } from "lucide-react";
import { Card } from "@/components/ui/card";
import bakalag from "@/assets/bakalag.png";
import coverAll from "@/assets/cover-all.jpg";

type Teacher = {
  name: string;
  role: string;
  title: string;
  bio: string;
  competencies: string[];
  modules: string[];
  languages: string[];
  image?: string;
};

const teachers: Teacher[] = [
  {
    name: "Rév. Dr. Apo. YONGA BAKALAG simon françois",
    role: "Fondateur et enseignant principal",
    title: "Vision, fondements bibliques et gouvernance du ministère",
    bio: "Serviteur de Dieu engagé dans la formation, il porte une vision de fondation, de mission et d'envoi afin de préparer des disciples solides pour les nations.",
    competencies: ["Leadership chrétien", "Vision stratégique", "Théologie biblique", "Formation de formateurs"],
    modules: ["Fondements de la Foi Chrétienne", "Dons & Appels"],
    languages: ["Français", "English"],
    image: bakalag,
  },
  {
    name: "Pasteur Daniel Mvondo",
    role: "Enseignant principal",
    title: "Fondements bibliques et discipulat",
    bio: "Formateur engagé dans la transmission d'une foi solide, il accompagne les étudiants vers une vie chrétienne mature et missionnaire.",
    competencies: ["Théologie biblique", "Discipulat", "Prédication", "Accompagnement pastoral"],
    modules: ["Fondements de la Foi Chrétienne", "Formation au Discipulat"],
    languages: ["Français", "English"],
  },
  {
    name: "Rév. Mireille Ngo",
    role: "Enseignante",
    title: "Restauration et vie spirituelle",
    bio: "Spécialisée dans l'accompagnement spirituel, elle aide les étudiants à intégrer la guérison intérieure et la croissance du caractère.",
    competencies: ["Restauration", "Prière", "Relation d'aide", "Leadership féminin"],
    modules: ["Restauration & Renouvellement", "Mission, Prière & Délivrance"],
    languages: ["Français", "English"],
  },
  {
    name: "Apôtre Samuel Fokou",
    role: "Enseignant",
    title: "Mission et évangélisation",
    bio: "Passionné par l'annonce de l'Évangile, il forme des équipes capables de servir efficacement sur le terrain local et international.",
    competencies: ["Évangélisation", "Mission interculturelle", "Implantation", "Formation d'équipes"],
    modules: ["Mission, Prière & Délivrance", "Consécration & Envoi"],
    languages: ["Français", "English"],
  },
  {
    name: "Dr Ruth Ewane",
    role: "Enseignante",
    title: "Doctrine et méthodes d'étude biblique",
    bio: "Elle aide les étudiants à lire, comprendre et enseigner les Écritures avec clarté, fidélité et application pratique.",
    competencies: ["Herméneutique", "Exégèse", "Doctrine", "Pédagogie biblique"],
    modules: ["Fondements de la Foi Chrétienne", "Nouvelle Naissance"],
    languages: ["Français", "English"],
  },
  {
    name: "Pasteur Joel Tchoumi",
    role: "Enseignant",
    title: "Appel, dons et ministère",
    bio: "Il accompagne les étudiants dans l'identification de leurs dons et dans la mise en œuvre concrète de leur appel.",
    competencies: ["Discernement de l'appel", "Dons spirituels", "Coaching ministériel", "Mentorat"],
    modules: ["Dons & Appels", "Vie d'Église & Ministère"],
    languages: ["Français", "English"],
  },
  {
    name: "Pasteure Carine Bella",
    role: "Enseignante",
    title: "Formation du caractère et vie de prière",
    bio: "Avec une approche pratique, elle guide les étudiants vers la discipline spirituelle, la sainteté et la constance dans la prière.",
    competencies: ["Vie de prière", "Intercession", "Caractère christique", "Éthique chrétienne"],
    modules: ["Formation au Discipulat", "Mission, Prière & Délivrance"],
    languages: ["Français", "English"],
  },
  {
    name: "Évangéliste Lionel Nanga",
    role: "Enseignant",
    title: "Stratégies d'évangélisation",
    bio: "Il équipe les apprenants avec des méthodes simples et puissantes pour témoigner, annoncer la Bonne Nouvelle et faire des disciples.",
    competencies: ["Témoignage personnel", "Communication biblique", "Suivi des nouveaux", "Mobilisation"],
    modules: ["Nouvelle Naissance", "Consécration & Envoi"],
    languages: ["Français", "English"],
  },
];

export const Route = createFileRoute("/teachers")({
  head: () => ({
    meta: [
      { title: "Profils des enseignants — International Foundation and Mission School" },
      { name: "description", content: "Découvrez les enseignants de International Foundation and Mission School et leurs domaines de compétence." },
      { property: "og:title", content: "Profils des enseignants" },
      { property: "og:description", content: "Une équipe de formateurs au service de la formation biblique et missionnaire." },
      { property: "og:url", content: "/teachers" },
    ],
    links: [{ rel: "canonical", href: "/teachers" }],
  }),
  component: TeachersPage,
});

function initials(name: string) {
  return name.split(" ").filter(Boolean).slice(0, 2).map((part) => part[0]?.toUpperCase() ?? "").join("");
}

function TeachersPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-cover-dark bg-world-map py-20 text-[#10284d] md:py-28">
        <img src={coverAll} alt="" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1280} />
        <div className="absolute inset-0 bg-[#e6d3b7]/34" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f2e7d6]/18 via-[#ead8bf]/10 to-white/12" />
        <div className="relative container mx-auto max-w-4xl px-4 text-center md:px-6"><p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#10284d]">Équipe pédagogique</p><h1 className="mt-4 font-serif text-4xl font-semibold md:text-6xl">Profils des enseignants</h1><p className="mt-6 text-[#10284d]/90">Chaque module dure 1 mois et est porté par 2 enseignants pour garantir un suivi équilibré entre fondements, pratique et mission.</p></div>
      </section>

      <section className="container mx-auto px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto mb-12 max-w-3xl text-center"><p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Introduction</p><h2 className="mt-3 text-3xl font-semibold md:text-4xl">Une équipe complémentaire au service de la formation</h2><p className="mt-4 text-muted-foreground">Cette page présente les profils des enseignants qui portent les modules de la formation. Chaque intervenant apporte une sensibilité particulière afin d'unir fondements bibliques, expérience pratique du ministère et accompagnement spirituel des étudiants.</p></div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {teachers.map((teacher) => (
            <Card key={teacher.name} className="overflow-hidden border-gold/30 bg-gradient-to-b from-card to-accent/25 shadow-soft">
              <div className="border-b border-gold/20 bg-gradient-to-r from-primary/10 to-gold/10 p-6">
                <div className="flex items-start gap-4">
                  {teacher.image ? <img src={teacher.image} alt={teacher.name} className="h-16 w-16 rounded-full border-2 border-gold/60 bg-card object-cover object-top shadow-soft" /> : <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold/60 bg-gradient-hero font-serif text-lg font-bold text-primary-foreground">{initials(teacher.name)}</div>}
                  <div><p className="inline-flex rounded-sm bg-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">{teacher.role}</p><h2 className="mt-3 text-2xl font-semibold leading-tight">{teacher.name}</h2><p className="mt-1 text-sm text-muted-foreground">{teacher.title}</p></div>
                </div>
              </div>
              <div className="space-y-6 p-6">
                <div><p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">Présentation</p><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{teacher.bio}</p></div>
                <div><p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold"><BookCheck className="h-3.5 w-3.5" />Compétences clés</p><div className="mt-3 flex flex-wrap gap-2">{teacher.competencies.map((competency) => <span key={competency} className="rounded-md border border-border/60 bg-background/75 px-2.5 py-1 text-xs text-foreground">{competency}</span>)}</div></div>
                <div><p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold"><UserRound className="h-3.5 w-3.5" />Modules portés</p><div className="mt-3 flex flex-wrap gap-2">{teacher.modules.map((moduleName) => <span key={moduleName} className="rounded-md border border-gold/35 bg-gold/10 px-2.5 py-1 text-xs text-foreground">{moduleName}</span>)}</div></div>
                <div><p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold"><Languages className="h-3.5 w-3.5" />Langues</p><div className="mt-3 flex gap-2">{teacher.languages.map((language) => <span key={language} className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">{language}</span>)}</div></div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}

