import Image from "next/image";

import { Reveal } from "@/components/ui/reveal";

import styles from "./page-hero.module.css";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  image: string;
  imagePosition?: string;
  markers?: string[];
  noteLabel?: string;
  note?: string;
};

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imagePosition,
  markers = [],
  noteLabel,
  note
}: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <Image
        src={image}
        alt={title}
        fill
        priority
        className={styles.background}
        sizes="100vw"
        style={imagePosition ? { objectPosition: imagePosition } : undefined}
      />
      <div className={styles.overlay} />
      <div className={`container ${styles.inner}`}>
        <Reveal className={styles.copy}>
          <div className="eyebrow">{eyebrow}</div>
          <h1 className="page-title">{title}</h1>
          <p className="lead">{intro}</p>

          {markers.length > 0 ? (
            <ul className={styles.markers}>
              {markers.map((marker) => (
                <li key={marker}>{marker}</li>
              ))}
            </ul>
          ) : null}
        </Reveal>

        {note ? (
          <Reveal className={styles.notePanel}>
            {noteLabel ? <p className={styles.noteLabel}>{noteLabel}</p> : null}
            <p className={styles.noteText}>{note}</p>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
