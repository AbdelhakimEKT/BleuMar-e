import type { Metadata } from "next";

import { siteConfig } from "@/content/site";

type MetadataOptions = {
  title: string;
  description: string;
  path?: string;
};

export function createMetadata({ title, description, path = "/" }: MetadataOptions): Metadata {
  const fullTitle = `${title} | ${siteConfig.name}`;
  const url = new URL(path, siteConfig.url).toString();

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: "/images/hero/bleu-maree-hero-dining-room-sunset.png",
          width: 1920,
          height: 1080,
          alt: "Bleu Marée, table gastronomique à Biarritz"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/images/hero/bleu-maree-hero-dining-room-sunset.png"]
    }
  };
}

export function createRestaurantSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: siteConfig.name,
    description: siteConfig.description,
    servesCuisine: ["Cuisine française contemporaine", "Produits de la mer"],
    priceRange: "€€€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.addressLineOne,
      addressLocality: siteConfig.location,
      postalCode: "64200",
      addressCountry: "FR"
    },
    telephone: siteConfig.phoneRaw,
    email: siteConfig.email,
    url: siteConfig.url,
    image: `${siteConfig.url}/images/hero/bleu-maree-hero-dining-room-sunset.png`
  };
}
