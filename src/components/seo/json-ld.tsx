import { SITE_CONFIG, CONTACT_INFO, SERVICES, SOCIAL_LINKS, GOOGLE_REVIEWS_DATA } from "@/lib/constants";
import { getGooglePlaceData } from "@/lib/google-places";

export async function JsonLdMedicalClinic() {
  const googleData = await getGooglePlaceData();
  const ratingValue = googleData?.rating ?? GOOGLE_REVIEWS_DATA.averageRating;
  const reviewCount = googleData?.totalReviews ?? GOOGLE_REVIEWS_DATA.totalReviews;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": `${SITE_CONFIG.baseUrl}/#clinic`,
        name: SITE_CONFIG.name,
        description: SITE_CONFIG.description,
        url: SITE_CONFIG.baseUrl,
        telephone: CONTACT_INFO.phone,
        email: CONTACT_INFO.email,
        image: `${SITE_CONFIG.baseUrl}/images/clinic-interior.webp`,
        logo: `${SITE_CONFIG.baseUrl}/images/logo.webp`,
        priceRange: "$$",
        currenciesAccepted: "USD",
        paymentAccepted: "Cash, Credit Card, Debit Card",
        address: {
          "@type": "PostalAddress",
          streetAddress: CONTACT_INFO.address,
          addressLocality: CONTACT_INFO.city,
          addressRegion: CONTACT_INFO.state,
          postalCode: CONTACT_INFO.zip,
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: CONTACT_INFO.coordinates.lat,
          longitude: CONTACT_INFO.coordinates.lng,
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue,
          reviewCount,
          bestRating: 5,
          worstRating: 1,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "09:00",
            closes: "21:00",
          },
        ],
        availableLanguage: [
          {
            "@type": "Language",
            name: "Spanish",
            alternateName: "es",
          },
          {
            "@type": "Language",
            name: "English",
            alternateName: "en",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios Médicos",
          itemListElement: SERVICES.slice(0, 10).map((service, index) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "MedicalProcedure",
              name: service.title,
              description: service.description,
            },
            position: index + 1,
          })),
        },
        sameAs: [
          SOCIAL_LINKS.facebook,
          SOCIAL_LINKS.x,
          SOCIAL_LINKS.linkedin,
          SOCIAL_LINKS.google,
        ].filter(Boolean),
        areaServed: {
          "@type": "City",
          name: "Houston",
          "@id": "https://www.wikidata.org/wiki/Q16555",
        },
        medicalSpecialty: [
          "Family Medicine",
          "Urgent Care",
          "Preventive Medicine",
          "Gynecology",
          "Immigration Medical Exam",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_CONFIG.baseUrl}/#website`,
        url: SITE_CONFIG.baseUrl,
        name: SITE_CONFIG.name,
        description: SITE_CONFIG.description,
        publisher: {
          "@id": `${SITE_CONFIG.baseUrl}/#clinic`,
        },
        inLanguage: ["es-MX", "en-US"],
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_CONFIG.baseUrl}/#webpage`,
        url: SITE_CONFIG.baseUrl,
        name: SITE_CONFIG.name,
        isPartOf: {
          "@id": `${SITE_CONFIG.baseUrl}/#website`,
        },
        about: {
          "@id": `${SITE_CONFIG.baseUrl}/#clinic`,
        },
        description: SITE_CONFIG.description,
        inLanguage: "es-MX",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQSchemaProps {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export function JsonLdFAQ({ questions }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export function JsonLdBreadcrumb({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface MedicalProcedureSchemaProps {
  name: string;
  description: string;
  image: string;
  url: string;
  bodyLocation?: string;
  procedureType?: string;
}

export function JsonLdMedicalProcedure({
  name,
  description,
  image,
  url,
  bodyLocation,
  procedureType = "NoninvasiveProcedure",
}: MedicalProcedureSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name,
    description,
    image: `${SITE_CONFIG.baseUrl}${image}`,
    url,
    procedureType: `https://schema.org/${procedureType}`,
    ...(bodyLocation && { bodyLocation }),
    howPerformed: description,
    provider: {
      "@type": "MedicalClinic",
      "@id": `${SITE_CONFIG.baseUrl}/#clinic`,
      name: SITE_CONFIG.name,
      telephone: CONTACT_INFO.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: CONTACT_INFO.address,
        addressLocality: CONTACT_INFO.city,
        addressRegion: CONTACT_INFO.state,
        postalCode: CONTACT_INFO.zip,
        addressCountry: "US",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function JsonLdCollectionPage({ name, description, url }: { name: string; description: string; url: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url,
    isPartOf: {
      "@id": `${SITE_CONFIG.baseUrl}/#website`,
    },
    about: {
      "@id": `${SITE_CONFIG.baseUrl}/#clinic`,
    },
    provider: {
      "@type": "MedicalClinic",
      "@id": `${SITE_CONFIG.baseUrl}/#clinic`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
