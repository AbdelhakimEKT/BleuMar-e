"use client";

import { useEffect, useRef, useState } from "react";

import styles from "./signature-cursor.module.css";

const INTERACTIVE_SELECTOR = "[data-cursor-label], a, button";

function isInteractiveTarget(target: EventTarget | null) {
  if (!(target instanceof Element)) {
    return false;
  }

  return Boolean(target.closest(INTERACTIVE_SELECTOR));
}

export function SignatureCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const isVisibleRef = useRef(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const prefersCoarsePointer = window.matchMedia("(hover: none), (pointer: coarse)").matches;

    if (prefersReducedMotion || prefersCoarsePointer) {
      return undefined;
    }

    const animate = () => {
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.18;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.18;

      cursorRef.current?.style.setProperty("--cursor-x", `${currentRef.current.x}px`);
      cursorRef.current?.style.setProperty("--cursor-y", `${currentRef.current.y}px`);

      animationFrameRef.current = window.requestAnimationFrame(animate);
    };

    const handlePointerMove = (event: PointerEvent) => {
      targetRef.current = { x: event.clientX, y: event.clientY };

      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }

      setIsInteractive(isInteractiveTarget(event.target));
    };

    const handlePointerLeave = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
    };

    const handlePointerOver = (event: PointerEvent) => setIsInteractive(isInteractiveTarget(event.target));

    const handleWindowBlur = () => {
      isVisibleRef.current = false;
      setIsVisible(false);
    };

    animationFrameRef.current = window.requestAnimationFrame(animate);

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("pointerover", handlePointerOver, { passive: true });
    window.addEventListener("blur", handleWindowBlur);

    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }

      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("pointerover", handlePointerOver);
      window.removeEventListener("blur", handleWindowBlur);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className={[
        styles.cursor,
        isVisible ? styles.cursorVisible : "",
        isInteractive ? styles.cursorInteractive : ""
      ].join(" ")}
    />
  );
}
