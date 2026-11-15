/**
 * Middleware de Next.js — PROVISIONAL
 *
 * En la etapa de autenticación este archivo:
 * - Verificará el JWT de NextAuth en cada request a /admin/*
 * - Redirigirá a /login si no hay sesión válida
 * - Verificará el rol antes de permitir el acceso
 *
 * Por ahora solo define el matcher para las rutas protegidas.
 */
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // TODO: Implementar verificación de sesión JWT (Etapa de autenticación)
  // Por ahora, se permite el paso para desarrollo local.
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
  ],
};
