import type { Metadata } from 'next'
import Link from 'next/link'
import { acuerdosPorAnio } from '@/lib/acuerdos'

export const metadata: Metadata = {
  title: 'Acuerdos del Consejo de la Judicatura',
  description:
    'Consulta y descarga los acuerdos emitidos por el Consejo de la Judicatura del Poder Judicial del Estado de Durango, agrupados por año.',
}

function IconDownload() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}

export default function Page() {
  const anios = [...acuerdosPorAnio].sort((a, b) => b.anio - a.anio)

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div style={{ borderBottom: '1px solid #B8C0B8' }}>
        <div className="max-w-content mx-auto site-px py-3 flex items-center gap-2 flex-wrap">
          {[
            { label: 'Inicio', href: '/' },
            { label: 'Recursos', href: '/recursos' },
          ].map(({ label, href }) => (
            <span key={href} className="flex items-center gap-2">
              <Link
                href={href}
                className="font-lato text-overlay hover:text-primary transition-colors"
                style={{ fontSize: '12px', letterSpacing: '0.3px', textDecoration: 'none' }}
              >
                {label}
              </Link>
              <span className="text-overlay" style={{ fontSize: '12px' }}>
                ›
              </span>
            </span>
          ))}
          <span className="font-lato text-primary" style={{ fontSize: '12px', letterSpacing: '0.3px' }}>
            Listas de Acuerdos
          </span>
        </div>
      </div>

      {/* Header */}
      <div
        className="max-w-content mx-auto site-px"
        style={{ paddingTop: '64px', paddingBottom: '40px', borderBottom: '1px solid #B8C0B8' }}
      >
        <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>
          Poder Judicial del Estado de Durango
        </p>
        <h1
          className="font-monument text-primary"
          style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 400,
            letterSpacing: '0.5px',
            lineHeight: '1.1em',
            marginBottom: '20px',
          }}
        >
          Acuerdos del Consejo de la Judicatura
        </h1>
        <p
          className="font-lato text-accent"
          style={{ fontSize: '16px', lineHeight: '1.7em', letterSpacing: '0.3px', maxWidth: '680px' }}
        >
          Consulta y descarga los acuerdos emitidos por el Consejo de la Judicatura del Poder Judicial del Estado de
          Durango.
        </p>
      </div>

      {/* Acuerdos por año */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '48px', paddingBottom: '80px' }}>
        {anios.map(({ anio, acuerdos }) => (
          <section key={anio} style={{ marginBottom: '56px' }}>
            <h2
              className="font-monument text-primary"
              style={{
                fontSize: '28px',
                fontWeight: 400,
                letterSpacing: '0.5px',
                paddingBottom: '12px',
                marginBottom: '4px',
                borderBottom: '2px solid #1B1A19',
              }}
            >
              {anio}
            </h2>

            <ul>
              {acuerdos.map((acuerdo, i) => (
                <li
                  key={i}
                  className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6"
                  style={{ borderBottom: '1px solid #E4E7E4', padding: '20px 0' }}
                >
                  <p
                    className="font-lato text-primary"
                    style={{ fontSize: '15px', lineHeight: '1.6em', letterSpacing: '0.2px', flex: 1 }}
                  >
                    {acuerdo.titulo}
                  </p>
                  <div className="shrink-0">
                    {acuerdo.archivo ? (
                      <a
                        href={`/acuerdos/${anio}/${acuerdo.archivo}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-lato transition-colors hover:bg-primary hover:text-white"
                        style={{
                          fontSize: '13px',
                          fontWeight: 500,
                          letterSpacing: '0.3px',
                          padding: '10px 18px',
                          border: '1px solid #1B1A19',
                          color: '#1B1A19',
                          textDecoration: 'none',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <IconDownload />
                        Descargar Acuerdo
                      </a>
                    ) : (
                      <span
                        className="inline-flex items-center font-lato text-overlay"
                        style={{
                          fontSize: '13px',
                          letterSpacing: '0.3px',
                          padding: '10px 18px',
                          border: '1px solid #B8C0B8',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        Documento no disponible
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  )
}
