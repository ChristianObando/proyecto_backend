
export default function registro() {
  return (
    // He cambiado el fondo a uno más suave y ajustado el ancho máximo
    <div className="flex items-center justify-center min-h-screen bg-slate-50 px-4">
      <div className="w-full max-w-md">
        <form className="bg-white shadow-xl rounded-xl px-10 pt-8 pb-10 border border-slate-100">

          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-slate-800">Crear cuenta</h1>
            <p className="text-slate-500 mt-2 text-sm">Ingresa tus datos para empezar a facturar</p>
          </div>

          {/* Grupo: Nombre y Apellidos en dos columnas para ahorrar espacio vertical */}
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div>
              <label htmlFor="nombre" className="block text-slate-700 text-sm font-semibold mb-2">
                Nombre
              </label>
              <input
                id="nombre"
                type="text"
                placeholder="Juan"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              />
            </div>
            <div>
              <label htmlFor="apellidos" className="block text-slate-700 text-sm font-semibold mb-2">
                Apellidos
              </label>
              <input
                id="apellidos"
                type="text"
                placeholder="Pérez"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              />
            </div>
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block text-slate-700 text-sm font-semibold mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="ejemplo@correo.com"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="password" className="block text-slate-700 text-sm font-semibold mb-2">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
            />
          </div>

          <div className="mb-8">
            <label htmlFor="confirm-password" className="block text-slate-700 text-sm font-semibold mb-2">
              Confirmar contraseña
            </label>
            <input
              id="confirm-password"
              type="password"
              placeholder="••••••••"
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