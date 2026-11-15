import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard — Admin",
};

/**
 * Dashboard del panel de administración — PROVISIONAL
 * Las métricas reales se conectan en Etapa 3+.
 */
export default function AdminDashboardPage() {
  const stats = [
    { label: "Capacitaciones",  value: "—", color: "bg-brand-primary" },
    { label: "Alumnos",         value: "—", color: "bg-brand-secondary" },
    { label: "Inscripciones",   value: "—", color: "bg-brand-accent" },
    { label: "Certificados",    value: "—", color: "bg-gray-500" },
  ];

  return (
    <div>
      <h1 className="heading-xl mb-8">Dashboard</h1>

      {/* Tarjetas de métricas */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-10">
        {stats.map((s) => (
          <div key={s.label} className="card flex items-center gap-4">
            <div className={`h-12 w-12 rounded-lg ${s.color} flex items-center justify-center shrink-0`}>
              <span className="text-white font-bold text-lg">{s.value}</span>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide">{s.label}</p>
              <p className="text-2xl font-bold text-brand-primary">—</p>
            </div>
          </div>
        ))}
      </div>

      {/* Links de acceso rápido */}
      <div className="card">
        <h2 className="heading-md mb-4">Acceso rápido</h2>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {[
            { label: "Nueva capacitación",   href: "/admin/capacitaciones" },
            { label: "Registrar alumno",      href: "/admin/alumnos" },
            { label: "Nueva inscripción",     href: "/admin/inscripciones" },
            { label: "Generar certificado",   href: "/admin/certificados" },
            { label: "Gestión de usuarios",   href: "/admin/usuarios" },
          ].map((link) => (
            <a key={link.href} href={link.href} className="btn-secondary text-sm text-center">
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <p className="mt-8 text-xs text-gray-400">
        Panel provisional — las métricas y funcionalidades reales se implementan en las etapas siguientes.
      </p>
    </div>
  );
}
