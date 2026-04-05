import type { Locale } from "@/i18n/config";

const homeContentByLocale = {
  fr: {
    heroContent: {
      eyebrow: "Maison de gastronomie française contemporaine",
      title: "La mer attire. La maison retient.",
      intro:
        "La mer arrive nette. Le service laisse la table respirer. Le reste se sent.",
      primaryCta: { href: "/reservation", label: "Réserver une table" },
      secondaryCta: { href: "/menus", label: "Découvrir la carte" },
      image: "/images/hero/bleu-maree-hero-dining-room-golden-hour-realistic.jpg",
      houseNote:
        "Ici, rien n'est là pour impressionner. Tout est là pour tenir la soirée.",
      highlights: [
        "La mer suit l'arrivage, pas la pose",
        "Une lumière qui calme avant de séduire",
        "Un service qui sait se retirer"
      ]
    },
    philosophyHighlights: [
      {
        title: "La mer n'a pas besoin d'effet",
        copy:
          "Quand le produit tient, la maison le laisse parler sans hausser le ton."
      },
      {
        title: "Le rythme compte autant que l'assiette",
        copy:
          "On doit se sentir accueilli avant même la première bouchée, puis porté jusqu'au dernier verre."
      },
      {
        title: "Le soin sans théâtre",
        copy:
          "La précision se remarque après coup. Sur le moment, elle simplifie tout."
      }
    ],
    signatureDishes: [
      {
        name: "Crudo de Saint-Jacques",
        description:
          "Agrumes doux, huile d'algues et salinité fraîche pour une entrée nette, iodée et lumineuse.",
        price: "38 €",
        tag: "Signature",
        image: "/images/menu/bleu-maree-menu-seafood-signature-closeup.jpg"
      },
      {
        name: "Saint-Jacques rôties",
        description:
          "Jus nacré, textures de céleri et accent grillé dans une assiette plus profonde et structurée.",
        price: "46 €",
        tag: "Menu dégustation",
        image: "/images/menu/bleu-maree-menu-seafood-signature-alt.jpg"
      },
      {
        name: "Dessert signature aux notes marines",
        description:
          "Fraîcheur lactée, agrumes et finale minérale dans un dessert précis, net et aérien.",
        price: "21 €",
        tag: "Finale",
        image: "/images/desserts/bleu-maree-dessert-signature-alt.jpg"
      }
    ],
    guestJourney: [
      {
        title: "L'arrivée doit déjà rassurer",
        copy:
          "Réserver, entrer, s'installer: tout doit sembler simple, net, presque déjà connu."
      },
      {
        title: "Le repas monte sans brusquer",
        copy:
          "Fraîcheur, relief, profondeur: la carte gagne en intensité sans jamais faire sentir l'effort."
      },
      {
        title: "La finale laisse plus qu'un goût",
        copy:
          "Ce qui reste n'est pas une démonstration, mais une soirée entière tenue avec justesse."
      }
    ],
    curatedImpressions: [
      "On sort d'ici avec plus qu'un goût: une tenue.",
      "Une adresse rare, parce qu'elle reste humaine jusque dans la retenue.",
      "Un dîner qui ne cherche jamais à plaire trop vite."
    ]
  },
  en: {
    heroContent: {
      eyebrow: "Contemporary French gastronomic house",
      title: "The sea draws you in. The house makes you stay.",
      intro:
        "The sea arrives clear. Service lets the table breathe. The rest is simply felt.",
      primaryCta: { href: "/reservation", label: "Book a table" },
      secondaryCta: { href: "/menus", label: "Explore the menu" },
      image: "/images/hero/bleu-maree-hero-dining-room-golden-hour-realistic.jpg",
      houseNote:
        "Nothing here is made to impress. Everything is made to hold the evening.",
      highlights: [
        "The sea follows arrivals, not display",
        "A light that calms before it seduces",
        "Service that knows how to step back"
      ]
    },
    philosophyHighlights: [
      {
        title: "The sea does not need effect",
        copy:
          "When the ingredient holds, the house lets it speak without raising the tone."
      },
      {
        title: "Rhythm matters as much as the plate",
        copy:
          "You should feel welcomed before the first bite, then carried through to the last glass."
      },
      {
        title: "Care without theatre",
        copy:
          "Precision is noticed afterwards. In the moment, it simply makes everything easier."
      }
    ],
    signatureDishes: [
      {
        name: "Scallop crudo",
        description:
          "Soft citrus, seaweed oil, and a saline freshness for a clean, iodized, luminous opening.",
        price: "€38",
        tag: "Signature",
        image: "/images/menu/bleu-maree-menu-seafood-signature-closeup.jpg"
      },
      {
        name: "Roasted scallops",
        description:
          "Pearly jus, celery textures, and a subtle grilled note in a deeper, more structured plate.",
        price: "€46",
        tag: "Tasting menu",
        image: "/images/menu/bleu-maree-menu-seafood-signature-alt.jpg"
      },
      {
        name: "Marine signature dessert",
        description:
          "Milky freshness, citrus, and a mineral finish in a precise, airy dessert.",
        price: "€21",
        tag: "Finale",
        image: "/images/desserts/bleu-maree-dessert-signature-alt.jpg"
      }
    ],
    guestJourney: [
      {
        title: "Arrival should already reassure",
        copy:
          "Booking, arriving, and settling in should all feel simple, clear, and almost already familiar."
      },
      {
        title: "The meal builds without pushing",
        copy:
          "Freshness, depth, relief: the menu gains intensity without ever making the evening feel effortful."
      },
      {
        title: "The finish leaves more than flavour",
        copy:
          "What lingers is not a chef's trick, but a whole evening carried with accuracy."
      }
    ],
    curatedImpressions: [
      "You leave with more than flavour. You leave with a sense of hold.",
      "A rare address because it stays human even in restraint.",
      "A dinner that never tries to please too quickly."
    ]
  }
};

export const heroContent = homeContentByLocale.fr.heroContent;
export const philosophyHighlights = homeContentByLocale.fr.philosophyHighlights;
export const signatureDishes = homeContentByLocale.fr.signatureDishes;
export const guestJourney = homeContentByLocale.fr.guestJourney;
export const curatedImpressions = homeContentByLocale.fr.curatedImpressions;

export function getHomeContent(locale: Locale) {
  return homeContentByLocale[locale];
}
