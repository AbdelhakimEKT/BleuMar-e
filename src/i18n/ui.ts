import type { Locale } from "./config";

const uiCopy = {
  fr: {
    skipToContent: "Aller au contenu principal",
    languageLabel: "Langue",
    languages: {
      fr: "FR",
      en: "EN"
    },
    menuButton: "Menu",
    reserve: "Réserver",
    navigationLabel: "Navigation principale",
    informationHeading: "Informations pratiques",
    navigationHeading: "Navigation",
    openingHoursHeading: "Horaires",
    addressLabel: "Adresse",
    contactLabel: "Contact",
    footerTagline: "Bleu Marée · Biarritz · Expérience gastronomique premium",
    contactForm: {
      title: "Écrire à la maison",
      intro:
        "Pour une privatisation, une demande presse ou une occasion particulière, l'équipe peut vous répondre rapidement depuis ce formulaire.",
      name: "Nom",
      email: "Email",
      phone: "Téléphone",
      subject: "Sujet",
      message: "Message",
      hint:
        "Les messages envoyés ici sont validés côté serveur et prêts à être reliés à votre outil email ou CRM.",
      submit: "Envoyer le message",
      submitting: "Envoi..."
    },
    contactApi: {
      missingFields: "Merci de renseigner votre nom, votre email, le sujet et le message.",
      invalidEmail: "L'adresse email indiquée semble invalide.",
      success: "Merci, votre message a bien été transmis à l'équipe Bleu Marée."
    },
    zenchef: {
      title: "Réservation V1 via le module officiel.",
      intro:
        "Le site est prêt à déclencher le widget ou le Booking Link Zenchef. Dès que vous nous transmettez l'accès ou le lien officiel, ce bloc devient le point d'entrée principal pour choisir la date, l'heure et le nombre de couverts.",
      noticeTitle: "Ce que Zenchef prendra en charge",
      noticeCopy:
        "Nombre de couverts, disponibilités, créneaux, fermetures exceptionnelles, confirmations email et ajustements côté restaurant.",
      bookWithProvider: "Réserver avec {provider}",
      pendingTitle: "Intégration en attente",
      shareLink: "Nous transmettre le lien {provider}"
    },
    notFound: {
      eyebrow: "Page introuvable",
      title: "Cette adresse ne mène plus à la bonne table.",
      intro:
        "La page demandée n'existe pas ou a changé de place. Vous pouvez revenir à l'accueil, consulter les menus ou ouvrir directement la réservation.",
      home: "Retour à l'accueil",
      reservation: "Réserver",
      note:
        "Le site garde volontairement une 404 éditorialisée, cohérente avec l'univers premium et utile pour ne pas perdre les visiteurs."
    },
    legal: {
      eyebrow: "Mentions légales",
      title: "Cadre légal du site.",
      publisherTitle: "Éditeur du site",
      publisherCopy:
        "Site vitrine du restaurant Bleu Marée à Biarritz. Les coordonnées définitives de la société exploitante, du directeur de publication et de l'hébergeur devront être complétées avant la mise en ligne officielle.",
      hostingTitle: "Hébergement",
      hostingCopy:
        "L'application est prête à être déployée sur une infrastructure moderne telle que Vercel. Les mentions complètes de l'hébergeur seront à reporter dans cette section au moment du déploiement.",
      intellectualPropertyTitle: "Propriété intellectuelle",
      intellectualPropertyCopy:
        "Les textes, visuels, marques, logos et éléments graphiques liés à Bleu Marée sont protégés par le droit de la propriété intellectuelle. Toute reproduction non autorisée reste interdite."
    },
    privacy: {
      eyebrow: "Confidentialité",
      title: "Protection des données personnelles.",
      collectedDataTitle: "Données collectées",
      collectedDataCopy:
        "Les formulaires de contact et de réservation peuvent collecter les données strictement nécessaires au traitement de la demande: identité, coordonnées, date souhaitée, nombre de couverts et remarques éventuelles.",
      purposeTitle: "Finalité",
      purposeCopy:
        "Ces informations servent à répondre aux demandes, organiser les réservations et assurer la qualité de l'expérience client. Elles ne doivent pas être utilisées à d'autres fins sans information préalable de l'utilisateur.",
      retentionTitle: "Conservation et droits",
      retentionCopy:
        "La durée de conservation et le contact RGPD définitif seront à préciser lors du branchement du back-office et des outils d'email. L'utilisateur pourra exercer ses droits d'accès, de rectification et de suppression selon la réglementation en vigueur.",
      cookiesTitle: "Cookies et mesure d'audience",
      cookiesCopy:
        "Si un outil analytics est ajouté au site, une bannière et une politique cookies devront compléter ce document pour rester cohérents avec les obligations applicables."
    }
  },
  en: {
    skipToContent: "Skip to main content",
    languageLabel: "Language",
    languages: {
      fr: "FR",
      en: "EN"
    },
    menuButton: "Menu",
    reserve: "Book",
    navigationLabel: "Primary navigation",
    informationHeading: "Practical information",
    navigationHeading: "Navigation",
    openingHoursHeading: "Opening hours",
    addressLabel: "Address",
    contactLabel: "Contact",
    footerTagline: "Bleu Marée · Biarritz · Premium gastronomic experience",
    contactForm: {
      title: "Write to the house",
      intro:
        "For a private event, a press request, or a special occasion, the team can respond quickly through this form.",
      name: "Name",
      email: "Email",
      phone: "Phone",
      subject: "Subject",
      message: "Message",
      hint:
        "Messages sent here are validated server-side and ready to connect to your email tool or CRM.",
      submit: "Send message",
      submitting: "Sending..."
    },
    contactApi: {
      missingFields: "Please provide your name, email, subject, and message.",
      invalidEmail: "The email address provided appears to be invalid.",
      success: "Thank you, your message has been sent to the Bleu Marée team."
    },
    zenchef: {
      title: "V1 booking through the official module.",
      intro:
        "The site is ready to launch the Zenchef widget or Booking Link. As soon as you share the official access or link, this block becomes the main entry point to choose the date, time, and party size.",
      noticeTitle: "What Zenchef will handle",
      noticeCopy:
        "Party size, availability, time slots, exceptional closures, email confirmations, and restaurant-side adjustments.",
      bookWithProvider: "Book with {provider}",
      pendingTitle: "Integration pending",
      shareLink: "Send us the {provider} link"
    },
    notFound: {
      eyebrow: "Page not found",
      title: "This address no longer leads to the right table.",
      intro:
        "The page you requested does not exist or has moved. You can return home, browse the menus, or open the booking page directly.",
      home: "Back to home",
      reservation: "Book a table",
      note:
        "The site intentionally keeps an editorial 404 page that stays consistent with the premium universe and helps retain visitors."
    },
    legal: {
      eyebrow: "Legal notice",
      title: "Legal framework of the site.",
      publisherTitle: "Website publisher",
      publisherCopy:
        "Showcase website for Bleu Marée restaurant in Biarritz. The final details of the operating company, publication director, and hosting provider must be completed before the official launch.",
      hostingTitle: "Hosting",
      hostingCopy:
        "The application is ready to be deployed on a modern infrastructure such as Vercel. Full hosting details should be added to this section at deployment time.",
      intellectualPropertyTitle: "Intellectual property",
      intellectualPropertyCopy:
        "Texts, visuals, trademarks, logos, and graphic elements related to Bleu Marée are protected by intellectual property law. Any unauthorized reproduction remains prohibited."
    },
    privacy: {
      eyebrow: "Privacy",
      title: "Personal data protection.",
      collectedDataTitle: "Data collected",
      collectedDataCopy:
        "Contact and booking forms may collect only the data strictly necessary to process the request: identity, contact details, preferred date, party size, and any relevant notes.",
      purposeTitle: "Purpose",
      purposeCopy:
        "This information is used to answer requests, organize bookings, and maintain the quality of the guest experience. It should not be used for other purposes without informing the user in advance.",
      retentionTitle: "Retention and rights",
      retentionCopy:
        "The retention period and final GDPR contact details will need to be specified when the back-office and email tools are fully connected. Users may exercise their rights of access, rectification, and deletion in accordance with applicable regulations.",
      cookiesTitle: "Cookies and analytics",
      cookiesCopy:
        "If an analytics tool is added to the site, a banner and a dedicated cookie policy will need to complement this document to remain consistent with applicable obligations."
    }
  }
} as const;

export function getUiCopy(locale: Locale) {
  return uiCopy[locale];
}
