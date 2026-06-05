import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Centro de Convivencia Familiar (CECOFAM) — Órgano de Administración Judicial — PJDGO',
  description: 'El CECOFAM facilita la convivencia de niñas, niños y adolescentes con su padre o madre no custodio en los casos determinados por resolución judicial.',
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
              <Link href={href} className="font-lato text-overlay hover:text-primary transition-colors" style={{ fontSize: '12px', letterSpacing: '0.3px', textDecoration: 'none' }}>
                {label}
              </Link>
              <span className="text-overlay" style={{ fontSize: '12px' }}>›</span>
            </span>
          ))}
          <span className="font-lato text-primary" style={{ fontSize: '12px', letterSpacing: '0.3px' }}>CECOFAM</span>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '64px', paddingBottom: '48px', borderBottom: '1px solid #B8C0B8' }}>
        <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>
          Órgano de Administración Judicial
        </p>
        <h1 className="font-monument text-primary" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '400', letterSpacing: '0.5px', lineHeight: '1.1em', marginBottom: '20px' }}>
          Centro de Convivencia Familiar
        </h1>
        <p className="font-lato text-accent" style={{ fontSize: '16px', lineHeight: '1.7em', letterSpacing: '0.3px', maxWidth: '720px' }}>
          Órgano administrativo con autonomía técnica y operativa del Órgano de Administración Judicial del Poder Judicial del Estado de Durango, cuyo objeto es facilitar la convivencia de niñas, niños y adolescentes con su padre o madre no custodio o familia extensa.
        </p>
      </div>

      {/* Descripción */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '56px', paddingBottom: '56px', borderBottom: '1px solid #B8C0B8' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          <div>
            <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>Objeto</p>
            <h2 className="font-monument text-primary" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', fontWeight: '400', lineHeight: '1.2em', marginBottom: '20px' }}>
              ¿Qué es el CECOFAM?
            </h2>
            <p className="font-lato text-accent" style={{ fontSize: '15px', lineHeight: '1.8em', letterSpacing: '0.3px', marginBottom: '16px' }}>
              El CECOFAM es un lugar de encuentros filiales que facilita la convivencia de niñas, niños y adolescentes con su padre o madre no custodio o familia extensa, en aquellos casos en que, por resolución de la autoridad judicial, se determine que ésta no pueda realizarse de manera libre o se ponga en riesgo el interés superior de la infancia.
            </p>
            <p className="font-lato text-accent" style={{ fontSize: '15px', lineHeight: '1.8em', letterSpacing: '0.3px' }}>
              El CECOFAM funciona en los términos que establecen la Ley, la legislación sustantiva y procesal aplicable, los acuerdos generales vigentes que crean y reglamentan este Centro, la <strong className="text-primary">Ley General de los Derechos de las Niñas, Niños y Adolescentes</strong> y los tratados internacionales aplicables.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: '#B8C0B8', alignSelf: 'start' }}>
            {[
              { titulo: 'Tipo de órgano', valor: 'Administrativo con autonomía técnica y operativa' },
              { titulo: 'Adscripción', valor: 'Órgano de Administración Judicial del Poder Judicial del Estado de Durango' },
              { titulo: 'Población objetivo', valor: 'Niñas, niños y adolescentes y sus familias' },
              { titulo: 'Marco normativo', valor: 'Ley, Reglamento, acuerdos generales, Ley General de Derechos de NNA y tratados internacionales' },
            ].map(item => (
              <div key={item.titulo} className="bg-white" style={{ padding: '16px 20px' }}>
                <p className="font-lato text-overlay uppercase" style={{ fontSize: '10px', letterSpacing: '1px', marginBottom: '4px' }}>
                  {item.titulo}
                </p>
                <p className="font-lato text-primary" style={{ fontSize: '13px', lineHeight: '1.6em', fontWeight: '500' }}>
                  {item.valor}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Coordinadora y Contacto */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '56px', paddingBottom: '80px' }}>
        <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>Contacto</p>
        <h2 className="font-monument text-primary" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', fontWeight: '400', lineHeight: '1.2em', marginBottom: '28px' }}>
          Coordinación e información de contacto
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: '1px', background: '#B8C0B8' }}>

          {/* Coordinadora */}
          <div className="bg-white" style={{ padding: '32px 36px' }}>
            <p className="font-lato text-overlay uppercase mb-4" style={{ fontSize: '11px', letterSpacing: '2px' }}>Coordinadora</p>
            <div className="flex items-start gap-4">
              <div style={{ width: '64px', height: '64px', background: '#CACECF', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9AA1A6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div>
                <p className="font-monument text-primary" style={{ fontSize: '1.1rem', fontWeight: '400', lineHeight: '1.3em', marginBottom: '4px' }}>
                  [Nombre de la Coordinadora]
                </p>
                <p className="font-lato text-overlay" style={{ fontSize: '12px', letterSpacing: '0.5px', marginBottom: '4px' }}>
                  Coordinadora del CECOFAM
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
