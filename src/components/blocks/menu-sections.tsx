import type { MenuSection } from "@/content/menus";

type MenuSectionsProps = {
  sections: MenuSection[];
};

export function MenuSections({ sections }: MenuSectionsProps) {
  return (
    <div className="menu-columns">
      {sections.map((section) => (
        <article key={section.title} className="menu-sheet">
          <div className="stack">
            <div>
              <p className="kicker">{section.subtitle}</p>
              <div className="menu-heading">
                <h3>{section.title}</h3>
                <span>{section.priceHint}</span>
              </div>
            </div>

            <p className="microcopy">{section.description}</p>

            <ul className="menu-list">
              {section.items.map((item) => (
                <li key={`${section.title}-${item.name}`}>
                  <div className="menu-line">
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                  </div>
                  <p className="menu-description">{item.description}</p>
                  {item.tag ? <span className="menu-tag">{item.tag}</span> : null}
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
