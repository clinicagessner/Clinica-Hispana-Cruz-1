import { getTranslations } from "next-intl/server";
import { Star, GoogleLogo } from "@phosphor-icons/react/dist/ssr";
import { TestimonialsCarousel } from "@/components/sections/testimonials-carousel";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO, GOOGLE_REVIEWS_DATA } from "@/lib/constants";
import { getGooglePlaceData, type GoogleReview } from "@/lib/google-places";

// Fallback reviews when API is unavailable (using fixed timestamps to avoid hydration mismatch)
const fallbackReviews: GoogleReview[] = [
  {
    author_name: "María García",
    rating: 5,
    text: "Excelente atención, todo el personal habla español y me sentí muy cómoda. El doctor fue muy amable y profesional. Recomiendo esta clínica a toda la comunidad hispana.",
    time: 1710000000000,
    relative_time_description: "hace 2 semanas",
    profile_photo_url: "/images/avatars/avatar-1.webp",
  },
  {
    author_name: "Carlos Rodríguez",
    rating: 5,
    text: "Muy buen servicio, no tuve que esperar mucho y los precios son muy accesibles. Me atendieron sin cita y resolvieron mi problema de salud rápidamente.",
    time: 1707400000000,
    relative_time_description: "hace 1 mes",
    profile_photo_url: "/images/avatars/avatar-2.webp",
  },
  {
    author_name: "Ana Martínez",
    rating: 5,
    text: "La mejor clínica hispana en Houston. Llevé a mis hijos y los trataron con mucho cariño. El laboratorio es muy eficiente y los resultados fueron rápidos.",
    time: 1709400000000,
    relative_time_description: "hace 3 semanas",
    profile_photo_url: "/images/avatars/avatar-3.webp",
  },
  {
    author_name: "José López",
    rating: 5,
    text: "Muy profesionales y atentos. Me explicaron todo en español y me dieron opciones de pago. Definitivamente volveré para mis chequeos regulares.",
    time: 1704800000000,
    relative_time_description: "hace 2 meses",
    profile_photo_url: "/images/avatars/avatar-4.webp",
  },
  {
    author_name: "Laura Hernández",
    rating: 5,
    text: "Excelente experiencia. El personal es muy amable y el lugar está muy limpio. Me sentí como en casa. Los recomiendo ampliamente.",
    time: 1710600000000,
    relative_time_description: "hace 1 semana",
    profile_photo_url: "/images/avatars/avatar-5.webp",
  },
];

export async function Testimonials() {
  // Parallel fetching - eliminates waterfall
  const [t, googleData] = await Promise.all([
    getTranslations("testimonials"),
    getGooglePlaceData()
  ]);

  const averageRating = googleData?.rating ?? GOOGLE_REVIEWS_DATA.averageRating;
  const totalReviews = googleData?.totalReviews ?? GOOGLE_REVIEWS_DATA.totalReviews;
  const reviews = googleData?.reviews?.length ? googleData.reviews : fallbackReviews;

  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="animate-on-scroll fade-up text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-dark mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {t("subtitle")}
          </p>

          {/* Google Stats */}
          <div className="inline-flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-sm border border-slate-100">
            <GoogleLogo className="size-6 text-slate-dark" weight="bold" />
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-4 text-yellow-500" weight="fill" />
              ))}
            </div>
            <span className="font-bold text-slate-dark">{averageRating}</span>
            <span className="text-muted-foreground text-sm">({totalReviews}+ {t("reviews")})</span>
          </div>
        </div>

        {/* Carousel */}
        <TestimonialsCarousel reviews={reviews} />

        {/* CTA */}
        <div className="text-center mt-14">
          <Button asChild size="lg" variant="outline" className="gap-2 rounded-full px-8">
            <a
              href={CONTACT_INFO.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GoogleLogo className="size-5" weight="bold" />
              {t("leaveReview")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
