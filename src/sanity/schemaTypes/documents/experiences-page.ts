import { defineArrayMember, defineField, defineType } from "sanity";

export const experiencesPageType = defineType({
  name: "experiencesPage",
  title: "Expériences",
  type: "document",
  fields: [
    defineField({
      name: "upcomingExperiences",
      title: "Événements",
      type: "array",
      of: [defineArrayMember({ type: "eventItem" })]
    }),
    defineField({
      name: "privateDiningPoints",
      title: "Points privatisation",
      type: "array",
      of: [defineArrayMember({ type: "string" })]
    }),
    defineField({
      name: "seasonalMoments",
      title: "Moments saisonniers",
      type: "array",
      of: [defineArrayMember({ type: "featureItem" })]
    })
  ],
  preview: {
    prepare: () => ({
      title: "Expériences"
    })
  }
});
