import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

import { ContactForm } from "@/components/forms/contact-form";
import { Reveal } from "@/components/ui/reveal";
import { PageHero } from "@/components/ui/page-hero";
import { getContactContent } from "@/content/contact";
import { resolveLocale } from "@/i18n/server";
import { withLocale } from "@/i18n/routing";
import { createMetadata } from "@/lib/metadata";
import { getSiteSettingsData } from "@/sanity/loaders";

import styles from "./contact-page.module.css";

type ContactPageProps = {
  params: Promise<{ locale: string }>;
};

const contactMetaCopy = {
  fr: {
    title: "Contact",
    description:
      "Retrouvez les informations pratiques de Bleu Marée à Biarritz: accès, horaires, téléphone, email et formulaire de contact."
  },
  en: {
    title: "Contact",
    description:
      "Find Bleu Maree practical information in Biarritz: access, opening hours, phone, email, and contact form."
  }
} as const;

const contactPageCopy = {
  fr: {
    overviewLine: "Adresse, horaires, téléphone. Le reste suit.",
    practicalLabel: "Repères directs",
    hoursLabel: "Horaires",
    directLabel: "Parler à la maison",
    directLead:
      "Téléphone et email restent là, sans détour ni attente inutile.",
    arrivalLine: "Le bon repère change déjà la soirée.",
    faqLine: "L'essentiel, sans faire attendre.",
    phoneLabel: "Appeler",
    emailLabel: "Écrire"
  },
  en: {
    overviewLine: "Address, opening hours, phone. The rest follows.",
    practicalLabel: "Direct bearings",
    hoursLabel: "Opening hours",
    directLabel: "Speak to the house",
    directLead:
      "Phone and email remain here with no detour and no needless waiting.",
    arrivalLine: "The right bearing already changes the evening.",
    faqLine: "The essentials, without making anyone wait.",
    phoneLabel: "Call",
    emailLabel: "Write"
  }
} as const;

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const copy = contactMetaCopy[locale];

  return createMetadata({
    locale,
    path: "/contact",
    title: copy.title,
    description: copy.description
  });
}

export default async function LocalizedContactPage({ params }: ContactPageProps) {
  const locale = await resolveLocale(params);
  const content = getContactContent(locale);
  const copy = contactPageCopy[locale];
  const siteConfig = await getSiteSettingsData(locale);

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

      <section
        className={`section section-surface--light section--light ${styles.overviewSection}`}
      >
        <div className={`container ${styles.overviewGrid}`}>
          <Reveal className={styles.overviewCopy}>
            <div className="eyebrow">{content.infoIntro.eyebrow}</div>
            <h2 className={styles.sectionTitle}>{content.infoIntro.title}</h2>
            <p className={styles.sectionLead}>{content.infoIntro.lead}</p>
            <p className={styles.overviewLine}>{copy.overviewLine}</p>
          </Reveal>

          <div className={styles.overviewPanels}>
            <Reveal className={styles.infoPanel}>
              <p className={styles.panelLabel}>{copy.practicalLabel}</p>
              <ul className={styles.contactList}>
                <li>
                  <span>{content.labels.address}</span>
                  <strong>
                    {siteConfig.addressLineOne}
                    <br />
                    {siteConfig.addressLineTwo}
                  </strong>
                </li>
                <li>
                  <span>{content.labels.phone}</span>
                  <strong>
                    <a href={`tel:${siteConfig.phoneRaw}`}>{siteConfig.phoneDisplay}</a>
                  </strong>
                </li>
                <li>
                  <span>{content.labels.email}</span>
                  <strong>
                    <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                  </strong>
                </li>
                <li>
                  <span>{content.labels.access}</span>
                  <strong>{content.accessCopy}</strong>
                </li>
              </ul>
            </Reveal>

            <Reveal className={styles.hoursPanel}>
              <p className={styles.panelLabel}>{copy.hoursLabel}</p>
              <ul className={styles.hoursList}>
                {siteConfig.openingHours.map((item) => (
                  <li key={item.day}>
                    <span>{item.day}</span>
                    <strong>{item.hours}</strong>
                  </li>
                ))}
              </ul>

              <div className={styles.actions}>
                <Link href={siteConfig.mapUrl} className="button" target="_blank" rel="noreferrer">
                  {content.routeButton}
                </Link>
                <Link href={withLocale(locale, "/reservation")} className="button-ghost">
                  {content.reserveButton}
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className={`section section-surface ${styles.hospitalitySection}`}>
        <div className={`container ${styles.hospitalityGrid}`}>
          <div className={styles.storyColumn}>
            <Reveal className={styles.storyCopy}>
              <div className="eyebrow">{content.arrivalStory.eyebrow}</div>
              <h2 className={styles.sectionTitle}>{content.arrivalStory.title}</h2>
              <p className={styles.sectionLead}>{content.arrivalStory.intro}</p>
              <p className={styles.arrivalLine}>{copy.arrivalLine}</p>

              <ul className={styles.detailList}>
                {content.arrivalStory.details.map((item) => (
                  <li key={item.label}>
                    <span>{item.label}</span>
                    <strong>{item.copy}</strong>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className={styles.arrivalVisual}>
              <figure className={`image-frame ${styles.figure}`}>
                <Image
                  src={content.arrivalStory.image}
                  alt={content.arrivalStory.imageAlt}
                  fill
                  sizes="(max-width: 1080px) 100vw, 48vw"
                  className={`image-cover ${styles.figureImage}`}
                  style={{ objectPosition: content.arrivalStory.imagePosition }}
                />
              </figure>
            </Reveal>
          </div>

          <div className={styles.contactColumn}>
            <Reveal className={styles.directPanel}>
              <p className={styles.panelLabel}>{copy.directLabel}</p>
              <p className={styles.directLead}>{copy.directLead}</p>

              <div className={styles.directLinks}>
                <a href={`tel:${siteConfig.phoneRaw}`} className={styles.directLink}>
                  <span>{copy.phoneLabel}</span>
                  <strong>{siteConfig.phoneDisplay}</strong>
                </a>
                <a href={`mailto:${siteConfig.email}`} className={styles.directLink}>
                  <span>{copy.emailLabel}</span>
                  <strong>{siteConfig.email}</strong>
                </a>
              </div>
            </Reveal>

            <Reveal className={styles.formWrap}>
              <ContactForm locale={locale} />
            </Reveal>
          </div>
        </div>
      </section>

      <section
        className={`section section-surface--light section--light ${styles.faqSection}`}
      >
        <div className={`container ${styles.faqGrid}`}>
          <Reveal className={styles.faqIntro}>
            <div className="eyebrow">{content.faq.eyebrow}</div>
            <h2 className={styles.sectionTitle}>{content.faq.title}</h2>
            <p className={styles.sectionLead}>{content.faq.lead}</p>
            <p className={styles.faqLine}>{copy.faqLine}</p>
          </Reveal>

          <div className={styles.faqItems}>
            {content.faqItems.map((item) => (
              <Reveal key={item.question}>
                <details className={styles.faqItem}>
                  <summary className={styles.faqQuestion}>{item.question}</summary>
                  <p className={styles.faqAnswer}>{item.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
