import { buildLlmsFullTxt } from "@/lib/llms";
import { getGooglePlaceData } from "@/lib/google-places";
import { GOOGLE_REVIEWS_DATA } from "@/lib/constants";

export const revalidate = 86400;

export async function GET() {
  const googleData = await getGooglePlaceData();
  const body = buildLlmsFullTxt({
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
