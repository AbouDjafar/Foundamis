import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import coverAll from "@/assets/cover-all.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — International Foundation and Mission School" },
      { name: "description", content: "Une question sur la formation ? Contactez notre équipe." },
      { property: "og:title", content: "Contact — International Foundation and Mission School" },
      { property: "og:description", content: "Écrivez-nous, nous vous répondons sous 48h." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Nom requis").max(80),
  email: z.string().trim().email("Email invalide").max(255),
  subject: z.string().trim().min(2, "Sujet requis").max(120),
  message: z.string().trim().min(10, "Min. 10 caractères").max(1000),
});

type V = z.infer<typeof schema>;

function Contact() {
  const form = useForm<V>({ resolver: zodResolver(schema), defaultValues: { name: "", email: "", subject: "", message: "" } });
  const onSubmit = (v: V) => {
    console.log("Contact:", v);
    toast.success("Message envoyé — nous vous répondrons sous 48h.");
    form.reset();
  };

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-cover-dark bg-world-map text-[#10284d] py-20 md:py-28">
        <img src={coverAll} alt="" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1280} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/12 via-white/8 to-white/16" />
        <div className="relative container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[#10284d] font-semibold">Contact</p>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl font-semibold">Parlons ensemble</h1>
          <p className="mt-6 text-[#10284d]/90">Une question, un partenariat, un témoignage — nous serions ravis de vous lire.</p>
        </div>
      </section>

      <section className="container mx-auto px-4 md:px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
          <div className="space-y-4">
            {[
              { icon: Mail, label: "Email", value: "contact@fms-jfan.org" },
              { icon: Phone, label: "Téléphone / WhatsApp", value: "+237 6XX XX XX XX" },
              { icon: MapPin, label: "Localisation", value: "Cameroun & en ligne" },
            ].map((c) => (
              <Card key={c.label} className="p-5 border-border/60 flex gap-4 items-start">
                <div className="h-10 w-10 rounded-lg bg-gradient-hero text-primary-foreground inline-flex items-center justify-center shrink-0">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</p>
                  <p className="mt-1 text-sm font-medium">{c.value}</p>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-6 md:p-8 border-border/60">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <Label className="text-sm font-medium">Nom</Label>
                  <Input className="mt-2" {...form.register("name")} placeholder="Votre nom" />
                  {form.formState.errors.name && <p className="mt-1 text-xs text-destructive">{form.formState.errors.name.message}</p>}
                </div>
                <div>
                  <Label className="text-sm font-medium">Email</Label>
                  <Input className="mt-2" type="email" {...form.register("email")} placeholder="vous@email.com" />
                  {form.formState.errors.email && <p className="mt-1 text-xs text-destructive">{form.formState.errors.email.message}</p>}
                </div>
              </div>
              <div>
                <Label className="text-sm font-medium">Sujet</Label>
                <Input className="mt-2" {...form.register("subject")} placeholder="Objet de votre message" />
                {form.formState.errors.subject && <p className="mt-1 text-xs text-destructive">{form.formState.errors.subject.message}</p>}
              </div>
              <div>
                <Label className="text-sm font-medium">Message</Label>
                <Textarea className="mt-2" rows={6} {...form.register("message")} placeholder="Votre message..." maxLength={1000} />
                {form.formState.errors.message && <p className="mt-1 text-xs text-destructive">{form.formState.errors.message.message}</p>}
              </div>
              <Button type="submit" size="lg" className="bg-gradient-hero text-primary-foreground hover:opacity-90">
                Envoyer <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </>
  );
}
