import Link from 'next/link'
import Image from 'next/image'
import { nav, isNavSection, type NavLeaf, type NavSection } from '@/lib/nav'

export default function Footer() {
  return (
    <footer className="bg-primary" style={{ borderTop: '1px solid #4A535A', fontFamily: 'var(--font-lato)' }}>

      {/* Main grid */}
      <div className="max-w-content mx-auto site-px py-14">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">

          {/* Brand column */}
          <div className="md:col-span-1 flex flex-col gap-4">
            <div style={{ position: 'relative', width: '52px', height: '52px', flexShrink: 0, opacity: 0.9 }}>
              <Image src="/logo-blanco.webp" alt="PJDGO" fill sizes="52px" style={{ objectFit: 'contain' }} />
            </div>
            <p
              className="text-white uppercase"
              style={{ fontFamily: 'var(--font-open-sans)', fontSize: '13px', fontWeight: '300', letterSpacing: '1.5px', lineHeight: '1.6em' }}
            >
              Poder Judicial<br />del Estado de Durango
            </p>
            <p className="text-blue-el" style={{ fontSize: '12px', lineHeight: '1.8em', letterSpacing: '0.3px' }}>
              Victoria de Durango, Dgo.<br />México, C.P. 34000
            </p>
          </div>

          {/* Nav columns */}
          {nav.slice(0, 4).map(entry => (
            <div key={entry.href} className="flex flex-col gap-2.5">
              <p
                className="text-white uppercase"
                style={{
                  fontSize: '11px',
                  fontWeight: '500',
                  letterSpacing: '1.5px',
                  paddingBottom: '8px',
                  borderBottom: '1px solid #4A535A',
                  marginBottom: '4px',
                }}
              >
                {entry.label}
              </p>
              {(entry.children ?? []).map(child => {
                if (isNavSection(child)) {
                  const section = child as NavSection
                  const href = section.href ?? section.children[0]?.href ?? '#'
                  return (
                    <Link
                      key={section.label}
                      href={href}
                      className="text-blue-el hover:text-white transition-colors"
                      style={{ fontSize: '13px', lineHeight: '1.4em', letterSpacing: '0.3px', textDecoration: 'none' }}
                    >
                      {section.label}
                    </Link>
                  )
                }
                const leaf = child as NavLeaf
                return (
                  <Link
                    key={leaf.href}
                    href={leaf.href}
                    className="text-blue-el hover:text-white transition-colors"
                    style={{ fontSize: '13px', lineHeight: '1.4em', letterSpacing: '0.3px', textDecoration: 'none' }}
                  >
                    {leaf.label}
                  </Link>
                )
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid #4A535A' }}>
        <div
          className="max-w-content mx-auto site-px py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
        >
          <span className="text-overlay" style={{ fontSize: '11px', letterSpacing: '0.3px' }}>
            © {new Date().getFullYear()} Poder Judicial del Estado de Durango. Todos los derechos reservados.
          </span>
          <div className="flex items-center gap-3">
            {[
              { label: 'Aviso de Privacidad', href: '/transparencia/avisos-de-privacidad' },
              { label: 'Términos de Uso', href: '/terminos-de-uso' },
              { label: 'Accesibilidad', href: '#' },
            ].map(({ label, href }, i, arr) => (
              <span key={label} className="flex items-center gap-3">
                <Link
                  href={href}
                  className="text-overlay hover:text-white transition-colors"
                  style={{ fontSize: '11px', letterSpacing: '0.3px', textDecoration: 'none' }}
                >
                  {label}
                </Link>
                {i < arr.length - 1 && <span className="text-accent" style={{ fontSize: '10px' }}>·</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
