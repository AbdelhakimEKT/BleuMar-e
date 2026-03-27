import type { Metadata } from "next";

import { HomeJourneyRail } from "@/components/home/home-journey-rail";
import { HomeManifesto } from "@/components/home/home-manifesto";
import { HomeReservationCta } from "@/components/home/home-reservation-cta";
import { HomeSignatureSpread } from "@/components/home/home-signature-spread";
import { ImmersiveHomeHero } from "@/components/home/immersive-home-hero";
import { ImpressionMarquee } from "@/components/home/impression-marquee";
import { Reveal } from "@/components/ui/reveal";
import { createMetadata, createRestaurantSchema } from "@/lib/metadata";
import { resolveLocale } from "@/i18n/server";
import { getHomePageData, getSiteSettingsData } from "@/sanity/loaders";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

const homePageCopy = {
  fr: {
    metaTitle: "Accueil",
    metaDescription:
      "Découvrez Bleu Marée à Biarritz: une expérience gastronomique premium autour des produits de la mer, d'une salle immersive et d'une réservation pensée avec élégance.",
    impressionsEyebrow: "Impressions",
    impressionsTitle: "Une atmosphère qui reste après le dîner.",
    impressionsLead:
      "Lumière feutrée, dressage précis, service à tempo juste et horizon atlantique: Bleu Marée s'imprime comme une adresse que l'on retient autant qu'on la raconte."
  },
  en: {
    metaTitle: "Home",
    metaDescription:
      "Discover Bleu Maree in Biarritz: a premium fine dining experience centered on seafood, an immersive dining room, and an elegant booking journey.",
    impressionsEyebrow: "Impressions",
    impressionsTitle: "An atmosphere that lingers after dinner.",
    impressionsLead:
      "Soft light, precise plating, service at the right tempo, and an Atlantic horizon: Bleu Maree stays with you like an address remembered as much as it is told."
  }
} as const;

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const copy = homePageCopy[locale];

  return createMetadata({
    locale,
    path: "/",
    title: copy.metaTitle,
    description: copy.metaDescription
  });
}

export default async function LocalizedHomePage({ params }: HomePageProps) {
  const locale = await resolveLocale(params);
  const copy = homePageCopy[locale];
  const [homeData, siteConfig] = await Promise.all([
    getHomePageData(locale),
    getSiteSettingsData(locale)
  ]);
  const restaurantSchema = createRestaurantSchema(locale);

  return (
    <>
      <ImmersiveHomeHero
        brandName={siteConfig.name}
        location={siteConfig.location}
        content={homeData.heroContent}
        locale={locale}
      />

      <HomeManifesto highlights={homeData.philosophyHighlights} locale={locale} />

      <HomeSignatureSpread dishes={homeData.signatureDishes} locale={locale} />

      <HomeJourneyRail steps={homeData.guestJourney} locale={locale} />

      <section className="section section-surface--light section--light">
        <div className="container stack" style={{ gap: "2rem" }}>
          <Reveal>
            <div className="eyebrow">{copy.impressionsEyebrow}</div>
            <h2 className="section-title">{copy.impressionsTitle}</h2>
            <p className="lead">{copy.impressionsLead}</p>
          </Reveal>

          <ImpressionMarquee impressions={homeData.curatedImpressions} locale={locale} />
        </div>
      </section>

      <HomeReservationCta siteConfig={siteConfig} locale={locale} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
      />
    </>
  );
}
