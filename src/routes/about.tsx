import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Heart, Users, Compass, CheckCircle2 } from "lucide-react";
import community from "@/assets/community.jpg";
import library from "@/assets/library.jpg";
import prayer from "@/assets/prayer-family.jpg";
import flyerEvangile from "@/assets/flyer-evangile.jpg";
import coverAll from "@/assets/cover-all.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "À propos — International Foundation and Mission School" },
      { name: "description", content: "Vision, mission et valeurs de International Foundation and Mission School « Jesus For All Nations »." },
      { property: "og:title", content: "À propos — International Foundation and Mission School" },
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
      <section className="relative overflow-hidden bg-gradient-cover-dark bg-world-map text-[#10284d] py-20 md:py-28">
        <img src={coverAll} alt="" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/12 via-white/8 to-white/16" />
        <div className="relative container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[#10284d] font-semibold">À propos</p>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl font-semibold">Former. Équiper. Envoyer.</h1>
          <p className="mt-6 text-[#10284d]/90">
            International Foundation and Mission School est une école biblique née d'un appel : préparer une génération
            de disciples solidement ancrés dans la Parole de Dieu, animés par l'amour de Christ
            et prêts à porter l'Évangile vers toutes les nations.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <img src={library} alt="Étudiants au travail" className="rounded-2xl shadow-elegant w-full object-cover aspect-[4/3]" />
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">Notre vision</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold">Une armée de serviteurs pour toutes les nations</h2>
            <p className="mt-5 text-muted-foreground">
              Nous croyons que chaque nation doit entendre l'Évangile par des serviteurs formés, intègres
              et passionnés. Notre vision est de lever des ouvriers consacrés, capables de planter des
              communautés vivantes, de discipliner et de transformer leur génération.
            </p>
          </div>
        </div>
        <div className="grid gap-12 lg:grid-cols-2 items-center mt-20">
          <div className="order-2 lg:order-1">
            <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">Notre mission</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold">Une école, sept modules, un envoi</h2>
            <p className="mt-5 text-muted-foreground">
              Nous offrons une formation structurée d'un an, mêlant enseignement biblique,
              pratique pastorale et mission. Chaque module construit une dimension du serviteur
              chrétien : fondation, restauration, naissance, discipulat, dons, prière, envoi.
            </p>
          </div>
          <img src={prayer} alt="Prière en famille" className="rounded-2xl shadow-elegant w-full object-cover aspect-[4/3] order-1 lg:order-2" />
        </div>
      </section>

      <section className="bg-gradient-soft py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">Impact terrain</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold">L'Évangile à chaque porte, un espoir pour tous</h2>
              <p className="mt-4 text-muted-foreground">
                Nous apportons la Parole de Dieu là où les cœurs sont ouverts. Cette vision
                nous pousse à aller vers les familles, écouter avec compassion et faire des disciples
                qui impactent les nations.
              </p>
              <p className="mt-3 text-sm text-gold font-semibold uppercase tracking-wider">Matthieu 28:19</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Aller vers les âmes avec amour",
                  "Partager l'Évangile, la bonne nouvelle",
                  "Écouter avec compassion",
                  "Encourager et prier pour les familles",
                  "Faire des disciples pour impacter les nations",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-lg border border-border/70 bg-card/70 px-4 py-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <p className="text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <img
              src={flyerEvangile}
              alt="Flyer évangélisation International Foundation and Mission School"
              className="w-full rounded-2xl border border-border/70 shadow-elegant object-cover"
            />
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

      <section className="relative overflow-hidden py-24">
        <img src={community} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        <div className="container relative mx-auto px-4 md:px-6 text-center max-w-2xl">
          <blockquote className="font-serif text-2xl md:text-3xl italic text-foreground">
            « Allez, faites de toutes les nations des disciples, les baptisant au nom du Père,
            du Fils et du Saint-Esprit. »
          </blockquote>
          <p className="mt-4 text-sm text-gold uppercase tracking-widest">Matthieu 28 : 19</p>
          <Button asChild size="lg" className="mt-10 bg-gradient-gold text-gold-foreground hover:opacity-90 shadow-gold">
            <Link to="/register">Rejoindre la promotion 2026</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
