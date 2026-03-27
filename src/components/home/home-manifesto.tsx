import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/ui/reveal";

import styles from "./home-manifesto.module.css";

type PhilosophyHighlight = {
  title: string;
  copy: string;
};

type HomeManifestoProps = {
  highlights: PhilosophyHighlight[];
};

export function HomeManifesto({ highlights }: HomeManifestoProps) {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.layout}`}>
        <Reveal className={styles.mediaColumn}>
          <figure className={styles.mainImage} data-cursor-label="Service">
            <Image
              src="/images/people/bleu-maree-team-service-in-action.jpg"
              alt="Service en salle chez Bleu Marée"
              fill
              sizes="(max-width: 1080px) 100vw, 48vw"
              className={styles.image}
            />
          </figure>

          <figure className={styles.detailImage} data-cursor-label="Table">
            <Image
              src="/images/details/bleu-maree-detail-table-setting-alt-01.jpg"
              alt="Détail de table chez Bleu Marée"
              fill
              sizes="(max-width: 1080px) 68vw, 18vw"
              className={styles.image}
            />
          </figure>
        </Reveal>

        <div className={styles.storyColumn}>
          <Reveal className={styles.introBlock}>
            <div className="eyebrow">Manifeste</div>
            <h2 className={styles.title}>Plus de silence, plus de lumière, plus de tenue.</h2>
            <p className={styles.lead}>
              Bleu Marée affirme une hospitalité précise, contemporaine et enveloppante. La salle,
              le service et le rythme du dîner composent une expérience pensée pour rester sobre,
              fluide et mémorable.
            </p>

            <Link href="/restaurant" className="button-ghost" data-cursor-label="Histoire">
              Découvrir la maison
            </Link>
          </Reveal>

          <div className={styles.storyList}>
            {highlights.map((item, index) => (
              <Reveal key={item.title} className={styles.storyRow}>
                <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
                <div className={styles.storyCopy}>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
