import { HomeJourneyRail } from "@/components/home/home-journey-rail";
import { HomeManifesto } from "@/components/home/home-manifesto";
import { HomeReservationCta } from "@/components/home/home-reservation-cta";
import { HomeSignatureSpread } from "@/components/home/home-signature-spread";
import { ImmersiveHomeHero } from "@/components/home/immersive-home-hero";
import { ImpressionMarquee } from "@/components/home/impression-marquee";
import { Reveal } from "@/components/ui/reveal";
import { createMetadata, createRestaurantSchema } from "@/lib/metadata";
import { getHomePageData, getSiteSettingsData } from "@/sanity/loaders";

export const metadata = createMetadata({
  title: "Accueil",
  description:
    "Découvrez Bleu Marée à Biarritz: une expérience gastronomique premium autour des produits de la mer, d'une salle immersive et d'une réservation pensée avec élégance."
});

export default async function HomePage() {
  const [homeData, siteConfig] = await Promise.all([getHomePageData(), getSiteSettingsData()]);
  const restaurantSchema = createRestaurantSchema();

  return (
    <>
      <ImmersiveHomeHero
        brandName={siteConfig.name}
        location={siteConfig.location}
        content={homeData.heroContent}
      />

      <HomeManifesto highlights={homeData.philosophyHighlights} />

      <HomeSignatureSpread dishes={homeData.signatureDishes} />

      <HomeJourneyRail steps={homeData.guestJourney} />

      <section className="section section-surface--light section--light">
        <div className="container stack" style={{ gap: "2rem" }}>
          <Reveal>
            <div className="eyebrow">Impressions</div>
            <h2 className="section-title">Une atmosphère qui reste après le dîner.</h2>
            <p className="lead">
              Lumière feutrée, dressage précis, service à tempo juste et horizon atlantique: Bleu
              Marée s’imprime comme une adresse que l’on retient autant qu’on la raconte.
            </p>
          </Reveal>

          <ImpressionMarquee impressions={homeData.curatedImpressions} />
        </div>
      </section>

      <HomeReservationCta siteConfig={siteConfig} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
      />
    </>
  );
}
