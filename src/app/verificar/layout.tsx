/** Layout para la página de verificación pública de certificados */
export default function VerificarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-brand-light flex flex-col">
      <header className="bg-brand-primary text-white py-4 px-6 text-center">
        <span className="text-lg font-bold">AgroPilot — Verificación de Certificados</span>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-brand-dark text-gray-500 py-4 text-center text-xs">
        © {new Date().getFullYear()} AgroPilot — Portal de verificación oficial
      </footer>
    </div>
  );
}
