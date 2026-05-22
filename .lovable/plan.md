
# Foundation and Mission School — Site web

Site vitrine + inscription pour l'école biblique « Jesus For All Nations », inspiré du logo (bleu profond + or, ambiance spirituelle, monde/missions).

## Charte graphique

- **Couleurs** (tokens sémantiques dans `src/styles.css`, format `oklch`) :
  - Primary : bleu profond (~ `oklch(0.35 0.15 255)`)
  - Primary-glow : bleu lumineux (~ `oklch(0.65 0.18 245)`)
  - Accent : or (~ `oklch(0.78 0.14 85)`)
  - Background clair + variante sombre
  - Gradient hero bleu → bleu-glow + accents dorés
- **Typo** : Playfair Display (titres, sérif élégant) + Inter (corps)
- **Style** : moderne, aéré, motifs subtils (carte du monde en filigrane, croix dorée discrète), cartes avec ombres douces, animations légères au scroll

## Pages (routes TanStack séparées, chacune avec `head()` propre)

1. `/` — **Accueil** : hero (logo + slogan « Jesus For All Nations »), pitch école, 4 piliers (Fondation, Mission, Évangélisation, Formation), aperçu modules, CTA inscription, témoignages, FAQ courte
2. `/about` — **À propos** : vision, mission, valeurs, équipe pastorale
3. `/program` — **Programme** : présentation des 7 modules (Feb 2026 → Jan 2027) extraits du PDF, avec dates, durées, langues (FR + EN). Timeline visuelle + tableau responsive
4. `/modalities` — **Modalités** : présentiel vs en ligne, tarifs détaillés
   - Inscription : **25 000 XAF (~ 42 USD)**
   - Formation : **75 000 XAF (~ 125 USD)**
   - Total : **100 000 XAF (~ 167 USD)**
   - Taux indicatif 1 USD ≈ 600 XAF, note de variation
5. `/register` — **Inscription** : formulaire complet (présentiel / en ligne)
6. `/contact` — **Contact** : formulaire + infos
7. Header/Footer partagés via `__root.tsx` (logo, nav, liens, mentions)

## Formulaire d'inscription (`/register`)

Champs (validés Zod côté client) :
- Nom, prénom, email, téléphone (WhatsApp)
- Pays, ville
- Date de naissance, genre
- Église d'appartenance, fonction/ministère
- **Mode** : Présentiel / En ligne (radio)
- **Langue** : Français / Anglais
- Modules souhaités (multi-select, 7 modules)
- Motivation (textarea, 1000 car. max)
- Acceptation conditions

Récap des frais affiché dynamiquement (XAF + USD).
Soumission : toast de confirmation + écran « merci », instructions paiement (Mobile Money / virement — placeholder à compléter par le client).
**Pas de backend** dans ce premier jet : on stocke localement et on affiche un message « notre équipe vous contactera ». Si tu veux qu'on enregistre vraiment les inscriptions en base + email, on activera Lovable Cloud dans un second temps.

## Programme (données depuis le PDF)

7 modules structurés :
- MOD 01 — Février 2026 (1 mois) — FCSB : C, OS, BC, HID, R
- MOD 02 — Mars-Avril 2026 (2 mois) — R : TSD, RCP, AP, RD, CE, RR, TF
- MOD 03 — Mai-Juin 2026 (2 mois) — NN : ON, TE, CM, PDM, ADCDA, P, E, IL
- MOD 04 — Juillet-Août 2026 (2 mois) — FD : CD, PD, VS, D, RC, MA
- MOD 05 — Septembre-Octobre 2026 (2 mois) — DDA : AP, AS, CA
- MOD 06 — Novembre 2026 (1 mois) — MPD : RAM, CE
- MOD 07 — Décembre 2026 - Janvier 2027 (2 mois) — FFC : T, JC, B, S, SE, AU, B, C, P, E

Chaque module = carte expandable avec liste des cours, dates, période, cas pratiques + évaluations.

## Assets

- `logo.jpg` → copié dans `src/assets/logo.jpg`, utilisé header/footer/hero/favicon
- Image hero générée (mains levées, lumière, ambiance worship — tons bleu/or)
- Motif carte du monde en SVG background subtil

## Détails techniques

- TanStack Start, routes séparées par page avec metadata SEO unique (title, description, og)
- `head()` complet sur chaque route ; `og:image` uniquement sur les routes feuilles
- Composants shadcn : Button, Card, Input, Textarea, Select, RadioGroup, Checkbox, Form, Accordion, Toast
- Validation Zod + react-hook-form
- Responsive mobile-first, dark mode supporté via tokens
- Pas de backend pour l'instant — proposer Lovable Cloud ensuite si besoin de persistance/emails

## À confirmer (optionnel — je peux décider seul sinon)

- Coordonnées de contact réelles (email, téléphone, adresse) ? Sinon placeholders
- Activer Lovable Cloud pour persister les inscriptions + envoyer un email de confirmation ?
