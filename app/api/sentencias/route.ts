import { prisma } from '@/lib/prisma'
import {
  buildPdfUrl,
  normalizeLabel,
  PAGE_SIZE_DEFAULT,
  PAGE_SIZE_MAX,
  PARAMS,
  type SentenciaDTO,
  type SentenciasResponse,
} from '@/lib/sentencias'
import type { Prisma } from '@/generated/prisma/client'

function intParam(v: string | null): number | undefined {
  if (!v) return undefined
  const n = parseInt(v, 10)
  return Number.isFinite(n) ? n : undefined
}

export async function GET(request: Request): Promise<Response> {
  const sp = new URL(request.url).searchParams

  const q = sp.get(PARAMS.q)?.trim() || ''
  const materia = sp.get(PARAMS.materia)?.trim() || ''
  const tipo = sp.get(PARAMS.tipoJuicio)?.trim() || ''
  const sala = sp.get(PARAMS.salaJuzgado)?.trim() || ''
  const anio = intParam(sp.get(PARAMS.anio))
  const trimestre = intParam(sp.get(PARAMS.trimestre))
  const instancia = intParam(sp.get(PARAMS.instancia))

  const page = Math.max(1, intParam(sp.get(PARAMS.page)) ?? 1)
  const pageSize = Math.min(PAGE_SIZE_MAX, Math.max(1, intParam(sp.get('pageSize')) ?? PAGE_SIZE_DEFAULT))

  const where: Prisma.SentenciaWhereInput = {}
  const and: Prisma.SentenciaWhereInput[] = []

  if (q) {
    and.push({
      OR: [
        { expediente: { contains: q, mode: 'insensitive' } },
        { materia: { contains: q, mode: 'insensitive' } },
        { tipoJuicio: { contains: q, mode: 'insensitive' } },
        { salaJuzgado: { contains: q, mode: 'insensitive' } },
        { sentido: { contains: q, mode: 'insensitive' } },
      ],
    })
  }
  if (materia) and.push({ materia: { equals: materia, mode: 'insensitive' } })
  if (tipo) and.push({ tipoJuicio: { equals: tipo, mode: 'insensitive' } })
  if (sala) and.push({ salaJuzgado: { equals: sala, mode: 'insensitive' } })
  if (anio !== undefined) and.push({ anio })
  if (trimestre !== undefined) and.push({ trimestre })
  if (instancia !== undefined) and.push({ instancia })
  if (and.length) where.AND = and

  const [total, rows] = await Promise.all([
    prisma.sentencia.count({ where }),
    prisma.sentencia.findMany({
      where,
      orderBy: [{ fechaResolucion: 'desc' }, { id: 'desc' }],
      skip: (page - 1) * pageSize,
      take: pageSize,
    }),
  ])

  const data: SentenciaDTO[] = rows.map((r) => ({
    id: r.id,
    anio: r.anio,
    trimestre: r.trimestre,
    instancia: r.instancia,
    materia: r.materia,
    tipoJuicio: r.tipoJuicio ? normalizeLabel(r.tipoJuicio) : null,
    fechaResolucion: r.fechaResolucion.toISOString().slice(0, 10),
    expediente: r.expediente,
    salaJuzgado: r.salaJuzgado,
    sentido: r.sentido,
    pdfUrl: buildPdfUrl(r.pdfPath, r.pdfUrlCompleta),
    revisar: r.revisar,
  }))

  const body: SentenciasResponse = {
    data,
    total,
    page,
    pageSize,
    totalPages: Math.max(1, Math.ceil(total / pageSize)),
  }
  return Response.json(body)
}
