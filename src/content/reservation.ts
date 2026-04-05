import type { Locale } from "@/i18n/config";

const reservationContentByLocale = {
  fr: {
    pageHero: {
      eyebrow: "Réservation",
      title: "Réserver doit déjà ressembler à l'accueil.",
      intro:
        "Choisissez le moment. Dites l'essentiel. La maison reprend ensuite la main avec une réponse nette.",
      image: "/images/hero/bleu-maree-hero-dining-room-golden-hour-realistic.jpg",
      imagePosition: "50% 56%",
      markers: [],
      noteLabel: "La maison lit",
      note:
        "Peu de champs. Plus d'attention, ensuite."
    },
    infoIntro: {
      eyebrow: "Avant de venir",
      title: "Choisir son moment doit rester simple et net.",
      lead:
        "Réserver doit enlever du bruit, pas en créer. Horaires, grandes tables, allergies et occasions restent réunis ici pour aller vite et bien."
    },
    groupCta: "Parler d'un groupe ou d'une privatisation",
    organizationIntro: {
      eyebrow: "Ce que la maison regarde",
      title: "Une demande bien écrite vaut mieux qu'un long formulaire.",
      lead:
        "Quelques lignes bien choisies suffisent à tenir l'occasion, les attentions utiles et le tempo du repas."
    },
    implementationLabel: "Quand la maison reprend contact",
    reservationJourney: [
      {
        title: "Le moment se pose clairement",
        copy:
          "Date, heure et nombre de couverts se donnent en peu de gestes, sans allonger le parcours."
      },
      {
        title: "L'essentiel reste visible",
        copy:
          "Occasion, allergies, remarques et contraintes restent immédiatement lisibles pour préparer une réponse plus juste."
      },
      {
        title: "La réponse garde la même tenue",
        copy:
          "Confirmation, reprise de contact ou suggestion plus adaptée se font ensuite avec la même clarté."
      }
    ],
    reservationPractices: [
      {
        label: "Groupes",
        copy:
          "Au-delà de 8 couverts, la maison reprend la main pour tenir le rythme du repas et les attentions utiles."
      },
      {
        label: "Occasions",
        copy:
          "Anniversaire, déjeuner important ou dîner à deux peuvent être signalés simplement dès le départ. Le reste se prépare ensuite."
      },
      {
        label: "Attention",
        copy:
          "Allergies, préférences ou détails sensibles trouvent leur place sans transformer la réservation en questionnaire."
      }
    ],
    zenchefSetupSteps: [
      "Si une table mérite un échange, la maison revient vers vous directement.",
      "Si le rythme du service appelle un autre horaire, il est proposé sans détour.",
      "Si la demande concerne un groupe ou une privatisation, la conversation change simplement d'échelle."
    ],
    hospitalityStory: {
      eyebrow: "Grandes tables",
      title: "Les grandes tables passent d'abord par la maison.",
      intro:
        "Pour un groupe, une privatisation ou un moment à préparer davantage, le contact direct reste la voie la plus juste.",
      image: "/images/details/bleu-maree-detail-glassware-candlelight.jpg",
      imageAlt: "Verrerie et lumière douce chez Bleu Marée",
      imagePosition: "50% 50%",
      details: [
        {
          label: "Groupes",
          copy:
            "Pour les grandes tablées, la maison préfère reprendre le fil elle-même afin de tenir placement, tempo et confort."
        },
        {
          label: "Privatisation",
          copy:
            "Déjeuner, dîner ou moment de maison plus singulier peuvent être préparés dans un échange plus direct."
        },
        {
          label: "Suite",
          copy:
            "Le premier message ouvre simplement la bonne conversation. Le reste se règle ensuite avec calme et précision."
        }
      ]
    }
  },
  en: {
    pageHero: {
      eyebrow: "Booking",
      title: "Booking should already feel like part of the welcome.",
      intro:
        "Choose the moment. Share what matters. The house then takes it from there with a clear reply.",
      image: "/images/hero/bleu-maree-hero-dining-room-golden-hour-realistic.jpg",
      imagePosition: "50% 56%",
      markers: [],
      noteLabel: "What the house reads",
      note:
        "Few fields. More attention afterwards."
    },
    infoIntro: {
      eyebrow: "Before arriving",
      title: "Choosing the moment should stay simple and clear.",
      lead:
        "Booking should remove noise, not create it. Opening hours, larger parties, allergens, and occasions stay gathered here so the path remains clear."
    },
    groupCta: "Discuss a group or private dining request",
    organizationIntro: {
      eyebrow: "What the house looks at",
      title: "A well-written request is better than a long form.",
      lead:
        "A few well-chosen lines are enough to hold the occasion, useful attentions, and the meal's pace."
    },
    implementationLabel: "When the house follows up",
    reservationJourney: [
      {
        title: "The moment is set clearly",
        copy:
          "Date, time, and party size can be shared in a few gestures without stretching the process."
      },
      {
        title: "What matters stays visible",
        copy:
          "Occasion, allergens, notes, and constraints stay immediately readable so the reply can be more accurate."
      },
      {
        title: "The reply keeps the same tone",
        copy:
          "Confirmation, follow-up, or a better-fit suggestion then happen with the same sense of clarity."
      }
    ],
    reservationPractices: [
      {
        label: "Groups",
        copy:
          "Above 8 guests, the house prefers to take the thread back itself in order to hold the pace and the attentions properly."
      },
      {
        label: "Occasions",
        copy:
          "Birthdays, important lunches, or dinner for two can be signaled simply from the start. The rest is prepared afterwards."
      },
      {
        label: "Attention",
        copy:
          "Allergens, preferences, and sensitive notes all have a place without turning booking into a questionnaire."
      }
    ],
    zenchefSetupSteps: [
      "If a table calls for an exchange, the house comes back directly.",
      "If service rhythm suggests another time, it is proposed without detour.",
      "If the request concerns a group or a private event, the conversation simply changes scale."
    ],
    hospitalityStory: {
      eyebrow: "Larger parties",
      title: "Larger tables first pass through the house.",
      intro:
        "For groups, private dining, or moments that need more preparation, direct contact remains the most accurate path.",
      image: "/images/details/bleu-maree-detail-glassware-candlelight.jpg",
      imageAlt: "Glassware and soft light at Bleu Maree",
      imagePosition: "50% 50%",
      details: [
        {
          label: "Groups",
          copy:
            "For larger tables, the house prefers to handle placement, pace, and comfort through a more direct exchange."
        },
        {
          label: "Private dining",
          copy:
            "Lunch, dinner, or a more singular house moment can be prepared in a conversation that stays more direct."
        },
        {
          label: "Follow-up",
          copy:
            "The first message simply opens the right conversation. The rest is then refined with calm and precision."
        }
      ]
    }
  }
};

export const reservationJourney = reservationContentByLocale.fr.reservationJourney;
export const reservationPractices = reservationContentByLocale.fr.reservationPractices;
export const zenchefSetupSteps = reservationContentByLocale.fr.zenchefSetupSteps;

export function getReservationContent(locale: Locale) {
  return reservationContentByLocale[locale];
}
