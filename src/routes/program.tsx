import { createFileRoute, Link } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, Languages, ArrowRight, BookOpenCheck } from "lucide-react";
import { MODULES } from "@/lib/program-data";
import flyerBibleFormation from "@/assets/flyer-bible-formation.jpg";

export const Route = createFileRoute("/program")({
  head: () => ({
    meta: [
      { title: "Programme 2026 — 2027 — Foundation and Mission School" },
      { name: "description", content: "Découvrez les 7 modules de la formation : Fondation, Restauration, Nouvelle Naissance, Discipulat, Dons, Mission, Envoi. Février 2026 — Janvier 2027." },
      { property: "og:title", content: "Programme 2026 — 2027" },
      { property: "og:description", content: "Sept modules sur douze mois pour devenir un serviteur formé et envoyé." },
      { property: "og:url", content: "/program" },
    ],
    links: [{ rel: "canonical", href: "/program" }],
  }),
  component: Program,
});

function Program() {
  return (
    <>
      <section className="bg-gradient-hero bg-world-map text-primary-foreground py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">Programme</p>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl font-semibold">Une année pour être formé et envoyé</h1>
          <p className="mt-6 text-primary-foreground/85">
            7 modules structurés, du fondement de la foi jusqu'à l'envoi, en français et en anglais.
          </p>
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-6 text-sm">
            <span className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-gold" /> Fév. 2026 — Jan. 2027</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-gold" /> 12 mois</span>
            <span className="flex items-center gap-2"><Languages className="h-4 w-4 text-gold" /> FR & EN</span>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-20">
        <div className="mb-16 rounded-2xl border border-border/70 bg-card/80 p-6 md:p-8 shadow-soft">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <img
              src={flyerBibleFormation}
              alt="Flyer Bible Formation Foundation and Mission School"
              className="w-full rounded-xl border border-border/60 object-cover"
            />
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">Focus Formation</p>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold">Bible Formation</h2>
              <p className="mt-4 text-muted-foreground">
                Grandir dans la foi, vivre la Parole et impacter le monde: un parcours suivi,
                pratique et spirituel, pour bâtir une vie enracinée en Christ.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <BookOpenCheck className="h-4 w-4 text-gold" />
                  <span>Session régulière: mercredi à samedi</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Clock className="h-4 w-4 text-gold" />
                  <span>Horaire: à partir de 10h</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <CalendarDays className="h-4 w-4 text-gold" />
                  <span>Cycle complet: 12 mois</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12 text-center max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">Les 7 modules</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold">Cliquez sur chaque module pour le détail</h2>
        </div>

        <div className="grid gap-4">
          {MODULES.map((m) => (
            <Card key={m.id} className="overflow-hidden border-border/60 hover:border-gold/40 transition-colors">
              <Accordion type="single" collapsible>
                <AccordionItem value={m.id} className="border-0">
                  <AccordionTrigger className="px-6 py-5 hover:no-underline">
                    <div className="flex flex-1 items-center gap-5 text-left">
                      <span className="font-serif text-3xl md:text-4xl text-primary/30 font-bold w-12 shrink-0">{m.number}</span>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base md:text-lg font-semibold leading-snug">{m.title}</h3>
                        <p className="text-xs text-muted-foreground mt-1">{m.period} · {m.duration} · {m.courses.length} cours</p>
                      </div>
                      <span className="hidden md:inline text-[10px] uppercase tracking-widest text-gold bg-gold/10 px-2 py-1 rounded shrink-0">
                        Code {m.code}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground">
                            <th className="py-2 pr-4">Code</th>
                            <th className="py-2 pr-4">Cours</th>
                            <th className="py-2">Dates</th>
                          </tr>
                        </thead>
                        <tbody>
                          {m.courses.map((c, i) => (
                            <tr key={i} className="border-b border-border/40 last:border-0">
                              <td className="py-3 pr-4 font-mono text-xs text-primary">{c.code}</td>
                              <td className="py-3 pr-4">{c.title}</td>
                              <td className="py-3 text-muted-foreground">{c.dates}</td>
                            </tr>
                          ))}
                          <tr className="bg-gold/5">
                            <td className="py-3 pr-4 font-mono text-xs text-gold">ÉVAL.</td>
                            <td className="py-3 pr-4 font-semibold">Évaluation finale du module</td>
                            <td className="py-3 text-muted-foreground">{m.evaluation}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button asChild size="lg" className="bg-gradient-gold text-gold-foreground hover:opacity-90 shadow-gold">
            <Link to="/register">Je m'inscris à la formation <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
