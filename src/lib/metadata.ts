import type { Metadata } from "next";

import { getSiteConfig } from "@/content/site";
import type { Locale } from "@/i18n/config";
import { locales } from "@/i18n/config";
import { withLocale } from "@/i18n/routing";

type MetadataOptions = {
  title: string;
  description: string;
  locale?: Locale;
  path?: string;
};

export function createMetadata({
  title,
  description,
  locale = "fr",
  path = "/"
}: MetadataOptions): Metadata {
  const siteConfig = getSiteConfig(locale);
  const fullTitle = `${title} | ${siteConfig.name}`;
  const localizedPath = withLocale(locale, path);
  const canonical = new URL(localizedPath, siteConfig.url).toString();

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical,
      languages: Object.fromEntries(
        locales.map((supportedLocale) => [
          supportedLocale,
          new URL(withLocale(supportedLocale, path), siteConfig.url).toString()
        ])
      )
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: locale === "fr" ? "fr_FR" : "en_GB",
      type: "website",
      images: [
        {
          url: "/images/hero/bleu-maree-hero-dining-room-sunset.jpg",
          width: 1920,
          height: 1080,
          alt:
            locale === "fr"
              ? "Bleu Maree, table gastronomique a Biarritz"
              : "Bleu Maree fine dining table in Biarritz"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/images/hero/bleu-maree-hero-dining-room-sunset.jpg"]
    }
  };
}

export function createRestaurantSchema(locale: Locale = "fr") {
  const siteConfig = getSiteConfig(locale);

  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: siteConfig.name,
    description: siteConfig.description,
    servesCuisine:
      locale === "fr"
        ? ["Cuisine francaise contemporaine", "Produits de la mer"]
        : ["Contemporary French cuisine", "Seafood"],
    priceRange: "$$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.addressLineOne,
      addressLocality: siteConfig.location,
      postalCode: "64200",
      addressCountry: "FR"
    },
    telephone: siteConfig.phoneRaw,
    email: siteConfig.email,
    url: new URL(withLocale(locale, "/"), siteConfig.url).toString(),
    image: `${siteConfig.url}/images/hero/bleu-maree-hero-dining-room-sunset.jpg`
  };
}
