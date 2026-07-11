import { PROMOTIONS } from "@/lib/constants";

export interface LocalizedPromotion {
  slug: string;
  title: string;
  price: string | null;
  blurb: string;
  includes: string[];
  image: string;
  alt: string;
  highlighted: boolean;
}

/**
 * Resolves the bilingual PROMOTIONS data into a flat, serializable shape for a
 * given locale so it can be passed from Server Components to the client carousel
 * and grid without leaking the other language's strings into the bundle.
 */
export function getLocalizedPromotions(locale: string): LocalizedPromotion[] {
  const en = locale === "en";

  return [...PROMOTIONS]
    .sort((a, b) => a.order - b.order)
    .map((p) => ({
      slug: p.slug,
      title: en ? p.titleEn : p.title,
      price: p.price,
      blurb: en ? p.blurbEn : p.blurb,
      includes: en ? p.includesEn : p.includes,
      image: p.image,
      alt: en ? p.altEn : p.alt,
      highlighted: p.highlighted ?? false,
    }));
}

export interface PromotionLabels {
  limitedTime: string;
  priceLabel: string;
  includesLabel: string;
  ctaCall: string;
  ctaDirections: string;
  ctaForm: string;
  close: string;
  openAria: string;
  viewPromotion: string;
  viewDetail: string;
}

export interface PromotionContact {
  phone: string;
  phoneFormatted: string;
  googleMapsUrl: string;
}
