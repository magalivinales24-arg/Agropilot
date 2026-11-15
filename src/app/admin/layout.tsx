/**
 * Layout del panel de administración — PROVISIONAL
 * La protección real de rutas se implementa en la etapa de autenticación
 * con middleware + verificación de sesión en servidor.
 */
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar provisional */}
      <aside className="w-64 bg-brand-primary text-white flex flex-col shrink-0">
        <div className="px-6 py-5 border-b border-blue-900">
          <span className="font-bold text-lg">AgroPilot</span>
          <p className="text-xs text-blue-300 mt-0.5">Panel de administración</p>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-1 text-sm">
          {[
            { label: "Dashboard",        href: "/admin" },
            { label: "Capacitaciones",   href: "/admin/capacitaciones" },
            { label: "Alumnos",          href: "/admin/alumnos" },
            { label: "Inscripciones",    href: "/admin/inscripciones" },
            { label: "Certificados",     href: "/admin/certificados" },
            { label: "Usuarios",         href: "/admin/usuarios" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex items-center gap-2 rounded-md px-3 py-2 hover:bg-blue-800 transition"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="px-6 py-4 border-t border-blue-900 text-xs text-blue-400">
          Autenticación pendiente — Etapa próxima
        </div>
      </aside>

      {/* Contenido principal */}
      <div className="flex-1 flex flex-col">
        {/* Header del admin */}
        <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
          <h1 className="text-sm font-semibold text-gray-700">Panel de administración</h1>
          <span className="text-xs text-gray-400">Usuario provisional</span>
        </header>

        <main className="flex-1 px-8 py-8">{children}</main>
      </div>
    </div>
  );
}
