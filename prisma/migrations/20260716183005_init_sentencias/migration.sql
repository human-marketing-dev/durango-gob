-- CreateTable
CREATE TABLE "Sentencia" (
    "id" SERIAL NOT NULL,
    "anio" INTEGER NOT NULL,
    "trimestre" INTEGER NOT NULL,
    "instancia" INTEGER NOT NULL,
    "materia" TEXT NOT NULL,
    "tipoJuicio" TEXT,
    "fechaResolucion" DATE NOT NULL,
    "expediente" TEXT NOT NULL,
    "salaJuzgado" TEXT NOT NULL,
    "sentido" TEXT NOT NULL,
    "pdfPath" TEXT,
    "pdfUrlCompleta" TEXT,
    "docKey" TEXT NOT NULL,
    "revisar" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Sentencia_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Sentencia_materia_idx" ON "Sentencia"("materia");

-- CreateIndex
CREATE INDEX "Sentencia_anio_trimestre_idx" ON "Sentencia"("anio", "trimestre");

-- CreateIndex
CREATE INDEX "Sentencia_fechaResolucion_idx" ON "Sentencia"("fechaResolucion");

-- CreateIndex
CREATE UNIQUE INDEX "Sentencia_expediente_fechaResolucion_instancia_docKey_key" ON "Sentencia"("expediente", "fechaResolucion", "instancia", "docKey");
