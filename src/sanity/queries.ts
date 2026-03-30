import { defineQuery } from "next-sanity";

export const siteSettingsQuery = defineQuery(`
  *[_id == "siteSettings"][0]{
    name,
    location,
    tagline,
    description,
    url,
    email,
    phoneDisplay,
    phoneRaw,
    addressLineOne,
    addressLineTwo,
    mapUrl,
    bookingProvider,
    bookingLink,
    bookingNote,
    openingHours[]{
      day,
      hours
    },
    reservationHighlights
  }
`);

export const homePageQuery = defineQuery(`
  *[_id == "homePage"][0]{
    heroEyebrow,
    heroTitle,
    heroIntro,
    primaryCta{
      label,
      href
    },
    secondaryCta{
      label,
      href
    },
    heroImage{
      alt,
      asset
    },
    heroHighlights,
    philosophyHighlights[]{
      title,
      copy
    },
    signatureDishes[]{
      name,
      description,
      price,
      tag,
      image{
        alt,
        asset
      }
    },
    guestJourney[]{
      title,
      copy
    },
    curatedImpressions
  }
`);

export const menusPageQuery = defineQuery(`
  *[_id == "menusPage"][0]{
    menuSections[]{
      title,
      subtitle,
      priceHint,
      description,
      items[]{
        name,
        description,
        price,
        tag
      }
    },
    menuNotes
  }
`);

export const experiencesPageQuery = defineQuery(`
  *[_id == "experiencesPage"][0]{
    upcomingExperiences[]{
      title,
      date,
      time,
      description,
      ctaLabel,
      ctaHref
    },
    privateDiningPoints,
    seasonalMoments[]{
      title,
      copy
    }
  }
`);

export const galleryPageQuery = defineQuery(`
  *[_id == "galleryPage"][0]{
    galleryItems[]{
      _key,
      title,
      caption,
      category,
      featured,
      aspect,
      objectPosition,
      priority,
      image{
        alt,
        asset
      }
    }
  }
`);
