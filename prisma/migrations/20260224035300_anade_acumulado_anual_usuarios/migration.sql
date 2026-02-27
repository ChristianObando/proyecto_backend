-- CreateTable
CREATE TABLE "AcumuladoAnual" (
    "id" TEXT NOT NULL,
    "mes" TEXT NOT NULL,
    "cantidad" INTEGER NOT NULL,

    CONSTRAINT "AcumuladoAnual_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuarios" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_email_key" ON "Usuarios"("email");
