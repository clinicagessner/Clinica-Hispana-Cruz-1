import type { Metadata } from "next";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { ScrollAnimations } from "@/components/animations/scroll-animations";
import Script from "next/script";
import { SITE_CONFIG, GOOGLE_REVIEWS_DATA } from "@/lib/constants";
import { getGooglePlaceData } from "@/lib/google-places";
import "../globals.css";
import Image from "next/image";
import { ConversionEvents } from "@/components/tracking/conversion-events";
import { GoogleTags } from "@/components/tracking/google-tags";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-source-sans",
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const [t, googleData] = await Promise.all([
    getTranslations({ locale, namespace: "metadata" }),
    getGooglePlaceData(),
  ]);
  const reviews = googleData?.totalReviews ?? GOOGLE_REVIEWS_DATA.totalReviews;
  const rating = googleData?.rating ?? GOOGLE_REVIEWS_DATA.averageRating;
  const ogDescription = t("ogDescription", { reviews, rating });

  return {
    title: {
      default: t("title"),
      template: t("titleTemplate"),
    },
    description: t("description"),
    keywords: [
      "clínica hispana Houston",
      "clínica hispana Cruz Houston",
      "clínica hispana Airline Dr",
      "clínica hispana 77037",
      "médico español Houston",
      "doctor hispano Houston",
      "clínica médica Houston TX",
      "medicina familiar Houston",
      "urgencias menores Houston",
      "laboratorio clínico Houston",
      "Hispanic clinic Houston",
      "Spanish speaking doctor Houston",
    ],
    authors: [{ name: SITE_CONFIG.name }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon.svg", type: "image/svg+xml" },
      ],
      apple: "/apple-touch-icon.png",
    },
    metadataBase: new URL(SITE_CONFIG.baseUrl),
    alternates: {
      canonical: locale === "en" ? "/en" : "/",
      languages: {
        es: "/",
        en: "/en",
        "x-default": "/",
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_MX" : "en_US",
      alternateLocale: locale === "es" ? "en_US" : "es_MX",
      url: SITE_CONFIG.baseUrl,
      siteName: SITE_CONFIG.name,
      title: t("title"),
      description: ogDescription,
      images: [
        {
          url: `${SITE_CONFIG.baseUrl}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: `${SITE_CONFIG.name} - Clínica médica hispana en Houston TX`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: ogDescription,
      images: [`${SITE_CONFIG.baseUrl}/images/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    // TODO(randy): agregar los tokens de Google Search Console de Clínica Hispana Cruz
    // verification: {
    //   google: [],
    // },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// IDs de analitica por variable de entorno: sin variable, el script no se inyecta
// (evita mandar datos a cuentas equivocadas en dev/preview y permite rotar IDs sin tocar codigo).
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const CALLRAIL_SWAP_SRC = process.env.NEXT_PUBLIC_CALLRAIL_SWAP_SRC;

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Rutas con punto (/index.php, /wp-login.php...) saltan el middleware de next-intl
  // y llegan aqui como "locale": sin esta validacion se servia la home con 200.
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} data-scroll-behavior="smooth" className={`${montserrat.variable} ${sourceSans.variable}`} suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#DC2626" />
        {/* Meta Pixel noscript fallback */}
        {META_PIXEL_ID && (
          <noscript>
            <Image 
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        )}
      </head>
      <body className="antialiased min-h-screen flex flex-col" suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <TooltipProvider>
            {children}
            <ScrollToTop />
            <ScrollAnimations />
          </TooltipProvider>
        </NextIntlClientProvider>
        <ConversionEvents />
      </body>
      {/* GA4, Ads y Meta Pixel: con la primera interacción (google-tags.tsx) */}
      <GoogleTags />
      {/* CallRail (cambio de número) tras la carga: no compite con el LCP (§7 B0.12) */}
      {CALLRAIL_SWAP_SRC && <Script id="callrail-swap" src={CALLRAIL_SWAP_SRC} strategy="lazyOnload" />}
    </html>
  );
}
