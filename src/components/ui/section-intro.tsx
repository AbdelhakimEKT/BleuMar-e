type SectionIntroProps = {
  eyebrow: string;
  title: string;
  lead: string;
};

export function SectionIntro({ eyebrow, title, lead }: SectionIntroProps) {
  return (
    <header className="stack">
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="section-title">{title}</h2>
      <p className="lead">{lead}</p>
    </header>
  );
}
