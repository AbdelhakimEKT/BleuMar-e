import { cache } from "react";

import { getExperiencesContent } from "@/content/experiences";
import { getGalleryContent } from "@/content/gallery";
import type { GalleryItem } from "@/content/gallery";
import { getHomeContent } from "@/content/home";
import { getMenusContent } from "@/content/menus";
import { getSiteConfig } from "@/content/site";
import type { Locale } from "@/i18n/config";
import { safeSanityFetch } from "@/sanity/lib/client";
import { resolveSanityImageUrl } from "@/sanity/lib/image";
import {
  experiencesPageQuery,
  galleryPageQuery,
  homePageQuery,
  menusPageQuery,
  siteSettingsQuery
} from "@/sanity/queries";

export type SiteSettingsData = ReturnType<typeof getSiteConfig>;
export type HomePageData = ReturnType<typeof getHomeContent>;
export type MenusPageData = Pick<ReturnType<typeof getMenusContent>, "menuSections" | "menuNotes">;
export type ExperiencesPageData = Pick<
  ReturnType<typeof getExperiencesContent>,
  "upcomingExperiences" | "privateDiningPoints" | "seasonalMoments"
>;
export type GalleryPageData = Pick<ReturnType<typeof getGalleryContent>, "galleryItems">;

export const getSiteSettingsData = cache(async (locale: Locale = "fr"): Promise<SiteSettingsData> => {
  const fallback = getSiteConfig(locale);
  const data = await safeSanityFetch<any>(siteSettingsQuery);

  if (!data) {
    return fallback;
  }

  return {
    ...fallback,
    name: data.name ?? fallback.name,
    location: data.location ?? fallback.location,
    url: data.url ?? fallback.url,
    email: data.email ?? fallback.email,
    phoneDisplay: data.phoneDisplay ?? fallback.phoneDisplay,
    phoneRaw: data.phoneRaw ?? fallback.phoneRaw,
    addressLineOne: data.addressLineOne ?? fallback.addressLineOne,
    addressLineTwo: data.addressLineTwo ?? fallback.addressLineTwo,
    mapUrl: data.mapUrl ?? fallback.mapUrl,
    bookingProvider: data.bookingProvider ?? fallback.bookingProvider,
    bookingLink: data.bookingLink ?? fallback.bookingLink,
    tagline: locale === "fr" ? data.tagline ?? fallback.tagline : fallback.tagline,
    description: locale === "fr" ? data.description ?? fallback.description : fallback.description,
    bookingNote: locale === "fr" ? data.bookingNote ?? fallback.bookingNote : fallback.bookingNote,
    openingHours:
      locale === "fr" &&
      Array.isArray(data.openingHours) &&
      data.openingHours.length > 0
        ? data.openingHours.map((item: any) => ({
            day: item.day ?? "",
            hours: item.hours ?? ""
          }))
        : fallback.openingHours,
    reservationHighlights:
      locale === "fr" &&
      Array.isArray(data.reservationHighlights) &&
      data.reservationHighlights.length > 0
        ? data.reservationHighlights.filter(Boolean)
        : fallback.reservationHighlights
  };
});

export const getHomePageData = cache(async (locale: Locale = "fr"): Promise<HomePageData> => {
  const fallback = getHomeContent(locale);

  if (locale !== "fr") {
    return fallback;
  }

  const data = await safeSanityFetch<any>(homePageQuery);

  if (!data) {
    return fallback;
  }

  return {
    heroContent: {
      eyebrow: data.heroEyebrow ?? fallback.heroContent.eyebrow,
      title: data.heroTitle ?? fallback.heroContent.title,
      intro: data.heroIntro ?? fallback.heroContent.intro,
      houseNote: fallback.heroContent.houseNote,
      primaryCta: {
        href: data.primaryCta?.href ?? fallback.heroContent.primaryCta.href,
        label: data.primaryCta?.label ?? fallback.heroContent.primaryCta.label
      },
      secondaryCta: {
        href: data.secondaryCta?.href ?? fallback.heroContent.secondaryCta.href,
        label: data.secondaryCta?.label ?? fallback.heroContent.secondaryCta.label
      },
      image: resolveSanityImageUrl(data.heroImage, fallback.heroContent.image, 2000),
      highlights:
        Array.isArray(data.heroHighlights) && data.heroHighlights.length > 0
          ? data.heroHighlights.filter(Boolean)
          : fallback.heroContent.highlights
    },
    philosophyHighlights:
      Array.isArray(data.philosophyHighlights) && data.philosophyHighlights.length > 0
        ? data.philosophyHighlights.map((item: any) => ({
            title: item.title ?? "",
            copy: item.copy ?? ""
          }))
        : fallback.philosophyHighlights,
    signatureDishes:
      Array.isArray(data.signatureDishes) && data.signatureDishes.length > 0
        ? data.signatureDishes.map((item: any, index: number) => ({
            name: item.name ?? fallback.signatureDishes[index]?.name ?? "",
            description: item.description ?? fallback.signatureDishes[index]?.description ?? "",
            price: item.price ?? fallback.signatureDishes[index]?.price ?? "",
            tag: item.tag ?? fallback.signatureDishes[index]?.tag ?? "",
            image: resolveSanityImageUrl(
              item.image,
              fallback.signatureDishes[index]?.image ?? fallback.signatureDishes[0].image,
              1600
            )
          }))
        : fallback.signatureDishes,
    guestJourney:
      Array.isArray(data.guestJourney) && data.guestJourney.length > 0
        ? data.guestJourney.map((item: any) => ({
            title: item.title ?? "",
            copy: item.copy ?? ""
          }))
        : fallback.guestJourney,
    curatedImpressions:
      Array.isArray(data.curatedImpressions) && data.curatedImpressions.length > 0
        ? data.curatedImpressions.filter(Boolean)
        : fallback.curatedImpressions
  };
});

export const getMenusPageData = cache(async (locale: Locale = "fr"): Promise<MenusPageData> => {
  const fallback = getMenusContent(locale);

  if (locale !== "fr") {
    return {
      menuSections: fallback.menuSections,
      menuNotes: fallback.menuNotes
    };
  }

  const data = await safeSanityFetch<any>(menusPageQuery);

  if (!data) {
    return {
      menuSections: fallback.menuSections,
      menuNotes: fallback.menuNotes
    };
  }

  return {
    menuSections:
      Array.isArray(data.menuSections) && data.menuSections.length > 0
        ? data.menuSections.map((section: any) => ({
            title: section.title ?? "",
            subtitle: section.subtitle ?? "",
            priceHint: section.priceHint ?? "",
            description: section.description ?? "",
            items: Array.isArray(section.items)
              ? section.items.map((item: any) => ({
                  name: item.name ?? "",
                  description: item.description ?? "",
                  price: item.price ?? "",
                  tag: item.tag ?? undefined
                }))
              : []
          }))
        : fallback.menuSections,
    menuNotes:
      Array.isArray(data.menuNotes) && data.menuNotes.length > 0
        ? data.menuNotes.filter(Boolean)
        : fallback.menuNotes
  };
});

export const getExperiencesPageData = cache(
  async (locale: Locale = "fr"): Promise<ExperiencesPageData> => {
    const fallback = getExperiencesContent(locale);

    if (locale !== "fr") {
      return {
        upcomingExperiences: fallback.upcomingExperiences,
        privateDiningPoints: fallback.privateDiningPoints,
        seasonalMoments: fallback.seasonalMoments
      };
    }

    const data = await safeSanityFetch<any>(experiencesPageQuery);

    if (!data) {
      return {
        upcomingExperiences: fallback.upcomingExperiences,
        privateDiningPoints: fallback.privateDiningPoints,
        seasonalMoments: fallback.seasonalMoments
      };
    }

    return {
      upcomingExperiences:
        Array.isArray(data.upcomingExperiences) && data.upcomingExperiences.length > 0
          ? data.upcomingExperiences.map((item: any) => ({
              title: item.title ?? "",
              date: item.date ?? "",
              time: item.time ?? "",
              description: item.description ?? "",
              ctaLabel: item.ctaLabel ?? "Decouvrir",
              ctaHref: item.ctaHref ?? "/contact",
              image:
                fallback.upcomingExperiences.find((entry) => entry.title === item.title)?.image ??
                fallback.upcomingExperiences[0]?.image ??
                "/images/hero/bleu-maree-hero-dining-room-golden-hour-realistic.jpg",
              imageAlt:
                fallback.upcomingExperiences.find((entry) => entry.title === item.title)?.imageAlt ??
                fallback.upcomingExperiences[0]?.imageAlt ??
                "",
              imagePosition:
                fallback.upcomingExperiences.find((entry) => entry.title === item.title)
                  ?.imagePosition ?? fallback.upcomingExperiences[0]?.imagePosition
            }))
          : fallback.upcomingExperiences,
      privateDiningPoints:
        Array.isArray(data.privateDiningPoints) && data.privateDiningPoints.length > 0
          ? data.privateDiningPoints.filter(Boolean)
          : fallback.privateDiningPoints,
      seasonalMoments:
        Array.isArray(data.seasonalMoments) && data.seasonalMoments.length > 0
          ? data.seasonalMoments.map((item: any) => ({
              title: item.title ?? "",
              copy: item.copy ?? ""
            }))
          : fallback.seasonalMoments
    };
  }
);

export const getGalleryPageData = cache(async (locale: Locale = "fr"): Promise<GalleryPageData> => {
  const fallback = getGalleryContent(locale);

  if (locale !== "fr") {
    return {
      galleryItems: fallback.galleryItems
    };
  }

  const data = await safeSanityFetch<any>(galleryPageQuery);

  if (!data) {
    return {
      galleryItems: fallback.galleryItems
    };
  }

  if (!Array.isArray(data.galleryItems) || data.galleryItems.length === 0) {
    return {
      galleryItems: fallback.galleryItems
    };
  }

  const galleryItems: GalleryItem[] = [];
  const maxLength = Math.max(data.galleryItems.length, fallback.galleryItems.length);

  for (let index = 0; index < maxLength; index += 1) {
    const fallbackItem =
      fallback.galleryItems[index] ?? fallback.galleryItems[fallback.galleryItems.length - 1];

    if (!fallbackItem) {
      continue;
    }

    const item = data.galleryItems[index] ?? {};

    galleryItems.push({
      id: item._key ?? fallbackItem.id,
      title: item.title ?? fallbackItem.title,
      caption: item.caption ?? fallbackItem.caption,
      alt: item.image?.alt ?? fallbackItem.alt,
      fallbackImage: fallbackItem.fallbackImage ?? fallbackItem.image,
      category: item.category ?? fallbackItem.category,
      featured: typeof item.featured === "boolean" ? item.featured : fallbackItem.featured,
      aspect: item.aspect ?? fallbackItem.aspect,
      objectPosition: item.objectPosition ?? fallbackItem.objectPosition,
      priority: typeof item.priority === "number" ? item.priority : fallbackItem.priority,
      image: resolveSanityImageUrl(item.image, fallbackItem.image, 1600)
    });
  }

  return {
    galleryItems: galleryItems.sort((left, right) => left.priority - right.priority)
  };
});
