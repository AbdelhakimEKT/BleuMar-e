import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/ui/reveal";
import type { Locale } from "@/i18n/config";
import { withLocale } from "@/i18n/routing";

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
    eyebrow: "Expérience client",
    title: "Le premium se sent dans le geste, puis dans le récit.",
    lead:
      "Une table d'exception se construit dans l'attention portée au détail: l'accueil, le rythme du service, le geste juste et le souvenir laissé après la dernière assiette.",
    imageAlt: "Chef Bleu Marée au dressage",
    action: "Préparer une réservation"
  },
  en: {
    eyebrow: "Guest experience",
    title: "Premium is felt first in the gesture, then in the narrative.",
    lead:
      "An exceptional table is built through attention to detail: the welcome, the rhythm of service, the right gesture, and the memory left after the final plate.",
    imageAlt: "Bleu Maree chef plating",
    action: "Prepare a booking"
  }
} as const;

export function HomeJourneyRail({ steps, locale }: HomeJourneyRailProps) {
  const copy = journeyCopy[locale];

  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.layout}`}>
        <Reveal className={styles.intro}>
          <div className="eyebrow">{copy.eyebrow}</div>
          <h2 className={styles.title}>{copy.title}</h2>
          <p className={styles.lead}>{copy.lead}</p>
        </Reveal>

        <Reveal>
          <figure className={styles.heroFrame} data-cursor-label="Cuisine">
            <Image
              src="/images/experience/bleu-maree-chef-plating-action-alt.jpg"
              alt={copy.imageAlt}
              fill
              sizes="100vw"
              className={styles.image}
            />
          </figure>
        </Reveal>

        <div className={styles.steps}>
          {steps.map((step, index) => (
            <Reveal key={step.title} className={styles.step}>
              <div className={styles.stepIndex}>{String(index + 1).padStart(2, "0")}</div>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.actionRow}>
          <Link
            href={withLocale(locale, "/reservation")}
            className="button"
            data-cursor-label={copy.action}
          >
            {copy.action}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
