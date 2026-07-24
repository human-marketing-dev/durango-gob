/**
 * Tipos y helpers compartidos del buscador de sentencias (lado app).
 * El cliente solo importa los tipos; `buildPdfUrl` corre en el servidor para
 * que PDF_BASE_URL nunca se exponga al navegador.
 */

export const PAGE_SIZE_DEFAULT = 20
export const PAGE_SIZE_MAX = 100

/** Texto a mostrar cuando el sentido quedó vacío tras limpiar la leyenda. */
export const SENTIDO_FALLBACK = 'No especificado'

export interface SentenciaDTO {
  id: number
  anio: number
  trimestre: number
  instancia: number
  materia: string
  tipoJuicio: string | null
  fechaResolucion: string // ISO (YYYY-MM-DD)
  expediente: string
  salaJuzgado: string
  sentido: string
  pdfUrl: string | null
  revisar: boolean
}

export interface SentenciasResponse {
  data: SentenciaDTO[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}

export interface FacetsResponse {
  materias: string[]
  tiposJuicio: string[]
  salas: string[]
  anios: number[]
  trimestres: number[]
  instancias: number[]
}

/** Nombres de los parámetros de búsqueda (compartidos entre API y UI). */
export const PARAMS = {
  q: 'q',
  materia: 'materia',
  tipoJuicio: 'tipo',
  anio: 'anio',
  trimestre: 'trimestre',
  instancia: 'instancia',
  salaJuzgado: 'sala',
  page: 'page',
} as const

/**
 * Construye la URL pública del PDF. Las filas conformes guardan solo el path
 * relativo y se arman con PDF_BASE_URL (para soportar la migración de servidor);
 * las no conformes traen la URL completa cruda.
 */
export function buildPdfUrl(pdfPath: string | null, pdfUrlCompleta: string | null): string | null {
  if (pdfPath) {
    const base = process.env.PDF_BASE_URL ?? 'http://pjdgo.gob.mx/transparencia/'
    return `${base.replace(/\/?$/, '/')}${pdfPath}`
  }
  return pdfUrlCompleta ?? null
}

/** Normaliza una etiqueta para agrupar variantes de mayúsculas/espacios en los filtros. */
export function normalizeLabel(s: string): string {
  return s.trim().replace(/\s+/g, ' ').toUpperCase()
}
