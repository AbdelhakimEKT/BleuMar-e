import Image from "next/image";

import styles from "./image-triptych.module.css";

type ImageTriptychItem = {
  label: string;
  image: string;
  alt: string;
  position?: string;
};

type ImageTriptychProps = {
  items: ImageTriptychItem[];
};

export function ImageTriptych({ items }: ImageTriptychProps) {
  return (
    <div className={styles.grid}>
      {items.map((item, index) => (
        <article
          key={`${item.label}-${item.image}`}
          className={`${styles.card} ${index === 0 ? styles.cardLarge : ""}`}
        >
          <Image
            src={item.image}
            alt={item.alt}
            fill
            className={styles.image}
            sizes={index === 0 ? "(max-width: 900px) 100vw, 55vw" : "(max-width: 900px) 100vw, 28vw"}
            style={item.position ? { objectPosition: item.position } : undefined}
          />
          <div className={styles.label}>{item.label}</div>
        </article>
      ))}
    </div>
  );
}
