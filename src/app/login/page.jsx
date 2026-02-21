/* export default function login() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full max-w-xs mx-auto h-full">
      <form className="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="email"
            placeholder="ejemplo@correo.com"
          ></input>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Contraseña
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          ></input>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Ingresar
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Olvido su contraseña?
          </a>
        </div>
      </form>
    </div>
  );
} */

import Link from "next/link";

export default function login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50 px-4">
      <div className="w-full max-w-md">
        <form className="bg-white shadow-xl rounded-xl px-10 pt-8 pb-10 border border-slate-100">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-slate-800">
              Bienvenido
            </h1>
            <p className="text-slate-500 mt-2 text-sm">
              Ingresa tus credenciales para acceder
            </p>
          </div>

          <div className="mb-6">
            <label
              className="block text-slate-700 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-700"
              id="email"
              type="email"
              placeholder="ejemplo@correo.com"
              required
            />
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <label
                className="text-slate-700 text-sm font-semibold"
                htmlFor="password"
              >
                Contraseña
              </label>
              <a
                className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
                href="#"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>
            <input
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-slate-700"
              id="password"
              type="password"
              placeholder="••••••••••••"
              required
            />
          </div>

          <div className="mt-8">
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg shadow-blue-200 transition-all active:scale-[0.98]"
              type="submit"
            >
              Ingresar
            </button>
          </div>

          <p className="text-center text-sm text-slate-600 mt-6">
            ¿No tienes una cuenta?{" "}
            <Link
              href="/registro"
              className="text-blue-600 font-semibold hover:underline"
            >
              Regístrate aquí
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
