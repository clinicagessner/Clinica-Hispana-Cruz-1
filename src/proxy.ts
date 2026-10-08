import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { routing } from "./i18n/routing";

// No detectar idioma del navegador: siempre español por defecto.
const intl = createMiddleware({
  ...routing,
  localeDetection: false,
});

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // Todas las rutas del sitio van en minúsculas: /SERVICIOS servía la misma
  // página con 200 (contenido duplicado). 308 a la versión en minúsculas.
  if (pathname !== pathname.toLowerCase()) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.toLowerCase();
    return NextResponse.redirect(url, 308);
  }
  return intl(request);
}

export const config = {
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)']
};
