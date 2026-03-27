"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { navigation } from "@/content/site";

import styles from "./site-header.module.css";

type SiteHeaderClientProps = {
  name: string;
  location: string;
};

export function SiteHeaderClient({ name, location }: SiteHeaderClientProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} aria-label={`Retour à l'accueil ${name}`}>
          <span className={styles.brandMark}>BM</span>
          <span className={styles.brandCopy}>
            <strong>{name}</strong>
            <span>{location}</span>
          </span>
        </Link>

        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setIsOpen((current) => !current)}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
        >
          Menu
        </button>

        <nav
          id="primary-navigation"
          className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}
          aria-label="Navigation principale"
        >
          {navigation.map((item) => {
            const isActive = item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
              >
                {item.label}
              </Link>
            );
          })}

          <Link href="/reservation" className="button">
            Réserver
          </Link>
        </nav>
      </div>
    </header>
  );
}
