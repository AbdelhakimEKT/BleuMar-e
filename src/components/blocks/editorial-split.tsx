import Link from "next/link";
import Image from "next/image";

import { Reveal } from "@/components/ui/reveal";

type Detail = {
  label: string;
  copy: string;
};

type Action = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "ghost";
};

type EditorialSplitProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  paragraphs?: string[];
  details?: Detail[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
  actions?: Action[];
};

const variantClassMap = {
  primary: "button",
  secondary: "button-secondary",
  ghost: "button-ghost"
} as const;

export function EditorialSplit({
  eyebrow,
  title,
  intro,
  paragraphs = [],
  details = [],
  image,
  imageAlt,
  reverse = false,
  actions = []
}: EditorialSplitProps) {
  return (
    <div className="split-layout" data-reverse={reverse}>
      <Reveal className="stack">
        {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
        <h2 className="section-title">{title}</h2>
        {intro ? <p className="lead">{intro}</p> : null}

        {paragraphs.length > 0 ? (
          <div className="prose stack">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        ) : null}

        {details.length > 0 ? (
          <ul className="detail-list">
            {details.map((detail) => (
              <li key={detail.label}>
                <span className="detail-title">{detail.label}</span>
                <span className="detail-copy">{detail.copy}</span>
              </li>
            ))}
          </ul>
        ) : null}

        {actions.length > 0 ? (
          <div className="cta-row">
            {actions.map((action) => (
              <Link
                key={`${action.href}-${action.label}`}
                href={action.href}
                className={variantClassMap[action.variant ?? "primary"]}
              >
                {action.label}
              </Link>
            ))}
          </div>
        ) : null}
      </Reveal>

      <Reveal>
        <div className="image-frame">
          <Image src={image} alt={imageAlt} width={1600} height={1000} className="image-cover" />
        </div>
      </Reveal>
    </div>
  );
}
