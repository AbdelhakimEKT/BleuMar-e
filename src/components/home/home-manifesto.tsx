import Image from "next/image";
import Link from "next/link";

import type { Locale } from "@/i18n/config";
import { withLocale } from "@/i18n/routing";

import { HomeReveal } from "./home-reveal";
import styles from "./home-manifesto.module.css";

type PhilosophyHighlight = {
  title: string;
  copy: string;
};

type HomeManifestoProps = {
  highlights: PhilosophyHighlight[];
  locale: Locale;
};

const manifestoCopy = {
  fr: {
    mainAlt: "Service en salle chez Bleu Marée",
    detailAlt: "Détail de table chez Bleu Marée",
    eyebrow: "La maison",
    title: "Une table qui n'élève jamais la voix.",
    lead:
      "La salle accueille. Le service règle le tempo. On sent qu'une main tient tout. Rien n'est raide.",
    quote: "La maison n'a rien à prouver. Elle a quelque chose à tenir.",
    action: "Découvrir la maison"
  },
  en: {
    mainAlt: "Dining room service at Bleu Maree",
    detailAlt: "Table detail at Bleu Maree",
    eyebrow: "The house",
    title: "A table that never raises its voice.",
    lead:
      "The room welcomes. Service sets the tempo. You can feel a hand holding everything together. Nothing is rigid.",
    quote: "The house has nothing to prove. It has something to hold.",
    action: "Discover the house"
  }
} as const;

export function HomeManifesto({ highlights, locale }: HomeManifestoProps) {
  const copy = manifestoCopy[locale];

  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.layout}`}>
        <HomeReveal className={styles.mediaColumn} variant="soft">
          <figure className={styles.mainImage} data-cursor-label="Service">
            <Image
              src="/images/people/bleu-maree-team-service-in-action.jpg"
              alt={copy.mainAlt}
              fill
              sizes="(max-width: 1080px) 100vw, 48vw"
              className={styles.image}
            />
          </figure>

          <figure className={styles.detailImage} data-cursor-label="Table">
            <Image
              src="/images/details/bleu-maree-detail-table-setting-alt-01.jpg"
              alt={copy.detailAlt}
              fill
              sizes="(max-width: 1080px) 68vw, 18vw"
              className={styles.image}
            />
          </figure>
        </HomeReveal>

        <div className={styles.storyColumn}>
          <HomeReveal className={styles.introBlock} delay={0.06}>
            <div className="eyebrow">{copy.eyebrow}</div>
            <h2 className={styles.title}>{copy.title}</h2>
            <p className={styles.lead}>{copy.lead}</p>

            <div className={styles.quotePanel}>
              <p>{copy.quote}</p>
            </div>

            <Link
              href={withLocale(locale, "/restaurant")}
              className="button-ghost"
              data-cursor-label={copy.action}
            >
              {copy.action}
            </Link>
          </HomeReveal>

          <div className={styles.storyList}>
            {highlights.map((item, index) => (
              <HomeReveal
                key={item.title}
                className={styles.storyRow}
                delay={0.1 + index * 0.06}
              >
                <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
                <div className={styles.storyCopy}>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </HomeReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
