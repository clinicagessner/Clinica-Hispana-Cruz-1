import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    // Optimizador de Vercel desactivado (cuota de Image Optimization, /_next/image
    // → 402). Loader propio (B4): sirve las variantes pregeneradas de public/images
    // (scripts/generate-image-variants.mjs, en prebuild; manifiesto en
    // src/lib/image-variants.json) para que next/image emita srcset y el móvil no
    // descargue el archivo de escritorio. Lo que no está en el manifiesto (remotas,
    // PNG/JPG) se sirve tal cual.
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    deviceSizes: [384, 640, 828, 1080, 1376],
    imageSizes: [128, 256, 512],
    // Calidades que usan los <Image quality> del sitio (hero 50, landing 60).
    qualities: [50, 60, 75],
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
      { source: "/contact", destination: "/#contacto", permanent: true },
      { source: "/faq", destination: "/#preguntas-frecuentes", permanent: true },
      { source: "/pricing", destination: "/promociones", permanent: true },
      { source: "/testimonials", destination: "/#testimonios", permanent: true },
      { source: "/schedule", destination: "/#contacto", permanent: true },
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
      // Imágenes de public/: 30 días + revalidación en segundo plano. No
      // `immutable` porque los nombres no llevan hash y un flyer puede
      // reemplazarse con el mismo nombre.
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
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
