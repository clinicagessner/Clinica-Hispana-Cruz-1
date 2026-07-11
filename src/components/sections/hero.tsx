import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Phone, MapPin, Clock, Star, CheckCircle, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO, GOOGLE_REVIEWS_DATA } from "@/lib/constants";
import { getGooglePlaceData } from "@/lib/google-places";

export async function Hero() {
  const t = await getTranslations("hero");
  const googleData = await getGooglePlaceData();
  const totalReviews = googleData?.totalReviews ?? GOOGLE_REVIEWS_DATA.totalReviews;

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image - Explicit dimensions for faster LCP */}
      <Image
        src="/images/hero-bg.webp"
        alt="Clínica médica hispana en Houston TX - Doctor atendiendo paciente con atención profesional 100% en español"
        width={1920}
        height={1080}
        priority
        fetchPriority="high"
        quality={50}
        className="absolute inset-0 w-full h-full object-cover"
        sizes="100vw"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-slate-900/75" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 pt-28 md:pt-32 pb-40 md:pb-32">
        <div className="max-w-4xl mx-auto text-center">

          {/* Google Rating Badge */}
          <div className="animate-hero-title inline-flex items-center gap-3 bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-5 py-2.5 mb-6">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-5 text-yellow-400" weight="fill" />
              ))}
            </div>
            <span className="text-white font-medium text-sm">{totalReviews}{t("googleReviews")}</span>
          </div>

          {/* Title */}
          <h1 className="animate-hero-subtitle text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 md:mb-6 leading-tight drop-shadow-lg">
            {t("title")}
          </h1>

          {/* Subtitle */}
          <p className="animate-hero-features text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto drop-shadow-md">
            {t("subtitle")}
          </p>

          {/* CTA Buttons */}
          <div className="animate-hero-cta flex flex-col sm:flex-row gap-3 justify-center mb-4">
            <Button asChild size="lg" className="text-base md:text-lg px-8 py-6 gap-2 shadow-lg shadow-red-primary/30">
              <a href={`tel:${CONTACT_INFO.phone}`} suppressHydrationWarning>
                <Phone className="size-5" weight="fill" />
                {t("ctaCall")}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base md:text-lg px-8 py-6 gap-2 bg-white text-slate-dark border-white hover:bg-white/90"
            >
              <a
                href={CONTACT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="size-5" weight="fill" />
                {t("ctaLocation")}
              </a>
            </Button>
          </div>

          {/* Secondary contact link */}
          <div className="animate-hero-cta mb-8">
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

          {/* Features - Hidden on mobile, visible on tablet+ */}
          <div className="animate-hero-badges hidden md:flex flex-wrap justify-center gap-x-6 gap-y-2">
            {(["1", "2", "3", "4"] as const).map((key) => (
              <div key={key} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5">
                <CheckCircle className="size-4 text-green-400 shrink-0" weight="fill" />
                <span className="text-white text-sm">{t(`features.${key}`)}</span>
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
