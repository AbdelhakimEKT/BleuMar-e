import type { Locale } from "@/i18n/config";

import { HomeReveal } from "./home-reveal";
import styles from "./impression-marquee.module.css";

type ImpressionMarqueeProps = {
  impressions: string[];
  locale: Locale;
};

const wallLabels = {
  fr: {
    featured: "Ce qu'on emporte",
    supporting: "Ce qu'on se dit en sortant"
  },
  en: {
    featured: "What stays with you",
    supporting: "What is said on the way out"
  }
} as const;

export function ImpressionMarquee({ impressions, locale }: ImpressionMarqueeProps) {
  const [featured, ...supporting] = impressions;
  const copy = wallLabels[locale];

  return (
    <div className={styles.wall}>
      {featured ? (
        <HomeReveal className={styles.featured} variant="soft">
          <span className={styles.label}>{copy.featured}</span>
          <p>{featured}</p>
        </HomeReveal>
      ) : null}

      {supporting.length > 0 ? (
        <div className={styles.supporting} aria-label={copy.supporting}>
          {supporting.map((impression, index) => (
            <HomeReveal
              key={`${impression}-${index}`}
              className={styles.note}
              delay={0.08 + index * 0.06}
              variant="panel"
            >
              <span className={styles.noteIndex}>{String(index + 2).padStart(2, "0")}</span>
              <p>{impression}</p>
            </HomeReveal>
          ))}
        </div>
      ) : null}
    </div>
  );
}
