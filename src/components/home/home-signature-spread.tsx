import Image from "next/image";
import Link from "next/link";

import type { Locale } from "@/i18n/config";
import { withLocale } from "@/i18n/routing";

import { HomeReveal } from "./home-reveal";
import styles from "./home-signature-spread.module.css";

type SignatureDish = {
  name: string;
  description: string;
  price: string;
  tag: string;
  image: string;
};

type HomeSignatureSpreadProps = {
  dishes: SignatureDish[];
  locale: Locale;
};

const signatureSpreadCopy = {
  fr: {
    detailAlt: "Dessert signature Bleu Marée",
    eyebrow: "La carte",
    title: "Une assiette doit donner envie avant de se faire expliquer.",
    lead:
      "Produit net. Sauce tenue. Désir immédiat. Les mots peuvent attendre.",
    menus: "Voir les menus",
    gallery: "Explorer la galerie"
  },
  en: {
    detailAlt: "Bleu Maree signature dessert",
    eyebrow: "The menu",
    title: "A plate should create desire before it explains itself.",
    lead:
      "Clear ingredient. Held sauce. Immediate desire. Words can wait.",
    menus: "View menus",
    gallery: "Explore the gallery"
  }
} as const;

export function HomeSignatureSpread({ dishes, locale }: HomeSignatureSpreadProps) {
  const featuredDish = dishes[0];
  const copy = signatureSpreadCopy[locale];

  if (!featuredDish) {
    return null;
  }

  return (
    <section className={`section section-surface--light section--light ${styles.section}`}>
      <div className={`container ${styles.layout}`}>
        <HomeReveal className={styles.visualColumn} variant="soft">
          <figure className={styles.mainImage} data-cursor-label="Plat">
            <Image
              src={featuredDish.image}
              alt={featuredDish.name}
              fill
              sizes="(max-width: 1080px) 100vw, 46vw"
              className={styles.image}
            />
          </figure>

          <figure className={styles.detailImage} data-cursor-label="Dessert">
            <Image
              src="/images/desserts/bleu-maree-dessert-signature-alt.jpg"
              alt={copy.detailAlt}
              fill
              sizes="(max-width: 1080px) 72vw, 20vw"
              className={styles.image}
            />
          </figure>
        </HomeReveal>

        <div className={styles.copyColumn}>
          <HomeReveal delay={0.04}>
            <div className="eyebrow">{copy.eyebrow}</div>
            <h2 className={styles.title}>{copy.title}</h2>
            <p className={styles.lead}>{copy.lead}</p>
          </HomeReveal>

          <div className={styles.dishList}>
            {dishes.map((dish, index) => (
              <HomeReveal
                key={dish.name}
                className={styles.dishRow}
                delay={0.1 + index * 0.05}
              >
                <div className={styles.rowHead}>
                  <div>
                    <p className={styles.tag}>{dish.tag}</p>
                    <h3>{dish.name}</h3>
                  </div>
                  <strong>{dish.price}</strong>
                </div>
                <p>{dish.description}</p>
              </HomeReveal>
            ))}
          </div>

          <HomeReveal className={styles.actions} delay={0.2}>
            <Link href={withLocale(locale, "/menus")} className="button" data-cursor-label={copy.menus}>
              {copy.menus}
            </Link>
            <Link
              href={withLocale(locale, "/galerie")}
              className="button-ghost"
              data-cursor-label={copy.gallery}
            >
              {copy.gallery}
            </Link>
          </HomeReveal>
        </div>
      </div>
    </section>
  );
}
