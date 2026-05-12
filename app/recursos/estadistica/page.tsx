import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Estadística — Recursos — Poder Judicial del Estado de Durango',
  description: 'Informes y estadísticas del Poder Judicial del Estado de Durango, organizados por año y período.',
}

// ── Data ──────────────────────────────────────────────────────────────────────

interface Documento {
  nombre: string
  archivo: string
}

interface Anio {
  year: number
  documentos: Documento[]
}

const estadisticas: Anio[] = [
  {
    year: 2026,
    documentos: [
      { nombre: 'Estadística Enero-Marzo 2026',      archivo: '/estadistica-enero-marzo-2026.pdf' },
      { nombre: 'Informe Enero-Febrero 2026',         archivo: '/informe-enero-febrero-2026.pdf'  },
      { nombre: 'Informe Enero 2026',                 archivo: '/informe-enero-2026.pdf'          },
    ],
  },
  {
    year: 2025,
    documentos: [
      { nombre: 'Estadísticas ENE-DIC 2025',          archivo: '/estadisticas-ene-dic-2025.pdf'   },
    ],
  },
]

// ── Icons ─────────────────────────────────────────────────────────────────────

function IconDoc() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  )
}

function IconExternalLink() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function IconDownload() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Page() {
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
          <span className="font-lato text-primary" style={{ fontSize: '12px', letterSpacing: '0.3px' }}>Estadística</span>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '64px', paddingBottom: '48px', borderBottom: '1px solid #B8C0B8' }}>
        <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>Recursos</p>
        <h1 className="font-monument text-primary" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '400', letterSpacing: '0.5px', lineHeight: '1.1em', marginBottom: '16px' }}>
          Estadistica
        </h1>
        <p className="font-lato text-accent" style={{ fontSize: '16px', lineHeight: '1.7em', letterSpacing: '0.3px', maxWidth: '640px' }}>
          Informes estadísticos del Poder Judicial del Estado de Durango. Los documentos se publican de forma periódica y están disponibles para consulta y descarga.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '48px', paddingBottom: '80px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '56px' }}>
          {estadisticas.map(anio => (
            <div key={anio.year}>

              {/* Year header */}
              <div style={{ borderBottom: '2px solid #1B1A19', paddingBottom: '10px', marginBottom: '4px' }}>
                <h2 className="font-sans text-primary" style={{ fontSize: '14px', fontWeight: '600', letterSpacing: '1.2px', textTransform: 'uppercase' }}>
                  {anio.year}
                </h2>
              </div>

              {/* Documents */}
              <div style={{ display: 'grid', gap: '1px', background: '#B8C0B8' }}>
                {anio.documentos.map(doc => (
                  <div
                    key={doc.archivo}
                    className="bg-white flex items-center justify-between flex-wrap gap-4"
                    style={{ padding: '18px 24px' }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-overlay">
                        <IconDoc />
                      </span>
                      <span className="font-lato text-primary" style={{ fontSize: '14px', letterSpacing: '0.3px' }}>
                        {doc.nombre}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={doc.archivo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 font-lato text-primary uppercase hover:opacity-70 transition-opacity"
                        style={{ fontSize: '11px', fontWeight: '500', letterSpacing: '1px', textDecoration: 'none', padding: '7px 14px', border: '1px solid #1B1A19' }}
                      >
                        <IconExternalLink />
                        Ver
                      </a>
                      <a
                        href={doc.archivo}
                        download
                        className="flex items-center gap-1.5 font-lato text-white bg-primary uppercase hover:bg-black transition-colors"
                        style={{ fontSize: '11px', fontWeight: '500', letterSpacing: '1px', textDecoration: 'none', padding: '7px 14px', border: '1px solid #1B1A19' }}
                      >
                        <IconDownload />
                        Descargar
                      </a>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
