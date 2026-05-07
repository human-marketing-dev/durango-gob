import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contacto — Órgano de Administración Judicial — Poder Judicial del Estado de Durango',
  description: 'Directorio de contacto del Órgano de Administración Judicial del Estado de Durango: comisionados, secretariado ejecutivo, órganos auxiliares y centros adscritos.',
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
  domicilio?: string
  personas: Persona[]
}

const secciones: Seccion[] = [
  {
    titulo: 'Comisionados',
    personas: [
      {
        nombre:   'C. P. Tania Julieta Hernández Maldonado',
        cargo:    'Comisionada Presidenta del Órgano de Administración',
        telefono: '618 827 96 87',
        ext:      '230',
        correo:   'comisionadministracion@pjdgo.gob.mx',
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
    ],
  },
  {
    titulo: 'Secretariado Ejecutivo',
    personas: [
      {
        nombre:   'M. D. Aurea Jennifer Tolentino Vargas',
        cargo:    'Secretaria Ejecutiva del Pleno y Carrera Judicial',
        telefono: '618 813 70 19',
        ext:      '232 / 197',
        correo:   'sriaejecutivaorgano@pjdgo.gob.mx',
      },
      {
        nombre:   'L. A. Héctor Jaime Hernández Guerrero',
        cargo:    'Secretario Ejecutivo de Administración',
        telefono: '618 811 41 76',
        ext:      '114',
        correo:   'secretariaejecutivadeadmon@pjdgo.gob.mx',
      },
    ],
  },
  {
    titulo: 'Órganos Auxiliares',
    personas: [
      {
        nombre:   'C. P. Ana Lorena Sánchez Casas',
        cargo:    'Encargada de la Dirección del Fondo Auxiliar para la Administración de Justicia',
        ext:      '155',
        correo:   'fondoauxiliar@pjdgo.gob.mx',
      },
      {
        nombre:   'Dr. César Miguel González Piña Nevárez',
        cargo:    'Rector de la Universidad Judicial',
        telefono: '618 835 03 86',
        ext:      '262',
        correo:   'rectoruj@pjdgo.gob.mx',
      },
      {
        nombre:   'L. A. Jorge Ramón Mendía Bulnes',
        cargo:    'Director de Archivo',
        ext:      '128',
        correo:   'archivojudicial@pjdgo.gob.mx',
      },
      {
        nombre:   'L. C. T. C. Edith Martínez Jara',
        cargo:    'Encargada de la Dirección de Transparencia y Acceso a la Información Pública',
        ext:      '215',
        correo:   'transparencia@pjdgo.gob.mx',
      },
      {
        nombre:   'L. I. José Humberto Vargas Luna',
        cargo:    'Director de Informática',
        telefono: '618 813 79 96 / 618 825 27 21',
        ext:      '227',
        correo:   'informatica@pjdgo.gob.mx',
      },
      {
        nombre:   'Lic. José Manuel Tinoco Carrasco',
        cargo:    'Encargado de la Dirección de Control Interno',
        telefono: '618 811 01 65',
        ext:      '155',
        correo:   'controlinterno@pjdgo.gob.mx',
      },
      {
        nombre:   'L. A. Brenda Leticia Zamora García',
        cargo:    'Directora de Estadística y Planeación',
        ext:      '113',
        correo:   'estadistica@pjdgo.gob.mx',
      },
      {
        nombre:   'Lic. Juan Antonio Pescador Cano',
        cargo:    'Director de Defensoría Pública',
        telefono: '618 812 66 26 / 618 811 68 73',
        correo:   'defensoriapublicadgo@pjdgo.gob.mx',
      },
      {
        nombre:   'Lic. Lorena Itzel Fernández Hernández',
        cargo:    'Directora Administrativa del Sistema Penal Acusatorio',
        telefono: '618 884 43 45 / 618 884 43 60',
        correo:   'administracionjuiciosorales@pjdgo.gob.mx',
      },
      {
        nombre:   'Lic. Héctor Ayón Nogueira',
        cargo:    'Director General del Centro Estatal de Justicia Alternativa',
        telefono: '618 827 92 56 / 618 827 50 21',
        correo:   'ceja-durango@pjdgo.gob.mx',
      },
      {
        nombre:   'L. T. S. y L. P. María Josefina Franco Ortega',
        cargo:    'Directora del Centro de Convivencia Familiar',
        telefono: '618 825 89 62',
        correo:   'cecofam@pjdgo.gob.mx',
      },
    ],
  },
  {
    titulo: 'Centro Estatal de Justicia Alternativa (CEJA)',
    domicilio: 'Calle Hidalgo No. 328 Sur, Zona Centro, C.P. 34000, Victoria de Durango, Dgo.',
    personas: [
      {
        nombre:   'Lic. Héctor Ayón Nogueira',
        cargo:    'Director General',
        telefono: '618 827 50 21 / 618 827 92 56',
        correo:   'ceja-durango@pjdgo.gob.mx',
      },
      {
        nombre:   'Lic. Mónica del Socorro Mejía Cháirez',
        cargo:    'Encargada de la Subdirección General',
        telefono: '618 827 50 21 / 618 827 92 56',
        correo:   'ceja-durango@pjdgo.gob.mx',
      },
      {
        nombre:   'Lic. Silvia Mayela Salinas Mares',
        cargo:    'Subdirectora del Centro Distrital de Justicia Alternativa en Lerdo',
        telefono: '871 715 38 57',
      },
      {
        nombre:   'Lic. María Elena Torres Rodríguez',
        cargo:    'Encargada de la Subdirección del Centro Distrital de Justicia Alternativa en Gómez Palacio',
        telefono: '871 715 58 81',
        correo:   'cejagp@pjdgo.gob.mx',
      },
    ],
  },
  {
    titulo: 'Centro de Convivencia Familiar (CECOFAM)',
    domicilio: 'Calle Independencia No. 135 Nte., Zona Centro, C.P. 34000, Victoria de Durango, Dgo.',
    personas: [
      {
        nombre:   'L. T. S. y L. P. María Josefina Franco Ortega',
        cargo:    'Coordinadora',
        telefono: '618 825 89 62',
        correo:   'cecofam@pjdgo.gob.mx',
      },
    ],
  },
  {
    titulo: 'Instituto de Defensoría Pública (INDEPU)',
    domicilio: 'Calle 5 de Febrero No. 1002 "A", Zona Centro, C.P. 34000, Victoria de Durango, Dgo.',
    personas: [
      {
        nombre:   'Lic. Juan Antonio Pescador Cano',
        cargo:    'Director General',
        telefono: '618 812 66 26 / 618 811 68 73',
        correo:   'defensoriapublicadgo@pjdgo.gob.mx',
      },
      {
        nombre:   'Lic. Bertha Alicia Uribe Salcedo',
        cargo:    'Subdirectora Operativa',
        telefono: '618 812 66 26 / 618 811 68 73',
        correo:   'defensoriapublicadgo@pjdgo.gob.mx',
      },
      {
        nombre:   'Lic. Enrique Alonso Gamero Mejorado',
        cargo:    'Director Administrativo',
        telefono: '618 812 66 26 / 618 811 68 73',
        correo:   'defensoriapublicadgo@pjdgo.gob.mx',
      },
      {
        nombre:   'Lic. Marco Antonio Juárez Ríos',
        cargo:    'Coordinador General',
        telefono: '618 812 66 26 / 618 811 68 73',
        correo:   'defensoriapublicadgo@pjdgo.gob.mx',
      },
    ],
  },
  {
    titulo: 'Secretaría Ejecutiva de Administración — Departamentos',
    personas: [
      {
        nombre:  'C. P. Pamela Isabel Rodríguez Soto',
        cargo:   'Jefa del Departamento de Recursos Humanos',
        ext:     '127',
        correo:  'recursoshumanos@pjdgo.gob.mx',
      },
      {
        nombre:  'C. P. Ana Lorena Sánchez Casas',
        cargo:   'Jefa del Departamento de Recursos Financieros',
        ext:     '264',
        correo:  'recursosfinancieros@pjdgo.gob.mx',
      },
      {
        nombre:  'Lic. Diana Victoria Alvarado Nevárez',
        cargo:   'Jefa del Departamento de Recursos Materiales',
        ext:     '185 / 260',
        correo:  'recursosmateriales@pjdgo.gob.mx',
      },
      {
        nombre:  'Ing. Jaime Andrés Reyes Galván',
        cargo:   'Jefe del Departamento de Servicios Generales',
        ext:     '153',
        correo:  'serviciosgenerales@pjdgo.gob.mx',
      },
      {
        nombre:  'Lic. Hilda Janeth Lucio Figueroa',
        cargo:   'Subjefa de Control Patrimonial',
        ext:     '172 / 188',
        correo:  'patrimonio1@pjdgo.gob.mx',
      },
    ],
  },
  {
    titulo: 'Departamento de Actuaría de Ejecución',
    domicilio: 'Calle Hidalgo No. 408 Sur, Zona Centro, C.P. 34000, Victoria de Durango, Dgo.',
    personas: [
      {
        nombre:   'Lic. Thelma Susana García Cisneros',
        cargo:    'Encargada',
        telefono: '618 811 29 78',
        ext:      '210',
        correo:   'actuaria@pjdgo.gob.mx',
      },
    ],
  },
  {
    titulo: 'Oficialía de Partes Común',
    domicilio: 'Calle 5 de Febrero s/n (entre Zaragoza e Hidalgo), Zona Centro, C.P. 34000, Victoria de Durango, Dgo.',
    personas: [
      {
        nombre:   'Lic. Lizandro Israel Cuevas Faudoa',
        cargo:    'Jefe de Oficialía de Partes Común',
        telefono: '618 811 29 78',
        ext:      '210',
        correo:   'oficialiadepartes@pjdgo.gob.mx',
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
            { label: 'Órgano de Administración Judicial', href: '/pjdgo/organo-de-administracion-judicial' },
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
          Órgano de Administración Judicial
        </p>
        <h1
          className="font-monument text-primary"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '400', letterSpacing: '0.5px', lineHeight: '1.1em', marginBottom: '20px' }}
        >
          Directorio de Contacto
        </h1>
        <p className="font-lato text-accent" style={{ fontSize: '16px', lineHeight: '1.7em', letterSpacing: '0.3px', maxWidth: '680px' }}>
          Encuentra los datos de contacto de los comisionados, el secretariado ejecutivo, los órganos auxiliares y los centros adscritos al Órgano de Administración Judicial del Estado de Durango.
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

              {seccion.domicilio && (
                <div className="flex items-start gap-2 text-overlay mt-3 mb-2">
                  <span className="mt-0.5"><IconLocation /></span>
                  <span className="font-lato" style={{ fontSize: '12px', lineHeight: '1.6em', letterSpacing: '0.3px' }}>
                    {seccion.domicilio}
                  </span>
                </div>
              )}

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
                      {!p.telefono && p.ext && (
                        <div className="flex items-center gap-1.5 text-overlay">
                          <IconPhone />
                          <span className="font-lato" style={{ fontSize: '12px', letterSpacing: '0.3px' }}>
                            Ext. {p.ext}
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
