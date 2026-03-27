import { defineField, defineType } from "sanity";

export const photoType = defineType({
  name: "photo",
  title: "Photo",
  type: "image",
  options: {
    hotspot: true
  },
  fields: [
    defineField({
      name: "alt",
      title: "Texte alternatif",
      type: "string"
    })
  ]
});
