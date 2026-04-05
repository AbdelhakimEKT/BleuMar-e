import Image from "next/image";
import Link from "next/link";

import type { Locale } from "@/i18n/config";
import { withLocale } from "@/i18n/routing";

import { HomeReveal } from "./home-reveal";
import styles from "./home-founder-note.module.css";

type HomeFounderNoteProps = {
  locale: Locale;
};

const founderCopy = {
  fr: {
    eyebrow: "Le mot du fondateur",
    title: "J'ai ouvert Bleu Marée pour recevoir comme j'aime être reçu.",
    lead:
      "Avec du goût, du calme, de la lumière, et pas une seule chose de trop.",
    lines: [
      "Une assiette doit donner envie avant de demander des mots.",
      "Le service doit tenir la soirée, pas prendre la place.",
      "Si un geste ne sert ni le goût ni le calme, il n'a rien à faire ici."
    ],
    closing: "Le reste n'est qu'affaire de tenue.",
    signature: "Bleu Marée, Biarritz",
    action: "Entrer dans la maison",
    imageAlt: "Portrait en cuisine pour Bleu Maree",
    caption: "Une maison habitée se reconnaît à ce qu'elle laisse sentir."
  },
  en: {
    eyebrow: "A word from the founder",
    title: "I opened Bleu Maree to receive people the way I like to be received.",
    lead:
      "With taste, calm, light, and not one thing too many.",
    lines: [
      "A plate should create desire before it asks for words.",
      "Service should hold the evening, not take its place.",
      "If a gesture serves neither taste nor calm, it has no place here."
    ],
    closing: "Everything else is simply a matter of hold.",
    signature: "Bleu Maree, Biarritz",
    action: "Enter the house",
    imageAlt: "Kitchen portrait for Bleu Maree",
    caption: "A lived-in house is known by what it lets you feel."
  }
} as const;

export function HomeFounderNote({ locale }: HomeFounderNoteProps) {
  const copy = founderCopy[locale];

  return (
    <section className={`section section-surface--light section--light ${styles.section}`}>
      <div className={`container ${styles.layout}`}>
        <HomeReveal className={styles.copy}>
          <div className="eyebrow">{copy.eyebrow}</div>
          <h2 className={styles.title}>{copy.title}</h2>
          <p className={styles.lead}>{copy.lead}</p>

          <div className={styles.lineList}>
            {copy.lines.map((line, index) => (
              <p key={line} className={styles.lineItem}>
                <span className={styles.lineIndex}>{String(index + 1).padStart(2, "0")}</span>
                <span>{line}</span>
              </p>
            ))}
          </div>

          <div className={styles.closingBlock}>
            <p className={styles.closing}>{copy.closing}</p>
            <p className={styles.signature}>{copy.signature}</p>
          </div>

          <div className={styles.actions}>
            <Link href={withLocale(locale, "/restaurant")} className="button-ghost">
              {copy.action}
            </Link>
          </div>
        </HomeReveal>

        <HomeReveal className={styles.mediaColumn} variant="soft" delay={0.08}>
          <figure className={styles.figure}>
            <Image
              src="/images/people/bleu-maree-chef-portrait.jpg"
              alt={copy.imageAlt}
              fill
              sizes="(max-width: 1080px) 100vw, 44vw"
              className={styles.image}
            />
          </figure>

          <div className={styles.captionPanel}>
            <p>{copy.caption}</p>
          </div>
        </HomeReveal>
      </div>
    </section>
  );
}
