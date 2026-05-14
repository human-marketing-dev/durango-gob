import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Comité de Transparencia — Poder Judicial del Estado de Durango',
  description: 'Conoce a los integrantes del Comité de Transparencia y la Unidad de Transparencia del Poder Judicial del Estado de Durango.',
}

// ── Data ──────────────────────────────────────────────────────────────────────

interface Miembro {
  nombre: string
  cargo: string
  rol: string
  presidente?: boolean
  cv?: string
}

const comite: Miembro[] = [
  {
    nombre:     'M.D. Juan Guillermo Toro Lerma',
    cargo:      'Secretario General de Acuerdos y del Pleno del Tribunal Superior de Justicia',
    rol:        'Presidente',
    presidente: true,
  },
  {
    nombre:  'M.D.H. Aurea Jennifer Tolentino Vargas',
    cargo:   'Secretaria Ejecutiva del Pleno y Carrera Judicial del Órgano de Administración',
    rol:     'Integrante',
  },
  {
    nombre:  'L.A. Héctor Jaime Hernández Guerrero',
    cargo:   'Secretario Ejecutivo de Administración',
    rol:     'Integrante',
  },
  {
    nombre:  'L.A. Brenda Leticia Zamora García',
    cargo:   'Directora de Estadística Judicial y Planeación',
    rol:     'Integrante',
  },
  {
    nombre:  'C.P. Ana Lorena Sánchez Casas',
    cargo:   'Encargada de la Dirección del Fondo Auxiliar para la Administración de Justicia',
    rol:     'Integrante',
  },
  {
    nombre:  'L.I. José Humberto Vargas Luna',
    cargo:   'Director de Informática',
    rol:     'Integrante',
  },
  {
    nombre:  'Lic. José Manuel Tinoco Carrasco',
    cargo:   'Encargado de la Dirección de Control Interno',
    rol:     'Integrante',
  },
  {
    nombre:  'L.A. Jorge Ramón Mendía Bulnes',
    cargo:   'Director del Archivo',
    rol:     'Integrante',
  },
  {
    nombre:  'L.C.T.C. Edith Martínez Jara',
    cargo:   'Encargada de la Unidad de Transparencia',
    rol:     'Secretaria del Comité de Transparencia',
  },
]

// ── Placeholder avatar ─────────────────────────────────────────────────────────

function AvatarPlaceholder() {
  return (
    <div
      style={{
        width: '100%',
        aspectRatio: '1 / 1',
        background: '#CACECF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#9AA1A6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    </div>
  )
}

// ── Icons ─────────────────────────────────────────────────────────────────────

function IconLocation() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
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

function IconMail() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

function IconDownload() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
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

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <div className="bg-white">

      {/* Breadcrumbs */}
      <div style={{ borderBottom: '1px solid #B8C0B8' }}>
        <div className="max-w-content mx-auto site-px py-3 flex items-center gap-2 flex-wrap">
          {[
            { label: 'Inicio', href: '/' },
            { label: 'Transparencia', href: '/transparencia' },
          ].map(({ label, href }) => (
            <span key={href} className="flex items-center gap-2">
              <Link href={href} className="font-lato text-overlay hover:text-primary transition-colors" style={{ fontSize: '12px', letterSpacing: '0.3px', textDecoration: 'none' }}>
                {label}
              </Link>
              <span className="text-overlay" style={{ fontSize: '12px' }}>›</span>
            </span>
          ))}
          <span className="font-lato text-primary" style={{ fontSize: '12px', letterSpacing: '0.3px' }}>
            Comité de Transparencia
          </span>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '64px', paddingBottom: '48px', borderBottom: '1px solid #B8C0B8' }}>
        <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>
          Transparencia
        </p>
        <h1
          className="font-monument text-primary"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '400', letterSpacing: '0.5px', lineHeight: '1.1em', marginBottom: '20px' }}
        >
          Comité de Transparencia
        </h1>
        <p className="font-lato text-accent" style={{ fontSize: '16px', lineHeight: '1.7em', letterSpacing: '0.3px', maxWidth: '680px' }}>
          El Comité de Transparencia es el órgano colegiado responsable de coordinar y supervisar las acciones en materia de acceso a la información pública dentro del Poder Judicial del Estado de Durango.
        </p>
      </div>

      {/* Committee grid */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '56px', paddingBottom: '72px', borderBottom: '1px solid #B8C0B8' }}>

        {/* President — featured card */}
        {comite.filter(m => m.presidente).map(m => (
          <div key={m.nombre} style={{ marginBottom: '40px' }}>
            <p className="font-lato text-overlay uppercase mb-6" style={{ fontSize: '11px', letterSpacing: '2px' }}>
              Presidencia
            </p>
            <div
              className="bg-white flex flex-col sm:flex-row gap-0"
              style={{ border: '1px solid #B8C0B8' }}
            >
              <div className="w-full sm:w-44" style={{ flexShrink: 0 }}>
                <AvatarPlaceholder />
              </div>
              <div style={{ padding: '32px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span
                  className="font-lato text-white bg-primary uppercase inline-block"
                  style={{ fontSize: '10px', fontWeight: '600', letterSpacing: '1.5px', padding: '4px 10px', marginBottom: '16px', alignSelf: 'flex-start' }}
                >
                  {m.rol}
                </span>
                <h3 className="font-monument text-primary" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', fontWeight: '400', lineHeight: '1.2em', marginBottom: '8px' }}>
                  {m.nombre}
                </h3>
                <p className="font-lato text-accent" style={{ fontSize: '13px', lineHeight: '1.6em', letterSpacing: '0.3px', marginBottom: '16px' }}>
                  {m.cargo}
                </p>
                <a href={m.cv ?? '#'} download className="flex items-center gap-1.5 text-overlay hover:text-primary transition-colors" style={{ textDecoration: 'none', alignSelf: 'flex-start' }}>
                  <IconDownload />
                  <span className="font-lato uppercase" style={{ fontSize: '10px', letterSpacing: '1px', fontWeight: '500' }}>Currículum</span>
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Integrantes grid */}
        <p className="font-lato text-overlay uppercase mb-6" style={{ fontSize: '11px', letterSpacing: '2px' }}>
          Integrantes y Secretaría
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: '1px', background: '#B8C0B8' }}>
          {comite.filter(m => !m.presidente).map(m => (
            <div key={m.nombre} className="bg-white flex flex-col">
              <AvatarPlaceholder />
              <div style={{ padding: '20px 20px 24px' }}>
                <span
                  className="font-lato text-overlay uppercase inline-block"
                  style={{
                    fontSize: '9px',
                    fontWeight: '600',
                    letterSpacing: '1.5px',
                    padding: '3px 8px',
                    border: '1px solid #9AA1A6',
                    marginBottom: '12px',
                  }}
                >
                  {m.rol}
                </span>
                <p className="font-sans text-primary" style={{ fontSize: '14px', fontWeight: '500', lineHeight: '1.35em', marginBottom: '8px' }}>
                  {m.nombre}
                </p>
                <p className="font-lato text-accent" style={{ fontSize: '12px', lineHeight: '1.55em', letterSpacing: '0.3px', marginBottom: '10px' }}>
                  {m.cargo}
                </p>
                <a href={m.cv ?? '#'} download className="flex items-center gap-1.5 text-overlay hover:text-primary transition-colors" style={{ textDecoration: 'none' }}>
                  <IconDownload />
                  <span className="font-lato uppercase" style={{ fontSize: '10px', letterSpacing: '1px', fontWeight: '500' }}>Currículum</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Unidad de Transparencia */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '56px', paddingBottom: '80px' }}>
        <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>
          Contacto
        </p>
        <h2 className="font-monument text-primary" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: '400', lineHeight: '1.2em', marginBottom: '40px' }}>
          Unidad de Transparencia
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: '1px', background: '#B8C0B8' }}>

          {/* Staff */}
          <div className="bg-white" style={{ padding: '32px 28px' }}>
            <p className="font-lato text-primary uppercase mb-4" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '1.5px', borderBottom: '1px solid #B8C0B8', paddingBottom: '10px' }}>
              Personal
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <p className="font-lato text-overlay uppercase" style={{ fontSize: '10px', letterSpacing: '1px', marginBottom: '4px' }}>Encargada</p>
                <p className="font-sans text-primary" style={{ fontSize: '14px', fontWeight: '500' }}>L.C.T.C. Edith Martínez Jara</p>
              </div>
              <div>
                <p className="font-lato text-overlay uppercase" style={{ fontSize: '10px', letterSpacing: '1px', marginBottom: '6px' }}>Auxiliares</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <p className="font-lato text-primary" style={{ fontSize: '13px' }}>Lic. Esther Escobedo González</p>
                  <p className="font-lato text-primary" style={{ fontSize: '13px' }}>Ing. Rogelio Haro Molina</p>
                </div>
              </div>
            </div>
          </div>

          {/* Address & hours */}
          <div className="bg-white" style={{ padding: '32px 28px' }}>
            <p className="font-lato text-primary uppercase mb-4" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '1.5px', borderBottom: '1px solid #B8C0B8', paddingBottom: '10px' }}>
              Ubicación y Horario
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="flex items-start gap-2 text-overlay">
                <span className="mt-0.5 shrink-0"><IconLocation /></span>
                <span className="font-lato" style={{ fontSize: '13px', lineHeight: '1.65em', letterSpacing: '0.3px' }}>
                  C. Zaragoza esq. con 5 de Febrero S/N,<br />
                  Zona Centro, Durango, Dgo. C.P. 34000
                </span>
              </div>
              <div className="flex items-start gap-2 text-overlay">
                <span className="mt-0.5 shrink-0"><IconClock /></span>
                <span className="font-lato" style={{ fontSize: '13px', lineHeight: '1.65em', letterSpacing: '0.3px' }}>
                  Lunes a viernes<br />
                  9:00 a 15:00 horas
                </span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white" style={{ padding: '32px 28px' }}>
            <p className="font-lato text-primary uppercase mb-4" style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '1.5px', borderBottom: '1px solid #B8C0B8', paddingBottom: '10px' }}>
              Teléfonos y Correo
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div className="flex items-start gap-2 text-overlay">
                <span className="mt-0.5 shrink-0"><IconPhone /></span>
                <span className="font-lato" style={{ fontSize: '13px', lineHeight: '1.7em', letterSpacing: '0.3px' }}>
                  (618) 811 4712 · (618) 811 2975<br />
                  (618) 811 2978 · (618) 811 2048<br />
                  (618) 811 6561 · (618) 812 0361<br />
                  <span className="text-primary" style={{ fontWeight: '500' }}>Ext. 215</span>
                </span>
              </div>
              <a
                href="mailto:transparencia@pjdgo.gob.mx"
                className="flex items-center gap-2 text-overlay hover:text-primary transition-colors"
                style={{ textDecoration: 'none' }}
              >
                <IconMail />
                <span className="font-lato" style={{ fontSize: '13px', letterSpacing: '0.3px' }}>
                  transparencia@pjdgo.gob.mx
                </span>
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white overflow-hidden" style={{ minHeight: '240px' }}>
            <iframe
              title="Ubicación Unidad de Transparencia"
              src="https://maps.google.com/maps?q=Zaragoza+esq+5+de+Febrero,+Centro,+Durango,+Mexico&output=embed&z=16"
              width="100%"
              height="100%"
              style={{ border: 'none', display: 'block', minHeight: '240px' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </div>
  )
}
