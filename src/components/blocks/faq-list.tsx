import { Reveal } from "@/components/ui/reveal";

import styles from "./faq-list.module.css";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqListProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  items: FaqItem[];
};

export function FaqList({ eyebrow, title, lead, items }: FaqListProps) {
  return (
    <div className={styles.wrapper}>
      <Reveal className={styles.intro}>
        {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
        <h2 className="section-title">{title}</h2>
        {lead ? <p className="lead">{lead}</p> : null}
      </Reveal>

      <div className={styles.items}>
        {items.map((item) => (
          <Reveal key={item.question}>
            <details className={styles.item}>
              <summary className={styles.question}>{item.question}</summary>
              <p className={styles.answer}>{item.answer}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
