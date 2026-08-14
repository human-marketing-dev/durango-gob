'use client'

import { useMemo, useState } from 'react'
import { urlDocumento, type AmbitoNormativo } from '@/data/marco-normativo'

/** Minúsculas + sin acentos, para buscar «victimas» y encontrar «Víctimas». */
const normaliza = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
const slug = (s: string) => normaliza(s).replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')

const cuenta = (a: AmbitoNormativo) =>
  a.categorias.reduce((m, c) => m + c.documentos.length, 0)

function IconoDescarga() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}

export default function MarcoNormativoLista({ ambitos }: { ambitos: AmbitoNormativo[] }) {
  const [query, setQuery] = useState('')
  const q = normaliza(query.trim())

  const total = useMemo(() => ambitos.reduce((n, a) => n + cuenta(a), 0), [ambitos])

  const filtrado = useMemo(() => {
    if (!q) return ambitos
    return ambitos
      .map((a) => ({
        ...a,
        categorias: a.categorias
          .map((c) => ({ ...c, documentos: c.documentos.filter((d) => normaliza(d.titulo).includes(q)) }))
          .filter((c) => c.documentos.length > 0),
      }))
      .filter((a) => a.categorias.length > 0)
  }, [ambitos, q])

  const resultados = filtrado.reduce((n, a) => n + cuenta(a), 0)

  return (
    <div>
      {/* Buscador + barra de salto (sticky) */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 30,
          background: 'white',
          borderBottom: '1px solid #E4E7E4',
          paddingTop: '8px',
          paddingBottom: '18px',
          marginBottom: '44px',
        }}
      >
        {/* Campo de búsqueda */}
        <div style={{ position: 'relative', maxWidth: '520px' }}>
          <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#9AA1A6', pointerEvents: 'none', display: 'flex' }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por título…"
            aria-label="Buscar documento por título"
            className="font-lato text-primary w-full"
            style={{
              fontSize: '15px',
              letterSpacing: '0.2px',
              padding: '13px 44px 13px 42px',
              border: '1px solid #B8C0B8',
              background: 'white',
              outline: 'none',
            }}
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label="Limpiar búsqueda"
              style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: '#666968', background: 'transparent', border: 'none', cursor: 'pointer', padding: '6px', display: 'flex', lineHeight: 0 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}
        </div>

        {/* Conteo de resultados */}
        <p className="font-lato uppercase text-overlay" style={{ fontSize: '11px', letterSpacing: '1.5px', marginTop: '12px' }}>
          {q
            ? `${resultados} ${resultados === 1 ? 'resultado' : 'resultados'} de ${total} documentos`
            : `${total} documentos`}
        </p>

        {/* Barra de salto a los ámbitos con resultados */}
        {filtrado.length > 0 && (
          <div className="flex flex-wrap gap-2" style={{ marginTop: '14px' }}>
            {filtrado.map((a) => (
              <a
                key={a.nombre}
                href={`#${slug(a.nombre)}`}
                className="font-lato uppercase text-primary transition-colors hover:bg-primary hover:text-white"
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '1px',
                  padding: '8px 14px',
                  border: '1px solid #B8C0B8',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                }}
              >
                {a.nombre}
                <span style={{ color: '#9AA1A6', marginLeft: '8px', fontWeight: 400 }}>{cuenta(a)}</span>
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Resultados */}
      {resultados === 0 ? (
        <div style={{ padding: '48px 0 64px' }}>
          <p className="font-lato text-primary" style={{ fontSize: '17px', marginBottom: '6px' }}>
            No se encontraron documentos para «{query}».
          </p>
          <p className="font-lato text-accent" style={{ fontSize: '14px' }}>
            Revisa la ortografía o busca con menos palabras.
          </p>
        </div>
      ) : (
        filtrado.map((a) => (
          <section key={a.nombre} id={slug(a.nombre)} style={{ marginBottom: '56px', scrollMarginTop: '108px' }}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1" style={{ borderBottom: '2px solid #1B1A19', paddingBottom: '12px', marginBottom: '30px' }}>
              <h2 className="font-monument text-primary" style={{ fontSize: 'clamp(1.4rem, 2.4vw, 1.9rem)', fontWeight: 400, letterSpacing: '0.5px', lineHeight: '1.15em' }}>
                {a.nombre}
              </h2>
              <span className="font-lato uppercase text-overlay" style={{ fontSize: '11px', letterSpacing: '1.5px' }}>
                {cuenta(a)} {cuenta(a) === 1 ? 'documento' : 'documentos'}
              </span>
            </div>

            {a.categorias.map((c) => (
              <div key={c.nombre} style={{ marginBottom: '36px' }}>
                <div className="flex items-baseline gap-3" style={{ marginBottom: '6px' }}>
                  <h3 className="font-lato text-primary uppercase" style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '1px' }}>
                    {c.nombre}
                  </h3>
                  <span className="font-lato text-overlay" style={{ fontSize: '11px', letterSpacing: '0.5px' }}>
                    ({c.documentos.length})
                  </span>
                </div>

                <ul>
                  {c.documentos.map((d, i) => (
                    <li
                      key={`${c.nombre}-${i}`}
                      className="flex flex-wrap items-center gap-x-4 gap-y-3"
                      style={{ borderBottom: '1px solid #E4E7E4', padding: '16px 0' }}
                    >
                      <span className="font-lato text-primary" style={{ fontSize: '15px', lineHeight: '1.5em', letterSpacing: '0.2px', flex: '1 1 300px' }}>
                        {d.titulo}
                      </span>
                      <a
                        href={urlDocumento(d)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-lato text-primary transition-colors hover:bg-primary hover:text-white"
                        style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.3px', padding: '9px 16px', border: '1px solid #1B1A19', textDecoration: 'none', whiteSpace: 'nowrap' }}
                      >
                        <IconoDescarga />
                        {c.etiquetaBoton}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        ))
      )}
    </div>
  )
}
