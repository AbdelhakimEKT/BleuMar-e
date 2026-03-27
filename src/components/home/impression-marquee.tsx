import styles from "./impression-marquee.module.css";

type ImpressionMarqueeProps = {
  impressions: string[];
};

export function ImpressionMarquee({ impressions }: ImpressionMarqueeProps) {
  const repeatedImpressions = [...impressions, ...impressions, ...impressions];

  return (
    <div className={styles.marquee} aria-label="Impressions autour de Bleu Marée">
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
