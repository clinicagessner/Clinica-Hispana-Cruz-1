"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import {
  ArrowRight,
  Stethoscope,
  FirstAid,
  Flask,
  Heartbeat,
  Drop,
  Heart,
  GenderFemale,
  Syringe,
  Clipboard,
  Virus,
  Lightning,
  TestTube,
  Star,
  Pulse,
  ShieldCheck,
  FileText,
  Wind,
  Truck,
  Scissors,
  Users,
  Bone,
  Monitor,
  Pill,
  FunnelSimple,
} from "@phosphor-icons/react/dist/ssr";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Service } from "@/types";

const iconMap: Record<string, React.ElementType> = {
  Stethoscope,
  FirstAid,
  Flask,
  Heartbeat,
  Drop,
  Heart,
  GenderFemale,
  Syringe,
  Clipboard,
  Virus,
  Lightning,
  TestTube,
  Activity: Pulse,
  ShieldCheck,
  FileText,
  Wind,
  Truck,
  Scissors,
  Users,
  Bone,
  Monitor,
  Pill,
  Shield: ShieldCheck,
};

interface Category {
  id: string;
  label: string;
  iconName: string;
}

interface ServicesFilterProps {
  services: Service[];
  categories: Category[];
}

const categoryIconMap: Record<string, React.ElementType> = {
  Star,
  Stethoscope,
  TestTube,
  GenderFemale,
  Clipboard,
  Syringe,
};

export function ServicesFilter({ services, categories }: ServicesFilterProps) {
  const t = useTranslations("services");
  const locale = useLocale();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const getLocalizedHref = (href: string) => {
    if (locale === "es") return href;
    return href.startsWith("/") ? `/${locale}${href}` : `/${locale}/${href}`;
  };

  const filteredServices = activeCategory === "all"
    ? services
    : services.filter((s) => s.category === activeCategory);

  return (
    <section className="pt-8 pb-16 md:pt-10 md:pb-20">
      <div className="container mx-auto px-4">
        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <Button
            variant={activeCategory === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory("all")}
            className={cn(
              "gap-2 rounded-full",
              activeCategory === "all" && "bg-red-primary hover:bg-red-dark"
            )}
          >
            <FunnelSimple className="size-4" weight="bold" />
            {t("filterAll")}
          </Button>

          {categories.map((cat) => {
            const Icon = categoryIconMap[cat.iconName] || Star;
            return (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "gap-2 rounded-full",
                  activeCategory === cat.id && "bg-red-primary hover:bg-red-dark"
                )}
              >
                <Icon className="size-4" weight="duotone" />
                {cat.label}
              </Button>
            );
          })}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.icon] || Stethoscope;

            return (
              <Link
                key={service.id}
                href={getLocalizedHref(`/services/${service.slug}`)}
                className="group block"
              >
                <article className="relative h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-red-200 flex flex-col">
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

                    {/* Icon Badge */}
                    <div className="absolute bottom-3 left-3">
                      <div className="size-10 rounded-xl bg-white/95 backdrop-blur-sm text-red-primary flex items-center justify-center shadow-lg group-hover:bg-red-primary group-hover:text-white transition-colors">
                        <IconComponent className="size-5" weight="duotone" />
                      </div>
                    </div>

                    {/* Popular Badge */}
                    {service.highlighted && (
                      <Badge className="absolute top-3 right-3 bg-red-primary hover:bg-red-dark text-xs shadow-lg">
                        Popular
                      </Badge>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-heading font-bold text-slate-dark mb-2 group-hover:text-red-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-red-primary font-medium text-sm group-hover:gap-2.5 transition-all">
                      {t("learnMore")}
                      <ArrowRight className="size-4" weight="bold" />
                    </span>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        {/* No results */}
        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">{t("noServices")}</p>
          </div>
        )}
      </div>
    </section>
  );
}
