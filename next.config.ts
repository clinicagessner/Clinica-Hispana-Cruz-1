import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    // Optimizador de Vercel desactivado: la cuenta tiene topada la cuota de Image
    // Optimization (/_next/image devuelve HTTP 402). Servimos los originales,
    // ya comprimidos a mano (WebP q80 + PNG pngquant/oxipng).
    unoptimized: true,
    qualities: [50, 60, 75],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "maps.googleapis.com",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react", "lucide-react", "@radix-ui/react-accordion", "@radix-ui/react-dialog", "@radix-ui/react-select"],
  },
  async redirects() {
    return [
      // ============================================
      // MIGRACION WORDPRESS VIEJO (clinicahispanacruz.com)
      // Paginas y posts reales del sitemap de la web anterior
      // ============================================
      { source: "/about", destination: "/", permanent: true },
      { source: "/about/:path*", destination: "/", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
      { source: "/faq", destination: "/#faq", permanent: true },
      { source: "/pricing", destination: "/promociones", permanent: true },
      { source: "/testimonials", destination: "/#testimonials", permanent: true },
      { source: "/schedule", destination: "/#contact", permanent: true },
      { source: "/privacy-policy", destination: "/privacy", permanent: true },
      { source: "/single-service", destination: "/services", permanent: true },
      { source: "/our-process", destination: "/", permanent: true },
      { source: "/careers", destination: "/", permanent: true },
      { source: "/clients", destination: "/", permanent: true },
      // Posts del blog viejo -> servicio o post equivalente
      { source: "/artritis", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/covid-19", destination: "/services/enfermedades-respiratorias", permanent: true },
      { source: "/examenes-de-embarazo", destination: "/services/prueba-embarazo", permanent: true },
      { source: "/chequeos-de-salud", destination: "/services", permanent: true },
      { source: "/infecciones-respiratorias", destination: "/services/enfermedades-respiratorias", permanent: true },
      { source: "/infecciones-vaginales", destination: "/services/ginecologia", permanent: true },
      { source: "/planificacion-familiar", destination: "/services/anticonceptivos", permanent: true },
      { source: "/chequeo-de-inmigracion", destination: "/services/examenes-inmigracion", permanent: true },
      { source: "/extraccion-de-un-implante-hormonal", destination: "/services/extraccion-implantes", permanent: true },
      { source: "/azucar-en-sangre", destination: "/blog/control-diabetes-houston-guia-pacientes", permanent: true },
      { source: "/diabetes-como-detectarla-y-prevenir-complicaciones", destination: "/blog/control-diabetes-houston-guia-pacientes", permanent: true },
      { source: "/la-importancia-de-los-examenes-anuales-para-detectar-enfermedades-a-tiempo", destination: "/blog/laboratorio-clinico-houston-analisis-sangre", permanent: true },
      { source: "/el-impacto-del-estres-en-tu-salud-fisica-y-mental", destination: "/blog", permanent: true },
      { source: "/la-importancia-de-mantener-un-colesterol-saludable", destination: "/services/condiciones-cronicas", permanent: true },
      { source: "/el-examen-de-papanicolaou-prevencion-clave-para-la-salud-femenina", destination: "/blog/salud-mujer-houston-servicios-ginecologia", permanent: true },
      // Paginas demo del theme WordPress viejo
      { source: "/elements/:path*", destination: "/", permanent: true },
      { source: "/shop/:path*", destination: "/", permanent: true },
      { source: "/home/:path*", destination: "/", permanent: true },
      { source: "/case-studies/:path*", destination: "/", permanent: true },
      { source: "/case-studies-grid", destination: "/", permanent: true },
      { source: "/cost-calculator-2", destination: "/", permanent: true },
      { source: "/sample-page", destination: "/", permanent: true },
      { source: "/not-found", destination: "/", permanent: true },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self)",
          },
        ],
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");
export default withNextIntl(nextConfig);
