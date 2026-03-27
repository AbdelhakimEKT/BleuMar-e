import { createImageUrlBuilder } from "@sanity/image-url";

import { dataset, isSanityConfigured, projectId } from "@/sanity/env";

const builder = isSanityConfigured
  ? createImageUrlBuilder({
      projectId,
      dataset
    })
  : null;

export function resolveSanityImageUrl(
  source: unknown,
  fallback: string,
  width = 1600
) {
  if (!builder || typeof source !== "object" || source === null || !("asset" in source)) {
    return fallback;
  }

  try {
    return builder.image(source).width(width).fit("max").auto("format").url();
  } catch {
    return fallback;
  }
}
