import type { Metadata } from "next";

import { HomeJourneyRail } from "@/components/home/home-journey-rail";
import { HomeFounderNote } from "@/components/home/home-founder-note";
import { HomeManifesto } from "@/components/home/home-manifesto";
import { HomeReveal } from "@/components/home/home-reveal";
import { HomeReservationCta } from "@/components/home/home-reservation-cta";
import { HomeSignatureSpread } from "@/components/home/home-signature-spread";
import { ImmersiveHomeHero } from "@/components/home/immersive-home-hero";
import { ImpressionMarquee } from "@/components/home/impression-marquee";
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
      "Découvrez Bleu Marée à Biarritz: une table gastronomique tournée vers la mer, la saison et une élégance contemporaine.",
    impressionsEyebrow: "Ce qui reste",
    impressionsTitle: "On emporte rarement un effet. On emporte une sensation tenue.",
    impressionsLead:
      "Lumière. Rythme. Précision. Une maison réellement habitée."
  },
  en: {
    metaTitle: "Home",
    metaDescription:
      "Discover Bleu Maree in Biarritz: a fine dining table shaped by seafood, seasonality, and contemporary elegance.",
    impressionsEyebrow: "What remains",
    impressionsTitle: "People rarely leave with an effect. They leave with a feeling carried well.",
    impressionsLead:
      "Light. Rhythm. Precision. A house with a real inner life."
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
        content={homeData.heroContent}
        locale={locale}
      />

      <HomeFounderNote locale={locale} />

      <HomeManifesto highlights={homeData.philosophyHighlights} locale={locale} />

      <HomeSignatureSpread dishes={homeData.signatureDishes} locale={locale} />

      <HomeJourneyRail steps={homeData.guestJourney} locale={locale} />

      <section className="section section-surface--light section--light">
        <div className="container stack" style={{ gap: "2rem" }}>
          <HomeReveal>
            <div className="eyebrow">{copy.impressionsEyebrow}</div>
            <h2 className="section-title">{copy.impressionsTitle}</h2>
            <p className="lead">{copy.impressionsLead}</p>
          </HomeReveal>

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
