"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { List, Phone, MapPin } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { NAV_ITEMS, CONTACT_INFO, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

type HeaderProps = {
  phoneOverride?: { phone: string; phoneFormatted: string };
};

export function Header({ phoneOverride }: HeaderProps = {}) {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const isHomepage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const phone = phoneOverride?.phone ?? CONTACT_INFO.phone;
  const phoneFormatted = phoneOverride?.phoneFormatted ?? CONTACT_INFO.phoneFormatted;

  // Build locale-aware href
  const getLocalizedHref = (href: string) => {
    if (locale === "es") return href;
    return href.startsWith("/") ? `/${locale}${href}` : `/${locale}/${href}`;
  };

  // Use solid style on inner pages, transparent only on homepage when not scrolled
  const useTransparentStyle = isHomepage && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll spy to detect active section
  useEffect(() => {
    const sectionIds = ["home", ...NAV_ITEMS
      .filter(item => item.href.includes("#"))
      .map(item => item.href.split("#")[1])];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      // Find the section that's currently in view
      let currentSection = "home";

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = sectionId;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const isActiveLink = (href: string) => {
    if (href.includes("#")) {
      return isHomepage && activeSection === href.split("#")[1];
    }
    return pathname.startsWith(href) && href !== "/";
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        useTransparentStyle
          ? "bg-transparent py-4"
          : "bg-white/95 backdrop-blur-md shadow-md py-2"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={getLocalizedHref("/")} className="block">
            <div className="relative w-32 h-14 md:w-40 md:h-16 lg:w-48 lg:h-[72px]">
              <Image
                src="/images/logo.webp"
                alt={SITE_CONFIG.name}
                fill
                sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
                className="object-contain"
                priority
                fetchPriority="high"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={getLocalizedHref(item.href)}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isActiveLink(item.href)
                    ? "bg-red-primary text-white"
                    : useTransparentStyle
                      ? "text-white hover:text-white/80 hover:bg-white/10"
                      : "text-slate-dark hover:text-red-primary hover:bg-red-light/50"
                )}
              >
                {t(item.label)}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher isScrolled={!useTransparentStyle} />
            <Button asChild size="sm" className="gap-2">
              <a href={`tel:${phone}`} suppressHydrationWarning>
                <Phone className="size-4" weight="bold" />
                <span className="hidden xl:inline" suppressHydrationWarning>{phoneFormatted}</span>
                <span className="xl:hidden">{t("cta.callNow")}</span>
              </a>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex lg:hidden items-center gap-2">
            <LanguageSwitcher isScrolled={!useTransparentStyle} />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    useTransparentStyle
                      ? "text-white hover:text-white/80 hover:bg-white/10"
                      : "text-slate-dark hover:text-red-primary"
                  )}
                  aria-label={t("nav.menu")}
                >
                  <List className="size-6" weight="bold" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                <SheetTitle className="sr-only">{t("nav.menu")}</SheetTitle>
                <SheetDescription className="sr-only">
                  {t("accessibility.menuDescription")}
                </SheetDescription>
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <Link href={getLocalizedHref("/")} onClick={handleLinkClick} className="block">
                      <div className="relative w-36 h-14">
                        <Image
                          src="/images/logo.webp"
                          alt={SITE_CONFIG.name}
                          fill
                          sizes="144px"
                          className="object-contain"
                        />
                      </div>
                    </Link>
                  </div>

                  <nav className="flex flex-col gap-1 flex-1">
                    {NAV_ITEMS.map((item) => (
                      <Link
                        key={item.href}
                        href={getLocalizedHref(item.href)}
                        onClick={handleLinkClick}
                        className={cn(
                          "px-4 py-3 rounded-lg font-medium transition-colors",
                          isActiveLink(item.href)
                            ? "bg-red-primary text-white"
                            : "text-slate-dark hover:bg-red-light hover:text-red-dark"
                        )}
                      >
                        {t(item.label)}
                      </Link>
                    ))}
                  </nav>

                  <div className="pt-6 border-t space-y-3">
                    <Button asChild className="w-full gap-2" size="lg">
                      <a href={`tel:${phone}`} onClick={handleLinkClick} suppressHydrationWarning>
                        <Phone className="size-5" weight="bold" />
                        {t("cta.callNow")}
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full gap-2" size="lg">
                      <a
                        href={CONTACT_INFO.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleLinkClick}
                      >
                        <MapPin className="size-5" weight="bold" />
                        {t("cta.getDirections")}
                      </a>
                    </Button>
                    <p className="text-center text-sm text-muted-foreground" suppressHydrationWarning>
                      {phoneFormatted}
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
