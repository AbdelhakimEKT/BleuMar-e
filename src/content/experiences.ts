import type { Locale } from "@/i18n/config";

const experiencesContentByLocale = {
  fr: {
    pageHero: {
      eyebrow: "Rendez-vous",
      title: "Rares, parce que tout n'a pas sa place ici.",
      intro:
        "Bleu Marée n'ajoute rien pour faire nombre. Un moment n'apparaît ici que s'il tient vraiment la maison.",
      image: "/images/people/bleu-maree-team-service-in-action.jpg",
      imagePosition: "50% 45%",
      markers: [],
      noteLabel: "La ligne",
      note: "Une date existe quand elle mérite vraiment la salle."
    },
    upcomingIntro: {
      eyebrow: "Le principe",
      title: "Ici, rien n'est ajouté pour occuper le calendrier.",
      lead:
        "Le calendrier ne décide pas. La maison oui. Un rendez-vous ouvre seulement lorsqu'il apporte du relief sans changer le ton."
    },
    upcomingExperiences: [
      {
        title: "Soirée accords Atlantique",
        date: "Jeudi soir",
        time: "20h00",
        description:
          "Un parcours salin, minéral, fumé. Quatre verres pour prolonger la mer sans jamais la couvrir.",
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
          "Pour un déjeuner ou un dîner qui demande plus d'intimité, plus de temps, moins de spectacle.",
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
          "Pour une maison, une marque ou un cercle privé qui veut recevoir ici sans défaire le lieu.",
        ctaLabel: "Demander un devis",
        ctaHref: "/contact",
        image: "/images/experience/bleu-maree-service-in-dining-room.jpg",
        imageAlt: "Service en salle pour une expérience privative",
        imagePosition: "50% 50%"
      }
    ],
    privateDining: {
      eyebrow: "Recevoir ici",
      title: "Recevoir ici demande plus d'égard que de décor.",
      intro:
        "Déjeuners, dîners, lancements ou célébrations trouvent leur place ici lorsqu'ils acceptent le rythme de la salle, de la cuisine et du service.",
      image: "/images/details/bleu-maree-detail-table-setting.jpg",
      imageAlt: "Mise en scène de table premium",
      imagePosition: "50% 52%",
      actions: {
        privatisation: "Demander une privatisation",
        reserve: "Réserver une table"
      }
    },
    privateDiningPoints: [
      "Le nombre de convives reste tenu pour préserver le rythme du service et de la salle.",
      "Menu, cave et tempo sont composés dans la même ligne que la maison.",
      "Chaque attention utile est prévue. Rien n'est ajouté pour faire événement."
    ],
    seasonality: {
      eyebrow: "Rareté",
      title: "Quelques dates seulement. Et c'est suffisant.",
      lead:
        "La rareté protège le désir, la lecture et le caractère de la maison."
    },
    seasonalMoments: [
      {
        title: "Apparition juste",
        copy:
          "Une date n'existe que si le produit, la saison ou l'occasion la commandent vraiment."
      },
      {
        title: "Peu d'annonces",
        copy:
          "La lecture reste nette parce que la maison ne se disperse pas en multiples formats."
      },
      {
        title: "Même ligne",
        copy:
          "Même lumière, même précision, même distance de service, quel que soit le moment."
      }
    ]
  },
  en: {
    pageHero: {
      eyebrow: "Appointments",
      title: "Rare, because not everything belongs here.",
      intro:
        "Bleu Maree adds nothing just to fill a calendar. A moment appears here only if it fully holds the house.",
      image: "/images/people/bleu-maree-team-service-in-action.jpg",
      imagePosition: "50% 45%",
      markers: [],
      noteLabel: "The line",
      note: "A date exists only when it truly deserves the room."
    },
    upcomingIntro: {
      eyebrow: "The principle",
      title: "Nothing is added here just to occupy the calendar.",
      lead:
        "The calendar does not decide. The house does. An appointment opens only when it adds depth without shifting the tone."
    },
    upcomingExperiences: [
      {
        title: "Atlantic pairing evening",
        date: "Thursday evening",
        time: "8:00 pm",
        description:
          "A saline, mineral, smoky journey. Four glasses that extend the sea without ever covering it.",
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
          "For a lunch or dinner that calls for more intimacy, more time, and less spectacle.",
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
          "For a house, brand, or private circle that wants to host here without undoing the place.",
        ctaLabel: "Request a proposal",
        ctaHref: "/contact",
        image: "/images/experience/bleu-maree-service-in-dining-room.jpg",
        imageAlt: "Dining room service for a private experience",
        imagePosition: "50% 50%"
      }
    ],
    privateDining: {
      eyebrow: "Hosting here",
      title: "Hosting here asks for more regard than decor.",
      intro:
        "Lunches, dinners, launches, or celebrations find their place here when they accept the rhythm of the room, the kitchen, and the service.",
      image: "/images/details/bleu-maree-detail-table-setting.jpg",
      imageAlt: "Premium table staging",
      imagePosition: "50% 52%",
      actions: {
        privatisation: "Request a private event",
        reserve: "Book a table"
      }
    },
    privateDiningPoints: [
      "Guest count stays deliberately held to preserve the rhythm of the room and the service.",
      "Menu, cellar, and pacing are shaped in the same line as the house.",
      "Every useful attention is planned. Nothing is added just to create an event."
    ],
    seasonality: {
      eyebrow: "Rarity",
      title: "Only a few dates. And that is enough.",
      lead:
        "Rarity protects desire, clarity, and the character of the house."
    },
    seasonalMoments: [
      {
        title: "Precise appearance",
        copy:
          "A date exists only if product, season, or occasion genuinely call for it."
      },
      {
        title: "Few announcements",
        copy:
          "The page stays clear because the house refuses to scatter into too many formats."
      },
      {
        title: "Same line",
        copy:
          "Same light, same precision, same service distance, whatever the moment."
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
