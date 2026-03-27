import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/ui/reveal";
import type { Locale } from "@/i18n/config";
import { withLocale } from "@/i18n/routing";

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
    eyebrow: "Plats signature",
    title: "L'image doit donner faim avant de raconter quoi que ce soit.",
    lead:
      "Chaque assiette est construite pour faire dialoguer l'iode, la matière et la lumière. Les visuels prolongent cette sensation et donnent à voir une cuisine nette, précise et profondément désirable.",
    menus: "Voir les menus",
    gallery: "Explorer la galerie"
  },
  en: {
    detailAlt: "Bleu Maree signature dessert",
    eyebrow: "Signature dishes",
    title: "The image should create hunger before it explains anything.",
    lead:
      "Each plate is designed to make iodine, texture, and light converse. The visuals extend that sensation and reveal a cuisine that is clean, precise, and deeply desirable.",
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
        <Reveal className={styles.visualColumn}>
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
        </Reveal>

        <div className={styles.copyColumn}>
          <Reveal>
            <div className="eyebrow">{copy.eyebrow}</div>
            <h2 className={styles.title}>{copy.title}</h2>
            <p className={styles.lead}>{copy.lead}</p>
          </Reveal>

          <div className={styles.dishList}>
            {dishes.map((dish) => (
              <Reveal key={dish.name} className={styles.dishRow}>
                <div className={styles.rowHead}>
                  <div>
                    <p className={styles.tag}>{dish.tag}</p>
                    <h3>{dish.name}</h3>
                  </div>
                  <strong>{dish.price}</strong>
                </div>
                <p>{dish.description}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className={styles.actions}>
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
          </Reveal>
        </div>
      </div>
    </section>
  );
}
