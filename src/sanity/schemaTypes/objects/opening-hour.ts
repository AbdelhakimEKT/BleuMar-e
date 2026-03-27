import { defineField, defineType } from "sanity";

export const openingHourType = defineType({
  name: "openingHour",
  title: "Horaire",
  type: "object",
  fields: [
    defineField({
      name: "day",
      title: "Jour",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "hours",
      title: "Horaires",
      type: "string",
      validation: (rule) => rule.required()
    })
  ]
});
