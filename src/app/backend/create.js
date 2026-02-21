"use server";

import db from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function registrarFactura(formData) {
  // 2. Capturamos y limpiamos espacios en blanco
  const ciudad = formData.get("ciudad")?.toString().trim();
  const dia = formData.get("dia")?.toString().trim();
  const mes = formData.get("mes")?.toString().trim();
  const anio = formData.get("anio")?.toString().trim();
  const pagado_a = formData.get("pagado_a")?.toString().trim();
  const tipo_doc = formData.get("tipo_doc")?.toString().trim();
  const nro_documento = formData.get("nro_documento")?.toString().trim();
  const valor_num = formData.get("valor_num")?.toString().trim();
  const valor_letras = formData.get("valor_letras")?.toString().trim();

  // 3. Validación robusta
  if (
    !ciudad ||
    !dia ||
    !mes ||
    !anio ||
    !pagado_a ||
    !nro_documento ||
    !valor_num
  ) {
    return {
      success: false,
      message: "Por favor, llena todos los campos obligatorios.",
    };
  }

  try {
    // 4. Guardar en PostgreSQL usando Prisma
    await db.factura.create({
      data: {
        ciudad,
        dia,
        mes,
        ano: anio, // Mapeo correcto: 'ano' es la columna en DB, 'anio' es tu variable
        pagado_a,
        tipo_doc,
        numero_doc: nro_documento,
        valor_num: parseFloat(valor_num) || 0, // Evita guardar NaN si el campo llega vacío
        valor_letras: valor_letras || "", // Evita errores si llega nulo
      },
    });

    // 5. Éxito
    revalidatePath("/");
    return { success: true, message: "¡Factura guardada correctamente!" };
  } catch (error) {
    // Logueamos el error completo en la consola del servidor para debug
    console.error("ERROR_PRISMA:", error);

    return {
      success: false,
      message:
        "No se pudo guardar la factura. Verifica la conexión a la base de datos.",
    };
  }
}
