import { defineField, defineType } from "sanity";

export const menuItemType = defineType({
  name: "menuItem",
  title: "Élément de menu",
  type: "object",
  fields: [
    defineField({
      name: "name",
      title: "Nom",
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
      name: "price",
      title: "Prix",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "tag",
      title: "Badge",
      type: "string"
    })
  ]
});
