import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pleno y Comisiones — Órgano de Administración Judicial — Poder Judicial del Estado de Durango',
  description: 'Comisionados del Pleno del Órgano de Administración Judicial del Estado de Durango.',
}

const comisionados = [
  {
    nombre:     'C. P. Tania Julieta Hernández Maldonado',
    cargo:      'Comisionada Presidenta del Órgano de Administración',
    telefono:   '618 827 96 87',
    ext:        '230',
    correo:     'comisionadministracion@pjdgo.gob.mx',
    presidenta: true,
  },
  {
    nombre:   'M. A. P. Alejandra Elizabeth Terrones Ochoa',
    cargo:    'Comisionada de Creación de Nuevos Órganos',
    telefono: '618 827 97 27',
    ext:      '231',
    correo:   'comisionnuevosorganos@pjdgo.gob.mx',
  },
  {
    nombre:   'Lic. Miguel Ángel Olvera Escalera',
    cargo:    'Comisionado de Control Interno',
    telefono: '618 827 67 57',
    ext:      '229 / 183',
    correo:   'comisioncontrolinterno@pjdgo.gob.mx',
  },
  {
    nombre:   'L. A. José Antonio Arzola González',
    cargo:    'Comisionado de Adscripción',
    ext:      '252',
    correo:   'comisionadscripcion@pjdgo.gob.mx',
  },
  {
    nombre:   'M. J. O. Yilma Leonila Rivera Estrada',
    cargo:    'Comisionada de Carrera Judicial',
    telefono: '618 827 96 56',
    ext:      '149',
    correo:   'comisioncarrerajudicial@pjdgo.gob.mx',
  },
]

function AvatarPlaceholder({ large = false }: { large?: boolean }) {
  const size = large ? 56 : 36
  return (
    <div style={{ width: '100%', aspectRatio: '1/1', background: '#CACECF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#9AA1A6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    </div>
  )
}

function IconPhone() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.5 16z" />
    </svg>
  )
}

function IconMail() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

export default function Page() {
  const presidenta = comisionados.find(c => c.presidenta)!
  const resto = comisionados.filter(c => !c.presidenta)

  return (
    <div className="bg-white">

      {/* Breadcrumbs */}
      <div style={{ borderBottom: '1px solid #B8C0B8' }}>
        <div className="max-w-content mx-auto site-px py-3 flex items-center gap-2 flex-wrap">
          {[
            { label: 'Inicio', href: '/' },
            { label: 'PJDGO', href: '/pjdgo' },
            { label: 'Órgano de Administración Judicial', href: '/pjdgo/organo-de-administracion-judicial' },
          ].map(({ label, href }) => (
            <span key={href} className="flex items-center gap-2">
              <Link href={href} className="font-lato text-overlay hover:text-primary transition-colors" style={{ fontSize: '12px', letterSpacing: '0.3px', textDecoration: 'none' }}>{label}</Link>
              <span className="text-overlay" style={{ fontSize: '12px' }}>›</span>
            </span>
          ))}
          <span className="font-lato text-primary" style={{ fontSize: '12px', letterSpacing: '0.3px' }}>Pleno y Comisiones</span>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '64px', paddingBottom: '48px', borderBottom: '1px solid #B8C0B8' }}>
        <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>Órgano de Administración Judicial</p>
        <h1 className="font-monument text-primary" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '400', letterSpacing: '0.5px', lineHeight: '1.1em', marginBottom: '20px' }}>
          Pleno y Comisiones
        </h1>
        <p className="font-lato text-accent" style={{ fontSize: '16px', lineHeight: '1.7em', letterSpacing: '0.3px', maxWidth: '680px' }}>
          El Pleno del Órgano de Administración Judicial está integrado por cinco comisionados, cada uno responsable de un área estratégica para la administración y el desarrollo del Poder Judicial del Estado de Durango.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '48px', paddingBottom: '80px' }}>

        {/* Presidenta — featured */}
        <p className="font-lato text-overlay uppercase mb-6" style={{ fontSize: '11px', letterSpacing: '2px' }}>Presidencia</p>
        <div className="flex flex-col sm:flex-row" style={{ border: '1px solid #B8C0B8', marginBottom: '56px' }}>
          <div style={{ width: '200px', flexShrink: 0 }}>
            <AvatarPlaceholder large />
          </div>
          <div style={{ padding: '32px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span className="font-lato text-white bg-primary uppercase inline-block" style={{ fontSize: '10px', fontWeight: '600', letterSpacing: '1.5px', padding: '4px 10px', marginBottom: '16px', alignSelf: 'flex-start' }}>
              Comisionada Presidenta
            </span>
            <h2 className="font-monument text-primary" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', fontWeight: '400', lineHeight: '1.2em', marginBottom: '8px' }}>
              {presidenta.nombre}
            </h2>
            <p className="font-lato text-accent" style={{ fontSize: '13px', lineHeight: '1.6em', letterSpacing: '0.3px', marginBottom: '16px' }}>
              {presidenta.cargo}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {presidenta.telefono && (
                <div className="flex items-center gap-1.5 text-overlay">
                  <IconPhone />
                  <span className="font-lato" style={{ fontSize: '12px' }}>{presidenta.telefono} · Ext. {presidenta.ext}</span>
                </div>
              )}
              <a href={`mailto:${presidenta.correo}`} className="flex items-center gap-1.5 text-overlay hover:text-primary transition-colors" style={{ textDecoration: 'none' }}>
                <IconMail />
                <span className="font-lato" style={{ fontSize: '12px' }}>{presidenta.correo}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Comisionados */}
        <p className="font-lato text-overlay uppercase mb-6" style={{ fontSize: '11px', letterSpacing: '2px' }}>Comisionados</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: '#B8C0B8' }}>
          {resto.map((m, i) => (
            <div key={i} className="bg-white flex flex-col">
              <AvatarPlaceholder />
              <div style={{ padding: '18px 18px 22px' }}>
                <p className="font-sans text-primary" style={{ fontSize: '14px', fontWeight: '500', lineHeight: '1.3em', marginBottom: '6px' }}>{m.nombre}</p>
                <p className="font-lato text-accent" style={{ fontSize: '11px', lineHeight: '1.55em', letterSpacing: '0.3px', marginBottom: '12px' }}>{m.cargo}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  {m.telefono ? (
                    <div className="flex items-center gap-1.5 text-overlay">
                      <IconPhone />
                      <span className="font-lato" style={{ fontSize: '11px' }}>{m.telefono} · Ext. {m.ext}</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 text-overlay">
                      <IconPhone />
                      <span className="font-lato" style={{ fontSize: '11px' }}>Ext. {m.ext}</span>
                    </div>
                  )}
                  <a href={`mailto:${m.correo}`} className="flex items-center gap-1.5 text-overlay hover:text-primary transition-colors" style={{ textDecoration: 'none' }}>
                    <IconMail />
                    <span className="font-lato" style={{ fontSize: '11px' }}>{m.correo}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
