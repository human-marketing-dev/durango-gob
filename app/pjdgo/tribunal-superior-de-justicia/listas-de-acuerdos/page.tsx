import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Listas de Acuerdos de Primera y Segunda Instancia — Tribunal Superior de Justicia — PJDGO',
  description: 'Consulta las listas de acuerdos de primera y segunda instancia del Tribunal Superior de Justicia del Poder Judicial del Estado de Durango.',
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
            Listas de Acuerdos
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
          Listas de Acuerdos de Primera<br />y Segunda Instancia
        </h1>
        <p className="font-lato text-accent" style={{ fontSize: '16px', lineHeight: '1.7em', letterSpacing: '0.3px', maxWidth: '680px' }}>
          Consulta las listas de acuerdos emitidos por los órganos jurisdiccionales de primera y segunda instancia del Tribunal Superior de Justicia del Estado de Durango.
        </p>
      </div>

      {/* Sections */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '56px', paddingBottom: '80px', display: 'flex', flexDirection: 'column', gap: '56px' }}>

        {/* Primera Instancia */}
        <section>
          <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>
            Primera Instancia
          </p>
          <h2
            className="font-monument text-primary"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: '400', lineHeight: '1.2em', marginBottom: '16px' }}
          >
            Listas de Acuerdos — Primera Instancia
          </h2>
          <p className="font-lato text-accent" style={{ fontSize: '15px', lineHeight: '1.7em', letterSpacing: '0.3px', maxWidth: '640px' }}>
            Acuerdos dictados por los juzgados de primera instancia en los diferentes distritos judiciales del Estado de Durango.
          </p>
          <div style={{ marginTop: '32px', padding: '40px', border: '1px solid #B8C0B8', background: '#FAFAFA', textAlign: 'center' }}>
            <p className="font-lato text-overlay" style={{ fontSize: '13px', letterSpacing: '0.3px' }}>
              Contenido en actualización.
            </p>
          </div>
        </section>

        {/* Segunda Instancia */}
        <section>
          <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>
            Segunda Instancia
          </p>
          <h2
            className="font-monument text-primary"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: '400', lineHeight: '1.2em', marginBottom: '16px' }}
          >
            Listas de Acuerdos — Segunda Instancia
          </h2>
          <p className="font-lato text-accent" style={{ fontSize: '15px', lineHeight: '1.7em', letterSpacing: '0.3px', maxWidth: '640px' }}>
            Acuerdos dictados por las salas del Tribunal Superior de Justicia en segunda instancia.
          </p>
          <div style={{ marginTop: '32px', padding: '40px', border: '1px solid #B8C0B8', background: '#FAFAFA', textAlign: 'center' }}>
            <p className="font-lato text-overlay" style={{ fontSize: '13px', letterSpacing: '0.3px' }}>
              Contenido en actualización.
            </p>
          </div>
        </section>

      </div>
    </div>
  )
}
