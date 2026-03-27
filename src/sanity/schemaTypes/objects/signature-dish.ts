import { defineField, defineType } from "sanity";

export const signatureDishType = defineType({
  name: "signatureDish",
  title: "Plat signature",
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
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "photo",
      validation: (rule) => rule.required()
    })
  ]
});
