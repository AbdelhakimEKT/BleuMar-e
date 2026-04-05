import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { ImageTriptych } from "@/components/blocks/image-triptych";
import { HomeReveal } from "@/components/home/home-reveal";
import { PageHero } from "@/components/ui/page-hero";
import { getRestaurantContent } from "@/content/restaurant";
import { withLocale } from "@/i18n/routing";
import { resolveLocale } from "@/i18n/server";
import { createMetadata } from "@/lib/metadata";

import styles from "./restaurant-page.module.css";

type RestaurantPageProps = {
  params: Promise<{ locale: string }>;
};

const restaurantMetaCopy = {
  fr: {
    title: "La maison",
    description:
      "La maison Bleu Marée à Biarritz: salle, lumière, service et cuisine tenus avec calme, précision et discrétion.",
    serviceEyebrow: "Le service",
    kitchenEyebrow: "La cuisine",
    momentsLabel: "Moments de la maison"
  },
  en: {
    title: "The house",
    description:
      "The Bleu Maree house in Biarritz: room, light, service, and cuisine held with calm, precision, and restraint.",
    serviceEyebrow: "Service",
    kitchenEyebrow: "The kitchen",
    momentsLabel: "House moments"
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
  const copy = restaurantMetaCopy[locale];

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

      <section className={`section ${styles.storySection}`}>
        <div className={`container ${styles.storyGrid}`}>
          <HomeReveal className={styles.storyIntro}>
            <div className="eyebrow">{content.storyContent.eyebrow}</div>
            <h2 className={styles.statement}>{content.storyContent.title}</h2>
            <p className={styles.lead}>{content.storyContent.intro}</p>

            <div className={styles.quotePanel}>
              <p>{content.storyContent.quote}</p>
            </div>

            <div className={styles.prose}>
              {content.storyContent.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className={styles.actions}>
              <Link href={withLocale(locale, "/reservation")} className="button">
                {content.actions.reserve}
              </Link>
            </div>
          </HomeReveal>

          <HomeReveal className={styles.visualBlock} variant="soft" delay={0.08}>
            <ImageTriptych items={content.visualMoments} />
          </HomeReveal>
        </div>
      </section>

      <section className={`section section-surface ${styles.foundationsSection}`}>
        <div className={`container ${styles.foundationsGrid}`}>
          <HomeReveal className={styles.foundationsIntro}>
            <div className="eyebrow">{content.foundations.eyebrow}</div>
            <h2 className={styles.statement}>{content.foundations.title}</h2>
            <p className={styles.lead}>{content.foundations.lead}</p>
          </HomeReveal>

          <div className={styles.pillars}>
            {content.sourcingPillars.map((item, index) => (
              <HomeReveal
                key={item.title}
                className={styles.pillar}
                delay={0.08 + index * 0.06}
              >
                <span className={styles.pillarIndex}>{String(index + 1).padStart(2, "0")}</span>
                <div className={styles.pillarCopy}>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </HomeReveal>
            ))}
          </div>

          <HomeReveal className={styles.atmospherePanel} variant="panel" delay={0.18}>
            <p className={styles.panelLabel}>{copy.momentsLabel}</p>
            <ul className={styles.atmosphereList}>
              {content.atmosphereDetails.map((detail) => (
                <li key={detail.label}>
                  <span>{detail.label}</span>
                  <strong>{detail.copy}</strong>
                </li>
              ))}
            </ul>
          </HomeReveal>
        </div>
      </section>

      <section className={`section ${styles.closingSection}`}>
        <div className={`container ${styles.closingStack}`}>
          <div className={styles.duoBlock}>
            <HomeReveal className={styles.mediaBlock} variant="soft">
              <figure className={`image-frame ${styles.figure}`}>
                <Image
                  src={content.teamMoments.image}
                  alt={content.teamMoments.imageAlt}
                  fill
                  sizes="(max-width: 1080px) 100vw, 48vw"
                  className={`image-cover ${styles.figureImage}`}
                  style={{ objectPosition: content.teamMoments.imagePosition }}
                />
              </figure>
            </HomeReveal>

            <HomeReveal className={styles.duoCopy} delay={0.08}>
              <div className="eyebrow">{copy.serviceEyebrow}</div>
              <h2 className={styles.duoTitle}>{content.teamMoments.title}</h2>
              <p className={styles.duoLead}>{content.teamMoments.copy}</p>
            </HomeReveal>
          </div>

          <div className={styles.duoBlock}>
            <HomeReveal className={styles.duoCopy} delay={0.06}>
              <div className="eyebrow">{copy.kitchenEyebrow}</div>
              <h2 className={styles.duoTitle}>{content.craftsmanshipMoments.title}</h2>
              <p className={styles.duoLead}>{content.craftsmanshipMoments.copy}</p>

              <div className={styles.actions}>
                <Link href={withLocale(locale, "/experiences")} className="button-secondary">
                  {content.actions.experiences}
                </Link>
                <Link
                  href={withLocale(locale, "/contact")}
                  className={`button-ghost ${styles.contactButton}`}
                >
                  {content.actions.contact}
                </Link>
              </div>
            </HomeReveal>

            <HomeReveal className={styles.mediaBlock} variant="soft">
              <figure className={`image-frame ${styles.figure}`}>
                <Image
                  src={content.craftsmanshipMoments.image}
                  alt={content.craftsmanshipMoments.imageAlt}
                  fill
                  sizes="(max-width: 1080px) 100vw, 48vw"
                  className={`image-cover ${styles.figureImage}`}
                  style={{ objectPosition: content.craftsmanshipMoments.imagePosition }}
                />
              </figure>
            </HomeReveal>
          </div>
        </div>
      </section>
    </>
  );
}
