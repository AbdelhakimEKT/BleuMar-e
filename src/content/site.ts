import type { Locale } from "@/i18n/config";

const navigationByLocale = {
  fr: [
    { href: "/", label: "Accueil" },
    { href: "/restaurant", label: "Le restaurant" },
    { href: "/menus", label: "Menus" },
    { href: "/reservation", label: "Réservation" },
    { href: "/experiences", label: "Expériences" },
    { href: "/galerie", label: "Galerie" },
    { href: "/contact", label: "Contact" }
  ],
  en: [
    { href: "/", label: "Home" },
    { href: "/restaurant", label: "Restaurant" },
    { href: "/menus", label: "Menus" },
    { href: "/reservation", label: "Booking" },
    { href: "/experiences", label: "Experiences" },
    { href: "/galerie", label: "Gallery" },
    { href: "/contact", label: "Contact" }
  ]
};

const footerLinksByLocale = {
  fr: [
    { href: "/mentions-legales", label: "Mentions légales" },
    { href: "/politique-confidentialite", label: "Politique de confidentialité" }
  ],
  en: [
    { href: "/mentions-legales", label: "Legal notice" },
    { href: "/politique-confidentialite", label: "Privacy policy" }
  ]
};

const siteConfigByLocale = {
  fr: {
    name: "Bleu Marée",
    location: "Biarritz",
    tagline: "L'Atlantique à table, dans un écrin de lumière.",
    description:
      "Restaurant gastronomique premium à Biarritz, Bleu Marée célèbre les produits de la mer dans une expérience contemporaine, raffinée et immersive.",
    url: "https://www.bleu-maree.fr",
    email: "abdelhakim.elakrouti@gmail.com",
    phoneDisplay: "+33 7 68 63 66 49",
    phoneRaw: "+33768636649",
    addressLineOne: "12 Avenue de l'Impératrice",
    addressLineTwo: "64200 Biarritz, France",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=12+Avenue+de+l%27Imp%C3%A9ratrice%2C+64200+Biarritz",
    bookingProvider: "Zenchef",
    bookingLink: process.env.NEXT_PUBLIC_ZENCHEF_BOOKING_URL ?? "",
    bookingNote:
      "Le lien ou le script officiel Zenchef devra être ajouté pour activer le module de réservation final.",
    openingHours: [
      { day: "Mardi au jeudi", hours: "12h00 - 14h00 · 19h30 - 22h00" },
      { day: "Vendredi & samedi", hours: "12h00 - 14h00 · 19h30 - 22h30" },
      { day: "Dimanche", hours: "12h00 - 14h30" },
      { day: "Lundi", hours: "Fermé" }
    ],
    reservationHighlights: [
      "Réservation V1 pensée pour Zenchef, avec choix du nombre de couverts, de la date et de l'heure.",
      "Confirmation automatique par email et gestion des disponibilités directement côté Zenchef.",
      "Possibilité de bloquer des créneaux, gérer les fermetures exceptionnelles et préparer les occasions spéciales."
    ]
  },
  en: {
    name: "Bleu Marée",
    location: "Biarritz",
    tagline: "The Atlantic at the table, in a setting shaped by light.",
    description:
      "Premium gastronomic restaurant in Biarritz, Bleu Marée celebrates seafood through a contemporary, refined, and immersive dining experience.",
    url: "https://www.bleu-maree.fr",
    email: "abdelhakim.elakrouti@gmail.com",
    phoneDisplay: "+33 7 68 63 66 49",
    phoneRaw: "+33768636649",
    addressLineOne: "12 Avenue de l’Impératrice",
    addressLineTwo: "64200 Biarritz, France",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=12+Avenue+de+l%27Imp%C3%A9ratrice%2C+64200+Biarritz",
    bookingProvider: "Zenchef",
    bookingLink: process.env.NEXT_PUBLIC_ZENCHEF_BOOKING_URL ?? "",
    bookingNote:
      "The official Zenchef link or script will need to be added to activate the final booking flow.",
    openingHours: [
      { day: "Tuesday to Thursday", hours: "12:00 pm - 2:00 pm · 7:30 pm - 10:00 pm" },
      { day: "Friday & Saturday", hours: "12:00 pm - 2:00 pm · 7:30 pm - 10:30 pm" },
      { day: "Sunday", hours: "12:00 pm - 2:30 pm" },
      { day: "Monday", hours: "Closed" }
    ],
    reservationHighlights: [
      "V1 booking is designed around Zenchef, with party size, date, and time selection.",
      "Automatic email confirmation and live availability are handled directly through Zenchef.",
      "Time slots can be blocked, exceptional closures managed, and special occasions prepared ahead of service."
    ]
  }
};

export const navigation = navigationByLocale.fr;
export const footerLinks = footerLinksByLocale.fr;
export const siteConfig = siteConfigByLocale.fr;

export function getNavigation(locale: Locale) {
  return navigationByLocale[locale];
}

export function getFooterLinks(locale: Locale) {
  return footerLinksByLocale[locale];
}

export function getSiteConfig(locale: Locale) {
  return siteConfigByLocale[locale];
}
