"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
};

export function Reveal({ children, className }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    let revealTimeout = 0;

    if (!node) {
      return undefined;
    }

    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return undefined;
    }

    revealTimeout = window.setTimeout(() => {
      setIsVisible(true);
    }, 90);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          window.clearTimeout(revealTimeout);
          observer.disconnect();
        }
      },
      {
        rootMargin: "0px 0px 18% 0px",
        threshold: 0.01
      }
    );

    observer.observe(node);

    return () => {
      window.clearTimeout(revealTimeout);
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className={`fade-up ${isVisible ? "is-visible" : ""} ${className ?? ""}`.trim()}>
      {children}
    </div>
  );
}
