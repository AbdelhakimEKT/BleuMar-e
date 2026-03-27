import type { Locale } from "@/i18n/config";

const contactContentByLocale = {
  fr: {
    pageHero: {
      eyebrow: "Contact & accès",
      title: "Tout ce qu'il faut pour venir, appeler ou écrire sans détour.",
      intro:
        "La page contact rassemble les informations pratiques les plus utiles et prépare l'intégration d'un plan ou d'une carte externe.",
      image: "/images/hero/bleu-maree-hero-atlantic-dining-room.png"
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
      "Accès direct via Google Maps, avec possibilité d'ajouter ensuite parking, voiturier, PMR ou consignes plus détaillées.",
    routeButton: "Ouvrir l'itinéraire",
    reserveButton: "Réserver"
  },
  en: {
    pageHero: {
      eyebrow: "Contact & access",
      title: "Everything needed to visit, call, or write without friction.",
      intro:
        "The contact page gathers the most useful practical information and prepares the integration of a map or an external route tool.",
      image: "/images/hero/bleu-maree-hero-atlantic-dining-room.png"
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
      "Direct Google Maps access, with room to add parking, valet, accessible access, or more detailed guidance later.",
    routeButton: "Open directions",
    reserveButton: "Book"
  }
};

export function getContactContent(locale: Locale) {
  return contactContentByLocale[locale];
}
