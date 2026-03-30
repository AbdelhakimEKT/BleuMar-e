import type { Locale } from "@/i18n/config";

const experiencesContentByLocale = {
  fr: {
    pageHero: {
      eyebrow: "Expériences",
      title: "Soirées spéciales, moments rares et privatisations sur mesure.",
      intro:
        "Menus ponctuels, accords, privatisations et soirées signatures prennent ici une forme plus désirable, plus visuelle et plus immédiate.",
      image: "/images/people/bleu-maree-team-service-in-action.jpg",
      imagePosition: "50% 45%"
    },
    upcomingIntro: {
      eyebrow: "À venir",
      title: "Des événements qui prolongent naturellement l'univers du restaurant.",
      lead:
        "Chaque événement peut accueillir une date, une heure, une description, un visuel dédié et une action immédiate vers la réservation ou le contact."
    },
    upcomingExperiences: [
      {
        title: "Soirée accords Atlantique",
        date: "Jeudi soir",
        time: "20h00",
        description:
          "Menu dégustation pensé avec un accord de quatre verres autour des reliefs salins, minéraux et fumés.",
        ctaLabel: "Réserver",
        ctaHref: "/reservation",
        image: "/images/wines/bleu-maree-wine-pairing-scene-01.jpg",
        imageAlt: "Accord mets et vins chez Bleu Marée",
        imagePosition: "50% 55%"
      },
      {
        title: "Menu de fête privé",
        date: "Sur demande",
        time: "Capacité limitée",
        description:
          "Une proposition scénarisée pour anniversaires, célébrations et dîners marquants dans une atmosphère plus intime.",
        ctaLabel: "Nous contacter",
        ctaHref: "/contact",
        image: "/images/details/bleu-maree-detail-table-setting-alt-01.jpg",
        imageAlt: "Table dressée pour un dîner privé",
        imagePosition: "50% 52%"
      },
      {
        title: "Privatisation maison",
        date: "Déjeuner ou dîner",
        time: "Étude personnalisée",
        description:
          "Pour les entreprises, maisons de luxe ou événements privés souhaitant une expérience premium à Biarritz.",
        ctaLabel: "Demander un devis",
        ctaHref: "/contact",
        image: "/images/experience/bleu-maree-service-in-dining-room.jpg",
        imageAlt: "Service en salle pour une expérience privative",
        imagePosition: "50% 50%"
      }
    ],
    privateDining: {
      eyebrow: "Privatisation",
      title: "Une scénographie discrète pour les événements privés.",
      intro:
        "Bleu Marée peut accueillir des dîners de direction, des lancements ou des célébrations avec une qualité de service cohérente avec le positionnement premium.",
      image: "/images/details/bleu-maree-detail-table-setting.jpg",
      imageAlt: "Mise en scène de table premium",
      imagePosition: "50% 52%",
      actions: {
        privatisation: "Demander une privatisation",
        reserve: "Réserver une table"
      }
    },
    privateDiningPoints: [
      "Accueil sur mesure, menus dédiés et accords personnalisés.",
      "Configuration adaptable pour comités restreints, lancements ou dîners signature.",
      "Accompagnement par l'équipe pour le tempo, les attentions et les contraintes de service."
    ],
    seasonality: {
      eyebrow: "Saisonnalité",
      title: "Une page prête pour les temps forts du calendrier.",
      lead:
        "Menus de fête, collaborations, soirées dégustation ou programmation saisonnière: la structure garde la main légère tout en restant très administrable."
    },
    seasonalMoments: [
      {
        title: "Menu de saison",
        copy:
          "Une carte qui suit les arrivages et les textures du moment plutôt qu'une promesse figée."
      },
      {
        title: "Temps forts calendaires",
        copy:
          "Fêtes, grands week-ends, Saint-Valentin ou moments de maison peuvent être valorisés sans alourdir le site."
      },
      {
        title: "Archivage simple",
        copy:
          "Chaque expérience pourra être publiée, retirée ou déplacée en archive selon le besoin."
      }
    ]
  },
  en: {
    pageHero: {
      eyebrow: "Experiences",
      title: "Special evenings, rare moments, and bespoke private dining.",
      intro:
        "One-off menus, pairings, private dining, and signature evenings take on a more desirable, more visual, more immediate form here.",
      image: "/images/people/bleu-maree-team-service-in-action.jpg",
      imagePosition: "50% 45%"
    },
    upcomingIntro: {
      eyebrow: "Coming up",
      title: "Events that naturally extend the restaurant's universe.",
      lead:
        "Each event can hold a date, time, description, dedicated visual, and an immediate action toward booking or contact."
    },
    upcomingExperiences: [
      {
        title: "Atlantic pairing evening",
        date: "Thursday evening",
        time: "8:00 pm",
        description:
          "A tasting menu shaped around a four-glass pairing of saline, mineral, and smoky notes.",
        ctaLabel: "Book",
        ctaHref: "/reservation",
        image: "/images/wines/bleu-maree-wine-pairing-scene-01.jpg",
        imageAlt: "Food and wine pairing at Bleu Maree",
        imagePosition: "50% 55%"
      },
      {
        title: "Private celebration menu",
        date: "On request",
        time: "Limited capacity",
        description:
          "A scenographed proposal for anniversaries, celebrations, and memorable dinners in a more intimate atmosphere.",
        ctaLabel: "Contact us",
        ctaHref: "/contact",
        image: "/images/details/bleu-maree-detail-table-setting-alt-01.jpg",
        imageAlt: "Table set for a private celebration",
        imagePosition: "50% 52%"
      },
      {
        title: "Full-house private dining",
        date: "Lunch or dinner",
        time: "Tailored study",
        description:
          "For companies, luxury houses, or private events seeking a premium experience in Biarritz.",
        ctaLabel: "Request a proposal",
        ctaHref: "/contact",
        image: "/images/experience/bleu-maree-service-in-dining-room.jpg",
        imageAlt: "Dining room service for a private experience",
        imagePosition: "50% 50%"
      }
    ],
    privateDining: {
      eyebrow: "Private dining",
      title: "A discreet stagecraft for private events.",
      intro:
        "Bleu Maree can host executive dinners, launches, or celebrations with a level of service consistent with its premium positioning.",
      image: "/images/details/bleu-maree-detail-table-setting.jpg",
      imageAlt: "Premium table staging",
      imagePosition: "50% 52%",
      actions: {
        privatisation: "Request a private event",
        reserve: "Book a table"
      }
    },
    privateDiningPoints: [
      "Tailored welcome, dedicated menus, and custom pairings.",
      "Flexible setup for small committees, launches, or signature dinners.",
      "Support from the team on tempo, guest attentions, and service constraints."
    ],
    seasonality: {
      eyebrow: "Seasonality",
      title: "A page ready for the strongest moments of the calendar.",
      lead:
        "Celebration menus, collaborations, tasting evenings, or seasonal programming: the structure stays light while remaining highly manageable."
    },
    seasonalMoments: [
      {
        title: "Seasonal menu",
        copy:
          "A menu that follows arrivals and textures of the moment rather than a fixed promise."
      },
      {
        title: "Calendar highlights",
        copy:
          "Holidays, long weekends, Valentine's Day, or house-led moments can be highlighted without weighing down the site."
      },
      {
        title: "Simple archiving",
        copy:
          "Each experience can be published, removed, or moved into an archive whenever needed."
      }
    ]
  }
};

export const upcomingExperiences = experiencesContentByLocale.fr.upcomingExperiences;
export const privateDiningPoints = experiencesContentByLocale.fr.privateDiningPoints;
export const seasonalMoments = experiencesContentByLocale.fr.seasonalMoments;

export function getExperiencesContent(locale: Locale) {
  return experiencesContentByLocale[locale];
}
