"use client";

import Image from "next/image";
import { startTransition, useEffect, useState } from "react";

import styles from "./editorial-menu-experience.module.css";

type MenuChapterGalleryProps = {
  title: string;
  images: Array<{
    src: string;
    position?: string;
  }>;
  fallbackImage?: {
    src: string;
    position?: string;
  };
  autoplay?: boolean;
};

const ROTATION_MS = 4200;

export function MenuChapterGallery({
  title,
  images,
  fallbackImage,
  autoplay = false
}: MenuChapterGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [failedSources, setFailedSources] = useState<string[]>([]);
  const sourceKey = `${images.map((image) => image.src).join("|")}::${fallbackImage?.src ?? ""}`;
  const availableImages = images.filter((image) => !failedSources.includes(image.src));
  const fallbackImages =
    availableImages.length === 0 && fallbackImage && !failedSources.includes(fallbackImage.src)
      ? [fallbackImage]
      : [];
  const displayImages = availableImages.length > 0 ? availableImages : fallbackImages;
  const hasMultipleImages = availableImages.length > 1;
  const basePhoto = fallbackImage ?? displayImages[activeIndex] ?? displayImages[0];

  useEffect(() => {
    setActiveIndex(0);
    setFailedSources([]);
  }, [sourceKey]);

  useEffect(() => {
    if (displayImages.length === 0) {
      return;
    }

    if (activeIndex >= displayImages.length) {
      setActiveIndex(0);
    }
  }, [activeIndex, displayImages.length]);

  useEffect(() => {
    if (!hasMultipleImages || !autoplay) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      startTransition(() => {
        setActiveIndex((current) => (current + 1) % availableImages.length);
      });
    }, ROTATION_MS);

    return () => window.clearInterval(interval);
  }, [autoplay, availableImages.length, hasMultipleImages]);

  const handleImageError = (src: string) => {
    setFailedSources((current) => (current.includes(src) ? current : [...current, src]));
  };

  return (
    <div className={styles.mediaFrame}>
      {basePhoto ? (
        <div
          className={styles.mediaBasePhoto}
          aria-hidden="true"
          style={{
            backgroundImage: `url(${basePhoto.src})`,
            backgroundPosition: basePhoto.position ?? "50% 50%"
          }}
        />
      ) : null}

      {displayImages.length > 0 ? (
        displayImages.map((image, index) => (
          <Image
            key={image.src}
            src={image.src}
            alt={`${title} Bleu Marée`}
            fill
            sizes="(max-width: 1100px) 100vw, 960px"
            className={`${styles.mediaImage} ${index === activeIndex ? styles.mediaImageActive : ""}`}
            priority={index === 0}
            style={image.position ? { objectPosition: image.position } : undefined}
            onError={() => handleImageError(image.src)}
          />
        ))
      ) : (
        <div className={styles.mediaFallback} aria-hidden="true" />
      )}

      {hasMultipleImages ? (
        <div className={styles.galleryControls}>
          <div className={styles.galleryDots} aria-label={`Galerie ${title}`}>
            {availableImages.map((image, index) => (
              <button
                key={`${image.src}-${index}`}
                type="button"
                aria-label={`${title} visuel ${index + 1}`}
                aria-pressed={index === activeIndex}
                className={`${styles.galleryDot} ${index === activeIndex ? styles.galleryDotActive : ""}`}
                onClick={() => startTransition(() => setActiveIndex(index))}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
