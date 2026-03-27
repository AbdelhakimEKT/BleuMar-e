import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/ui/reveal";
import type { Locale } from "@/i18n/config";
import { withLocale } from "@/i18n/routing";

import styles from "./immersive-home-hero.module.css";

type HeroContent = {
  eyebrow: string;
  title: string;
  intro: string;
  primaryCta: { href: string; label: string };
  secondaryCta: { href: string; label: string };
  image: string;
  highlights: string[];
};

type ImmersiveHomeHeroProps = {
  brandName: string;
  location: string;
  content: HeroContent;
  locale: Locale;
};

const homeHeroCopy = {
  fr: {
    imageAlt: "Salle Bleu Marée baignée dans une lumière du soir",
    detailAlt: "Table Bleu Marée dans une lumière de soirée",
    serviceNote: "Selon arrivage",
    serviceCopy:
      "Une cuisine dictée par la saison, l'iode et le geste, pensée pour faire monter le désir avant même la réservation.",
    highlightLabel: "Rythme de la maison",
    ribbon: [
      "Cuisine française contemporaine",
      "Produits de la mer",
      "Biarritz",
      "Menu dégustation",
      "Accords mets et vins",
      "Occasions spéciales"
    ]
  },
  en: {
    imageAlt: "Bleu Maree dining room bathed in evening light",
    detailAlt: "Bleu Maree table in evening light",
    serviceNote: "According to market arrivals",
    serviceCopy:
      "A cuisine guided by season, iodine, and gesture, designed to build desire before the booking itself.",
    highlightLabel: "House rhythm",
    ribbon: [
      "Contemporary French cuisine",
      "Seafood",
      "Biarritz",
      "Tasting menu",
      "Food and wine pairings",
      "Special occasions"
    ]
  }
} as const;

export function ImmersiveHomeHero({
  brandName,
  location,
  content,
  locale
}: ImmersiveHomeHeroProps) {
  const copy = homeHeroCopy[locale];

  return (
    <section className={styles.hero}>
      <Image
        src={content.image}
        alt={copy.imageAlt}
        fill
        priority
        sizes="100vw"
        className={styles.background}
      />
      <div className={styles.overlay} />

      <div className={`container ${styles.inner}`}>
        <Reveal className={styles.copy}>
          <p className={styles.brandLine}>
            {brandName} <span>•</span> {location}
          </p>
          <div className="eyebrow">{content.eyebrow}</div>
          <h1 className={styles.title}>{content.title}</h1>
          <p className={styles.intro}>{content.intro}</p>

          <div className={styles.ctaRow}>
            <Link
              href={withLocale(locale, content.primaryCta.href)}
              className="button"
              data-cursor-label={content.primaryCta.label}
            >
              {content.primaryCta.label}
            </Link>
            <Link
              href={withLocale(locale, content.secondaryCta.href)}
              className="button-secondary"
              data-cursor-label={content.secondaryCta.label}
            >
              {content.secondaryCta.label}
            </Link>
          </div>

          <div className={styles.serviceNote}>
            <span className={styles.serviceNoteLabel}>{copy.serviceNote}</span>
            <p>{copy.serviceCopy}</p>
          </div>
        </Reveal>

        <Reveal className={styles.meta}>
          <div className={styles.metaPanel}>
            <p className={styles.highlightLabel}>{copy.highlightLabel}</p>
            <ul className={styles.highlightList}>
              {content.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <figure className={styles.detailFrame} data-cursor-label="Ambiance">
            <Image
              src="/images/details/bleu-maree-detail-table-setting-alt-02.jpg"
              alt={copy.detailAlt}
              fill
              sizes="(max-width: 980px) 100vw, 22vw"
              className={styles.frameImage}
            />
          </figure>
        </Reveal>
      </div>

      <div className={styles.ribbon}>
        <div className={styles.ribbonTrack}>
          {copy.ribbon.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
