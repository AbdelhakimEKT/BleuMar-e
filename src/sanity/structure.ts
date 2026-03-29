import type { StructureResolver } from "sanity/structure";

const singletonItems = [
  { title: "Paramètres du site", schemaType: "siteSettings", documentId: "siteSettings" },
  { title: "Accueil", schemaType: "homePage", documentId: "homePage" },
  { title: "Menus", schemaType: "menusPage", documentId: "menusPage" },
  { title: "Expériences", schemaType: "experiencesPage", documentId: "experiencesPage" },
  { title: "Galerie", schemaType: "galleryPage", documentId: "galleryPage" }
];

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Bleu Marée")
    .items([
      ...singletonItems.map((item) =>
        S.listItem()
          .title(item.title)
          .child(S.document().schemaType(item.schemaType).documentId(item.documentId))
      ),
      S.divider(),
      S.listItem()
        .title("Demandes de réservation")
        .child(S.documentTypeList("reservationRequest").title("Demandes de réservation"))
    ]);
