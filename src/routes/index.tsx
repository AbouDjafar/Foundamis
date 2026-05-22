import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Globe2, GraduationCap, HandHeart, Sparkles, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import coverAll from "@/assets/cover-all.jpg";
import worship from "@/assets/worship.jpg";
import pillarFoundation from "@/assets/pillar-foundation.jpg";
import pillarDiscipulat from "@/assets/pillar-discipulat.jpg";
import pillarMission from "@/assets/pillar-mission.jpg";
import pillarEvangelisation from "@/assets/pillar-evangelisation.jpg";
// community image used elsewhere; keep import minimal
import handsLight from "@/assets/hands-light.jpg";
import logo from "@/assets/logo.jpg";
import { MODULES, FEES, fmtXAF, fmtUSD } from "@/lib/program-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Foundation and Mission School — Jesus For All Nations" },
      { name: "description", content: "École biblique de formation chrétienne et missionnaire. 7 modules, Février 2026 – Janvier 2027. Présentiel ou en ligne, en français et anglais." },
      { property: "og:title", content: "Foundation and Mission School — Jesus For All Nations" },
      { property: "og:description", content: "Une formation biblique complète pour servir Christ parmi toutes les nations." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const pillars = [
  { icon: BookOpen, title: "Fondation", text: "Bases solides de la foi chretienne et de la Parole.", image: pillarFoundation },
  { icon: HandHeart, title: "Discipulat", text: "Formation au caractere et a la maturite spirituelle.", image: pillarDiscipulat },
  { icon: Globe2, title: "Mission", text: "Preparation a l'envoi parmi toutes les nations.", image: pillarMission },
  { icon: GraduationCap, title: "Evangelisation", text: "Outils pratiques pour annoncer la Bonne Nouvelle.", image: pillarEvangelisation },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 bg-world-map opacity-30" />
        <img src={coverAll} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-background/70 to-background" />

        <div className="container relative mx-auto px-4 md:px-6 py-24 md:py-36 text-center">
          <img src={logo} alt="Logo" className="mx-auto h-24 w-24 rounded-full ring-4 ring-gold/60 shadow-gold" />
          <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-background/10 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-gold backdrop-blur">
            <Sparkles className="h-3 w-3" /> Promotion 2026 — 2027
          </span>
          <h1 className="mt-6 font-serif text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] max-w-4xl mx-auto">
            Foundation <span className="text-gold">&</span> Mission School
          </h1>
          <p className="mt-4 text-base md:text-lg text-primary-foreground/85 italic">« Jesus For All Nations »</p>
          <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-primary-foreground/85">
            Une école biblique d'un an pour bâtir des disciples enracinés dans la Parole,
            équipés pour la mission et envoyés vers toutes les nations.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="bg-gradient-gold text-gold-foreground hover:opacity-90 shadow-gold">
              <Link to="/register">S'inscrire maintenant <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft">
              <Link to="/program">Voir le programme</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="container mx-auto px-4 md:px-6 py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">Notre approche</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold">Quatre piliers, une vocation</h2>
          <p className="mt-4 text-muted-foreground">
            Une pédagogie structurée pour faire grandir le serviteur de Christ dans toutes les dimensions du ministère.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <Card key={p.title} className="group relative overflow-hidden p-7 border-border/60 hover:border-gold/50 hover:shadow-elegant transition-all min-h-[260px] text-primary-foreground">
              <img src={p.image} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-b from-primary/25 via-primary/55 to-background/85" />
              <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-hero text-primary-foreground shadow-soft">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="relative mt-5 text-xl font-semibold">{p.title}</h3>
              <p className="relative mt-2 text-sm text-primary-foreground/85">{p.text}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* MODULES PREVIEW */}
      <section className="bg-gradient-soft py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">Programme 2026 — 2027</p>
              <h2 className="mt-3 text-3xl md:text-5xl font-semibold">7 modules. 1 an. Toute une vocation.</h2>
            </div>
            <Button asChild variant="outline" className="border-primary/30 self-start md:self-end">
              <Link to="/program">Programme complet <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {MODULES.slice(0, 6).map((m) => (
              <Card key={m.id} className="p-6 border-border/60 hover:shadow-elegant transition-shadow">
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl text-primary/30 font-bold">{m.number}</span>
                  <span className="text-[10px] uppercase tracking-widest text-gold bg-gold/10 px-2 py-1 rounded">{m.duration}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-snug">{m.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{m.period}</p>
                <p className="mt-4 text-sm text-muted-foreground">{m.courses.length} cours · {m.languages}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE FEATURE */}
      <section className="container mx-auto px-4 md:px-6 py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-gold opacity-20 blur-2xl rounded-3xl" />
            <img src={worship} alt="Adoration et louange" className="relative rounded-2xl shadow-elegant w-full object-cover aspect-[4/3]" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">Une vie consacrée</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-semibold">Rencontrer Dieu, servir les nations</h2>
            <p className="mt-4 text-muted-foreground">
              Au cœur de la formation : l'adoration, la prière et la Parole. Une école qui forme
              le caractère autant que la connaissance, pour devenir un serviteur saint et envoyé.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-xl border border-border bg-card/50 p-4"><p className="font-serif text-3xl text-gold font-bold">7</p><p className="text-xs text-muted-foreground mt-1">Modules</p></div>
              <div className="rounded-xl border border-border bg-card/50 p-4"><p className="font-serif text-3xl text-gold font-bold">12</p><p className="text-xs text-muted-foreground mt-1">Mois</p></div>
              <div className="rounded-xl border border-border bg-card/50 p-4"><p className="font-serif text-3xl text-gold font-bold">2</p><p className="text-xs text-muted-foreground mt-1">Langues</p></div>
            </div>
          </div>
        </div>
      </section>


      {/* PRICING TEASER */}
      <section className="container mx-auto px-4 md:px-6 py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">Tarifs & Modalités</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-semibold">Une formation accessible, en présentiel ou à distance</h2>
            <p className="mt-4 text-muted-foreground">
              Suivez la formation depuis nos locaux ou rejoignez la promotion en ligne depuis n'importe où dans le monde.
            </p>
            <ul className="mt-6 space-y-3">
              {["Cours en français et en anglais", "Supports pédagogiques fournis", "Cas pratiques et évaluations", "Certificat de fin de cycle"].map((t) => (
                <li key={t} className="flex gap-3 text-sm"><Check className="h-5 w-5 text-gold shrink-0" /> {t}</li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-gradient-hero text-primary-foreground hover:opacity-90"><Link to="/modalities">Détail des modalités</Link></Button>
              <Button asChild size="lg" variant="outline"><Link to="/register">S'inscrire</Link></Button>
            </div>
          </div>

          <Card className="p-8 border-gold/30 shadow-elegant bg-gradient-to-br from-card to-accent/40">
            <h3 className="font-serif text-2xl font-semibold">Frais de scolarité</h3>
            <div className="mt-6 space-y-4">
              <div className="flex items-baseline justify-between border-b border-border pb-3">
                <span className="text-sm">Frais d'inscription</span>
                <span className="font-semibold">{fmtXAF(FEES.registration.xaf)} <span className="text-muted-foreground text-xs">≈ {fmtUSD(FEES.registration.usd)}</span></span>
              </div>
              <div className="flex items-baseline justify-between border-b border-border pb-3">
                <span className="text-sm">Frais de formation</span>
                <span className="font-semibold">{fmtXAF(FEES.training.xaf)} <span className="text-muted-foreground text-xs">≈ {fmtUSD(FEES.training.usd)}</span></span>
              </div>
              <div className="flex items-baseline justify-between pt-2">
                <span className="font-semibold">Total</span>
                <span className="font-serif text-2xl text-gold font-bold">{fmtXAF(FEES.total.xaf)}<br/><span className="text-xs text-muted-foreground font-sans font-normal">≈ {fmtUSD(FEES.total.usd)}</span></span>
              </div>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">Taux indicatif : 1 USD ≈ {FEES.rate} XAF.</p>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gradient-soft py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">Questions fréquentes</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-semibold">Tout ce qu'il faut savoir</h2>
          </div>
          <Accordion type="single" collapsible className="mt-12">
            {[
              { q: "Qui peut s'inscrire à la formation ?", a: "Toute personne née de nouveau, désireuse de grandir dans la connaissance de Christ et de servir dans l'Église ou la mission. Aucun prérequis académique." },
              { q: "Quelle est la durée totale ?", a: "12 mois, de Février 2026 à Janvier 2027, répartis en 7 modules avec cas pratiques et évaluations." },
              { q: "Puis-je suivre uniquement en ligne ?", a: "Oui. La formation est intégralement accessible en ligne, avec les mêmes supports et évaluations qu'en présentiel." },
              { q: "Comment se passe le paiement ?", a: "Après inscription, notre équipe vous transmet les coordonnées de paiement (Mobile Money, virement bancaire). Possibilité d'échelonnement." },
              { q: "La formation est-elle certifiée ?", a: "Oui, un certificat de fin de cycle est délivré aux candidats ayant validé l'ensemble des modules." },
            ].map((f, i) => (
              <AccordionItem key={i} value={`q-${i}`}>
                <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden text-primary-foreground py-24 md:py-32">
        <img src={handsLight} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="container relative mx-auto px-4 md:px-6 text-center max-w-2xl">
          <h2 className="font-serif text-3xl md:text-5xl font-semibold">Répondez à l'appel.</h2>
          <p className="mt-4 text-foreground/85">Les inscriptions pour la promotion 2026 sont ouvertes. Rejoignez une communauté de disciples envoyés.</p>
          <Button asChild size="lg" className="mt-8 bg-gradient-gold text-gold-foreground hover:opacity-90 shadow-gold">
            <Link to="/register">S'inscrire à la formation <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
