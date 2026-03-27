import { defineArrayMember, defineField, defineType } from "sanity";

export const menuSectionType = defineType({
  name: "menuSection",
  title: "Section de menu",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Titre",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "subtitle",
      title: "Sous-titre",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "priceHint",
      title: "Repère prix",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "items",
      title: "Éléments",
      type: "array",
      of: [defineArrayMember({ type: "menuItem" })],
      validation: (rule) => rule.min(1)
    })
  ]
});
