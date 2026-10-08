import { ShieldCheck } from "@phosphor-icons/react/dist/ssr";

type Props = {
  /** Fecha de publicación en ISO (YYYY-MM-DD). Opcional en servicios. */
  published?: string;
  /** Fecha de la última revisión en ISO. */
  reviewed: string;
  locale: string;
  labels: {
    heading: string;
    /** Frase con {name}; nunca nombra a un médico concreto (§9 del playbook). */
    reviewedBy: string;
    published: string;
    lastReviewed: string;
  };
};

function fmt(date: string, locale: string) {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Caja de revisión médica (§12 B2). Sin nombre y credenciales de un médico
 * responsable, el contenido se firma como "equipo médico de la clínica".
 * Las fechas van en `<time datetime>` para que las lean las máquinas.
 */
export function MedicalReview({ published, reviewed, locale, labels }: Props) {
  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <ShieldCheck
          className="mt-0.5 size-5 shrink-0 text-red-primary"
          weight="duotone"
          aria-hidden="true"
        />
        <div className="text-sm text-slate-700">
          <p className="font-heading font-semibold text-slate-dark">{labels.heading}</p>
          <p className="mt-1">{labels.reviewedBy}</p>
          <p className="mt-2 text-xs text-muted-foreground">
            {published && (
              <>
                {labels.published}{" "}
                <time dateTime={published}>{fmt(published, locale)}</time>
                {" · "}
              </>
            )}
            {labels.lastReviewed}{" "}
            <time dateTime={reviewed}>{fmt(reviewed, locale)}</time>
          </p>
        </div>
      </div>
    </aside>
  );
}
