import { defineField, defineType } from "sanity";

export const eventItemType = defineType({
  name: "eventItem",
  title: "Événement",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Titre",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "time",
      title: "Horaire ou format",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "ctaLabel",
      title: "Libellé du bouton",
      type: "string",
      initialValue: "Découvrir"
    }),
    defineField({
      name: "ctaHref",
      title: "Lien du bouton",
      type: "string",
      initialValue: "/contact"
    })
  ]
});
