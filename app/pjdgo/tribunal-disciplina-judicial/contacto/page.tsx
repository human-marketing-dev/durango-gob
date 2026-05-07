import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contacto — Tribunal de Disciplina Judicial — Poder Judicial del Estado de Durango',
  description: 'Directorio de contacto del Tribunal de Disciplina Judicial del Estado de Durango: magistrados, secretaría de acuerdos y unidades.',
}

interface Persona {
  nombre: string
  cargo: string
  telefono?: string
  ext?: string
  correo?: string
}

interface Seccion {
  titulo: string
  personas: Persona[]
}

const secciones: Seccion[] = [
  {
    titulo: 'Magistrados',
    personas: [
      {
        nombre: 'M. A. P. Irma Selene Soto Rodríguez',
        cargo:  'Magistrada Presidenta y titular de la Primera Ponencia',
        correo: 'primeraponencia.tdj@pjdgo.gob.mx',
      },
      {
        nombre: 'M. D. E. José Durán Barrera',
        cargo:  'Magistrado de la Segunda Ponencia',
        correo: 'segundaponencia.tdj@pjdgo.gob.mx',
      },
      {
        nombre: 'Lic. Ángel Gerardo Bonilla Saucedo',
        cargo:  'Magistrado de la Tercera Ponencia',
        correo: 'terceraponencia.tdj@pjdgo.gob.mx',
      },
      {
        nombre: 'M. D. Karen Flores Maciel',
        cargo:  'Magistrada de la Cuarta Ponencia',
        correo: 'cuartaponencia.tdj@pjdgo.gob.mx',
      },
      {
        nombre: 'M. D. Ernestina Terán Rivera',
        cargo:  'Magistrada de la Quinta Ponencia',
        correo: 'quintaponencia.tdj@pjdgo.gob.mx',
      },
    ],
  },
  {
    titulo: 'Secretaría de Acuerdos del Pleno',
    personas: [
      {
        nombre: 'Dr. Teódulo Pérez Martínez',
        cargo:  'Secretario de Acuerdos del Pleno',
        correo: 'secretariadeacuerdos@pjdgo.gob.mx',
      },
    ],
  },
  {
    titulo: 'Unidades',
    personas: [
      {
        nombre: 'Lic. Lilian Carolina Torres Valenzuela',
        cargo:  'Directora de la Unidad de Investigación de Responsabilidades Administrativas',
        correo: 'uira_tdj@pjdgo.gob.mx',
      },
      {
        nombre: 'Lic. Cinthya Guadalupe Mier Gómez',
        cargo:  'Directora de la Unidad de Evaluación del Desempeño Judicial',
        correo: 'uedj_tdj@pjdgo.gob.mx',
      },
    ],
  },
]

function IconPhone() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.5 16z" />
    </svg>
  )
}

function IconMail() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

function IconLocation() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
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
            { label: 'Inicio', href: '/' },
            { label: 'PJDGO', href: '/pjdgo' },
            { label: 'Tribunal de Disciplina Judicial', href: '/pjdgo/tribunal-disciplina-judicial' },
          ].map(({ label, href }) => (
            <span key={href} className="flex items-center gap-2">
              <Link href={href} className="font-lato text-overlay hover:text-primary transition-colors" style={{ fontSize: '12px', letterSpacing: '0.3px', textDecoration: 'none' }}>
                {label}
              </Link>
              <span className="text-overlay" style={{ fontSize: '12px' }}>›</span>
            </span>
          ))}
          <span className="font-lato text-primary" style={{ fontSize: '12px', letterSpacing: '0.3px' }}>
            Contacto
          </span>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '64px', paddingBottom: '48px', borderBottom: '1px solid #B8C0B8' }}>
        <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>
          Tribunal de Disciplina Judicial
        </p>
        <h1
          className="font-monument text-primary"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '400', letterSpacing: '0.5px', lineHeight: '1.1em', marginBottom: '20px' }}
        >
          Directorio de Contacto
        </h1>
        <p className="font-lato text-accent" style={{ fontSize: '16px', lineHeight: '1.7em', letterSpacing: '0.3px', maxWidth: '680px' }}>
          Encuentra los datos de contacto de los magistrados, la secretaría de acuerdos y las unidades del Tribunal de Disciplina Judicial del Estado de Durango.
        </p>

        <div className="flex flex-wrap gap-6 mt-8">
          <div className="flex items-start gap-2 text-overlay">
            <span className="mt-0.5"><IconLocation /></span>
            <span className="font-lato" style={{ fontSize: '13px', lineHeight: '1.6em', letterSpacing: '0.3px' }}>
              Palacio de Justicia, Calle Zaragoza s/n esq. con 5 de Febrero,<br />
              Zona Centro, C.P. 34000, Victoria de Durango, Dgo.
            </span>
          </div>
          <div className="flex items-start gap-2 text-overlay">
            <span className="mt-0.5"><IconPhone /></span>
            <span className="font-lato" style={{ fontSize: '13px', lineHeight: '1.6em', letterSpacing: '0.3px' }}>
              618 811 47 12 · 811 65 61 · 811 29 75 · 618 811 29 78 · 812 03 61
            </span>
          </div>
        </div>
      </div>

      {/* Directory sections */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '48px', paddingBottom: '80px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {secciones.map(seccion => (
            <div key={seccion.titulo}>

              <div style={{ borderBottom: '2px solid #1B1A19', paddingBottom: '10px', marginBottom: '4px' }}>
                <h2 className="font-sans text-primary" style={{ fontSize: '14px', fontWeight: '600', letterSpacing: '1.2px', textTransform: 'uppercase' }}>
                  {seccion.titulo}
                </h2>
              </div>

              <div style={{ display: 'grid', gap: '1px', background: '#B8C0B8', marginTop: '4px' }}>
                {seccion.personas.map((p, i) => (
                  <div key={i} className="bg-white" style={{ padding: '20px 24px' }}>
                    <div className="flex flex-col gap-1 mb-3">
                      <span className="font-sans text-primary" style={{ fontSize: '15px', fontWeight: '500', lineHeight: '1.3em' }}>
                        {p.nombre}
                      </span>
                      <span className="font-lato text-accent" style={{ fontSize: '12px', letterSpacing: '0.3px' }}>
                        {p.cargo}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-x-6 gap-y-1.5">
                      {p.telefono && (
                        <div className="flex items-center gap-1.5 text-overlay">
                          <IconPhone />
                          <span className="font-lato" style={{ fontSize: '12px', letterSpacing: '0.3px' }}>
                            {p.telefono}
                            {p.ext && <span> · Ext. {p.ext}</span>}
                          </span>
                        </div>
                      )}
                      {p.correo && (
                        <a
                          href={`mailto:${p.correo}`}
                          className="flex items-center gap-1.5 text-overlay hover:text-primary transition-colors"
                          style={{ textDecoration: 'none' }}
                        >
                          <IconMail />
                          <span className="font-lato" style={{ fontSize: '12px', letterSpacing: '0.3px' }}>
                            {p.correo}
                          </span>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
