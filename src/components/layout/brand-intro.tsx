"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import styles from "./brand-intro.module.css";

const INTRO_STORAGE_KEY = "bleu-maree-intro-seen";
const INTRO_DURATION_MS = 1650;

export function BrandIntro() {
  const timeoutRef = useRef<number | null>(null);
  const [isActive, setIsActive] = useState(false);

  const stopIntro = useCallback(() => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    document.body.classList.remove("brand-intro-active");
    setIsActive(false);
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      return undefined;
    }

    const hasSeenIntro = window.sessionStorage.getItem(INTRO_STORAGE_KEY) === "true";

    if (hasSeenIntro) {
      return undefined;
    }

    setIsActive(true);
    document.body.classList.add("brand-intro-active");
    window.sessionStorage.setItem(INTRO_STORAGE_KEY, "true");

    timeoutRef.current = window.setTimeout(stopIntro, INTRO_DURATION_MS);

    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }

      document.body.classList.remove("brand-intro-active");
    };
  }, [stopIntro]);

  if (!isActive) {
    return null;
  }

  return (
    <div className={styles.overlay} aria-hidden="true" onPointerDown={stopIntro}>
      <div className={styles.glow} />
      <div className={styles.wordmark}>
        <span className={styles.mark}>BM</span>
        <div className={styles.copy}>
          <strong>BLEU MARÉE</strong>
          <span>BIARRITZ</span>
        </div>
      </div>
      <div className={styles.rule} />
    </div>
  );
}
