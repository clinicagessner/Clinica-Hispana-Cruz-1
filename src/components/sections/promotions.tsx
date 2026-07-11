import { getLocale, getTranslations } from "next-intl/server";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { PromotionsCarousel } from "@/components/promotions/promotions-carousel";
import { getLocalizedPromotions } from "@/lib/promotions";
import { CONTACT_INFO } from "@/lib/constants";

export async function Promotions() {
  const [t, locale] = await Promise.all([
    getTranslations("promotions"),
    getLocale(),
  ]);

  const promotions = getLocalizedPromotions(locale);

  const labels = {
    limitedTime: t("limitedTime"),
    priceLabel: t("priceLabel"),
    includesLabel: t("includesLabel"),
    ctaCall: t("ctaCall"),
    ctaDirections: t("ctaDirections"),
    ctaForm: t("ctaForm"),
    close: t("close"),
    openAria: t("openAria"),
    viewPromotion: t("viewPromotion"),
    viewDetail: t("viewDetail"),
    prev: t("prev"),
    next: t("next"),
    swipeHint: t("swipeHint"),
  };

  const contact = {
    phone: CONTACT_INFO.phone,
    phoneFormatted: CONTACT_INFO.phoneFormatted,
    googleMapsUrl: CONTACT_INFO.googleMapsUrl,
  };

  return (
    <section id="promociones" className="py-16 md:py-24 bg-red-bg">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="animate-on-scroll fade-up mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-red-primary">
            {t("eyebrow")}
          </p>
          <h2 className="mb-4 font-heading text-3xl font-bold text-slate-dark md:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground">{t("subtitle")}</p>
        </div>

        <PromotionsCarousel
          promotions={promotions}
          labels={labels}
          contact={contact}
          formHref="#contact"
        />

        {/* View all */}
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="gap-2">
            <Link href="/promociones">
              {t("viewAll")}
              <ArrowRight className="size-5" weight="bold" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
