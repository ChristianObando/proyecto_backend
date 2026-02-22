"use client";
import { registrarFactura } from "../../../backend/create";

export default function Registro() {
  const labelStyle = "block text-slate-700 text-sm font-semibold mb-1";
  const inputStyle =
    "w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all bg-white";

  // Esta función conecta el formulario con el servidor
  async function handleSubmit(event) {
    event.preventDefault(); // Evita que la página se recargue

    // Creamos los datos del formulario
    const formData = new FormData(event.target);

    // Llamamos a la función del servidor
    const resultado = await registrarFactura(formData);

    // Si el servidor responde con éxito, mostramos el alert en el cliente
    if (resultado.success) {
      alert("¡Factura guardada correctamente en el servidor!");
      event.target.reset(); // Opcional: limpia el formulario
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50 px-4 py-10">
      <div className="w-full max-w-4xl">
        <form
          action={registrarFactura}
          className="bg-white shadow-2xl rounded-2xl p-8 md:p-12 border border-slate-100"
        >
          <div className="border-b border-slate-100 pb-6 mb-8 flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-800">
                Crear Factura
              </h1>
              <p className="text-slate-500 mt-1 text-sm">
                Registro de información de facturación electrónica
              </p>
            </div>
            <div className="text-right hidden md:block">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Formulario Oficial
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div className="space-y-6">
              <fieldset>
                <legend className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-3">
                  Fecha y Lugar
                </legend>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div>
                    <label htmlFor="dia" className={labelStyle}>
                      Día
                    </label>
                    <input
                      id="dia"
                      name="dia"
                      type="text"
                      placeholder="DD"
                      className={inputStyle}
                    />
                  </div>
                  <div>
                    <label htmlFor="mes" className={labelStyle}>
                      Mes
                    </label>
                    <input
                      id="mes"
                      name="mes"
                      type="text"
                      placeholder="MM"
                      className={inputStyle}
                    />
                  </div>
                  <div>
                    <label htmlFor="anio" className={labelStyle}>
                      Año
                    </label>
                    <input
                      id="anio"
                      name="anio"
                      type="text"
                      placeholder="AAAA"
                      className={inputStyle}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="ciudad" className={labelStyle}>
                    Ciudad
                  </label>
                  <input
                    id="ciudad"
                    name="ciudad"
                    type="text"
                    placeholder="Ej: Cali"
                    className={inputStyle}
                  />
                </div>
              </fieldset>

              <fieldset>
                <legend className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-3">
                  Identificación del Recibo
                </legend>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="tipo_doc" className={labelStyle}>
                      Tipo Documento
                    </label>
                    <select
                      id="tipo_doc"
                      name="tipo_doc"
                      className={inputStyle}
                    >
                      <option value="CC">Cédula (CC)</option>
                      <option value="NIT">NIT</option>
                      <option value="CE">Extranjería</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="nro_documento" className={labelStyle}>
                      Número de Documento
                    </label>
                    <input
                      id="nro_documento"
                      name="nro_documento"
                      type="text"
                      placeholder="Ej: 123456789"
                      className={inputStyle}
                    />
                  </div>
                </div>
              </fieldset>
            </div>

            <div className="space-y-6">
              <fieldset>
                <legend className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-3">
                  Detalles del Pago
                </legend>
                <div className="mb-4">
                  <label htmlFor="pagado_a" className={labelStyle}>
                    Pagado a (Nombre Completo)
                  </label>
                  <input
                    id="pagado_a"
                    name="pagado_a"
                    type="text"
                    placeholder="Nombre del beneficiario"
                    className={inputStyle}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="valor_num" className={labelStyle}>
                    Valor Numérico ($)
                  </label>
                  <input
                    id="valor_num"
                    name="valor_num"
                    type="text"
                    placeholder="0.00"
                    className={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="valor_letras" className={labelStyle}>
                    Valor en Letras
                  </label>
                  <textarea
                    id="valor_letras"
                    name="valor_letras"
                    rows="2"
                    placeholder="Escriba el valor en letras..."
                    className={`${inputStyle} resize-none`}
                  ></textarea>
                </div>
              </fieldset>
            </div>
          </div>

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

