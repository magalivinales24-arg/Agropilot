import Link from 'next/Link';
/** Layout compartido para las rutas públicas (/, /capacitaciones, /verificar) */
export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navbar provisional — se desarrolla en Etapa 2 */}
      <header className="bg-brand-primary text-white shadow-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <span className="text-xl font-bold tracking-wide">AgroPilot</span>
          <ul className="hidden gap-6 text-sm font-medium md:flex">
            <li><Link href="/" className="hover:text-brand-accent transition">Inicio</Link></li>
            <li><Link href="/capacitaciones" className="hover:text-brand-accent transition">Capacitaciones</Link></li>
            <li><Link href="/login" className="hover:text-brand-accent transition">Acceso privado</Link></li>
          </ul>
        </nav>
      </header>

      {/* Contenido de la página */}
      <main className="flex-1">{children}</main>

      {/* Footer provisional — se desarrolla en Etapa 2 */}
      <footer className="bg-brand-dark text-gray-400 py-8 text-center text-sm">
        <p>© {new Date().getFullYear()} AgroPilot — Todos los derechos reservados.</p>
        <p className="mt-1 text-xs text-gray-600">Plataforma en construcción</p>
      </footer>
    </div>
  );
}
