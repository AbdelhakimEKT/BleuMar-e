"use client";

import Image from "next/image";
import Link from "next/link";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";

import type { Locale } from "@/i18n/config";
import { withLocale } from "@/i18n/routing";

import styles from "./immersive-home-hero.module.css";

type HeroContent = {
  eyebrow: string;
  title: string;
  intro: string;
  primaryCta: { href: string; label: string };
  secondaryCta: { href: string; label: string };
  image: string;
  houseNote: string;
  highlights: string[];
};

type ImmersiveHomeHeroProps = {
  content: HeroContent;
  locale: Locale;
};

const homeHeroCopy = {
  fr: {
    imageAlt: "Salle Bleu Marée baignée dans une lumière du soir",
    noteLabel: "Ce que l'on sent d'abord",
    noteTitle: "Une soirée tenue, jamais figée."
  },
  en: {
    imageAlt: "Bleu Maree dining room bathed in evening light",
    noteLabel: "What you feel first",
    noteTitle: "An evening held, never frozen."
  }
} as const;

const heroEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function ImmersiveHomeHero({
  content,
  locale
}: ImmersiveHomeHeroProps) {
  const copy = homeHeroCopy[locale];
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const backgroundScale = useSpring(useTransform(scrollYProgress, [0, 0.32], [1, 1.06]), {
    stiffness: 120,
    damping: 26,
    mass: 0.8
  });
  const backgroundY = useSpring(useTransform(scrollYProgress, [0, 0.32], [0, 44]), {
    stiffness: 110,
    damping: 30,
    mass: 0.8
  });
  const asideY = useSpring(useTransform(scrollYProgress, [0, 0.32], [0, -18]), {
    stiffness: 100,
    damping: 28,
    mass: 0.85
  });
  const asideOpacity = useSpring(useTransform(scrollYProgress, [0, 0.28], [1, 0.78]), {
    stiffness: 110,
    damping: 28,
    mass: 0.9
  });

  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.backgroundWrap}
        style={
          reduceMotion
            ? undefined
            : {
                scale: backgroundScale,
                y: backgroundY
              }
        }
      >
        <Image
          src={content.image}
          alt={copy.imageAlt}
          fill
          priority
          sizes="100vw"
          className={styles.background}
        />
      </motion.div>
      <div className={styles.overlay} />

      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <motion.div
            className="eyebrow"
            initial={reduceMotion ? false : { opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: heroEase, delay: 0.06 }}
          >
            {content.eyebrow}
          </motion.div>

          <motion.h1
            className={styles.title}
            initial={reduceMotion ? false : { opacity: 0, y: 34, filter: "blur(16px)" }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.95, ease: heroEase, delay: 0.13 }}
          >
            {content.title}
          </motion.h1>

          <motion.p
            className={styles.intro}
            initial={reduceMotion ? false : { opacity: 0, y: 22, filter: "blur(12px)" }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.82, ease: heroEase, delay: 0.22 }}
          >
            {content.intro}
          </motion.p>

          <motion.div
            className={styles.ctaRow}
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.78, ease: heroEase, delay: 0.3 }}
          >
            <Link
              href={withLocale(locale, content.primaryCta.href)}
              className="button"
              data-cursor-label={content.primaryCta.label}
            >
              {content.primaryCta.label}
            </Link>
            <Link
              href={withLocale(locale, content.secondaryCta.href)}
              className="button-secondary"
              data-cursor-label={content.secondaryCta.label}
            >
              {content.secondaryCta.label}
            </Link>
          </motion.div>

          <motion.ul
            className={styles.signalRail}
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.82, ease: heroEase, delay: 0.36 }}
          >
            {content.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </motion.ul>
        </div>

        <motion.aside
          className={styles.aside}
          initial={reduceMotion ? false : { opacity: 0, x: 22, y: 24, filter: "blur(14px)" }}
          animate={reduceMotion ? undefined : { opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.92, ease: heroEase, delay: 0.3 }}
          style={
            reduceMotion
              ? undefined
              : {
                  y: asideY,
                  opacity: asideOpacity
                }
          }
        >
          <div className={styles.notePanel}>
            <p className={styles.noteLabel}>{copy.noteLabel}</p>
            <h2 className={styles.noteTitle}>{copy.noteTitle}</h2>
            <p className={styles.noteCopy}>{content.houseNote}</p>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
