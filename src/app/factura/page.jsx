/* import Link from "next/link";

export default function Registro() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50 px-4 py-12">
      <div className="w-full max-w-md">
        <form className="bg-white shadow-xl rounded-xl px-10 pt-8 pb-10 border border-slate-100">
          
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-slate-800">
              Crear factura
            </h1>
            <p className="text-slate-500 mt-2 text-sm">
              Ingresa la información de facturación
            </p>
          </div>

         
          <fieldset className="mb-6">
            <legend className="text-xl font-extrabold text-slate-800 mb-4">
              Fecha
            </legend>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label
                  htmlFor="dia"
                  className="block text-slate-700 text-sm font-semibold mb-2"
                >
                  Día
                </label>
                <input
                  id="dia"
                  type="text"
                  placeholder="DD"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="mes"
                  className="block text-slate-700 text-sm font-semibold mb-2"
                >
                  Mes
                </label>
                <input
                  id="mes"
                  type="text"
                  placeholder="MM"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="ano"
                  className="block text-slate-700 text-sm font-semibold mb-2"
                >
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
          </fieldset>

          <hr className="border-slate-100 mb-6" />

               <div className="space-y-5 mb-8">
            <div>
              <label
                htmlFor="ciudad"
                className="block text-slate-700 text-sm font-semibold mb-2"
              >
                Ciudad
              </label>
              <input
                id="ciudad"
                type="text"
                placeholder="Cali"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="nro_recibo"
                className="block text-slate-700 text-sm font-semibold mb-2"
              >
                Número de recibo
              </label>
              <input
                id="nro_recibo"
                type="number"
                placeholder="123456"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="valor_num"
                className="block text-slate-700 text-sm font-semibold mb-2"
              >
                Valor
              </label>
              <input
                id="valor_num"
                type="text"
                placeholder="$ 0.00"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="pagado_a"
                className="block text-slate-700 text-sm font-semibold mb-2"
              >
                Pagado a
              </label>
              <input
                id="pagado_a"
                type="text"
                placeholder="Nombre del beneficiario"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="valor_letras"
                className="block text-slate-700 text-sm font-semibold mb-2"
              >
                Valor en letras
              </label>
              <input
                id="valor_letras"
                type="text"
                placeholder="Diez mil pesos"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="tipo_doc"
                className="block text-slate-700 text-sm font-semibold mb-2"
              >
                Tipo de documento
              </label>
              <div className="relative">
                <select
                  id="tipo_doc"
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all bg-white appearance-none cursor-pointer"
                >
                  <option value="" disabled selected>
                    Selecciona una opción
                  </option>
                  <option value="CC">Cédula de Ciudadanía (CC)</option>
                  <option value="NIT">NIT</option>
                  <option value="CE">Cédula de Extranjería (CE)</option>
                  <option value="PP">Pasaporte</option>
                </select>

                
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-500">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          
          <div className="flex flex-col gap-4">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg shadow-blue-200 transition-all active:scale-[0.98]"
            >
              Registrar Factura
            </button>

            <p className="text-center text-sm text-slate-600">
              ¿Deseas cancelar?{" "}
              <Link
                href="/"
                className="text-blue-600 font-semibold hover:underline"
              >
                Regresar
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
 */
export default function Registro() {
  const labelStyle = "block text-slate-700 text-sm font-semibold mb-1";
  const inputStyle = "w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all bg-white";

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50 px-4 py-10">
      {/* Aumentamos el max-w a 3xl o 4xl para que sea más ancho */}
      <div className="w-full max-w-4xl">
        <form className="bg-white shadow-2xl rounded-2xl p-8 md:p-12 border border-slate-100">
          
          <div className="border-b border-slate-100 pb-6 mb-8 flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-800">Crear Factura</h1>
              <p className="text-slate-500 mt-1 text-sm">Registro de información de facturación electrónica</p>
            </div>
            <div className="text-right hidden md:block">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Formulario Oficial</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            
            {/* GRUPO 1: Información Temporal y Ubicación */}
            <div className="space-y-6">
              <fieldset>
                <legend className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-3">Fecha y Lugar</legend>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div>
                    <label htmlFor="dia" className={labelStyle}>Día</label>
                    <input id="dia" type="text" placeholder="DD" className={inputStyle} />
                  </div>
                  <div>
                    <label htmlFor="mes" className={labelStyle}>Mes</label>
                    <input id="mes" type="text" placeholder="MM" className={inputStyle} />
                  </div>
                  <div>
                    <label htmlFor="ano" className={labelStyle}>Año</label>
                    <input id="ano" type="text" placeholder="AAAA" className={inputStyle} />
                  </div>
                </div>
                <div>
                  <label htmlFor="ciudad" className={labelStyle}>Ciudad</label>
                  <input id="ciudad" type="text" placeholder="Ej: Cali" className={inputStyle} />
                </div>
              </fieldset>

              <fieldset>
                <legend className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-3">Identificación del Recibo</legend>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="nro_recibo" className={labelStyle}>N° de Recibo</label>
                    <input id="nro_recibo" type="number" placeholder="000123" className={inputStyle} />
                  </div>
                  <div>
                    <label htmlFor="tipo_doc" className={labelStyle}>Tipo Documento</label>
                    <select id="tipo_doc" className={inputStyle}>
                      <option value="CC">Cédula (CC)</option>
                      <option value="NIT">NIT</option>
                      <option value="CE">Extranjería</option>
                    </select>
                  </div>
                </div>
              </fieldset>
            </div>

            {/* GRUPO 2: Valores y Beneficiario */}
            <div className="space-y-6">
              <fieldset>
                <legend className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-3">Detalles del Pago</legend>
                <div className="mb-4">
                  <label htmlFor="pagado_a" className={labelStyle}>Pagado a (Nombre Completo)</label>
                  <input id="pagado_a" type="text" placeholder="Nombre del beneficiario" className={inputStyle} />
                </div>
                <div className="mb-4">
                  <label htmlFor="valor_num" className={labelStyle}>Valor Numérico ($)</label>
                  <input id="valor_num" type="text" placeholder="0.00" className={inputStyle} />
                </div>
                <div>
                  <label htmlFor="valor_letras" className={labelStyle}>Valor en Letras</label>
                  <textarea 
                    id="valor_letras" 
                    rows="2" 
                    placeholder="Escriba el valor en letras..." 
                    className={`${inputStyle} resize-none`}
                  ></textarea>
                </div>
              </fieldset>
            </div>

          </div>

          {/* Botones de acción al final, alineados a la derecha en PC */}
          <div className="mt-10 pt-6 border-t border-slate-100 flex flex-col md:flex-row-reverse gap-4">
            <button
              type="submit"
              className="md:w-48 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg shadow-blue-200 transition-all active:scale-95"
            >
              Registrar Factura
            </button>
            <button
              type="button"
              className="md:w-48 w-full bg-white hover:bg-slate-50 text-slate-600 font-semibold py-3 px-6 rounded-lg border border-slate-200 transition-all"
            >
              Cancelar
            </button>
          </div>
          
        </form>
      </div>
    </div>
  );
}
