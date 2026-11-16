import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capacitaciones",
  description: "Listado de capacitaciones disponibles por país y provincia.",
};

/**
 * Página de listado de capacitaciones — PROVISIONAL
 * Se conecta a la base de datos en Etapa 3.
 */
export default function CapacitacionesPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="heading-xl mb-2">Capacitaciones disponibles</h1>
      <p className="text-gray-500 mb-10">
        Seleccioná un país para ver las capacitaciones disponibles, fechas y ubicaciones.
      </p>

      {/* Filtros provisionales */}
      <div className="flex gap-3 mb-10 flex-wrap">
        {["Todos", "Argentina", "Brasil", "Paraguay", "Uruguay"].map((pais) => (
          <button
            key={pais}
            className="rounded-full border border-brand-primary px-4 py-1.5 text-sm font-medium text-brand-primary hover:bg-brand-primary hover:text-white transition"
          >
            {pais}
          </button>
        ))}
      </div>

      {/* Cards provisionales */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          { titulo: "Operación de Drones Agrícolas", pais: "Argentina", fecha: "Próximamente" },
          { titulo: "Maquinaria Pesada — Nivel I", pais: "Brasil", fecha: "Próximamente" },
          { titulo: "Excavadoras y Movimiento de Tierra", pais: "Paraguay", fecha: "Próximamente" },
        ].map((cap) => (
          <div key={cap.titulo} className="card hover:shadow-md transition">
            <span className="text-xs font-semibold text-brand-secondary uppercase tracking-wide">
              {cap.pais}
            </span>
            <h3 className="heading-md mt-1 mb-2">{cap.titulo}</h3>
            <p className="text-sm text-gray-500 mb-4">Fecha: {cap.fecha}</p>
            <link href="#" className="btn-primary text-xs py-1.5 px-3">Ver detalle</link>
          </div>
        ))}
      </div>

      <p className="mt-12 text-center text-xs text-gray-400">
        Página provisional — el contenido real se carga desde base de datos en Etapa 3.
      </p>
    </div>
  );
}
