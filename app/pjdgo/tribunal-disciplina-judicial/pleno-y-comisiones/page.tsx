import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pleno y Comisiones — Tribunal de Disciplina Judicial — Poder Judicial del Estado de Durango',
  description: 'Integrantes del Pleno del Tribunal de Disciplina Judicial del Estado de Durango.',
}

const pleno = [
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

function IconMail() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
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
        <p className="font-lato text-overlay uppercase mb-6" style={{ fontSize: '11px', letterSpacing: '2px' }}>
          Magistrados
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: '1px', background: '#B8C0B8' }}>
          {pleno.map((m, i) => (
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
