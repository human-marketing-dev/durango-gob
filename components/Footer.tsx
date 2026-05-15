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

            {/* Social media */}
            <div className="flex items-center gap-3">
              <a href="https://www.facebook.com/PJDGO/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-blue-el hover:text-white transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://x.com/PJDGO" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="text-blue-el hover:text-white transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://www.youtube.com/@pjdgo4420" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-blue-el hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
                </svg>
              </a>
            </div>
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
