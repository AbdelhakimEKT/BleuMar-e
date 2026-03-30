import type { Locale } from "@/i18n/config";

export type ChapterTone = "classic" | "tasting" | "sea" | "cellar" | "event";

export type ChapterImage = {
  src: string;
  position?: string;
};

export type ChapterVisualConfig = {
  images: ChapterImage[];
  fallbackImage?: ChapterImage;
  autoplay?: boolean;
};

export function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getChapterTone(title: string): ChapterTone {
  const lower = slugify(title);

  if (lower.includes("degustation") || lower.includes("tasting")) {
    return "tasting";
  }

  if (
    lower.includes("poisson") ||
    lower.includes("seafood") ||
    lower.includes("maree") ||
    lower.includes("mer") ||
    lower.includes("fish")
  ) {
    return "sea";
  }

  if (
    lower.includes("vin") ||
    lower.includes("wine") ||
    lower.includes("accord") ||
    lower.includes("pairing") ||
    lower.includes("cave") ||
    lower.includes("cellar")
  ) {
    return "cellar";
  }

  if (lower.includes("evenement") || lower.includes("event")) {
    return "event";
  }

  return "classic";
}

export function getChapterVisualConfig(title: string, tone: ChapterTone): ChapterVisualConfig {
  const slug = slugify(title);

  if (slug.includes("menu-dejeuner") || slug.includes("lunch-menu")) {
    return {
      images: [
        {
          src: "/images/lunch/bleu-maree-lunch-main-course.jpg",
          position: "50% 48%"
        }
      ],
      fallbackImage: {
        src: "/images/lunch/bleu-maree-lunch-starter-light.jpg",
        position: "50% 54%"
      }
    };
  }

  if (slug.includes("menu-degustation-5-temps") || slug.includes("five-course-tasting-menu")) {
    return {
      images: [
        {
          src: "/images/tasting/bleu-maree-tasting-amuse-bouche.jpg",
          position: "50% 46%"
        },
        {
          src: "/images/tasting/bleu-maree-tasting-cold-course.jpg",
          position: "50% 48%"
        },
        {
          src: "/images/tasting/bleu-maree-tasting-hot-course.jpg",
          position: "50% 50%"
        }
      ],
      autoplay: true
    };
  }

  if (slug.includes("menu-degustation-7-temps") || slug.includes("seven-course-tasting-menu")) {
    return {
      images: [
        {
          src: "/images/tasting/bleu-maree-tasting-cold-course.jpg",
          position: "50% 52%"
        },
        {
          src: "/images/tasting/bleu-maree-tasting-hot-course.jpg",
          position: "50% 54%"
        },
        {
          src: "/images/meats/bleu-maree-meat-farm-chicken-braised-vegetables.jpg",
          position: "50% 54%"
        }
      ],
      fallbackImage: {
        src: "/images/experience/bleu-maree-chef-plating-action-alt.jpg",
        position: "50% 54%"
      },
      autoplay: true
    };
  }

  if (slug.includes("entrees") || slug.includes("starters")) {
    return {
      images: [
        {
          src: "/images/menu/bleu-maree-menu-crudo-signature.png",
          position: "50% 54%"
        }
      ],
      fallbackImage: {
        src: "/images/menu/bleu-maree-menu-scallops-signature.png",
        position: "50% 54%"
      }
    };
  }

  if (
    slug.includes("poissons-produits-de-la-mer") ||
    slug.includes("fish-seafood") ||
    tone === "sea"
  ) {
    return {
      images: [
        {
          src: "/images/menu/bleu-maree-menu-fish-of-the-day.jpg",
          position: "50% 50%"
        },
        {
          src: "/images/menu/bleu-maree-menu-roasted-scallops-premium.jpg",
          position: "50% 54%"
        },
        {
          src: "/images/menu/bleu-maree-menu-seafood-signature-alt.jpg",
          position: "50% 56%"
        }
      ],
      fallbackImage: {
        src: "/images/menu/bleu-maree-menu-marine-closeup-sauce.jpg",
        position: "50% 52%"
      },
      autoplay: true
    };
  }

  if (slug.includes("viandes") || slug.includes("meats")) {
    return {
      images: [
        {
          src: "/images/meats/bleu-maree-meat-aged-beef-generous-cut.jpg",
          position: "50% 56%"
        },
        {
          src: "/images/meats/bleu-maree-meat-farm-chicken-braised-vegetables.jpg",
          position: "50% 54%"
        }
      ],
      fallbackImage: {
        src: "/images/experience/bleu-maree-chef-plating-closeup.jpg",
        position: "50% 54%"
      }
    };
  }

  if (slug.includes("desserts")) {
    return {
      images: [
        {
          src: "/images/desserts/bleu-maree-dessert-signature-sculptural.jpg",
          position: "50% 52%"
        }
      ],
      fallbackImage: {
        src: "/images/desserts/bleu-maree-dessert-texture-closeup.jpg",
        position: "50% 52%"
      }
    };
  }

  if (slug.includes("carte-des-vins") || slug.includes("wine-list")) {
    return {
      images: [
        {
          src: "/images/wines/bleu-maree-wine-cellar-selection.jpg",
          position: "50% 44%"
        }
      ],
      fallbackImage: {
        src: "/images/wines/bleu-maree-wine-pairing-scene-01.jpg",
        position: "50% 52%"
      }
    };
  }

  if (slug.includes("accords-mets-vins") || slug.includes("food-wine-pairings")) {
    return {
      images: [
        {
          src: "/images/wines/bleu-maree-wine-pairing-scene-02.jpg",
          position: "50% 56%"
        }
      ],
      fallbackImage: {
        src: "/images/details/bleu-maree-detail-glassware-candlelight.jpg",
        position: "50% 52%"
      }
    };
  }

  if (slug.includes("menu-special-evenement") || slug.includes("special-event-menu")) {
    return {
      images: [
        {
          src: "/images/details/bleu-maree-detail-table-setting-alt-02.jpg",
          position: "50% 54%"
        }
      ],
      fallbackImage: {
        src: "/images/wines/bleu-maree-wine-pairing-scene-01.jpg",
        position: "50% 52%"
      }
    };
  }

  return {
    images: [
      {
        src:
          tone === "cellar"
            ? "/images/details/bleu-maree-detail-glassware-candlelight.jpg"
            : "/images/details/bleu-maree-detail-table-setting-alt-01.jpg",
        position: "50% 52%"
      }
    ],
    fallbackImage: {
      src: "/images/details/bleu-maree-detail-table-setting.jpg",
      position: "50% 52%"
    }
  };
}

export function getMenuPdfHref(locale: Locale) {
  return `/api/menu-pdf?locale=${locale}`;
}
