import { defineArrayMember, defineField, defineType } from "sanity";

export const homePageType = defineType({
  name: "homePage",
  title: "Accueil",
  type: "document",
  fields: [
    defineField({ name: "heroEyebrow", title: "Eyebrow hero", type: "string" }),
    defineField({ name: "heroTitle", title: "Titre hero", type: "string" }),
    defineField({ name: "heroIntro", title: "Texte hero", type: "text", rows: 4 }),
    defineField({ name: "primaryCta", title: "CTA principal", type: "actionLink" }),
    defineField({ name: "secondaryCta", title: "CTA secondaire", type: "actionLink" }),
    defineField({ name: "heroImage", title: "Image hero", type: "photo" }),
    defineField({
      name: "heroHighlights",
      title: "Highlights hero",
      type: "array",
      of: [defineArrayMember({ type: "string" })]
    }),
    defineField({
      name: "philosophyHighlights",
      title: "Blocs philosophie",
      type: "array",
      of: [defineArrayMember({ type: "featureItem" })]
    }),
    defineField({
      name: "signatureDishes",
      title: "Plats signature",
      type: "array",
      of: [defineArrayMember({ type: "signatureDish" })]
    }),
    defineField({
      name: "guestJourney",
      title: "Parcours invité",
      type: "array",
      of: [defineArrayMember({ type: "featureItem" })]
    }),
    defineField({
      name: "curatedImpressions",
      title: "Impressions éditoriales",
      type: "array",
      of: [defineArrayMember({ type: "string" })]
    })
  ],
  preview: {
    prepare: () => ({
      title: "Accueil"
    })
  }
});
