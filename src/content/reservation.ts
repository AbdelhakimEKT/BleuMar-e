import type { Locale } from "@/i18n/config";

const reservationContentByLocale = {
  fr: {
    pageHero: {
      eyebrow: "Réservation",
      title: "Une demande de réservation pensée comme une évidence.",
      intro:
        "Le parcours privilégie la clarté, le calme et la précision: date, heure, couverts, occasion et remarques sont réunis dans une expérience premium, lisible et mobile.",
      image: "/images/hero/bleu-maree-hero-dining-room-sunset.png"
    },
    infoIntro: {
      eyebrow: "Informations utiles",
      title: "Ce que le client doit comprendre sans effort.",
      lead:
        "Horaires, demandes spéciales, groupes, occasions et promesse de réponse: tout est réuni pour rassurer dès la première lecture et donner envie de confirmer sa venue."
    },
    groupCta: "Demande de groupe ou privatisation",
    organizationIntro: {
      eyebrow: "Back-office",
      title: "Une logique simple, propre et administrable.",
      lead:
        "Le site enregistre les demandes dans un back-office clair pour garder une démonstration crédible: chaque demande peut être suivie, confirmée ou annulée depuis l'admin."
    },
    implementationLabel: "Fonctionnement",
    reservationJourney: [
      {
        title: "Choix du moment",
        copy:
          "Le visiteur choisit le nombre de couverts, la date, l'heure et peut ajouter une occasion ou une remarque importante."
      },
      {
        title: "Demande enregistrée",
        copy:
          "La demande est conçue pour être sauvegardée dans le back-office du restaurant, avec toutes les informations utiles à l'équipe."
      },
      {
        title: "Suivi côté maison",
        copy:
          "Depuis l'admin, la maison peut retrouver les demandes, faire évoluer leur statut et préparer les réponses ou confirmations."
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
      "Chaque demande crée une entrée structurée dans le back-office.",
      "Le statut peut ensuite être suivi côté maison: nouvelle, confirmée ou annulée.",
      "Une confirmation email peut être ajoutée ensuite si l'on veut pousser la démonstration encore plus loin."
    ]
  },
  en: {
    pageHero: {
      eyebrow: "Booking",
      title: "A booking request designed to feel effortless.",
      intro:
        "The journey favors clarity, calm, and precision: date, time, party size, occasion, and notes are gathered in a premium, legible, mobile-first experience.",
      image: "/images/hero/bleu-maree-hero-dining-room-sunset.png"
    },
    infoIntro: {
      eyebrow: "Useful information",
      title: "What the guest should understand effortlessly.",
      lead:
        "Opening hours, special requests, groups, occasions, and the promise of a response are gathered here to reassure on first read and encourage action."
    },
    groupCta: "Group booking or private dining request",
    organizationIntro: {
      eyebrow: "Back-office",
      title: "A simple, clean, manageable logic.",
      lead:
        "The site records requests in a clear back-office so the demo stays credible: each request can be tracked, confirmed, or cancelled from the admin."
    },
    implementationLabel: "How it works",
    reservationJourney: [
      {
        title: "Choosing the moment",
        copy:
          "The guest chooses party size, preferred date, preferred time, and can add an occasion or an important note."
      },
      {
        title: "Request saved",
        copy:
          "The request is designed to be saved in the restaurant back-office with all the information the team needs."
      },
      {
        title: "House-side follow-up",
        copy:
          "From the admin, the house can find requests again, update their status, and prepare responses or confirmations."
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
      "Each request creates a structured entry in the back-office.",
      "The status can then be tracked house-side: new, confirmed, or cancelled.",
      "A confirmation email can be added later if we want to push the demo further."
    ]
  }
};

export const reservationJourney = reservationContentByLocale.fr.reservationJourney;
export const reservationPractices = reservationContentByLocale.fr.reservationPractices;
export const zenchefSetupSteps = reservationContentByLocale.fr.zenchefSetupSteps;

export function getReservationContent(locale: Locale) {
  return reservationContentByLocale[locale];
}
