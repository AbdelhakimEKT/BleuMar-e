import type { Metadata } from "next";
import Link from "next/link";

import { EditorialSplit } from "@/components/blocks/editorial-split";
import { ReservationRequestForm } from "@/components/forms/reservation-request-form";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";
import { PageHero } from "@/components/ui/page-hero";
import { getReservationContent } from "@/content/reservation";
import { resolveLocale } from "@/i18n/server";
import { withLocale } from "@/i18n/routing";
import { createMetadata } from "@/lib/metadata";
import { isSanityWriteConfigured } from "@/sanity/env";
import { getSiteSettingsData } from "@/sanity/loaders";

type ReservationPageProps = {
  params: Promise<{ locale: string }>;
};

const reservationMetaCopy = {
  fr: {
    title: "Reservation",
    description:
      "Réservez une table chez Bleu Marée à Biarritz et indiquez en quelques instants vos préférences, votre occasion ou vos remarques."
  },
  en: {
    title: "Booking",
    description:
      "Book a table at Bleu Maree in Biarritz and share your preferences, occasion, or notes in just a few moments."
  }
} as const;

export async function generateMetadata({ params }: ReservationPageProps): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const copy = reservationMetaCopy[locale];

  return createMetadata({
    locale,
    path: "/reservation",
    title: copy.title,
    description: copy.description
  });
}

export default async function LocalizedReservationPage({ params }: ReservationPageProps) {
  const locale = await resolveLocale(params);
  const content = getReservationContent(locale);
  const siteConfig = await getSiteSettingsData(locale);

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
        <div className="container grid-two">
          <Reveal>
            <ReservationRequestForm locale={locale} storageReady={isSanityWriteConfigured} />
          </Reveal>

          <Reveal className="stack">
            <SectionIntro
              eyebrow={content.infoIntro.eyebrow}
              title={content.infoIntro.title}
              lead={content.infoIntro.lead}
            />

            <div className="surface-card">
              <ul className="detail-list">
                {siteConfig.openingHours.map((item) => (
                  <li key={item.day}>
                    <span className="detail-title">{item.day}</span>
                    <span className="detail-copy">{item.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="surface-card">
              <ul className="timeline-list">
                {content.reservationJourney.map((item, index) => (
                  <li key={item.title}>
                    <span className="timeline-index">0{index + 1}</span>
                    <div className="stack">
                      <strong>{item.title}</strong>
                      <p className="microcopy">{item.copy}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="cta-row">
              <Link href={withLocale(locale, "/contact")} className="button-ghost">
                {content.groupCta}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-surface--light section--light">
        <div className="container stack">
          <Reveal>
            <SectionIntro
              eyebrow={content.organizationIntro.eyebrow}
              title={content.organizationIntro.title}
              lead={content.organizationIntro.lead}
            />
          </Reveal>

          <div className="grid-three">
            {content.reservationPractices.map((item) => (
              <Reveal key={item.label}>
                <article className="surface-card surface-card--light">
                  <p className="kicker">{item.label}</p>
                  <p className="microcopy">{item.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="surface-card surface-card--light">
              <p className="kicker">{content.implementationLabel}</p>
              <ul className="detail-list">
                {content.zenchefSetupSteps.map((step, index) => (
                  <li key={step}>
                    <span className="detail-title">0{index + 1}</span>
                    <span className="detail-copy">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container">
          <EditorialSplit
            eyebrow={content.hospitalityStory.eyebrow}
            title={content.hospitalityStory.title}
            intro={content.hospitalityStory.intro}
            details={content.hospitalityStory.details}
            image={content.hospitalityStory.image}
            imageAlt={content.hospitalityStory.imageAlt}
            imagePosition={content.hospitalityStory.imagePosition}
            reverse
            actions={[
              {
                href: withLocale(locale, "/contact"),
                label: content.groupCta,
                variant: "primary"
              }
            ]}
          />
        </div>
      </section>
    </>
  );
}
