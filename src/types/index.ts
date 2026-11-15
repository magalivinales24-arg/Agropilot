/**
 * Tipos globales del proyecto AgroPilot
 */

/** Roles de usuario del sistema */
export type UserRole = "ADMIN_TECH" | "DIRECTOR" | "CONSULTOR";

/** Países donde opera AgroPilot */
export type CountryCode = "AR" | "BR" | "PY" | "UY";

export const COUNTRY_NAMES: Record<CountryCode, string> = {
  AR: "Argentina",
  BR: "Brasil",
  PY: "Paraguay",
  UY: "Uruguay",
};

/** Estado de un certificado */
export type CertificateStatus = "VALID" | "REVOKED";
