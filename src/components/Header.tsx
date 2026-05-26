import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/about", label: "À propos" },
  { to: "/program", label: "Programme" },
  { to: "/teachers", label: "Enseignants" },
  { to: "/modalities", label: "Modalités" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="International Foundation and Mission School" className="h-10 w-10 rounded-full object-cover ring-2 ring-gold/40" />
          <div className="hidden sm:block leading-tight">
            <div className="font-serif text-base font-semibold text-foreground">International Foundation and Mission School</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-gold">Jesus For All Nations</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild className="hidden md:inline-flex bg-gradient-gold text-gold-foreground hover:opacity-90 shadow-gold">
            <Link to="/register">S'inscrire</Link>
          </Button>
          <button
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container mx-auto flex flex-col gap-1 p-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-md px-3 py-3 text-sm font-medium text-foreground hover:bg-accent"
                activeProps={{ className: "bg-accent text-primary" }}
                activeOptions={{ exact: l.to === "/" }}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Button asChild className="mt-2 bg-gradient-gold text-gold-foreground">
              <Link to="/register" onClick={() => setOpen(false)}>S'inscrire</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
