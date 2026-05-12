import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pleno y Comisiones — Tribunal de Disciplina Judicial — Poder Judicial del Estado de Durango',
  description: 'Integrantes del Pleno del Tribunal de Disciplina Judicial del Estado de Durango.',
}

interface Miembro {
  nombre: string
  cargo: string
  correo: string
  cv?: string
  presidenta?: boolean
}

const pleno: Miembro[] = [
  {
    nombre:     'M. A. P. Irma Selene Soto Rodríguez',
    cargo:      'Magistrada Presidenta y titular de la Primera Ponencia',
    correo:     'primeraponencia.tdj@pjdgo.gob.mx',
    presidenta: true,
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

function IconMail() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
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

export default function Page() {
  const presidenta = pleno.find(m => m.presidenta)!
  const resto = pleno.filter(m => !m.presidenta)

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
              <Link href={href} className="font-lato text-overlay hover:text-primary transition-colors" style={{ fontSize: '12px', letterSpacing: '0.3px', textDecoration: 'none' }}>{label}</Link>
              <span className="text-overlay" style={{ fontSize: '12px' }}>›</span>
            </span>
          ))}
          <span className="font-lato text-primary" style={{ fontSize: '12px', letterSpacing: '0.3px' }}>Pleno y Comisiones</span>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '64px', paddingBottom: '48px', borderBottom: '1px solid #B8C0B8' }}>
        <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>Tribunal de Disciplina Judicial</p>
        <h1 className="font-monument text-primary" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '400', letterSpacing: '0.5px', lineHeight: '1.1em', marginBottom: '20px' }}>
          Pleno y Comisiones
        </h1>
        <p className="font-lato text-accent" style={{ fontSize: '16px', lineHeight: '1.7em', letterSpacing: '0.3px', maxWidth: '680px' }}>
          El Pleno del Tribunal de Disciplina Judicial está integrado por cinco magistrados y es el órgano colegiado responsable de velar por la conducta y el desempeño de los servidores públicos del Poder Judicial del Estado de Durango.
        </p>
      </div>

      {/* Members */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '48px', paddingBottom: '80px' }}>

        {/* Presidenta — featured */}
        <p className="font-lato text-overlay uppercase mb-6" style={{ fontSize: '11px', letterSpacing: '2px' }}>Presidencia</p>
        <div className="flex flex-col sm:flex-row" style={{ border: '1px solid #B8C0B8', marginBottom: '56px' }}>
          <div className="w-full sm:w-48" style={{ flexShrink: 0 }}>
            <AvatarPlaceholder large />
          </div>
          <div style={{ padding: '32px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <span className="font-lato text-white bg-primary uppercase inline-block" style={{ fontSize: '10px', fontWeight: '600', letterSpacing: '1.5px', padding: '4px 10px', marginBottom: '16px', alignSelf: 'flex-start' }}>
              Magistrada Presidenta
            </span>
            <h2 className="font-monument text-primary" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', fontWeight: '400', lineHeight: '1.2em', marginBottom: '8px' }}>
              {presidenta.nombre}
            </h2>
            <p className="font-lato text-accent" style={{ fontSize: '13px', lineHeight: '1.6em', letterSpacing: '0.3px', marginBottom: '16px' }}>
              {presidenta.cargo}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <a href={`mailto:${presidenta.correo}`} className="flex items-center gap-1.5 text-overlay hover:text-primary transition-colors" style={{ textDecoration: 'none' }}>
                <IconMail />
                <span className="font-lato" style={{ fontSize: '12px' }}>{presidenta.correo}</span>
              </a>
              <a href={presidenta.cv ?? '#'} download className="flex items-center gap-1.5 text-overlay hover:text-primary transition-colors" style={{ textDecoration: 'none' }}>
                <IconDownload />
                <span className="font-lato uppercase" style={{ fontSize: '10px', letterSpacing: '1px', fontWeight: '500' }}>Currículum</span>
              </a>
            </div>
          </div>
        </div>

        {/* Resto de magistrados */}
        <p className="font-lato text-overlay uppercase mb-6" style={{ fontSize: '11px', letterSpacing: '2px' }}>Magistrados</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: '1px', background: '#B8C0B8' }}>
          {resto.map((m, i) => (
            <div key={i} className="bg-white flex flex-col">
              <AvatarPlaceholder />
              <div style={{ padding: '18px 18px 22px' }}>
                <p className="font-sans text-primary" style={{ fontSize: '14px', fontWeight: '500', lineHeight: '1.3em', marginBottom: '6px' }}>
                  {m.nombre}
                </p>
                <p className="font-lato text-accent" style={{ fontSize: '11px', lineHeight: '1.55em', letterSpacing: '0.3px', marginBottom: '12px' }}>
                  {m.cargo}
                </p>
                <a href={`mailto:${m.correo}`} className="flex items-center gap-1.5 text-overlay hover:text-primary transition-colors" style={{ textDecoration: 'none' }}>
                  <IconMail />
                  <span className="font-lato" style={{ fontSize: '11px', letterSpacing: '0.3px' }}>{m.correo}</span>
                </a>
                <a href={m.cv ?? '#'} download className="flex items-center gap-1.5 text-overlay hover:text-primary transition-colors" style={{ textDecoration: 'none', marginTop: '4px' }}>
                  <IconDownload />
                  <span className="font-lato uppercase" style={{ fontSize: '10px', letterSpacing: '1px', fontWeight: '500' }}>Currículum</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
