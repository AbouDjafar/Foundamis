import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Heart } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-deep text-primary-foreground">
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.12)_1px,transparent_0)] bg-[size:16px_16px] opacity-25" />

      <div className="relative z-10 container mx-auto grid gap-10 px-4 py-16 md:grid-cols-4 md:px-6">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-12 w-12 rounded-full ring-2 ring-gold/50" />
            <div>
              <div className="font-serif text-lg font-semibold">International Foundation and Mission School</div>
              <div className="text-xs uppercase tracking-[0.2em] text-gold">Jesus For All Nations</div>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm text-primary-foreground/80">
            Une ecole biblique consacree a former, equiper et envoyer des serviteurs
            de Christ pour la mission aupres de toutes les nations.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">Navigation</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/90">
            <li><Link to="/about" className="transition-colors hover:text-gold">A propos</Link></li>
            <li><Link to="/program" className="transition-colors hover:text-gold">Programme</Link></li>
            <li><Link to="/teachers" className="transition-colors hover:text-gold">Enseignants</Link></li>
            <li><Link to="/modalities" className="transition-colors hover:text-gold">Modalites</Link></li>
            <li><Link to="/register" className="transition-colors hover:text-gold">Inscription</Link></li>
            <li><Link to="/contact" className="transition-colors hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/85">
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-gold" />
              <span>contact@fms-jfan.org</span>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-gold" />
              <span>+237 6XX XX XX XX</span>
            </li>
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-gold" />
              <span>Cameroun & en ligne</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative z-10 border-t border-primary-foreground/20">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-primary-foreground/70 md:flex-row md:px-6">
          <p>© {new Date().getFullYear()} International Foundation and Mission School. Tous droits reserves.</p>
          <p className="italic">Allez, faites de toutes les nations des disciples - Matt. 28:19</p>
        </div>
        <div className="container mx-auto px-4 pb-5 text-center text-xs text-primary-foreground/70 md:px-6">
          <p className="italic">
            Made with <Heart className="mx-1 inline h-3.5 w-3.5 fill-current" /> by Djafar
          </p>
        </div>
      </div>
    </footer>
  );
}
