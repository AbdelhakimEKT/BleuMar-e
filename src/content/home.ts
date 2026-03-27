import type { Locale } from "@/i18n/config";

const homeContentByLocale = {
  fr: {
    heroContent: {
      eyebrow: "Restaurant gastronomique à Biarritz",
      title: "La mer prend une forme plus rare.",
      intro:
        "Bleu Marée compose une cuisine française contemporaine inspirée par l'Atlantique, la saison et les grands produits. Chaque service est pensé comme une traversée lente, lumineuse et précise.",
      primaryCta: { href: "/reservation", label: "Réserver une table" },
      secondaryCta: { href: "/menus", label: "Découvrir la carte" },
      image: "/images/hero/bleu-maree-hero-dining-room-golden-hour-realistic.jpg",
      highlights: [
        "Vue inspirée par l'océan",
        "Cuisine française contemporaine",
        "Service dîner premium"
      ]
    },
    philosophyHighlights: [
      {
        title: "Produit noble, geste juste",
        copy:
          "Poissons, crustacés et légumes sont travaillés avec précision pour laisser la matière première parler avant l'effet."
      },
      {
        title: "Rythme de la saison",
        copy:
          "La carte évolue selon les marées, les arrivages et la tension du moment, pour garder une signature toujours vivante."
      },
      {
        title: "Hospitalité enveloppante",
        copy:
          "Une atmosphère calme, contemporaine et chaleureuse qui accompagne aussi bien un dîner d'exception qu'une célébration discrète."
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
        title: "Un accueil à tempo juste",
        copy:
          "L'arrivée se fait dans une lumière feutrée, avec une attention immédiate portée à l'occasion, au rythme du dîner et aux préférences de la table."
      },
      {
        title: "Une carte construite comme un récit",
        copy:
          "Les menus sont pensés pour faire monter la tension aromatique, jouer sur les textures et laisser de la place à la surprise."
      },
      {
        title: "Un souvenir durable",
        copy:
          "Service précis, accords travaillés et dernier geste soigné pour transformer la réservation en moment de mémoire."
      }
    ],
    curatedImpressions: [
      "L'adresse qui fait dialoguer Biarritz, l'iode et le luxe calme.",
      "Une expérience contemporaine où chaque détail semble pesé juste.",
      "La sensation d'une table qui respire et donne envie de revenir."
    ]
  },
  en: {
    heroContent: {
      eyebrow: "Fine dining restaurant in Biarritz",
      title: "The sea takes on a rarer form.",
      intro:
        "Bleu Marée shapes a contemporary French cuisine inspired by the Atlantic, the season, and noble ingredients. Every service is conceived as a slow, luminous, and precise crossing.",
      primaryCta: { href: "/reservation", label: "Book a table" },
      secondaryCta: { href: "/menus", label: "Explore the menu" },
      image: "/images/hero/bleu-maree-hero-dining-room-golden-hour-realistic.jpg",
      highlights: [
        "Ocean-inspired dining room",
        "Contemporary French cuisine",
        "Premium dinner service"
      ]
    },
    philosophyHighlights: [
      {
        title: "Noble ingredients, precise gesture",
        copy:
          "Fish, shellfish, and vegetables are handled with precision so the ingredient speaks before the effect."
      },
      {
        title: "Seasonal rhythm",
        copy:
          "The menu evolves with tides, arrivals, and the mood of the moment, keeping the signature alive."
      },
      {
        title: "Enveloping hospitality",
        copy:
          "A calm, contemporary, and warm atmosphere designed for both exceptional dinners and intimate celebrations."
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
        title: "A perfectly paced welcome",
        copy:
          "Arrival unfolds in soft light, with immediate attention paid to the occasion, the dinner rhythm, and the table’s preferences."
      },
      {
        title: "A menu built like a narrative",
        copy:
          "Menus are designed to raise aromatic tension, play with texture, and leave room for surprise."
      },
      {
        title: "A lasting memory",
        copy:
          "Precise service, thoughtful pairings, and a carefully handled final gesture turn booking into something memorable."
      }
    ],
    curatedImpressions: [
      "The address where Biarritz, iodine, and quiet luxury meet.",
      "A contemporary experience where every detail feels measured just right.",
      "The sensation of a table that breathes and draws you back."
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
