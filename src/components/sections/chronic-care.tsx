"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import {
  Phone,
  CalendarCheck,
  Heart,
  Syringe,
  TestTube,
  CheckCircle,
  Heartbeat,
  Drop,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CONTACT_INFO } from "@/lib/constants";

const conditions = [
  { icon: Drop, titleKey: "diabetes" },
  { icon: Heartbeat, titleKey: "hypertension" },
  { icon: TestTube, titleKey: "cholesterol" },
  { icon: Heart, titleKey: "thyroid" },
];

const features = [
  { icon: CheckCircle, text: "Laboratorio con resultados el mismo día" },
  { icon: CalendarCheck, text: "Seguimiento médico continuo" },
  { icon: CheckCircle, text: "Atención 100% en español" },
  { icon: Phone, text: "Sin cita previa necesaria" },
];

export function ChronicCare() {
  const t = useTranslations("chronicCare");
  const locale = useLocale();

  const getLocalizedHref = (href: string) => {
    if (locale === "es") return href;
    return href.startsWith("/") ? `/${locale}${href}` : `/${locale}/${href}`;
  };

  return (
    <section id="chronic-care" className="relative py-20 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/green-card-bg.webp')" }}
        role="img"
        aria-label="Control de enfermedades crónicas en Houston TX - Diabetes, hipertensión, colesterol y tiroides"
      />
      <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/75 to-red-primary/50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="animate-on-scroll fade-up">
          <div className="flex justify-center mb-6">
            <Badge className="bg-red-primary hover:bg-red-dark text-white text-sm px-5 py-2 shadow-lg">
              <Heart className="size-4 mr-2" weight="fill" />
              {t("badge")}
            </Badge>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white text-center mb-6">
            {t("title")}
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-white/90 text-center max-w-3xl mx-auto mb-8 md:mb-12 px-2">
            {t("subtitle")}
          </p>

          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-heading font-bold text-white text-center mb-6">
              {t("conditionsTitle")}
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto animate-on-scroll fade-up stagger-1">
              {conditions.map((condition, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors"
                >
                  <div className="size-14 rounded-full bg-red-primary/30 flex items-center justify-center">
                    <condition.icon className="size-7 text-red-light" weight="duotone" />
                  </div>
                  <span className="text-sm font-semibold text-white text-center">
                    {t(`conditions.${condition.titleKey}`)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto mb-12 animate-on-scroll fade-up stagger-2">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 md:p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10"
              >
                <div className="size-9 md:size-10 rounded-full bg-red-primary/30 flex items-center justify-center shrink-0">
                  <feature.icon className="size-4 md:size-5 text-red-light" weight="fill" />
                </div>
                <span className="text-xs md:text-sm text-white/90">{feature.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 px-4 sm:px-0 animate-on-scroll fade-up stagger-3">
            <Button
              size="lg"
              className="bg-red-primary hover:bg-red-dark text-white gap-2 shadow-lg shadow-red-primary/30 text-sm md:text-base px-6 md:px-8 w-full sm:w-auto"
              asChild
            >
              <Link href={getLocalizedHref("/#contact")}>
                <CalendarCheck className="size-5" weight="bold" />
                {t("ctaSchedule")}
              </Link>
            </Button>
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="inline-flex items-center justify-center h-11 px-6 md:px-8 rounded-lg border-2 border-white text-white font-medium bg-transparent hover:bg-white hover:text-slate-dark transition-colors gap-2 text-sm md:text-base w-full sm:w-auto"
              suppressHydrationWarning
            >
              <Phone className="size-5" weight="bold" />
              {t("ctaCall")}
            </a>
          </div>

          <div className="flex justify-center mt-6">
            <Link
              href={getLocalizedHref("/services/condiciones-cronicas")}
              className="text-white/80 hover:text-white underline text-sm transition-colors"
            >
              {t("learnMore")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
