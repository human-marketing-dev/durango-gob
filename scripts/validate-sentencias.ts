/**
 * Reporte de anomalías del Excel de sentencias. SOLO lee y reporta; no corrige
 * ni escribe en la base de datos. Corre antes de cualquier seed.
 *
 *   npm run db:validate
 *
 * Salida: resumen legible en consola + data/reporte-anomalias.json estructurado.
 */
import { writeFileSync } from 'node:fs'
import path from 'node:path'
import {
  COL,
  URL_RE,
  URL_PREFIX,
  MESES_ES,
  readSentenciasRows,
  normalizeRow,
  cleanSentido,
  monthIndexEs,
  type RawRow,
} from './lib/xlsx-sentencias'

const FILE = path.resolve(process.cwd(), 'data/Sentencias 2025.xlsx')
const OUT = path.resolve(process.cwd(), 'data/reporte-anomalias.json')

const COL_NAMES: Record<keyof typeof COL, string> = {
  anio: 'AÑO',
  trimestre: 'TRIMESTRE',
  instancia: 'INSTANCIA',
  materia: 'MATERIA',
  tipoJuicio: 'TIPO DE JUICIO',
  fecha: 'FECHA DE RESOLUCIÓN',
  expediente: 'EXPEDIENTE',
  url: 'HIPERVÍNCULO',
  sala: 'SALA_JUZGADO',
  sentido: 'SENTIDO_RESOLUCION',
}

function rawFieldText(raw: RawRow, key: keyof typeof COL): string {
  if (key === 'fecha') return raw.fechaCell.kind === 'empty' ? '' : raw.fechaCell.raw
  return (raw[key as keyof RawRow] as string) ?? ''
}

function tally(values: string[]): [string, number][] {
  const m = new Map<string, number>()
  for (const v of values) m.set(v, (m.get(v) ?? 0) + 1)
  return [...m.entries()].sort((a, b) => b[1] - a[1])
}

function section(title: string) {
  console.log(`\n${'━'.repeat(72)}\n${title}\n${'━'.repeat(72)}`)
}

async function main() {
  console.log(`Leyendo ${FILE} …`)
  const rows = await readSentenciasRows(FILE)
  const total = rows.length
  const report: Record<string, unknown> = { archivo: FILE, totalFilas: total }

  // ── 1. Vacíos por columna ──────────────────────────────────────────────────
  section('1. CELDAS VACÍAS POR COLUMNA')
  const empties: Record<string, { count: number; filas: number[] }> = {}
  for (const key of Object.keys(COL) as (keyof typeof COL)[]) {
    const filas = rows.filter((r) => rawFieldText(r, key).trim() === '').map((r) => r.rowNumber)
    if (filas.length) {
      empties[COL_NAMES[key]] = { count: filas.length, filas: filas.slice(0, 20) }
      console.log(`  ${COL_NAMES[key].padEnd(22)} ${filas.length}  (filas: ${filas.slice(0, 10).join(', ')}${filas.length > 10 ? '…' : ''})`)
    }
  }
  if (!Object.keys(empties).length) console.log('  Sin celdas vacías.')
  report.vacios = empties

  // ── 2. Fechas ──────────────────────────────────────────────────────────────
  section('2. FECHA DE RESOLUCIÓN')
  const byKind = tally(rows.map((r) => r.fechaCell.kind))
  console.log('  Por tipo de celda:')
  for (const [k, n] of byKind) console.log(`    ${k.padEnd(10)} ${n}`)

  const textUnparseable: { fila: number; valor: string }[] = []
  for (const r of rows) {
    if (r.fechaCell.kind !== 'text') continue
    const n = normalizeRow(r)
    if (!n.fechaResolucion) textUnparseable.push({ fila: r.rowNumber, valor: r.fechaCell.raw })
  }
  console.log(`\n  Fechas de texto que NO parsean como DD/MM/YYYY: ${textUnparseable.length}`)
  textUnparseable.slice(0, 10).forEach((t) => console.log(`    fila ${t.fila}: "${t.valor}"`))

  // Fechas fuera de la ventana plausible (errores de captura, ej. 2045, 1985).
  const outOfRange: { fila: number; valor: string; anio: number }[] = []
  for (const r of rows) {
    const n = normalizeRow(r)
    if (n.warnings.some((w) => w.startsWith('fecha-fuera-de-rango'))) {
      outOfRange.push({ fila: r.rowNumber, valor: r.fechaCell.raw, anio: n.fechaResolucion!.getUTCFullYear() })
    }
  }
  console.log(`\n  ⚠ Fechas fuera de rango [${'2010'}–${new Date().getUTCFullYear() + 1}] (probable error de captura): ${outOfRange.length}`)
  outOfRange.forEach((o) => console.log(`    fila ${o.fila}: "${o.valor}" → año ${o.anio}`))

  // Desfase publicación: mes/año de la fecha vs mes/año en la URL (informativo).
  let desfase = 0
  const desfaseSamples: string[] = []
  for (const r of rows) {
    const n = normalizeRow(r)
    if (!n.fechaResolucion || !n.urlOk) continue
    const m = r.url.match(URL_RE)!
    const urlMonth = monthIndexEs(m[3])
    const urlYear = +m[2]
    if (urlMonth === -1) continue
    if (n.fechaResolucion.getUTCMonth() !== urlMonth || n.fechaResolucion.getUTCFullYear() !== urlYear) {
      desfase++
      if (desfaseSamples.length < 8) {
        desfaseSamples.push(
          `fila ${r.rowNumber}: fecha=${n.fechaResolucion.toISOString().slice(0, 10)} · URL=${MESES_ES[urlMonth]}/${urlYear}`,
        )
      }
    }
  }
  console.log(
    `\n  ⓘ Desfase fecha↔mes-de-URL: ${desfase} filas (${((desfase / total) * 100).toFixed(1)}%).`,
  )
  console.log('    Es INFORMATIVO: el mes de la URL es el de PUBLICACIÓN, no el de resolución.')
  desfaseSamples.forEach((s) => console.log(`    ${s}`))
  report.fechas = {
    porTipo: Object.fromEntries(byKind),
    textoNoParseable: textUnparseable,
    fueraDeRango: outOfRange,
    desfasePublicacion: { count: desfase, nota: 'informativo — mes de URL = publicación', ejemplos: desfaseSamples },
  }

  // ── 3. URLs ────────────────────────────────────────────────────────────────
  section('3. HIPERVÍNCULOS')
  const bad: { fila: number; url: string; causa: string }[] = []
  const claves = new Set<string>()
  const monthCasing = new Set<string>()
  for (const r of rows) {
    const url = r.url.trim()
    const m = url.match(URL_RE)
    if (m) {
      claves.add(m[1])
      monthCasing.add(m[3])
      continue
    }
    let causa = 'otro'
    if (!url) causa = 'vacía'
    else if (!url.startsWith(URL_PREFIX)) causa = 'prefijo distinto'
    else if (/\/\//.test(url.slice(URL_PREFIX.length))) causa = 'doble slash'
    else if (/\.docx?$/i.test(url)) causa = 'extensión .doc/.docx'
    else if (!/\.pdf$/i.test(url)) causa = 'sin extensión .pdf'
    bad.push({ fila: r.rowNumber, url, causa })
  }
  console.log(`  Cumplen patrón: ${total - bad.length}   |   NO cumplen: ${bad.length}`)
  console.log('\n  No cumplen, por causa:')
  for (const [causa, n] of tally(bad.map((b) => b.causa))) {
    console.log(`    ${causa.padEnd(22)} ${n}`)
    bad.filter((b) => b.causa === causa).slice(0, 3).forEach((b) => console.log(`        fila ${b.fila}: ${b.url}`))
  }
  // Meses con mayúsculas inconsistentes (solo para el reporte; el pdfPath NO se normaliza).
  const monthVariants = new Map<string, Set<string>>()
  for (const mv of monthCasing) {
    const canon = mv.toLowerCase()
    if (!monthVariants.has(canon)) monthVariants.set(canon, new Set())
    monthVariants.get(canon)!.add(mv)
  }
  const inconsistentMonths = [...monthVariants.values()].filter((s) => s.size > 1).map((s) => [...s])
  console.log(`\n  Meses en URL con mayúsculas inconsistentes: ${inconsistentMonths.length}`)
  inconsistentMonths.forEach((v) => console.log(`    ${v.join('  vs  ')}`))
  console.log(`\n  Claves distintas (2º segmento): ${claves.size}`)
  report.urls = {
    cumplen: total - bad.length,
    noCumplen: bad.length,
    porCausa: Object.fromEntries(tally(bad.map((b) => b.causa))),
    ejemplos: bad.slice(0, 40),
    mesesInconsistentes: inconsistentMonths,
    clavesDistintas: [...claves].sort(),
  }

  // ── 4. Consistencia de categóricos ──────────────────────────────────────────
  section('4. VALORES DISTINTOS EN CAMPOS CATEGÓRICOS')
  const cat = (key: keyof typeof COL) => {
    const t = tally(rows.map((r) => rawFieldText(r, key).trim()).filter(Boolean))
    console.log(`\n  ${COL_NAMES[key]} — ${t.length} valores:`)
    t.slice(0, 30).forEach(([v, n]) => console.log(`    ${String(n).padStart(5)}  "${v}"`))
    return t
  }
  report.categoricos = {
    anio: cat('anio'),
    trimestre: cat('trimestre'),
    instancia: cat('instancia'),
    materia: cat('materia'),
    tipoJuicio: cat('tipoJuicio').slice(0, 50),
    sala: cat('sala'),
  }

  // ── 5. Sentido ──────────────────────────────────────────────────────────────
  section('5. SENTIDO_RESOLUCION')
  const withLegend = rows.filter((r) => /la versi[oó]n p[uú]blica/i.test(r.sentido)).length
  const cleaned = rows.map((r) => cleanSentido(r.sentido))
  const emptyAfter = cleaned.filter((s) => s === '').length
  const distinct = tally(cleaned)
  console.log(`  Filas con leyenda "La versión pública…": ${withLegend} / ${total}`)
  console.log(`  Sentido vacío tras limpiar la leyenda: ${emptyAfter}`)
  console.log(`  Valores de sentido distintos tras limpiar: ${distinct.length}`)
  distinct.slice(0, 20).forEach(([v, n]) => console.log(`    ${String(n).padStart(5)}  "${v.slice(0, 60)}"`))
  report.sentido = {
    conLeyenda: withLegend,
    vacioTrasLimpiar: emptyAfter,
    valoresDistintos: distinct.length,
    top: distinct.slice(0, 40),
  }

  // ── 6. Duplicados exactos ────────────────────────────────────────────────────
  section('6. DUPLICADOS (expediente + fecha + instancia)')
  const groups = new Map<string, RawRow[]>()
  for (const r of rows) {
    const n = normalizeRow(r)
    const fecha = n.fechaResolucion ? n.fechaResolucion.toISOString().slice(0, 10) : `raw:${r.fechaCell.raw}`
    const key = `${n.expediente}|${fecha}|${n.instancia ?? '?'}`
    if (!groups.has(key)) groups.set(key, [])
    groups.get(key)!.push(r)
  }
  const dupGroups = [...groups.entries()].filter(([, rs]) => rs.length > 1)
  let identical = 0
  const differ: string[] = []
  for (const [key, rs] of dupGroups) {
    const sigs = new Set(
      rs.map((r) =>
        [r.anio, r.trimestre, r.instancia, r.materia, r.tipoJuicio, r.fechaCell.raw, r.expediente, r.url, r.sala, r.sentido].join('¦'),
      ),
    )
    if (sigs.size === 1) identical++
    else if (differ.length < 5) differ.push(key)
  }
  const extraRows = dupGroups.reduce((s, [, rs]) => s + rs.length - 1, 0)
  console.log(`  Grupos duplicados: ${dupGroups.length}  (filas extra: ${extraRows})`)
  console.log(`    · byte-idénticos en todas las columnas: ${identical}`)
  console.log(`    · difieren en otras columnas: ${dupGroups.length - identical}`)
  differ.forEach((k) => console.log(`        DIFIEREN: ${k}`))
  report.duplicados = {
    grupos: dupGroups.length,
    filasExtra: extraRows,
    identicos: identical,
    difieren: dupGroups.length - identical,
    ejemplosDifieren: differ,
  }

  // ── 7. Filas que el seed rechazaría ──────────────────────────────────────────
  section('7. FILAS QUE SERÍAN RECHAZADAS EN EL SEED')
  const rejected = rows.map(normalizeRow).filter((n) => n.rejectReasons.length > 0)
  console.log(`  Total: ${rejected.length}`)
  rejected.slice(0, 20).forEach((n) => console.log(`    fila ${n.rowNumber}: ${n.rejectReasons.join(', ')}`))
  report.rechazadas = {
    total: rejected.length,
    filas: rejected.map((n) => ({ fila: n.rowNumber, motivos: n.rejectReasons })),
  }

  // ── Resumen y persistencia ───────────────────────────────────────────────────
  section('RESUMEN')
  const revisar = rows.map(normalizeRow).filter((n) => n.revisar).length
  console.log(`  Filas totales:              ${total}`)
  console.log(`  Rechazadas (no sembrables): ${rejected.length}`)
  console.log(`  Marcadas 'revisar':         ${revisar}`)
  console.log(`  Duplicados exactos a colapsar: ${extraRows}`)
  console.log(`  Sembrables netas (aprox):   ${total - rejected.length - extraRows}`)
  report.resumen = {
    total,
    rechazadas: rejected.length,
    revisar,
    duplicadosColapsados: extraRows,
    sembrablesAprox: total - rejected.length - extraRows,
  }

  writeFileSync(OUT, JSON.stringify(report, null, 2), 'utf8')
  console.log(`\n✅ Reporte estructurado escrito en ${OUT}`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
