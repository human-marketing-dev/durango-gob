import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Quejas y Denuncias — Tribunal de Disciplina Judicial — PJDGO',
  description:
    'Presenta quejas y denuncias ante el Tribunal de Disciplina Judicial del Poder Judicial del Estado de Durango a través de su sitio oficial.',
}

const SITIO_TDJ = 'https://www.tdjdgo.gob.mx'

export default function Page() {
  return (
    <div className="bg-white">

      {/* Breadcrumbs */}
      <div style={{ borderBottom: '1px solid #B8C0B8' }}>
        <div className="max-w-content mx-auto site-px py-3 flex items-center gap-2 flex-wrap">
          {[
            { label: 'Inicio', href: '/' },
            { label: 'PJDGO', href: '/pjdgo' },
            { label: 'Tribunal de Disciplina Judicial', href: '/pjdgo/tribunal-disciplina-judicial/pleno-y-comisiones' },
          ].map(({ label, href }) => (
            <span key={href} className="flex items-center gap-2">
              <Link href={href} className="font-lato text-overlay hover:text-primary transition-colors" style={{ fontSize: '12px', letterSpacing: '0.3px', textDecoration: 'none' }}>
                {label}
              </Link>
              <span className="text-overlay" style={{ fontSize: '12px' }}>›</span>
            </span>
          ))}
          <span className="font-lato text-primary" style={{ fontSize: '12px', letterSpacing: '0.3px' }}>Quejas y Denuncias</span>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '64px', paddingBottom: '48px', borderBottom: '1px solid #B8C0B8' }}>
        <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>
          Tribunal de Disciplina Judicial
        </p>
        <h1 className="font-monument text-primary" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '400', letterSpacing: '0.5px', lineHeight: '1.1em', marginBottom: '20px' }}>
          Quejas y Denuncias
        </h1>
        <p className="font-lato text-accent" style={{ fontSize: '16px', lineHeight: '1.7em', letterSpacing: '0.3px', maxWidth: '680px' }}>
          La recepción y el seguimiento de quejas y denuncias contra personas servidoras públicas del Poder Judicial se realizan a través del sitio oficial del Tribunal de Disciplina Judicial del Estado de Durango.
        </p>
      </div>

      {/* Enlace al sitio oficial */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '48px', paddingBottom: '80px' }}>
        <div style={{ border: '1px solid #B8C0B8', padding: '36px', maxWidth: '640px' }}>
          <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>
            Sitio oficial
          </p>
          <h2 className="font-monument text-primary" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', fontWeight: '400', lineHeight: '1.2em', marginBottom: '12px' }}>
            Tribunal de Disciplina Judicial
          </h2>
          <p className="font-lato text-accent" style={{ fontSize: '15px', lineHeight: '1.7em', letterSpacing: '0.3px', marginBottom: '24px' }}>
            Consulta la información y presenta tu queja o denuncia en el portal del Tribunal de Disciplina Judicial.
          </p>
          <a
            href={SITIO_TDJ}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-lato text-white transition-colors hover:opacity-90"
            style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.3px', padding: '12px 22px', background: '#1B1A19', textDecoration: 'none', whiteSpace: 'nowrap' }}
          >
            Ir a tdjdgo.gob.mx
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>

    </div>
  )
}
