import { cache } from "react";

import {
  curatedImpressions,
  guestJourney,
  philosophyHighlights,
  signatureDishes,
  heroContent
} from "@/content/home";
import { upcomingExperiences, privateDiningPoints, seasonalMoments } from "@/content/experiences";
import { galleryItems } from "@/content/gallery";
import { menuNotes, menuSections } from "@/content/menus";
import { siteConfig } from "@/content/site";
import { safeSanityFetch } from "@/sanity/lib/client";
import { resolveSanityImageUrl } from "@/sanity/lib/image";
import {
  experiencesPageQuery,
  galleryPageQuery,
  homePageQuery,
  menusPageQuery,
  siteSettingsQuery
} from "@/sanity/queries";

const defaultHomePageData = {
  heroContent,
  philosophyHighlights,
  signatureDishes,
  guestJourney,
  curatedImpressions
};

const defaultMenusPageData = {
  menuSections,
  menuNotes
};

const defaultExperiencesPageData = {
  upcomingExperiences,
  privateDiningPoints,
  seasonalMoments
};

const defaultGalleryPageData = {
  galleryItems
};

export type SiteSettingsData = typeof siteConfig;
export type HomePageData = typeof defaultHomePageData;
export type MenusPageData = typeof defaultMenusPageData;
export type ExperiencesPageData = typeof defaultExperiencesPageData;
export type GalleryPageData = typeof defaultGalleryPageData;

export const getSiteSettingsData = cache(async (): Promise<SiteSettingsData> => {
  const data = await safeSanityFetch<any>(siteSettingsQuery);

  if (!data) {
    return siteConfig;
  }

  return {
    ...siteConfig,
    name: data.name ?? siteConfig.name,
    location: data.location ?? siteConfig.location,
    tagline: data.tagline ?? siteConfig.tagline,
    description: data.description ?? siteConfig.description,
    url: data.url ?? siteConfig.url,
    email: data.email ?? siteConfig.email,
    phoneDisplay: data.phoneDisplay ?? siteConfig.phoneDisplay,
    phoneRaw: data.phoneRaw ?? siteConfig.phoneRaw,
    addressLineOne: data.addressLineOne ?? siteConfig.addressLineOne,
    addressLineTwo: data.addressLineTwo ?? siteConfig.addressLineTwo,
    mapUrl: data.mapUrl ?? siteConfig.mapUrl,
    bookingProvider: data.bookingProvider ?? siteConfig.bookingProvider,
    bookingLink: data.bookingLink ?? siteConfig.bookingLink,
    bookingNote: data.bookingNote ?? siteConfig.bookingNote,
    openingHours:
      Array.isArray(data.openingHours) && data.openingHours.length > 0
        ? data.openingHours.map((item: any) => ({
            day: item.day ?? "",
            hours: item.hours ?? ""
          }))
        : siteConfig.openingHours,
    reservationHighlights:
      Array.isArray(data.reservationHighlights) && data.reservationHighlights.length > 0
        ? data.reservationHighlights.filter(Boolean)
        : siteConfig.reservationHighlights
  };
});

export const getHomePageData = cache(async (): Promise<HomePageData> => {
  const data = await safeSanityFetch<any>(homePageQuery);

  if (!data) {
    return defaultHomePageData;
  }

  return {
    heroContent: {
      eyebrow: data.heroEyebrow ?? heroContent.eyebrow,
      title: data.heroTitle ?? heroContent.title,
      intro: data.heroIntro ?? heroContent.intro,
      primaryCta: {
        href: data.primaryCta?.href ?? heroContent.primaryCta.href,
        label: data.primaryCta?.label ?? heroContent.primaryCta.label
      },
      secondaryCta: {
        href: data.secondaryCta?.href ?? heroContent.secondaryCta.href,
        label: data.secondaryCta?.label ?? heroContent.secondaryCta.label
      },
      image: resolveSanityImageUrl(data.heroImage, heroContent.image, 2000),
      highlights:
        Array.isArray(data.heroHighlights) && data.heroHighlights.length > 0
          ? data.heroHighlights.filter(Boolean)
          : heroContent.highlights
    },
    philosophyHighlights:
      Array.isArray(data.philosophyHighlights) && data.philosophyHighlights.length > 0
        ? data.philosophyHighlights.map((item: any) => ({
            title: item.title ?? "",
            copy: item.copy ?? ""
          }))
        : philosophyHighlights,
    signatureDishes:
      Array.isArray(data.signatureDishes) && data.signatureDishes.length > 0
        ? data.signatureDishes.map((item: any, index: number) => ({
            name: item.name ?? signatureDishes[index]?.name ?? "",
            description: item.description ?? signatureDishes[index]?.description ?? "",
            price: item.price ?? signatureDishes[index]?.price ?? "",
            tag: item.tag ?? signatureDishes[index]?.tag ?? "",
            image: resolveSanityImageUrl(
              item.image,
              signatureDishes[index]?.image ?? signatureDishes[0].image,
              1600
            )
          }))
        : signatureDishes,
    guestJourney:
      Array.isArray(data.guestJourney) && data.guestJourney.length > 0
        ? data.guestJourney.map((item: any) => ({
            title: item.title ?? "",
            copy: item.copy ?? ""
          }))
        : guestJourney,
    curatedImpressions:
      Array.isArray(data.curatedImpressions) && data.curatedImpressions.length > 0
        ? data.curatedImpressions.filter(Boolean)
        : curatedImpressions
  };
});

export const getMenusPageData = cache(async (): Promise<MenusPageData> => {
  const data = await safeSanityFetch<any>(menusPageQuery);

  if (!data) {
    return defaultMenusPageData;
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
        : menuSections,
    menuNotes:
      Array.isArray(data.menuNotes) && data.menuNotes.length > 0
        ? data.menuNotes.filter(Boolean)
        : menuNotes
  };
});

export const getExperiencesPageData = cache(async (): Promise<ExperiencesPageData> => {
  const data = await safeSanityFetch<any>(experiencesPageQuery);

  if (!data) {
    return defaultExperiencesPageData;
  }

  return {
    upcomingExperiences:
      Array.isArray(data.upcomingExperiences) && data.upcomingExperiences.length > 0
        ? data.upcomingExperiences.map((item: any) => ({
            title: item.title ?? "",
            date: item.date ?? "",
            time: item.time ?? "",
            description: item.description ?? "",
            ctaLabel: item.ctaLabel ?? "Découvrir",
            ctaHref: item.ctaHref ?? "/contact"
          }))
        : upcomingExperiences,
    privateDiningPoints:
      Array.isArray(data.privateDiningPoints) && data.privateDiningPoints.length > 0
        ? data.privateDiningPoints.filter(Boolean)
        : privateDiningPoints,
    seasonalMoments:
      Array.isArray(data.seasonalMoments) && data.seasonalMoments.length > 0
        ? data.seasonalMoments.map((item: any) => ({
            title: item.title ?? "",
            copy: item.copy ?? ""
          }))
        : seasonalMoments
  };
});

export const getGalleryPageData = cache(async (): Promise<GalleryPageData> => {
  const data = await safeSanityFetch<any>(galleryPageQuery);

  if (!data) {
    return defaultGalleryPageData;
  }

  return {
    galleryItems:
      Array.isArray(data.galleryItems) && data.galleryItems.length > 0
        ? data.galleryItems.map((item: any, index: number) => ({
            title: item.title ?? "",
            caption: item.caption ?? "",
            image: resolveSanityImageUrl(
              item.image,
              galleryItems[index]?.image ?? galleryItems[0].image,
              1600
            )
          }))
        : galleryItems
  };
});
