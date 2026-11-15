import type { Metadata } from "next";

type Props = { params: Promise<{ codigo: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { codigo } = await params;
  return {
    title: `Verificar certificado — ${codigo}`,
    description: "Verificación pública de certificado emitido por AgroPilot.",
  };
}

/**
 * Página pública de verificación de certificados — PROVISIONAL
 * Se conecta a la base de datos en Etapa 5.
 */
export default async function VerificarPage({ params }: Props) {
  const { codigo } = await params;

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <div className="card text-center">
        {/* Ícono provisional */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-secondary/10">
          <svg className="h-8 w-8 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>

        <h1 className="heading-xl mb-2">Verificación de certificado</h1>
        <p className="text-sm text-gray-500 mb-6">
          Código: <span className="font-mono text-brand-primary font-semibold">{codigo}</span>
        </p>

        {/* Estado provisional */}
        <div className="rounded-lg bg-yellow-50 border border-yellow-200 p-4 text-sm text-yellow-800">
          Sistema de verificación pendiente de implementación (Etapa 5).
        </div>

        <div className="mt-8 text-left grid gap-3 text-sm">
          {[
            ["Alumno", "—"],
            ["Capacitación", "—"],
            ["Fecha", "—"],
            ["Horas", "—"],
            ["Examen teórico", "—"],
            ["Examen práctico", "—"],
            ["Estado del certificado", "—"],
          ].map(([label, value]) => (
            <div key={label} className="flex justify-between border-b border-gray-100 pb-2">
              <span className="font-medium text-gray-600">{label}</span>
              <span className="text-gray-400">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
