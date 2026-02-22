import Link from "next/link";
import "./globals.css";
import { DocumentTextIcon } from "@heroicons/react/24/outline";
import AcmeLogo from "./ui/acme-logo";

export const metadata = {
  title: "App Facturación",
  description: "Aplicación de facturación creada con Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="h-screen bg-gray-50">
        {/* Contenedor principal para el contenido de las páginas */}
        <main>{children}</main>
      </body>
    </html>
  );
}
