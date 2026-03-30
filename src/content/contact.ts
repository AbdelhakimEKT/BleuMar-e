import type { Locale } from "@/i18n/config";

const contactContentByLocale = {
  fr: {
    pageHero: {
      eyebrow: "Contact & accès",
      title: "Tout ce qu'il faut pour venir, appeler ou écrire sans détour.",
      intro:
        "Adresse, horaires, formulaire et lien d'itinéraire sont réunis dans une page pensée pour répondre vite, sans perdre le ton premium de la maison.",
      image: "/images/details/bleu-maree-detail-glassware-candlelight.jpg",
      imagePosition: "50% 50%"
    },
    infoIntro: {
      eyebrow: "Informations pratiques",
      title: "Une page pensée pour les parcours rapides.",
      lead:
        "Horaires, téléphone, email, accès et lien de navigation sont regroupés pour les visiteurs qui cherchent une réponse immédiate."
    },
    labels: {
      address: "Adresse",
      phone: "Téléphone",
      email: "Email",
      access: "Accès"
    },
    accessCopy:
      "Un lien direct permet d'ouvrir l'itinéraire en un geste, puis de rejoindre la maison sans friction.",
    routeButton: "Ouvrir l'itinéraire",
    reserveButton: "Réserver",
    arrivalStory: {
      eyebrow: "Venir à Bleu Marée",
      title: "Une arrivée pensée pour rester simple, même quand le dîner ne l'est pas.",
      intro:
        "Le contact sert autant aux parcours rapides qu'aux demandes plus attentives. Tout doit rester clair, mobile et immédiatement actionnable.",
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
        "Address, opening hours, form, and directions link are gathered in a page designed to answer quickly without losing the premium tone of the house.",
      image: "/images/details/bleu-maree-detail-glassware-candlelight.jpg",
      imagePosition: "50% 50%"
    },
    infoIntro: {
      eyebrow: "Practical information",
      title: "A page designed for quick intent journeys.",
      lead:
        "Opening hours, phone, email, access, and directions are grouped for visitors who need an immediate answer."
    },
    labels: {
      address: "Address",
      phone: "Phone",
      email: "Email",
      access: "Access"
    },
    accessCopy:
      "A direct link opens the route in one move and makes arrival feel immediate and simple.",
    routeButton: "Open directions",
    reserveButton: "Book",
    arrivalStory: {
      eyebrow: "Arriving at Bleu Maree",
      title: "An arrival designed to stay simple, even when dinner is not.",
      intro:
        "The contact page serves both quick-intent journeys and more attentive requests. Everything should remain clear, mobile-friendly, and immediately actionable.",
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
