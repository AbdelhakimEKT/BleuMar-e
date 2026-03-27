import { defineField, defineType } from "sanity";

export const featureItemType = defineType({
  name: "featureItem",
  title: "Bloc texte",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Titre",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "copy",
      title: "Texte",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required()
    })
  ]
});
