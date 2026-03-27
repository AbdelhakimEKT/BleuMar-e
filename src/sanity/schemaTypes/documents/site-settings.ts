import { defineArrayMember, defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Paramètres du site",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Nom du restaurant", type: "string" }),
    defineField({ name: "location", title: "Ville", type: "string" }),
    defineField({ name: "tagline", title: "Signature", type: "string" }),
    defineField({
      name: "description",
      title: "Description SEO",
      type: "text",
      rows: 4
    }),
    defineField({ name: "url", title: "URL du site", type: "url" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "phoneDisplay", title: "Téléphone affiché", type: "string" }),
    defineField({ name: "phoneRaw", title: "Téléphone brut", type: "string" }),
    defineField({ name: "addressLineOne", title: "Adresse ligne 1", type: "string" }),
    defineField({ name: "addressLineTwo", title: "Adresse ligne 2", type: "string" }),
    defineField({ name: "mapUrl", title: "Lien Google Maps", type: "url" }),
    defineField({ name: "bookingProvider", title: "Prestataire réservation", type: "string" }),
    defineField({ name: "bookingLink", title: "Lien public de réservation", type: "url" }),
    defineField({
      name: "bookingNote",
      title: "Note de réservation",
      type: "text",
      rows: 3
    }),
    defineField({
      name: "openingHours",
      title: "Horaires",
      type: "array",
      of: [defineArrayMember({ type: "openingHour" })]
    }),
    defineField({
      name: "reservationHighlights",
      title: "Points clés réservation",
      type: "array",
      of: [defineArrayMember({ type: "string" })]
    })
  ],
  preview: {
    prepare: () => ({
      title: "Paramètres du site"
    })
  }
});
