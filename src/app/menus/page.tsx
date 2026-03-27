import { EditorialSplit } from "@/components/blocks/editorial-split";
import { MenuSections } from "@/components/blocks/menu-sections";
import { Reveal } from "@/components/ui/reveal";
import { SectionIntro } from "@/components/ui/section-intro";
import { PageHero } from "@/components/ui/page-hero";
import { createMetadata } from "@/lib/metadata";
import { getMenusPageData } from "@/sanity/loaders";

export const metadata = createMetadata({
  title: "Menus",
  description:
    "Parcourez les menus dégustation, la carte du déjeuner, la cave et les assiettes signatures de Bleu Marée à Biarritz."
});

export default async function MenusPage() {
  const menusPageData = await getMenusPageData();

  return (
    <>
      <PageHero
        eyebrow="La carte"
        title="Des menus lisibles, désirables et simples à faire évoluer."
        intro="La structure de cette page est pensée pour une mise à jour régulière: catégories claires, mentions de saison, prix visibles et futur branchement à un CMS."
        image="/images/menu/bleu-maree-menu-scallops-signature.png"
      />

      <section className="section section-surface--light section--light">
        <div className="container stack">
          <Reveal>
            <SectionIntro
              eyebrow="Menus & cave"
              title="Une carte conçue pour séduire autant que pour être administrée facilement."
              lead="Les sections sont séparées proprement pour préparer la suite: affichage conditionnel, tags “nouveau” ou “de saison”, PDF et synchronisation future avec un back-office."
            />
          </Reveal>

          <MenuSections sections={menusPageData.menuSections} />

          <div className="grid-three">
            {menusPageData.menuNotes.map((note) => (
              <Reveal key={note}>
                <div className="notice-panel">{note}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <EditorialSplit
            eyebrow="Saisonnalité"
            title="La carte vit avec les arrivages, pas avec une structure figée."
            intro="Ce socle permet déjà d'introduire des suggestions temporaires, des menus de fête, des sélections de vins ou une carte déjeuner distincte sans alourdir l'interface."
            paragraphs={[
              "Le contenu est centralisé dans des modules dédiés afin de faciliter la migration vers un CMS headless ou un back-office léger.",
              "Pour la mise en ligne, il suffira de remplacer les propositions de démonstration par votre carte réelle et vos prix définitifs."
            ]}
            image="/images/details/bleu-maree-detail-table-setting.jpg"
            imageAlt="Détail de table Bleu Marée"
            actions={[
              { href: "/reservation", label: "Réserver", variant: "primary" },
              { href: "/contact", label: "Demander le PDF", variant: "ghost" }
            ]}
          />
        </div>
      </section>
    </>
  );
}
