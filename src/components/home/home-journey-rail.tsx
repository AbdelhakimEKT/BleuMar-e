import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/ui/reveal";

import styles from "./home-journey-rail.module.css";

type GuestJourneyStep = {
  title: string;
  copy: string;
};

type HomeJourneyRailProps = {
  steps: GuestJourneyStep[];
};

export function HomeJourneyRail({ steps }: HomeJourneyRailProps) {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.layout}`}>
        <Reveal className={styles.intro}>
          <div className="eyebrow">Expérience client</div>
          <h2 className={styles.title}>Le premium se sent dans le geste, puis dans le récit.</h2>
          <p className={styles.lead}>
            Une table d’exception se construit dans l’attention portée au détail: l’accueil, le
            rythme du service, le geste juste et le souvenir laissé après la dernière assiette.
          </p>
        </Reveal>

        <Reveal>
          <figure className={styles.heroFrame} data-cursor-label="Cuisine">
            <Image
              src="/images/experience/bleu-maree-chef-plating-action-alt.jpg"
              alt="Chef Bleu Marée au dressage"
              fill
              sizes="100vw"
              className={styles.image}
            />
          </figure>
        </Reveal>

        <div className={styles.steps}>
          {steps.map((step, index) => (
            <Reveal key={step.title} className={styles.step}>
              <div className={styles.stepIndex}>{String(index + 1).padStart(2, "0")}</div>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className={styles.actionRow}>
          <Link href="/reservation" className="button" data-cursor-label="Réserver">
            Préparer une réservation
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
