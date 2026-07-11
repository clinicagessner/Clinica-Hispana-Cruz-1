"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { PromotionDialog } from "@/components/promotions/promotion-dialog";
import type {
  LocalizedPromotion,
  PromotionLabels,
  PromotionContact,
} from "@/lib/promotions";

interface PromotionsGridProps {
  promotions: LocalizedPromotion[];
  labels: PromotionLabels;
  contact: PromotionContact;
  formHref: string;
}

export function PromotionsGrid({
  promotions,
  labels,
  contact,
  formHref,
}: PromotionsGridProps) {
  const [selected, setSelected] = useState<LocalizedPromotion | null>(null);

  // Deep-link: /promociones#<slug> opens that dialog. Clear the hash BEFORE
  // opening so that closing the dialog does not re-open or "redirect".
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const match = promotions.find((p) => p.slug === hash);
    if (!match) return;
    window.history.replaceState(null, "", window.location.pathname + window.location.search);
    // One-time sync from the URL hash on mount (deep-link), not a render-driven update.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSelected(match);
  }, [promotions]);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {promotions.map((promo) => (
          <article
            key={promo.slug}
            className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-primary/30 hover:shadow-xl hover:shadow-red-primary/10"
          >
            {/* Flyer thumbnail — shown complete (no crop) */}
            <div className="relative aspect-4/5 w-full bg-red-bg">
              <Image
                src={promo.image}
                alt={promo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-contain"
              />
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col p-5">
              <div className="mb-2 flex items-start justify-between gap-2">
                <h2 className="font-heading text-base font-bold text-slate-dark">
                  {promo.title}
                </h2>
                {promo.price && (
                  <span className="shrink-0 font-heading text-lg font-bold text-red-primary">
                    {promo.price}
                  </span>
                )}
              </div>

              {/* Blurb kept in full DOM (line-clamp is visual only) for indexing */}
              <p className="mb-5 line-clamp-2 text-sm leading-relaxed text-slate-primary">
                {promo.blurb}
              </p>

              <Button
                type="button"
                onClick={() => setSelected(promo)}
                variant="outline"
                className="mt-auto w-full gap-2"
                aria-label={`${labels.openAria}: ${promo.title}`}
              >
                {labels.viewDetail}
                <ArrowRight className="size-4" weight="bold" />
              </Button>
            </div>
          </article>
        ))}
      </div>

      <PromotionDialog
        promo={selected}
        labels={labels}
        contact={contact}
        formHref={formHref}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
