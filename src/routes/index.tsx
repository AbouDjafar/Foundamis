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
import flyerEvangile from "@/assets/flyer-evangile.jpg";
import handsLight from "@/assets/hands-light.jpg";
import logo from "@/assets/logo.png";
import { MODULES, FEES, fmtXAF, fmtUSD } from "@/lib/program-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "International Foundation and Mission School — Jesus For All Nations" },
      { name: "description", content: "École biblique de formation chrétienne et missionnaire. 8 modules, en présentiel ou en ligne, en français et en anglais." },
      { property: "og:title", content: "International Foundation and Mission School — Jesus For All Nations" },
      { property: "og:description", content: "Une formation biblique complète pour servir Christ parmi toutes les nations." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const pillars = [
  { icon: BookOpen, title: "Fondation", text: "Bases solides de la foi chrétienne et de la Parole.", image: pillarFoundation },
  { icon: HandHeart, title: "Discipulat", text: "Formation au caractère et à la maturité spirituelle.", image: pillarDiscipulat },
  { icon: Globe2, title: "Mission", text: "Préparation à l'envoi parmi toutes les nations.", image: pillarMission },
  { icon: GraduationCap, title: "Évangélisation", text: "Outils pratiques pour annoncer la Bonne Nouvelle.", image: flyerEvangile },
];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-hero text-[#10284d]">
        <div className="absolute inset-0 bg-world-map opacity-10" />
        <img src={coverAll} alt="" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1280} />
        <div className="absolute inset-0 bg-[#e6d3b7]/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f2e7d6]/20 via-[#ead8bf]/12 to-white/18" />
        <div className="container relative mx-auto px-4 py-24 text-center md:px-6 md:py-36">
          <img src={logo} alt="Logo" className="mx-auto h-24 w-24 rounded-full ring-4 ring-gold/60 shadow-gold" />
          <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/70 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-[#10284d]">
            <Sparkles className="h-3 w-3" /> Promotion 2026 — 2027
          </span>
          <h1 className="mx-auto mt-6 max-w-4xl font-serif text-4xl font-semibold leading-[1.05] md:text-6xl lg:text-7xl">International Foundation and Mission School</h1>
          <p className="mt-4 text-base italic text-[#10284d]/90 md:text-lg">« Jesus For All Nations »</p>
          <p className="mx-auto mt-6 max-w-2xl text-base text-[#10284d]/90 md:text-lg">Une école biblique d'un an pour bâtir des disciples enracinés dans la Parole, équipés pour la mission et envoyés vers toutes les nations.</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="bg-gradient-gold text-gold-foreground shadow-gold hover:opacity-90"><Link to="/register">S'inscrire maintenant <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
            <Button asChild size="lg" className="bg-primary text-primary-foreground shadow-soft hover:bg-primary/90"><Link to="/program">Voir le programme</Link></Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Notre approche</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">Quatre piliers, une vocation</h2>
          <p className="mt-4 text-muted-foreground">Une pédagogie structurée pour faire grandir le serviteur de Christ dans toutes les dimensions du ministère.</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <Card key={p.title} className="group relative min-h-[260px] overflow-hidden border-border/60 p-7 text-primary-foreground transition-all hover:border-gold/50 hover:shadow-elegant">
              <img src={p.image} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-b from-primary/25 via-primary/55 to-background/85" />
              <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-hero text-primary-foreground shadow-soft"><p.icon className="h-6 w-6 text-white" /></div>
              <h3 className="relative mt-5 text-xl font-semibold text-white">{p.title}</h3>
              <p className="relative mt-2 text-sm text-white/90">{p.text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-gradient-soft py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Programme 2026 — 2027</p>
              <h2 className="mt-3 text-3xl font-semibold md:text-5xl">8 modules. 2 cycles. Toute une vocation.</h2>
              <p className="mt-3 text-sm text-muted-foreground">Chaque module dure 1 mois et est porté par 2 enseignants.</p>
            </div>
            <Button asChild variant="outline" className="self-start border-primary/30 md:self-end"><Link to="/program">Programme complet <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {MODULES.slice(0, 6).map((m) => (
              <Card key={m.id} className="border-border/60 p-6 transition-shadow hover:shadow-elegant">
                <div className="flex items-center justify-between"><span className="font-serif text-3xl font-bold text-primary/30">{m.number}</span><span className="rounded bg-gold/10 px-2 py-1 text-[10px] uppercase tracking-widest text-gold">{m.duration}</span></div>
                <h3 className="mt-3 text-lg font-semibold leading-snug">{m.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{m.period}</p>
                <p className="mt-4 text-sm text-muted-foreground">{m.courses.length} cours - {m.languages} - 2 enseignants</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
