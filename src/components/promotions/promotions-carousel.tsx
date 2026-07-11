"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { PromotionDialog } from "@/components/promotions/promotion-dialog";
import type {
  LocalizedPromotion,
  PromotionLabels,
  PromotionContact,
} from "@/lib/promotions";

interface PromotionsCarouselProps {
  promotions: LocalizedPromotion[];
  labels: PromotionLabels & { prev: string; next: string; swipeHint: string };
  contact: PromotionContact;
  formHref: string;
}

export function PromotionsCarousel({
  promotions,
  labels,
  contact,
  formHref,
}: PromotionsCarouselProps) {
  const [selected, setSelected] = useState<LocalizedPromotion | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4 md:-ml-6">
          {promotions.map((promo) => (
            <div
              key={promo.slug}
              className="flex-[0_0_80%] min-w-0 pl-4 sm:flex-[0_0_50%] md:pl-6 lg:flex-[0_0_33.333%]"
            >
              <button
                type="button"
                onClick={() => setSelected(promo)}
                aria-label={`${labels.openAria}: ${promo.title}`}
                className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-primary/30 hover:shadow-xl hover:shadow-red-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-primary focus-visible:ring-offset-2"
              >
                {/* Flyer — shown complete (no crop) */}
                <div className="relative aspect-4/5 w-full shrink-0 bg-red-bg">
                  <Image
                    src={promo.image}
                    alt={promo.alt}
                    fill
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain"
                  />
                  {/* Hover/focus overlay */}
                  <div className="absolute inset-0 flex items-end justify-center bg-linear-to-t from-slate-900/70 via-slate-900/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-red-primary shadow-md">
                      {labels.viewPromotion}
                    </span>
                  </div>
                </div>

                {/* Caption — fixed heights so every card is identical */}
                <div className="flex flex-1 flex-col p-4 text-left">
                  <span className="line-clamp-2 min-h-[2.5rem] font-heading text-sm font-bold text-slate-dark">
                    {promo.title}
                  </span>
                  <span className="mt-1 min-h-[1.75rem] font-heading text-lg font-bold text-red-primary">
                    {promo.price ?? ""}
                  </span>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollPrev}
          className="size-10 rounded-full text-slate-500 hover:bg-red-primary/10 hover:text-red-primary"
          aria-label={labels.prev}
        >
          <CaretLeft className="size-5" weight="bold" />
        </Button>
        <span className="text-sm text-slate-primary sm:hidden">{labels.swipeHint}</span>
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollNext}
          className="size-10 rounded-full text-slate-500 hover:bg-red-primary/10 hover:text-red-primary"
          aria-label={labels.next}
        >
          <CaretRight className="size-5" weight="bold" />
        </Button>
      </div>

      <PromotionDialog
        promo={selected}
        labels={labels}
        contact={contact}
        formHref={formHref}
        onClose={() => setSelected(null)}
      />
    </div>
  );
}
