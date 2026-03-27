import { defineField, defineType } from "sanity";

export const actionLinkType = defineType({
  name: "actionLink",
  title: "Lien d'action",
  type: "object",
  fields: [
    defineField({
      name: "label",
      title: "Libellé",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "href",
      title: "URL ou chemin",
      type: "string",
      validation: (rule) => rule.required()
    })
  ]
});
