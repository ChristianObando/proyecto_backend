import Link from "next/link";

/* export default function Home() {
  return (
    <>
   
<div className="bg-gray-50">
    <div className="relative isolate px-6 pt-14 lg:px-8">
    <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
      <div ></div>
    </div>
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      
      <div className="text-center">
        <h1 className="text-5xl font-semibold tracking-tight text-balance text-black sm:text-7xl">Agiliza la forma en que generas facturas</h1>
        <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">la manera mas facil de genearar facturas, colnsulta y modifica cuando quieras.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="login" className=" bg-blue-500 px-3.5 py-3 text-sm font-semibold text-white shadow-xs hover:text-white hover:text-2xl hover:px-5  hover:font-bold mr-4 border border-white rounded-2xl">comenzar</Link>
          
        </div>
      </div>
    </div>
    <div aria-hidden="true" className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
      <div ></div>
    </div>
  </div>
</div>

    </>
  );
} */

export default function Home() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div className="relative aspect-1155/678 w-36.125rem -translate-x-1/2 rotate-30deg bg-linear-to-tr from-[#3b82f6] to-[#93c5fd] opacity-30 sm:left-[calc(50%-30rem)] sm:w-72.1875rem"></div>
        </div>

        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl">
              Agiliza la forma en que generas{" "}
              <span className="text-blue-600">facturas</span>
            </h1>

            <p className="mt-8 text-lg font-medium text-slate-600 sm:text-xl/8">
              La manera más fácil de generar facturas. Consulta, modifica y
              gestiona tus ingresos en un solo lugar de forma segura.
            </p>

            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/login"
                className="rounded-full bg-blue-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 hover:bg-blue-700 hover:scale-105 transition-all duration-200 active:scale-95"
              >
                Comenzar ahora
              </Link>

              <Link
                href="/registro"
                className="text-sm font-semibold leading-6 text-slate-900 hover:text-blue-600 transition-colors"
              >
                Crear cuenta <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
}
