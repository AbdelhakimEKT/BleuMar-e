import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/ui/reveal";

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
};

export function HomeSignatureSpread({ dishes }: HomeSignatureSpreadProps) {
  const featuredDish = dishes[0];

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
              alt="Dessert signature Bleu Marée"
              fill
              sizes="(max-width: 1080px) 72vw, 20vw"
              className={styles.image}
            />
          </figure>
        </Reveal>

        <div className={styles.copyColumn}>
          <Reveal>
            <div className="eyebrow">Plats signature</div>
            <h2 className={styles.title}>L’image doit donner faim avant de raconter quoi que ce soit.</h2>
            <p className={styles.lead}>
              Chaque assiette est construite pour faire dialoguer l’iode, la matière et la lumière.
              Les visuels prolongent cette sensation et donnent à voir une cuisine nette, précise et
              profondément désirable.
            </p>
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
            <Link href="/menus" className="button" data-cursor-label="Carte">
              Voir les menus
            </Link>
            <Link href="/galerie" className="button-ghost" data-cursor-label="Galerie">
              Explorer la galerie
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
