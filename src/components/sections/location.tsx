import { getTranslations } from "next-intl/server";
import {
  MapPin,
  Car,
  Wheelchair,
  Bus,
  Clock,
  Phone,
  NavigationArrow,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO } from "@/lib/constants";

export async function Location() {
  const t = await getTranslations("location");

  const features = [
    { icon: Car, label: t("features.parking") },
    { icon: Wheelchair, label: t("features.wheelchair") },
    { icon: Bus, label: t("features.bus") },
    { icon: Clock, label: t("hours") },
  ];

  return (
    <section id="location" className="py-16 md:py-24 bg-slate-dark text-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="animate-on-scroll fade-up text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-white/70">{t("subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Map - Takes 3 columns */}
          <div className="animate-on-scroll fade-left stagger-1 lg:col-span-3 relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video lg:aspect-16/10">
              <iframe
                src={CONTACT_INFO.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de la Clínica Hispana Houston"
                className="absolute inset-0"
              />
            </div>
          </div>
          
          {/* Location Info - Takes 2 columns */}
          <div className="animate-on-scroll fade-right stagger-2 lg:col-span-2 flex flex-col gap-4">
            {/* Address Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-start gap-4 mb-5">
                <div className="size-12 rounded-xl bg-red-primary flex items-center justify-center shrink-0">
                  <MapPin className="size-6" weight="fill" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold mb-1">
                    {t("howToGetHere")}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {CONTACT_INFO.address}
                    <br />
                    {CONTACT_INFO.city}, {CONTACT_INFO.state} {CONTACT_INFO.zip}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  asChild
                  size="default"
                  className="flex-1 gap-2 bg-white text-primary hover:bg-white/90"
                >
                  <a
                    href={CONTACT_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <NavigationArrow className="size-4" weight="fill" />
                    {t("getDirections")}
                  </a>
                </Button>
                <Button
                  asChild
                  size="default"
                  className="flex-1 gap-2 bg-red-primary text-white hover:bg-red-dark border-0"
                >
                  <a href={`tel:${CONTACT_INFO.phone}`} suppressHydrationWarning>
                    <Phone className="size-4" weight="fill" />
                    {t("call")}
                  </a>
                </Button>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-3">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white/5 hover:bg-white/10 rounded-xl p-4 transition-colors border border-white/5"
                  >
                    <div className="size-10 rounded-lg bg-red-primary/20 flex items-center justify-center shrink-0">
                      <IconComponent
                        className="size-5 text-red-light"
                        weight="fill"
                      />
                    </div>
                    <span className="text-sm text-white/80 leading-tight">{feature.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
