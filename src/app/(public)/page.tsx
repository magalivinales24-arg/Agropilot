import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inicio",
  description: "Bienvenido a AgroPilot — Capacitaciones y certificaciones en maquinaria pesada y drones agrícolas.",
};

/**
 * Página de inicio pública — PROVISIONAL
 * Se desarrolla en detalle en la Etapa 2.
 */
export default function HomePage() {
  return (
    <div>
      {/* Hero provisional */}
      <section className="bg-brand-primary text-white py-24 px-6 text-center">
        <h1 className="heading-xl text-white text-5xl mb-4">
          Capacitaciones Profesionales
        </h1>
        <p className="text-lg text-blue-200 max-w-2xl mx-auto mb-8">
          Formación técnica en maquinaria pesada, drones agrícolas y más.
          Operamos en Argentina, Brasil, Paraguay y Uruguay.
        </p>
        <Link href="/capacitaciones" className="btn-primary bg-brand-accent text-brand-dark hover:bg-yellow-400">
          Ver capacitaciones
        </Link>
      </section>

      {/* Secciones provisionales */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid gap-8 md:grid-cols-3">
        <div className="card">
          <h2 className="heading-md mb-2">Quiénes somos</h2>
          <p className="text-gray-500 text-sm">Contenido pendiente — se completa en Etapa 2.</p>
        </div>
        <div className="card">
          <h2 className="heading-md mb-2">Nuestras especialidades</h2>
          <p className="text-gray-500 text-sm">Contenido pendiente — se completa en Etapa 2.</p>
        </div>
        <div className="card">
          <h2 className="heading-md mb-2">Países donde operamos</h2>
          <p className="text-gray-500 text-sm">Argentina · Brasil · Paraguay · Uruguay</p>
        </div>
      </section>
    </div>
  );
}
