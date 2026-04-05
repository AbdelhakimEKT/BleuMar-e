import type { Locale } from "@/i18n/config";

const contactContentByLocale = {
  fr: {
    pageHero: {
      eyebrow: "Contact",
      title: "Nous joindre doit rester aussi simple que l'accueil.",
      intro:
        "Adresse, horaires, téléphone, message, itinéraire. Tout est réuni ici avec la même clarté que le reste de la maison.",
      image: "/images/details/bleu-maree-detail-glassware-candlelight.jpg",
      imagePosition: "50% 50%",
      markers: [],
      noteLabel: "La règle",
      note:
        "Donner les bons repères, sans détour."
    },
    infoIntro: {
      eyebrow: "Repères",
      title: "Venir sans hésiter.",
      lead:
        "Les informations utiles restent ensemble pour répondre vite, sans rigidité ni bruit."
    },
    labels: {
      address: "Adresse",
      phone: "Téléphone",
      email: "Email",
      access: "Accès"
    },
    accessCopy:
      "Le bon itinéraire, sans détour.",
    routeButton: "Ouvrir l'itinéraire",
    reserveButton: "Réserver",
    faq: {
      eyebrow: "Avant de venir",
      title: "Les réponses utiles, avant d'entrer.",
      lead:
        "Parking, accessibilité, groupes ou demandes particulières: tout reste réuni ici, sans alourdir la page."
    },
    faqItems: [
      {
        question: "Où se garer à proximité du restaurant ?",
        answer:
          "Plusieurs parkings publics sont accessibles à quelques minutes à pied. Pour un dîner plus confortable, nous conseillons d'arriver légèrement en avance, surtout en haute saison à Biarritz."
      },
      {
        question: "Le restaurant est-il accessible aux personnes à mobilité réduite ?",
        answer:
          "Oui, nous pouvons accueillir les personnes à mobilité réduite. Pour préparer la table dans les meilleures conditions, il est préférable de nous le signaler au moment de la réservation ou par téléphone."
      },
      {
        question: "Peut-on signaler des allergies ou un régime alimentaire ?",
        answer:
          "Oui. Allergies, intolérances ou préférences alimentaires peuvent être indiquées dès la réservation ou via le formulaire de contact afin que l'équipe puisse vous répondre avec précision."
      },
      {
        question: "Accueillez-vous les groupes ou les privatisations ?",
        answer:
          "Oui. À partir de 8 couverts, nous recommandons une demande dédiée afin d'organiser le rythme du repas, les menus et les attentions particulières dans les meilleures conditions."
      },
      {
        question: "Faut-il préciser une occasion spéciale ?",
        answer:
          "Anniversaire, dîner à deux, rendez-vous professionnel ou autre moment particulier: plus nous avons l'information tôt, plus nous pouvons préparer une attention juste et discrète."
      }
    ],
    arrivalStory: {
      eyebrow: "Venir ici",
      title: "Une arrivée claire met déjà dans le bon rythme.",
      intro:
        "Réserver, préciser une demande, trouver l'adresse: tout doit rester lisible dès le premier regard.",
      image: "/images/details/bleu-maree-detail-table-setting-alt-01.jpg",
      imageAlt: "Table Bleu Marée baignée d'une lumière douce",
      imagePosition: "50% 50%",
      details: [
        {
          label: "Adresse tenue",
          copy: "La maison s'ancre à Biarritz dans une adresse qui se rejoint sans confusion."
        },
        {
          label: "Itinéraire direct",
          copy: "Le lien ouvre la bonne destination immédiatement."
        },
        {
          label: "Canal simple",
          copy: "Téléphone, email et message restent côte à côte."
        }
      ]
    }
  },
  en: {
    pageHero: {
      eyebrow: "Contact",
      title: "Reaching us should feel as simple as the welcome itself.",
      intro:
        "Address, opening hours, phone, message, directions. Everything is gathered here with the same clarity as the rest of the house.",
      image: "/images/details/bleu-maree-detail-glassware-candlelight.jpg",
      imagePosition: "50% 50%",
      markers: [],
      noteLabel: "The rule",
      note:
        "Give the right bearings, without detour."
    },
    infoIntro: {
      eyebrow: "Bearings",
      title: "Arrive without hesitation.",
      lead:
        "Useful information stays together for guests who need a quick answer without stiffness or noise."
    },
    labels: {
      address: "Address",
      phone: "Phone",
      email: "Email",
      access: "Access"
    },
    accessCopy:
      "The right route, with no detour.",
    routeButton: "Open directions",
    reserveButton: "Book",
    faq: {
      eyebrow: "Before coming",
      title: "Useful answers, before stepping inside.",
      lead:
        "Parking, accessibility, groups, and special requests: everything stays gathered here without making the page heavier."
    },
    faqItems: [
      {
        question: "Where can guests park near the restaurant?",
        answer:
          "Several public parking options are available within a short walking distance. For a smoother arrival, we recommend coming slightly early, especially during the busy season in Biarritz."
      },
      {
        question: "Is the restaurant accessible for guests with reduced mobility?",
        answer:
          "Yes. We can welcome guests with reduced mobility, and we recommend mentioning it while booking or by phone so the team can prepare the table in the best conditions."
      },
      {
        question: "Can allergies or dietary preferences be mentioned in advance?",
        answer:
          "Yes. Allergies, intolerances, or dietary preferences can be shared during the booking request or through the contact form so the team can respond accurately."
      },
      {
        question: "Do you welcome groups or private events?",
        answer:
          "Yes. From 8 guests onward, we recommend a dedicated request so the team can shape the pace of the meal, the menus, and any special attentions properly."
      },
      {
        question: "Should a special occasion be mentioned in advance?",
        answer:
          "Birthday, dinner for two, business meal, or any other special moment: the earlier we know, the better we can prepare something precise and discreet."
      }
    ],
    arrivalStory: {
      eyebrow: "Coming here",
      title: "A clear arrival already sets the right rhythm.",
      intro:
        "Booking, special request, or address lookup: everything should stay legible from the first glance.",
      image: "/images/details/bleu-maree-detail-table-setting-alt-01.jpg",
      imageAlt: "Bleu Maree table in soft light",
      imagePosition: "50% 50%",
      details: [
        {
          label: "Clear address",
          copy: "The house is anchored in Biarritz at an address that can be reached without confusion."
        },
        {
          label: "Direct route",
          copy: "The link opens the right destination immediately."
        },
        {
          label: "Simple channel",
          copy: "Phone, email, and message remain side by side."
        }
      ]
    }
  }
};

export function getContactContent(locale: Locale) {
  return contactContentByLocale[locale];
}
