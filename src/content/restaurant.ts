import type { Locale } from "@/i18n/config";

const restaurantContentByLocale = {
  fr: {
    pageHero: {
      eyebrow: "La maison",
      title: "Ici, tout est tenu.",
      intro:
        "Salle, service, lumière, rythme. On sent qu'une main tient la maison.",
      image: "/images/hero/bleu-maree-hero-dining-room-golden-hour-realistic.jpg",
      imagePosition: "50% 54%",
      markers: [],
      noteLabel: "Ce que l'on remarque vite",
      note:
        "Du calme. De la netteté. Et quelqu'un qui tient vraiment la ligne."
    },
    storyContent: {
      eyebrow: "La tenue",
      title: "La salle reçoit. Le service règle le tempo. Le reste peut vivre.",
      intro:
        "On entre, et l'on comprend vite que rien n'est laissé au hasard.",
      quote: "On reconnaît une maison à ce qu'elle n'appuie jamais.",
      paragraphs: [
        "On n'a pas demandé à la salle d'impressionner. On lui a demandé d'apaiser.",
        "Le service et la cuisine avancent dans la même idée: tenir le goût, laisser la table respirer."
      ],
      image: "/images/people/bleu-maree-chef-portrait.jpg",
      imageAlt: "Portrait du chef de Bleu Marée",
      imagePosition: "50% 44%"
    },
    foundations: {
      eyebrow: "Trois choses",
      title: "La matière, la lumière, la distance. Puis l'humain.",
      lead:
        "Le reste tient dans leur équilibre, et dans une attention qui ne se montre pas."
    },
    sourcingPillars: [
      {
        title: "La mer d'abord",
        copy:
          "L'Atlantique donne le ton. Le reste suit."
      },
      {
        title: "Le geste net",
        copy:
          "Cuissons, sauces, assaisonnements, dressages: rien ne parle plus fort que le goût."
      },
      {
        title: "La bonne distance",
        copy:
          "Le service approche quand il le faut, puis rend la soirée à ceux qui la vivent."
      }
    ],
    atmosphereDetails: [
      {
        label: "Déjeuner",
        copy: "Plus clair, plus ouvert, toujours tenu."
      },
      {
        label: "Soir",
        copy: "Plus dense, plus feutré, sans perdre la netteté."
      },
      {
        label: "Occasions",
        copy:
          "Un déjeuner choisi, un dîner à deux, une célébration discrète: la maison reçoit sans changer de ton."
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
      title: "Le service ne s'interpose jamais.",
      copy:
        "Il accueille comme s'il vous attendait. Il observe, il règle, puis il s'efface.",
      image: "/images/experience/bleu-maree-service-in-dining-room.jpg",
      imageAlt: "Service en salle chez Bleu Marée",
      imagePosition: "50% 48%"
    },
    craftsmanshipMoments: {
      title: "En cuisine, le geste reste lisible.",
      copy:
        "Produit, cuisson, sauce, assaisonnement. Si le geste cherche à se faire admirer, il a déjà trop parlé.",
      image: "/images/experience/bleu-maree-chef-plating-closeup.jpg",
      imageAlt: "Dressage précis en cuisine chez Bleu Marée",
      imagePosition: "50% 52%"
    },
    actions: {
      reserve: "Réserver une table",
      experiences: "Voir les expériences",
      contact: "Contact"
    }
  },
  en: {
    pageHero: {
      eyebrow: "The house",
      title: "Everything is held here.",
      intro:
        "Room, service, light, rhythm. You can feel a hand holding the house together.",
      image: "/images/hero/bleu-maree-hero-dining-room-golden-hour-realistic.jpg",
      imagePosition: "50% 54%",
      markers: [],
      noteLabel: "What stands out quickly",
      note:
        "Calm. Clarity. And someone truly holding the line."
    },
    storyContent: {
      eyebrow: "The hold",
      title: "The room receives. Service sets the tempo. The rest can breathe.",
      intro:
        "You enter, and you quickly understand that nothing has been left to chance.",
      quote: "You recognise a house by what it never pushes.",
      paragraphs: [
        "The room was not asked to impress. It was asked to settle people.",
        "Service and kitchen move inside the same idea: hold the taste, let the table breathe."
      ],
      image: "/images/people/bleu-maree-chef-portrait.jpg",
      imageAlt: "Portrait of the Bleu Maree chef",
      imagePosition: "50% 44%"
    },
    foundations: {
      eyebrow: "Three things",
      title: "Ingredient, light, distance. Then the human touch.",
      lead:
        "Everything else rests on their balance, and on an attention that never shows off."
    },
    sourcingPillars: [
      {
        title: "Sea first",
        copy:
          "The Atlantic sets the tone. Everything else follows."
      },
      {
        title: "Clean gesture",
        copy:
          "Cooking, sauces, seasoning, plating: nothing speaks louder than taste."
      },
      {
        title: "The right distance",
        copy:
          "Service comes close when needed, then gives the evening back to the people living it."
      }
    ],
    atmosphereDetails: [
      {
        label: "Lunch",
        copy: "Clearer, more open, always held."
      },
      {
        label: "Evening",
        copy: "Denser, quieter, without losing clarity."
      },
      {
        label: "Occasions",
        copy:
          "A chosen lunch, dinner for two, a discreet celebration: the house receives without changing its tone."
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
      title: "Service never steps in front.",
      copy:
        "It welcomes as if it had been waiting for you. It observes, adjusts, then steps back.",
      image: "/images/experience/bleu-maree-service-in-dining-room.jpg",
      imageAlt: "Bleu Maree dining room service",
      imagePosition: "50% 48%"
    },
    craftsmanshipMoments: {
      title: "In the kitchen, the gesture stays legible.",
      copy:
        "Ingredient, cooking, sauce, seasoning. If the gesture asks to be admired, it is already speaking too loudly.",
      image: "/images/experience/bleu-maree-chef-plating-closeup.jpg",
      imageAlt: "Precise plating in the Bleu Maree kitchen",
      imagePosition: "50% 52%"
    },
    actions: {
      reserve: "Book a table",
      experiences: "View experiences",
      contact: "Contact"
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
