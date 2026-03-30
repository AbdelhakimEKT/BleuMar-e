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
        "Le message est transmis dans un espace de suivi clair pour permettre une réponse plus rapide et plus attentive.",
      submit: "Envoyer le message",
      submitting: "Envoi..."
    },
    contactApi: {
      missingFields: "Merci de renseigner votre nom, votre email, le sujet et le message.",
      invalidEmail: "L'adresse email indiquée semble invalide.",
      deliveryUnavailable:
        "Le routage email n'est pas encore configuré sur cette instance. Ajoutez le mot de passe SMTP pour activer l'envoi réel.",
      sendFailed:
        "Le message n'a pas pu partir pour le moment. Réessayez dans un instant ou contactez la maison par téléphone.",
      success: "Merci, votre message a bien été transmis à l'équipe Bleu Marée."
    },
    reservationForm: {
      title: "Réserver une table",
      intro:
        "Choisissez votre moment, indiquez vos préférences et laissez la maison revenir vers vous avec une réponse claire et rapide.",
      name: "Nom et prénom",
      email: "Email",
      phone: "Téléphone",
      covers: "Couverts",
      date: "Date souhaitée",
      time: "Heure souhaitée",
      occasion: "Occasion",
      notes: "Allergies ou remarques",
      occasionOptions: {
        default: "Sélectionner",
        dinner: "Dîner à deux",
        anniversary: "Anniversaire",
        business: "Dîner professionnel",
        celebration: "Célébration",
        private: "Privatisation"
      },
      hint:
        "La demande reste courte, lisible et suffisamment précise pour permettre une réponse soignée.",
      submit: "Envoyer la demande",
      submitting: "Envoi en cours...",
      storagePending:
        "Cette instance de démonstration n'a pas encore l'enregistrement activé. Le parcours reste prêt pour une vraie sauvegarde côté back-office."
    },
    reservationApi: {
      missingFields:
        "Merci de renseigner votre nom, votre email, votre téléphone, le nombre de couverts, la date et l'heure souhaitées.",
      invalidEmail: "L'adresse email indiquée semble invalide.",
      invalidCovers: "Le nombre de couverts doit être compris entre 1 et 12.",
      storageNotReady:
        "Cette instance de démonstration n'enregistre pas encore les demandes pour de vrai.",
      saveFailed:
        "La demande n'a pas pu être enregistrée pour le moment. Réessayez dans un instant.",
      success:
        "Votre demande a bien été enregistrée. L'équipe Bleu Marée peut maintenant la traiter avec toutes les informations utiles."
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
        "The message is sent into a clear follow-up workspace so the house can answer with more attention and speed.",
      submit: "Send message",
      submitting: "Sending..."
    },
    contactApi: {
      missingFields: "Please provide your name, email, subject, and message.",
      invalidEmail: "The email address provided appears to be invalid.",
      deliveryUnavailable:
        "Email delivery is not configured on this instance yet. Add the SMTP password to enable live sending.",
      sendFailed:
        "The message could not be sent right now. Please try again in a moment or contact the house by phone.",
      success: "Thank you, your message has been sent to the Bleu Marée team."
    },
    reservationForm: {
      title: "Book a table",
      intro:
        "Choose your moment, share your preferences, and let the house come back to you with a clear and timely response.",
      name: "Full name",
      email: "Email",
      phone: "Phone",
      covers: "Guests",
      date: "Preferred date",
      time: "Preferred time",
      occasion: "Occasion",
      notes: "Allergies or notes",
      occasionOptions: {
        default: "Select",
        dinner: "Dinner for two",
        anniversary: "Anniversary",
        business: "Business dinner",
        celebration: "Celebration",
        private: "Private event"
      },
      hint:
        "The request stays short, legible, and precise enough to support a thoughtful response.",
      submit: "Send request",
      submitting: "Sending...",
      storagePending:
        "This demo instance does not have live storage enabled yet. The journey is still ready for real back-office saving."
    },
    reservationApi: {
      missingFields:
        "Please provide your name, email, phone, number of guests, preferred date, and preferred time.",
      invalidEmail: "The email address provided appears to be invalid.",
      invalidCovers: "The number of guests must be between 1 and 12.",
      storageNotReady:
        "This demo instance is not saving requests for real yet.",
      saveFailed:
        "The request could not be saved right now. Please try again in a moment.",
      success:
        "Your request has been saved successfully. The Bleu Marée team can now review it with all the useful details in place."
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
