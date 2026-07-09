import type { Metadata } from 'next'
import Link from 'next/link'
import { nav, isNavSection } from '@/lib/nav'
import {
  EXTRA_PAGES,
  STATUS_META,
  sectionHref,
  statusCounts,
  statusOf,
  type PageStatus,
} from '@/lib/page-status'

export const metadata: Metadata = {
  title: 'Avance del sitio',
  description: 'Mapa de sitio con el estado de construcción de cada página.',
  robots: { index: false, follow: false },
}

const ORDER: PageStatus[] = ['listo', 'armado', 'pendiente']

function Dot({ status }: { status: PageStatus }) {
  return (
    <span
      aria-hidden
      style={{
        width: '10px',
        height: '10px',
        borderRadius: '9999px',
        flexShrink: 0,
        background: STATUS_META[status].color,
        boxShadow: status === 'pendiente' ? 'inset 0 0 0 1px #A2ABA2' : 'none',
      }}
    />
  )
}

function Row({ label, href, depth }: { label: string; href: string; depth: number }) {
  const status = statusOf(href)
  return (
    <li
      className="flex items-center gap-3 py-3"
      style={{ borderTop: '1px solid #E4E7E4', paddingLeft: `${depth * 24}px` }}
    >
      <Dot status={status} />
      <Link
        href={href}
        className="font-lato text-primary hover:text-accent transition-colors"
        style={{ fontSize: depth === 0 ? '16px' : '15px', letterSpacing: '0.3px', textDecoration: 'none', fontWeight: depth === 0 ? 700 : 400 }}
      >
        {label}
      </Link>
      <span className="font-lato text-overlay hidden md:inline" style={{ fontSize: '12px', letterSpacing: '0.3px' }}>
        {href}
      </span>
      <span
        className="font-lato ml-auto text-right"
        style={{ fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: STATUS_META[status].color, whiteSpace: 'nowrap' }}
      >
        {STATUS_META[status].label}
      </span>
    </li>
  )
}

export default function Page() {
  const counts = statusCounts()
  const pct = (n: number) => Math.round((n / counts.total) * 100)

  return (
    <div className="bg-white">

      {/* Header */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '64px', paddingBottom: '40px', borderBottom: '1px solid #B8C0B8' }}>
        <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>
          Documento de trabajo
        </p>
        <h1
          className="font-monument text-primary"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, letterSpacing: '0.5px', lineHeight: '1.1em', marginBottom: '20px' }}
        >
          Avance del sitio
        </h1>
        <p className="font-lato text-accent" style={{ fontSize: '16px', lineHeight: '1.7em', letterSpacing: '0.3px', maxWidth: '680px' }}>
          Mapa completo del sitio con el estado de construcción de cada una de las {counts.total} páginas.
        </p>
      </div>

      {/* Resumen */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '48px' }}>
        <div className="flex" style={{ height: '8px', width: '100%', marginBottom: '28px' }}>
          {ORDER.map(status => (
            counts[status] > 0 && (
              <div
                key={status}
                style={{ width: `${pct(counts[status])}%`, background: STATUS_META[status].color }}
                title={`${STATUS_META[status].label}: ${counts[status]}`}
              />
            )
          ))}
        </div>

        <ul className="grid gap-6 md:grid-cols-3" style={{ paddingBottom: '48px' }}>
          {ORDER.map(status => (
            <li key={status} style={{ borderTop: `2px solid ${STATUS_META[status].color}`, paddingTop: '16px' }}>
              <div className="flex items-baseline gap-3">
                <span className="font-monument text-primary" style={{ fontSize: '32px', fontWeight: 400, lineHeight: 1 }}>
                  {counts[status]}
                </span>
                <span className="font-lato text-overlay" style={{ fontSize: '13px', letterSpacing: '0.3px' }}>
                  {pct(counts[status])}%
                </span>
              </div>
              <p className="font-lato text-primary" style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '0.3px', marginTop: '10px' }}>
                {STATUS_META[status].label}
              </p>
              <p className="font-lato text-accent" style={{ fontSize: '13px', lineHeight: '1.6em', letterSpacing: '0.3px', marginTop: '4px' }}>
                {STATUS_META[status].description}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Mapa de sitio */}
      <div className="max-w-content mx-auto site-px" style={{ paddingBottom: '80px' }}>
        {nav.map(entry => (
          <section key={entry.href} style={{ marginBottom: '48px' }}>
            <ul style={{ borderBottom: '1px solid #E4E7E4' }}>
              <Row label={entry.label} href={entry.href} depth={0} />
              {entry.children?.map(child =>
                isNavSection(child) ? (
                  <li key={child.label}>
                    <ul>
                      <Row label={child.label} href={sectionHref(child)} depth={1} />
                      {child.children.map(leaf => (
                        <Row key={leaf.href} label={leaf.label} href={leaf.href} depth={2} />
                      ))}
                    </ul>
                  </li>
                ) : (
                  <Row key={child.href} label={child.label} href={child.href} depth={1} />
                )
              )}
            </ul>
          </section>
        ))}

        <section>
          <p className="font-lato text-overlay uppercase" style={{ fontSize: '11px', letterSpacing: '2px', marginBottom: '4px' }}>
            Fuera del menú
          </p>
          <ul style={{ borderBottom: '1px solid #E4E7E4' }}>
            {EXTRA_PAGES.map(page => (
              <Row key={page.href} label={page.label} href={page.href} depth={0} />
            ))}
          </ul>
        </section>
      </div>

    </div>
  )
}
