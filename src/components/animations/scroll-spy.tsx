"use client";

import { useEffect } from "react";

interface ScrollSpyProps {
  /** Ids (en español) de las secciones del home, en orden de aparición */
  sectionIds: string[];
}

/**
 * Actualiza el hash de la URL según la sección visible al hacer scroll.
 * Usa history.replaceState (no ensucia el historial ni provoca saltos).
 * En el hero ("inicio") limpia el hash para dejar la URL canónica.
 */
export function ScrollSpy({ sectionIds }: ScrollSpyProps) {
  useEffect(() => {
    let ticking = false;
    let current = "";

    const update = () => {
      ticking = false;
      const scrollPosition = window.scrollY + window.innerHeight * 0.3;

      let active = sectionIds[0] ?? "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && scrollPosition >= el.offsetTop) {
          active = id;
        }
      }

      if (active === current) return;
      current = active;

      const { pathname, search } = window.location;
      // En el hero la URL queda limpia, sin hash
      const url = active === sectionIds[0] ? `${pathname}${search}` : `${pathname}${search}#${active}`;
      history.replaceState(history.state, "", url);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds]);

  return null;
}
