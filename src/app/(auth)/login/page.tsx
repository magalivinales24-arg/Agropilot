import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acceso privado",
  description: "Ingresá con tus credenciales para acceder al panel de administración.",
};

/**
 * Página de login — PROVISIONAL
 * Se implementa en la Etapa de autenticación.
 */
export default function LoginPage() {
  return (
    <div className="min-h-screen bg-brand-light flex items-center justify-center px-4">
      <div className="card w-full max-w-sm">
        {/* Logo provisional */}
        <div className="text-center mb-8">
          <div className="mx-auto mb-3 h-14 w-14 rounded-full bg-brand-primary flex items-center justify-center">
            <span className="text-white font-bold text-xl">AP</span>
          </div>
          <h1 className="heading-lg">Acceso privado</h1>
          <p className="text-sm text-gray-500 mt-1">AgroPilot — Panel de administración</p>
        </div>

        {/* Formulario provisional */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              disabled
              placeholder="usuario@agropilot.com"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary disabled:bg-gray-50 disabled:cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              disabled
              placeholder="••••••••"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary disabled:bg-gray-50 disabled:cursor-not-allowed"
            />
          </div>
          <button
            type="button"
            disabled
            className="w-full btn-primary opacity-60 cursor-not-allowed"
          >
            Ingresar
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-gray-400">
          Sistema de autenticación — se implementa en la etapa correspondiente.
        </p>
      </div>
    </div>
  );
}
