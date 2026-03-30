import type { Locale } from "@/i18n/config";

const restaurantContentByLocale = {
  fr: {
    pageHero: {
      eyebrow: "Le restaurant",
      title: "Une maison où l'élégance reste vivante.",
      intro:
        "À Bleu Marée, la cuisine, la salle et le service avancent dans le même souffle: une table marine contemporaine, lumineuse et profondément hospitalière.",
      image: "/images/hero/bleu-maree-hero-dining-room-golden-hour-realistic.jpg",
      imagePosition: "50% 54%"
    },
    storyContent: {
      eyebrow: "Notre histoire",
      title: "Une maison pensée comme une mise au point.",
      intro:
        "Bleu Marée est né d'une envie simple: offrir à Biarritz une table marine contemporaine où la sophistication reste lisible, sensible et profondément hospitalière.",
      paragraphs: [
        "La cuisine s'ancre dans les produits de la mer, sans folklore. Les sauces sont courtes, les assaisonnements précis, les dressages aérés. Chaque assiette cherche l'intensité sans jamais perdre la sensation de calme.",
        "La salle prolonge cette approche avec une esthétique douce, minérale et lumineuse. L'expérience vise autant la justesse du goût que la qualité de présence: temps du service, lumière, circulation, silence, matière."
      ],
      image: "/images/people/bleu-maree-chef-portrait.jpg",
      imageAlt: "Portrait du chef de Bleu Marée",
      imagePosition: "50% 44%"
    },
    foundations: {
      eyebrow: "Fondations",
      title: "Trois repères pour comprendre la maison.",
      lead:
        "Bleu Marée tient sur quelques convictions simples: la qualité du produit, la précision du geste et une élégance qui ne se donne jamais en spectacle."
    },
    sourcingPillars: [
      {
        title: "Atlantique & proximité",
        copy:
          "Une sélection attentive de produits marins, complétée par des partenaires régionaux pour les légumes, herbes, pains et accords."
      },
      {
        title: "Cuisine de précision",
        copy:
          "Une gastronomie française contemporaine, claire dans ses goûts, tenue dans ses sauces et précise dans ses cuissons."
      },
      {
        title: "Élégance sans froideur",
        copy:
          "Le luxe est traité ici comme une qualité de sensation: plus de respiration, plus de soin, plus d'attention portée au détail."
      }
    ],
    atmosphereDetails: [
      {
        label: "Ambiance",
        copy: "Lignes épurées, matières claires, lumière travaillée et présence constante de l'Atlantique."
      },
      {
        label: "Équipe",
        copy: "Une brigade resserrée, attentive, formée à un service précis et discret."
      },
      {
        label: "Occasions",
        copy: "Dîners à deux, rendez-vous professionnels, anniversaires et soirées sur mesure."
      }
    ],
    visualMoments: [
      {
        label: "Salle",
        image: "/images/hero/bleu-maree-hero-dining-room-golden-hour-realistic.jpg",
        alt: "Salle principale Bleu Marée à l'heure dorée",
        position: "50% 54%"
      },
      {
        label: "Service",
        image: "/images/people/bleu-maree-team-service-in-action.jpg",
        alt: "Équipe en préparation de service chez Bleu Marée",
        position: "50% 46%"
      },
      {
        label: "Détail",
        image: "/images/details/bleu-maree-detail-glassware-candlelight.jpg",
        alt: "Verrerie et lumière tamisée chez Bleu Marée",
        position: "50% 50%"
      }
    ],
    teamMoments: {
      title: "Une équipe qui sert avec netteté, sans jamais hausser le ton.",
      copy:
        "De la cuisine à la salle, chaque interaction cherche la fluidité: le bon tempo, la bonne distance, le bon geste. C'est cette cohérence qui donne à Bleu Marée sa présence.",
      image: "/images/people/bleu-maree-team-service-in-action.jpg",
      imageAlt: "Équipe Bleu Marée en service",
      imagePosition: "50% 46%"
    },
    craftsmanshipMoments: {
      title: "Le geste et la matière restent visibles.",
      copy:
        "Le dressage, la chauffe, l'accord et le dernier geste au passe racontent autant que la carte. Le raffinement tient ici à la maîtrise, pas à l'effet.",
      image: "/images/experience/bleu-maree-chef-plating-closeup.jpg",
      imageAlt: "Dressage précis en cuisine chez Bleu Marée",
      imagePosition: "50% 52%"
    },
    actions: {
      reserve: "Réserver une table",
      experiences: "Voir les expériences",
      contact: "Nous écrire"
    }
  },
  en: {
    pageHero: {
      eyebrow: "The restaurant",
      title: "A house where elegance stays alive.",
      intro:
        "At Bleu Maree, cuisine, room, and service move in the same breath: a contemporary seafood table that feels luminous, precise, and deeply hospitable.",
      image: "/images/hero/bleu-maree-hero-dining-room-golden-hour-realistic.jpg",
      imagePosition: "50% 54%"
    },
    storyContent: {
      eyebrow: "Our story",
      title: "A house designed like a careful calibration.",
      intro:
        "Bleu Maree was born from a simple ambition: to offer Biarritz a contemporary seafood table where sophistication remains readable, sensitive, and deeply hospitable.",
      paragraphs: [
        "The cuisine is rooted in seafood without folklore. Sauces stay short, seasoning stays precise, plating stays airy. Every dish seeks intensity without ever losing its sense of calm.",
        "The dining room extends this approach through a soft, mineral, and luminous aesthetic. The experience aims as much for accuracy of taste as for quality of presence: service tempo, light, circulation, silence, and materiality."
      ],
      image: "/images/people/bleu-maree-chef-portrait.jpg",
      imageAlt: "Portrait of the Bleu Maree chef",
      imagePosition: "50% 44%"
    },
    foundations: {
      eyebrow: "Foundations",
      title: "Three markers to understand the house.",
      lead:
        "Bleu Maree rests on a few simple convictions: the quality of the ingredient, the precision of the gesture, and an elegance that never needs to perform."
    },
    sourcingPillars: [
      {
        title: "Atlantic sourcing & proximity",
        copy:
          "A careful selection of seafood, complemented by regional partners for vegetables, herbs, breads, and pairings."
      },
      {
        title: "Precision cuisine",
        copy:
          "A contemporary French gastronomy rooted in clarity of flavor, controlled sauces, and accurate cooking."
      },
      {
        title: "Elegance without distance",
        copy:
          "Luxury is treated here as a quality of sensation: more breathing room, more care, more attention to detail."
      }
    ],
    atmosphereDetails: [
      {
        label: "Atmosphere",
        copy: "Clean lines, pale materials, carefully shaped light, and the constant presence of the Atlantic."
      },
      {
        label: "Team",
        copy: "A focused brigade trained for precise, discreet service."
      },
      {
        label: "Occasions",
        copy: "Dinner for two, business meetings, anniversaries, and bespoke evenings."
      }
    ],
    visualMoments: [
      {
        label: "Room",
        image: "/images/hero/bleu-maree-hero-dining-room-golden-hour-realistic.jpg",
        alt: "Bleu Maree main dining room at golden hour",
        position: "50% 54%"
      },
      {
        label: "Service",
        image: "/images/people/bleu-maree-team-service-in-action.jpg",
        alt: "Team preparing service at Bleu Maree",
        position: "50% 46%"
      },
      {
        label: "Detail",
        image: "/images/details/bleu-maree-detail-glassware-candlelight.jpg",
        alt: "Glassware and low light at Bleu Maree",
        position: "50% 50%"
      }
    ],
    teamMoments: {
      title: "A team that serves with clarity and never raises its voice.",
      copy:
        "From kitchen to dining room, every interaction aims for flow: the right tempo, the right distance, the right gesture. That coherence is what gives Bleu Maree its presence.",
      image: "/images/people/bleu-maree-team-service-in-action.jpg",
      imageAlt: "Bleu Maree team in service",
      imagePosition: "50% 46%"
    },
    craftsmanshipMoments: {
      title: "Gesture and material remain visible.",
      copy:
        "Plating, heat, pairing, and the final pass all tell as much of the story as the menu itself. Refinement here comes from mastery, not effect.",
      image: "/images/experience/bleu-maree-chef-plating-closeup.jpg",
      imageAlt: "Precise plating in the Bleu Maree kitchen",
      imagePosition: "50% 52%"
    },
    actions: {
      reserve: "Book a table",
      experiences: "View experiences",
      contact: "Write to us"
    }
  }
};

export const storyContent = restaurantContentByLocale.fr.storyContent;
export const sourcingPillars = restaurantContentByLocale.fr.sourcingPillars;
export const atmosphereDetails = restaurantContentByLocale.fr.atmosphereDetails;
export const teamMoments = restaurantContentByLocale.fr.teamMoments;
export const craftsmanshipMoments = restaurantContentByLocale.fr.craftsmanshipMoments;

export function getRestaurantContent(locale: Locale) {
  return restaurantContentByLocale[locale];
}
