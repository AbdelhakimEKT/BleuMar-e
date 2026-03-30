"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

import type { GalleryAspect, GalleryCategory, GalleryItem } from "@/content/gallery";
import type { Locale } from "@/i18n/config";

import { Reveal } from "@/components/ui/reveal";

import styles from "./editorial-gallery.module.css";

type EditorialGalleryProps = {
  locale: Locale;
  opening: {
    eyebrow: string;
    title: string;
    lead: string;
  };
  sequences: Record<
    GalleryCategory,
    {
      eyebrow: string;
      title: string;
      lead: string;
    }
  >;
  archive: {
    eyebrow: string;
    title: string;
    lead: string;
  };
  items: GalleryItem[];
};

type GalleryCardProps = {
  item: GalleryItem;
  locale: Locale;
  variant?: "feature" | "support" | "primary" | "secondary" | "archive";
  priority?: boolean;
  onOpen: (id: string) => void;
};

const categoryOrder: GalleryCategory[] = ["room", "service", "plates", "details"];

const galleryUi = {
  fr: {
    open: "Ouvrir l'image",
    close: "Fermer",
    next: "Image suivante",
    previous: "Image précédente",
    lightboxLabel: "Visionneuse d'images",
    current: "Image"
  },
  en: {
    open: "Open image",
    close: "Close",
    next: "Next image",
    previous: "Previous image",
    lightboxLabel: "Image viewer",
    current: "Image"
  }
} as const;

function getItemKey(item: GalleryItem) {
  return item.id;
}

function getAspectClass(aspect: GalleryAspect) {
  switch (aspect) {
    case "wide":
      return styles.cardWide;
    case "portrait":
      return styles.cardPortrait;
    case "square":
      return styles.cardSquare;
    case "landscape":
    default:
      return styles.cardLandscape;
  }
}

function GalleryCard({
  item,
  locale,
  variant = "secondary",
  priority = false,
  onOpen
}: GalleryCardProps) {
  const [hasError, setHasError] = useState(false);
  const [displaySrc, setDisplaySrc] = useState(item.image);
  const copy = galleryUi[locale];
  const isCompact = variant === "support" || variant === "secondary" || variant === "archive";

  useEffect(() => {
    setDisplaySrc(item.image);
    setHasError(false);
  }, [item.fallbackImage, item.image]);

  const handleImageError = () => {
    if (item.fallbackImage && displaySrc !== item.fallbackImage) {
      setDisplaySrc(item.fallbackImage);
      return;
    }

    setHasError(true);
  };

  return (
    <button
      type="button"
      className={[
        styles.card,
        getAspectClass(item.aspect),
        variant === "feature" ? styles.cardFeature : "",
        variant === "support" ? styles.cardSupport : "",
        variant === "primary" ? styles.cardPrimary : "",
        variant === "archive" ? styles.cardArchive : "",
        isCompact ? styles.cardCompact : ""
      ]
        .filter(Boolean)
        .join(" ")}
      onClick={() => onOpen(item.id)}
      aria-label={`${copy.open}: ${item.title}`}
      data-cursor-label={copy.open}
    >
      <div
        className={styles.cardBasePhoto}
        aria-hidden="true"
        style={{
          backgroundImage: `url("${item.fallbackImage ?? item.image}")`,
          backgroundPosition: item.objectPosition ?? "50% 50%"
        }}
      />

      {!hasError ? (
        <Image
          src={displaySrc}
          alt={item.alt}
          fill
          priority={priority}
          loading={variant === "archive" ? "lazy" : "eager"}
          className={styles.cardImage}
          sizes={
            variant === "feature"
              ? "(max-width: 900px) 100vw, 64vw"
              : variant === "archive"
                ? "(max-width: 900px) 100vw, 25vw"
                : "(max-width: 900px) 100vw, 50vw"
          }
          style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
          onError={handleImageError}
        />
      ) : (
        <div className={styles.cardFallback} aria-hidden="true" />
      )}

      <div className={`${styles.cardOverlay} ${isCompact ? styles.cardOverlayCompact : ""}`}>
        <div className={`${styles.cardCopy} ${isCompact ? styles.cardCopyCompact : ""}`}>
          <span className={`${styles.cardTitle} ${isCompact ? styles.cardTitleCompact : ""}`}>
            {item.title}
          </span>
          {!isCompact ? <span className={styles.cardCaption}>{item.caption}</span> : null}
        </div>
      </div>
    </button>
  );
}

export function EditorialGallery({
  locale,
  opening,
  sequences,
  archive,
  items
}: EditorialGalleryProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [lightboxHasError, setLightboxHasError] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const touchStartX = useRef<number | null>(null);
  const copy = galleryUi[locale];

  const orderedItems = useMemo(
    () => [...items].sort((left, right) => left.priority - right.priority),
    [items]
  );

  const openingSelection = useMemo(() => {
    const primary = orderedItems.find((item) => item.featured) ?? orderedItems[0];

    if (!primary) {
      return {
        primary: null,
        support: [] as GalleryItem[]
      };
    }

    const support: GalleryItem[] = [];
    const usedCategories = new Set<GalleryCategory>([primary.category]);

    for (const item of orderedItems) {
      if (item.id === primary.id || !item.featured || usedCategories.has(item.category)) {
        continue;
      }

      support.push(item);
      usedCategories.add(item.category);

      if (support.length === 2) {
        break;
      }
    }

    for (const item of orderedItems) {
      if (support.length === 2 || item.id === primary.id || support.some((entry) => entry.id === item.id)) {
        continue;
      }

      support.push(item);
    }

    return {
      primary,
      support: support.slice(0, 2)
    };
  }, [orderedItems]);

  const openingIds = useMemo(
    () =>
      new Set(
        [openingSelection.primary, ...openingSelection.support]
          .filter(Boolean)
          .map((item) => (item ? item.id : ""))
      ),
    [openingSelection.primary, openingSelection.support]
  );

  const sequenceSelections = useMemo(
    () =>
      categoryOrder.map((category) => {
        const categoryItems = orderedItems.filter((item) => item.category === category);
        const withoutOpening = categoryItems.filter((item) => !openingIds.has(item.id));
        const selectedItems = (withoutOpening.length > 0 ? withoutOpening : categoryItems).slice(
          0,
          category === "plates" ? 5 : 4
        );

        return {
          category,
          items: selectedItems
        };
      }),
    [openingIds, orderedItems]
  );

  const sequenceIds = useMemo(
    () =>
      new Set(sequenceSelections.flatMap((group) => group.items.map((item) => item.id))),
    [sequenceSelections]
  );

  const archiveItems = useMemo(
    () =>
      orderedItems.filter((item) => !openingIds.has(item.id) && !sequenceIds.has(item.id)),
    [openingIds, orderedItems, sequenceIds]
  );

  const activeIndex = activeId ? orderedItems.findIndex((item) => item.id === activeId) : -1;
  const activeItem = activeIndex >= 0 ? orderedItems[activeIndex] : null;

  useEffect(() => {
    setLightboxHasError(false);
    setLightboxSrc(activeItem?.image ?? null);
  }, [activeId]);

  useEffect(() => {
    if (!activeItem) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveId(null);
        return;
      }

      if (event.key === "ArrowRight") {
        setActiveId(orderedItems[(activeIndex + 1) % orderedItems.length]?.id ?? null);
        return;
      }

      if (event.key === "ArrowLeft") {
        const nextIndex = (activeIndex - 1 + orderedItems.length) % orderedItems.length;
        setActiveId(orderedItems[nextIndex]?.id ?? null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, activeItem, orderedItems]);

  const navigate = (direction: 1 | -1) => {
    if (!activeItem) {
      return;
    }

    const nextIndex =
      direction === 1
        ? (activeIndex + 1) % orderedItems.length
        : (activeIndex - 1 + orderedItems.length) % orderedItems.length;

    setActiveId(orderedItems[nextIndex]?.id ?? null);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) {
      return;
    }

    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const delta = endX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(delta) < 48) {
      return;
    }

    navigate(delta < 0 ? 1 : -1);
  };

  return (
    <div className={styles.experience}>
      {openingSelection.primary ? (
        <Reveal>
          <section className={styles.opening}>
            <div className={styles.openingMain}>
              <div className={styles.openingIntro}>
                <p className="eyebrow">{opening.eyebrow}</p>
                <h2 className={styles.openingTitle}>{opening.title}</h2>
                <p className={styles.openingLead}>{opening.lead}</p>
              </div>

              <GalleryCard
                item={openingSelection.primary}
                locale={locale}
                variant="feature"
                priority
                onOpen={setActiveId}
              />
            </div>

            <div className={styles.openingSupport}>
              {openingSelection.support.map((item) => (
                <GalleryCard
                  key={item.id}
                  item={item}
                  locale={locale}
                  variant="support"
                  priority={item.priority <= 4}
                  onOpen={setActiveId}
                />
              ))}
            </div>
          </section>
        </Reveal>
      ) : null}

      <Reveal>
        <nav className={styles.anchorRail} aria-label={locale === "fr" ? "Séquences visuelles" : "Visual sequences"}>
          {categoryOrder.map((category, index) => (
            <a key={category} href={`#gallery-${category}`} className={styles.anchorChip}>
              <span className={styles.anchorIndex}>{(index + 1).toString().padStart(2, "0")}</span>
              <span>{sequences[category].eyebrow}</span>
            </a>
          ))}
        </nav>
      </Reveal>

      {sequenceSelections.map(({ category, items: categoryItems }) => {
        if (categoryItems.length === 0) {
          return null;
        }

        const [primary, ...secondary] = categoryItems;
        const copyForCategory = sequences[category];

        return (
          <Reveal key={category}>
            <section id={`gallery-${category}`} className={styles.sequenceSection}>
              <div className={styles.sequenceHeader}>
                <div>
                  <p className="eyebrow">{copyForCategory.eyebrow}</p>
                  <h3 className={styles.sequenceTitle}>{copyForCategory.title}</h3>
                </div>
                <p className={styles.sequenceLead}>{copyForCategory.lead}</p>
              </div>

              <div className={styles.sequenceGrid}>
                <GalleryCard item={primary} locale={locale} variant="primary" onOpen={setActiveId} />

                {secondary.length > 0 ? (
                  <div className={styles.sequenceSecondary}>
                    {secondary.map((item) => (
                      <GalleryCard
                        key={item.id}
                        item={item}
                        locale={locale}
                        variant="secondary"
                        onOpen={setActiveId}
                      />
                    ))}
                  </div>
                ) : null}
              </div>
            </section>
          </Reveal>
        );
      })}

      {archiveItems.length > 0 ? (
        <Reveal>
          <section className={styles.archiveSection}>
            <div className={styles.archiveHeader}>
              <p className="eyebrow">{archive.eyebrow}</p>
              <h3 className={styles.sequenceTitle}>{archive.title}</h3>
              <p className={styles.sequenceLead}>{archive.lead}</p>
            </div>

            <div className={styles.archiveGrid}>
              {archiveItems.map((item) => (
                <GalleryCard
                  key={item.id}
                  item={item}
                  locale={locale}
                  variant="archive"
                  onOpen={setActiveId}
                />
              ))}
            </div>
          </section>
        </Reveal>
      ) : null}

      {activeItem ? (
        <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label={copy.lightboxLabel}>
          <button
            type="button"
            className={styles.lightboxBackdrop}
            aria-label={copy.close}
            onClick={() => setActiveId(null)}
          />

          <div
            className={styles.lightboxPanel}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <button
              type="button"
              className={`${styles.lightboxControl} ${styles.lightboxClose}`}
              aria-label={copy.close}
              onClick={() => setActiveId(null)}
            >
              {copy.close}
            </button>

            <button
              type="button"
              className={`${styles.lightboxControl} ${styles.lightboxPrev}`}
              aria-label={copy.previous}
              onClick={() => navigate(-1)}
            >
              ‹
            </button>

            <button
              type="button"
              className={`${styles.lightboxControl} ${styles.lightboxNext}`}
              aria-label={copy.next}
              onClick={() => navigate(1)}
            >
              ›
            </button>

            <div className={styles.lightboxFrame}>
              {!lightboxHasError ? (
                <Image
                  src={lightboxSrc ?? activeItem.image}
                  alt={activeItem.alt}
                  fill
                  priority
                  className={styles.lightboxImage}
                  sizes="100vw"
                  style={activeItem.objectPosition ? { objectPosition: activeItem.objectPosition } : undefined}
                  onError={() => {
                    if (activeItem.fallbackImage && lightboxSrc !== activeItem.fallbackImage) {
                      setLightboxSrc(activeItem.fallbackImage);
                      return;
                    }

                    setLightboxHasError(true);
                  }}
                />
              ) : (
                <div className={styles.cardFallback} aria-hidden="true" />
              )}
            </div>

            <div className={styles.lightboxMeta}>
              <div>
                <p className={styles.lightboxTitle}>{activeItem.title}</p>
                <p className={styles.lightboxCaption}>{activeItem.caption}</p>
              </div>
              <span className={styles.lightboxCount}>
                {copy.current} {activeIndex + 1} / {orderedItems.length}
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
