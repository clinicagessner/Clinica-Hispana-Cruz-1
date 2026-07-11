import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Promotions } from "@/components/sections/promotions";
import { ChronicCare } from "@/components/sections/chronic-care";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { FAQ } from "@/components/sections/faq";
import { Location } from "@/components/sections/location";
import { BlogPreview } from "@/components/sections/blog-preview";
import { ScrollSpy } from "@/components/animations/scroll-spy";

type Props = {
  params: Promise<{ locale: string }>;
};

// Ids de las secciones del home (en español), en orden de aparición.
// ScrollSpy actualiza el hash de la URL al hacer scroll.
const HOME_SECTION_IDS = [
  "inicio",
  "promociones",
  "servicios",
  "enfermedades-cronicas",
  "testimonios",
  "preguntas-frecuentes",
  "ubicacion",
  "blog",
  "contacto",
];

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <ScrollSpy sectionIds={HOME_SECTION_IDS} />
      <Hero />
      <Promotions />
      <Services />
      <ChronicCare />
      <Testimonials />
      <FAQ />
      <Location />
      <BlogPreview />
      <Contact />
    </>
  );
}
