import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Directorio',
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
    <div className="max-w-content mx-auto site-px" style={{ paddingTop: '64px', paddingBottom: '80px' }}>
      <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>
        Recursos
      </p>
      <h1
        className="font-monument text-primary"
        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, letterSpacing: '0.5px', lineHeight: '1.1em', marginBottom: '20px' }}
      >
        Directorio
      </h1>
      <p className="font-lato text-accent" style={{ fontSize: '16px', lineHeight: '1.7em', letterSpacing: '0.3px', maxWidth: '680px', marginBottom: '32px' }}>
        Consulta el directorio telefónico del Poder Judicial del Estado de Durango.
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
  )
}
