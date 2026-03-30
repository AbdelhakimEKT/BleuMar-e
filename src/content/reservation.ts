import type { Locale } from "@/i18n/config";

const reservationContentByLocale = {
  fr: {
    pageHero: {
      eyebrow: "Réservation",
      title: "Une demande de réservation pensée comme une évidence.",
      intro:
        "Le parcours privilégie la clarté, le calme et la précision: date, heure, couverts, occasion et remarques sont réunis dans une expérience premium, lisible et mobile.",
      image: "/images/hero/bleu-maree-hero-dining-room-golden-hour-realistic.jpg",
      imagePosition: "50% 56%"
    },
    infoIntro: {
      eyebrow: "Informations utiles",
      title: "Ce que le client doit comprendre sans effort.",
      lead:
        "Horaires, demandes spéciales, groupes, occasions et promesse de réponse: tout est réuni pour rassurer dès la première lecture et donner envie de confirmer sa venue."
    },
    groupCta: "Demande de groupe ou privatisation",
    organizationIntro: {
      eyebrow: "Après la demande",
      title: "Une réponse pensée avec le même niveau de soin.",
      lead:
        "La demande rassemble déjà les informations utiles pour que la maison puisse répondre avec justesse, préparer les occasions spéciales et orienter les groupes."
    },
    implementationLabel: "Ce qui se passe ensuite",
    reservationJourney: [
      {
        title: "Choix du moment",
        copy:
          "Le visiteur choisit le nombre de couverts, la date, l'heure et peut ajouter une occasion ou une remarque importante."
      },
      {
        title: "Demande enregistrée",
        copy:
          "La maison retrouve ensuite la demande avec toutes les informations utiles: couverts, heure souhaitée, occasion, allergies et remarques."
      },
      {
        title: "Suivi côté maison",
        copy:
          "L'équipe peut confirmer, reprendre contact ou orienter la demande vers une proposition plus adaptée si besoin."
      }
    ],
    reservationPractices: [
      {
        label: "Groupes",
        copy: "Au-delà de 8 couverts, nous recommandons une demande dédiée afin de construire l'expérience."
      },
      {
        label: "Parcours premium",
        copy: "Le formulaire reste volontairement calme, lisible et désirable pour donner une impression haut de gamme dès la première interaction."
      },
      {
        label: "Occasions spéciales",
        copy: "Anniversaire, allergènes ou attention particulière peuvent être indiqués dès la demande afin de préparer une réponse plus juste."
      }
    ],
    zenchefSetupSteps: [
      "La demande part déjà avec le bon niveau de détail pour éviter les allers-retours inutiles.",
      "Les occasions particulières, groupes et allergies peuvent être relus avant confirmation.",
      "Une confirmation ou une reprise de contact peut ensuite affiner l'expérience côté maison."
    ],
    hospitalityStory: {
      eyebrow: "Hospitalité",
      title: "Le formulaire ne remplace pas l'accueil: il le prépare.",
      intro:
        "Ce bloc garde l'élégance du site tout en donnant à la maison suffisamment de matière pour répondre avec précision.",
      image: "/images/details/bleu-maree-detail-glassware-candlelight.jpg",
      imageAlt: "Verrerie et lumière douce chez Bleu Marée",
      imagePosition: "50% 50%",
      details: [
        {
          label: "Occasion",
          copy: "Anniversaire, dîner à deux, repas professionnel ou demande de groupe peuvent être signalés dès le départ."
        },
        {
          label: "Attention",
          copy: "Allergies, préférences ou remarques restent lisibles pour permettre une réponse plus juste."
        },
        {
          label: "Suite",
          copy: "Si la demande mérite un échange plus précis, la maison peut reprendre contact dans le même ton calme et soigné."
        }
      ]
    }
  },
  en: {
    pageHero: {
      eyebrow: "Booking",
      title: "A booking request designed to feel effortless.",
      intro:
        "The journey favors clarity, calm, and precision: date, time, party size, occasion, and notes are gathered in a premium, legible, mobile-first experience.",
      image: "/images/hero/bleu-maree-hero-dining-room-golden-hour-realistic.jpg",
      imagePosition: "50% 56%"
    },
    infoIntro: {
      eyebrow: "Useful information",
      title: "What the guest should understand effortlessly.",
      lead:
        "Opening hours, special requests, groups, occasions, and the promise of a response are gathered here to reassure on first read and encourage action."
    },
    groupCta: "Group booking or private dining request",
    organizationIntro: {
      eyebrow: "After the request",
      title: "A response shaped with the same level of care.",
      lead:
        "The request already gathers the key information the house needs to answer properly, prepare special occasions, and handle groups with clarity."
    },
    implementationLabel: "What happens next",
    reservationJourney: [
      {
        title: "Choosing the moment",
        copy:
          "The guest chooses party size, preferred date, preferred time, and can add an occasion or an important note."
      },
      {
        title: "Request saved",
        copy:
          "The house then retrieves the request with the useful details already in place: guests, preferred time, occasion, allergens, and notes."
      },
      {
        title: "House-side follow-up",
        copy:
          "The team can confirm, get back in touch, or redirect the request toward a better-fit proposal when needed."
      }
    ],
    reservationPractices: [
      {
        label: "Groups",
        copy: "For more than 8 guests, we recommend a dedicated request in order to shape the experience properly."
      },
      {
        label: "Premium journey",
        copy: "The form deliberately stays calm, legible, and desirable so the very first interaction already feels high-end."
      },
      {
        label: "Special occasions",
        copy: "Birthdays, allergens, and special attentions can be handled directly through the request journey."
      }
    ],
    zenchefSetupSteps: [
      "The request already contains enough detail to avoid unnecessary back-and-forth.",
      "Special occasions, groups, and allergens can be reviewed before confirmation.",
      "A reply or confirmation can then refine the experience house-side."
    ],
    hospitalityStory: {
      eyebrow: "Hospitality",
      title: "The form does not replace the welcome: it prepares it.",
      intro:
        "This block keeps the site elegant while still giving the house enough context to respond with precision.",
      image: "/images/details/bleu-maree-detail-glassware-candlelight.jpg",
      imageAlt: "Glassware and soft light at Bleu Maree",
      imagePosition: "50% 50%",
      details: [
        {
          label: "Occasion",
          copy: "Anniversary, dinner for two, business meal, or group request can all be signaled from the start."
        },
        {
          label: "Attention",
          copy: "Allergens, preferences, and key notes remain visible so the response can be more accurate."
        },
        {
          label: "Follow-up",
          copy: "If the request needs a more precise exchange, the house can get back in touch in the same calm, refined tone."
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
