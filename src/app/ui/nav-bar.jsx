import Link from "next/link";
import AcmeLogo from "./acme-logo";

export default function NavBar() {
    return (
        <header className="sticky top-0 z-50 w-full bg-blue-600 shadow-md">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="shrink-0 flex items-center">
                        <AcmeLogo />
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
    )
}