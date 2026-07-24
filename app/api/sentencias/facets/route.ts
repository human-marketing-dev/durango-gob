import { prisma } from '@/lib/prisma'
import { normalizeLabel, type FacetsResponse } from '@/lib/sentencias'

/** Valores distintos para poblar los selects de filtro. */
export async function GET(): Promise<Response> {
  const [materias, tipos, salas, anios, trimestres, instancias] = await Promise.all([
    prisma.sentencia.findMany({ distinct: ['materia'], select: { materia: true } }),
    prisma.sentencia.findMany({ distinct: ['tipoJuicio'], select: { tipoJuicio: true } }),
    prisma.sentencia.findMany({ distinct: ['salaJuzgado'], select: { salaJuzgado: true } }),
    prisma.sentencia.findMany({ distinct: ['anio'], select: { anio: true } }),
    prisma.sentencia.findMany({ distinct: ['trimestre'], select: { trimestre: true } }),
    prisma.sentencia.findMany({ distinct: ['instancia'], select: { instancia: true } }),
  ])

  // Tipo de juicio: colapsa variantes de mayúsculas/espacios en una sola opción.
  const tiposSet = new Set<string>()
  for (const t of tipos) if (t.tipoJuicio) tiposSet.add(normalizeLabel(t.tipoJuicio))

  const body: FacetsResponse = {
    materias: materias.map((m) => m.materia).sort((a, b) => a.localeCompare(b, 'es')),
    tiposJuicio: [...tiposSet].sort((a, b) => a.localeCompare(b, 'es')),
    salas: salas.map((s) => s.salaJuzgado).sort((a, b) => a.localeCompare(b, 'es')),
    anios: anios.map((a) => a.anio).sort((a, b) => b - a),
    trimestres: trimestres.map((t) => t.trimestre).sort((a, b) => a - b),
    instancias: instancias.map((i) => i.instancia).sort((a, b) => a - b),
  }
  return Response.json(body)
}
