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
    name: "Rev. Dr. Apo. Fond. YONGA BAKALAG",
    role: "Fondateur et enseignant principal",
    title: "Vision, fondements bibliques et gouvernance du ministere",
    bio: "Serviteur de Dieu engage dans la formation, il porte une vision de fondation, de mission et d'envoi afin de preparer des disciples solides pour les nations.",
    competencies: ["Leadership chretien", "Vision strategique", "Theologie biblique", "Formation de formateurs"],
    modules: ["Fondements de la Foi Chretienne", "Dons & Appels"],
    languages: ["Francais", "English"],
    image: bakalag,
  },
  {
    name: "Pasteur Daniel Mvondo",
    role: "Enseignant principal",
    title: "Fondements bibliques et discipulat",
    bio: "Formateur engage dans la transmission d'une foi solide, il accompagne les etudiants vers une vie chretienne mature et missionnaire.",
    competencies: ["Theologie biblique", "Discipulat", "Predication", "Accompagnement pastoral"],
    modules: ["Fondements de la Foi Chretienne", "Formation au Discipulat"],
    languages: ["Francais", "English"],
  },
  {
    name: "Rev. Mireille Ngo",
    role: "Enseignante",
    title: "Restauration et vie spirituelle",
    bio: "Specialisee dans l'accompagnement spirituel, elle aide les etudiants a integrer la guerison interieure et la croissance du caractere.",
    competencies: ["Restauration", "Priere", "Relation d'aide", "Leadership feminin"],
    modules: ["Restauration & Renouvellement", "Mission, Priere & Delivrance"],
    languages: ["Francais", "English"],
  },
  {
    name: "Apotre Samuel Fokou",
    role: "Enseignant",
    title: "Mission et evangelisation",
    bio: "Passionne par l'annonce de l'Evangile, il forme des equipes capables de servir efficacement sur le terrain local et international.",
    competencies: ["Evangelisation", "Mission interculturelle", "Implantation", "Formation d'equipes"],
    modules: ["Mission, Priere & Delivrance", "Formation Finale du Chretien"],
    languages: ["Francais", "English"],
  },
  {
    name: "Dr Ruth Ewane",
    role: "Enseignante",
    title: "Doctrine et methodes d'etude biblique",
    bio: "Elle aide les etudiants a lire, comprendre et enseigner les Ecritures avec clarte, fidelite et application pratique.",
    competencies: ["Hermeneutique", "Exegese", "Doctrine", "Pedagogie biblique"],
    modules: ["Fondements de la Foi Chretienne", "Nouvelle Naissance"],
    languages: ["Francais", "English"],
  },
  {
    name: "Pasteur Joel Tchoumi",
    role: "Enseignant",
    title: "Appel, dons et ministere",
    bio: "Il accompagne les etudiants dans l'identification de leurs dons et dans la mise en oeuvre concrete de leur appel.",
    competencies: ["Discernement de l'appel", "Dons spirituels", "Coaching ministeriel", "Mentorat"],
    modules: ["Dons & Appels", "Formation Finale du Chretien"],
    languages: ["Francais", "English"],
  },
  {
    name: "Pasteure Carine Bella",
    role: "Enseignante",
    title: "Formation du caractere et vie de priere",
    bio: "Avec une approche pratique, elle guide les etudiants vers la discipline spirituelle, la saintete et la constance dans la priere.",
    competencies: ["Vie de priere", "Intercession", "Caractere christique", "Ethique chretienne"],
    modules: ["Formation au Discipulat", "Mission, Priere & Delivrance"],
    languages: ["Francais", "English"],
  },
  {
    name: "Evangeliste Lionel Nanga",
    role: "Enseignant",
    title: "Strategies d'evangelisation",
    bio: "Il equipe les apprenants avec des methodes simples et puissantes pour temoigner, annoncer la Bonne Nouvelle et faire des disciples.",
    competencies: ["Temoignage personnel", "Communication biblique", "Suivi des nouveaux", "Mobilisation"],
    modules: ["Nouvelle Naissance", "Formation Finale du Chretien"],
    languages: ["Francais", "English"],
  },
];

export const Route = createFileRoute("/teachers")({
  head: () => ({
    meta: [
      { title: "Profils des enseignants â€” International Foundation and Mission School" },
      { name: "description", content: "Decouvrez les enseignants de International Foundation and Mission School et leurs domaines de competence." },
      { property: "og:title", content: "Profils des enseignants" },
      { property: "og:description", content: "Une equipe de formateurs au service de la formation biblique et missionnaire." },
      { property: "og:url", content: "/teachers" },
    ],
    links: [{ rel: "canonical", href: "/teachers" }],
  }),
  component: TeachersPage,
});

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function TeachersPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-cover-dark bg-world-map text-[#10284d] py-20 md:py-28">
        <img src={coverAll} alt="" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/12 via-white/8 to-white/16" />
        <div className="relative container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[#10284d] font-semibold">Equipe pedagogique</p>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl font-semibold">Profils des enseignants</h1>
          <p className="mt-6 text-[#10284d]/90">
            Chaque module dure 1 mois et est porte par 2 enseignants pour garantir un suivi equilibre entre fondements, pratique et mission.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">Introduction</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold">Une equipe complementaire au service de la formation</h2>
          <p className="mt-4 text-muted-foreground">
            Cette page presente les profils des enseignants qui portent les modules de la formation. Chaque intervenant apporte une sensibilite particuliere
            afin d'unir fondements bibliques, experience pratique du ministere et accompagnement spirituel des etudiants.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {teachers.map((teacher) => (
            <Card key={teacher.name} className="overflow-hidden border-gold/30 bg-gradient-to-b from-card to-accent/25 shadow-soft">
              <div className="border-b border-gold/20 bg-gradient-to-r from-primary/10 to-gold/10 p-6">
                <div className="flex items-start gap-4">
                  {teacher.image ? (
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="h-16 w-16 rounded-full border-2 border-gold/60 bg-card object-cover object-top shadow-soft"
                    />
                  ) : (
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold/60 bg-gradient-hero text-primary-foreground font-serif text-lg font-bold">
                      {initials(teacher.name)}
                    </div>
                  )}
                  <div>
                    <p className="inline-flex rounded-sm bg-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                      {teacher.role}
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold leading-tight">{teacher.name}</h2>
                    <p className="mt-1 text-sm text-muted-foreground">{teacher.title}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-gold font-semibold">Presentation</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{teacher.bio}</p>
                </div>

                <div>
                  <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-gold font-semibold">
                    <BookCheck className="h-3.5 w-3.5" />
                    Competences cles
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {teacher.competencies.map((competency) => (
                      <span key={competency} className="rounded-md border border-border/60 bg-background/75 px-2.5 py-1 text-xs text-foreground">
                        {competency}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-gold font-semibold">
                    <UserRound className="h-3.5 w-3.5" />
                    Modules portes
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {teacher.modules.map((moduleName) => (
                      <span key={moduleName} className="rounded-md border border-gold/35 bg-gold/10 px-2.5 py-1 text-xs text-foreground">
                        {moduleName}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-gold font-semibold">
                    <Languages className="h-3.5 w-3.5" />
                    Langues
                  </p>
                  <div className="mt-3 flex gap-2">
                    {teacher.languages.map((language) => (
                      <span key={language} className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">
                        {language}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
