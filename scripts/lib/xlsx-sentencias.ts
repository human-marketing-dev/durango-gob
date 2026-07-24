/**
 * Lectura y normalización de las filas del Excel de sentencias.
 *
 * Este módulo es la ÚNICA fuente de verdad sobre cómo se interpretan las
 * columnas del archivo. Lo usan tanto el script de validación como el de seed,
 * para que el reporte y la carga vean exactamente los mismos datos.
 *
 * Solo Node (usa exceljs). No importar desde la app de Next.
 */
import ExcelJS from 'exceljs'

/** Columnas del Excel, 1-indexadas como las usa exceljs. */
export const COL = {
  anio: 1,
  trimestre: 2,
  instancia: 3,
  materia: 4,
  tipoJuicio: 5,
  fecha: 6,
  expediente: 7,
  url: 8,
  sala: 9,
  sentido: 10,
} as const

export const MESES_ES = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',
]

/** Prefijo público esperado en el hipervínculo. */
export const URL_PREFIX = 'http://pjdgo.gob.mx/transparencia/'

/**
 * Patrón canónico de la URL:
 *   http://pjdgo.gob.mx/transparencia/{clave}/{año}/{mes}/{archivo}.pdf
 * Los segmentos no pueden estar vacíos y el archivo debe terminar en .pdf.
 */
export const URL_RE =
  /^http:\/\/pjdgo\.gob\.mx\/transparencia\/([^/]+)\/(\d{4})\/([^/]+)\/(.+\.pdf)$/i

/** Leyenda repetitiva que se descarta del sentido. */
export const LEGEND_RE = /;?\s*la versi[oó]n p[uú]blica[\s\S]*$/i

/** Ventana plausible para la fecha de resolución. Fuera de esto se marca 'revisar'. */
export const MIN_YEAR_PLAUSIBLE = 2010
export const MAX_YEAR_PLAUSIBLE = new Date().getUTCFullYear() + 1

/** Texto plano de una celda, tolerante a hyperlink / rich text / fórmula. */
function cellToText(cell: ExcelJS.Cell): string {
  const v = cell.value
  if (v == null) return ''
  if (typeof v === 'object') {
    if (v instanceof Date) return v.toISOString()
    if ('richText' in v && Array.isArray(v.richText)) {
      return v.richText.map((rt) => rt.text).join('').trim()
    }
    if ('text' in v && typeof v.text === 'string') return v.text.trim()
    if ('hyperlink' in v && typeof v.hyperlink === 'string') return v.hyperlink.trim()
    if ('result' in v) return String(v.result ?? '').trim()
    return ''
  }
  return String(v).trim()
}

/** URL de una celda: prefiere el destino del hyperlink sobre el texto visible. */
function cellToUrl(cell: ExcelJS.Cell): string {
  const v = cell.value
  if (v && typeof v === 'object' && 'hyperlink' in v && typeof v.hyperlink === 'string') {
    return v.hyperlink.trim()
  }
  return cellToText(cell)
}

export type FechaCell =
  | { kind: 'date'; date: Date; raw: string }
  | { kind: 'text'; raw: string }
  | { kind: 'empty'; raw: '' }
  | { kind: 'number'; date: Date; raw: string }

/** Interpreta la celda de FECHA DE RESOLUCIÓN según su tipo en el Excel. */
function readFechaCell(cell: ExcelJS.Cell): FechaCell {
  const v = cell.value
  if (v == null || v === '') return { kind: 'empty', raw: '' }
  if (v instanceof Date) return { kind: 'date', date: v, raw: v.toISOString() }
  if (typeof v === 'number') {
    // Serial de Excel sin formato de fecha (no debería ocurrir en este archivo,
    // pero lo cubrimos): días desde 1899-12-30, en UTC.
    const ms = Math.round((v - 25569) * 86400 * 1000)
    return { kind: 'number', date: new Date(ms), raw: String(v) }
  }
  return { kind: 'text', raw: cellToText(cell) }
}

export interface RawRow {
  rowNumber: number
  anio: string
  trimestre: string
  instancia: string
  materia: string
  tipoJuicio: string
  fechaCell: FechaCell
  expediente: string
  url: string
  sala: string
  sentido: string
}

/** Lee todas las filas de datos del Excel (omite el encabezado). */
export async function readSentenciasRows(filePath: string): Promise<RawRow[]> {
  const wb = new ExcelJS.Workbook()
  await wb.xlsx.readFile(filePath)
  const ws = wb.worksheets[0]
  const rows: RawRow[] = []

  for (let r = 2; r <= ws.rowCount; r++) {
    const row = ws.getRow(r)
    const raw: RawRow = {
      rowNumber: r,
      anio: cellToText(row.getCell(COL.anio)),
      trimestre: cellToText(row.getCell(COL.trimestre)),
      instancia: cellToText(row.getCell(COL.instancia)),
      materia: cellToText(row.getCell(COL.materia)),
      tipoJuicio: cellToText(row.getCell(COL.tipoJuicio)),
      fechaCell: readFechaCell(row.getCell(COL.fecha)),
      expediente: cellToText(row.getCell(COL.expediente)),
      url: cellToUrl(row.getCell(COL.url)),
      sala: cellToText(row.getCell(COL.sala)),
      sentido: cellToText(row.getCell(COL.sentido)),
    }
    // Ignora filas totalmente vacías (por si el sheet trae filas fantasma al final).
    const anyValue = Object.entries(raw).some(
      ([k, val]) => k !== 'rowNumber' && k !== 'fechaCell' && val !== '',
    )
    if (anyValue || raw.fechaCell.kind !== 'empty') rows.push(raw)
  }
  return rows
}

// ── Normalización de campos ──────────────────────────────────────────────────

/** Extrae el primer entero de un texto tipo "1 TRIMESTRE" / "2 INSTANCIA". */
export function parseLeadingInt(s: string): number | null {
  const m = s.match(/\d+/)
  return m ? parseInt(m[0], 10) : null
}

/** Fecha texto en formato DD/MM/YYYY → Date UTC. Devuelve null si no parsea. */
export function parseTextDate(s: string): Date | null {
  const m = s.trim().match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/)
  if (!m) return null
  const day = +m[1], month = +m[2], year = +m[3]
  if (month < 1 || month > 12 || day < 1 || day > 31) return null
  const d = new Date(Date.UTC(year, month - 1, day))
  // Rechaza fechas que se "desbordan" (ej. 31/02).
  if (d.getUTCMonth() !== month - 1 || d.getUTCDate() !== day) return null
  return d
}

/** Quita la leyenda repetitiva y limpia separadores sobrantes del sentido. */
export function cleanSentido(s: string): string {
  return s
    .replace(LEGEND_RE, '')
    .replace(/[\s;]+$/, '')
    .trim()
}

export interface NormalizedRow {
  rowNumber: number
  anio: number | null
  trimestre: number | null
  instancia: number | null
  materia: string
  tipoJuicio: string | null
  fechaResolucion: Date | null
  fechaSource: FechaCell['kind']
  expediente: string
  salaJuzgado: string
  sentido: string
  /** Path relativo tras /transparencia/ cuando la URL cumple el patrón; si no, null. */
  pdfPath: string | null
  /** URL cruda tal cual cuando NO cumple el patrón; si cumple, null. */
  pdfUrlCompleta: string | null
  urlOk: boolean
  /** Marca para revisión manual (fecha de texto, URL fuera de patrón, etc.). */
  revisar: boolean
  /** Motivos por los que la fila no puede sembrarse (llave vacía / fecha inválida). */
  rejectReasons: string[]
  /** Observaciones no bloqueantes. */
  warnings: string[]
}

/**
 * Convierte una fila cruda en los campos que van a la base de datos, sin tocar
 * el `pdfPath` (se guarda EXACTAMENTE como viene, sin normalizar mayúsculas del
 * mes, porque el servidor de PDFs puede ser case-sensitive).
 */
export function normalizeRow(raw: RawRow): NormalizedRow {
  const rejectReasons: string[] = []
  const warnings: string[] = []

  const anio = parseLeadingInt(raw.anio)
  const trimestre = parseLeadingInt(raw.trimestre)
  const instancia = parseLeadingInt(raw.instancia)

  // Fecha
  let fechaResolucion: Date | null = null
  const fechaSource = raw.fechaCell.kind
  if (raw.fechaCell.kind === 'date' || raw.fechaCell.kind === 'number') {
    fechaResolucion = raw.fechaCell.date
  } else if (raw.fechaCell.kind === 'text') {
    fechaResolucion = parseTextDate(raw.fechaCell.raw)
    if (fechaResolucion) warnings.push('fecha-en-texto')
    else rejectReasons.push(`fecha-texto-no-parseable:"${raw.fechaCell.raw}"`)
  } else {
    rejectReasons.push('fecha-vacia')
  }

  // Fecha fuera de la ventana plausible: casi siempre un error de captura
  // (ej. "16/06/2045"). No se corrige ni se descarta; solo se marca para revisión.
  if (fechaResolucion) {
    const y = fechaResolucion.getUTCFullYear()
    if (y < MIN_YEAR_PLAUSIBLE || y > MAX_YEAR_PLAUSIBLE) {
      warnings.push(`fecha-fuera-de-rango:${y}`)
    }
  }

  // URL → pdfPath (exacto) o pdfUrlCompleta (cruda)
  const url = raw.url.trim()
  const m = url.match(URL_RE)
  let pdfPath: string | null = null
  let pdfUrlCompleta: string | null = null
  const urlOk = Boolean(m)
  if (m) {
    // Reconstruye desde los grupos = URL sin el prefijo, preservando el casing.
    pdfPath = `${m[1]}/${m[2]}/${m[3]}/${m[4]}`
  } else {
    pdfUrlCompleta = url || null
    if (url) warnings.push('url-fuera-de-patron')
    else warnings.push('url-vacia')
  }

  const expediente = raw.expediente.trim()
  if (!expediente) rejectReasons.push('expediente-vacio')

  if (trimestre === null) warnings.push('trimestre-no-numerico')
  if (instancia === null) warnings.push('instancia-no-numerica')
  if (anio === null) rejectReasons.push('anio-no-numerico')

  const sentido = cleanSentido(raw.sentido)

  return {
    rowNumber: raw.rowNumber,
    anio,
    trimestre,
    instancia,
    materia: raw.materia.trim(),
    tipoJuicio: raw.tipoJuicio.trim() || null,
    fechaResolucion,
    fechaSource,
    expediente,
    salaJuzgado: raw.sala.trim(),
    sentido,
    pdfPath,
    pdfUrlCompleta,
    urlOk,
    revisar: warnings.length > 0,
    rejectReasons,
    warnings,
  }
}

/** Índice de mes (0-11) a partir del nombre en español, sin importar mayúsculas. */
export function monthIndexEs(name: string): number {
  return MESES_ES.findIndex((m) => m.toLowerCase() === name.trim().toLowerCase())
}
