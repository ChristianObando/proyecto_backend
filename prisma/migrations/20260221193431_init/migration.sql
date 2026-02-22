-- CreateTable
CREATE TABLE "Factura" (
    "id" SERIAL NOT NULL,
    "ciudad" TEXT NOT NULL,
    "dia" TEXT NOT NULL,
    "mes" TEXT NOT NULL,
    "ano" TEXT NOT NULL,
    "pagado_a" TEXT NOT NULL,
    "tipo_doc" TEXT NOT NULL,
    "numero_doc" TEXT NOT NULL,
    "valor_num" DOUBLE PRECISION NOT NULL,
    "valor_letras" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Factura_pkey" PRIMARY KEY ("id")
);
