import Link from "next/link";
import Image from "next/image";

import styles from "./home-hero.module.css";

type HomeHeroProps = {
  brandName: string;
  location: string;
  content: {
    eyebrow: string;
    title: string;
    intro: string;
    primaryCta: { href: string; label: string };
    secondaryCta: { href: string; label: string };
    image: string;
    highlights: string[];
  };
};

export function HomeHero({ brandName, location, content }: HomeHeroProps) {
  return (
    <section className={styles.hero}>
      <Image
        src={content.image}
        alt="Salle Bleu Marée au coucher du soleil"
        fill
        priority
        sizes="100vw"
        className={styles.background}
      />
      <div className={styles.overlay} />

      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <div className="eyebrow">{content.eyebrow}</div>
          <p className={styles.brandLine}>
            {brandName} · {location}
          </p>
          <h1 className="display">{content.title}</h1>
          <p className="lead">{content.intro}</p>

          <div className="cta-row">
            <Link href={content.primaryCta.href} className="button">
              {content.primaryCta.label}
            </Link>
            <Link href={content.secondaryCta.href} className="button-secondary">
              {content.secondaryCta.label}
            </Link>
          </div>
        </div>

        <div className={styles.meta}>
          <div className={styles.highlightList}>
            {content.highlights.map((item) => (
              <div key={item} className={styles.highlightItem}>
                <span />
                <p>{item}</p>
              </div>
            ))}
          </div>

          <div className={styles.logoPlate}>
            <img src="/branding/bleu-maree-logo.svg" alt="Bleu Marée" />
          </div>
        </div>
      </div>
    </section>
  );
}
