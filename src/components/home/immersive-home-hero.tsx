import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/ui/reveal";

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
};

export function ImmersiveHomeHero({ brandName, location, content }: ImmersiveHomeHeroProps) {
  return (
    <section className={styles.hero}>
      <Image
        src={content.image}
        alt="Salle Bleu Marée baignée dans une lumière du soir"
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
            <Link href={content.primaryCta.href} className="button" data-cursor-label="Réserver">
              {content.primaryCta.label}
            </Link>
            <Link
              href={content.secondaryCta.href}
              className="button-secondary"
              data-cursor-label="Menus"
            >
              {content.secondaryCta.label}
            </Link>
          </div>

          <div className={styles.serviceNote}>
            <span className={styles.serviceNoteLabel}>Selon arrivage</span>
            <p>
              Une cuisine dictée par la saison, l’iode et le geste, pensée pour faire monter le
              désir avant même la réservation.
            </p>
          </div>
        </Reveal>

        <Reveal className={styles.meta}>
          <div className={styles.metaPanel}>
            <p className={styles.highlightLabel}>Rythme de la maison</p>
            <ul className={styles.highlightList}>
              {content.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <figure className={styles.detailFrame} data-cursor-label="Ambiance">
            <Image
              src="/images/details/bleu-maree-detail-table-setting-alt-02.jpg"
              alt="Table Bleu Marée dans une lumière de soirée"
              fill
              sizes="(max-width: 980px) 100vw, 22vw"
              className={styles.frameImage}
            />
          </figure>
        </Reveal>
      </div>

      <div className={styles.ribbon}>
        <div className={styles.ribbonTrack}>
          {[
            "Cuisine française contemporaine",
            "Produits de la mer",
            "Biarritz",
            "Menu dégustation",
            "Accords mets et vins",
            "Occasions spéciales"
          ].map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
