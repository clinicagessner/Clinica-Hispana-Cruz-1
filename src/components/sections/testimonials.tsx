import { getTranslations } from "next-intl/server";
import { StarIcon, GoogleLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { TestimonialsCarousel } from "@/components/sections/testimonials-carousel";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO, GOOGLE_REVIEWS_DATA } from "@/lib/constants";
import { getGooglePlaceData } from "@/lib/google-places";
import { EkgLine } from "@/components/animations/ekg-line";

// Solo reseñas reales de Google (Places). Si la API no responde, el carrusel
// no se muestra: inventar testimonios viola las políticas de Google (§9).

export async function Testimonials() {
  // Parallel fetching - eliminates waterfall
  const [t, googleData] = await Promise.all([
    getTranslations("testimonials"),
    getGooglePlaceData()
  ]);

  const averageRating = googleData?.rating ?? GOOGLE_REVIEWS_DATA.averageRating;
  const totalReviews = googleData?.totalReviews ?? GOOGLE_REVIEWS_DATA.totalReviews;
  const reviews = googleData?.reviews ?? [];

  return (
    <section id="testimonios" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="animate-on-scroll fade-up text-center max-w-2xl mx-auto mb-12">
          <EkgLine static className="h-6 w-36 text-red-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl section-title mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t("subtitle")}
          </p>

          {/* Google Stats */}
          <div className="inline-flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-sm border border-slate-100">
            <GoogleLogoIcon className="size-6 text-slate-dark" weight="bold" />
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="size-4 text-yellow-500" weight="fill" />
              ))}
            </div>
            <span className="font-bold text-slate-dark">{averageRating}</span>
            <span className="text-muted-foreground text-sm">({totalReviews}+ {t("reviews")})</span>
          </div>
        </div>

        {/* Carousel */}
        {reviews.length > 0 && <TestimonialsCarousel reviews={reviews} />}

        {/* CTA */}
        <div className="text-center mt-14">
          <Button asChild size="lg" variant="outline" className="gap-2 rounded-full px-8">
            <a
              href={CONTACT_INFO.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GoogleLogoIcon className="size-5" weight="bold" />
              {t("leaveReview")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
