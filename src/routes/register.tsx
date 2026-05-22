import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MODULES, FEES, fmtXAF, fmtUSD } from "@/lib/program-data";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Inscription — Foundation and Mission School" },
      { name: "description", content: "Inscrivez-vous à la formation 2026-2027, en présentiel ou en ligne." },
      { property: "og:title", content: "Inscription à la formation" },
      { property: "og:description", content: "Formulaire d'inscription — présentiel ou en ligne." },
      { property: "og:url", content: "/register" },
    ],
    links: [{ rel: "canonical", href: "/register" }],
  }),
  component: Register,
});

const schema = z.object({
  firstName: z.string().trim().min(2, "Prénom requis").max(60),
  lastName: z.string().trim().min(2, "Nom requis").max(60),
  email: z.string().trim().email("Email invalide").max(255),
  phone: z.string().trim().min(6, "Téléphone requis").max(30),
  country: z.string().trim().min(2, "Pays requis").max(60),
  city: z.string().trim().min(2, "Ville requise").max(60),
  birthDate: z.string().min(1, "Date requise"),
  gender: z.enum(["M", "F"], { message: "Genre requis" }),
  church: z.string().trim().min(2, "Église requise").max(120),
  ministry: z.string().trim().max(120).optional().or(z.literal("")),
  mode: z.enum(["presentiel", "online"], { message: "Choisissez un mode" }),
  language: z.enum(["fr", "en"], { message: "Choisissez une langue" }),
  modules: z.array(z.string()).min(1, "Sélectionnez au moins un module"),
  motivation: z.string().trim().min(20, "Min. 20 caractères").max(1000),
  consent: z.literal(true, { message: "Vous devez accepter" }),
});

type FormValues = z.infer<typeof schema>;

function Register() {
  const [success, setSuccess] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "", lastName: "", email: "", phone: "",
      country: "", city: "", birthDate: "", church: "", ministry: "",
      modules: MODULES.map((m) => m.id),
      motivation: "",
    } as any,
  });

  const onSubmit = (values: FormValues) => {
    console.log("Inscription:", values);
    toast.success("Inscription enregistrée — nous vous contacterons sous 48h.");
    setSuccess(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (success) {
    return (
      <section className="container mx-auto px-4 md:px-6 py-24 max-w-2xl text-center">
        <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-gold shadow-gold">
          <CheckCircle2 className="h-10 w-10 text-gold-foreground" />
        </div>
        <h1 className="mt-6 font-serif text-3xl md:text-4xl font-semibold">Inscription bien reçue</h1>
        <p className="mt-4 text-muted-foreground">
          Merci pour votre engagement. Notre équipe vous contactera sous 48 heures avec
          les coordonnées de paiement (Mobile Money, virement) et les prochaines étapes.
        </p>
        <Card className="mt-8 p-6 text-left bg-gradient-to-br from-card to-accent/30 border-gold/30">
          <h3 className="font-semibold">Récapitulatif des frais</h3>
          <div className="mt-3 space-y-2 text-sm">
            <div className="flex justify-between"><span>Inscription</span><span>{fmtXAF(FEES.registration.xaf)} (≈ {fmtUSD(FEES.registration.usd)})</span></div>
            <div className="flex justify-between"><span>Formation</span><span>{fmtXAF(FEES.training.xaf)} (≈ {fmtUSD(FEES.training.usd)})</span></div>
            <div className="flex justify-between font-semibold pt-2 border-t border-border"><span>Total</span><span>{fmtXAF(FEES.total.xaf)} (≈ {fmtUSD(FEES.total.usd)})</span></div>
          </div>
        </Card>
        <Button asChild className="mt-8 bg-gradient-hero text-primary-foreground" size="lg">
          <Link to="/">Retour à l'accueil</Link>
        </Button>
      </section>
    );
  }

  return (
    <>
      <section className="bg-gradient-hero-gold bg-world-map text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">Inscription</p>
          <h1 className="mt-4 font-serif text-4xl md:text-5xl font-semibold">Rejoignez la promotion 2026</h1>
          <p className="mt-4 text-primary-foreground/85">Complétez le formulaire ci-dessous. Notre équipe vous contactera sous 48h.</p>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
            {/* Identité */}
            <Card className="p-6 md:p-8 border-border/60">
              <h2 className="font-serif text-xl font-semibold">Identité</h2>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <Field label="Prénom" error={form.formState.errors.firstName?.message}>
                  <Input {...form.register("firstName")} placeholder="Jean" />
                </Field>
                <Field label="Nom" error={form.formState.errors.lastName?.message}>
                  <Input {...form.register("lastName")} placeholder="Dupont" />
                </Field>
                <Field label="Email" error={form.formState.errors.email?.message}>
                  <Input type="email" {...form.register("email")} placeholder="vous@email.com" />
                </Field>
                <Field label="Téléphone (WhatsApp)" error={form.formState.errors.phone?.message}>
                  <Input {...form.register("phone")} placeholder="+237 6XX XX XX XX" />
                </Field>
                <Field label="Pays" error={form.formState.errors.country?.message}>
                  <Input {...form.register("country")} placeholder="Cameroun" />
                </Field>
                <Field label="Ville" error={form.formState.errors.city?.message}>
                  <Input {...form.register("city")} placeholder="Yaoundé" />
                </Field>
                <Field label="Date de naissance" error={form.formState.errors.birthDate?.message}>
                  <Input type="date" {...form.register("birthDate")} />
                </Field>
                <Field label="Genre" error={form.formState.errors.gender?.message}>
                  <Select onValueChange={(v) => form.setValue("gender", v as "M" | "F", { shouldValidate: true })}>
                    <SelectTrigger><SelectValue placeholder="Sélectionnez" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="M">Homme</SelectItem>
                      <SelectItem value="F">Femme</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
              </div>
            </Card>

            {/* Spirituel */}
            <Card className="p-6 md:p-8 border-border/60">
              <h2 className="font-serif text-xl font-semibold">Parcours spirituel</h2>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <Field label="Église d'appartenance" error={form.formState.errors.church?.message}>
                  <Input {...form.register("church")} placeholder="Nom de votre église" />
                </Field>
                <Field label="Fonction / ministère (optionnel)" error={form.formState.errors.ministry?.message}>
                  <Input {...form.register("ministry")} placeholder="Diacre, intercesseur..." />
                </Field>
              </div>
            </Card>

            {/* Formation */}
            <Card className="p-6 md:p-8 border-border/60">
              <h2 className="font-serif text-xl font-semibold">Modalités de formation</h2>

              <div className="mt-6">
                <Label className="text-sm font-medium">Mode</Label>
                <RadioGroup className="mt-3 grid gap-3 md:grid-cols-2" onValueChange={(v) => form.setValue("mode", v as any, { shouldValidate: true })}>
                  <Label htmlFor="m-pres" className="flex cursor-pointer items-start gap-3 rounded-lg border border-border p-4 hover:border-gold/40 has-[input:checked]:border-gold has-[input:checked]:bg-gold/5">
                    <RadioGroupItem value="presentiel" id="m-pres" />
                    <div><div className="font-semibold">Présentiel</div><div className="text-xs text-muted-foreground mt-1">Sur place, en communauté</div></div>
                  </Label>
                  <Label htmlFor="m-on" className="flex cursor-pointer items-start gap-3 rounded-lg border border-border p-4 hover:border-gold/40 has-[input:checked]:border-gold has-[input:checked]:bg-gold/5">
                    <RadioGroupItem value="online" id="m-on" />
                    <div><div className="font-semibold">En ligne</div><div className="text-xs text-muted-foreground mt-1">Depuis n'importe où</div></div>
                  </Label>
                </RadioGroup>
                {form.formState.errors.mode && <p className="mt-2 text-xs text-destructive">{form.formState.errors.mode.message}</p>}
              </div>

              <div className="mt-6">
                <Label className="text-sm font-medium">Langue préférée</Label>
                <RadioGroup className="mt-3 flex gap-3" onValueChange={(v) => form.setValue("language", v as any, { shouldValidate: true })}>
                  <Label htmlFor="l-fr" className="flex cursor-pointer items-center gap-2 rounded-lg border border-border px-4 py-3 hover:border-gold/40 has-[input:checked]:border-gold has-[input:checked]:bg-gold/5">
                    <RadioGroupItem value="fr" id="l-fr" /> Français
                  </Label>
                  <Label htmlFor="l-en" className="flex cursor-pointer items-center gap-2 rounded-lg border border-border px-4 py-3 hover:border-gold/40 has-[input:checked]:border-gold has-[input:checked]:bg-gold/5">
                    <RadioGroupItem value="en" id="l-en" /> English
                  </Label>
                </RadioGroup>
                {form.formState.errors.language && <p className="mt-2 text-xs text-destructive">{form.formState.errors.language.message}</p>}
              </div>

              <div className="mt-6">
                <Label className="text-sm font-medium">Modules à suivre</Label>
                <p className="text-xs text-muted-foreground mt-1">Cochez les modules qui vous intéressent (tous sélectionnés par défaut).</p>
                <div className="mt-3 grid gap-2 md:grid-cols-2">
                  {MODULES.map((m) => {
                    const selected = form.watch("modules") ?? [];
                    const checked = selected.includes(m.id);
                    return (
                      <Label key={m.id} className="flex items-start gap-3 rounded-lg border border-border p-3 cursor-pointer hover:border-gold/40">
                        <Checkbox
                          checked={checked}
                          onCheckedChange={(v) => {
                            const next = v ? [...selected, m.id] : selected.filter((x) => x !== m.id);
                            form.setValue("modules", next, { shouldValidate: true });
                          }}
                        />
                        <div className="text-sm">
                          <div className="font-medium">Mod. {m.number} — {m.title}</div>
                          <div className="text-xs text-muted-foreground">{m.period}</div>
                        </div>
                      </Label>
                    );
                  })}
                </div>
                {form.formState.errors.modules && <p className="mt-2 text-xs text-destructive">{form.formState.errors.modules.message as string}</p>}
              </div>

              <Field label="Motivation" error={form.formState.errors.motivation?.message} className="mt-6">
                <Textarea rows={5} {...form.register("motivation")} placeholder="Parlez-nous de votre appel et de vos attentes vis-à-vis de la formation..." maxLength={1000} />
              </Field>

              <div className="mt-6">
                <Label className="flex items-start gap-3 cursor-pointer">
                  <Checkbox
                    onCheckedChange={(v) => form.setValue("consent", v === true ? true : (false as any), { shouldValidate: true })}
                  />
                  <span className="text-sm text-muted-foreground">
                    J'accepte que mes données soient utilisées pour traiter mon inscription et confirme la véracité des informations fournies.
                  </span>
                </Label>
                {form.formState.errors.consent && <p className="mt-2 text-xs text-destructive">{form.formState.errors.consent.message as string}</p>}
              </div>
            </Card>

            <Button type="submit" size="lg" className="w-full md:w-auto bg-gradient-gold text-gold-foreground hover:opacity-90 shadow-gold">
              Valider mon inscription <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>

          <aside className="lg:sticky lg:top-24 h-fit">
            <Card className="p-6 border-gold/30 bg-gradient-to-br from-card to-accent/30 shadow-elegant">
              <h3 className="font-serif text-lg font-semibold">Récapitulatif des frais</h3>
              <div className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between border-b border-border pb-2">
                  <span>Inscription</span>
                  <span className="font-semibold">{fmtXAF(FEES.registration.xaf)}</span>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground -mt-2">
                  <span></span><span>≈ {fmtUSD(FEES.registration.usd)}</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span>Formation</span>
                  <span className="font-semibold">{fmtXAF(FEES.training.xaf)}</span>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground -mt-2">
                  <span></span><span>≈ {fmtUSD(FEES.training.usd)}</span>
                </div>
                <div className="flex justify-between pt-3">
                  <span className="font-semibold">Total</span>
                  <div className="text-right">
                    <div className="font-serif text-xl font-bold text-gold">{fmtXAF(FEES.total.xaf)}</div>
                    <div className="text-xs text-muted-foreground">≈ {fmtUSD(FEES.total.usd)}</div>
                  </div>
                </div>
              </div>
              <p className="mt-5 text-xs text-muted-foreground">
                Paiement à confirmer après inscription (Mobile Money, virement). Échelonnement possible.
              </p>
            </Card>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({ label, error, children, className }: { label: string; error?: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <Label className="text-sm font-medium">{label}</Label>
      <div className="mt-2">{children}</div>
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
