import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Heart, Users, Compass } from "lucide-react";
import community from "@/assets/community.jpg";
import library from "@/assets/library.jpg";
import prayer from "@/assets/prayer-family.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "À propos — Foundation and Mission School" },
      { name: "description", content: "Vision, mission et valeurs de Foundation and Mission School « Jesus For All Nations »." },
      { property: "og:title", content: "À propos — Foundation and Mission School" },
      { property: "og:description", content: "Une école biblique au service de la mission auprès de toutes les nations." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="bg-gradient-hero bg-world-map text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">À propos</p>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl font-semibold">Former. Équiper. Envoyer.</h1>
          <p className="mt-6 text-primary-foreground/85">
            Foundation and Mission School est une école biblique née d'un appel : préparer une génération
            de disciples solidement ancrés dans la Parole de Dieu, animés par l'amour de Christ
            et prêts à porter l'Évangile vers toutes les nations.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">Notre vision</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold">Une armée de serviteurs pour toutes les nations</h2>
            <p className="mt-5 text-muted-foreground">
              Nous croyons que chaque nation doit entendre l'Évangile par des serviteurs formés, intègres
              et passionnés. Notre vision est de lever des ouvriers consacrés, capables de planter des
              communautés vivantes, de discipliner et de transformer leur génération.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">Notre mission</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold">Une école, sept modules, un envoi</h2>
            <p className="mt-5 text-muted-foreground">
              Nous offrons une formation structurée d'un an, mêlant enseignement biblique,
              pratique pastorale et mission. Chaque module construit une dimension du serviteur
              chrétien : fondation, restauration, naissance, discipulat, dons, prière, envoi.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-soft py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">Nos valeurs</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-semibold">Ce qui nous guide</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Target, title: "Vérité", text: "La Parole de Dieu comme autorité suprême." },
              { icon: Heart, title: "Consécration", text: "Une vie entièrement donnée à Christ." },
              { icon: Users, title: "Communauté", text: "Marcher ensemble, se former mutuellement." },
              { icon: Compass, title: "Mission", text: "Aller vers ceux qui ne connaissent pas Jésus." },
            ].map((v) => (
              <Card key={v.title} className="p-7 border-border/60 hover:border-gold/40 hover:shadow-soft transition-all">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-hero text-primary-foreground">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-20 text-center max-w-2xl">
        <blockquote className="font-serif text-2xl md:text-3xl italic text-foreground">
          « Allez, faites de toutes les nations des disciples, les baptisant au nom du Père,
          du Fils et du Saint-Esprit. »
        </blockquote>
        <p className="mt-4 text-sm text-gold uppercase tracking-widest">Matthieu 28 : 19</p>
        <Button asChild size="lg" className="mt-10 bg-gradient-gold text-gold-foreground hover:opacity-90 shadow-gold">
          <Link to="/register">Rejoindre la promotion 2026</Link>
        </Button>
      </section>
    </>
  );
}
