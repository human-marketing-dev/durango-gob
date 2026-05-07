import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Organigrama Institucional — Poder Judicial del Estado de Durango',
  description: 'Consulta la estructura orgánica del Poder Judicial del Estado de Durango para el ejercicio 2026.',
}

export default function Page() {
  return (
    <div className="bg-white">

      {/* Breadcrumbs */}
      <div style={{ borderBottom: '1px solid #B8C0B8' }}>
        <div className="max-w-content mx-auto site-px py-3 flex items-center gap-2 flex-wrap">
          <Link
            href="/"
            className="font-lato text-overlay hover:text-primary transition-colors"
            style={{ fontSize: '12px', letterSpacing: '0.3px', textDecoration: 'none' }}
          >
            Inicio
          </Link>
          <span className="text-overlay" style={{ fontSize: '12px' }}>›</span>
          <Link
            href="/recursos"
            className="font-lato text-overlay hover:text-primary transition-colors"
            style={{ fontSize: '12px', letterSpacing: '0.3px', textDecoration: 'none' }}
          >
            Recursos
          </Link>
          <span className="text-overlay" style={{ fontSize: '12px' }}>›</span>
          <span className="font-lato text-primary" style={{ fontSize: '12px', letterSpacing: '0.3px' }}>
            Organigrama Institucional
          </span>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '64px', paddingBottom: '48px', borderBottom: '1px solid #B8C0B8' }}>
        <p
          className="font-lato text-overlay uppercase mb-3"
          style={{ fontSize: '11px', letterSpacing: '2px' }}
        >
          Recursos
        </p>
        <h1
          className="font-monument text-primary"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '400', letterSpacing: '0.5px', lineHeight: '1.1em', marginBottom: '20px' }}
        >
          Organigrama Institucional
        </h1>
        <p
          className="font-lato text-accent"
          style={{ fontSize: '16px', lineHeight: '1.7em', letterSpacing: '0.3px', maxWidth: '640px' }}
        >
          Consulta la estructura orgánica del Poder Judicial del Estado de Durango correspondiente al ejercicio 2026. El organigrama refleja la distribución de los órganos jurisdiccionales y administrativos que integran la institución.
        </p>
      </div>

      {/* PDF viewer + download */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '48px', paddingBottom: '80px' }}>

        {/* Download button */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
          <p
            className="font-lato text-overlay"
            style={{ fontSize: '13px', letterSpacing: '0.3px' }}
          >
            Organigrama-Institucional-2026.pdf
          </p>
          <a
            href="/Organigrama-Institucional-2026.pdf"
            download
            className="font-lato text-white bg-primary uppercase hover:bg-black transition-colors"
            style={{
              fontSize: '12px',
              fontWeight: '500',
              letterSpacing: '1.5px',
              padding: '12px 28px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Descargar PDF
          </a>
        </div>

        {/* Embedded PDF */}
        <div style={{ border: '1px solid #B8C0B8', background: '#CACECF' }}>
          <iframe
            src="/Organigrama-Institucional-2026.pdf"
            title="Organigrama Institucional 2026"
            width="100%"
            style={{ height: '80vh', minHeight: '600px', display: 'block', border: 'none' }}
          />
        </div>

        <p
          className="font-lato text-overlay mt-4"
          style={{ fontSize: '11px', letterSpacing: '0.3px' }}
        >
          Si el documento no se muestra correctamente,{' '}
          <a
            href="/Organigrama-Institucional-2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:opacity-70 transition-opacity"
            style={{ textDecoration: 'underline' }}
          >
            ábrelo en una nueva pestaña
          </a>
          .
        </p>
      </div>
    </div>
  )
}
