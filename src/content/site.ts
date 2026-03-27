export const navigation = [
  { href: "/", label: "Accueil" },
  { href: "/restaurant", label: "Le restaurant" },
  { href: "/menus", label: "Menus" },
  { href: "/reservation", label: "Réservation" },
  { href: "/experiences", label: "Expériences" },
  { href: "/galerie", label: "Galerie" },
  { href: "/contact", label: "Contact" }
];

export const footerLinks = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/politique-confidentialite", label: "Politique de confidentialité" }
];

export const siteConfig = {
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
};
