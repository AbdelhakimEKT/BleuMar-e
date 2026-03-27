import type { Locale } from "@/i18n/config";

import styles from "./impression-marquee.module.css";

type ImpressionMarqueeProps = {
  impressions: string[];
  locale: Locale;
};

const marqueeLabels = {
  fr: "Impressions autour de Bleu Marée",
  en: "Impressions around Bleu Marée"
} as const;

export function ImpressionMarquee({ impressions, locale }: ImpressionMarqueeProps) {
  const repeatedImpressions = [...impressions, ...impressions, ...impressions];

  return (
    <div className={styles.marquee} aria-label={marqueeLabels[locale]}>
      <div className={styles.track}>
        {repeatedImpressions.map((impression, index) => (
          <p key={`${impression}-${index}`} className={styles.item}>
            {impression}
          </p>
        ))}
      </div>
    </div>
  );
}
