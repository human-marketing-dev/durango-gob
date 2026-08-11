import type { Metadata } from 'next'
import Link from 'next/link'
import ContactosTabs from '@/components/contactos-tabs'
import { organismosContacto } from '@/lib/contactos'

export const metadata: Metadata = {
  title: 'Directorio de Contacto — Poder Judicial del Estado de Durango',
  description: 'Directorio de contacto de los organismos que integran el Poder Judicial del Estado de Durango: Tribunal Superior de Justicia, Tribunal de Disciplina Judicial, Tribunal de Justicia Penal para Adolescentes y Órgano de Administración.',
}

function IconDownload() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
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
            { label: 'Inicio',   href: '/' },
            { label: 'Recursos', href: '/recursos' },
          ].map(({ label, href }) => (
            <span key={href} className="flex items-center gap-2">
              <Link href={href} className="font-lato text-overlay hover:text-primary transition-colors" style={{ fontSize: '12px', letterSpacing: '0.3px', textDecoration: 'none' }}>
                {label}
              </Link>
              <span className="text-overlay" style={{ fontSize: '12px' }}>›</span>
            </span>
          ))}
          <span className="font-lato text-primary" style={{ fontSize: '12px', letterSpacing: '0.3px' }}>Directorio de Contacto</span>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '64px', paddingBottom: '48px', borderBottom: '1px solid #B8C0B8' }}>
        <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>
          Recursos
        </p>
        <h1
          className="font-monument text-primary"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, letterSpacing: '0.5px', lineHeight: '1.1em', marginBottom: '20px' }}
        >
          Directorio de Contacto
        </h1>
        <p className="font-lato text-accent" style={{ fontSize: '16px', lineHeight: '1.7em', letterSpacing: '0.3px', maxWidth: '680px', marginBottom: '32px' }}>
          Directorio de contacto de los organismos que integran el Poder Judicial del Estado de Durango. Selecciona un organismo para ver los teléfonos, extensiones y correos de sus áreas.
        </p>
        <a
          href="/directorio/directorio-telefonico.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-lato transition-colors hover:bg-primary hover:text-white"
          style={{
            fontSize: '13px',
            fontWeight: 500,
            letterSpacing: '0.3px',
            padding: '12px 20px',
            border: '1px solid #1B1A19',
            color: '#1B1A19',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          <IconDownload />
          Descargar directorio telefónico
        </a>
      </div>

      {/* Directorio por organismo (pestañas) */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '48px', paddingBottom: '80px' }}>
        <ContactosTabs organismos={organismosContacto} />
      </div>

    </div>
  )
}
