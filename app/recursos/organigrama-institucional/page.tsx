import type { Metadata } from 'next'
import Link from 'next/link'
import OrganigramasTabs from '@/components/organigramas-tabs'
import { organigramas } from '@/lib/organigrama'

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

      {/* Organigramas (por organismo) */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '48px', paddingBottom: '80px' }}>

        {/* Descargar PDF */}
        <div className="flex justify-end mb-8">
          <a
            href="/Organigrama-Institucional-2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-lato transition-colors hover:bg-primary hover:text-white"
            style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.3px', padding: '10px 18px', border: '1px solid #1B1A19', color: '#1B1A19', textDecoration: 'none', whiteSpace: 'nowrap' }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Descargar organigrama (PDF)
          </a>
        </div>

        <OrganigramasTabs organigramas={organigramas} />
      </div>
    </div>
  )
}
