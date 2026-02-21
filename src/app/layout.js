import Link from "next/link";
import "./globals.css";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

export const metadata = {
  title: "App Facturación",
  description: "Aplicación de facturación creada con Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-slate-50 text-slate-900 antialiased">
        <header className="sticky top-0 z-50 w-full bg-blue-600 shadow-md">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              {/* Logo */}
              <div className="shrink-0 flex items-center">
                <Link href="/" className="flex items-center gap-2 group">
                  <div className="text-white">
                    <DocumentTextIcon className="h-12 w-12 rotate-[15deg]" />
                  </div>
                  <span className="font-bold text-xl tracking-tight text-white group-hover:text-blue-100 transition-colors">
                    Factura<span className="font-light">App</span>
                  </span>
                </Link>
              </div>

              {/* Menú de Navegación */}
              <div className="flex items-center gap-4">
                <Link
                  href="/login"
                  className="text-white hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-all"
                >
                  Ingresar
                </Link>
                <Link
                  href="/registro"
                  className="bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg text-sm font-bold shadow-sm transition-all active:scale-95"
                >
                  Registrarse
                </Link>
              </div>
            </div>
          </nav>
        </header>

        {/* Contenedor principal para el contenido de las páginas */}
        <main>{children}</main>
      </body>
    </html>
  );
}
