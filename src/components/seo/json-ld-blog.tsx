import { SITE_CONFIG, CONTACT_INFO } from "@/lib/constants";
import type { BlogPost } from "@/types";

type Props = {
  post: BlogPost;
  locale: string;
};

export function JsonLdBlogPosting({ post, locale }: Props) {
  // Spanish is the default locale and has no URL prefix
  const localePath = locale === "es" ? "" : `/${locale}`;
  const url = `${SITE_CONFIG.baseUrl}${localePath}/blog/${post.slug}`;
  const clinicId = `${SITE_CONFIG.baseUrl}/#clinic`;

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    headline: post.title,
    description: post.description,
    image: post.image
      ? `${SITE_CONFIG.baseUrl}${post.image}`
      : `${SITE_CONFIG.baseUrl}/images/og-image.jpg`,
    datePublished: post.date,
    dateModified: post.dateModified || post.date,
    author: {
      "@type": "Organization",
      "@id": clinicId,
      name: post.author,
      url: SITE_CONFIG.baseUrl,
    },
    reviewedBy: {
      "@type": "Organization",
      "@id": clinicId,
      name:
        locale === "es"
          ? `Equipo médico de ${SITE_CONFIG.name}`
          : `${SITE_CONFIG.name} medical team`,
    },
    publisher: {
      "@type": "MedicalClinic",
      "@id": clinicId,
      name: SITE_CONFIG.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.baseUrl}${SITE_CONFIG.logoUrl}`,
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: CONTACT_INFO.address,
        addressLocality: CONTACT_INFO.city,
        addressRegion: CONTACT_INFO.state,
        postalCode: CONTACT_INFO.zip,
        addressCountry: "US",
      },
    },
    inLanguage: locale === "es" ? "es-MX" : "en-US",
    wordCount: post.content.split(/\s+/).length,
    articleSection: post.category || "Salud",
    keywords: post.keywords?.length
      ? post.keywords.join(", ")
      : [
          "clínica hispana Houston",
          "salud",
          "medicina familiar Houston",
          post.category?.toLowerCase() || "salud",
        ].join(", "),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: locale === "es" ? "Inicio" : "Home",
        item: SITE_CONFIG.baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_CONFIG.baseUrl}${localePath}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
