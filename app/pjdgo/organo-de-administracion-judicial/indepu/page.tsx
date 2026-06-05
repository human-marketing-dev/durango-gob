import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Instituto de Defensoría Pública (INDEPU) — Órgano de Administración Judicial — PJDGO',
  description: 'El INDEPU presta asesoría, defensa y representación legal gratuita a gobernados que no cuentan con capacidad económica para cubrir los honorarios de un defensor particular.',
}

// ── Icons ──────────────────────────────────────────────────────────────────────

function IconMail() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

function IconPhone() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.5 16z" />
    </svg>
  )
}

function IconLocation() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function IconClock() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function IconCheck() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <div className="bg-white">

      {/* Breadcrumbs */}
      <div style={{ borderBottom: '1px solid #B8C0B8' }}>
        <div className="max-w-content mx-auto site-px py-3 flex items-center gap-2 flex-wrap">
          {[
            { label: 'Inicio',                            href: '/' },
            { label: 'PJDGO',                             href: '/pjdgo' },
            { label: 'Órgano de Administración Judicial',  href: '/pjdgo/organo-de-administracion-judicial/pleno-y-comisiones' },
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
            INDEPU
          </span>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '64px', paddingBottom: '48px', borderBottom: '1px solid #B8C0B8' }}>
        <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>
          Órgano de Administración Judicial
        </p>
        <h1
          className="font-monument text-primary"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '400', letterSpacing: '0.5px', lineHeight: '1.1em', marginBottom: '20px' }}
        >
          Instituto de Defensoría Pública
        </h1>
        <p className="font-lato text-accent" style={{ fontSize: '16px', lineHeight: '1.7em', letterSpacing: '0.3px', maxWidth: '720px' }}>
          Órgano auxiliar del Órgano de Administración Judicial del Poder Judicial del Estado de Durango que presta el servicio de asesoría, defensa y representación legal gratuita a los gobernados que no cuentan con la capacidad económica para cubrir los honorarios de un defensor particular.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '56px', paddingBottom: '56px', borderBottom: '1px solid #B8C0B8' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Servicios */}
          <div>
            <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>Servicios</p>
            <h2 className="font-monument text-primary" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', fontWeight: '400', lineHeight: '1.2em', marginBottom: '20px' }}>
              ¿Qué hacemos?
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                'Asesoría, defensa y representación legal para personas sin capacidad económica para contratar un defensor particular.',
                'Trámites legales ante los juzgados en materias penal, familiar, civil, mercantil, laboral y administrativa.',
                'Representación en todos los distritos judiciales del Estado de Durango.',
                'En Gómez Palacio y Lerdo, se cuenta con asesores y defensores en materia penal, civil, familiar, mercantil y laboral.',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-primary" style={{ marginTop: '2px', flexShrink: 0 }}><IconCheck /></span>
                  <p className="font-lato text-accent" style={{ fontSize: '14px', lineHeight: '1.75em', letterSpacing: '0.3px' }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Requisitos + Horarios */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

            {/* Requisitos */}
            <div>
              <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>Acceso al servicio</p>
              <h2 className="font-monument text-primary" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', fontWeight: '400', lineHeight: '1.2em', marginBottom: '16px' }}>
                Requisitos
              </h2>
              <div style={{ border: '1px solid #B8C0B8', padding: '20px 24px' }}>
                <p className="font-lato text-accent" style={{ fontSize: '14px', lineHeight: '1.8em', letterSpacing: '0.3px' }}>
                  Para recibir el servicio es necesario pasar por el <strong className="text-primary">área de Trabajo Social</strong> del Instituto, donde se evaluará la necesidad y capacidad económica del usuario para determinar si se ajusta al reglamento del Instituto.
                </p>
              </div>
            </div>

            {/* Horarios */}
            <div>
              <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>Horarios</p>
              <h2 className="font-monument text-primary" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', fontWeight: '400', lineHeight: '1.2em', marginBottom: '16px' }}>
                Atención
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: '#B8C0B8' }}>
                <div className="bg-white flex items-start gap-3" style={{ padding: '16px 20px' }}>
                  <span className="text-overlay" style={{ marginTop: '2px', flexShrink: 0 }}><IconClock /></span>
                  <div>
                    <p className="font-lato text-primary" style={{ fontSize: '13px', fontWeight: '600', marginBottom: '2px' }}>
                      Atención general
                    </p>
                    <p className="font-lato text-accent" style={{ fontSize: '13px', lineHeight: '1.6em' }}>
                      Lunes a viernes · 9:00 a 15:00 horas
                    </p>
                  </div>
                </div>
                <div className="bg-white flex items-start gap-3" style={{ padding: '16px 20px' }}>
                  <span className="text-overlay" style={{ marginTop: '2px', flexShrink: 0 }}><IconClock /></span>
                  <div>
                    <p className="font-lato text-primary" style={{ fontSize: '13px', fontWeight: '600', marginBottom: '2px' }}>
                      Guardia para asuntos urgentes
                    </p>
                    <p className="font-lato text-accent" style={{ fontSize: '13px', lineHeight: '1.6em' }}>
                      Lunes a viernes · 15:00 a 18:00 horas
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Director y Contacto */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '56px', paddingBottom: '80px' }}>
        <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>Contacto</p>
        <h2 className="font-monument text-primary" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', fontWeight: '400', lineHeight: '1.2em', marginBottom: '28px' }}>
          Dirección e información de contacto
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: '1px', background: '#B8C0B8' }}>

          {/* Director */}
          <div className="bg-white" style={{ padding: '32px 36px' }}>
            <p className="font-lato text-overlay uppercase mb-4" style={{ fontSize: '11px', letterSpacing: '2px' }}>Director</p>
            <div className="flex items-start gap-4">
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  background: '#CACECF',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9AA1A6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div>
                <p className="font-monument text-primary" style={{ fontSize: '1.1rem', fontWeight: '400', lineHeight: '1.3em', marginBottom: '4px' }}>
                  [Nombre del Director]
                </p>
                <p className="font-lato text-overlay" style={{ fontSize: '12px', letterSpacing: '0.5px', marginBottom: '4px' }}>
                  Director del Instituto de Defensoría Pública
                </p>
                <p className="font-lato text-accent" style={{ fontSize: '13px', lineHeight: '1.6em' }}>
                  [Grado académico]
                </p>
              </div>
            </div>
          </div>

          {/* Contacto */}
          <div className="bg-white" style={{ padding: '32px 36px' }}>
            <p className="font-lato text-overlay uppercase mb-4" style={{ fontSize: '11px', letterSpacing: '2px' }}>Información de contacto</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div className="flex items-start gap-2 text-overlay">
                <span style={{ marginTop: '2px', flexShrink: 0 }}><IconLocation /></span>
                <span className="font-lato" style={{ fontSize: '13px', lineHeight: '1.65em', letterSpacing: '0.3px' }}>
                  [Dirección]
                </span>
              </div>
              <div className="flex items-center gap-2 text-overlay">
                <IconPhone />
                <span className="font-lato" style={{ fontSize: '13px', letterSpacing: '0.3px' }}>
                  [Teléfono]
                </span>
              </div>
              <div className="flex items-center gap-2 text-overlay">
                <IconMail />
                <span className="font-lato" style={{ fontSize: '13px', letterSpacing: '0.3px' }}>
                  [Correo electrónico]
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}
