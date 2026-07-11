import { cn } from "@/lib/utils";

interface EkgLineProps {
  className?: string;
  /** Sin animación de trazo (para usos repetidos fuera del hero) */
  static?: boolean;
}

/**
 * Trazo de electrocardiograma — la firma visual de la marca, derivada del
 * cardiograma del logo. Decorativo (aria-hidden); el color se hereda con
 * currentColor para usarse sobre fondos claros u oscuros.
 */
export function EkgLine({ className, static: isStatic = false }: EkgLineProps) {
  return (
    <svg
      viewBox="0 0 220 40"
      fill="none"
      aria-hidden="true"
      className={cn("ekg-line", isStatic && "ekg-line--static", className)}
    >
      <path
        d="M0 24 H56 L66 24 L74 10 L84 34 L92 4 L102 36 L110 24 H140 L146 18 L152 24 H220"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
