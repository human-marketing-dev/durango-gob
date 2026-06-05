import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cartas de Antecedentes Penales — Trámites y Servicios — PJDGO',
  description: 'Información sobre cómo solicitar la carta de antecedentes penales en el Poder Judicial del Estado de Durango: requisitos, horarios, sedes y costos.',
}

// ── Icons ──────────────────────────────────────────────────────────────────────

function IconClock() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function IconLocation() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
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

function IconInfo() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
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
            { label: 'Inicio',              href: '/' },
            { label: 'Trámites y Servicios', href: '/tramites-y-servicios' },
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
            Cartas de Antecedentes Penales
          </span>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '64px', paddingBottom: '48px', borderBottom: '1px solid #B8C0B8' }}>
        <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>
          Trámites y Servicios
        </p>
        <h1
          className="font-monument text-primary"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '400', letterSpacing: '0.5px', lineHeight: '1.1em', marginBottom: '20px' }}
        >
          Cartas de Antecedentes Penales
        </h1>
        <p className="font-lato text-accent" style={{ fontSize: '16px', lineHeight: '1.7em', letterSpacing: '0.3px', maxWidth: '680px' }}>
          Las cartas de antecedentes penales se solicitan de manera presencial en la Dirección de Archivo del Órgano de Administración Judicial del Poder Judicial del Estado de Durango, de lunes a viernes, en un horario de las 9:00 a las 15:00 horas.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '56px', paddingBottom: '80px', display: 'flex', flexDirection: 'column', gap: '56px' }}>

        {/* Requisitos */}
        <section>
          <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>Trámite</p>
          <h2 className="font-monument text-primary" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', fontWeight: '400', lineHeight: '1.2em', marginBottom: '24px' }}>
            Requisitos
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '560px' }}>
            {[
              'Copia de la credencial para votar con fotografía y/o del acta de nacimiento.',
              'Pago en efectivo de $50 pesos.',
            ].map((req, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-primary" style={{ marginTop: '2px', flexShrink: 0 }}><IconCheck /></span>
                <p className="font-lato text-accent" style={{ fontSize: '15px', lineHeight: '1.7em', letterSpacing: '0.3px' }}>
                  {req}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Sedes */}
        <section>
          <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>Sedes</p>
          <h2 className="font-monument text-primary" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', fontWeight: '400', lineHeight: '1.2em', marginBottom: '28px' }}>
            Dónde realizar el trámite
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: '1px', background: '#B8C0B8' }}>

            {/* Primer Distrito */}
            <div className="bg-white" style={{ padding: '28px' }}>
              <span
                className="font-lato text-primary uppercase inline-block"
                style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '1.5px', padding: '3px 10px', border: '1px solid #B8C0B8', marginBottom: '16px' }}
              >
                Primer Distrito Judicial
              </span>
              <h3 className="font-monument text-primary" style={{ fontSize: '1.1rem', fontWeight: '400', lineHeight: '1.3em', marginBottom: '16px' }}>
                Victoria de Durango
              </h3>
              <div className="flex items-start gap-2 text-overlay" style={{ marginBottom: '20px' }}>
                <span style={{ marginTop: '2px', flexShrink: 0 }}><IconLocation /></span>
                <p className="font-lato" style={{ fontSize: '13px', lineHeight: '1.65em', letterSpacing: '0.3px' }}>
                  Calle Zaragoza #408 sur, Zona Centro,<br />Victoria de Durango, Dgo.
                </p>
              </div>
              <div style={{ borderTop: '1px solid #EEF0EE', paddingTop: '16px' }}>
                <div className="flex items-start gap-2 text-overlay" style={{ marginBottom: '8px' }}>
                  <span style={{ marginTop: '1px', flexShrink: 0 }}><IconClock /></span>
                  <p className="font-lato" style={{ fontSize: '13px', lineHeight: '1.65em' }}>
                    Solicitud <strong className="text-primary">9:00–10:00 h</strong> → Entrega <strong className="text-primary">12:30 h</strong>
                  </p>
                </div>
                <div className="flex items-start gap-2 text-overlay" style={{ marginBottom: '8px' }}>
                  <span style={{ marginTop: '1px', flexShrink: 0 }}><IconClock /></span>
                  <p className="font-lato" style={{ fontSize: '13px', lineHeight: '1.65em' }}>
                    Solicitud <strong className="text-primary">10:00–12:00 h</strong> → Entrega <strong className="text-primary">14:00 h</strong>
                  </p>
                </div>
                <div className="flex items-start gap-2 text-overlay">
                  <span style={{ marginTop: '1px', flexShrink: 0 }}><IconClock /></span>
                  <p className="font-lato" style={{ fontSize: '13px', lineHeight: '1.65em' }}>
                    Solicitud <strong className="text-primary">12:00 h en adelante</strong> → Entrega <strong className="text-primary">12:30 h del siguiente día hábil</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Segundo Distrito */}
            <div className="bg-white" style={{ padding: '28px' }}>
              <span
                className="font-lato text-primary uppercase inline-block"
                style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '1.5px', padding: '3px 10px', border: '1px solid #B8C0B8', marginBottom: '16px' }}
              >
                Segundo Distrito Judicial
              </span>
              <h3 className="font-monument text-primary" style={{ fontSize: '1.1rem', fontWeight: '400', lineHeight: '1.3em', marginBottom: '16px' }}>
                Ciudad Lerdo
              </h3>
              <div className="flex items-start gap-2 text-overlay" style={{ marginBottom: '20px' }}>
                <span style={{ marginTop: '2px', flexShrink: 0 }}><IconLocation /></span>
                <p className="font-lato" style={{ fontSize: '13px', lineHeight: '1.65em', letterSpacing: '0.3px' }}>
                  Calle Azucenas esq. con Azaleas,<br />Fracc. Villa de las Flores,<br />Ciudad Lerdo, Dgo.
                </p>
              </div>
              <div style={{ borderTop: '1px solid #EEF0EE', paddingTop: '16px' }}>
                <div className="flex items-start gap-2 text-overlay">
                  <span style={{ marginTop: '1px', flexShrink: 0 }}><IconClock /></span>
                  <p className="font-lato" style={{ fontSize: '13px', lineHeight: '1.65em' }}>
                    Entrega <strong className="text-primary">al siguiente día hábil</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Tercer Distrito */}
            <div className="bg-white" style={{ padding: '28px' }}>
              <span
                className="font-lato text-primary uppercase inline-block"
                style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '1.5px', padding: '3px 10px', border: '1px solid #B8C0B8', marginBottom: '16px' }}
              >
                Tercer Distrito Judicial
              </span>
              <h3 className="font-monument text-primary" style={{ fontSize: '1.1rem', fontWeight: '400', lineHeight: '1.3em', marginBottom: '16px' }}>
                Gómez Palacio
              </h3>
              <div className="flex items-start gap-2 text-overlay" style={{ marginBottom: '20px' }}>
                <span style={{ marginTop: '2px', flexShrink: 0 }}><IconLocation /></span>
                <p className="font-lato" style={{ fontSize: '13px', lineHeight: '1.65em', letterSpacing: '0.3px' }}>
                  Calle Morelos #326 norte, Centro,<br />Gómez Palacio, Dgo.
                </p>
              </div>
              <div style={{ borderTop: '1px solid #EEF0EE', paddingTop: '16px' }}>
                <div className="flex items-start gap-2 text-overlay">
                  <span style={{ marginTop: '1px', flexShrink: 0 }}><IconClock /></span>
                  <p className="font-lato" style={{ fontSize: '13px', lineHeight: '1.65em' }}>
                    Entrega <strong className="text-primary">al siguiente día hábil</strong>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Certificación */}
        <section>
          <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>Servicio adicional</p>
          <h2 className="font-monument text-primary" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', fontWeight: '400', lineHeight: '1.2em', marginBottom: '20px' }}>
            Certificación
          </h2>
          <div style={{ border: '1px solid #B8C0B8', padding: '28px 32px', maxWidth: '720px' }}>
            <p className="font-lato text-accent" style={{ fontSize: '15px', lineHeight: '1.8em', letterSpacing: '0.3px', marginBottom: '16px' }}>
              El Poder Judicial también ofrece el servicio de cartas de antecedentes <strong className="text-primary">certificadas</strong>. Al momento de solicitar la carta, se debe indicar que se requiere certificada.
            </p>
            <p className="font-lato text-accent" style={{ fontSize: '15px', lineHeight: '1.8em', letterSpacing: '0.3px', marginBottom: '20px' }}>
              Además de los requisitos anteriores, se deberá presentar una <strong className="text-primary">fotografía reciente legible tamaño credencial</strong>, a color o blanco y negro.
            </p>
            <div style={{ background: '#F4F6F4', padding: '12px 16px', borderLeft: '3px solid #1B1A19', display: 'inline-block' }}>
              <p className="font-lato text-primary" style={{ fontSize: '14px', fontWeight: '600', letterSpacing: '0.3px' }}>
                Costo adicional: $25 pesos
              </p>
            </div>
          </div>
        </section>

        {/* Nota */}
        <section>
          <div className="flex items-start gap-3" style={{ background: '#F4F6F4', padding: '20px 24px', border: '1px solid #B8C0B8', maxWidth: '720px' }}>
            <span className="text-overlay" style={{ flexShrink: 0, marginTop: '1px' }}><IconInfo /></span>
            <p className="font-lato text-accent" style={{ fontSize: '13px', lineHeight: '1.75em', letterSpacing: '0.3px' }}>
              <strong className="text-primary">Nota:</strong> Las copias de expedientes, simples o certificadas, se solicitan en el órgano jurisdiccional de primera o segunda instancia donde se encuentre radicado el expediente. El cobro de la copia es de <strong className="text-primary">$1 peso por foja</strong>.
            </p>
          </div>
        </section>

      </div>
    </div>
  )
}
