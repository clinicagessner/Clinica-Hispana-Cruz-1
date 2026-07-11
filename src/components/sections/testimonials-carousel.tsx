"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Star, CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { useCallback, useEffect, useState } from "react";
import type { GoogleReview } from "@/lib/google-places";

interface TestimonialsCarouselProps {
  reviews: GoogleReview[];
}

export function TestimonialsCarousel({ reviews }: TestimonialsCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative">
      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-6"
            >
              {/* Card */}
              <div className="group relative h-full bg-white rounded-2xl p-6 md:p-7 border border-slate-100 shadow-sm transition-all duration-300 hover:border-red-primary/30 hover:shadow-xl hover:shadow-red-primary/10 hover:-translate-y-1">
                {/* Accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-red-primary via-red-medium to-red-primary rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`size-4 ${
                        i < review.rating ? "text-yellow-500" : "text-slate-200"
                      }`}
                      weight="fill"
                    />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-slate-600 leading-relaxed line-clamp-4 mb-6 min-h-[96px]">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="relative size-11 rounded-full overflow-hidden ring-2 ring-red-light">
                    <Image
                      src={review.profile_photo_url}
                      alt={`Foto de ${review.author_name} - Paciente de Clínica Hispana Cruz Houston`}
                      fill
                      sizes="44px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-slate-dark text-sm">
                      {review.author_name}
                    </p>
                    <p className="text-xs text-slate-500">
                      {review.relative_time_description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-10">
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollPrev}
          className="size-10 rounded-full hover:bg-red-primary/10 text-slate-500 hover:text-red-primary"
          aria-label="Anterior"
        >
          <CaretLeft className="size-5" weight="bold" />
        </Button>

        <div className="flex gap-1">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className="size-8 flex items-center justify-center"
              aria-label={`Ir a review ${index + 1}`}
            >
              <span
                className={`block rounded-full transition-colors duration-300 ${
                  index === selectedIndex
                    ? "size-3 bg-red-primary"
                    : "size-2.5 bg-slate-300 hover:bg-red-primary/50"
                }`}
              />
            </button>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={scrollNext}
          className="size-10 rounded-full hover:bg-red-primary/10 text-slate-500 hover:text-red-primary"
          aria-label="Siguiente"
        >
          <CaretRight className="size-5" weight="bold" />
        </Button>
      </div>
    </div>
  );
}
