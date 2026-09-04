import {
  SITE_CONFIG,
  CONTACT_INFO,
  SOCIAL_LINKS,
  SERVICES,
  PROMOTIONS,
} from "@/lib/constants";
import { getBlogPosts } from "@/lib/blog";
import { getServiceFAQs } from "@/lib/service-faqs";
import es from "@/messages/es.json";
import type { Service } from "@/types";

// Los archivos llms.txt / llms-full.txt se generan desde los mismos datos que
// alimentan el sitio, así nunca quedan desfasados respecto a servicios,
// promociones o artículos. Idioma principal: español (con enlaces a /en).

const BASE = SITE_CONFIG.baseUrl;

const CATEGORY_ORDER: Service["category"][] = [
  "medicina-general",
  "salud-mujer",
  "examenes",
  "laboratorio",
  "tratamientos",
];

const CATEGORY_LABELS: Record<Service["category"], string> = {
  "medicina-general": es.services.categoryMedicinaGeneral,
  "salud-mujer": es.services.categorySaludMujer,
  examenes: es.services.categoryExamenes,
  laboratorio: es.services.categoryLaboratorio,
  tratamientos: es.services.categoryTratamientos,
};

const SISTER_CLINICS = [
  { name: "Clínica Hispana Cruz 2", address: "13331 Kuykendahl Rd, Houston, TX 77090" },
  { name: "Clínica Hispana Cruz 3", address: "5411 S Braeswood Blvd, Houston, TX 77096" },
  { name: "Clínica Hispana Cruz 4", address: "10100 Beechnut St, Houston, TX 77072" },
];

export interface LlmsOptions {
  reviews: number;
  rating: number;
  generatedAt: Date;
}

function servicesByCategory() {
  const sorted = [...SERVICES].sort((a, b) => a.order - b.order);
  return CATEGORY_ORDER.map((category) => ({
    category,
    label: CATEGORY_LABELS[category],
    services: sorted.filter((s) => s.category === category),
  })).filter((group) => group.services.length > 0);
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("es-MX", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

function header({ reviews, rating, generatedAt }: LlmsOptions) {
  return `# ${SITE_CONFIG.name} - Houston, TX

> ${es.location.about}

Sitio en español: ${BASE}/ · Sitio en inglés: ${BASE}/en
Actualizado: ${formatDate(generatedAt.toISOString())}

## Datos de contacto

- Nombre: ${SITE_CONFIG.name}
- Dirección: ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip} (norte de Houston, cerca de la I-45)
- Teléfono: ${CONTACT_INFO.phoneFormatted}
- WhatsApp: https://wa.me/${CONTACT_INFO.whatsapp}
- Correo: ${CONTACT_INFO.email}
- Horario: ${CONTACT_INFO.hours}
- Cita previa: no es necesaria, se atiende por orden de llegada
- Seguro médico: se atiende con o sin seguro; precios de pago directo
- Formas de pago: efectivo y tarjetas de crédito o débito
- Idiomas: español (principal) e inglés
- Estacionamiento gratuito y acceso para sillas de ruedas
- Reseñas: ${reviews.toLocaleString("en-US")} reseñas en Google con calificación ${rating.toFixed(1)} de 5
- Google Maps: ${CONTACT_INFO.googleMapsUrl}

## Perfiles externos

- Google Business Profile: ${SOCIAL_LINKS.google}
- Facebook: ${SOCIAL_LINKS.facebook}
- Instagram: ${SOCIAL_LINKS.instagram}
- Yelp: ${SOCIAL_LINKS.yelp}

## Otras clínicas del grupo Cruz en Houston

${SISTER_CLINICS.map((c) => `- ${c.name}: ${c.address}`).join("\n")}
`;
}

export function buildLlmsTxt(options: LlmsOptions) {
  const groups = servicesByCategory();
  const promotions = [...PROMOTIONS].sort((a, b) => a.order - b.order);
  const posts = getBlogPosts("es");

  const services = groups
    .map(
      (g) =>
        `### ${g.label}\n\n` +
        g.services
          .map(
            (s) =>
              `- [${s.title}](${BASE}/services/${s.slug}) (${s.titleEn ?? s.title}: ${BASE}/en/services/${s.slug}): ${s.description}`
          )
          .join("\n")
    )
    .join("\n\n");

  const promos = promotions
    .map((p) => `- ${p.title}${p.price ? ` — ${p.price}` : ""}: ${p.blurb}`)
    .join("\n");

  const blog = posts
    .map(
      (p) =>
        `- [${p.title}](${BASE}/blog/${p.slug}) (${formatDate(p.date)}): ${p.description}`
    )
    .join("\n");

  return `${header(options)}
## Servicios (${SERVICES.length})

Todos los servicios se atienden sin cita previa, en español, con o sin seguro médico.

${services}

Listado completo: ${BASE}/services · English: ${BASE}/en/services

## Promociones y paquetes (${promotions.length})

Precios de pago directo vigentes en ${BASE}/promociones (English: ${BASE}/en/promociones).

${promos}

## Artículos del blog de salud (${posts.length})

${blog}

Blog completo: ${BASE}/blog · English: ${BASE}/en/blog

## Más información

- Versión detallada de este archivo (descripciones completas y preguntas frecuentes): ${BASE}/llms-full.txt
- Mapa del sitio: ${BASE}/sitemap.xml
`;
}

export function buildLlmsFullTxt(options: LlmsOptions) {
  const groups = servicesByCategory();
  const promotions = [...PROMOTIONS].sort((a, b) => a.order - b.order);
  const posts = getBlogPosts("es");

  const services = groups
    .map(
      (g) =>
        `## ${g.label}\n\n` +
        g.services
          .map((s) => {
            const faqs = getServiceFAQs(s.slug, "es");
            const faqText = faqs.length
              ? `\n\n**Preguntas frecuentes**\n\n${faqs
                  .map((f) => `- ${f.question}\n  ${f.answer}`)
                  .join("\n")}`
              : "";
            return `### ${s.title}

URL: ${BASE}/services/${s.slug}
English: ${s.titleEn ?? s.title} — ${BASE}/en/services/${s.slug}

${s.description}

${s.longDescription}

**Incluye**

${s.features.map((f) => `- ${f}`).join("\n")}${faqText}`;
          })
          .join("\n\n")
    )
    .join("\n\n");

  const promos = promotions
    .map(
      (p) =>
        `### ${p.title}${p.price ? ` — ${p.price}` : ""}\n\n${p.blurb}\n\nIncluye:\n${p.includes
          .map((i) => `- ${i}`)
          .join("\n")}`
    )
    .join("\n\n");

  const faq = es.faq as Record<string, string>;
  const generalFaqs = Object.keys(faq)
    .filter((k) => /^q\d+$/.test(k))
    .map((qk) => `- ${faq[qk]}\n  ${faq[qk.replace("q", "a")].replace(/<\/?link>/g, "")}`)
    .join("\n");

  const blog = posts
    .map(
      (p) =>
        `- [${p.title}](${BASE}/blog/${p.slug})\n  Publicado: ${formatDate(p.date)}${
          p.dateModified ? ` · Actualizado: ${formatDate(p.dateModified)}` : ""
        }\n  ${p.description}`
    )
    .join("\n");

  return `${header(options)}
# Servicios (${SERVICES.length})

Todos los servicios se atienden sin cita previa, en español, con o sin seguro médico, en ${CONTACT_INFO.address}, ${CONTACT_INFO.city}, ${CONTACT_INFO.state} ${CONTACT_INFO.zip}.

${services}

# Promociones y paquetes (${promotions.length})

Precios de pago directo vigentes en ${BASE}/promociones.

${promos}

# Artículos del blog de salud (${posts.length})

${blog}

# Preguntas frecuentes generales

${generalFaqs}
`;
}
