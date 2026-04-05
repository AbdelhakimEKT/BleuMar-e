import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { HomeReveal } from "@/components/home/home-reveal";
import { ReservationRequestForm } from "@/components/forms/reservation-request-form";
import { PageHero } from "@/components/ui/page-hero";
import { getReservationContent } from "@/content/reservation";
import { resolveLocale } from "@/i18n/server";
import { withLocale } from "@/i18n/routing";
import { createMetadata } from "@/lib/metadata";
import { isSanityWriteConfigured } from "@/sanity/env";
import { getSiteSettingsData } from "@/sanity/loaders";

import styles from "./reservation-page.module.css";

type ReservationPageProps = {
  params: Promise<{ locale: string }>;
};

const reservationMetaCopy = {
  fr: {
    title: "Réservation",
    description:
      "Réservez une table chez Bleu Marée à Biarritz dans un parcours clair, calme et précis, pensé comme le premier geste d'accueil."
  },
  en: {
    title: "Booking",
    description:
      "Book a table at Bleu Maree in Biarritz through a clear, calm, and precise path designed as the first gesture of welcome."
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
  const phoneHref = `tel:${siteConfig.phoneRaw}`;
  const emailHref = `mailto:${siteConfig.email}`;

  return (
    <>
      <PageHero
        eyebrow={content.pageHero.eyebrow}
        title={content.pageHero.title}
        intro={content.pageHero.intro}
        image={content.pageHero.image}
        imagePosition={content.pageHero.imagePosition}
        markers={content.pageHero.markers}
        noteLabel={content.pageHero.noteLabel}
        note={content.pageHero.note}
      />

      <section id="reserver" className={`section ${styles.bookingSection}`}>
        <div className={`container ${styles.bookingGrid}`}>
          <HomeReveal>
            <ReservationRequestForm locale={locale} storageReady={isSanityWriteConfigured} />
          </HomeReveal>

          <div className={styles.bookingSide}>
            <HomeReveal className={styles.infoIntro} delay={0.08}>
              <div className="eyebrow">{content.infoIntro.eyebrow}</div>
              <h2 className={styles.statement}>{content.infoIntro.title}</h2>
              <p className={styles.lead}>{content.infoIntro.lead}</p>

              <div className={styles.directLine}>
                <a href={phoneHref} className={styles.inlineLink}>
                  {siteConfig.phoneDisplay}
                </a>
                <a href={emailHref} className={styles.inlineLink}>
                  {siteConfig.email}
                </a>
              </div>
            </HomeReveal>

            <HomeReveal className={styles.hoursPanel} variant="panel" delay={0.12}>
              <p className={styles.panelLabel}>{locale === "fr" ? "Horaires" : "Opening hours"}</p>
              <ul className={styles.hoursList}>
                {siteConfig.openingHours.map((item) => (
                  <li key={item.day}>
                    <span>{item.day}</span>
                    <strong>{item.hours}</strong>
                  </li>
                ))}
              </ul>
            </HomeReveal>

            <HomeReveal className={styles.journeyPanel} variant="panel" delay={0.16}>
              <p className={styles.panelLabel}>
                {locale === "fr" ? "En trois gestes" : "In three gestures"}
              </p>
              <ul className={styles.journeyList}>
                {content.reservationJourney.map((item, index) => (
                  <li key={item.title}>
                    <span className={styles.journeyIndex}>0{index + 1}</span>
                    <div className={styles.journeyCopy}>
                      <strong>{item.title}</strong>
                      <p>{item.copy}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </HomeReveal>

            <HomeReveal delay={0.2}>
              <Link href={withLocale(locale, "/contact")} className="button-ghost">
                {content.groupCta}
              </Link>
            </HomeReveal>
          </div>
        </div>
      </section>

      <section
        id="attentions"
        className={`section section-surface--light section--light ${styles.organizationSection}`}
      >
        <div className={`container ${styles.organizationGrid}`}>
          <HomeReveal className={styles.organizationIntro}>
            <div className="eyebrow">{content.organizationIntro.eyebrow}</div>
            <h2 className={styles.statement}>{content.organizationIntro.title}</h2>
            <p className={styles.lead}>{content.organizationIntro.lead}</p>
          </HomeReveal>

          <div className={styles.practicesGrid}>
            {content.reservationPractices.map((item, index) => (
              <HomeReveal key={item.label} className={styles.practiceItem} delay={0.08 + index * 0.05}>
                <span className={styles.practiceIndex}>{String(index + 1).padStart(2, "0")}</span>
                <div className={styles.practiceCopy}>
                  <h3>{item.label}</h3>
                  <p>{item.copy}</p>
                </div>
              </HomeReveal>
            ))}
          </div>

          <HomeReveal className={styles.followupPanel} variant="panel" delay={0.18}>
            <p className={styles.panelLabel}>{content.implementationLabel}</p>
            <ul className={styles.followupList}>
              {content.zenchefSetupSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </HomeReveal>
        </div>
      </section>

      <section id="groupes" className={`section ${styles.hospitalitySection}`}>
        <div className={`container ${styles.hospitalityGrid}`}>
          <HomeReveal className={styles.hospitalityCopy}>
            <div className="eyebrow">{content.hospitalityStory.eyebrow}</div>
            <h2 className={styles.hospitalityTitle}>{content.hospitalityStory.title}</h2>
            <p className={styles.hospitalityLead}>{content.hospitalityStory.intro}</p>

            <ul className={styles.detailList}>
              {content.hospitalityStory.details.map((detail) => (
                <li key={detail.label}>
                  <span>{detail.label}</span>
                  <strong>{detail.copy}</strong>
                </li>
              ))}
            </ul>

            <div className={styles.actions}>
              <Link href={withLocale(locale, "/contact")} className="button">
                {content.groupCta}
              </Link>
              <a href={phoneHref} className={`button-ghost ${styles.contactButton}`}>
                {siteConfig.phoneDisplay}
              </a>
            </div>
          </HomeReveal>

          <HomeReveal variant="soft" delay={0.08}>
            <figure className={`image-frame ${styles.figure}`}>
              <Image
                src={content.hospitalityStory.image}
                alt={content.hospitalityStory.imageAlt}
                fill
                sizes="(max-width: 1080px) 100vw, 44vw"
                className={`image-cover ${styles.figureImage}`}
                style={{ objectPosition: content.hospitalityStory.imagePosition }}
              />
            </figure>
          </HomeReveal>
        </div>
      </section>
    </>
  );
}
