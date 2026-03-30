import type { Metadata } from "next";

import { EditorialSplit } from "@/components/blocks/editorial-split";
import { ImageTriptych } from "@/components/blocks/image-triptych";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";
import { PageHero } from "@/components/ui/page-hero";
import { getRestaurantContent } from "@/content/restaurant";
import { resolveLocale } from "@/i18n/server";
import { createMetadata } from "@/lib/metadata";
import { withLocale } from "@/i18n/routing";

type RestaurantPageProps = {
  params: Promise<{ locale: string }>;
};

const restaurantMetaCopy = {
  fr: {
    title: "Le restaurant",
    description:
      "Decouvrez l'histoire, la philosophie culinaire et l'ambiance elegante de Bleu Maree, restaurant gastronomique premium a Biarritz."
  },
  en: {
    title: "The restaurant",
    description:
      "Discover the story, culinary philosophy, and elegant atmosphere of Bleu Maree, a premium fine dining restaurant in Biarritz."
  }
} as const;

export async function generateMetadata({ params }: RestaurantPageProps): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const copy = restaurantMetaCopy[locale];

  return createMetadata({
    locale,
    path: "/restaurant",
    title: copy.title,
    description: copy.description
  });
}

export default async function LocalizedRestaurantPage({ params }: RestaurantPageProps) {
  const locale = await resolveLocale(params);
  const content = getRestaurantContent(locale);

  return (
    <>
      <PageHero
        eyebrow={content.pageHero.eyebrow}
        title={content.pageHero.title}
        intro={content.pageHero.intro}
        image={content.pageHero.image}
        imagePosition={content.pageHero.imagePosition}
      />

      <section className="section">
        <div className="container">
          <EditorialSplit
            eyebrow={content.storyContent.eyebrow}
            title={content.storyContent.title}
            intro={content.storyContent.intro}
            paragraphs={content.storyContent.paragraphs}
            image={content.storyContent.image}
            imageAlt={content.storyContent.imageAlt}
            imagePosition={content.storyContent.imagePosition}
            actions={[{ href: withLocale(locale, "/reservation"), label: content.actions.reserve }]}
          />

          <div className="page-spacer" />

          <Reveal>
            <ImageTriptych items={content.visualMoments} />
          </Reveal>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container stack">
          <Reveal>
            <SectionIntro
              eyebrow={content.foundations.eyebrow}
              title={content.foundations.title}
              lead={content.foundations.lead}
            />
          </Reveal>

          <div className="feature-grid">
            {content.sourcingPillars.map((item) => (
              <Reveal key={item.title} className="feature-item">
                <h3 className="feature-title">{item.title}</h3>
                <p className="feature-copy">{item.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container stack">
          <EditorialSplit
            title={content.teamMoments.title}
            intro={content.teamMoments.copy}
            image={content.teamMoments.image}
            imageAlt={content.teamMoments.imageAlt}
            imagePosition={content.teamMoments.imagePosition}
            details={content.atmosphereDetails}
          />

          <div className="page-spacer" />

          <EditorialSplit
            title={content.craftsmanshipMoments.title}
            intro={content.craftsmanshipMoments.copy}
            image={content.craftsmanshipMoments.image}
            imageAlt={content.craftsmanshipMoments.imageAlt}
            imagePosition={content.craftsmanshipMoments.imagePosition}
            reverse
            actions={[
              {
                href: withLocale(locale, "/experiences"),
                label: content.actions.experiences,
                variant: "secondary"
              },
              {
                href: withLocale(locale, "/contact"),
                label: content.actions.contact,
                variant: "ghost"
              }
            ]}
          />
        </div>
      </section>
    </>
  );
}
