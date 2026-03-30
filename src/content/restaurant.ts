import type { Locale } from "@/i18n/config";

const restaurantContentByLocale = {
  fr: {
    pageHero: {
      eyebrow: "Le restaurant",
      title: "Une maison où l'élégance reste vivante.",
      intro:
        "Histoire, vision culinaire, travail de l'équipe et atmosphère: le site structure un vrai récit de marque, plus humain et plus premium.",
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
      title: "Trois piliers pour raconter la maison sans lourdeur.",
      lead:
        "La page alterne storytelling, détails concrets et visuels d'équipe pour donner de la profondeur sans perdre la clarté."
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
          "Une lecture contemporaine de la gastronomie française: clarté, profondeur et construction technique sans démonstration inutile."
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
        copy: "Une brigade réduite, attentive, formée à un service précis, discret et très lisible pour le client."
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
      title: "Une équipe orchestrée comme une salle de concert intime.",
      copy:
        "De la cuisine au service, chaque interaction vise la fluidité: bon tempo, bonne distance, bonne précision. Cette cohérence donne à Bleu Marée son ressenti premium sans surjeu.",
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
        "Story, culinary vision, team craft, and atmosphere: the site builds a true brand narrative, more human and more premium.",
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
      title: "Three pillars to tell the story without making it heavy.",
      lead:
        "The page alternates storytelling, concrete details, and team imagery to add depth without losing clarity."
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
          "A contemporary reading of French gastronomy: clarity, depth, and technical structure without unnecessary display."
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
        copy: "A focused brigade trained for a precise, discreet, highly legible style of service."
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
      title: "A team orchestrated like an intimate concert hall.",
      copy:
        "From kitchen to service, every interaction aims for flow: the right tempo, the right distance, the right precision. That coherence is what gives Bleu Maree its premium feeling without overplaying it.",
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
