import type { Metadata } from "next";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Capacitación #${id}`,
  };
}

/**
 * Página de detalle de capacitación — PROVISIONAL
 * Se conecta a la base de datos en Etapa 3.
 */
export default async function CapacitacionDetallePage({ params }: Props) {
  const { id } = await params;

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <a href="/capacitaciones" className="text-sm text-brand-secondary hover:underline mb-6 block">
        ← Volver a capacitaciones
      </a>

      <div className="card">
        <span className="text-xs font-semibold text-brand-secondary uppercase tracking-wide">
          ID: {id}
        </span>
        <h1 className="heading-xl mt-2 mb-4">Detalle de capacitación</h1>

        <dl className="grid gap-4 sm:grid-cols-2 text-sm">
          {[
            ["País", "—"],
            ["Provincia / Estado", "—"],
            ["Fecha de inicio", "—"],
            ["Fecha de finalización", "—"],
            ["Horas totales", "—"],
            ["Ubicación", "—"],
          ].map(([label, value]) => (
            <div key={label}>
              <dt className="font-semibold text-gray-600">{label}</dt>
              <dd className="text-gray-400">{value}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-8 text-xs text-gray-400">
          Página provisional — el contenido real se carga desde base de datos en Etapa 3.
        </p>
      </div>
    </div>
  );
}
