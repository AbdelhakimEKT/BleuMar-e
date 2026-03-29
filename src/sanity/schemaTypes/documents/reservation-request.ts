import { defineField, defineType } from "sanity";

export const reservationRequestType = defineType({
  name: "reservationRequest",
  title: "Demandes de réservation",
  type: "document",
  fields: [
    defineField({
      name: "submittedAt",
      title: "Soumise le",
      type: "datetime",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "status",
      title: "Statut",
      type: "string",
      initialValue: "new",
      options: {
        list: [
          { title: "Nouvelle", value: "new" },
          { title: "Confirmée", value: "confirmed" },
          { title: "Annulée", value: "cancelled" }
        ],
        layout: "radio"
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "guestName",
      title: "Nom du client",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "phone",
      title: "Téléphone",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "covers",
      title: "Nombre de couverts",
      type: "number",
      validation: (rule) => rule.required().min(1).max(12)
    }),
    defineField({
      name: "reservationDate",
      title: "Date souhaitée",
      type: "date",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "reservationTime",
      title: "Heure souhaitée",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "occasion",
      title: "Occasion",
      type: "string"
    }),
    defineField({
      name: "notes",
      title: "Notes client",
      type: "text",
      rows: 4
    }),
    defineField({
      name: "locale",
      title: "Langue",
      type: "string"
    }),
    defineField({
      name: "source",
      title: "Source",
      type: "string",
      initialValue: "website"
    })
  ],
  orderings: [
    {
      title: "Plus récentes",
      name: "submittedAtDesc",
      by: [{ field: "submittedAt", direction: "desc" }]
    }
  ],
  preview: {
    select: {
      title: "guestName",
      subtitle: "reservationDate",
      status: "status",
      covers: "covers",
      time: "reservationTime"
    },
    prepare: ({ title, subtitle, status, covers, time }) => ({
      title: title || "Demande sans nom",
      subtitle: `${subtitle || "Date inconnue"} · ${time || "Heure inconnue"} · ${covers || "?"} couverts · ${status || "new"}`
    })
  }
});
