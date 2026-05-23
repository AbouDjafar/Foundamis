import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Wifi, Check, ArrowRight } from "lucide-react";
import { FEES, fmtXAF, fmtUSD } from "@/lib/program-data";
import studyGroup from "@/assets/study-group.jpg";
import studentsLaptop from "@/assets/students-laptop.jpg";
import bibleGrass from "@/assets/bible-grass.jpg";
import coverAll from "@/assets/cover-all.jpg";

export const Route = createFileRoute("/modalities")({
  head: () => ({
    meta: [
      { title: "Modalités & Tarifs — Foundation and Mission School International" },
      { name: "description", content: "Formation présentielle ou en ligne. Inscription 25 000 XAF (~42 USD), formation 75 000 XAF (~125 USD). Total 100 000 XAF (~167 USD)." },
      { property: "og:title", content: "Modalités & Tarifs" },
      { property: "og:description", content: "Présentiel ou en ligne — tarifs détaillés." },
      { property: "og:url", content: "/modalities" },
    ],
    links: [{ rel: "canonical", href: "/modalities" }],
  }),
  component: Modalities,
});

function Modalities() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-cover-dark bg-world-map text-[#10284d] py-20 md:py-28">
        <img src={coverAll} alt="" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/12 via-white/8 to-white/16" />
        <div className="relative container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[#10284d] font-semibold">Modalités & Tarifs</p>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl font-semibold">Choisissez votre format</h1>
          <p className="mt-6 text-[#10284d]/90">
            Présentiel ou en ligne — même programme, mêmes supports, même certificat.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { icon: Building2, image: studyGroup, title: "Présentiel", text: "Sur place, en communion avec la promotion. Échanges directs, pratiques en groupe, prière collective.", features: ["Cours dispensés en salle", "Pratique pastorale en groupe", "Communion fraternelle", "Évaluations sur place"] },
            { icon: Wifi, image: studentsLaptop, title: "En ligne", text: "Suivez la formation depuis n'importe où dans le monde. Cours en direct + replays + supports numériques.", features: ["Cours en direct et replay", "Supports numériques complets", "Suivi pédagogique à distance", "Évaluations en ligne"] },
          ].map((f) => (
            <Card key={f.title} className="overflow-hidden border-border/60 hover:border-gold/40 hover:shadow-elegant transition-all">
              <div className="relative h-48 overflow-hidden">
                <img src={f.image} alt={f.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute bottom-4 left-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-hero text-[#10284d] shadow-gold">
                  <f.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="p-8 pt-6">
                <h2 className="font-serif text-2xl font-semibold">{f.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{f.text}</p>
                <ul className="mt-6 space-y-2">
                  {f.features.map((t) => (
                    <li key={t} className="flex gap-3 text-sm"><Check className="h-5 w-5 text-gold shrink-0" /><span>{t}</span></li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </section>


      <section className="relative bg-gradient-soft py-20 overflow-hidden">
        <img src={bibleGrass} alt="" className="absolute inset-0 h-full w-full object-cover opacity-10" />
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">Tarifs</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-semibold">Une formation accessible</h2>
            <p className="mt-4 text-muted-foreground">
              Les tarifs ci-dessous s'appliquent aussi bien au présentiel qu'à la formation en ligne.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Card className="p-7 border-border/60">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Inscription</p>
              <p className="mt-4 font-serif text-3xl font-bold text-gold">{fmtXAF(FEES.registration.xaf)}</p>
              <p className="mt-1 text-sm text-muted-foreground">≈ {fmtUSD(FEES.registration.usd)}</p>
              <p className="mt-4 text-xs text-muted-foreground">À régler à la confirmation de l'inscription.</p>
            </Card>
            <Card className="p-7 border-border/60">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Formation</p>
              <p className="mt-4 font-serif text-3xl font-bold text-gold">{fmtXAF(FEES.training.xaf)}</p>
              <p className="mt-1 text-sm text-muted-foreground">≈ {fmtUSD(FEES.training.usd)}</p>
              <p className="mt-4 text-xs text-muted-foreground">Couvre les 7 modules sur 12 mois.</p>
            </Card>
            <Card className="p-7 border-gold/40 bg-gradient-to-br from-card to-accent/30 shadow-elegant">
              <p className="text-xs uppercase tracking-widest text-gold">Total</p>
              <p className="mt-4 font-serif text-3xl font-bold text-gold">{fmtXAF(FEES.total.xaf)}</p>
              <p className="mt-1 text-sm text-muted-foreground">≈ {fmtUSD(FEES.total.usd)}</p>
              <p className="mt-4 text-xs text-muted-foreground">Échelonnement possible — nous contacter.</p>
            </Card>
          </div>

          <p className="mt-8 text-center text-xs text-muted-foreground">
            Taux de conversion indicatif : 1 USD ≈ {FEES.rate} XAF. Le montant en USD peut varier selon le taux du jour.
          </p>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-gradient-gold text-gold-foreground hover:opacity-90 shadow-gold">
              <Link to="/register">S'inscrire à la formation <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
