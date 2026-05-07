import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contacto — Tribunal Superior de Justicia — Poder Judicial del Estado de Durango',
  description: 'Directorio de contacto del Tribunal Superior de Justicia del Estado de Durango: magistrados, secretarías de acuerdos y áreas de atención.',
}

// ── Types ─────────────────────────────────────────────────────────────────────

interface Persona {
  nombre: string
  cargo: string
  telefono?: string
  ext?: string
  correo?: string
}

interface Seccion {
  titulo: string
  domicilio?: string
  personas: Persona[]
}

// ── Data ──────────────────────────────────────────────────────────────────────

const secciones: Seccion[] = [
  {
    titulo: 'Presidencia',
    personas: [
      {
        nombre:   'D. D. Manuel Valadez Díaz',
        cargo:    'Magistrado Presidente',
        telefono: '618 811 20 73 / 618 812 79 69',
        ext:      '108 / 141',
        correo:   'presidencia@pjdgo.gob.mx',
      },
    ],
  },
  {
    titulo: 'Vicepresidencia',
    personas: [
      {
        nombre:   'Dra. María Magdalena Alanís Herrera',
        cargo:    'Magistrada Vicepresidenta',
        telefono: '618 811 29 78',
        ext:      '222',
        correo:   'segundasalacivilunitaria@pjdgo.gob.mx',
      },
    ],
  },
  {
    titulo: 'Sala Civil Colegiada',
    personas: [
      {
        nombre:   'M. D. Alejandra Estrada Arreola',
        cargo:    'Magistrada 1ª Ponencia',
        telefono: '618 813 07 98',
        ext:      '220',
        correo:   'ponencia1civilcolegiada@pjdgo.gob.mx',
      },
      {
        nombre:   'M. D. Julio César Piña de la Garza',
        cargo:    'Magistrado 2ª Ponencia y Presidente de la Sala',
        telefono: '618 811 58 90',
        ext:      '122',
        correo:   'ponencia2civilcolegiada@pjdgo.gob.mx',
      },
      {
        nombre:   'M. D. Brenda Lizette Acevedo Castañeda',
        cargo:    'Magistrada 3ª Ponencia',
        telefono: '618 813 19 61',
        ext:      '124',
        correo:   'ponencia3civilcolegiada@pjdgo.gob.mx',
      },
    ],
  },
  {
    titulo: 'Salas Civiles Unitarias',
    personas: [
      {
        nombre:   'Lic. Karina García Montelongo',
        cargo:    'Magistrada 1ª Sala',
        telefono: '618 811 29 09',
        ext:      '221',
        correo:   'primerasalacivilunitaria@pjdgo.gob.mx',
      },
      {
        nombre:   'Dra. María Magdalena Alanís Herrera',
        cargo:    'Magistrada 2ª Sala y Presidenta Sala de Control Constitucional',
        telefono: '618 812 35 30',
        ext:      '222',
        correo:   'segundasalacivilunitaria@pjdgo.gob.mx',
      },
      {
        nombre:   'Lic. Yésika Liliana Ramos Rodríguez',
        cargo:    'Magistrada 3ª Sala',
        telefono: '618 812 35 30',
        ext:      '217',
        correo:   'tercerasalacivilunitaria@pjdgo.gob.mx',
      },
    ],
  },
  {
    titulo: 'Sala Penal Colegiada',
    personas: [
      {
        nombre:   'M. D. Carlos Enrique Guzmán González',
        cargo:    'Magistrado 1ª Ponencia y Presidente de la Sala',
        telefono: '618 811 29 78',
        ext:      '159',
        correo:   'primerasalapenalcolegiada@pjdgo.gob.mx',
      },
      {
        nombre:   'Lic. Iliana Angélica Alvarado Salinas',
        cargo:    'Magistrada 2ª Ponencia',
        telefono: '618 811 29 78',
        ext:      '158',
        correo:   'segundasalapenalcolegiada@pjdgo.gob.mx',
      },
      {
        nombre:   'Lic. Miriam Guadalupe Lanzarín Roldán',
        cargo:    'Magistrada 3ª Ponencia',
        telefono: '618 811 29 77',
        ext:      '161',
        correo:   'tercerasalapenalcolegiada@pjdgo.gob.mx',
      },
    ],
  },
  {
    titulo: 'Sala Colegiada Mixta Regional',
    domicilio: 'Palacio de Justicia (5° piso), Calle Morelos No. 326 Nte., Zona Centro, C.P. 35000, Gómez Palacio, Dgo.',
    personas: [
      {
        nombre:   'Dr. Luis Fernando Contreras Cortés',
        cargo:    'Magistrado 1ª Ponencia',
        telefono: '871 456 58 00',
        ext:      '65806',
        correo:   'ponencia1colegiadagp@pjdgo.gob.mx',
      },
      {
        nombre:   'Lic. Gloria Guadalupe Galván Román',
        cargo:    'Magistrada 2ª Ponencia',
        telefono: '871 456 58 42',
        ext:      '65842',
        correo:   'ponencia2colegiadagp@pjdgo.gob.mx',
      },
      {
        nombre:   'Dr. Álvaro Rodríguez Alcalá',
        cargo:    'Magistrado 3ª Ponencia y Presidente de la Sala',
        telefono: '871 456 58 27',
        ext:      '65827',
        correo:   'ponencia3colegiadagp@pjdgo.gob.mx',
      },
    ],
  },
  {
    titulo: 'Salas Unitarias Regionales',
    personas: [
      {
        nombre:   'Lic. Gerardo Lara Pérez',
        cargo:    'Magistrado Sala Civil Unitaria Regional',
        telefono: '871 456 58 10',
        ext:      '65810',
        correo:   'civilunitariagp@pjdgo.gob.mx',
      },
      {
        nombre:   'Lic. Miguel Ángel Quiñones Orozco',
        cargo:    'Magistrado Sala Penal Unitaria Regional',
        telefono: '871 456 58 08',
        ext:      '65808',
        correo:   'penalunitariagp@pjdgo.gob.mx',
      },
    ],
  },
  {
    titulo: 'Secretaría General de Acuerdos',
    personas: [
      {
        nombre:   'M. D. Juan Guillermo Toro Lerma',
        cargo:    'Secretario General de Acuerdos del TSJ y del Pleno',
        telefono: '618 811 29 76',
        ext:      '129',
        correo:   'secretariopleno@pjdgo.gob.mx',
      },
    ],
  },
  {
    titulo: 'Secretarías de Acuerdos',
    personas: [
      {
        nombre:  'Lic. Leticia Guadalupe Salazar Rivera',
        cargo:   'Secretaria de Acuerdos — Sala Civil Colegiada',
        ext:     '152',
        correo:  '@pjdgo.gob.mx',
      },
      {
        nombre:  'Lic. Verónica Natalia Garay Burciaga',
        cargo:   'Secretaria de Acuerdos — Salas Civiles Unitarias',
        ext:     '120',
        correo:  '@pjdgo.gob.mx',
      },
      {
        nombre:  'Lic. Laura Gabriela Vidal Guzmán',
        cargo:   'Secretaria de Acuerdos — Sala Penal Colegiada',
        ext:     '261',
        correo:  '@pjdgo.gob.mx',
      },
      {
        nombre:  'M. D. J. Jesús Juventino Valenzuela Serrato',
        cargo:   'Secretario de Acuerdos — Salas Penales Unitarias',
        ext:     '226',
        correo:  '@pjdgo.gob.mx',
      },
    ],
  },
  {
    titulo: 'Secretaría de Acuerdos de las Salas Regionales',
    domicilio: 'Palacio de Justicia (3er piso), Calle Morelos No. 326 Nte., C.P. 35000, Gómez Palacio, Dgo.',
    personas: [
      {
        nombre:   'Dr. Juan Rafael Carrillo Ávila',
        cargo:    'Secretario de Acuerdos de las Salas Regionales',
        telefono: '871 456 58 48',
        ext:      '65848',
        correo:   '@pjdgo.gob.mx',
      },
    ],
  },
  {
    titulo: 'Unidad de Derechos Humanos e Igualdad de Género',
    personas: [
      {
        nombre:   'Lic. Carlos Rafael Ortiz Gómez',
        cargo:    'Director',
        telefono: '618 811 47 12',
        ext:      '117',
        correo:   'uddhhig@pjdgo.gob.mx',
      },
    ],
  },
  {
    titulo: 'Voluntariado del Poder Judicial',
    personas: [
      {
        nombre:   'Lic. Hilda Güereca Carrera',
        cargo:    'Presidenta del Voluntariado',
        telefono: '618 825 87 14',
        ext:      '126',
        correo:   'voluntariado@tsjdgo.gob.mx',
      },
    ],
  },
  {
    titulo: 'Vinculación y Atención Ciudadana',
    personas: [
      {
        nombre:   'C. P. Manuel Isaac Cisneros Meraz',
        cargo:    'Director',
        telefono: '618 811 47 12',
        ext:      '257',
        correo:   'comunicacionsocial@pjdgo.gob.mx',
      },
    ],
  },
]

// ── Icons ─────────────────────────────────────────────────────────────────────

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

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <div className="bg-white">

      {/* Breadcrumbs */}
      <div style={{ borderBottom: '1px solid #B8C0B8' }}>
        <div className="max-w-content mx-auto site-px py-3 flex items-center gap-2 flex-wrap">
          {[
            { label: 'Inicio', href: '/' },
            { label: 'PJDGO', href: '/pjdgo' },
            { label: 'Tribunal Superior de Justicia', href: '/pjdgo/tribunal-superior-de-justicia' },
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
          Tribunal Superior de Justicia
        </p>
        <h1
          className="font-monument text-primary"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '400', letterSpacing: '0.5px', lineHeight: '1.1em', marginBottom: '20px' }}
        >
          Directorio de Contacto
        </h1>
        <p className="font-lato text-accent" style={{ fontSize: '16px', lineHeight: '1.7em', letterSpacing: '0.3px', maxWidth: '680px' }}>
          Encuentra los datos de contacto de los magistrados, secretarías de acuerdos y áreas de atención del Tribunal Superior de Justicia del Estado de Durango.
        </p>

        {/* Main address & phone */}
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

              {/* Section header */}
              <div style={{ borderBottom: '2px solid #1B1A19', paddingBottom: '10px', marginBottom: '4px' }}>
                <h2 className="font-sans text-primary" style={{ fontSize: '14px', fontWeight: '600', letterSpacing: '1.2px', textTransform: 'uppercase' }}>
                  {seccion.titulo}
                </h2>
              </div>

              {/* Optional address */}
              {seccion.domicilio && (
                <div className="flex items-start gap-2 text-overlay mb-3 mt-3">
                  <span className="mt-0.5"><IconLocation /></span>
                  <span className="font-lato" style={{ fontSize: '12px', lineHeight: '1.6em', letterSpacing: '0.3px' }}>
                    {seccion.domicilio}
                  </span>
                </div>
              )}

              {/* People rows */}
              <div style={{ display: 'grid', gap: '1px', background: '#B8C0B8', marginTop: seccion.domicilio ? '0' : '4px' }}>
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
                            {p.ext && <span className="text-overlay"> · Ext. {p.ext}</span>}
                          </span>
                        </div>
                      )}
                      {!p.telefono && p.ext && (
                        <div className="flex items-center gap-1.5 text-overlay">
                          <IconPhone />
                          <span className="font-lato" style={{ fontSize: '12px', letterSpacing: '0.3px' }}>
                            Ext. {p.ext}
                          </span>
                        </div>
                      )}
                      {p.correo && p.correo !== '@pjdgo.gob.mx' && (
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
