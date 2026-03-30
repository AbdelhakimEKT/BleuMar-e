import type { Locale } from "@/i18n/config";

const contactContentByLocale = {
  fr: {
    pageHero: {
      eyebrow: "Contact & accès",
      title: "Tout ce qu'il faut pour venir, appeler ou écrire sans détour.",
      intro:
        "Adresse, horaires, formulaire et itinéraire sont réunis au même endroit pour rendre l'arrivée aussi simple que naturelle.",
      image: "/images/details/bleu-maree-detail-glassware-candlelight.jpg",
      imagePosition: "50% 50%"
    },
    infoIntro: {
      eyebrow: "Informations pratiques",
      title: "Les informations utiles, sans détour.",
      lead:
        "Horaires, téléphone, email, accès et lien de navigation restent visibles ensemble pour répondre vite et bien."
    },
    labels: {
      address: "Adresse",
      phone: "Téléphone",
      email: "Email",
      access: "Accès"
    },
    accessCopy:
      "Un lien direct permet d'ouvrir l'itinéraire en un geste et de rejoindre la maison sans détour.",
    routeButton: "Ouvrir l'itinéraire",
    reserveButton: "Réserver",
    faq: {
      eyebrow: "Questions fréquentes",
      title: "Les réponses utiles avant de venir à table.",
      lead:
        "Parking, accessibilité, groupes ou demandes particulières: les points pratiques les plus fréquents sont réunis ici."
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
      eyebrow: "Venir à Bleu Marée",
      title: "Une arrivée pensée pour rester simple, même quand le dîner ne l'est pas.",
      intro:
        "Qu'il s'agisse d'une réservation, d'une demande particulière ou d'un simple besoin pratique, tout doit rester clair, fluide et immédiat.",
      image: "/images/hero/bleu-maree-hero-atlantic-dining-room.png",
      imageAlt: "Salle Bleu Marée face à l'Atlantique",
      imagePosition: "50% 54%",
      details: [
        {
          label: "Adresse",
          copy: "La maison s'ancre à Biarritz, dans un emplacement pensé pour une arrivée lisible dès le premier regard."
        },
        {
          label: "Navigation",
          copy: "Le lien d'itinéraire ouvre immédiatement la bonne destination, sans détour inutile."
        },
        {
          label: "Contact direct",
          copy: "Téléphone, email et formulaire restent visibles ensemble pour laisser le choix du canal le plus naturel."
        }
      ]
    }
  },
  en: {
    pageHero: {
      eyebrow: "Contact & access",
      title: "Everything needed to visit, call, or write without friction.",
      intro:
        "Address, opening hours, form, and directions are gathered in one place so arrival feels straightforward and natural.",
      image: "/images/details/bleu-maree-detail-glassware-candlelight.jpg",
      imagePosition: "50% 50%"
    },
    infoIntro: {
      eyebrow: "Practical information",
      title: "The useful information, without detours.",
      lead:
        "Opening hours, phone, email, access, and directions stay visible together for guests who need a quick answer."
    },
    labels: {
      address: "Address",
      phone: "Phone",
      email: "Email",
      access: "Access"
    },
    accessCopy:
      "A direct link opens the route in one move and keeps arrival simple.",
    routeButton: "Open directions",
    reserveButton: "Book",
    faq: {
      eyebrow: "Frequently asked questions",
      title: "Useful answers before coming to the table.",
      lead:
        "Parking, accessibility, groups, and special requests: the most common practical questions are gathered here."
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
      eyebrow: "Arriving at Bleu Maree",
      title: "An arrival designed to stay simple, even when dinner is not.",
      intro:
        "Whether it is a booking, a special request, or a practical question, everything should remain clear, fluid, and immediate.",
      image: "/images/hero/bleu-maree-hero-atlantic-dining-room.png",
      imageAlt: "Bleu Maree dining room facing the Atlantic",
      imagePosition: "50% 54%",
      details: [
        {
          label: "Address",
          copy: "The house is anchored in Biarritz, in a setting designed to feel legible from the very first glance."
        },
        {
          label: "Directions",
          copy: "The directions link opens the right destination immediately, with no unnecessary detour."
        },
        {
          label: "Direct contact",
          copy: "Phone, email, and form remain visible together so guests can choose the channel that feels most natural."
        }
      ]
    }
  }
};

export function getContactContent(locale: Locale) {
  return contactContentByLocale[locale];
}
