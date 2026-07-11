"use client";

import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { Phone, MapPin, ChatCircleText, CheckCircle, X } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import type {
  LocalizedPromotion,
  PromotionLabels,
  PromotionContact,
} from "@/lib/promotions";

interface PromotionDialogProps {
  promo: LocalizedPromotion | null;
  labels: PromotionLabels;
  contact: PromotionContact;
  /** Anchor to the lead form: "#contact" on home, "#lead-form" on the page. */
  formHref: string;
  onClose: () => void;
}

export function PromotionDialog({
  promo,
  labels,
  contact,
  formHref,
  onClose,
}: PromotionDialogProps) {
  return (
    <Dialog.Root
      open={promo !== null}
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0" />
        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-50 flex w-[calc(100%-2rem)] max-w-md max-h-[90vh] -translate-x-1/2 -translate-y-1/2 flex-col overflow-y-auto rounded-2xl bg-white shadow-2xl focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95"
          aria-describedby={undefined}
        >
          {promo && (
            <>
              {/* Close button (receives initial focus) */}
              <Dialog.Close
                aria-label={labels.close}
                className="absolute right-3 top-3 z-10 flex size-9 items-center justify-center rounded-full bg-slate-900/50 text-white transition-colors hover:bg-slate-900/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <X className="size-5" weight="bold" />
              </Dialog.Close>

              {/* Limited-time badge */}
              <span className="absolute left-3 top-3 z-10 inline-flex items-center rounded-full bg-red-primary px-3 py-1 text-xs font-semibold text-white shadow-sm">
                {labels.limitedTime}
              </span>

              {/* Full flyer image — shown complete (no crop) */}
              <div className="relative aspect-4/5 w-full shrink-0 bg-red-bg">
                <Image
                  src={promo.image}
                  alt={promo.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 28rem"
                  className="object-contain"
                />
              </div>

              {/* Body */}
              <div className="flex flex-col gap-4 p-6">
                <Dialog.Title className="font-heading text-xl font-bold text-slate-dark">
                  {promo.title}
                </Dialog.Title>

                {promo.price && (
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs font-medium uppercase tracking-wide text-slate-primary">
                      {labels.priceLabel}
                    </span>
                    <span className="font-heading text-3xl font-bold text-red-primary">
                      {promo.price}
                    </span>
                  </div>
                )}

                <p className="text-sm leading-relaxed text-slate-primary">
                  {promo.blurb}
                </p>

                {promo.includes.length > 0 && (
                  <div>
                    <p className="mb-2 text-sm font-semibold text-slate-dark">
                      {labels.includesLabel}
                    </p>
                    <ul className="flex flex-col gap-2">
                      {promo.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-slate-primary">
                          <CheckCircle className="mt-0.5 size-4 shrink-0 text-success" weight="fill" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* 3 contextual CTAs */}
                <div className="mt-2 flex flex-col gap-3">
                  <Button asChild size="lg" className="gap-2">
                    <a
                      href={`tel:${contact.phone}`}
                      aria-label={`${labels.ctaCall} ${contact.phoneFormatted} — ${promo.title}`}
                      suppressHydrationWarning
                    >
                      <Phone className="size-5" weight="fill" />
                      {labels.ctaCall}
                    </a>
                  </Button>

                  <div className="grid grid-cols-2 gap-3">
                    <Button asChild variant="outline" className="gap-2">
                      <a
                        href={contact.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MapPin className="size-5" weight="fill" />
                        {labels.ctaDirections}
                      </a>
                    </Button>

                    <Button asChild variant="secondary" className="gap-2">
                      <a href={formHref} onClick={onClose}>
                        <ChatCircleText className="size-5" weight="fill" />
                        {labels.ctaForm}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
