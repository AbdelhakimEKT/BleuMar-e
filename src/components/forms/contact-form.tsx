"use client";

import type { FormEvent } from "react";
import { useState, useTransition } from "react";

import styles from "./forms.module.css";

type Status = {
  tone: "success" | "error";
  message: string;
} | null;

export function ContactForm() {
  const [status, setStatus] = useState<Status>(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    setStatus(null);

    startTransition(() => {
      void (async () => {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        });

        const data = (await response.json()) as { message: string };

        if (!response.ok) {
          setStatus({ tone: "error", message: data.message });
          return;
        }

        form.reset();
        setStatus({ tone: "success", message: data.message });
      })();
    });
  };

  return (
    <div className={styles.panel}>
      <h2 className={styles.title}>Écrire à la maison</h2>
      <p className={styles.copy}>
        Pour une privatisation, une demande presse ou une occasion particulière, l'équipe peut vous
        répondre rapidement depuis ce formulaire.
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.gridTwo}>
          <label className={styles.field}>
            <span className={styles.label}>Nom</span>
            <input className={styles.control} type="text" name="name" required />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>Email</span>
            <input className={styles.control} type="email" name="email" required />
          </label>
        </div>

        <label className={styles.field}>
          <span className={styles.label}>Téléphone</span>
          <input className={styles.control} type="tel" name="phone" />
        </label>

        <label className={styles.field}>
          <span className={styles.label}>Sujet</span>
          <input className={styles.control} type="text" name="subject" required />
        </label>

        <label className={styles.field}>
          <span className={styles.label}>Message</span>
          <textarea className={styles.textarea} name="message" required />
        </label>

        <p className={styles.hint}>
          Les messages envoyés ici sont validés côté serveur et prêts à être reliés à votre outil
          email ou CRM.
        </p>

        {status ? (
          <p className={`${styles.status} ${status.tone === "success" ? styles.success : styles.error}`}>
            {status.message}
          </p>
        ) : null}

        <button type="submit" className={`button ${styles.submit}`} disabled={isPending}>
          {isPending ? "Envoi..." : "Envoyer le message"}
        </button>
      </form>
    </div>
  );
}
