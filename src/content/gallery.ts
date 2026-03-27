import type { Locale } from "@/i18n/config";

const galleryContentByLocale = {
  fr: {
    pageHero: {
      eyebrow: "Galerie",
      title: "Des images qui donnent envie avant même de lire.",
      intro:
        "Plats, salle, lumière, matières et gestes: la galerie renforce la projection du visiteur et nourrit la dimension premium de l'expérience.",
      image: "/images/details/bleu-maree-detail-table-setting.jpg"
    },
    sectionIntro: {
      eyebrow: "Ambiance",
      title: "Un récit visuel construit autour du désir.",
      lead:
        "Les images validées sont déjà organisées pour servir plusieurs usages: hero, sections éditoriales, galerie immersive et conversions."
    },
    projectFollowUp: {
      eyebrow: "Suite du projet",
      title: "La galerie est prête à s'enrichir sans perdre sa cohérence.",
      lead:
        "Façade de nuit, accord mets-vins, visuel extérieur ou second portrait d'équipe pourront s'intégrer naturellement à cette composition.",
      reserve: "Réserver une expérience",
      photoshoot: "Planifier une séance photo",
      adminTitle: "Gestion admin",
      adminCopy:
        "La structure de contenu permet de brancher ensuite un back-office simple pour publier, remplacer ou archiver les visuels validés."
    },
    galleryItems: [
      {
        title: "Salle au coucher du soleil",
        caption: "Lumière feutrée, horizon et table dressée avec retenue.",
        image: "/images/hero/bleu-maree-hero-dining-room-sunset.png"
      },
      {
        title: "Architecture face à l'Atlantique",
        caption: "Respiration, lignes nettes et lecture premium de l'espace.",
        image: "/images/hero/bleu-maree-hero-atlantic-dining-room.png"
      },
      {
        title: "Dressage en cours",
        caption: "Le geste reste visible, calme et très précis.",
        image: "/images/experience/bleu-maree-plating-action.jpg"
      },
      {
        title: "Crudo signature",
        caption: "Fraîcheur marine, coupe nette et tension aromatique.",
        image: "/images/menu/bleu-maree-menu-crudo-signature.png"
      },
      {
        title: "Saint-Jacques rôties",
        caption: "Produit noble, chaleur douce et structure gastronomique.",
        image: "/images/menu/bleu-maree-menu-scallops-signature.png"
      },
      {
        title: "Détail de table",
        caption: "Matières, texture et sensation de luxe sobre.",
        image: "/images/details/bleu-maree-detail-table-setting.jpg"
      }
    ]
  },
  en: {
    pageHero: {
      eyebrow: "Gallery",
      title: "Images that make you want to book before you even read.",
      intro:
        "Plates, dining room, light, materials, and gestures: the gallery strengthens projection and reinforces the premium nature of the experience.",
      image: "/images/details/bleu-maree-detail-table-setting.jpg"
    },
    sectionIntro: {
      eyebrow: "Atmosphere",
      title: "A visual story built around desire.",
      lead:
        "The approved images are already organized to serve several purposes: hero, editorial sections, immersive gallery, and conversion points."
    },
    projectFollowUp: {
      eyebrow: "Next step",
      title: "The gallery is ready to grow without losing coherence.",
      lead:
        "A night facade, food-and-wine pairing visual, exterior shot, or second team portrait can all integrate naturally into this composition.",
      reserve: "Book an experience",
      photoshoot: "Plan a photo session",
      adminTitle: "Admin management",
      adminCopy:
        "The content structure makes it easy to connect a simple back-office later to publish, replace, or archive approved visuals."
    },
    galleryItems: [
      {
        title: "Dining room at sunset",
        caption: "Soft light, horizon, and a table set with restraint.",
        image: "/images/hero/bleu-maree-hero-dining-room-sunset.png"
      },
      {
        title: "Architecture facing the Atlantic",
        caption: "Breathing space, clear lines, and a premium reading of the room.",
        image: "/images/hero/bleu-maree-hero-atlantic-dining-room.png"
      },
      {
        title: "Plating in progress",
        caption: "The gesture remains visible, calm, and highly precise.",
        image: "/images/experience/bleu-maree-plating-action.jpg"
      },
      {
        title: "Signature crudo",
        caption: "Marine freshness, a clean cut, and aromatic tension.",
        image: "/images/menu/bleu-maree-menu-crudo-signature.png"
      },
      {
        title: "Roasted scallops",
        caption: "Noble product, gentle heat, and gastronomic structure.",
        image: "/images/menu/bleu-maree-menu-scallops-signature.png"
      },
      {
        title: "Table detail",
        caption: "Materials, texture, and a feeling of understated luxury.",
        image: "/images/details/bleu-maree-detail-table-setting.jpg"
      }
    ]
  }
};

export const galleryItems = galleryContentByLocale.fr.galleryItems;

export function getGalleryContent(locale: Locale) {
  return galleryContentByLocale[locale];
}
