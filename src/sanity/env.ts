export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2026-03-01";
export const studioTitle = process.env.SANITY_STUDIO_TITLE ?? "Bleu Maree Studio";
export const studioPath = "/studio";

export const isSanityConfigured = Boolean(projectId);
