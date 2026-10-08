import type { MetadataRoute } from "next";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";
import { getBlogPosts } from "@/lib/blog";
import { locales } from "@/i18n/config";
import { PAGE_DATES, serviceLastReviewed } from "@/lib/content-dates";

type SitemapEntry = {
  url: string;
  lastModified: Date;
  alternates?: {
    languages: Record<string, string>;
  };
};

// Sin priority ni changefreq: Google los ignora. lastmod real: antes todas
// las URLs llevaban la fecha del build y Google deja de leer un <lastmod>
// que siempre dice "hoy".
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.baseUrl;
  const blogPosts = getBlogPosts("es");
  const latestPostDate = blogPosts.reduce((latest, post) => {
    const d = post.dateModified ?? post.date;
    return d > latest ? d : latest;
  }, "1970-01-01");
  const latestOf = (...dates: string[]) => new Date(dates.sort().at(-1)!);

  // Helper to create alternates for hreflang
  const createAlternates = (path: string) => ({
    languages: {
      es: `${baseUrl}${path}`,
      en: `${baseUrl}/en${path}`,
      "x-default": `${baseUrl}${path}`,
    },
  });

  // Static pages. La home muestra el último post y las promociones.
  const staticPages = [
    { path: "", lastModified: latestOf(PAGE_DATES[""], PAGE_DATES["/promociones"], latestPostDate) },
    { path: "/services", lastModified: new Date(PAGE_DATES["/services"]) },
    { path: "/promociones", lastModified: new Date(PAGE_DATES["/promociones"]) },
    { path: "/blog", lastModified: new Date(latestPostDate) },
    { path: "/privacy", lastModified: new Date(PAGE_DATES["/privacy"]) },
  ];

  const staticRoutes: SitemapEntry[] = staticPages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${baseUrl}${locale === "es" ? "" : `/${locale}`}${page.path}`,
      lastModified: page.lastModified,
      alternates: createAlternates(page.path),
    }))
  );

  // Service pages
  const serviceRoutes: SitemapEntry[] = SERVICES.flatMap((service) =>
    locales.map((locale) => ({
      url: `${baseUrl}${locale === "es" ? "" : `/${locale}`}/services/${service.slug}`,
      lastModified: new Date(serviceLastReviewed(service.slug)),
      alternates: createAlternates(`/services/${service.slug}`),
    }))
  );

  // Blog posts
  const blogRoutes: SitemapEntry[] = blogPosts.flatMap((post) =>
    locales.map((locale) => ({
      url: `${baseUrl}${locale === "es" ? "" : `/${locale}`}/blog/${post.slug}`,
      lastModified: new Date(post.dateModified ?? post.date),
      alternates: createAlternates(`/blog/${post.slug}`),
    }))
  );

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
