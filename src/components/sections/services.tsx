"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { SERVICES } from "@/lib/constants";
import { EkgLine } from "@/components/animations/ekg-line";

export function Services() {
  const t = useTranslations("services");
  const locale = useLocale();

  const getLocalizedHref = (href: string) => {
    if (locale === "es") return href;
    return href.startsWith("/") ? `/${locale}${href}` : `/${locale}/${href}`;
  };

  const highlightedServices = SERVICES.filter((s) => s.highlighted).slice(0, 4);

  return (
    <section id="servicios" className="py-16 md:py-24 bg-slate-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <EkgLine static className="h-6 w-36 text-red-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl section-title mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-4xl mx-auto">
          {/* Card 1 - Large (spans 2 rows on md+) */}
          {highlightedServices[0] && (
            <div className="md:row-span-2 group animate-on-scroll fade-up">
              <Link
                href={getLocalizedHref(`/services/${highlightedServices[0].slug}`)}
                className="block relative h-72 md:h-full min-h-[280px] md:min-h-[360px] rounded-2xl overflow-hidden"
              >
                <Image
                  src={highlightedServices[0].image}
                  alt={`${highlightedServices[0].title} - Clínica Hispana Cruz Houston TX`}
                  fill
                  priority
                  loading="eager"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
                    {highlightedServices[0].title}
                  </h3>
                  <p className="text-white/80 text-sm md:text-base mb-4 line-clamp-2">
                    {highlightedServices[0].description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all">
                    {t("learnMore")}
                    <ArrowRight className="size-5" weight="bold" />
                  </span>
                </div>
              </Link>
            </div>
          )}

          {/* Card 2 - Top right */}
          {highlightedServices[1] && (
            <div className="group animate-on-scroll fade-up stagger-1">
              <Link
                href={getLocalizedHref(`/services/${highlightedServices[1].slug}`)}
                className="block relative h-72 md:h-[calc(50%-10px)] min-h-[170px] rounded-2xl overflow-hidden"
              >
                <Image
                  src={highlightedServices[1].image}
                  alt={`${highlightedServices[1].title} - Clínica Hispana Cruz Houston TX`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <h3 className="text-xl font-heading font-bold text-white mb-1">
                    {highlightedServices[1].title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-white/80 text-sm font-medium group-hover:text-white group-hover:gap-2 transition-all">
                    {t("learnMore")}
                    <ArrowRight className="size-4" weight="bold" />
                  </span>
                </div>
              </Link>
            </div>
          )}

          {/* Card 3 - Bottom right */}
          {highlightedServices[2] && (
            <div className="group animate-on-scroll fade-up stagger-2">
              <Link
                href={getLocalizedHref(`/services/${highlightedServices[2].slug}`)}
                className="block relative h-72 md:h-[calc(50%-10px)] min-h-[170px] rounded-2xl overflow-hidden"
              >
                <Image
                  src={highlightedServices[2].image}
                  alt={`${highlightedServices[2].title} - Clínica Hispana Cruz Houston TX`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <h3 className="text-xl font-heading font-bold text-white mb-1">
                    {highlightedServices[2].title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-white/80 text-sm font-medium group-hover:text-white group-hover:gap-2 transition-all">
                    {t("learnMore")}
                    <ArrowRight className="size-4" weight="bold" />
                  </span>
                </div>
              </Link>
            </div>
          )}

          {/* Card 4 - Bottom wide */}
          {highlightedServices[3] && (
            <div className="md:col-span-2 group animate-on-scroll fade-up stagger-3">
              <Link
                href={getLocalizedHref(`/services/${highlightedServices[3].slug}`)}
                className="block relative h-72 md:h-52 rounded-2xl overflow-hidden"
              >
                <Image
                  src={highlightedServices[3].image}
                  alt={`${highlightedServices[3].title} - Clínica Hispana Cruz Houston TX`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />

                <div className="absolute inset-0 p-6 flex flex-col justify-center max-w-md">
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">
                    {highlightedServices[3].title}
                  </h3>
                  <p className="text-white/80 text-sm mb-3 line-clamp-2">
                    {highlightedServices[3].description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all">
                    {t("learnMore")}
                    <ArrowRight className="size-5" weight="bold" />
                  </span>
                </div>
              </Link>
            </div>
          )}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="gap-2">
            <Link href={getLocalizedHref("/services")}>
              {t("viewAll")}
              <ArrowRight className="size-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
