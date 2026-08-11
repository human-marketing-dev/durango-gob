import type { ContactoSeccion } from '@/lib/contactos'

// ── Iconos ───────────────────────────────────────────────────────────────────

function IconPhone() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.5 16z" />
    </svg>
  )
}

function IconMail() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

function IconLocation() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

// ── Componente ────────────────────────────────────────────────────────────────

/**
 * Renderiza el directorio de un organismo: sus secciones (con título, domicilio
 * y conmutador opcionales) y las tarjetas de cada persona con teléfono, ext. y
 * correo. Presentacional puro: lo usan las páginas de Contacto individuales
 * (server) y el directorio consolidado con pestañas (client).
 */
export default function ContactoSecciones({ secciones }: { secciones: ContactoSeccion[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
      {secciones.map((seccion) => (
        <div key={seccion.titulo}>

          <div style={{ borderBottom: '2px solid #1B1A19', paddingBottom: '10px', marginBottom: '4px' }}>
            <h2 className="font-sans text-primary" style={{ fontSize: '14px', fontWeight: '600', letterSpacing: '1.2px', textTransform: 'uppercase' }}>
              {seccion.titulo}
            </h2>
          </div>

          {seccion.domicilio && (
            <div className="flex items-start gap-2 text-overlay mt-3 mb-2">
              <span className="mt-0.5"><IconLocation /></span>
              <span className="font-lato" style={{ fontSize: '12px', lineHeight: '1.6em', letterSpacing: '0.3px' }}>
                {seccion.domicilio}
              </span>
            </div>
          )}

          {seccion.conmutador && (
            <div className="flex items-start gap-2 text-overlay mt-2 mb-2">
              <span className="mt-0.5"><IconPhone /></span>
              <span className="font-lato" style={{ fontSize: '12px', lineHeight: '1.6em', letterSpacing: '0.3px' }}>
                Conmutador: {seccion.conmutador}
              </span>
            </div>
          )}

          <div style={{ display: 'grid', gap: '1px', background: '#B8C0B8', marginTop: '4px' }}>
            {seccion.personas.map((p, i) => (
              <div key={i} className="bg-white" style={{ padding: '20px 24px' }}>
                <div className="flex flex-col gap-1 mb-3">
                  <span className="font-sans text-primary" style={{ fontSize: '15px', fontWeight: '500', lineHeight: '1.3em' }}>
                    {p.nombre}
                  </span>
                  <span className="font-lato text-accent" style={{ fontSize: '12px', letterSpacing: '0.3px' }}>
                    {p.cargo}
                  </span>
                </div>

                <div className="flex flex-wrap gap-x-6 gap-y-1.5">
                  {p.telefono && (
                    <div className="flex items-center gap-1.5 text-overlay">
                      <IconPhone />
                      <span className="font-lato" style={{ fontSize: '12px', letterSpacing: '0.3px' }}>
                        {p.telefono}
                        {p.ext && <span> · Ext. {p.ext}</span>}
                      </span>
                    </div>
                  )}
                  {!p.telefono && p.ext && (
                    <div className="flex items-center gap-1.5 text-overlay">
                      <IconPhone />
                      <span className="font-lato" style={{ fontSize: '12px', letterSpacing: '0.3px' }}>
                        Ext. {p.ext}
                      </span>
                    </div>
                  )}
                  {p.correo && (
                    <a
                      href={`mailto:${p.correo}`}
                      className="flex items-center gap-1.5 text-overlay hover:text-primary transition-colors"
                      style={{ textDecoration: 'none' }}
                    >
                      <IconMail />
                      <span className="font-lato" style={{ fontSize: '12px', letterSpacing: '0.3px' }}>
                        {p.correo}
                      </span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      ))}
    </div>
  )
}
