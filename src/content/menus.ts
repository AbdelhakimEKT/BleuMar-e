import type { Locale } from "@/i18n/config";

export type MenuItem = {
  name: string;
  description: string;
  price: string;
  tag?: string;
};

export type MenuSection = {
  title: string;
  subtitle: string;
  priceHint: string;
  description: string;
  items: MenuItem[];
};

const menusContentByLocale = {
  fr: {
    pageHero: {
      eyebrow: "La carte",
      title: "Une carte portée par l'Atlantique et la saison.",
      intro:
        "Du déjeuner précis aux parcours dégustation, la carte Bleu Marée suit les arrivages, les saisons et la lumière du service.",
      image: "/images/menu/bleu-maree-menu-scallops-signature.png",
      imagePosition: "50% 56%"
    },
    sectionIntro: {
      eyebrow: "À table",
      title: "Du déjeuner aux grands parcours, chaque moment a sa place.",
      lead:
        "Déjeuner précis, assiettes à la carte, parcours dégustation, cave et accords: chacun trouve ici son rythme, sans perdre la cohérence de la maison."
    },
    seasonalitySplit: {
      eyebrow: "Selon arrivage",
      title: "La carte reste vivante, guidée par le marché et la saison.",
      intro:
        "Certaines assiettes n'existent que le temps d'un arrivage, d'une mer plus calme ou d'un produit au sommet de sa tension.",
      paragraphs: [
        "Les menus de fête, les accords spéciaux et les moments signatures apparaissent lorsque la saison l'appelle, puis s'effacent sans alourdir l'ensemble.",
        "C'est ce mouvement qui garde Bleu Marée juste: une maison attentive au moment plutôt qu'une carte figée."
      ],
      image: "/images/details/bleu-maree-detail-table-setting.jpg",
      imageAlt: "Détail de table Bleu Marée",
      imagePosition: "50% 52%",
      actions: {
        reserve: "Réserver",
        pdf: "Télécharger la carte PDF"
      }
    },
    menuSections: [
      {
        title: "Menu déjeuner",
        subtitle: "Service du midi",
        priceHint: "39 € · 2 ou 3 temps",
        description:
          "Une proposition plus concise, pensée pour un déjeuner gastronomique net, élégant et sans lourdeur.",
        items: [
          {
            name: "Entrée du marché",
            description: "Composition du moment selon la saison et les arrivages.",
            price: "16 €",
            tag: "De saison"
          },
          {
            name: "Poisson du jour ou viande du moment",
            description: "Suggestion du moment selon l'arrivage et l'inspiration du jour.",
            price: "28 €",
            tag: "Selon arrivage"
          },
          {
            name: "Dessert du chef",
            description: "Finale du jour, nette et saisonnière.",
            price: "12 €"
          }
        ]
      },
      {
        title: "Menu dégustation 5 temps",
        subtitle: "Parcours signature",
        priceHint: "95 €",
        description:
          "Un parcours concis pour retrouver l'esprit Bleu Marée à travers la mer, la saison et la justesse des cuissons.",
        items: [
          {
            name: "Huître, pomme verte, verjus",
            description: "Ouverture saline et vive pour lancer la dégustation.",
            price: "Inclus",
            tag: "De saison"
          },
          {
            name: "Crudo de Saint-Jacques",
            description: "Agrumes doux, huile d'algues et feuille capucine.",
            price: "Inclus",
            tag: "Signature"
          },
          {
            name: "Poisson de ligne, jus réduit",
            description: "Lecture du moment selon arrivage et maturité du produit.",
            price: "Inclus",
            tag: "Selon arrivage"
          },
          {
            name: "Pré-dessert",
            description: "Transition fraîche et légère autour des agrumes.",
            price: "Inclus"
          },
          {
            name: "Dessert signature",
            description: "Finale précise, nette et aérienne.",
            price: "Inclus"
          }
        ]
      },
      {
        title: "Menu dégustation 7 temps",
        subtitle: "Expérience complète",
        priceHint: "135 €",
        description:
          "Une progression plus ample pour celles et ceux qui veulent vivre la maison dans sa forme la plus généreuse.",
        items: [
          {
            name: "Mise en bouche marine",
            description: "Amuse-bouche inspiré de l'Atlantique.",
            price: "Inclus"
          },
          {
            name: "Entrée froide signature",
            description: "Jeu de coupe, fraîcheur et tension aromatique.",
            price: "Inclus"
          },
          {
            name: "Entrée chaude de saison",
            description: "Travail plus enveloppant autour du jus et des textures.",
            price: "Inclus",
            tag: "De saison"
          },
          {
            name: "Poisson noble",
            description: "Cuisson juste et garniture végétale.",
            price: "Inclus",
            tag: "Selon arrivage"
          },
          {
            name: "Viande choisie",
            description: "Séquence plus terrienne pour donner du relief au parcours.",
            price: "Inclus"
          },
          {
            name: "Pré-dessert",
            description: "Relance fraîche avant la finale sucrée.",
            price: "Inclus"
          },
          {
            name: "Dessert signature",
            description: "Clôture de l'expérience sur une note claire et élégante.",
            price: "Inclus",
            tag: "Signature"
          }
        ]
      },
      {
        title: "Entrées",
        subtitle: "À la carte",
        priceHint: "De 18 € à 32 €",
        description:
          "Assiettes d'ouverture pensées pour installer immédiatement le ton de la maison.",
        items: [
          {
            name: "Crudo de Saint-Jacques",
            description: "Agrumes doux, huile d'algues, herbes fraîches.",
            price: "24 €",
            tag: "Signature"
          },
          {
            name: "Langoustine, laitue braisée, bisque légère",
            description: "Une entrée plus enveloppante, structurée et profonde.",
            price: "32 €"
          },
          {
            name: "Entrée végétale du moment",
            description: "Interprétation saisonnière selon le marché.",
            price: "18 €",
            tag: "De saison"
          }
        ]
      },
      {
        title: "Poissons & produits de la mer",
        subtitle: "À la carte",
        priceHint: "De 34 € à 54 €",
        description:
          "Le coeur de la carte, construit autour des produits marins et de la précision des cuissons.",
        items: [
          {
            name: "Poisson du jour",
            description: "Cuisson courte, garniture saisonnière et sauce de la maison.",
            price: "34 €",
            tag: "Selon arrivage"
          },
          {
            name: "Saint-Jacques rôties",
            description: "Céleri, noisette et jus corsé mais net.",
            price: "46 €",
            tag: "Signature"
          },
          {
            name: "Turbot, beurre blanc fumé, poireau jeune",
            description: "Lecture contemporaine d'un grand produit.",
            price: "54 €"
          }
        ]
      },
      {
        title: "Viandes",
        subtitle: "À la carte",
        priceHint: "De 36 € à 48 €",
        description:
          "Une sélection courte pour prolonger la carte avec une séquence plus terrienne, sans rompre l'équilibre d'ensemble.",
        items: [
          {
            name: "Volaille fermière, jus réduit, légumes braisés",
            description: "Texture fondante et sauce courte.",
            price: "36 €"
          },
          {
            name: "Pièce de boeuf maturée",
            description: "Accompagnement saisonnier et jus plus profond.",
            price: "48 €"
          }
        ]
      },
      {
        title: "Desserts",
        subtitle: "À la carte",
        priceHint: "De 14 € à 21 €",
        description:
          "Des finales précises, construites sur la fraîcheur, le relief et l'équilibre.",
        items: [
          {
            name: "Dessert signature",
            description: "Crème légère, agrumes et note toastée.",
            price: "21 €",
            tag: "Signature"
          },
          {
            name: "Dessert du moment",
            description: "Variation courte selon la saison.",
            price: "14 €",
            tag: "De saison"
          }
        ]
      },
      {
        title: "Carte des vins",
        subtitle: "Sélection cave",
        priceHint: "À partir de 9 € le verre",
        description:
          "Une cave courte et pensée pour dialoguer avec la minéralité, l'iode et la précision du menu.",
        items: [
          {
            name: "Verres du moment",
            description: "Sélection qui suit la carte, l'heure du repas et la saison.",
            price: "9 € à 18 €"
          },
          {
            name: "Bouteilles signature",
            description: "Sélection française et quelques accents plus atlantiques.",
            price: "À partir de 42 €"
          }
        ]
      },
      {
        title: "Accords mets & vins",
        subtitle: "Sommellerie",
        priceHint: "42 € à 86 €",
        description:
          "Accords pensés pour épouser les menus dégustation et les temps forts de la carte.",
        items: [
          {
            name: "Accord 3 verres",
            description: "Pour le déjeuner ou un parcours plus court.",
            price: "42 €"
          },
          {
            name: "Accord 5 verres",
            description: "Progression en douceur, de la fraîcheur à la profondeur.",
            price: "68 €"
          },
          {
            name: "Accord 7 verres",
            description: "Version complète pour le menu dégustation 7 temps.",
            price: "86 €"
          }
        ]
      },
      {
        title: "Menu spécial événement",
        subtitle: "Temps fort",
        priceHint: "Selon programmation",
        description:
          "Section activable pour les fêtes, collaborations, Saint-Valentin ou soirées signatures.",
        items: [
          {
            name: "Exemple de menu spécial",
            description: "À publier seulement lorsqu'un événement est actif.",
            price: "Sur annonce",
            tag: "Événement"
          }
        ]
      }
    ],
    menuNotes: [
      "Certaines préparations changent discrètement avec les arrivages, sans jamais rompre l'équilibre de la carte.",
      "Les accords peuvent prolonger la dégustation ou simplement accompagner un déjeuner plus court avec la même justesse.",
      "Les menus spéciaux n'apparaissent que lorsqu'ils ont un vrai rôle à jouer: fête, collaboration, soirée unique ou saison très courte."
    ]
  },
  en: {
    pageHero: {
      eyebrow: "Menus",
      title: "A menu shaped by the Atlantic and the season.",
      intro:
        "From a precise lunch to immersive tasting journeys, the Bleu Maree menu follows arrivals, seasons, and the light of service.",
      image: "/images/menu/bleu-maree-menu-scallops-signature.png",
      imagePosition: "50% 56%"
    },
    sectionIntro: {
      eyebrow: "At the table",
      title: "From lunch to longer tastings, every moment has its place.",
      lead:
        "Lunch, a la carte dishes, tasting paths, cellar, and pairings each follow their own rhythm while staying true to the house."
    },
    seasonalitySplit: {
      eyebrow: "According to market arrivals",
      title: "The menu stays alive, guided by market rhythm and season.",
      intro:
        "Some plates only exist for the length of an arrival, a calmer sea, or a product reaching its sharpest point.",
      paragraphs: [
        "Celebration menus, special pairings, and signature moments appear when the season calls for them, then quietly make room again.",
        "That movement is what keeps Bleu Maree accurate: a house that works with the moment rather than a fixed list."
      ],
      image: "/images/details/bleu-maree-detail-table-setting.jpg",
      imageAlt: "Bleu Maree table detail",
      imagePosition: "50% 52%",
      actions: {
        reserve: "Book",
        pdf: "Download the menu PDF"
      }
    },
    menuSections: [
      {
        title: "Lunch menu",
        subtitle: "Lunch service",
        priceHint: "EUR39 · 2 or 3 courses",
        description:
          "A shorter proposal designed for a refined lunch that stays elegant and direct.",
        items: [
          {
            name: "Market starter",
            description: "Current composition shaped by the season and daily arrivals.",
            price: "EUR16",
            tag: "Seasonal"
          },
          {
            name: "Fish of the day or meat of the moment",
            description: "A daily suggestion shaped by arrivals and the tone of the day.",
            price: "EUR28",
            tag: "According to market arrivals"
          },
          {
            name: "Chef's dessert",
            description: "A clean and seasonal final note.",
            price: "EUR12"
          }
        ]
      },
      {
        title: "Five-course tasting menu",
        subtitle: "Signature journey",
        priceHint: "EUR95",
        description:
          "A concise path through the Bleu Maree universe, led by the sea, the season, and accurate cooking.",
        items: [
          {
            name: "Oyster, green apple, verjus",
            description: "A saline, lively opening to begin the tasting.",
            price: "Included",
            tag: "Seasonal"
          },
          {
            name: "Scallop crudo",
            description: "Soft citrus, seaweed oil, and nasturtium leaf.",
            price: "Included",
            tag: "Signature"
          },
          {
            name: "Line-caught fish, reduced jus",
            description: "A moment-specific reading depending on arrivals and maturity.",
            price: "Included",
            tag: "According to market arrivals"
          },
          {
            name: "Pre-dessert",
            description: "A fresh, light transition built around citrus.",
            price: "Included"
          },
          {
            name: "Signature dessert",
            description: "A precise, airy ending.",
            price: "Included"
          }
        ]
      },
      {
        title: "Seven-course tasting menu",
        subtitle: "Complete experience",
        priceHint: "EUR135",
        description:
          "A broader progression for guests who want to experience the house in its most generous form.",
        items: [
          {
            name: "Marine amuse-bouche",
            description: "A bite inspired by the Atlantic.",
            price: "Included"
          },
          {
            name: "Cold signature starter",
            description: "A play of cut, freshness, and aromatic tension.",
            price: "Included"
          },
          {
            name: "Seasonal warm starter",
            description: "A more enveloping sequence built around jus and texture.",
            price: "Included",
            tag: "Seasonal"
          },
          {
            name: "Noble fish",
            description: "Precise cooking and a vegetal garnish.",
            price: "Included",
            tag: "According to market arrivals"
          },
          {
            name: "Selected meat",
            description: "A more terrestrial moment to add relief to the journey.",
            price: "Included"
          },
          {
            name: "Pre-dessert",
            description: "A fresh reset before the sweet finale.",
            price: "Included"
          },
          {
            name: "Signature dessert",
            description: "A clear and elegant close to the experience.",
            price: "Included",
            tag: "Signature"
          }
        ]
      },
      {
        title: "Starters",
        subtitle: "A la carte",
        priceHint: "From EUR18 to EUR32",
        description:
          "Opening plates designed to establish the house tone immediately.",
        items: [
          {
            name: "Scallop crudo",
            description: "Soft citrus, seaweed oil, and fresh herbs.",
            price: "EUR24",
            tag: "Signature"
          },
          {
            name: "Langoustine, braised lettuce, light bisque",
            description: "A more enveloping, structured, and deeper starter.",
            price: "EUR32"
          },
          {
            name: "Vegetal dish of the moment",
            description: "A seasonal interpretation according to the market.",
            price: "EUR18",
            tag: "Seasonal"
          }
        ]
      },
      {
        title: "Fish & seafood",
        subtitle: "A la carte",
        priceHint: "From EUR34 to EUR54",
        description:
          "The heart of the menu, built around marine ingredients and precise cooking.",
        items: [
          {
            name: "Fish of the day",
            description: "Short cooking, seasonal garnish, and house sauce.",
            price: "EUR34",
            tag: "According to market arrivals"
          },
          {
            name: "Roasted scallops",
            description: "Celery, hazelnut, and a rich but clean jus.",
            price: "EUR46",
            tag: "Signature"
          },
          {
            name: "Turbot, smoked beurre blanc, young leek",
            description: "A contemporary reading of a grand ingredient.",
            price: "EUR54"
          }
        ]
      },
      {
        title: "Meats",
        subtitle: "A la carte",
        priceHint: "From EUR36 to EUR48",
        description:
          "A short selection for guests who want to extend the menu with a more grounded sequence without losing balance.",
        items: [
          {
            name: "Free-range poultry, reduced jus, braised vegetables",
            description: "Tender texture and a short sauce.",
            price: "EUR36"
          },
          {
            name: "Aged beef cut",
            description: "Seasonal garnish and a deeper jus.",
            price: "EUR48"
          }
        ]
      },
      {
        title: "Desserts",
        subtitle: "A la carte",
        priceHint: "From EUR14 to EUR21",
        description:
          "Precise endings built on freshness, contrast, and balance.",
        items: [
          {
            name: "Signature dessert",
            description: "Light cream, citrus, and a toasted note.",
            price: "EUR21",
            tag: "Signature"
          },
          {
            name: "Dessert of the moment",
            description: "A short variation according to the season.",
            price: "EUR14",
            tag: "Seasonal"
          }
        ]
      },
      {
        title: "Wine list",
        subtitle: "Cellar selection",
        priceHint: "From EUR9 per glass",
        description:
          "A concise cellar designed to dialogue with minerality, iodine, and the precision of the menu.",
        items: [
          {
            name: "Glasses of the moment",
            description: "An evolving selection shaped by the menu, the hour, and the season.",
            price: "EUR9 to EUR18"
          },
          {
            name: "Signature bottles",
            description: "French selections with a few more Atlantic accents.",
            price: "From EUR42"
          }
        ]
      },
      {
        title: "Food & wine pairings",
        subtitle: "Sommelier selection",
        priceHint: "EUR42 to EUR86",
        description:
          "Pairings designed to match the tasting menus and the strongest moments of the menu.",
        items: [
          {
            name: "Three-glass pairing",
            description: "For lunch or a shorter journey.",
            price: "EUR42"
          },
          {
            name: "Five-glass pairing",
            description: "A gentle progression from freshness into depth.",
            price: "EUR68"
          },
          {
            name: "Seven-glass pairing",
            description: "The complete version for the seven-course tasting menu.",
            price: "EUR86"
          }
        ]
      },
      {
        title: "Special event menu",
        subtitle: "Featured moment",
        priceHint: "According to programming",
        description:
          "A section ready to be activated for celebrations, collaborations, Valentine's Day, or signature evenings.",
        items: [
          {
            name: "Sample special menu",
            description: "To be published only when an event is active.",
            price: "Announced separately",
            tag: "Event"
          }
        ]
      }
    ],
    menuNotes: [
      "Some preparations shift quietly with arrivals while preserving the overall balance of the menu.",
      "Pairings can extend the tasting experience or simply accompany a shorter lunch with the same level of care.",
      "Special menus only appear when they have a real role to play: celebration, collaboration, singular evening, or brief season."
    ]
  }
};

export const menuSections: MenuSection[] = menusContentByLocale.fr.menuSections;
export const menuNotes = menusContentByLocale.fr.menuNotes;

export function getMenusContent(locale: Locale) {
  return menusContentByLocale[locale];
}
