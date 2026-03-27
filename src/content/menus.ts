export type MenuItem = {
  name: string;
  description: string;
  price: string;
  tag?: string;
};

export type MenuSection = {
  title: string;
  subtitle: string;
  priceHint: string;
  description: string;
  items: MenuItem[];
};

export const menuSections: MenuSection[] = [
  {
    title: "Menu déjeuner",
    subtitle: "Service du midi",
    priceHint: "39 € · 2 ou 3 temps",
    description:
      "Une proposition plus concise, pensée pour un déjeuner gastronomique lisible et efficace.",
    items: [
      {
        name: "Entrée du marché",
        description: "Composition du moment selon la saison et les arrivages.",
        price: "16 €",
        tag: "De saison"
      },
      {
        name: "Poisson du jour ou viande du moment",
        description: "Suggestion raffinée en fonction du service et du produit.",
        price: "28 €",
        tag: "Selon arrivage"
      },
      {
        name: "Dessert du chef",
        description: "Finale du jour, nette et saisonnière.",
        price: "12 €"
      }
    ]
  },
  {
    title: "Menu dégustation 5 temps",
    subtitle: "Parcours signature",
    priceHint: "95 €",
    description:
      "Lecture concise de l'univers Bleu Marée, autour de la mer, de la saison et du tempo du service.",
    items: [
      {
        name: "Huître, pomme verte, verjus",
        description: "Ouverture saline et vive pour lancer la dégustation.",
        price: "Inclus",
        tag: "De saison"
      },
      {
        name: "Crudo de Saint-Jacques",
        description: "Agrumes doux, huile d'algues et feuille capucine.",
        price: "Inclus",
        tag: "Signature"
      },
      {
        name: "Poisson de ligne, jus réduit",
        description: "Lecture du moment selon arrivage et maturité du produit.",
        price: "Inclus",
        tag: "Selon arrivage"
      },
      {
        name: "Pré-dessert",
        description: "Transition fraîche et légère autour des agrumes.",
        price: "Inclus"
      },
      {
        name: "Dessert signature",
        description: "Finale précise, nette et aérienne.",
        price: "Inclus"
      }
    ]
  },
  {
    title: "Menu dégustation 7 temps",
    subtitle: "Expérience complète",
    priceHint: "135 €",
    description:
      "Une progression plus ample pour les clients qui viennent vivre la maison dans sa forme la plus immersive.",
    items: [
      {
        name: "Mise en bouche marine",
        description: "Amuse-bouche inspiré de l'Atlantique.",
        price: "Inclus"
      },
      {
        name: "Entrée froide signature",
        description: "Jeu de coupe, fraîcheur et tension aromatique.",
        price: "Inclus"
      },
      {
        name: "Entrée chaude de saison",
        description: "Travail plus enveloppant autour du jus et des textures.",
        price: "Inclus",
        tag: "De saison"
      },
      {
        name: "Poisson noble",
        description: "Cuisson juste et garniture végétale.",
        price: "Inclus",
        tag: "Selon arrivage"
      },
      {
        name: "Viande choisie",
        description: "Séquence plus terrienne pour donner du relief au parcours.",
        price: "Inclus"
      },
      {
        name: "Pré-dessert",
        description: "Relance fraîche avant la finale sucrée.",
        price: "Inclus"
      },
      {
        name: "Dessert signature",
        description: "Clôture de l'expérience sur une note claire et élégante.",
        price: "Inclus",
        tag: "Signature"
      }
    ]
  },
  {
    title: "Entrées",
    subtitle: "À la carte",
    priceHint: "De 18 € à 32 €",
    description:
      "Assiettes d'ouverture pensées pour installer immédiatement le ton de la maison.",
    items: [
      {
        name: "Crudo de Saint-Jacques",
        description: "Agrumes doux, huile d'algues, herbes fraîches.",
        price: "24 €",
        tag: "Signature"
      },
      {
        name: "Langoustine, laitue braisée, bisque légère",
        description: "Une entrée plus enveloppante, structurée et profonde.",
        price: "32 €"
      },
      {
        name: "Entrée végétale du moment",
        description: "Interprétation saisonnière selon le marché.",
        price: "18 €",
        tag: "De saison"
      }
    ]
  },
  {
    title: "Poissons & produits de la mer",
    subtitle: "À la carte",
    priceHint: "De 34 € à 54 €",
    description:
      "Le coeur de la carte, construit autour des produits marins et de la précision des cuissons.",
    items: [
      {
        name: "Poisson du jour",
        description: "Cuisson courte, garniture saisonnière et sauce de la maison.",
        price: "34 €",
        tag: "Selon arrivage"
      },
      {
        name: "Saint-Jacques rôties",
        description: "Céleri, noisette et jus corsé mais net.",
        price: "46 €",
        tag: "Signature"
      },
      {
        name: "Turbot, beurre blanc fumé, poireau jeune",
        description: "Lecture contemporaine d'un grand produit.",
        price: "54 €"
      }
    ]
  },
  {
    title: "Viandes",
    subtitle: "À la carte",
    priceHint: "De 36 € à 48 €",
    description:
      "Une sélection courte pour les clients qui souhaitent compléter le récit marin par une séquence plus terrienne.",
    items: [
      {
        name: "Volaille fermière, jus réduit, légumes braisés",
        description: "Texture fondante et sauce courte.",
        price: "36 €"
      },
      {
        name: "Pièce de boeuf maturée",
        description: "Accompagnement saisonnier et jus plus profond.",
        price: "48 €"
      }
    ]
  },
  {
    title: "Desserts",
    subtitle: "À la carte",
    priceHint: "De 14 € à 21 €",
    description:
      "Des finales précises, construites sur la fraîcheur, le relief et l'équilibre.",
    items: [
      {
        name: "Dessert signature",
        description: "Crème légère, agrumes et note toastée.",
        price: "21 €",
        tag: "Signature"
      },
      {
        name: "Dessert du moment",
        description: "Variation courte selon la saison.",
        price: "14 €",
        tag: "De saison"
      }
    ]
  },
  {
    title: "Carte des vins",
    subtitle: "Sélection cave",
    priceHint: "À partir de 9 € le verre",
    description:
      "Une cave courte et pensée pour dialoguer avec la minéralité, l'iode et la précision du menu.",
    items: [
      {
        name: "Verres du moment",
        description: "Sélection évolutive selon les services.",
        price: "9 € à 18 €"
      },
      {
        name: "Bouteilles signature",
        description: "Sélection française et quelques accents plus atlantiques.",
        price: "À partir de 42 €"
      }
    ]
  },
  {
    title: "Accords mets & vins",
    subtitle: "Sommellerie",
    priceHint: "42 € à 86 €",
    description:
      "Accords pensés pour épouser les menus dégustation et les temps forts de la carte.",
    items: [
      {
        name: "Accord 3 verres",
        description: "Pour le déjeuner ou un parcours plus court.",
        price: "42 €"
      },
      {
        name: "Accord 5 verres",
        description: "Construction progressive, fraîcheur puis structure.",
        price: "68 €"
      },
      {
        name: "Accord 7 verres",
        description: "Version complète pour le menu dégustation 7 temps.",
        price: "86 €"
      }
    ]
  },
  {
    title: "Menu spécial événement",
    subtitle: "Temps fort",
    priceHint: "Selon programmation",
    description:
      "Section activable pour les fêtes, collaborations, Saint-Valentin ou soirées signatures.",
    items: [
      {
        name: "Exemple de menu spécial",
        description: "À publier seulement lorsqu'un événement est actif.",
        price: "Sur annonce",
        tag: "Événement"
      }
    ]
  }
];

export const menuNotes = [
  "La structure de carte suit désormais vos familles de contenus réelles: déjeuner, dégustation, entrées, mer, viandes, desserts, vins et accords.",
  "Les mentions “de saison”, “selon arrivage” et “événement” sont déjà prévues pour être pilotées depuis le futur back-office.",
  "Une version PDF et un lien de menu Zenchef pourront être associés à chaque service si vous activez cette option dans Zenchef."
];
