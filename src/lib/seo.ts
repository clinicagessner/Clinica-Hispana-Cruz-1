import { SITE_CONFIG } from "@/lib/constants";

// <title> de ≤60 caracteres (§7 B0.16): con la marca completa si cabe, si no
// con la corta, y si tampoco, solo el título. Evita la plantilla del layout
// ("%s | Clínica Hispana Cruz Houston"), que llevaba casi todos a 61-106.
// La home es landing de Google Ads y conserva su título (regla 5).
export function seoTitle(title: string): string {
  for (const brand of [SITE_CONFIG.name, "Clínica Cruz"]) {
    const full = `${title} | ${brand}`;
    if (full.length <= 60) return full;
  }
  return title;
}

export const OG_IMAGE = `${SITE_CONFIG.baseUrl}/images/clinic-interior.webp`;

// openGraph y twitter completos: el openGraph de una página reemplaza entero al
// del layout, así que cada página tiene que llevar su imagen.
export function social(title: string, description: string, url: string, image: string = OG_IMAGE) {
  return {
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_CONFIG.name,
      type: "website" as const,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [image],
    },
  };
}
