import type { Metadata } from "next";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import {
  Phone,
  MapPin,
  Clock,
  Star,
  CheckCircle,
  Calendar,
  ShieldCheck,
  CurrencyDollar,
  Translate,
  Car,
  Flask,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CONTACT_INFO,
  CONQUESTING_PHONE,
  SITE_CONFIG,
  GOOGLE_REVIEWS_DATA,
  SERVICES,
} from "@/lib/constants";
import { getGooglePlaceData } from "@/lib/google-places";
import { getLocalizedService } from "@/lib/utils";

type Props = {
  params: Promise<{ locale: string }>;
};

const copy = {
  es: {
    metaTitle: "Clínica Hispana en Houston | Atención el Mismo Día",
    metaDescription:
      "Atención médica profesional 100% en español. Sin cita previa, walk-ins. Más de 500 reseñas 5★ en Google. Llame: (281) 741-2157",
    badgeReviews: (avg: number, total: number) => `${avg} con ${total}+ reseñas en Google`,
    heroTitle: "¿Busca una mejor opción de clínica hispana en Houston?",
    heroSubtitle:
      "Atención médica profesional el mismo día, sin cita previa, sin seguro requerido. 100% en español, precios accesibles.",
    ctaCallPrefix: "Llamar",
    ctaDirections: "Cómo Llegar",
    heroFootnote: "Lunes a Domingo · 9:00 AM - 9:00 PM · Walk-ins bienvenidos",
    diffSectionTitle: "¿Por qué los hispanos eligen Clínica Hispana Cruz?",
    diffSectionDesc:
      "Atención médica accesible para usted y su familia, sin las complicaciones de hospitales grandes.",
    differentiators: [
      { title: "Reseñas 5 estrellas", desc: "Cientos de pacientes hispanos satisfechos en Google." },
      { title: "Sin cita previa", desc: "Llegue y reciba atención el mismo día." },
      { title: "Lunes a Domingo", desc: "Horario extendido de 9:00 AM a 9:00 PM." },
      { title: "100% en español", desc: "Todo el personal habla su idioma." },
      { title: "Sin seguro requerido", desc: "Aceptamos pacientes con o sin cobertura." },
      { title: "Precios accesibles", desc: "Tarifas transparentes antes de atenderle." },
      { title: "Estacionamiento gratis", desc: "Amplio parking frente a la clínica." },
      { title: "Laboratorio en sitio", desc: "Resultados el mismo día sin enviarle a otro lugar." },
    ],
    offeringsTitle: "Lo que ofrecemos",
    offeringsDesc: "Todo lo que necesita en una sola visita, sin complicaciones.",
    offeringsRows: [
      { label: "Reseñas en Google" },
      { label: "Horario", value: "7 días, hasta 9:00 PM" },
      { label: "Cita previa", value: "No se requiere" },
      { label: "Pago", value: "Sin necesidad de seguro" },
      { label: "Idioma", value: "100% Español" },
      { label: "Examen I-693", value: "Civil Surgeon USCIS" },
      { label: "Estacionamiento", value: "Gratis y amplio" },
      { label: "Laboratorio", value: "Resultados el mismo día" },
    ],
    reviewsLabel: (avg: number, total: number) => `${total}+ con ${avg}★`,
    servicesTitle: "Servicios principales",
    servicesDesc: "Atención médica integral para toda la familia hispana.",
    testimonialsTitle: "Lo que dicen nuestros pacientes",
    testimonialsDesc: "Reseñas verificadas de Google de pacientes reales.",
    locationTitle: "Visítenos en Houston",
    locationDesc:
      "Ubicados en el norte de Houston con acceso fácil y estacionamiento gratuito.",
    addressLabel: "Dirección",
    hoursLabel: "Horario",
    hoursValue: "Lunes a Domingo: 9:00 AM - 9:00 PM",
    phoneLabel: "Teléfono",
    openInMaps: "Abrir en Google Maps",
    mapTitle: "Ubicación Clínica Hispana Cruz",
    faqTitle: "Preguntas Frecuentes",
    faqDesc: "Respuestas a las dudas más comunes antes de su visita.",
    faqItems: [
      {
        q: "¿Necesito hacer cita?",
        a: "No. Atendemos walk-ins durante todo nuestro horario (Lunes a Domingo, 9:00 AM - 9:00 PM). Llegue cuando le acomode y le atendemos lo más pronto posible.",
      },
      {
        q: "¿Atienden a pacientes sin seguro médico?",
        a: "Sí. No necesitas seguro para atenderte. Ofrecemos precios accesibles de pago directo y le informamos el costo antes de cualquier servicio.",
      },
      {
        q: "¿Todo el personal habla español?",
        a: "Sí, atendemos 100% en español. Nuestra clínica fue creada para servir a la comunidad hispana de Houston.",
      },
      {
        q: "¿Tienen laboratorio en la clínica?",
        a: "Sí, contamos con laboratorio clínico en sitio. La mayoría de pruebas (glucosa, colesterol, A1C, tiroides, embarazo) tienen resultados el mismo día.",
      },
      {
        q: "¿Realizan exámenes de inmigración I-693?",
        a: "Sí. Contamos con Civil Surgeons certificados por USCIS para el examen médico I-693 requerido para la Green Card.",
      },
      {
        q: "¿Dónde están ubicados?",
        a: "Estamos en 7640 Airline Dr # D, Houston TX 77037, en el norte de Houston cerca de la I-45. Estacionamiento gratuito y fácil acceso en transporte público.",
      },
    ],
    finalCtaTitle: "Reciba atención médica hoy mismo",
    finalCtaDesc:
      "Llame ahora o llegue directo a la clínica. Sin cita previa, atención el mismo día.",
    finalCtaBullets: ["Sin cita previa", "Sin necesidad de seguro", "100% en español"],
  },
  en: {
    metaTitle: "Hispanic Clinic in Houston | Same-Day Care",
    metaDescription:
      "Professional medical care 100% in Spanish. Walk-ins welcome, no appointment needed. 500+ 5-star Google reviews. Call: (281) 741-2157",
    badgeReviews: (avg: number, total: number) => `${avg} with ${total}+ Google reviews`,
    heroTitle: "Looking for a better hispanic clinic option in Houston?",
    heroSubtitle:
      "Same-day professional medical care, no appointment needed, no insurance required. 100% Spanish-speaking staff, affordable pricing.",
    ctaCallPrefix: "Call",
    ctaDirections: "Get Directions",
    heroFootnote: "Monday to Sunday · 9:00 AM - 9:00 PM · Walk-ins welcome",
    diffSectionTitle: "Why hispanic patients choose Clínica Hispana Cruz",
    diffSectionDesc:
      "Accessible medical care for you and your family, without the hassle of large hospitals.",
    differentiators: [
      { title: "5-star reviews", desc: "Hundreds of satisfied hispanic patients on Google." },
      { title: "No appointment needed", desc: "Walk in and receive same-day care." },
      { title: "Open 7 days a week", desc: "Extended hours from 9:00 AM to 9:00 PM." },
      { title: "100% Spanish-speaking", desc: "Our entire team speaks your language." },
      { title: "No insurance required", desc: "We see patients without insurance, with affordable self-pay pricing." },
      { title: "Affordable pricing", desc: "Transparent rates shared before any service." },
      { title: "Free parking", desc: "Ample parking right in front of the clinic." },
      { title: "On-site laboratory", desc: "Same-day results without sending you elsewhere." },
    ],
    offeringsTitle: "What we offer",
    offeringsDesc: "Everything you need in a single visit, without the hassle.",
    offeringsRows: [
      { label: "Google reviews" },
      { label: "Hours", value: "7 days, until 9:00 PM" },
      { label: "Appointment", value: "Not required" },
      { label: "Payment", value: "Self-pay, no insurance needed" },
      { label: "Language", value: "100% Spanish" },
      { label: "I-693 Exam", value: "USCIS Civil Surgeon" },
      { label: "Parking", value: "Free and ample" },
      { label: "Laboratory", value: "Same-day results" },
    ],
    reviewsLabel: (avg: number, total: number) => `${total}+ with ${avg}★`,
    servicesTitle: "Main services",
    servicesDesc: "Comprehensive medical care for the whole hispanic family.",
    testimonialsTitle: "What our patients say",
    testimonialsDesc: "Verified Google reviews from real patients.",
    locationTitle: "Visit us in Houston",
    locationDesc:
      "Located in north Houston with easy access and free parking.",
    addressLabel: "Address",
    hoursLabel: "Hours",
    hoursValue: "Monday to Sunday: 9:00 AM - 9:00 PM",
    phoneLabel: "Phone",
    openInMaps: "Open in Google Maps",
    mapTitle: "Clínica Hispana Cruz location",
    faqTitle: "Frequently Asked Questions",
    faqDesc: "Answers to the most common questions before your visit.",
    faqItems: [
      {
        q: "Do I need an appointment?",
        a: "No. We see walk-ins during all of our open hours (Monday to Sunday, 9:00 AM - 9:00 PM). Stop by whenever it works for you and we'll see you as soon as possible.",
      },
      {
        q: "Do you accept patients without health insurance?",
        a: "Yes. You don't need insurance to be seen. We offer affordable self-pay pricing and share the cost with you before any service.",
      },
      {
        q: "Does the entire staff speak Spanish?",
        a: "Yes, we provide care 100% in Spanish. Our clinic was created specifically to serve Houston's hispanic community.",
      },
      {
        q: "Do you have a laboratory on-site?",
        a: "Yes, we have an on-site clinical laboratory. Most tests (glucose, cholesterol, A1C, thyroid, pregnancy) have same-day results.",
      },
      {
        q: "Do you perform I-693 immigration medical exams?",
        a: "Yes. Our USCIS-certified Civil Surgeons perform the I-693 medical exam required for the Green Card.",
      },
      {
        q: "Where are you located?",
        a: "We're at 7640 Airline Dr # D, Houston TX 77037, in north Houston near I-45. Free parking and easy public transportation access.",
      },
    ],
    finalCtaTitle: "Get medical care today",
    finalCtaDesc:
      "Call now or walk into the clinic. No appointment needed, same-day care.",
    finalCtaBullets: ["No appointment", "No insurance needed", "100% Spanish-speaking"],
  },
} as const;

const ICONS = [Star, Calendar, Clock, Translate, ShieldCheck, CurrencyDollar, Car, Flask] as const;
const OFFERING_ICONS = [Star, Clock, Calendar, CurrencyDollar, Translate, ShieldCheck, Car, Flask] as const;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = locale === "en" ? copy.en : copy.es;
  const localePath = locale === "en" ? "/en" : "";

  return {
    title: t.metaTitle,
    description: t.metaDescription,
    robots: {
      index: false,
      follow: false,
      googleBot: { index: false, follow: false },
    },
    alternates: {
      canonical: `${SITE_CONFIG.baseUrl}${localePath}/landing/comparacion-clinicas-houston`,
    },
  };
}

export default async function LandingComparacionClinicasHouston({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = locale === "en" ? copy.en : copy.es;

  const googleData = await getGooglePlaceData();
  const totalReviews = googleData?.totalReviews ?? GOOGLE_REVIEWS_DATA.totalReviews;
  const averageRating = googleData?.rating ?? GOOGLE_REVIEWS_DATA.averageRating;
  const liveReviews = googleData?.reviews?.slice(0, 3) ?? [];

  const featuredServices = SERVICES.filter((s) => s.highlighted)
    .slice(0, 4)
    .map((s) => getLocalizedService(s, locale));

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <Image
          src="/images/hero-bg.webp"
          alt="Clínica Hispana Cruz - Houston TX"
          width={1920}
          height={1080}
          priority
          fetchPriority="high"
          quality={60}
          className="absolute inset-0 w-full h-full object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-slate-900/80" />

        <div className="container relative z-10 mx-auto px-4 pt-28 md:pt-32 pb-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-5 py-2.5 mb-6">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-5 text-yellow-400" weight="fill" />
                ))}
              </div>
              <span className="text-white font-medium text-sm">
                {t.badgeReviews(averageRating, totalReviews)}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-5 leading-tight drop-shadow-lg">
              {t.heroTitle}
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md">
              {t.heroSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="text-base md:text-lg px-8 py-6 gap-2 shadow-lg shadow-red-primary/30">
                <a href={`tel:${CONQUESTING_PHONE.phone}`} suppressHydrationWarning>
                  <Phone className="size-5" weight="fill" />
                  <span suppressHydrationWarning>
                    {t.ctaCallPrefix} {CONQUESTING_PHONE.phoneFormatted}
                  </span>
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base md:text-lg px-8 py-6 gap-2 bg-white text-slate-dark border-white hover:bg-white/90"
              >
                <a href={CONTACT_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                  <MapPin className="size-5" weight="fill" />
                  {t.ctaDirections}
                </a>
              </Button>
            </div>

            <p className="mt-6 text-sm text-white/80">{t.heroFootnote}</p>
          </div>
        </div>
      </section>

      {/* Diferenciadores */}
      <section className="py-16 md:py-24 bg-slate-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-dark mb-4">
              {t.diffSectionTitle}
            </h2>
            <p className="text-lg text-muted-foreground">{t.diffSectionDesc}</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 max-w-5xl mx-auto">
            {t.differentiators.map((item, i) => {
              const Icon = ICONS[i];
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-5 md:p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="size-11 rounded-xl bg-red-bg text-red-primary flex items-center justify-center mb-4">
                    <Icon className="size-6" weight="duotone" />
                  </div>
                  <h3 className="font-heading font-bold text-slate-dark mb-1.5 text-base md:text-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lo que ofrecemos */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-dark mb-4">
              {t.offeringsTitle}
            </h2>
            <p className="text-lg text-muted-foreground">{t.offeringsDesc}</p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            {t.offeringsRows.map((row, i) => {
              const Icon = OFFERING_ICONS[i];
              return (
                <div
                  key={i}
                  className="flex items-center gap-4 px-5 md:px-6 py-4 border-b border-slate-100 last:border-b-0"
                >
                  <div className="size-10 rounded-lg bg-red-bg text-red-primary flex items-center justify-center shrink-0">
                    <Icon className="size-5" weight="duotone" />
                  </div>
                  <div className="flex-1 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                    <span className="font-semibold text-slate-dark">{row.label}</span>
                    <span className="text-muted-foreground text-sm md:text-base">
                      {i === 0
                        ? t.reviewsLabel(averageRating, totalReviews)
                        : (row as { value: string }).value}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Servicios destacados */}
      <section className="py-16 md:py-24 bg-slate-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-dark mb-4">
              {t.servicesTitle}
            </h2>
            <p className="text-lg text-muted-foreground">{t.servicesDesc}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 max-w-5xl mx-auto">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="relative h-64 rounded-2xl overflow-hidden group"
              >
                <Image
                  src={service.image}
                  alt={`${service.title} - Clínica Hispana Cruz Houston`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/40 to-transparent" />
                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <h3 className="text-lg font-heading font-bold text-white mb-1">
                    {service.title}
                  </h3>
                  <p className="text-white/80 text-sm line-clamp-2">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reseñas */}
      {liveReviews.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-dark mb-4">
                {t.testimonialsTitle}
              </h2>
              <p className="text-lg text-muted-foreground">{t.testimonialsDesc}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {liveReviews.map((review, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"
                >
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(review.rating)].map((_, j) => (
                      <Star key={j} className="size-4 text-yellow-400" weight="fill" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed mb-4 line-clamp-6">
                    {review.text}
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <div className="size-9 rounded-full bg-red-bg text-red-primary flex items-center justify-center font-semibold text-sm">
                      {review.author_name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-dark">{review.author_name}</p>
                      <p className="text-xs text-muted-foreground">{review.relative_time_description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Ubicación */}
      <section className="py-16 md:py-24 bg-slate-light">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-dark mb-4">
              {t.locationTitle}
            </h2>
            <p className="text-lg text-muted-foreground">{t.locationDesc}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-6 border border-slate-100 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="size-5 text-red-primary shrink-0 mt-1" weight="fill" />
                <div>
                  <p className="font-semibold text-slate-dark">{t.addressLabel}</p>
                  <p className="text-muted-foreground text-sm">
                    {CONTACT_INFO.address}, {CONTACT_INFO.city}, {CONTACT_INFO.state} {CONTACT_INFO.zip}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="size-5 text-red-primary shrink-0 mt-1" weight="fill" />
                <div>
                  <p className="font-semibold text-slate-dark">{t.hoursLabel}</p>
                  <p className="text-muted-foreground text-sm">{t.hoursValue}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="size-5 text-red-primary shrink-0 mt-1" weight="fill" />
                <div>
                  <p className="font-semibold text-slate-dark">{t.phoneLabel}</p>
                  <a
                    href={`tel:${CONQUESTING_PHONE.phone}`}
                    className="text-red-primary hover:text-red-dark text-sm font-semibold"
                    suppressHydrationWarning
                  >
                    <span suppressHydrationWarning>{CONQUESTING_PHONE.phoneFormatted}</span>
                  </a>
                </div>
              </div>
              <Button asChild size="lg" className="w-full gap-2 mt-2">
                <a href={CONTACT_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                  <MapPin className="size-5" weight="fill" />
                  {t.openInMaps}
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>

            <div className="rounded-2xl overflow-hidden border border-slate-100 min-h-[280px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.9999999999995!2d-95.3698!3d29.8404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86409bb97325b173!2sCl%C3%ADnica%20Hispana%20Airline!5e0!3m2!1ses!2sus!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 280 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t.mapTitle}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-dark mb-4">
              {t.faqTitle}
            </h2>
            <p className="text-lg text-muted-foreground">{t.faqDesc}</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {t.faqItems.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-white border border-slate-100 rounded-2xl px-6 shadow-sm data-[state=open]:border-red-primary/30"
                >
                  <AccordionTrigger className="text-left font-semibold text-slate-dark hover:text-red-primary hover:no-underline py-5">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 md:py-20 bg-red-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              {t.finalCtaTitle}
            </h2>
            <p className="text-white/90 text-lg mb-8">{t.finalCtaDesc}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                asChild
                size="lg"
                className="text-base md:text-lg px-8 py-6 gap-2 bg-white text-red-primary hover:bg-white/90"
              >
                <a href={`tel:${CONQUESTING_PHONE.phone}`} suppressHydrationWarning>
                  <Phone className="size-5" weight="fill" />
                  <span suppressHydrationWarning>
                    {t.ctaCallPrefix} {CONQUESTING_PHONE.phoneFormatted}
                  </span>
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base md:text-lg px-8 py-6 gap-2 bg-transparent text-white border-white hover:bg-white hover:text-red-primary"
              >
                <a href={CONTACT_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                  <MapPin className="size-5" weight="fill" />
                  {t.ctaDirections}
                </a>
              </Button>
            </div>
            <p className="mt-6 text-sm text-white/80 flex items-center justify-center gap-2 flex-wrap">
              {t.finalCtaBullets.map((bullet, i) => (
                <span key={i} className="flex items-center gap-2">
                  <CheckCircle className="size-4" weight="fill" />
                  {bullet}
                  {i < t.finalCtaBullets.length - 1 && <span className="opacity-50">·</span>}
                </span>
              ))}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
