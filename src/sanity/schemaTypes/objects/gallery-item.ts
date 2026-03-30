import { defineField, defineType } from "sanity";

export const galleryItemType = defineType({
  name: "galleryItem",
  title: "Visuel de galerie",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Titre",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "caption",
      title: "Légende",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "category",
      title: "Catégorie",
      type: "string",
      options: {
        list: [
          { title: "Salle", value: "room" },
          { title: "Service", value: "service" },
          { title: "Assiettes", value: "plates" },
          { title: "Détails", value: "details" }
        ],
        layout: "radio"
      },
      initialValue: "plates",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "featured",
      title: "Mettre en avant",
      type: "boolean",
      initialValue: false
    }),
    defineField({
      name: "aspect",
      title: "Ratio de cadre",
      type: "string",
      options: {
        list: [
          { title: "Très large", value: "wide" },
          { title: "Paysage", value: "landscape" },
          { title: "Portrait", value: "portrait" },
          { title: "Carré", value: "square" }
        ],
        layout: "dropdown"
      },
      initialValue: "landscape"
    }),
    defineField({
      name: "objectPosition",
      title: "Object position",
      type: "string",
      description: "Exemple: 50% 55% pour ajuster le cadrage de l'image."
    }),
    defineField({
      name: "priority",
      title: "Priorité d'affichage",
      type: "number",
      initialValue: 100,
      validation: (rule) => rule.required().min(1).max(999)
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "photo",
      validation: (rule) => rule.required()
    })
  ]
});
