import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Phone, MapPin, Clock, Star, CheckCircle, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { EkgLine } from "@/components/animations/ekg-line";
import { CONTACT_INFO, GOOGLE_REVIEWS_DATA } from "@/lib/constants";
import { getGooglePlaceData } from "@/lib/google-places";

export async function Hero() {
  const [t, googleData] = await Promise.all([
    getTranslations("hero"),
    getGooglePlaceData(),
  ]);
  const totalReviews = googleData?.totalReviews ?? GOOGLE_REVIEWS_DATA.totalReviews;

  return (
    <section id="home" aria-labelledby="hero-title" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image - Explicit dimensions for faster LCP */}
      <Image
        src="/images/hero-bg.webp"
        alt="Fachada de Clínica Hispana Cruz en 7640 Airline Dr, Houston TX - atención médica 100% en español"
        width={1920}
        height={1080}
        priority
        fetchPriority="high"
        quality={50}
        className="absolute inset-0 w-full h-full object-cover object-[50%_30%]"
        sizes="100vw"
      />

      {/* Overlay duotono de marca: rojo profundo -> tinta */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-dark/95 via-slate-dark/80 to-red-dark/80" />
      <div className="absolute inset-0 bg-linear-to-t from-slate-dark/70 via-transparent to-transparent md:hidden" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 pt-28 md:pt-32 pb-40 md:pb-36">
        <div className="max-w-xl lg:max-w-3xl mx-auto md:mx-0 text-center md:text-left">

          {/* Google Rating Badge */}
          <div className="animate-hero-title inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/25 rounded-full px-5 py-2.5 mb-7">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-4 text-yellow-400" weight="fill" />
              ))}
            </div>
            <span className="text-white font-medium text-sm">{totalReviews}{t("googleReviews")}</span>
          </div>

          {/* Title */}
          <h1
            id="hero-title"
            className="animate-hero-subtitle font-heading font-extrabold uppercase tracking-tight text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] mb-5 drop-shadow-lg text-balance"
          >
            {t.rich("title", {
              hl: (chunks) => <span className="text-red-medium">{chunks}</span>,
            })}
          </h1>

          {/* Firma de marca: trazo EKG */}
          <EkgLine className="h-8 w-52 md:w-64 text-red-medium mx-auto md:mx-0 mb-6" />

          {/* Subtitle */}
          <p className="animate-hero-features text-lg md:text-xl text-white/95 mb-9 max-w-2xl mx-auto md:mx-0 drop-shadow-md">
            {t("subtitle")}
          </p>

          {/* CTA Buttons */}
          <div className="animate-hero-cta flex flex-col sm:flex-row gap-3 justify-center md:justify-start mb-4">
            <Button
              asChild
              size="lg"
              className="text-base md:text-lg px-8 py-6 gap-2 font-heading font-bold uppercase tracking-wide shadow-lg shadow-red-primary/40"
            >
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                aria-label={`${t("ctaCall")} ${CONTACT_INFO.phoneFormatted}`}
                suppressHydrationWarning
              >
                <Phone className="size-5" weight="fill" />
                {t("ctaCall")}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base md:text-lg px-8 py-6 gap-2 font-heading font-bold uppercase tracking-wide bg-transparent text-white border-white/70 hover:bg-white hover:text-slate-dark"
            >
              <a
                href={CONTACT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t("ctaLocation")}: ${CONTACT_INFO.address}, ${CONTACT_INFO.city}`}
              >
                <MapPin className="size-5" weight="fill" />
                {t("ctaLocation")}
              </a>
            </Button>
          </div>

          {/* Secondary contact link */}
          <div className="animate-hero-cta mb-9">
            <a
              href="#contact"
              className="group inline-flex items-center gap-1.5 text-base text-white/90 underline decoration-white/40 underline-offset-4 transition-colors duration-200 hover:text-white hover:decoration-white"
            >
              {t("ctaContact")}
              <ArrowRight
                className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                weight="bold"
              />
            </a>
          </div>

          {/* Features */}
          <div className="animate-hero-badges hidden md:grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 max-w-xl">
            {(["1", "2", "3", "4"] as const).map((key) => (
              <div key={key} className="flex items-center justify-center md:justify-start gap-2.5">
                <CheckCircle className="size-5 text-red-medium shrink-0" weight="fill" />
                <span className="text-white text-sm font-medium">{t(`features.${key}`)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-red-dark/90 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-white">
            {/* Hours */}
            <div className="flex items-center gap-2">
              <Clock className="size-5" weight="fill" />
              <span className="text-sm font-medium">{t("hours")}</span>
            </div>

            <div className="hidden md:block w-px h-5 bg-white/30" />

            {/* Address */}
            <a
              href={CONTACT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white/80 transition-colors"
            >
              <MapPin className="size-5" weight="fill" />
              <span className="text-sm">{CONTACT_INFO.address}, {CONTACT_INFO.city}, {CONTACT_INFO.state}</span>
            </a>

            <div className="hidden md:block w-px h-5 bg-white/30" />

            {/* Phone */}
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center gap-2 hover:text-white/80 transition-colors font-semibold"
              suppressHydrationWarning
            >
              <Phone className="size-5" weight="fill" />
              <span suppressHydrationWarning>{CONTACT_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
