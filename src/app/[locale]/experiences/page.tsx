import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import { EditorialSplit } from "@/components/blocks/editorial-split";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";
import { PageHero } from "@/components/ui/page-hero";
import { getExperiencesContent } from "@/content/experiences";
import { resolveLocale } from "@/i18n/server";
import { withLocale } from "@/i18n/routing";
import { createMetadata } from "@/lib/metadata";
import { getExperiencesPageData } from "@/sanity/loaders";

type ExperiencesPageProps = {
  params: Promise<{ locale: string }>;
};

const experiencesMetaCopy = {
  fr: {
    title: "Experiences",
    description:
      "Découvrez les soirées spéciales, menus de saison, accords et privatisations imaginés par Bleu Marée."
  },
  en: {
    title: "Experiences",
    description:
      "Highlight the special evenings, seasonal menus, collaborations, and private events of Bleu Maree."
  }
} as const;

export async function generateMetadata({ params }: ExperiencesPageProps): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const copy = experiencesMetaCopy[locale];

  return createMetadata({
    locale,
    path: "/experiences",
    title: copy.title,
    description: copy.description
  });
}

export default async function LocalizedExperiencesPage({ params }: ExperiencesPageProps) {
  const locale = await resolveLocale(params);
  const content = getExperiencesContent(locale);
  const experiencesPageData = await getExperiencesPageData(locale);

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
        <div className="container stack">
          <Reveal>
            <SectionIntro
              eyebrow={content.upcomingIntro.eyebrow}
              title={content.upcomingIntro.title}
              lead={content.upcomingIntro.lead}
            />
          </Reveal>

          <div className="event-grid">
            {experiencesPageData.upcomingExperiences.map((event) => (
              <Reveal key={event.title}>
                <article className="surface-card event-card">
                  <div className="event-card-media image-frame">
                    <Image
                      src={event.image}
                      alt={event.imageAlt}
                      fill
                      className="image-cover"
                      sizes="(max-width: 900px) 100vw, 33vw"
                      style={event.imagePosition ? { objectPosition: event.imagePosition } : undefined}
                    />
                  </div>

                  <div className="stack event-card-body">
                    <div className="event-meta">
                      <span>{event.date}</span>
                      <span>{event.time}</span>
                    </div>
                    <h2 className="section-title" style={{ fontSize: "2rem" }}>
                      {event.title}
                    </h2>
                    <p className="microcopy">{event.description}</p>
                    <Link href={withLocale(locale, event.ctaHref)} className="button-ghost">
                      {event.ctaLabel}
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container">
          <EditorialSplit
            eyebrow={content.privateDining.eyebrow}
            title={content.privateDining.title}
            intro={content.privateDining.intro}
            details={experiencesPageData.privateDiningPoints.map((item) => ({
              label: content.privateDining.eyebrow,
              copy: item
            }))}
            image={content.privateDining.image}
            imageAlt={content.privateDining.imageAlt}
            imagePosition={content.privateDining.imagePosition}
            actions={[
              {
                href: withLocale(locale, "/contact"),
                label: content.privateDining.actions.privatisation
              },
              {
                href: withLocale(locale, "/reservation"),
                label: content.privateDining.actions.reserve,
                variant: "secondary"
              }
            ]}
          />
        </div>
      </section>

      <section className="section">
        <div className="container stack">
          <Reveal>
            <SectionIntro
              eyebrow={content.seasonality.eyebrow}
              title={content.seasonality.title}
              lead={content.seasonality.lead}
            />
          </Reveal>

          <div className="feature-grid">
            {experiencesPageData.seasonalMoments.map((item) => (
              <Reveal key={item.title} className="feature-item">
                <h3 className="feature-title">{item.title}</h3>
                <p className="feature-copy">{item.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
