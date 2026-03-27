import { defineArrayMember, defineField, defineType } from "sanity";

export const galleryPageType = defineType({
  name: "galleryPage",
  title: "Galerie",
  type: "document",
  fields: [
    defineField({
      name: "galleryItems",
      title: "Visuels",
      type: "array",
      of: [defineArrayMember({ type: "galleryItem" })]
    })
  ],
  preview: {
    prepare: () => ({
      title: "Galerie"
    })
  }
});
