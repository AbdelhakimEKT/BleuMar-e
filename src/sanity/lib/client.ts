import { createClient } from "next-sanity";

import { apiVersion, dataset, isSanityConfigured, projectId } from "@/sanity/env";

export const sanityClient = createClient({
  projectId: projectId || "replace-me",
  dataset,
  apiVersion,
  useCdn: true
});

export async function safeSanityFetch<T>(query: string) {
  if (!isSanityConfigured) {
    return null;
  }

  try {
    return await sanityClient.fetch<T>(query);
  } catch (error) {
    console.warn("Sanity fetch failed, local fallback will be used.", error);
    return null;
  }
}
