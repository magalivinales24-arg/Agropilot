import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AgroPilot — Capacitaciones y Certificaciones",
    template: "%s | AgroPilot",
  },
  description:
    "Plataforma profesional de capacitaciones y certificaciones en maquinaria pesada, drones agrícolas y formación técnica.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
