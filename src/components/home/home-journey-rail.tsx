import Image from "next/image";
import Link from "next/link";

import type { Locale } from "@/i18n/config";
import { withLocale } from "@/i18n/routing";

import { HomeReveal } from "./home-reveal";
import styles from "./home-journey-rail.module.css";

type GuestJourneyStep = {
  title: string;
  copy: string;
};

type HomeJourneyRailProps = {
  steps: GuestJourneyStep[];
  locale: Locale;
};

const journeyCopy = {
  fr: {
    eyebrow: "Le déroulé du dîner",
    title: "Une soirée se juge à son rythme.",
    lead:
      "On arrive sans friction. Le repas monte sans brusquer. La finale reste claire.",
    aside: "Le meilleur service vous laisse avec la soirée, pas avec lui.",
    imageAlt: "Service en salle chez Bleu Marée",
    action: "Préparer votre venue"
  },
  en: {
    eyebrow: "The arc of dinner",
    title: "An evening is judged by its rhythm.",
    lead:
      "Arrival stays frictionless. The meal builds without pushing. The finish remains clear.",
    aside: "The best service leaves you with the evening, not with itself.",
    imageAlt: "Bleu Maree dining room service",
    action: "Plan your visit"
  }
} as const;

export function HomeJourneyRail({ steps, locale }: HomeJourneyRailProps) {
  const copy = journeyCopy[locale];

  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.layout}`}>
        <HomeReveal className={styles.intro}>
          <div className="eyebrow">{copy.eyebrow}</div>
          <h2 className={styles.title}>{copy.title}</h2>
          <p className={styles.lead}>{copy.lead}</p>
          <div className={styles.asidePanel}>
            <p>{copy.aside}</p>
          </div>
        </HomeReveal>

        <HomeReveal variant="soft" delay={0.08}>
          <figure className={styles.heroFrame} data-cursor-label="Cuisine">
            <Image
              src="/images/experience/bleu-maree-service-in-dining-room.jpg"
              alt={copy.imageAlt}
              fill
              sizes="100vw"
              className={styles.image}
            />
          </figure>
        </HomeReveal>

        <div className={styles.steps}>
          {steps.map((step, index) => (
            <HomeReveal key={step.title} className={styles.step} delay={0.1 + index * 0.06}>
              <div className={styles.stepIndex}>{String(index + 1).padStart(2, "0")}</div>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </HomeReveal>
          ))}
        </div>

        <HomeReveal className={styles.actionRow} delay={0.2}>
          <Link
            href={withLocale(locale, "/reservation")}
            className="button"
            data-cursor-label={copy.action}
          >
            {copy.action}
          </Link>
        </HomeReveal>
      </div>
    </section>
  );
}
