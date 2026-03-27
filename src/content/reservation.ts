import type { Locale } from "@/i18n/config";

const reservationContentByLocale = {
  fr: {
    pageHero: {
      eyebrow: "Réservation",
      title: "Un parcours simple, clair et rassurant.",
      intro:
        "La V1 est désormais pensée autour de Zenchef: fiabilité, rapidité de mise en place, affichage mobile clair et gestion centralisée des disponibilités.",
      image: "/images/hero/bleu-maree-hero-dining-room-sunset.png"
    },
    infoIntro: {
      eyebrow: "Informations utiles",
      title: "Ce que le client doit comprendre sans effort.",
      lead:
        "Horaires, demandes spéciales, groupes, occasions et promesse de confirmation: tout est réuni pour rassurer dès la première lecture, tout en laissant Zenchef piloter le moteur de réservation."
    },
    groupCta: "Demande de groupe ou privatisation",
    organizationIntro: {
      eyebrow: "Organisation",
      title: "Une intégration propre avant tout.",
      lead:
        "La meilleure V1 consiste à ouvrir Zenchef depuis le site avec un habillage cohérent, puis à laisser Zenchef gérer les règles métier, les créneaux et les confirmations."
    },
    implementationLabel: "Mise en place",
    reservationJourney: [
      {
        title: "Widget Zenchef officiel",
        copy:
          "Le site appellera le module Zenchef pour le choix des couverts, de la date et de l'heure, afin d'éviter un flux maison fragile en V1."
      },
      {
        title: "Disponibilités et créneaux pilotés côté restaurant",
        copy:
          "Les heures réservables, les jours fermés, les exceptions et les limitations de capacité sont ensuite gérés depuis l'interface Zenchef."
      },
      {
        title: "Confirmation et suivi",
        copy:
          "La confirmation automatique par email et les mécanismes de reconfirmation restent entre les mains du prestataire de réservation."
      }
    ],
    reservationPractices: [
      {
        label: "Groupes",
        copy: "Au-delà de 8 couverts, nous recommandons une demande dédiée afin de construire l'expérience."
      },
      {
        label: "Zenchef V1",
        copy: "Pour le lancement, nous privilégions la stabilité du module officiel et un déclenchement propre depuis le site."
      },
      {
        label: "Occasions spéciales",
        copy: "Anniversaire, allergènes ou attention particulière pourront être gérés via le parcours Zenchef ou via le contact direct."
      }
    ],
    zenchefSetupSteps: [
      "Récupérer le script officiel ou le Booking Link dans l'interface Zenchef.",
      "Brancher le script une seule fois dans le site et utiliser notre bouton principal pour ouvrir le module.",
      "Configurer dans Zenchef les services déjeuner/dîner, la capacité, les exceptions et les emails."
    ]
  },
  en: {
    pageHero: {
      eyebrow: "Booking",
      title: "A simple, clear, reassuring journey.",
      intro:
        "V1 is now designed around Zenchef: reliability, quick setup, clear mobile display, and centralized availability management.",
      image: "/images/hero/bleu-maree-hero-dining-room-sunset.png"
    },
    infoIntro: {
      eyebrow: "Useful information",
      title: "What the guest should understand effortlessly.",
      lead:
        "Opening hours, special requests, groups, occasions, and the promise of confirmation are all gathered here to reassure on first read while letting Zenchef handle the booking engine."
    },
    groupCta: "Group booking or private dining request",
    organizationIntro: {
      eyebrow: "Structure",
      title: "A clean integration first.",
      lead:
        "The best V1 is to open Zenchef from the site with a coherent premium wrapper, then let Zenchef handle business rules, time slots, and confirmations."
    },
    implementationLabel: "Implementation",
    reservationJourney: [
      {
        title: "Official Zenchef widget",
        copy:
          "The site will call the Zenchef module for party size, date, and time selection in order to avoid a fragile in-house flow for V1."
      },
      {
        title: "Availability and slots managed restaurant-side",
        copy:
          "Bookable hours, closed days, exceptions, and capacity limits are then managed from the Zenchef interface."
      },
      {
        title: "Confirmation and follow-up",
        copy:
          "Automatic confirmation emails and reconfirmation mechanics remain in the hands of the booking provider."
      }
    ],
    reservationPractices: [
      {
        label: "Groups",
        copy: "For more than 8 guests, we recommend a dedicated request in order to shape the experience properly."
      },
      {
        label: "Zenchef V1",
        copy: "For launch, we are prioritizing the stability of the official module and a clean trigger from the site."
      },
      {
        label: "Special occasions",
        copy: "Birthdays, allergens, and special attentions can be handled through the Zenchef flow or direct contact."
      }
    ],
    zenchefSetupSteps: [
      "Retrieve the official script or Booking Link from the Zenchef interface.",
      "Connect the script only once on the site and use our main button to open the module.",
      "Configure lunch and dinner services, capacity, exceptions, and emails directly in Zenchef."
    ]
  }
};

export const reservationJourney = reservationContentByLocale.fr.reservationJourney;
export const reservationPractices = reservationContentByLocale.fr.reservationPractices;
export const zenchefSetupSteps = reservationContentByLocale.fr.zenchefSetupSteps;

export function getReservationContent(locale: Locale) {
  return reservationContentByLocale[locale];
}
