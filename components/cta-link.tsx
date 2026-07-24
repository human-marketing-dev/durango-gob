import Link from 'next/link'

// ── Iconos ───────────────────────────────────────────────────────────────────

function IconArrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

function IconExternalLink() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

// ── Componente ────────────────────────────────────────────────────────────────

const CLASS = 'inline-flex items-center gap-2 font-lato text-white bg-primary hover:bg-accent transition-colors uppercase'
const STYLE: React.CSSProperties = {
  fontSize: '11px',
  fontWeight: 600,
  letterSpacing: '1.5px',
  padding: '14px 24px',
  textDecoration: 'none',
}

/**
 * Botón/CTA de navegación con el estilo sólido del sitio (cuadrado, primario).
 * - Interno (por defecto): usa `Link` de Next y muestra una flecha →.
 * - Externo (`external`): abre en pestaña nueva (target=_blank, rel seguro) y
 *   muestra el ícono de enlace externo.
 */
export default function CtaLink({
  href,
  external = false,
  children,
}: {
  href: string
  external?: boolean
  children: React.ReactNode
}) {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={CLASS} style={STYLE}>
        {children}
        <IconExternalLink />
      </a>
    )
  }
  return (
    <Link href={href} className={CLASS} style={STYLE}>
      {children}
      <IconArrow />
    </Link>
  )
}
