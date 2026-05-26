import { createFileRoute, Link } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, Languages, ArrowRight, BookOpenCheck } from "lucide-react";
import { MODULES } from "@/lib/program-data";
import flyerBibleFormation from "@/assets/flyer-bible-formation.jpg";
import coverAll from "@/assets/cover-all.jpg";

export const Route = createFileRoute("/program")({
  head: () => ({
    meta: [
      { title: "Programme 2026 — 2027 — International Foundation and Mission School" },
      { name: "description", content: "Découvrez les 8 modules de la formation, organisés en deux cycles de progression spirituelle et missionnaire." },
      { property: "og:title", content: "Programme 2026 — 2027" },
      { property: "og:description", content: "Deux cycles, huit modules et une progression claire vers l'envoi." },
      { property: "og:url", content: "/program" },
    ],
    links: [{ rel: "canonical", href: "/program" }],
  }),
  component: Program,
});

const firstCycle = MODULES.filter((m) => Number(m.number) <= 4);
const secondCycle = MODULES.filter((m) => Number(m.number) >= 5);

function Program() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-cover-dark bg-world-map py-20 text-[#10284d] md:py-28">
        <img src={coverAll} alt="" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1280} />
        <div className="absolute inset-0 bg-[#e6d3b7]/34" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#f2e7d6]/18 via-[#ead8bf]/10 to-white/12" />
        <div className="relative container mx-auto max-w-3xl px-4 text-center md:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#10284d]">Programme</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold md:text-6xl">Une année pour être formé et envoyé</h1>
          <p className="mt-6 text-[#10284d]/90">8 modules structurés, organisés en deux cycles, du fondement de la foi jusqu'à l'envoi missionnaire.</p>
          <p className="mt-3 text-sm text-[#10284d]/85">Chaque module dure 1 mois et est porté par 2 enseignants.</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 md:px-6">
        <div className="mb-16 rounded-2xl border border-border/70 bg-card/80 p-6 shadow-soft md:p-8">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <img src={flyerBibleFormation} alt="Flyer Bible Formation International Foundation and Mission School" className="w-full rounded-xl border border-border/60 object-cover" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Focus formation</p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Bible Formation</h2>
              <p className="mt-4 text-muted-foreground">Grandir dans la foi, vivre la Parole et impacter le monde : un parcours suivi, pratique et spirituel, pour bâtir une vie enracinée en Christ.</p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm"><BookOpenCheck className="h-4 w-4 text-gold" /><span>Session régulière : mercredi à samedi</span></div>
                <div className="flex items-center gap-3 text-sm"><Clock className="h-4 w-4 text-gold" /><span>Horaire : à partir de 10h</span></div>
                <div className="flex items-center gap-3 text-sm"><CalendarDays className="h-4 w-4 text-gold" /><span>Organisation : 2 cycles de 4 modules</span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12 text-center"><p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Les 8 modules</p><h2 className="mt-3 text-3xl font-semibold md:text-5xl">Un parcours structuré en deux cycles</h2></div>

        <div className="space-y-14">
          <CycleSection title="1er cycle" subtitle="Modules 1 à 4 : fondation, restauration, nouvelle naissance et discipulat." modules={firstCycle} />
          <CycleSection title="2e cycle" subtitle="Modules 5 à 8 : appels, mission, ministère et envoi." modules={secondCycle} />
        </div>

        <div className="mt-16 text-center"><Button asChild size="lg" className="bg-gradient-gold text-gold-foreground shadow-gold hover:opacity-90"><Link to="/register">Je m'inscris à la formation <ArrowRight className="ml-1 h-4 w-4" /></Link></Button></div>
      </section>
    </>
  );
}

function CycleSection({ title, subtitle, modules }: { title: string; subtitle: string; modules: typeof MODULES }) {
  return (
    <section>
      <div className="mb-6 rounded-2xl border border-gold/20 bg-gradient-to-r from-primary/5 to-gold/10 px-6 py-5"><p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">{title}</p><h3 className="mt-2 text-2xl font-semibold md:text-3xl">{subtitle}</h3></div>
      <div className="grid gap-4">
        {modules.map((m) => (
          <Card key={m.id} className="overflow-hidden border-border/60 transition-colors hover:border-gold/40">
            <Accordion type="single" collapsible>
              <AccordionItem value={m.id} className="border-0">
                <AccordionTrigger className="px-6 py-5 hover:no-underline">
                  <div className="flex flex-1 items-center gap-5 text-left">
                    <span className="w-12 shrink-0 font-serif text-3xl font-bold text-primary/30 md:text-4xl">{m.number}</span>
                    <div className="min-w-0 flex-1"><h4 className="text-base font-semibold leading-snug md:text-lg">{m.title}</h4><p className="mt-1 text-xs text-muted-foreground">{m.period} - {m.duration} - 2 enseignants - {m.courses.length} cours</p></div>
                    <span className="hidden shrink-0 rounded bg-gold/10 px-2 py-1 text-[10px] uppercase tracking-widest text-gold md:inline">Code {m.code}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead><tr className="border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground"><th className="py-2 pr-4">Code</th><th className="py-2 pr-4">Cours</th><th className="py-2">Dates</th></tr></thead>
                      <tbody>
                        {m.courses.map((c, i) => (
                          <tr key={i} className="border-b border-border/40 last:border-0"><td className="py-3 pr-4 font-mono text-xs text-primary">{c.code}</td><td className="py-3 pr-4">{c.title}</td><td className="py-3 text-muted-foreground">{c.dates}</td></tr>
                        ))}
                        <tr className="bg-gold/5"><td className="py-3 pr-4 font-mono text-xs text-gold">ÉVAL.</td><td className="py-3 pr-4 font-semibold">Évaluation finale du module</td><td className="py-3 text-muted-foreground">{m.evaluation}</td></tr>
                      </tbody>
                    </table>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
        ))}
      </div>
    </section>
  );
}
