import { buildLlmsTxt } from "@/lib/llms";
import { getGooglePlaceData } from "@/lib/google-places";
import { GOOGLE_REVIEWS_DATA } from "@/lib/constants";

// Se regenera una vez al día para reflejar el conteo de reseñas y cualquier
// cambio en servicios, promociones o artículos.
export const revalidate = 86400;

export async function GET() {
  const googleData = await getGooglePlaceData();
  const body = buildLlmsTxt({
    reviews: googleData?.totalReviews ?? GOOGLE_REVIEWS_DATA.totalReviews,
    rating: googleData?.rating ?? GOOGLE_REVIEWS_DATA.averageRating,
    generatedAt: new Date(),
  });
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
