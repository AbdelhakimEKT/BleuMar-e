import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/ui/reveal";
import type { Locale } from "@/i18n/config";
import { withLocale } from "@/i18n/routing";

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
    title: "Le calme, la lumière, la précision.",
    lead:
      "Bleu Marée cultive une élégance lisible. La salle, le service et le rythme du dîner avancent dans le même sens: accueillir avec douceur, servir avec justesse, laisser une impression durable.",
    action: "Découvrir le restaurant"
  },
  en: {
    mainAlt: "Dining room service at Bleu Maree",
    detailAlt: "Table detail at Bleu Maree",
    eyebrow: "The house",
    title: "Calm, light, and precision.",
    lead:
      "Bleu Maree is built around legible elegance. The room, the service, and the rhythm of dinner all move in the same direction: welcoming softly, serving precisely, and leaving a lasting impression.",
    action: "Discover the restaurant"
  }
} as const;

export function HomeManifesto({ highlights, locale }: HomeManifestoProps) {
  const copy = manifestoCopy[locale];

  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.layout}`}>
        <Reveal className={styles.mediaColumn}>
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
        </Reveal>

        <div className={styles.storyColumn}>
          <Reveal className={styles.introBlock}>
            <div className="eyebrow">{copy.eyebrow}</div>
            <h2 className={styles.title}>{copy.title}</h2>
            <p className={styles.lead}>{copy.lead}</p>

            <Link
              href={withLocale(locale, "/restaurant")}
              className="button-ghost"
              data-cursor-label={copy.action}
            >
              {copy.action}
            </Link>
          </Reveal>

          <div className={styles.storyList}>
            {highlights.map((item, index) => (
              <Reveal key={item.title} className={styles.storyRow}>
                <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
                <div className={styles.storyCopy}>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
