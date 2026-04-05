import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { getExperiencesContent } from "@/content/experiences";
import { withLocale } from "@/i18n/routing";
import { resolveLocale } from "@/i18n/server";
import { createMetadata } from "@/lib/metadata";
import { getExperiencesPageData } from "@/sanity/loaders";

import styles from "./experiences-page.module.css";

type ExperiencesPageProps = {
  params: Promise<{ locale: string }>;
};

const experiencesMetaCopy = {
  fr: {
    title: "Rendez-vous",
    description:
      "Les rendez-vous Bleu Marée: quelques dates, des accords et des privatisations tenus avec la même précision que la maison."
  },
  en: {
    title: "Appointments",
    description:
      "Bleu Maree appointments: a few dates, pairings, and private events carried with the same precision as the house."
  }
} as const;

const experiencesPageCopy = {
  fr: {
    overviewLabel: "Ce qui est tenu",
    overviewPoints: [
      {
        title: "Peu de dates",
        copy: "La rareté garde l'attente nette et laisse le désir respirer."
      },
      {
        title: "Même langage",
        copy: "Cuisine, lumière et service parlent ici d'une seule voix."
      },
      {
        title: "Aucun format plaqué",
        copy: "Un rendez-vous n'entre dans la maison que s'il lui appartient vraiment."
      }
    ],
    featuredEyebrow: "Le prochain rendez-vous",
    featuredQuote: "Un soir précis. Pas une programmation.",
    privateOptionsLabel: "Deux façons d'entrer dans la maison",
    privatePanelLabel: "Repères de maison",
    seasonalityPanelLabel: "Ligne de maison",
    seasonalityPanelText:
      "La maison reste désirable parce qu'elle sait laisser de l'espace entre les annonces.",
    finalActions: {
      reserve: "Réserver une table",
      contact: "Parler d'un moment privé"
    }
  },
  en: {
    overviewLabel: "What is held",
    overviewPoints: [
      {
        title: "Few dates",
        copy: "Rarity keeps anticipation clear and lets desire breathe."
      },
      {
        title: "One language",
        copy: "Kitchen, light, and service all speak with one voice here."
      },
      {
        title: "No applied format",
        copy: "A moment enters the house only if it truly belongs to it."
      }
    ],
    featuredEyebrow: "The next appointment",
    featuredQuote: "One precise evening. Not a programme.",
    privateOptionsLabel: "Two ways to enter the house",
    privatePanelLabel: "House markers",
    seasonalityPanelLabel: "House line",
    seasonalityPanelText:
      "The house stays desirable because it knows how to leave space between announcements.",
    finalActions: {
      reserve: "Book a table",
      contact: "Discuss a private moment"
    }
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
  const copy = experiencesPageCopy[locale];
  const experiencesPageData = await getExperiencesPageData(locale);
  const [featuredExperience, ...secondaryExperiences] = experiencesPageData.upcomingExperiences;

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
        id="principe"
        className={`section section-surface--light section--light ${styles.overviewSection}`}
      >
        <div className={`container ${styles.overviewGrid}`}>
          <Reveal className={styles.overviewCopy}>
            <div className="eyebrow">{content.upcomingIntro.eyebrow}</div>
            <h2 className={styles.sectionTitle}>{content.upcomingIntro.title}</h2>
            <p className={styles.sectionLead}>{content.upcomingIntro.lead}</p>
            <p className={styles.statementLine}>
              {locale === "fr"
                ? "Le désir tient mieux quand la maison reste rare, lisible et d'aplomb."
                : "Desire holds better when the house stays rare, legible, and composed."}
            </p>
          </Reveal>

          <Reveal className={styles.overviewPanel}>
            <p className={styles.panelLabel}>{copy.overviewLabel}</p>
            <ul className={styles.principlesList}>
              {copy.overviewPoints.map((point) => (
                <li key={point.title}>
                  <strong>{point.title}</strong>
                  <span>{point.copy}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {featuredExperience ? (
        <section id="rendez-vous" className={`section ${styles.featuredSection}`}>
          <div className={`container ${styles.featuredGrid}`}>
            <Reveal className={styles.featuredMedia}>
              <figure className={`image-frame ${styles.figure} ${styles.featuredFigure}`}>
                <Image
                  src={featuredExperience.image}
                  alt={featuredExperience.imageAlt}
                  fill
                  sizes="(max-width: 1080px) 100vw, 54vw"
                  className={`image-cover ${styles.figureImage}`}
                  style={
                    featuredExperience.imagePosition
                      ? { objectPosition: featuredExperience.imagePosition }
                      : undefined
                  }
                />
              </figure>
            </Reveal>

            <Reveal className={styles.featuredCopy}>
              <div className="eyebrow">{copy.featuredEyebrow}</div>
              <p className={styles.featuredMeta}>
                <span>{featuredExperience.date}</span>
                <span>{featuredExperience.time}</span>
              </p>
              <h2 className={styles.featuredTitle}>{featuredExperience.title}</h2>
              <p className={styles.featuredLead}>{featuredExperience.description}</p>
              <p className={styles.featuredQuote}>{copy.featuredQuote}</p>

              <div className={styles.actions}>
                <Link href={withLocale(locale, featuredExperience.ctaHref)} className="button">
                  {featuredExperience.ctaLabel}
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      ) : null}

      <section id="recevoir" className={`section section-surface ${styles.privateSection}`}>
        <div className={`container ${styles.privateGrid}`}>
          <Reveal className={styles.privateIntro}>
            <div className="eyebrow">{content.privateDining.eyebrow}</div>
            <h2 className={styles.sectionTitle}>{content.privateDining.title}</h2>
            <p className={styles.sectionLead}>{content.privateDining.intro}</p>
            <p className={styles.privateLine}>
              {locale === "fr"
                ? "Ici, l'effet compte moins que le ton juste."
                : "Here, effect matters less than the right tone."}
            </p>
          </Reveal>

          <Reveal className={styles.privateMedia}>
            <figure className={`image-frame ${styles.figure} ${styles.privateFigure}`}>
              <Image
                src={content.privateDining.image}
                alt={content.privateDining.imageAlt}
                fill
                sizes="(max-width: 1080px) 100vw, 48vw"
                className={`image-cover ${styles.figureImage}`}
                style={{ objectPosition: content.privateDining.imagePosition }}
              />
            </figure>
          </Reveal>

          <div className={styles.privateOptions}>
            <p className={styles.optionsLabel}>{copy.privateOptionsLabel}</p>

            {secondaryExperiences.map((event) => (
              <Reveal key={event.title} className={styles.privateOption}>
                <div className={styles.optionHeader}>
                  <div>
                    <p className={styles.optionMeta}>
                      <span>{event.date}</span>
                      <span>{event.time}</span>
                    </p>
                    <h3>{event.title}</h3>
                  </div>
                </div>

                <p>{event.description}</p>

                <Link href={withLocale(locale, event.ctaHref)} className="button-ghost">
                  {event.ctaLabel}
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className={styles.privatePanel}>
            <p className={styles.panelLabel}>{copy.privatePanelLabel}</p>
            <ul className={styles.detailList}>
              {experiencesPageData.privateDiningPoints.map((item, index) => (
                <li key={item}>
                  <span className={styles.detailIndex}>{String(index + 1).padStart(2, "0")}</span>
                  <span className={styles.detailCopy}>{item}</span>
                </li>
              ))}
            </ul>

            <div className={styles.actions}>
              <Link href={withLocale(locale, "/contact")} className="button-secondary">
                {content.privateDining.actions.privatisation}
              </Link>
              <Link href={withLocale(locale, "/reservation")} className="button-ghost">
                {content.privateDining.actions.reserve}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="rarete"
        className={`section section-surface--light section--light ${styles.seasonalitySection}`}
      >
        <div className={`container ${styles.seasonalityGrid}`}>
          <Reveal className={styles.seasonalityCopy}>
            <div className="eyebrow">{content.seasonality.eyebrow}</div>
            <h2 className={styles.sectionTitle}>{content.seasonality.title}</h2>
            <p className={styles.sectionLead}>{content.seasonality.lead}</p>
            <p className={styles.statementLine}>
              {locale === "fr"
                ? "Quelques dates suffisent lorsqu'elles ont de la tenue."
                : "A few dates are enough when they have real hold."}
            </p>
          </Reveal>

          <div className={styles.seasonalityRail}>
            <div className={styles.momentsList}>
              {experiencesPageData.seasonalMoments.map((item, index) => (
                <Reveal key={item.title} className={styles.momentItem}>
                  <span className={styles.momentIndex}>{String(index + 1).padStart(2, "0")}</span>
                  <div className={styles.momentCopy}>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className={styles.finalPanel}>
              <p className={styles.panelLabel}>{copy.seasonalityPanelLabel}</p>
              <p className={styles.finalText}>{copy.seasonalityPanelText}</p>

              <div className={styles.actions}>
                <Link href={withLocale(locale, "/reservation")} className="button">
                  {copy.finalActions.reserve}
                </Link>
                <Link href={withLocale(locale, "/contact")} className="button-ghost">
                  {copy.finalActions.contact}
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
