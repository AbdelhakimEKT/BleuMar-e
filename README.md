# Bleu Marée

Socle Next.js premium pour le site du restaurant gastronomique Bleu Marée à Biarritz.

## Démarrage

```bash
npm install
npm run dev
```

## Sanity Studio

Le back-office est prêt sur `/studio`.

1. Copiez `.env.example` vers `.env.local`
2. Renseignez `NEXT_PUBLIC_SANITY_PROJECT_ID`
3. Gardez `NEXT_PUBLIC_SANITY_DATASET=production` sauf besoin spécifique
4. Lancez `npm run dev` puis ouvrez `/studio`

Tant que Sanity n'est pas configuré, le site garde automatiquement le contenu local existant.

## Structure

- `src/app`: routes, pages et endpoints API
- `src/components`: composants UI, layout, blocs éditoriaux et formulaires
- `src/content`: contenu métier centralisé par domaine
- `src/sanity`: schémas, loaders et configuration du CMS
- `src/lib`: helpers SEO et validation
- `public`: assets statiques du site

## Ce qui est déjà en place

- expérience premium desktop/mobile
- pages principales du site
- SEO de base, sitemap et robots
- formulaire de contact avec validation serveur
- page réservation pensée pour une intégration Zenchef propre
- Studio Sanity embarqué sur `/studio`
- fallback automatique vers le contenu local si Sanity n'est pas encore configuré
- structure prête pour un back-office simple

## Questions à trancher avant la version production

- lien ou script officiel Zenchef à connecter
- textes finaux, carte réelle et éventuels avis clients
