import type { Metadata } from "next";
import Link from "next/link";

import { EditorialSplit } from "@/components/blocks/editorial-split";
import { FaqList } from "@/components/blocks/faq-list";
import { ContactForm } from "@/components/forms/contact-form";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";
import { PageHero } from "@/components/ui/page-hero";
import { getContactContent } from "@/content/contact";
import { resolveLocale } from "@/i18n/server";
import { withLocale } from "@/i18n/routing";
import { getUiCopy } from "@/i18n/ui";
import { createMetadata } from "@/lib/metadata";
import { getSiteSettingsData } from "@/sanity/loaders";

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
  const ui = getUiCopy(locale);
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
          <Reveal className="stack">
            <SectionIntro
              eyebrow={content.infoIntro.eyebrow}
              title={content.infoIntro.title}
              lead={content.infoIntro.lead}
            />

            <div className="surface-card">
              <ul className="contact-list">
                <li>
                  <span className="contact-label">{content.labels.address}</span>
                  <span className="contact-copy">
                    {siteConfig.addressLineOne}
                    <br />
                    {siteConfig.addressLineTwo}
                  </span>
                </li>
                <li>
                  <span className="contact-label">{content.labels.phone}</span>
                  <span className="contact-copy">
                    <a href={`tel:${siteConfig.phoneRaw}`}>{siteConfig.phoneDisplay}</a>
                  </span>
                </li>
                <li>
                  <span className="contact-label">{content.labels.email}</span>
                  <span className="contact-copy">
                    <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                  </span>
                </li>
                <li>
                  <span className="contact-label">{content.labels.access}</span>
                  <span className="contact-copy">{content.accessCopy}</span>
                </li>
              </ul>
            </div>

            <div className="surface-card">
              <p className="kicker">{ui.openingHoursHeading}</p>
              <ul className="detail-list">
                {siteConfig.openingHours.map((item) => (
                  <li key={item.day}>
                    <span className="detail-title">{item.day}</span>
                    <span className="detail-copy">{item.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="cta-row">
              <Link href={siteConfig.mapUrl} className="button" target="_blank" rel="noreferrer">
                {content.routeButton}
              </Link>
              <Link href={withLocale(locale, "/reservation")} className="button-secondary">
                {content.reserveButton}
              </Link>
            </div>
          </Reveal>

          <Reveal>
            <ContactForm locale={locale} />
          </Reveal>
        </div>
      </section>

      <section className="section section-surface">
        <div className="container">
          <EditorialSplit
            eyebrow={content.arrivalStory.eyebrow}
            title={content.arrivalStory.title}
            intro={content.arrivalStory.intro}
            details={content.arrivalStory.details}
            image={content.arrivalStory.image}
            imageAlt={content.arrivalStory.imageAlt}
            imagePosition={content.arrivalStory.imagePosition}
            actions={[
              {
                href: siteConfig.mapUrl,
                label: content.routeButton
              },
              {
                href: withLocale(locale, "/reservation"),
                label: content.reserveButton,
                variant: "secondary"
              }
            ]}
          />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FaqList
            eyebrow={content.faq.eyebrow}
            title={content.faq.title}
            lead={content.faq.lead}
            items={content.faqItems}
          />
        </div>
      </section>
    </>
  );
}
