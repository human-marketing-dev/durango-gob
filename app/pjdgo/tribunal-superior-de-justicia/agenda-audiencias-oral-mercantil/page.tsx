import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Agenda de Audiencias Oral Mercantil — Tribunal Superior de Justicia — PJDGO',
  description: 'Consulta la agenda de audiencias del sistema oral mercantil del Tribunal Superior de Justicia del Poder Judicial del Estado de Durango.',
}

export default function Page() {
  return (
    <div className="bg-white">

      {/* Breadcrumbs */}
      <div style={{ borderBottom: '1px solid #B8C0B8' }}>
        <div className="max-w-content mx-auto site-px py-3 flex items-center gap-2 flex-wrap">
          {[
            { label: 'Inicio',                        href: '/' },
            { label: 'PJDGO',                         href: '/pjdgo' },
            { label: 'Tribunal Superior de Justicia', href: '/pjdgo/tribunal-superior-de-justicia/pleno' },
          ].map(({ label, href }) => (
            <span key={href} className="flex items-center gap-2">
              <Link
                href={href}
                className="font-lato text-overlay hover:text-primary transition-colors"
                style={{ fontSize: '12px', letterSpacing: '0.3px', textDecoration: 'none' }}
              >
                {label}
              </Link>
              <span className="text-overlay" style={{ fontSize: '12px' }}>›</span>
            </span>
          ))}
          <span className="font-lato text-primary" style={{ fontSize: '12px', letterSpacing: '0.3px' }}>
            Agenda de Audiencias Oral Mercantil
          </span>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '64px', paddingBottom: '48px', borderBottom: '1px solid #B8C0B8' }}>
        <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>
          Tribunal Superior de Justicia
        </p>
        <h1
          className="font-monument text-primary"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '400', letterSpacing: '0.5px', lineHeight: '1.1em', marginBottom: '20px' }}
        >
          Agenda de Audiencias<br />Oral Mercantil
        </h1>
        <p className="font-lato text-accent" style={{ fontSize: '16px', lineHeight: '1.7em', letterSpacing: '0.3px', maxWidth: '680px' }}>
          Consulta el calendario de audiencias programadas en el sistema de justicia oral mercantil del Tribunal Superior de Justicia del Estado de Durango.
        </p>
      </div>

      {/* Calendar */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '48px', paddingBottom: '80px' }}>
        <div style={{ width: '100%', overflow: 'hidden', border: '1px solid #B8C0B8' }}>
          <iframe
            src="https://calendar.google.com/calendar/embed?src=audienciaspjdgo%40gmail.com&ctz=America%2FMexico_City"
            style={{ border: 0, display: 'block', width: '100%', minHeight: '600px' }}
            width="100%"
            height="600"
            frameBorder={0}
            scrolling="no"
            title="Agenda de Audiencias Oral Mercantil"
          />
        </div>
      </div>

    </div>
  )
}
