import { unstable_cache } from "next/cache";

export interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  relative_time_description: string;
  profile_photo_url: string;
  author_url?: string;
}

export interface GooglePlaceData {
  rating: number;
  totalReviews: number;
  reviews: GoogleReview[];
}

// Places API (New) — https://places.googleapis.com/v1/places/{placeId}
// La key del proyecto solo tiene habilitada la API nueva (la legacy devuelve REQUEST_DENIED).
interface PlacesV1Response {
  rating?: number;
  userRatingCount?: number;
  reviews?: Array<{
    rating?: number;
    text?: { text?: string; languageCode?: string };
    originalText?: { text?: string };
    relativePublishTimeDescription?: string;
    publishTime?: string;
    authorAttribution?: {
      displayName?: string;
      uri?: string;
      photoUri?: string;
    };
  }>;
  error?: { code: number; message: string; status: string };
}

async function fetchGooglePlaceDetails(): Promise<GooglePlaceData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    console.warn("Google Places API key or Place ID not configured");
    return null;
  }

  // Sin try/catch aquí: si falla, la promesa se rechaza y unstable_cache no
  // guarda el fallo (se reintenta en la próxima petición).
  {
    const url = new URL(`https://places.googleapis.com/v1/places/${placeId}`);
    url.searchParams.set("fields", "rating,userRatingCount,reviews");
    url.searchParams.set("languageCode", "es");

    const response = await fetch(url.toString(), {
      headers: { "X-Goog-Api-Key": apiKey },
      // unstable_cache (abajo) es la única capa de caché; sin esto el fetch
      // guardaría su propia copia en el Data Cache y podría servir datos viejos.
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data: PlacesV1Response = await response.json();

    if (data.error) {
      throw new Error(`Google Places API error: ${data.error.status} ${data.error.message}`);
    }

    // Places omite `reviews` en silencio si el proyecto de la clave pierde la
    // facturación: se trata como fallo para no cachear una respuesta vacía.
    if (!data.reviews?.length) {
      throw new Error("Google Places API: respuesta sin reseñas");
    }

    // Filter: only 5-star reviews with text
    const filteredReviews = (data.reviews ?? [])
      .filter(
        (review) =>
          review.rating === 5 && (review.text?.text ?? "").trim().length > 0
      )
      .map((review) => ({
        author_name: review.authorAttribution?.displayName ?? "Paciente",
        rating: review.rating ?? 5,
        text: review.text?.text ?? "",
        time: review.publishTime ? Math.floor(Date.parse(review.publishTime) / 1000) : 0,
        relative_time_description: review.relativePublishTimeDescription ?? "",
        profile_photo_url:
          review.authorAttribution?.photoUri || "/images/avatars/default.webp",
        author_url: review.authorAttribution?.uri,
      }));

    return {
      rating: data.rating ?? 5.0,
      totalReviews: data.userRatingCount ?? 0,
      reviews: filteredReviews,
    };
  }
}

// Cached version - revalidates every week. Solo se cachean respuestas buenas.
// v3: clave renombrada para no heredar una entrada cacheada con el fallo
// (la Data Cache de Vercel sobrevive a los deploys).
const getCachedGooglePlaceData = unstable_cache(
  fetchGooglePlaceDetails,
  ["google-place-data-v3"],
  {
    revalidate: 604800, // 1 week
    tags: ["google-reviews"],
  }
);

export async function getGooglePlaceData(): Promise<GooglePlaceData | null> {
  try {
    return await getCachedGooglePlaceData();
  } catch (error) {
    console.error("Error fetching Google Place details:", error);
    return null;
  }
}
