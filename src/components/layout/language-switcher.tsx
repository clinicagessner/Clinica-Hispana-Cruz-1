"use client";

import { useLocale } from "next-intl";
import { usePathname } from "@/i18n/routing";
import { GlobeIcon } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  isScrolled?: boolean;
}

// Enlace real con href escrito a mano (§7 B0.1): un botón con onClick no es
// rastreable y el Link de next-intl con `locale` genera /es → 307.
export function LanguageSwitcher({ isScrolled = true }: LanguageSwitcherProps) {
  const locale = useLocale();
  const pathname = usePathname();
  const path = pathname === "/" ? "" : pathname;
  const href = locale === "es" ? `/en${path}` : path || "/";
  const targetLocale = locale === "es" ? "en" : "es";

  return (
    <a
      href={href}
      hrefLang={targetLocale}
      lang={targetLocale}
      className={cn(
        "inline-flex h-8 items-center gap-1.5 rounded-md px-3 text-sm font-medium transition-colors",
        isScrolled
          ? "text-slate-dark hover:text-red-primary hover:bg-red-light/50"
          : "text-white hover:text-white/80 hover:bg-white/10"
      )}
      aria-label={locale === "es" ? "Switch to English" : "Cambiar a Español"}
    >
      <GlobeIcon className="size-4" weight="bold" aria-hidden="true" />
      <span className="uppercase">{locale === "es" ? "EN" : "ES"}</span>
    </a>
  );
}
