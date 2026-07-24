'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import {
  PARAMS,
  SENTIDO_FALLBACK,
  type FacetsResponse,
  type SentenciaDTO,
  type SentenciasResponse,
} from '@/lib/sentencias'

const BORDER = '#B8C0B8'
const BORDER_SOFT = '#E4E7E4'

// ── Helpers ───────────────────────────────────────────────────────────────────

function formatFecha(iso: string): string {
  const [y, m, d] = iso.split('-')
  if (!y || !m || !d) return iso
  return `${d}/${m}/${y}`
}

// ── Iconos ─────────────────────────────────────────────────────────────────────

function IconSearch() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}

function IconPdf() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  )
}

// ── Controles de filtro ──────────────────────────────────────────────────────

function Select({
  label,
  value,
  onChange,
  children,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  children: React.ReactNode
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-lato text-overlay uppercase" style={{ fontSize: '10px', letterSpacing: '1.5px' }}>
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="font-lato text-primary bg-white"
        style={{
          fontSize: '14px',
          padding: '9px 12px',
          border: `1px solid ${BORDER}`,
          borderRadius: 0,
          appearance: 'none',
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23666968' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 10px center',
          paddingRight: '30px',
          cursor: 'pointer',
        }}
      >
        {children}
      </select>
    </label>
  )
}

// ── Componente principal ─────────────────────────────────────────────────────

export default function Buscador() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const spString = searchParams.toString()

  const [facets, setFacets] = useState<FacetsResponse | null>(null)
  const [result, setResult] = useState<SentenciasResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  // Valor del input de texto (local, para poder hacer debounce del push a la URL).
  const [qInput, setQInput] = useState(searchParams.get(PARAMS.q) ?? '')

  // Lee el estado actual desde la URL (única fuente de verdad).
  const current = useMemo(
    () => ({
      q: searchParams.get(PARAMS.q) ?? '',
      materia: searchParams.get(PARAMS.materia) ?? '',
      tipo: searchParams.get(PARAMS.tipoJuicio) ?? '',
      anio: searchParams.get(PARAMS.anio) ?? '',
      trimestre: searchParams.get(PARAMS.trimestre) ?? '',
      instancia: searchParams.get(PARAMS.instancia) ?? '',
      sala: searchParams.get(PARAMS.salaJuzgado) ?? '',
      page: searchParams.get(PARAMS.page) ?? '1',
    }),
    [searchParams],
  )

  // Sincroniza el input si la URL cambia por fuera (ej. botón atrás).
  useEffect(() => {
    setQInput(searchParams.get(PARAMS.q) ?? '')
  }, [searchParams])

  // Escribe parámetros en la URL. Al cambiar un filtro se vuelve a la página 1.
  const setParams = useCallback(
    (updates: Record<string, string | undefined>, { resetPage = true } = {}) => {
      const next = new URLSearchParams(searchParams.toString())
      for (const [k, v] of Object.entries(updates)) {
        if (v === undefined || v === '') next.delete(k)
        else next.set(k, v)
      }
      if (resetPage && !('page' in updates)) next.delete(PARAMS.page)
      const qs = next.toString()
      router.push(qs ? `${pathname}?${qs}` : pathname)
    },
    [router, pathname, searchParams],
  )

  // Debounce del texto libre → URL.
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  useEffect(() => {
    if (qInput === current.q) return
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => {
      setParams({ [PARAMS.q]: qInput || undefined })
    }, 350)
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [qInput])

  // Carga los facets una vez.
  useEffect(() => {
    let alive = true
    fetch('/api/sentencias/facets')
      .then((r) => r.json())
      .then((d: FacetsResponse) => {
        if (alive) setFacets(d)
      })
      .catch(() => {})
    return () => {
      alive = false
    }
  }, [])

  // Carga resultados cada vez que cambian los parámetros de la URL.
  useEffect(() => {
    let alive = true
    setLoading(true)
    setError(false)
    fetch(`/api/sentencias?${spString}`)
      .then((r) => {
        if (!r.ok) throw new Error('bad response')
        return r.json()
      })
      .then((d: SentenciasResponse) => {
        if (alive) setResult(d)
      })
      .catch(() => {
        if (alive) setError(true)
      })
      .finally(() => {
        if (alive) setLoading(false)
      })
    return () => {
      alive = false
    }
  }, [spString])

  const hasFilters =
    current.q || current.materia || current.tipo || current.anio || current.trimestre || current.instancia || current.sala

  const clearAll = () => {
    setQInput('')
    router.push(pathname)
  }

  const page = result?.page ?? 1
  const totalPages = result?.totalPages ?? 1

  return (
    <div className="max-w-content mx-auto site-px" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
      {/* Barra de búsqueda */}
      <div style={{ position: 'relative', marginBottom: '20px' }}>
        <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#666968' }}>
          <IconSearch />
        </span>
        <input
          type="search"
          value={qInput}
          onChange={(e) => setQInput(e.target.value)}
          placeholder="Buscar por expediente, materia, tipo de juicio, sala o sentido…"
          aria-label="Buscar sentencias"
          className="font-lato text-primary w-full"
          style={{
            fontSize: '15px',
            padding: '14px 16px 14px 44px',
            border: `1px solid ${BORDER}`,
            borderRadius: 0,
            outline: 'none',
          }}
        />
      </div>

      {/* Filtros */}
      <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', marginBottom: '20px' }}>
        <Select label="Materia" value={current.materia} onChange={(v) => setParams({ [PARAMS.materia]: v || undefined })}>
          <option value="">Todas</option>
          {facets?.materias.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </Select>

        <Select label="Tipo de juicio" value={current.tipo} onChange={(v) => setParams({ [PARAMS.tipoJuicio]: v || undefined })}>
          <option value="">Todos</option>
          {facets?.tiposJuicio.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </Select>

        <Select label="Año" value={current.anio} onChange={(v) => setParams({ [PARAMS.anio]: v || undefined })}>
          <option value="">Todos</option>
          {facets?.anios.map((a) => (
            <option key={a} value={String(a)}>
              {a}
            </option>
          ))}
        </Select>

        <Select label="Trimestre" value={current.trimestre} onChange={(v) => setParams({ [PARAMS.trimestre]: v || undefined })}>
          <option value="">Todos</option>
          {facets?.trimestres.map((t) => (
            <option key={t} value={String(t)}>
              {t}° trimestre
            </option>
          ))}
        </Select>

        <Select label="Instancia" value={current.instancia} onChange={(v) => setParams({ [PARAMS.instancia]: v || undefined })}>
          <option value="">Todas</option>
          {facets?.instancias.map((i) => (
            <option key={i} value={String(i)}>
              {i}ª instancia
            </option>
          ))}
        </Select>

        <Select label="Sala / Juzgado" value={current.sala} onChange={(v) => setParams({ [PARAMS.salaJuzgado]: v || undefined })}>
          <option value="">Todas</option>
          {facets?.salas.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </Select>
      </div>

      {/* Resumen de resultados */}
      <div className="flex items-center justify-between flex-wrap gap-3" style={{ marginBottom: '16px' }}>
        <p className="font-lato text-accent" style={{ fontSize: '14px', letterSpacing: '0.3px' }}>
          {loading && !result ? 'Buscando…' : `${result?.total.toLocaleString('es-MX') ?? 0} sentencias`}
        </p>
        {hasFilters && (
          <button
            onClick={clearAll}
            className="font-lato text-overlay hover:text-primary transition-colors"
            style={{ fontSize: '13px', letterSpacing: '0.3px', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            Limpiar filtros
          </button>
        )}
      </div>

      {/* Resultados */}
      {error ? (
        <EmptyBox titulo="Ocurrió un error" texto="No se pudieron cargar las sentencias. Intenta de nuevo." />
      ) : loading && !result ? (
        <SkeletonTable />
      ) : result && result.data.length === 0 ? (
        <EmptyBox titulo="Sin resultados" texto="No se encontraron sentencias con los filtros seleccionados." />
      ) : result ? (
        <div style={{ opacity: loading ? 0.55 : 1, transition: 'opacity 120ms' }}>
          <ResultsTable rows={result.data} />
          <ResultsCards rows={result.data} />
        </div>
      ) : null}

      {/* Paginación */}
      {result && result.data.length > 0 && (
        <Pagination
          page={page}
          totalPages={totalPages}
          onGo={(p) => setParams({ [PARAMS.page]: String(p) }, { resetPage: false })}
        />
      )}
    </div>
  )
}

// ── Tabla (desktop) ───────────────────────────────────────────────────────────

function ResultsTable({ rows }: { rows: SentenciaDTO[] }) {
  return (
    <div className="hidden md:block" style={{ overflowX: 'auto', border: `1px solid ${BORDER}` }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '860px' }}>
        <thead>
          <tr style={{ borderBottom: `1px solid ${BORDER}`, background: '#F7F8F7' }}>
            {['Expediente', 'Materia', 'Tipo de juicio', 'Fecha', 'Sala / Juzgado', 'Sentido', 'PDF'].map((h) => (
              <th
                key={h}
                className="font-lato text-overlay uppercase"
                style={{ fontSize: '10px', letterSpacing: '1px', textAlign: 'left', padding: '12px 14px', whiteSpace: 'nowrap' }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id} style={{ borderBottom: `1px solid ${BORDER_SOFT}` }}>
              <td className="font-lato text-primary" style={{ fontSize: '13px', padding: '12px 14px', fontWeight: 600, whiteSpace: 'nowrap' }}>
                {r.expediente}
              </td>
              <td className="font-lato text-primary" style={{ fontSize: '13px', padding: '12px 14px' }}>{r.materia}</td>
              <td className="font-lato text-accent" style={{ fontSize: '13px', padding: '12px 14px' }}>{r.tipoJuicio ?? '—'}</td>
              <td className="font-lato text-primary" style={{ fontSize: '13px', padding: '12px 14px', whiteSpace: 'nowrap' }}>
                {formatFecha(r.fechaResolucion)}
              </td>
              <td className="font-lato text-accent" style={{ fontSize: '13px', padding: '12px 14px' }}>{r.salaJuzgado}</td>
              <td className="font-lato text-accent" style={{ fontSize: '13px', padding: '12px 14px' }}>
                {r.sentido || SENTIDO_FALLBACK}
              </td>
              <td style={{ padding: '12px 14px' }}>
                <PdfLink url={r.pdfUrl} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// ── Cards (móvil) ─────────────────────────────────────────────────────────────

function ResultsCards({ rows }: { rows: SentenciaDTO[] }) {
  return (
    <div className="md:hidden flex flex-col gap-3">
      {rows.map((r) => (
        <div key={r.id} style={{ border: `1px solid ${BORDER}`, padding: '16px' }}>
          <div className="flex items-center justify-between gap-2" style={{ marginBottom: '8px' }}>
            <span className="font-lato text-primary" style={{ fontSize: '15px', fontWeight: 700 }}>
              {r.expediente}
            </span>
            <span className="font-lato text-overlay" style={{ fontSize: '12px', whiteSpace: 'nowrap' }}>
              {formatFecha(r.fechaResolucion)}
            </span>
          </div>
          <Field label="Materia" value={r.materia} />
          <Field label="Tipo de juicio" value={r.tipoJuicio ?? '—'} />
          <Field label="Sala / Juzgado" value={r.salaJuzgado} />
          <Field label="Sentido" value={r.sentido || SENTIDO_FALLBACK} />
          <div style={{ marginTop: '12px' }}>
            <PdfLink url={r.pdfUrl} />
          </div>
        </div>
      ))}
    </div>
  )
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: 'flex', gap: '8px', marginBottom: '4px' }}>
      <span className="font-lato text-overlay uppercase" style={{ fontSize: '10px', letterSpacing: '1px', minWidth: '92px', paddingTop: '2px' }}>
        {label}
      </span>
      <span className="font-lato text-primary" style={{ fontSize: '13px', lineHeight: '1.4em' }}>
        {value}
      </span>
    </div>
  )
}

function PdfLink({ url }: { url: string | null }) {
  if (!url) return <span className="font-lato text-overlay" style={{ fontSize: '12px' }}>No disponible</span>
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 font-lato text-primary hover:text-accent transition-colors"
      style={{ fontSize: '13px', letterSpacing: '0.3px', textDecoration: 'none', fontWeight: 500 }}
    >
      <IconPdf />
      Ver PDF
    </a>
  )
}

// ── Paginación ────────────────────────────────────────────────────────────────

function Pagination({ page, totalPages, onGo }: { page: number; totalPages: number; onGo: (p: number) => void }) {
  if (totalPages <= 1) return null
  const btn = (label: string, target: number, disabled: boolean) => (
    <button
      onClick={() => onGo(target)}
      disabled={disabled}
      className="font-lato"
      style={{
        fontSize: '13px',
        letterSpacing: '0.3px',
        padding: '9px 16px',
        border: `1px solid ${BORDER}`,
        background: 'white',
        color: disabled ? '#B8C0B8' : '#1B1A19',
        cursor: disabled ? 'default' : 'pointer',
      }}
    >
      {label}
    </button>
  )
  return (
    <div className="flex items-center justify-center gap-3" style={{ marginTop: '32px' }}>
      {btn('‹ Anterior', page - 1, page <= 1)}
      <span className="font-lato text-accent" style={{ fontSize: '13px', letterSpacing: '0.3px' }}>
        Página {page.toLocaleString('es-MX')} de {totalPages.toLocaleString('es-MX')}
      </span>
      {btn('Siguiente ›', page + 1, page >= totalPages)}
    </div>
  )
}

// ── Estados auxiliares ────────────────────────────────────────────────────────

function EmptyBox({ titulo, texto }: { titulo: string; texto: string }) {
  return (
    <div style={{ border: `1px solid ${BORDER}`, padding: '48px 24px', textAlign: 'center' }}>
      <p className="font-monument text-primary" style={{ fontSize: '20px', marginBottom: '8px' }}>
        {titulo}
      </p>
      <p className="font-lato text-overlay" style={{ fontSize: '14px' }}>
        {texto}
      </p>
    </div>
  )
}

function SkeletonTable() {
  return (
    <div style={{ border: `1px solid ${BORDER}` }}>
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          style={{
            height: '46px',
            borderBottom: `1px solid ${BORDER_SOFT}`,
            background: 'linear-gradient(90deg, #F7F8F7 25%, #EEF0EE 50%, #F7F8F7 75%)',
            backgroundSize: '400% 100%',
            animation: 'sentencias-shimmer 1.4s ease infinite',
          }}
        />
      ))}
      <style>{`@keyframes sentencias-shimmer { 0% { background-position: 100% 0 } 100% { background-position: 0 0 } }`}</style>
    </div>
  )
}
