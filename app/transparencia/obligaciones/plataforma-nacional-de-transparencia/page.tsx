import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Plataforma Nacional de Transparencia — Poder Judicial del Estado de Durango',
  description: 'Accede a la Plataforma Nacional de Transparencia para consultar las obligaciones de transparencia del Poder Judicial del Estado de Durango.',
}

function IconExternalLink() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

export default function Page() {
  return (
    <div className="bg-white">

      {/* Breadcrumbs */}
      <div style={{ borderBottom: '1px solid #B8C0B8' }}>
        <div className="max-w-content mx-auto site-px py-3 flex items-center gap-2 flex-wrap">
          {[
            { label: 'Inicio',        href: '/' },
            { label: 'Transparencia', href: '/transparencia' },
            { label: 'Obligaciones',  href: '/transparencia/obligaciones' },
          ].map(({ label, href }) => (
            <span key={href} className="flex items-center gap-2">
              <Link href={href} className="font-lato text-overlay hover:text-primary transition-colors" style={{ fontSize: '12px', letterSpacing: '0.3px', textDecoration: 'none' }}>
                {label}
              </Link>
              <span className="text-overlay" style={{ fontSize: '12px' }}>›</span>
            </span>
          ))}
          <span className="font-lato text-primary" style={{ fontSize: '12px', letterSpacing: '0.3px' }}>
            Plataforma Nacional de Transparencia
          </span>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '64px', paddingBottom: '48px', borderBottom: '1px solid #B8C0B8' }}>
        <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>
          Transparencia — Obligaciones
        </p>
        <h1
          className="font-monument text-primary"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '400', letterSpacing: '0.5px', lineHeight: '1.1em', marginBottom: '20px' }}
        >
          Plataforma Nacional de Transparencia
        </h1>
        <p className="font-lato text-accent" style={{ fontSize: '16px', lineHeight: '1.7em', letterSpacing: '0.3px', maxWidth: '680px' }}>
          La Plataforma Nacional de Transparencia es el sistema a través del cual los sujetos obligados publican y actualizan su información de transparencia, y los ciudadanos pueden ejercer su derecho de acceso a la información pública.
        </p>
      </div>

      {/* Link section */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '56px', paddingBottom: '80px' }}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6" style={{ padding: '36px 40px', border: '1px solid #B8C0B8' }}>
          <div>
            <p className="font-lato text-overlay uppercase mb-2" style={{ fontSize: '10px', letterSpacing: '1.5px', fontWeight: '600' }}>
              Sitio externo
            </p>
            <p className="font-sans text-primary" style={{ fontSize: '16px', fontWeight: '500', lineHeight: '1.3em', marginBottom: '4px' }}>
              Plataforma Nacional de Transparencia
            </p>
            <p className="font-lato text-overlay" style={{ fontSize: '12px', letterSpacing: '0.3px' }}>
              plataformadetransparencia.org.mx
            </p>
          </div>
          <a
            href="https://www.plataformadetransparencia.org.mx/Inicio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-lato text-white bg-primary uppercase hover:bg-black transition-colors"
            style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '1.5px', padding: '12px 24px', textDecoration: 'none', whiteSpace: 'nowrap' }}
          >
            <IconExternalLink />
            Ir a la plataforma
          </a>
        </div>
      </div>

    </div>
  )
}
