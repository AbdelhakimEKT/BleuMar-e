import fs from "node:fs";
import path from "node:path";

import {
  PageSizes,
  PDFDocument,
  StandardFonts,
  type PDFFont,
  type PDFImage,
  rgb
} from "pdf-lib";

import { getMenusContent, type MenuSection } from "@/content/menus";
import { getChapterTone, getChapterVisualConfig } from "@/content/menu-visuals";
import type { Locale } from "@/i18n/config";
import type { MenusPageData, SiteSettingsData } from "@/sanity/loaders";

type MenuPdfOptions = {
  locale: Locale;
  siteConfig: SiteSettingsData;
  menusPageData: MenusPageData;
};

type Fonts = {
  display: PDFFont;
  displayBold: PDFFont;
  body: PDFFont;
  bodyBold: PDFFont;
};

const [PAGE_WIDTH, PAGE_HEIGHT] = PageSizes.A4;

const colors = {
  navy: rgb(5 / 255, 18 / 255, 28 / 255),
  navySoft: rgb(16 / 255, 39 / 255, 56 / 255),
  ivory: rgb(245 / 255, 239 / 255, 228 / 255),
  mist: rgb(216 / 255, 226 / 255, 231 / 255),
  mistSoft: rgb(199 / 255, 208 / 255, 213 / 255),
  gold: rgb(201 / 255, 165 / 255, 106 / 255),
  goldSoft: rgb(247 / 255, 226 / 255, 189 / 255),
  line: rgb(38 / 255, 66 / 255, 83 / 255),
  paper: rgb(255 / 255, 250 / 255, 240 / 255)
} as const;

function getImagePath(src: string) {
  return path.join(process.cwd(), "public", src.replace(/^\//, ""));
}

function hasImage(src?: string) {
  return Boolean(src && fs.existsSync(getImagePath(src)));
}

function wrapText(text: string, maxWidth: number, font: PDFFont, size: number) {
  const paragraphs = text.split("\n");
  const lines: string[] = [];

  for (const paragraph of paragraphs) {
    const words = paragraph.trim().split(/\s+/).filter(Boolean);

    if (words.length === 0) {
      lines.push("");
      continue;
    }

    let currentLine = words[0] ?? "";

    for (const word of words.slice(1)) {
      const candidate = `${currentLine} ${word}`;

      if (font.widthOfTextAtSize(candidate, size) <= maxWidth) {
        currentLine = candidate;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }

    lines.push(currentLine);
  }

  return lines;
}

function drawTextBlock(
  page: ReturnType<PDFDocument["addPage"]>,
  text: string,
  options: {
    x: number;
    yTop: number;
    width: number;
    font: PDFFont;
    size: number;
    color: ReturnType<typeof rgb>;
    lineHeight?: number;
  }
) {
  const lineHeight = options.lineHeight ?? options.size * 1.35;
  const lines = wrapText(text, options.width, options.font, options.size);

  lines.forEach((line, index) => {
    page.drawText(line, {
      x: options.x,
      y: PAGE_HEIGHT - options.yTop - options.size - index * lineHeight,
      size: options.size,
      font: options.font,
      color: options.color
    });
  });

  return lines.length * lineHeight;
}

function measureTextHeight(text: string, width: number, font: PDFFont, size: number, lineHeight?: number) {
  const computedLineHeight = lineHeight ?? size * 1.35;
  const lines = wrapText(text, width, font, size);
  return lines.length * computedLineHeight;
}

async function embedImage(pdf: PDFDocument, src?: string, cache?: Map<string, PDFImage>) {
  if (!src || !hasImage(src)) {
    return null;
  }

  if (cache?.has(src)) {
    return cache.get(src) ?? null;
  }

  const buffer = fs.readFileSync(getImagePath(src));
  const ext = path.extname(src).toLowerCase();
  const image = ext === ".png" ? await pdf.embedPng(buffer) : await pdf.embedJpg(buffer);

  cache?.set(src, image);
  return image;
}

function drawContainedImage(
  page: ReturnType<PDFDocument["addPage"]>,
  image: PDFImage | null,
  x: number,
  yTop: number,
  width: number,
  height: number
) {
  page.drawRectangle({
    x,
    y: PAGE_HEIGHT - yTop - height,
    width,
    height,
    color: colors.navySoft,
    borderColor: colors.line,
    borderWidth: 1
  });

  if (!image) {
    return;
  }

  const scale = Math.min(width / image.width, height / image.height);
  const imageWidth = image.width * scale;
  const imageHeight = image.height * scale;
  const imageX = x + (width - imageWidth) / 2;
  const imageY = PAGE_HEIGHT - yTop - height + (height - imageHeight) / 2;

  page.drawImage(image, {
    x: imageX,
    y: imageY,
    width: imageWidth,
    height: imageHeight
  });
}

function drawPill(
  page: ReturnType<PDFDocument["addPage"]>,
  text: string,
  options: {
    x: number;
    yTop: number;
    font: PDFFont;
    size: number;
    background: ReturnType<typeof rgb>;
    border: ReturnType<typeof rgb>;
    color: ReturnType<typeof rgb>;
  }
) {
  const textWidth = options.font.widthOfTextAtSize(text, options.size);
  const width = Math.max(94, textWidth + 28);
  const height = 24;

  page.drawRectangle({
    x: options.x,
    y: PAGE_HEIGHT - options.yTop - height,
    width,
    height,
    color: options.background,
    borderColor: options.border,
    borderWidth: 1
  });

  page.drawText(text, {
    x: options.x + (width - textWidth) / 2,
    y: PAGE_HEIGHT - options.yTop - options.size - 7,
    size: options.size,
    font: options.font,
    color: options.color
  });

  return width;
}

function drawDivider(page: ReturnType<PDFDocument["addPage"]>, yTop: number, x = 48, width = PAGE_WIDTH - 96) {
  page.drawLine({
    start: { x, y: PAGE_HEIGHT - yTop },
    end: { x: x + width, y: PAGE_HEIGHT - yTop },
    thickness: 1,
    color: colors.line
  });
}

function drawFooter(
  page: ReturnType<PDFDocument["addPage"]>,
  siteConfig: SiteSettingsData,
  pageLabel: string,
  fonts: Fonts
) {
  page.drawText(pageLabel, {
    x: 48,
    y: 24,
    size: 9,
    font: fonts.bodyBold,
    color: colors.gold
  });

  const phoneWidth = fonts.body.widthOfTextAtSize(siteConfig.phoneDisplay, 9);
  page.drawText(siteConfig.phoneDisplay, {
    x: PAGE_WIDTH - 48 - phoneWidth,
    y: 24,
    size: 9,
    font: fonts.body,
    color: colors.mistSoft
  });
}

async function drawCover(
  pdf: PDFDocument,
  fonts: Fonts,
  locale: Locale,
  siteConfig: SiteSettingsData,
  menusContent: ReturnType<typeof getMenusContent>,
  imageCache: Map<string, PDFImage>
) {
  const page = pdf.addPage(PageSizes.A4);
  const coverImage = await embedImage(
    pdf,
    "/images/hero/bleu-maree-hero-dining-room-golden-hour-realistic.jpg",
    imageCache
  );

  page.drawRectangle({ x: 0, y: 0, width: PAGE_WIDTH, height: PAGE_HEIGHT, color: colors.navy });
  drawContainedImage(page, coverImage, 28, 28, PAGE_WIDTH - 56, 344);
  page.drawRectangle({
    x: 28,
    y: PAGE_HEIGHT - 28 - 344,
    width: PAGE_WIDTH - 56,
    height: 344,
    color: colors.navy,
    opacity: 0.24
  });

  page.drawText(locale === "fr" ? "CARTE DE LA MAISON" : "HOUSE MENU", {
    x: 48,
    y: PAGE_HEIGHT - 68,
    size: 11,
    font: fonts.bodyBold,
    color: colors.gold
  });

  page.drawText(siteConfig.location.toUpperCase(), {
    x: 48,
    y: PAGE_HEIGHT - 90,
    size: 11,
    font: fonts.body,
    color: colors.mistSoft
  });

  page.drawText(siteConfig.name, {
    x: 48,
    y: PAGE_HEIGHT - 336,
    size: 44,
    font: fonts.displayBold,
    color: colors.ivory
  });

  drawTextBlock(page, siteConfig.tagline, {
    x: 48,
    yTop: 346,
    width: 420,
    font: fonts.body,
    size: 14,
    color: colors.mist
  });

  drawDivider(page, 424);

  page.drawText(locale === "fr" ? "LECTURE DE SERVICE" : "READING ORDER", {
    x: 48,
    y: PAGE_HEIGHT - 454 - 11,
    size: 11,
    font: fonts.bodyBold,
    color: colors.gold
  });

  drawTextBlock(page, menusContent.pageHero.title, {
    x: 48,
    yTop: 478,
    width: PAGE_WIDTH - 96,
    font: fonts.displayBold,
    size: 28,
    color: colors.ivory,
    lineHeight: 31
  });

  drawTextBlock(page, menusContent.pageHero.intro, {
    x: 48,
    yTop: 564,
    width: PAGE_WIDTH - 120,
    font: fonts.body,
    size: 13,
    color: colors.mistSoft,
    lineHeight: 18
  });

  page.drawText(locale === "fr" ? "RÉSERVATION & CONTACT" : "BOOKING & CONTACT", {
    x: 48,
    y: PAGE_HEIGHT - 674 - 11,
    size: 11,
    font: fonts.bodyBold,
    color: colors.goldSoft
  });

  page.drawText(`${siteConfig.phoneDisplay} · ${siteConfig.email}`, {
    x: 48,
    y: PAGE_HEIGHT - 701,
    size: 11,
    font: fonts.body,
    color: colors.mist
  });

  drawFooter(page, siteConfig, "01", fonts);
}

async function drawSectionPages(
  pdf: PDFDocument,
  fonts: Fonts,
  locale: Locale,
  siteConfig: SiteSettingsData,
  section: MenuSection,
  sectionNumber: number,
  imageCache: Map<string, PDFImage>
) {
  const tone = getChapterTone(section.title);
  const visual = getChapterVisualConfig(section.title, tone);
  const sectionImage = await embedImage(pdf, visual.images[0]?.src ?? visual.fallbackImage?.src, imageCache);
  const pageLabel = sectionNumber.toString().padStart(2, "0");
  let page = pdf.addPage(PageSizes.A4);

  const drawPageShell = (continuation = false) => {
    page.drawRectangle({ x: 0, y: 0, width: PAGE_WIDTH, height: PAGE_HEIGHT, color: colors.navy });

    page.drawText(pageLabel, {
      x: 48,
      y: PAGE_HEIGHT - 48,
      size: 11,
      font: fonts.bodyBold,
      color: colors.gold
    });

    page.drawText(
      continuation
        ? locale === "fr"
          ? "SUITE DE SECTION"
          : "SECTION CONTINUED"
        : section.subtitle.toUpperCase(),
      {
        x: 48,
        y: PAGE_HEIGHT - 72,
        size: 11,
        font: fonts.bodyBold,
        color: continuation ? colors.gold : colors.mistSoft
      }
    );

    page.drawText(section.title, {
      x: 48,
      y: PAGE_HEIGHT - 118,
      size: continuation ? 24 : 30,
      font: fonts.displayBold,
      color: colors.ivory,
      maxWidth: 380
    });

    if (!continuation) {
      page.drawText(section.priceHint.toUpperCase(), {
        x: PAGE_WIDTH - 190,
        y: PAGE_HEIGHT - 70,
        size: 11,
        font: fonts.bodyBold,
        color: colors.goldSoft,
        maxWidth: 140
      });

      drawTextBlock(page, section.description, {
        x: 48,
        yTop: 150,
        width: PAGE_WIDTH - 96,
        font: fonts.body,
        size: 12.5,
        color: colors.mist,
        lineHeight: 17
      });

      drawContainedImage(page, sectionImage, 48, 214, PAGE_WIDTH - 96, section.items.length > 5 ? 160 : 190);
    }

    drawFooter(page, siteConfig, pageLabel, fonts);
  };

  drawPageShell(false);

  let currentYTop = section.items.length > 5 ? 394 : 424;

  for (const item of section.items) {
    const itemNameHeight = measureTextHeight(item.name, 310, fonts.displayBold, 17, 21);
    const itemDescriptionHeight = measureTextHeight(
      item.description,
      PAGE_WIDTH - 96,
      fonts.body,
      11.5,
      15
    );
    const estimatedHeight = 32 + itemNameHeight + itemDescriptionHeight + (item.tag ? 38 : 0);

    if (currentYTop + estimatedHeight > 754) {
      page = pdf.addPage(PageSizes.A4);
      drawPageShell(true);
      currentYTop = 132;
    }

    drawDivider(page, currentYTop);

    page.drawText(item.name, {
      x: 48,
      y: PAGE_HEIGHT - currentYTop - 30,
      size: 17,
      font: fonts.displayBold,
      color: colors.ivory,
      maxWidth: PAGE_WIDTH - 188
    });

    const priceWidth = fonts.bodyBold.widthOfTextAtSize(item.price, 13);
    page.drawText(item.price, {
      x: PAGE_WIDTH - 48 - priceWidth,
      y: PAGE_HEIGHT - currentYTop - 26,
      size: 13,
      font: fonts.bodyBold,
      color: colors.goldSoft
    });

    const bodyStartTop = currentYTop + 38 + itemNameHeight * 0.7;
    drawTextBlock(page, item.description, {
      x: 48,
      yTop: bodyStartTop,
      width: PAGE_WIDTH - 96,
      font: fonts.body,
      size: 11.5,
      color: colors.mistSoft,
      lineHeight: 15
    });

    currentYTop += 34 + itemNameHeight + itemDescriptionHeight;

    if (item.tag) {
      drawPill(page, item.tag.toUpperCase(), {
        x: 48,
        yTop: currentYTop + 4,
        font: fonts.bodyBold,
        size: 9,
        background: colors.navySoft,
        border: colors.gold,
        color: colors.goldSoft
      });

      currentYTop += 34;
    } else {
      currentYTop += 16;
    }
  }
}

async function drawClosingPage(
  pdf: PDFDocument,
  fonts: Fonts,
  locale: Locale,
  siteConfig: SiteSettingsData,
  menusPageData: MenusPageData,
  imageCache: Map<string, PDFImage>
) {
  const page = pdf.addPage(PageSizes.A4);
  const closingImage = await embedImage(pdf, "/images/details/bleu-maree-detail-table-setting.jpg", imageCache);

  page.drawRectangle({ x: 0, y: 0, width: PAGE_WIDTH, height: PAGE_HEIGHT, color: colors.paper });
  drawContainedImage(page, closingImage, 48, 48, PAGE_WIDTH - 96, 220);

  page.drawText(locale === "fr" ? "DERNIÈRE NOTE" : "FINAL NOTE", {
    x: 48,
    y: PAGE_HEIGHT - 304,
    size: 11,
    font: fonts.bodyBold,
    color: colors.gold
  });

  drawTextBlock(
    page,
    locale === "fr"
      ? "La carte reste vivante, puis la réservation affine le moment."
      : "The menu stays alive, then booking refines the moment.",
    {
      x: 48,
      yTop: 324,
      width: PAGE_WIDTH - 96,
      font: fonts.displayBold,
      size: 28,
      color: colors.navy,
      lineHeight: 31
    }
  );

  let yTop = 434;

  for (const note of menusPageData.menuNotes) {
    const noteHeight = measureTextHeight(note, PAGE_WIDTH - 136, fonts.body, 12, 17);

    page.drawRectangle({
      x: 48,
      y: PAGE_HEIGHT - yTop - noteHeight - 26,
      width: PAGE_WIDTH - 96,
      height: noteHeight + 26,
      color: colors.paper,
      borderColor: colors.line,
      borderWidth: 1
    });

    drawTextBlock(page, note, {
      x: 68,
      yTop: yTop + 10,
      width: PAGE_WIDTH - 136,
      font: fonts.body,
      size: 12,
      color: colors.navySoft,
      lineHeight: 17
    });

    yTop += noteHeight + 38;
  }

  page.drawText(locale === "fr" ? "CONTACT MAISON" : "HOUSE CONTACT", {
    x: 48,
    y: PAGE_HEIGHT - 732,
    size: 11,
    font: fonts.bodyBold,
    color: colors.gold
  });

  page.drawText(`${siteConfig.phoneDisplay} · ${siteConfig.email}`, {
    x: 48,
    y: PAGE_HEIGHT - 754,
    size: 11,
    font: fonts.body,
    color: colors.navySoft
  });

  drawFooter(page, siteConfig, (menusPageData.menuSections.length + 2).toString().padStart(2, "0"), fonts);
}

export async function createMenuPdfBuffer({
  locale,
  siteConfig,
  menusPageData
}: MenuPdfOptions) {
  const menusContent = getMenusContent(locale);
  const pdf = await PDFDocument.create();
  const imageCache = new Map<string, PDFImage>();
  const fonts: Fonts = {
    display: await pdf.embedFont(StandardFonts.TimesRoman),
    displayBold: await pdf.embedFont(StandardFonts.TimesRomanBold),
    body: await pdf.embedFont(StandardFonts.Helvetica),
    bodyBold: await pdf.embedFont(StandardFonts.HelveticaBold)
  };

  await drawCover(pdf, fonts, locale, siteConfig, menusContent, imageCache);

  for (const [index, section] of menusPageData.menuSections.entries()) {
    await drawSectionPages(pdf, fonts, locale, siteConfig, section, index + 2, imageCache);
  }

  await drawClosingPage(pdf, fonts, locale, siteConfig, menusPageData, imageCache);

  const bytes = await pdf.save();
  return Buffer.from(bytes);
}
