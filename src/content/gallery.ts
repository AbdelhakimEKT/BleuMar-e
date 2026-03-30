import type { Locale } from "@/i18n/config";

export type GalleryCategory = "room" | "service" | "plates" | "details";
export type GalleryAspect = "wide" | "landscape" | "portrait" | "square";

export type GalleryItem = {
  id: string;
  title: string;
  caption: string;
  alt: string;
  image: string;
  fallbackImage?: string;
  category: GalleryCategory;
  featured: boolean;
  aspect: GalleryAspect;
  objectPosition?: string;
  priority: number;
};

type GallerySequenceCopy = Record<
  GalleryCategory,
  {
    eyebrow: string;
    title: string;
    lead: string;
  }
>;

type GalleryTranslation = {
  title: string;
  caption: string;
  alt: string;
};

type GalleryItemBlueprint = {
  id: string;
  image: string;
  category: GalleryCategory;
  featured: boolean;
  aspect: GalleryAspect;
  objectPosition?: string;
  priority: number;
};

const galleryBlueprint: GalleryItemBlueprint[] = [
  {
    id: "room-golden-hour",
    image: "/images/hero/bleu-maree-hero-dining-room-golden-hour-realistic.jpg",
    category: "room",
    featured: true,
    aspect: "wide",
    objectPosition: "50% 55%",
    priority: 1
  },
  {
    id: "room-sunset",
    image: "/images/hero/bleu-maree-hero-dining-room-sunset.jpg",
    category: "room",
    featured: true,
    aspect: "landscape",
    objectPosition: "50% 54%",
    priority: 2
  },
  {
    id: "room-atlantic",
    image: "/images/hero/bleu-maree-hero-atlantic-dining-room.jpg",
    category: "room",
    featured: false,
    aspect: "landscape",
    objectPosition: "50% 50%",
    priority: 3
  },
  {
    id: "service-dining-room",
    image: "/images/experience/bleu-maree-service-in-dining-room.jpg",
    category: "service",
    featured: true,
    aspect: "landscape",
    objectPosition: "50% 50%",
    priority: 4
  },
  {
    id: "service-team-action",
    image: "/images/people/bleu-maree-team-service-in-action.jpg",
    category: "service",
    featured: false,
    aspect: "landscape",
    objectPosition: "50% 45%",
    priority: 5
  },
  {
    id: "service-plating-action",
    image: "/images/experience/bleu-maree-plating-action.jpg",
    category: "service",
    featured: false,
    aspect: "landscape",
    objectPosition: "50% 52%",
    priority: 6
  },
  {
    id: "service-chef-closeup",
    image: "/images/experience/bleu-maree-chef-plating-closeup.jpg",
    category: "service",
    featured: false,
    aspect: "portrait",
    objectPosition: "50% 52%",
    priority: 6.5
  },
  {
    id: "service-chef-action-alt",
    image: "/images/experience/bleu-maree-chef-plating-action-alt.jpg",
    category: "service",
    featured: false,
    aspect: "landscape",
    objectPosition: "50% 50%",
    priority: 6.8
  },
  {
    id: "service-chef-portrait",
    image: "/images/people/bleu-maree-chef-portrait.jpg",
    category: "service",
    featured: false,
    aspect: "portrait",
    objectPosition: "50% 44%",
    priority: 7
  },
  {
    id: "service-team-portrait",
    image: "/images/people/bleu-maree-team-portrait.jpg",
    category: "service",
    featured: false,
    aspect: "landscape",
    objectPosition: "50% 42%",
    priority: 8
  },
  {
    id: "plate-lunch-main",
    image: "/images/lunch/bleu-maree-lunch-main-course.jpg",
    category: "plates",
    featured: true,
    aspect: "landscape",
    objectPosition: "50% 56%",
    priority: 9
  },
  {
    id: "plate-crudo-signature",
    image: "/images/menu/bleu-maree-menu-crudo-signature.jpg",
    category: "plates",
    featured: true,
    aspect: "landscape",
    objectPosition: "50% 56%",
    priority: 10
  },
  {
    id: "plate-lunch-starter",
    image: "/images/lunch/bleu-maree-lunch-starter-light.jpg",
    category: "plates",
    featured: false,
    aspect: "landscape",
    objectPosition: "50% 56%",
    priority: 10.5
  },
  {
    id: "plate-tasting-amuse",
    image: "/images/tasting/bleu-maree-tasting-amuse-bouche.jpg",
    category: "plates",
    featured: false,
    aspect: "landscape",
    objectPosition: "50% 54%",
    priority: 11
  },
  {
    id: "plate-tasting-cold",
    image: "/images/tasting/bleu-maree-tasting-cold-course.jpg",
    category: "plates",
    featured: false,
    aspect: "landscape",
    objectPosition: "50% 54%",
    priority: 12
  },
  {
    id: "plate-tasting-hot",
    image: "/images/tasting/bleu-maree-tasting-hot-course.jpg",
    category: "plates",
    featured: false,
    aspect: "landscape",
    objectPosition: "50% 58%",
    priority: 13
  },
  {
    id: "plate-scallops-signature",
    image: "/images/menu/bleu-maree-menu-scallops-signature.jpg",
    category: "plates",
    featured: false,
    aspect: "landscape",
    objectPosition: "50% 56%",
    priority: 14
  },
  {
    id: "plate-fish-of-day",
    image: "/images/menu/bleu-maree-menu-fish-of-the-day.jpg",
    category: "plates",
    featured: false,
    aspect: "landscape",
    objectPosition: "50% 58%",
    priority: 15
  },
  {
    id: "plate-roasted-scallops",
    image: "/images/menu/bleu-maree-menu-roasted-scallops-premium.jpg",
    category: "plates",
    featured: false,
    aspect: "landscape",
    objectPosition: "50% 58%",
    priority: 16
  },
  {
    id: "plate-aged-beef",
    image: "/images/meats/bleu-maree-meat-aged-beef-generous-cut.jpg",
    category: "plates",
    featured: false,
    aspect: "landscape",
    objectPosition: "50% 58%",
    priority: 17
  },
  {
    id: "plate-farm-chicken",
    image: "/images/meats/bleu-maree-meat-farm-chicken-braised-vegetables.jpg",
    category: "plates",
    featured: false,
    aspect: "landscape",
    objectPosition: "50% 56%",
    priority: 18
  },
  {
    id: "plate-dessert-sculptural",
    image: "/images/desserts/bleu-maree-dessert-signature-sculptural.jpg",
    category: "plates",
    featured: false,
    aspect: "landscape",
    objectPosition: "50% 54%",
    priority: 19
  },
  {
    id: "plate-dessert-signature",
    image: "/images/desserts/bleu-maree-dessert-signature.jpg",
    category: "plates",
    featured: false,
    aspect: "landscape",
    objectPosition: "50% 55%",
    priority: 20
  },
  {
    id: "plate-dessert-signature-alt",
    image: "/images/desserts/bleu-maree-dessert-signature-alt.jpg",
    category: "plates",
    featured: false,
    aspect: "landscape",
    objectPosition: "50% 54%",
    priority: 20.5
  },
  {
    id: "plate-dessert-texture",
    image: "/images/desserts/bleu-maree-dessert-texture-closeup.jpg",
    category: "plates",
    featured: false,
    aspect: "portrait",
    objectPosition: "50% 52%",
    priority: 21
  },
  {
    id: "plate-seafood-closeup",
    image: "/images/menu/bleu-maree-menu-seafood-signature-closeup.jpg",
    category: "plates",
    featured: false,
    aspect: "portrait",
    objectPosition: "50% 55%",
    priority: 22
  },
  {
    id: "plate-seafood-signature-alt",
    image: "/images/menu/bleu-maree-menu-seafood-signature-alt.jpg",
    category: "plates",
    featured: false,
    aspect: "landscape",
    objectPosition: "50% 56%",
    priority: 22.5
  },
  {
    id: "plate-marine-detail",
    image: "/images/menu/bleu-maree-menu-marine-closeup-sauce.jpg",
    category: "plates",
    featured: false,
    aspect: "portrait",
    objectPosition: "50% 58%",
    priority: 23
  },
  {
    id: "detail-table-setting",
    image: "/images/details/bleu-maree-detail-table-setting.jpg",
    category: "details",
    featured: true,
    aspect: "landscape",
    objectPosition: "50% 52%",
    priority: 24
  },
  {
    id: "detail-table-setting-alt-01",
    image: "/images/details/bleu-maree-detail-table-setting-alt-01.jpg",
    category: "details",
    featured: false,
    aspect: "portrait",
    objectPosition: "50% 52%",
    priority: 25
  },
  {
    id: "detail-table-setting-alt-02",
    image: "/images/details/bleu-maree-detail-table-setting-alt-02.jpg",
    category: "details",
    featured: false,
    aspect: "landscape",
    objectPosition: "50% 52%",
    priority: 26
  },
  {
    id: "detail-glassware",
    image: "/images/details/bleu-maree-detail-glassware-candlelight.jpg",
    category: "details",
    featured: false,
    aspect: "portrait",
    objectPosition: "50% 52%",
    priority: 27
  },
  {
    id: "detail-wine-cellar",
    image: "/images/wines/bleu-maree-wine-cellar-selection.jpg",
    category: "details",
    featured: false,
    aspect: "landscape",
    objectPosition: "50% 46%",
    priority: 28
  },
  {
    id: "detail-wine-pairing-01",
    image: "/images/wines/bleu-maree-wine-pairing-scene-01.jpg",
    category: "details",
    featured: false,
    aspect: "landscape",
    objectPosition: "50% 55%",
    priority: 29
  },
  {
    id: "detail-wine-pairing-02",
    image: "/images/wines/bleu-maree-wine-pairing-scene-02.jpg",
    category: "details",
    featured: false,
    aspect: "landscape",
    objectPosition: "50% 55%",
    priority: 30
  }
];

const galleryTranslations: Record<Locale, Record<string, GalleryTranslation>> = {
  fr: {
    "room-golden-hour": {
      title: "Salle principale à l'heure dorée",
      caption: "La lumière du soir installe immédiatement le tempo de la maison.",
      alt: "Salle Bleu Marée baignée de lumière dorée face à l'océan"
    },
    "room-sunset": {
      title: "Tables face au coucher du soleil",
      caption: "Une respiration plus calme, presque suspendue, avant le service du soir.",
      alt: "Tables dressées devant les baies vitrées au coucher du soleil"
    },
    "room-atlantic": {
      title: "Lecture architecturale de la salle",
      caption: "Lignes nettes, horizon visible et sensation d'espace parfaitement tenue.",
      alt: "Salle élégante ouverte sur l'Atlantique"
    },
    "service-dining-room": {
      title: "Service de salle",
      caption: "Le geste reste précis, attentif et presque silencieux.",
      alt: "Service en salle dans une ambiance gastronomique"
    },
    "service-team-action": {
      title: "Mise en place collective",
      caption: "Le service s'écrit aussi dans la chorégraphie d'équipe.",
      alt: "Équipe en préparation de service chez Bleu Marée"
    },
    "service-plating-action": {
      title: "Dressage au passe",
      caption: "Un moment de concentration qui raconte déjà la cuisine.",
      alt: "Dressage en cuisine chez Bleu Marée"
    },
    "service-chef-closeup": {
      title: "Geste du chef",
      caption: "Un cadrage plus serré pour sentir la précision du dernier geste.",
      alt: "Gros plan sur le dressage du chef chez Bleu Marée"
    },
    "service-chef-action-alt": {
      title: "Cuisine en action",
      caption: "Une énergie plus vive, toujours contenue dans une écriture nette.",
      alt: "Chef au dressage dans la cuisine de Bleu Marée"
    },
    "service-chef-portrait": {
      title: "Portrait du chef",
      caption: "Une présence chaleureuse, nette, cohérente avec l'univers de la maison.",
      alt: "Portrait du chef de Bleu Marée"
    },
    "service-team-portrait": {
      title: "Portrait d'équipe",
      caption: "La maison se raconte aussi dans le collectif.",
      alt: "Portrait d'équipe Bleu Marée"
    },
    "plate-lunch-main": {
      title: "Assiette de déjeuner",
      caption: "Une lecture plus directe, mais déjà très tenue dans le détail.",
      alt: "Plat du déjeuner signé Bleu Marée"
    },
    "plate-crudo-signature": {
      title: "Crudo signature",
      caption: "Fraîcheur, coupe nette, tension marine.",
      alt: "Crudo signature dressé sur une assiette sombre"
    },
    "plate-lunch-starter": {
      title: "Entrée de déjeuner",
      caption: "Une ouverture plus légère, précise et lumineuse.",
      alt: "Entrée légère du déjeuner chez Bleu Marée"
    },
    "plate-tasting-amuse": {
      title: "Ouverture de dégustation",
      caption: "Un premier geste court, vif, précis.",
      alt: "Amuse-bouche du menu dégustation"
    },
    "plate-tasting-cold": {
      title: "Temps froid du parcours",
      caption: "L'iode et la fraîcheur s'installent avant la profondeur.",
      alt: "Assiette froide du menu dégustation"
    },
    "plate-tasting-hot": {
      title: "Temps chaud du parcours",
      caption: "Un plat plus enveloppant, guidé par la sauce et la chauffe.",
      alt: "Plat chaud du menu dégustation"
    },
    "plate-scallops-signature": {
      title: "Saint-Jacques signature",
      caption: "Le produit reste central, avec juste ce qu'il faut d'éclat autour.",
      alt: "Saint-Jacques signature de Bleu Marée"
    },
    "plate-fish-of-day": {
      title: "Poisson du jour",
      caption: "Cuisson courte, lecture nette, sauce brillante.",
      alt: "Poisson du jour dressé avec précision"
    },
    "plate-roasted-scallops": {
      title: "Saint-Jacques rôties",
      caption: "Une chaleur plus franche, toujours tenue par la clarté du dressage.",
      alt: "Saint-Jacques rôties en assiette gastronomique"
    },
    "plate-aged-beef": {
      title: "Pièce de boeuf maturée",
      caption: "Une séquence plus terrienne, dense, nette, sans lourdeur.",
      alt: "Pièce de boeuf maturée servie sur assiette sombre"
    },
    "plate-farm-chicken": {
      title: "Volaille fermière",
      caption: "Jus court, brillance douce et cuisson parfaitement lisible.",
      alt: "Volaille fermière dressée avec jus réduit"
    },
    "plate-dessert-sculptural": {
      title: "Dessert sculptural",
      caption: "Une finale plus architecturée, très propre dans ses volumes.",
      alt: "Dessert signature sculptural"
    },
    "plate-dessert-signature": {
      title: "Dessert signature",
      caption: "Une douceur plus ronde, gardée dans une écriture nette.",
      alt: "Dessert signature de Bleu Marée"
    },
    "plate-dessert-signature-alt": {
      title: "Dessert signature, autre lecture",
      caption: "Une autre lumière pour garder la sensation de délicatesse.",
      alt: "Autre cadrage du dessert signature de Bleu Marée"
    },
    "plate-dessert-texture": {
      title: "Détail dessert",
      caption: "Textures, reliefs et lumière contrôlée.",
      alt: "Gros plan sur les textures d'un dessert"
    },
    "plate-seafood-closeup": {
      title: "Gros plan marin",
      caption: "Un cadrage plus serré pour faire sentir la matière.",
      alt: "Détail d'une assiette marine"
    },
    "plate-seafood-signature-alt": {
      title: "Assiette marine signature",
      caption: "Une lecture plus ample pour retrouver le produit dans toute sa tension.",
      alt: "Assiette marine signature de Bleu Marée"
    },
    "plate-marine-detail": {
      title: "Sauce et profondeur",
      caption: "Le détail raconte autant que l'assiette entière.",
      alt: "Détail de sauce et produit marin"
    },
    "detail-table-setting": {
      title: "Table dressée",
      caption: "Luxe calme, matière claire et lumière retenue.",
      alt: "Détail de table dressée chez Bleu Marée"
    },
    "detail-table-setting-alt-01": {
      title: "Mise en scène de table",
      caption: "Une présence discrète, jamais chargée.",
      alt: "Table dressée avec verrerie et lumière douce"
    },
    "detail-table-setting-alt-02": {
      title: "Lumière sur le linge",
      caption: "La sensation premium passe aussi par le textile, le verre et le reflet.",
      alt: "Détail de nappe, verre et couverts"
    },
    "detail-glassware": {
      title: "Verrerie & bougie",
      caption: "Un détail simple qui change immédiatement le ressenti.",
      alt: "Verrerie et bougie en lumière tamisée"
    },
    "detail-wine-cellar": {
      title: "Sélection de cave",
      caption: "La cave donne un accent plus profond à l'ensemble sans prendre le dessus.",
      alt: "Sélection de bouteilles en cave"
    },
    "detail-wine-pairing-01": {
      title: "Accord en situation",
      caption: "Le vin arrive comme prolongement naturel de l'assiette.",
      alt: "Verre de vin et assiette en situation"
    },
    "detail-wine-pairing-02": {
      title: "Accord signature",
      caption: "Une lumière plus chaude, une table plus dramatique, la même retenue.",
      alt: "Accord mets-vins dans une ambiance chaleureuse"
    }
  },
  en: {
    "room-golden-hour": {
      title: "Main dining room at golden hour",
      caption: "Evening light sets the rhythm of the house immediately.",
      alt: "Bleu Maree dining room bathed in golden light"
    },
    "room-sunset": {
      title: "Tables facing the sunset",
      caption: "A quieter, almost suspended moment before dinner service.",
      alt: "Tables set in front of the windows at sunset"
    },
    "room-atlantic": {
      title: "Architectural reading of the room",
      caption: "Clear lines, visible horizon, and a perfectly held sense of space.",
      alt: "Elegant dining room opening toward the Atlantic"
    },
    "service-dining-room": {
      title: "Dining room service",
      caption: "The gesture stays precise, attentive, and nearly silent.",
      alt: "Dining room service in a fine dining atmosphere"
    },
    "service-team-action": {
      title: "Team mise en place",
      caption: "Service is also written through choreography and preparation.",
      alt: "Team preparing service at Bleu Maree"
    },
    "service-plating-action": {
      title: "Plating at the pass",
      caption: "A concentrated moment that already tells the story of the cuisine.",
      alt: "Plating in the Bleu Maree kitchen"
    },
    "service-chef-closeup": {
      title: "Chef gesture",
      caption: "A tighter frame to make the precision of the final movement felt.",
      alt: "Close-up of the chef plating at Bleu Maree"
    },
    "service-chef-action-alt": {
      title: "Kitchen in motion",
      caption: "A livelier energy, still held inside a clean visual language.",
      alt: "Chef plating in the Bleu Maree kitchen"
    },
    "service-chef-portrait": {
      title: "Chef portrait",
      caption: "A warm, precise presence consistent with the house universe.",
      alt: "Portrait of the Bleu Maree chef"
    },
    "service-team-portrait": {
      title: "Team portrait",
      caption: "The house is also told through the collective.",
      alt: "Bleu Maree team portrait"
    },
    "plate-lunch-main": {
      title: "Lunch plate",
      caption: "A more direct reading, already highly controlled in its detail.",
      alt: "Bleu Maree lunch plate"
    },
    "plate-crudo-signature": {
      title: "Signature crudo",
      caption: "Freshness, clean cuts, and marine tension.",
      alt: "Signature crudo served on a dark plate"
    },
    "plate-lunch-starter": {
      title: "Lunch starter",
      caption: "A lighter opening, precise and luminous.",
      alt: "Light lunch starter at Bleu Maree"
    },
    "plate-tasting-amuse": {
      title: "Tasting opening",
      caption: "A short, vivid, precise first gesture.",
      alt: "Amuse-bouche from the tasting menu"
    },
    "plate-tasting-cold": {
      title: "Cold tasting course",
      caption: "Iodine and freshness settle in before the deeper notes.",
      alt: "Cold plate from the tasting menu"
    },
    "plate-tasting-hot": {
      title: "Hot tasting course",
      caption: "A more enveloping plate guided by sauce and heat.",
      alt: "Hot plate from the tasting menu"
    },
    "plate-scallops-signature": {
      title: "Signature scallops",
      caption: "The product remains central, with only the right amount of radiance around it.",
      alt: "Signature scallops from Bleu Maree"
    },
    "plate-fish-of-day": {
      title: "Fish of the day",
      caption: "Short cooking, clear reading, and glossy sauce.",
      alt: "Fish of the day plated with precision"
    },
    "plate-roasted-scallops": {
      title: "Roasted scallops",
      caption: "A firmer warmth still held by clarity of plating.",
      alt: "Roasted scallops on a refined plate"
    },
    "plate-aged-beef": {
      title: "Aged beef cut",
      caption: "A more terrestrial sequence, dense and clean without heaviness.",
      alt: "Aged beef served on a dark plate"
    },
    "plate-farm-chicken": {
      title: "Farm chicken",
      caption: "Short jus, gentle shine, and a clearly readable cooking point.",
      alt: "Farm chicken plated with reduced jus"
    },
    "plate-dessert-sculptural": {
      title: "Sculptural dessert",
      caption: "A more architectural finale, very clean in its volumes.",
      alt: "Sculptural signature dessert"
    },
    "plate-dessert-signature": {
      title: "Signature dessert",
      caption: "A rounder sweetness still held in a clean visual writing.",
      alt: "Bleu Maree signature dessert"
    },
    "plate-dessert-signature-alt": {
      title: "Signature dessert, alternate frame",
      caption: "A different light to preserve the same sense of delicacy.",
      alt: "Alternate framing of the Bleu Maree signature dessert"
    },
    "plate-dessert-texture": {
      title: "Dessert detail",
      caption: "Textures, relief, and controlled light.",
      alt: "Close-up on dessert textures"
    },
    "plate-seafood-closeup": {
      title: "Marine close-up",
      caption: "A tighter frame to make the materiality felt.",
      alt: "Detail of a marine plate"
    },
    "plate-seafood-signature-alt": {
      title: "Signature seafood plate",
      caption: "A wider reading to bring the product back in full tension.",
      alt: "Signature seafood plate at Bleu Maree"
    },
    "plate-marine-detail": {
      title: "Sauce and depth",
      caption: "The detail tells as much as the full plate.",
      alt: "Detail of sauce and seafood"
    },
    "detail-table-setting": {
      title: "Table setting",
      caption: "Calm luxury, pale materiality, and restrained light.",
      alt: "Table setting detail at Bleu Maree"
    },
    "detail-table-setting-alt-01": {
      title: "Table staging",
      caption: "A discreet presence, never overloaded.",
      alt: "Table setting with glassware and soft light"
    },
    "detail-table-setting-alt-02": {
      title: "Light on linen",
      caption: "The premium feeling also comes through textile, glass, and reflection.",
      alt: "Detail of linen, glass, and cutlery"
    },
    "detail-glassware": {
      title: "Glassware & candle",
      caption: "A simple detail that changes the feeling immediately.",
      alt: "Glassware and candle in low light"
    },
    "detail-wine-cellar": {
      title: "Cellar selection",
      caption: "The cellar adds a deeper accent without ever taking over the room.",
      alt: "Selection of bottles in the cellar"
    },
    "detail-wine-pairing-01": {
      title: "Pairing in context",
      caption: "Wine arrives as a natural extension of the plate.",
      alt: "Wine glass and plate in context"
    },
    "detail-wine-pairing-02": {
      title: "Signature pairing",
      caption: "Warmer light, a more dramatic table, the same restraint.",
      alt: "Food and wine pairing in a warm atmosphere"
    }
  }
};

function buildGalleryItems(locale: Locale): GalleryItem[] {
  return galleryBlueprint.map((item) => {
    const translation = galleryTranslations[locale][item.id];

    return {
      ...item,
      title: translation.title,
      caption: translation.caption,
      alt: translation.alt,
      fallbackImage: item.image
    };
  });
}

const galleryContentByLocale = {
  fr: {
    pageHero: {
      eyebrow: "Galerie",
      title: "Lumière, gestes, assiettes: la maison en images.",
      intro:
        "Salle, gestes, assiettes et détails racontent Bleu Marée dans ce qu'il a de plus sensible: la lumière, la matière et la tenue.",
      image: "/images/hero/bleu-maree-hero-dining-room-golden-hour-realistic.jpg",
      imagePosition: "50% 54%"
    },
    sectionIntro: {
      eyebrow: "Sélection",
      title: "Une traversée par la salle, le geste et la matière.",
      lead:
        "La galerie s'ouvre sur l'atmosphère, se rapproche du service, puis glisse vers les assiettes et les détails qui donnent son caractère à la maison."
    },
    openingFeature: {
      eyebrow: "Premier regard",
      title: "Une salle, un geste, une assiette: trois entrées dans le même monde.",
      lead:
        "D'abord la lumière de la salle, puis la concentration du service, enfin la précision de l'assiette. Le reste de la galerie prolonge ce mouvement."
    },
    sequences: {
      room: {
        eyebrow: "Salle",
        title: "L'espace donne immédiatement le ton.",
        lead:
          "Lumière, horizon et respiration installent d'emblée une sensation de calme et d'élégance."
      },
      service: {
        eyebrow: "Service",
        title: "Le geste reste visible, mais jamais démonstratif.",
        lead:
          "Le service se lit dans la précision, la concentration et l'attention portée au moindre détail."
      },
      plates: {
        eyebrow: "Assiettes",
        title: "La cuisine parle par couches successives.",
        lead:
          "Déjeuner, dégustation, plats de mer, viande ou desserts: chaque image cherche à faire sentir la matière, la cuisson et l'équilibre."
      },
      details: {
        eyebrow: "Détails",
        title: "Les détails prolongent l'expérience.",
        lead:
          "Verrerie, linge, cave, bougie et reflets donnent au lieu sa profondeur sans jamais le charger."
      }
    } satisfies GallerySequenceCopy,
    archive: {
      eyebrow: "Autres regards",
      title: "D'autres cadrages pour prolonger la sensation.",
      lead:
        "Des plans plus serrés, plus calmes ou plus atmosphériques viennent ici compléter l'ensemble sans rompre son équilibre."
    },
    projectFollowUp: {
      eyebrow: "Et ensuite",
      title: "Voir la maison, puis avoir envie d'y prendre place.",
      lead:
        "La galerie prolonge la découverte et laisse place à l'envie de réserver, de revenir ou de partager l'adresse.",
      reserve: "Réserver une expérience",
      contact: "Contacter la maison",
      notesTitle: "L'esprit Bleu Marée",
      notesCopy:
        "Une lumière retenue, des gestes précis, des assiettes lisibles et quelques détails de matière: tout ce qui fait la signature de Bleu Marée se retrouve ici."
    },
    galleryItems: buildGalleryItems("fr")
  },
  en: {
    pageHero: {
      eyebrow: "Gallery",
      title: "Light, gestures, and plates: the house in images.",
      intro:
        "Room, gestures, plates, and details tell the Bleu Maree story through light, materiality, and composure.",
      image: "/images/hero/bleu-maree-hero-dining-room-golden-hour-realistic.jpg",
      imagePosition: "50% 54%"
    },
    sectionIntro: {
      eyebrow: "Selection",
      title: "A progression through the room, the gesture, and the material.",
      lead:
        "The gallery opens on atmosphere, moves closer to service, then slips into the plates and details that give the house its character."
    },
    openingFeature: {
      eyebrow: "First glance",
      title: "A room, a gesture, a plate: three entries into the same world.",
      lead:
        "First comes the light of the room, then the concentration of service, and finally the precision of the plate. The rest of the gallery extends that movement."
    },
    sequences: {
      room: {
        eyebrow: "Room",
        title: "The space sets the tone immediately.",
        lead:
          "Light, horizon, and breathing room establish a sense of calm and elegance before the first plate arrives."
      },
      service: {
        eyebrow: "Service",
        title: "The gesture remains visible, never performative.",
        lead:
          "Service reveals itself through precision, concentration, and attention to the smallest detail."
      },
      plates: {
        eyebrow: "Plates",
        title: "The cuisine speaks in successive layers.",
        lead:
          "Lunch, tasting paths, seafood, meat, or desserts: each image should make the materiality, cooking, and balance felt."
      },
      details: {
        eyebrow: "Details",
        title: "Details extend the experience.",
        lead:
          "Glassware, linen, cellar, candles, and reflections give the place its depth without making it feel heavy."
      }
    } satisfies GallerySequenceCopy,
    archive: {
      eyebrow: "Further views",
      title: "Other frames to extend the feeling.",
      lead:
        "Tighter, calmer, or more atmospheric frames sit here as complementary views without breaking coherence."
    },
    projectFollowUp: {
      eyebrow: "After the image",
      title: "See the house, then want to take your place at the table.",
      lead:
        "The gallery deepens the atmosphere and leaves room for the desire to book, return, or share the address.",
      reserve: "Book an experience",
      contact: "Contact the house",
      notesTitle: "The Bleu Maree spirit",
      notesCopy:
        "Held light, precise gestures, readable plates, and material detail: everything that defines Bleu Maree can be felt here."
    },
    galleryItems: buildGalleryItems("en")
  }
};

export const galleryItems = galleryContentByLocale.fr.galleryItems;

export function getGalleryContent(locale: Locale) {
  return galleryContentByLocale[locale];
}
