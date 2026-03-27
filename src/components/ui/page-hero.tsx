import Image from "next/image";

import { Reveal } from "@/components/ui/reveal";

import styles from "./page-hero.module.css";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
};

export function PageHero({ eyebrow, title, intro, image }: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <Image
        src={image}
        alt={title}
        fill
        priority
        className={styles.background}
        sizes="100vw"
      />
      <div className={styles.overlay} />
      <div className={`container ${styles.inner}`}>
        <Reveal className={styles.copy}>
          <div className="eyebrow">{eyebrow}</div>
          <h1 className="page-title">{title}</h1>
          <p className="lead">{intro}</p>
        </Reveal>
      </div>
    </section>
  );
}
