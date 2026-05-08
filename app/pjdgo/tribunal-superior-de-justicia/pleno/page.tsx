import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pleno — Tribunal Superior de Justicia — Poder Judicial del Estado de Durango',
  description: 'Integrantes del Pleno del Tribunal Superior de Justicia del Estado de Durango.',
}

interface Miembro {
  nombre: string
  cargo: string
  telefono?: string
  ext?: string
  correo?: string
}

const pleno: Miembro[] = [
  {
    nombre:   'D. D. Manuel Valadez Díaz',
    cargo:    'Magistrado Presidente',
    telefono: '618 811 20 73 / 618 812 79 69',
    ext:      '108 / 141',
    correo:   'presidencia@pjdgo.gob.mx',
  },
  {
    nombre:   'Dra. María Magdalena Alanís Herrera',
    cargo:    'Magistrada Vicepresidenta · 2ª Sala Civil Unitaria · Presidenta Sala Control Constitucional',
    telefono: '618 811 29 78 / 618 812 35 30',
    ext:      '222',
    correo:   'segundasalacivilunitaria@pjdgo.gob.mx',
  },
  {
    nombre:   'M. D. Alejandra Estrada Arreola',
    cargo:    'Magistrada 1ª Ponencia — Sala Civil Colegiada',
    telefono: '618 813 07 98',
    ext:      '220',
    correo:   'ponencia1civilcolegiada@pjdgo.gob.mx',
  },
  {
    nombre:   'M. D. Julio César Piña de la Garza',
    cargo:    'Magistrado 2ª Ponencia y Presidente — Sala Civil Colegiada',
    telefono: '618 811 58 90',
    ext:      '122',
    correo:   'ponencia2civilcolegiada@pjdgo.gob.mx',
  },
  {
    nombre:   'M. D. Brenda Lizette Acevedo Castañeda',
    cargo:    'Magistrada 3ª Ponencia — Sala Civil Colegiada',
    telefono: '618 813 19 61',
    ext:      '124',
    correo:   'ponencia3civilcolegiada@pjdgo.gob.mx',
  },
  {
    nombre:   'Lic. Karina García Montelongo',
    cargo:    'Magistrada 1ª Sala Civil Unitaria',
    telefono: '618 811 29 09',
    ext:      '221',
    correo:   'primerasalacivilunitaria@pjdgo.gob.mx',
  },
  {
    nombre:   'Lic. Yésika Liliana Ramos Rodríguez',
    cargo:    'Magistrada 3ª Sala Civil Unitaria',
    telefono: '618 812 35 30',
    ext:      '217',
    correo:   'tercerasalacivilunitaria@pjdgo.gob.mx',
  },
  {
    nombre:   'M. D. Carlos Enrique Guzmán González',
    cargo:    'Magistrado 1ª Ponencia y Presidente — Sala Penal Colegiada',
    telefono: '618 811 29 78',
    ext:      '159',
    correo:   'primerasalapenalcolegiada@pjdgo.gob.mx',
  },
  {
    nombre:   'Lic. Iliana Angélica Alvarado Salinas',
    cargo:    'Magistrada 2ª Ponencia — Sala Penal Colegiada',
    telefono: '618 811 29 78',
    ext:      '158',
    correo:   'segundasalapenalcolegiada@pjdgo.gob.mx',
  },
  {
    nombre:   'Lic. Miriam Guadalupe Lanzarín Roldán',
    cargo:    'Magistrada 3ª Ponencia — Sala Penal Colegiada',
    telefono: '618 811 29 77',
    ext:      '161',
    correo:   'tercerasalapenalcolegiada@pjdgo.gob.mx',
  },
]

const plenoRegional: Miembro[] = [
  {
    nombre:   'Dr. Álvaro Rodríguez Alcalá',
    cargo:    'Magistrado 3ª Ponencia y Presidente — Sala Colegiada Mixta Regional',
    telefono: '871 456 58 27',
    ext:      '65827',
    correo:   'ponencia3colegiadagp@pjdgo.gob.mx',
  },
  {
    nombre:   'Dr. Luis Fernando Contreras Cortés',
    cargo:    'Magistrado 1ª Ponencia — Sala Colegiada Mixta Regional',
    telefono: '871 456 58 00',
    ext:      '65806',
    correo:   'ponencia1colegiadagp@pjdgo.gob.mx',
  },
  {
    nombre:   'Lic. Gloria Guadalupe Galván Román',
    cargo:    'Magistrada 2ª Ponencia — Sala Colegiada Mixta Regional',
    telefono: '871 456 58 42',
    ext:      '65842',
    correo:   'ponencia2colegiadagp@pjdgo.gob.mx',
  },
]

function AvatarPlaceholder() {
  return (
    <div style={{ width: '100%', aspectRatio: '1/1', background: '#CACECF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#9AA1A6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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

function MemberGrid({ members }: { members: Miembro[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: '1px', background: '#B8C0B8' }}>
      {members.map((m, i) => (
        <div key={i} className="bg-white flex flex-col">
          <AvatarPlaceholder />
          <div style={{ padding: '18px 18px 22px' }}>
            <p className="font-sans text-primary" style={{ fontSize: '14px', fontWeight: '500', lineHeight: '1.3em', marginBottom: '6px' }}>
              {m.nombre}
            </p>
            <p className="font-lato text-accent" style={{ fontSize: '11px', lineHeight: '1.55em', letterSpacing: '0.3px', marginBottom: '12px' }}>
              {m.cargo}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              {m.telefono && (
                <div className="flex items-center gap-1.5 text-overlay">
                  <IconPhone />
                  <span className="font-lato" style={{ fontSize: '11px', letterSpacing: '0.3px' }}>
                    {m.telefono}{m.ext && ` · Ext. ${m.ext}`}
                  </span>
                </div>
              )}
              {!m.telefono && m.ext && (
                <div className="flex items-center gap-1.5 text-overlay">
                  <IconPhone />
                  <span className="font-lato" style={{ fontSize: '11px' }}>Ext. {m.ext}</span>
                </div>
              )}
              {m.correo && (
                <a href={`mailto:${m.correo}`} className="flex items-center gap-1.5 text-overlay hover:text-primary transition-colors" style={{ textDecoration: 'none' }}>
                  <IconMail />
                  <span className="font-lato" style={{ fontSize: '11px', letterSpacing: '0.3px' }}>{m.correo}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
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
            { label: 'Tribunal Superior de Justicia', href: '/pjdgo/tribunal-superior-de-justicia' },
          ].map(({ label, href }) => (
            <span key={href} className="flex items-center gap-2">
              <Link href={href} className="font-lato text-overlay hover:text-primary transition-colors" style={{ fontSize: '12px', letterSpacing: '0.3px', textDecoration: 'none' }}>{label}</Link>
              <span className="text-overlay" style={{ fontSize: '12px' }}>›</span>
            </span>
          ))}
          <span className="font-lato text-primary" style={{ fontSize: '12px', letterSpacing: '0.3px' }}>Pleno</span>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '64px', paddingBottom: '48px', borderBottom: '1px solid #B8C0B8' }}>
        <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>Tribunal Superior de Justicia</p>
        <h1 className="font-monument text-primary" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '400', letterSpacing: '0.5px', lineHeight: '1.1em', marginBottom: '20px' }}>
          Pleno
        </h1>
        <p className="font-lato text-accent" style={{ fontSize: '16px', lineHeight: '1.7em', letterSpacing: '0.3px', maxWidth: '680px' }}>
          El Pleno del Tribunal Superior de Justicia es el órgano colegiado máximo de decisión jurisdiccional, integrado por los magistrados de las salas con sede en Victoria de Durango.
        </p>
      </div>

      {/* Members */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '48px', paddingBottom: '80px' }}>

        <p className="font-lato text-overlay uppercase mb-6" style={{ fontSize: '11px', letterSpacing: '2px' }}>
          Magistrados — Victoria de Durango
        </p>
        <MemberGrid members={pleno} />

        <div style={{ marginTop: '56px' }}>
          <p className="font-lato text-overlay uppercase mb-2" style={{ fontSize: '11px', letterSpacing: '2px' }}>
            Sala Colegiada Mixta Regional — Gómez Palacio
          </p>
          <p className="font-lato text-accent mb-6" style={{ fontSize: '13px', lineHeight: '1.6em', letterSpacing: '0.3px' }}>
            Palacio de Justicia (5° piso), Calle Morelos No. 326 Nte., C.P. 35000, Gómez Palacio, Dgo. Los magistrados de esta sala sesionan de forma regional.
          </p>
          <MemberGrid members={plenoRegional} />
        </div>

      </div>
    </div>
  )
}
