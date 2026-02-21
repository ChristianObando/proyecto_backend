import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "App Facturación",
  description: "Aplicación de facturación creada con Next.js",
};


/* import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "App Facturación",
  description: "Aplicación de facturación creada con Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-gray-50">
        <header>
          <div>
        <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
          <div className="flex items-center  text-white mr-6">
            <Link href="/">
            
            <span className="font-semibold text-3xl tracking-tight">
              Facturacion
            </span>
            </Link>
          </div>
          <div className="block lg:hidden">
            
          </div>
          <div
            id="menu"
            className="w-full block lg:flex lg:items-center lg:w-auto"
          >
            <div className="text-lg ">
              <Link
                href="login"
                className="block mt-4 px-2 lg:inline-block lg:mt-0 text-white hover:text-white hover:text-2xl hover:p-1 hover:font-bold mr-4 border border-white rounded-2xl "
              >
                Ingresar
              </Link>
              <Link
                href="registro"
                className="block mt-4 px-2 lg:inline-block lg:mt-0 text-white hover:text-white hover:text-2xl hover:p-1 hover:font-bold mr-4 border border-white rounded-2xl"
              >
                registrarse
              </Link>
             
            </div>
            
          </div>
        </nav>
      </div>
        </header>
        {children}
      </body>
    </html>
  );
}
 */



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
                  <div className="bg-white text-blue-600 p-1.5 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="捲 9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
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

