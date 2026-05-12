import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Calendario — Recursos — Poder Judicial del Estado de Durango',
  description: 'Calendario oficial del Poder Judicial del Estado de Durango con días inhábiles, suspensión de labores, periodos vacacionales y días de personal sindicalizado.',
}

// ── Types ─────────────────────────────────────────────────────────────────────

type Cat = 'inhabil' | 'suspension' | 'vacacional' | 'sindicalizado'

const CATS: { key: Cat; label: string; color: string; bg: string; border: string }[] = [
  { key: 'inhabil',       label: 'Días Inhábiles',         color: '#991B1B', bg: '#FEE2E2', border: '#FECACA' },
  { key: 'suspension',    label: 'Suspensión de Labores',  color: '#92400E', bg: '#FEF3C7', border: '#FDE68A' },
  { key: 'vacacional',    label: 'Periodos Vacacionales',  color: '#1E40AF', bg: '#DBEAFE', border: '#BFDBFE' },
  { key: 'sindicalizado', label: 'Personal Sindicalizado', color: '#5B21B6', bg: '#EDE9FE', border: '#DDD6FE' },
]

// ── Data helpers ──────────────────────────────────────────────────────────────

function expand(start: string, end: string): string[] {
  const out: string[] = []
  const d = new Date(start + 'T12:00:00')
  const e = new Date(end + 'T12:00:00')
  while (d <= e) {
    out.push(d.toISOString().slice(0, 10))
    d.setDate(d.getDate() + 1)
  }
  return out
}

interface Entry { cat: Cat; label: string; displayDate: string; dates: string[] }

const MONTH_NAMES_ES = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']

function fmtDate(d: string): string {
  const [, m, day] = d.split('-')
  return `${parseInt(day)} de ${MONTH_NAMES_ES[parseInt(m) - 1]}`
}

function fmtRanges(ranges: (string | [string, string])[]): string {
  return ranges.map(r => Array.isArray(r) ? `${fmtDate(r[0])} al ${fmtDate(r[1])}` : fmtDate(r)).join(', ')
}

function e(cat: Cat, label: string, ...ranges: (string | [string, string])[]): Entry {
  return {
    cat,
    label,
    displayDate: fmtRanges(ranges),
    dates: ranges.flatMap(r => Array.isArray(r) ? expand(r[0], r[1]) : [r]),
  }
}

// ── Calendar data per year ────────────────────────────────────────────────────

const CAL_DATA: Record<number, Entry[]> = {
  2026: [
    // Días inhábiles
    e('inhabil', 'Año Nuevo',                                                     '2026-01-01'),
    e('inhabil', 'Conmemoración de la Constitución',                              '2026-02-02'),
    e('inhabil', 'Natalicio de Benito Juárez (en sustitución del 21 de marzo)',   '2026-03-16'),
    e('inhabil', 'Día del Trabajo',                                               '2026-05-01'),
    e('inhabil', 'Aniversario de la Batalla de Puebla',                           '2026-05-05'),
    e('inhabil', 'Aniversario de la Independencia de México',                     '2026-09-16'),
    e('inhabil', 'Aniversario de la Revolución Mexicana (en sustitución del 20 de noviembre)', '2026-11-16'),
    e('inhabil', 'Navidad',                                                       '2026-12-25'),
    // Suspensión de labores
    e('suspension', 'Acuerdo del Pleno del Órgano de Administración Judicial',    '2026-01-02'),
    e('suspension', 'Semana Mayor',                                               ['2026-03-30', '2026-04-03']),
    e('suspension', 'Día de la Madre',                                            '2026-05-10'),
    e('suspension', 'Día de los Fieles Difuntos',                                 '2026-11-02'),
    e('suspension', 'Día de la Virgen de Guadalupe',                              '2026-12-12'),
    // Periodos vacacionales
    e('vacacional', 'Primer Período Vacacional',                                  ['2026-07-16', '2026-07-31']),
    e('vacacional', 'Segundo Período Vacacional',                                 ['2026-12-16', '2026-12-31']),
    // Personal sindicalizado
    e('sindicalizado', 'Período Vacacional — Semana Santa',                       ['2026-04-06', '2026-04-10']),
    e('sindicalizado', 'Aniversario del Sindicato de los Tres Poderes (en sustitución del 8 de noviembre)', '2026-11-06'),
  ],
}

// Build date → {cat, label} map, respecting priority order
function buildMap(entries: Entry[]): Record<string, { cat: Cat; label: string }> {
  const priority: Cat[] = ['inhabil', 'suspension', 'vacacional', 'sindicalizado']
  const map: Record<string, { cat: Cat; label: string }> = {}
  for (const entry of entries) {
    for (const date of entry.dates) {
      const cur = map[date]
      if (!cur || priority.indexOf(entry.cat) < priority.indexOf(cur.cat)) {
        map[date] = { cat: entry.cat, label: entry.label }
      }
    }
  }
  return map
}

// ── Components ────────────────────────────────────────────────────────────────

const MONTH_NAMES = MONTH_NAMES_ES
const DAY_NAMES = ['Lu','Ma','Mi','Ju','Vi','Sa','Do']

function MonthCard({
  year, month, dayMap,
}: {
  year: number
  month: number
  dayMap: Record<string, { cat: Cat; label: string }>
}) {
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const rawFirst    = new Date(year, month, 1).getDay()
  const firstMon    = rawFirst === 0 ? 6 : rawFirst - 1 // 0=Lu … 6=Do

  const cells: (number | null)[] = [
    ...Array<null>(firstMon).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ]
  while (cells.length % 7 !== 0) cells.push(null)

  return (
    <div style={{ border: '1px solid #B8C0B8', overflow: 'hidden' }}>

      {/* Month header */}
      <div className="bg-primary" style={{ padding: '8px 12px' }}>
        <p className="font-lato text-white text-center uppercase" style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '2px' }}>
          {MONTH_NAMES[month]}
        </p>
      </div>

      {/* Day-of-week headers */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', borderBottom: '1px solid #B8C0B8', background: '#F4F6F4' }}>
        {DAY_NAMES.map((d, i) => (
          <div key={d} className="text-center" style={{ padding: '5px 0', borderRight: i < 6 ? '1px solid #E5E7E5' : 'none' }}>
            <span className="font-lato" style={{ fontSize: '8px', fontWeight: '600', letterSpacing: '0.5px', color: i >= 5 ? '#9AA1A6' : '#6B7280' }}>
              {d}
            </span>
          </div>
        ))}
      </div>

      {/* Day cells */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
        {cells.map((day, i) => {
          const col = i % 7
          const isWeekend = col >= 5
          const borderRight = col < 6 ? '1px solid #E5E7E5' : 'none'
          const borderBottom = '1px solid #E5E7E5'

          if (!day) {
            return <div key={i} style={{ aspectRatio: '1/1', borderRight, borderBottom, background: '#FAFAFA' }} />
          }

          const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
          const info    = dayMap[dateStr]
          const catDef  = info ? CATS.find(c => c.key === info.cat) : null

          return (
            <div
              key={i}
              title={info?.label}
              style={{
                aspectRatio: '1/1',
                background: catDef?.bg ?? (isWeekend ? '#F4F6F4' : 'white'),
                borderRight,
                borderBottom,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: info ? 'help' : 'default',
              }}
            >
              <span
                className="font-lato"
                style={{
                  fontSize: '10px',
                  fontWeight: catDef ? '700' : '400',
                  color: catDef?.color ?? (isWeekend ? '#9AA1A6' : '#1B1A19'),
                  lineHeight: 1,
                  userSelect: 'none',
                }}
              >
                {day}
              </span>
            </div>
          )
        })}
      </div>

    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Page() {
  const year    = new Date().getFullYear()
  const entries = CAL_DATA[year] ?? []
  const dayMap  = buildMap(entries)

  return (
    <div className="bg-white">

      {/* Breadcrumbs */}
      <div style={{ borderBottom: '1px solid #B8C0B8' }}>
        <div className="max-w-content mx-auto site-px py-3 flex items-center gap-2 flex-wrap">
          {[
            { label: 'Inicio',   href: '/' },
            { label: 'Recursos', href: '/recursos' },
          ].map(({ label, href }) => (
            <span key={href} className="flex items-center gap-2">
              <Link href={href} className="font-lato text-overlay hover:text-primary transition-colors" style={{ fontSize: '12px', letterSpacing: '0.3px', textDecoration: 'none' }}>
                {label}
              </Link>
              <span className="text-overlay" style={{ fontSize: '12px' }}>›</span>
            </span>
          ))}
          <span className="font-lato text-primary" style={{ fontSize: '12px', letterSpacing: '0.3px' }}>Calendario</span>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '64px', paddingBottom: '48px', borderBottom: '1px solid #B8C0B8' }}>
        <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>Recursos</p>
        <h1 className="font-monument text-primary" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '400', letterSpacing: '0.5px', lineHeight: '1.1em', marginBottom: '16px' }}>
          Calendario {year}
        </h1>
        <p className="font-lato text-accent" style={{ fontSize: '16px', lineHeight: '1.7em', letterSpacing: '0.3px', maxWidth: '640px' }}>
          Calendario oficial del Poder Judicial del Estado de Durango. Incluye días inhábiles, suspensiones de labores, periodos vacacionales y días correspondientes al personal sindicalizado.
        </p>

        {/* Legend */}
        <div className="flex flex-wrap gap-3 mt-8">
          {CATS.map(cat => (
            <div key={cat.key} className="flex items-center gap-2" style={{ padding: '6px 12px', border: `1px solid ${cat.border}`, background: cat.bg }}>
              <span style={{ width: '10px', height: '10px', background: cat.color, display: 'inline-block', flexShrink: 0 }} />
              <span className="font-lato" style={{ fontSize: '12px', fontWeight: '500', color: cat.color, letterSpacing: '0.3px' }}>
                {cat.label}
              </span>
            </div>
          ))}
          <div className="flex items-center gap-2" style={{ padding: '6px 12px', border: '1px solid #E5E7E5', background: '#F4F6F4' }}>
            <span style={{ width: '10px', height: '10px', background: '#9AA1A6', display: 'inline-block', flexShrink: 0 }} />
            <span className="font-lato" style={{ fontSize: '12px', fontWeight: '500', color: '#6B7280', letterSpacing: '0.3px' }}>
              Fin de semana
            </span>
          </div>
        </div>
      </div>

      {/* Calendar grid */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '48px', paddingBottom: '80px' }}>
        {entries.length === 0 && (
          <p className="font-lato text-overlay" style={{ fontSize: '14px' }}>
            No hay datos registrados para el año {year}.
          </p>
        )}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '1px',
            background: '#B8C0B8',
          }}
        >
          {Array.from({ length: 12 }, (_, month) => (
            <MonthCard key={month} year={year} month={month} dayMap={dayMap} />
          ))}
        </div>

        {/* Detail list */}
        <div style={{ marginTop: '56px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '32px' }}>
          {CATS.map(cat => {
            const catEntries = entries.filter(en => en.cat === cat.key)
            if (!catEntries.length) return null
            return (
              <div key={cat.key}>
                <div style={{ borderBottom: `2px solid ${cat.color}`, paddingBottom: '8px', marginBottom: '12px' }}>
                  <h2 className="font-lato uppercase" style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '1.5px', color: cat.color }}>
                    {cat.label}
                  </h2>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {catEntries.map((en, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span style={{ width: '6px', height: '6px', background: cat.color, borderRadius: '50%', flexShrink: 0, marginTop: '5px' }} />
                      <span className="font-lato text-accent" style={{ fontSize: '13px', lineHeight: '1.5em', letterSpacing: '0.2px' }}>
                        <span style={{ color: cat.color, fontWeight: '600' }}>{en.displayDate}:</span>{' '}{en.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}
