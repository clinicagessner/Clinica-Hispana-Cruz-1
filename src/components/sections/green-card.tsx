"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import {
  Phone,
  CalendarCheck,
  Stethoscope,
  Syringe,
  TestTube,
  FileText,
  CheckCircle,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CONTACT_INFO } from "@/lib/constants";

const features = [
  { icon: ShieldCheck, text: "Médico Civil Surgeon certificado por USCIS" },
  { icon: CalendarCheck, text: "Resultados en 3-5 días hábiles" },
  { icon: CheckCircle, text: "Atención 100% en español" },
  { icon: Phone, text: "Sin cita previa necesaria" },
];

const steps = [
  { number: 1, icon: CalendarCheck, title: "Agenda tu Cita" },
  { number: 2, icon: Stethoscope, title: "Examen Médico" },
  { number: 3, icon: Syringe, title: "Vacunas Requeridas" },
  { number: 4, icon: TestTube, title: "Pruebas de Laboratorio" },
  { number: 5, icon: FileText, title: "Formulario I-693" },
];

export function GreenCard() {
  const t = useTranslations("greenCard");
  const locale = useLocale();

  const getLocalizedHref = (href: string) => {
    if (locale === "es") return href;
    return href.startsWith("/") ? `/${locale}${href}` : `/${locale}/${href}`;
  };

  return (
    <section id="green-card" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/green-card-bg.webp')" }}
        role="img"
        aria-label="Examen médico de inmigración I-693 en Houston TX - Civil Surgeon certificado USCIS completando formulario para Green Card"
      />
      {/* Overlay with red tint */}
      <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/75 to-red-primary/50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="animate-on-scroll fade-up">
          {/* Badge */}
          <div className="flex justify-center mb-6">
            <Badge className="bg-red-primary hover:bg-red-dark text-white text-sm px-5 py-2 shadow-lg">
              <ShieldCheck className="size-4 mr-2" weight="fill" />
              {t("badge")}
            </Badge>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-white text-center mb-6">
            {t("title")}
          </h2>

          {/* Subtitle */}
          <p className="text-base md:text-lg lg:text-xl text-white/90 text-center max-w-3xl mx-auto mb-8 md:mb-12 px-2">
            {t("subtitle")}
          </p>

          {/* Steps Timeline */}
          <div className="relative max-w-5xl mx-auto mb-12 animate-on-scroll fade-up stagger-1">
            {/* Desktop Timeline */}
            <div className="hidden md:block">
              {/* Connecting Line */}
              <div className="absolute top-8 left-[10%] right-[10%] h-1 bg-linear-gradient(to right, var(--red-primary), var(--red-light), var(--red-primary)) rounded-full" />

              <div className="flex justify-between relative">
                {steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center group"
                    style={{ width: '20%' }}
                  >
                    {/* Number Circle */}
                    <div className="relative z-10 size-16 rounded-full bg-linear-gradient(to bottom, var(--red-primary), var(--red-dark)) text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-red-primary/40 group-hover:scale-110 transition-transform border-4 border-white/20">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="mt-4 size-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <step.icon className="size-6 text-red-light" weight="duotone" />
                    </div>

                    {/* Title */}
                    <span className="mt-3 text-sm font-semibold text-white text-center px-2">
                      {step.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Timeline - Vertical */}
            <div className="md:hidden relative pl-8">
              {/* Vertical Line */}
              <div className="absolute left-[18px] top-4 bottom-4 w-1 bg-linear-gradient(to bottom, var(--red-primary), var(--red-light), var(--red-primary)) rounded-full" />

              <div className="space-y-6">
                {steps.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-4 relative">
                    {/* Number Circle */}
                    <div className="absolute left-[-32px] size-10 rounded-full bg-linear-gradient(to bottom, var(--red-primary), var(--red-dark)) text-white flex items-center justify-center font-bold text-sm shadow-lg border-2 border-white/20 z-10">
                      {step.number}
                    </div>

                    {/* Card */}
                    <div className="flex-1 flex items-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
                      <div className="size-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                        <step.icon className="size-5 text-red-light" weight="duotone" />
                      </div>
                      <span className="text-sm font-semibold text-white">
                        {step.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features grid */}
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

          {/* CTA Buttons */}
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
            >
              <Phone className="size-5" weight="bold" />
              {t("ctaCall")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
