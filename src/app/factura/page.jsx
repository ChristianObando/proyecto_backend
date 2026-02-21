 export default function registro() {
  return (
    // He cambiado el fondo a uno más suave y ajustado el ancho máximo
    <div className="flex items-center justify-center min-h-screen bg-slate-50 px-4">
      <div className="w-full max-w-md">
        <form className="bg-white shadow-xl rounded-xl px-10 pt-8 pb-10 border border-slate-100">
          
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-slate-800">Crear factura</h1>
            <p className="text-slate-500 mt-2 text-sm">Ingresa la informacion de facturacion</p>
          </div>

          <div>
            <h1 className="text-xl font-extrabold text-slate-800">Fecha</h1>
          </div>

          {/* Grupo: Nombre y Apellidos en dos columnas para ahorrar espacio vertical */}
          <div className="grid grid-cols-3 gap-4 mb-5">
            <div>
              <label htmlFor="nombre" className="block text-slate-700 text-sm font-semibold mb-2">
                Dia
              </label>
              <input
                id="dia"
                type="text"
                placeholder="DD"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              />
            </div>
            <div>
              <label htmlFor="apellidos" className="block text-slate-700 text-sm font-semibold mb-2">
                Mes
              </label>
              <input
                id="MM"
                type="text"
                placeholder="Pérez"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              />
            </div>

            <div>
              <label htmlFor="apellidos" className="block text-slate-700 text-sm font-semibold mb-2">
                Año
              </label>
              <input
                id="ano"
                type="text"
                placeholder="AAAA"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              />
            </div>
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block text-slate-700 text-sm font-semibold mb-2">
              Ciudad
            </label>
            <input
              id="text"
              type="ciudad"
              placeholder="ejemplo@correo.com"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="password" className="block text-slate-700 text-sm font-semibold mb-2">
              Numero de recibo
            </label>
            <input
              id="nro_recibo"
              type="number"
              placeholder="123456"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="password" className="block text-slate-700 text-sm font-semibold mb-2">
              Numero de recibo
            </label>
            <input
              id="nro_recibo"
              type="number"
              placeholder="123456"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="password" className="block text-slate-700 text-sm font-semibold mb-2">
              Numero de recibo
            </label>
            <input
              id="nro_recibo"
              type="number"
              placeholder="123456"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="password" className="block text-slate-700 text-sm font-semibold mb-2">
              Numero de recibo
            </label>
            <input
              id="nro_recibo"
              type="number"
              placeholder="123456"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="password" className="block text-slate-700 text-sm font-semibold mb-2">
              Numero de recibo
            </label>
            <input
              id="nro_recibo"
              type="number"
              placeholder="123456"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="password" className="block text-slate-700 text-sm font-semibold mb-2">
              Numero de recibo
            </label>
            <input
              id="nro_recibo"
              type="number"
              placeholder="123456"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
            />
          </div>

          <div className="flex flex-col gap-4">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg shadow-blue-200 transition-all active:scale-[0.98]"
            >
              Registrarse
            </button>
            
            <p className="text-center text-sm text-slate-600">
              ¿Ya tienes cuenta? <a href="/login" className="text-blue-600 font-semibold hover:underline">Inicia sesión</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}