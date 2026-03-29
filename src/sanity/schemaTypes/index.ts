import { experiencesPageType } from "@/sanity/schemaTypes/documents/experiences-page";
import { galleryPageType } from "@/sanity/schemaTypes/documents/gallery-page";
import { homePageType } from "@/sanity/schemaTypes/documents/home-page";
import { menusPageType } from "@/sanity/schemaTypes/documents/menus-page";
import { reservationRequestType } from "@/sanity/schemaTypes/documents/reservation-request";
import { siteSettingsType } from "@/sanity/schemaTypes/documents/site-settings";
import { actionLinkType } from "@/sanity/schemaTypes/objects/action-link";
import { eventItemType } from "@/sanity/schemaTypes/objects/event-item";
import { featureItemType } from "@/sanity/schemaTypes/objects/feature-item";
import { galleryItemType } from "@/sanity/schemaTypes/objects/gallery-item";
import { menuItemType } from "@/sanity/schemaTypes/objects/menu-item";
import { menuSectionType } from "@/sanity/schemaTypes/objects/menu-section";
import { openingHourType } from "@/sanity/schemaTypes/objects/opening-hour";
import { photoType } from "@/sanity/schemaTypes/objects/photo";
import { signatureDishType } from "@/sanity/schemaTypes/objects/signature-dish";

export const schemaTypes = [
  siteSettingsType,
  homePageType,
  menusPageType,
  experiencesPageType,
  galleryPageType,
  reservationRequestType,
  actionLinkType,
  eventItemType,
  featureItemType,
  galleryItemType,
  menuItemType,
  menuSectionType,
  openingHourType,
  photoType,
  signatureDishType
];
