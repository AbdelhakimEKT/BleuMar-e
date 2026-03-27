import { defineArrayMember, defineField, defineType } from "sanity";

export const menusPageType = defineType({
  name: "menusPage",
  title: "Menus",
  type: "document",
  fields: [
    defineField({
      name: "menuSections",
      title: "Sections de menu",
      type: "array",
      of: [defineArrayMember({ type: "menuSection" })]
    }),
    defineField({
      name: "menuNotes",
      title: "Notes de page",
      type: "array",
      of: [defineArrayMember({ type: "string" })]
    })
  ],
  preview: {
    prepare: () => ({
      title: "Menus"
    })
  }
});
