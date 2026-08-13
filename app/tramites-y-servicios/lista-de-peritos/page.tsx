import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lista de Peritos — Trámites y Servicios — Poder Judicial del Estado de Durango',
  description: 'Consulta y descarga la lista oficial de peritos del Poder Judicial del Estado de Durango.',
}

/**
 * Documentos publicados. Para agregar/quitar una lista, edita este arreglo;
 * el archivo debe estar en /public con nombre limpio (sin espacios).
 */
const documentos = [
  { titulo: 'Lista Oficial de Peritos 2024 — Durango', archivo: 'lista-peritos-durango-2024.pdf' },
  { titulo: 'Lista Oficial de Peritos 2024 — Gómez Palacio', archivo: 'lista-peritos-gomez-palacio-2024.pdf' },
]

function IconDownload() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}

function IconExternal() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

export default function Page() {
  return (
    <div className="max-w-content mx-auto site-px" style={{ paddingTop: '64px', paddingBottom: '80px' }}>
      <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>
        Trámites y Servicios
      </p>
      <h1
        className="font-monument text-primary"
        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, letterSpacing: '0.5px', lineHeight: '1.1em', marginBottom: '20px' }}
      >
        Lista de Peritos
      </h1>
      <p className="font-lato text-accent" style={{ fontSize: '16px', lineHeight: '1.7em', letterSpacing: '0.3px', maxWidth: '680px', marginBottom: '48px' }}>
        Consulta en línea o descarga las listas oficiales de peritos del Poder Judicial del Estado de Durango.
      </p>

      {documentos.map((doc) => {
        const url = `/${doc.archivo}`
        return (
          <section key={doc.archivo} style={{ marginBottom: '56px' }}>
            <h2
              className="font-monument text-primary"
              style={{ fontSize: 'clamp(1.3rem, 2.2vw, 1.6rem)', fontWeight: 400, letterSpacing: '0.3px', lineHeight: '1.2em', marginBottom: '16px' }}
            >
              {doc.titulo}
            </h2>

            {/* Acciones */}
            <div className="flex flex-wrap gap-3" style={{ marginBottom: '16px' }}>
              <a
                href={url}
                download
                className="inline-flex items-center gap-2 font-lato text-white bg-primary hover:bg-accent transition-colors"
                style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.3px', padding: '11px 20px', textDecoration: 'none', whiteSpace: 'nowrap' }}
              >
                <IconDownload />
                Descargar (PDF)
              </a>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-lato transition-colors hover:bg-primary hover:text-white"
                style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.3px', padding: '11px 20px', border: '1px solid #1B1A19', color: '#1B1A19', textDecoration: 'none', whiteSpace: 'nowrap' }}
              >
                <IconExternal />
                Abrir en nueva pestaña
              </a>
            </div>

            {/* Visor embebido */}
            <div style={{ border: '1px solid #B8C0B8', overflow: 'hidden' }}>
              <iframe
                title={doc.titulo}
                src={`${url}#view=FitH`}
                style={{ width: '100%', height: '75vh', minHeight: '480px', border: 'none', display: 'block' }}
              />
            </div>
            <p className="font-lato text-overlay" style={{ fontSize: '12px', lineHeight: '1.6em', letterSpacing: '0.3px', marginTop: '8px' }}>
              Si el documento no se muestra en tu dispositivo, ábrelo en una pestaña nueva o descárgalo con los botones de arriba.
            </p>
          </section>
        )
      })}
    </div>
  )
}
