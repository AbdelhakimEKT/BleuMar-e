import { createClient } from "next-sanity";

import {
  apiVersion,
  dataset,
  isSanityConfigured,
  isSanityWriteConfigured,
  projectId,
  writeToken
} from "@/sanity/env";

export const sanityClient = createClient({
  projectId: projectId || "replace-me",
  dataset,
  apiVersion,
  useCdn: true
});

export const sanityWriteClient = createClient({
  projectId: projectId || "replace-me",
  dataset,
  apiVersion,
  token: writeToken,
  useCdn: false
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

export async function safeSanityCreate<T extends { _type: string } & Record<string, unknown>>(
  document: T
) {
  if (!isSanityWriteConfigured) {
    return null;
  }

  try {
    return await sanityWriteClient.create(document);
  } catch (error) {
    console.warn("Sanity create failed.", error);
    return null;
  }
}
