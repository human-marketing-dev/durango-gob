import type { Directorio } from '@/lib/directorio'

// ── Iconos ───────────────────────────────────────────────────────────────────

function IconMail() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

function IconPhone() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.5 16z" />
    </svg>
  )
}

function IconLocation() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function Avatar() {
  return (
    <div
      style={{ width: '64px', height: '64px', background: '#CACECF', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9AA1A6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    </div>
  )
}

// ── Componente ────────────────────────────────────────────────────────────────

/**
 * Bloque reutilizable de "Titular + contacto" para las páginas de organismos
 * (INDEPU, CECOFAM, Universidad Judicial, etc.). Los datos viven en
 * `lib/directorio.ts`; aquí solo se renderizan.
 *
 * - Cargo variable (Director General / Coordinadora / Rector / …).
 * - Teléfonos como links `tel:` (la extensión se muestra como texto, fuera del link).
 * - Correo como link `mailto:`.
 * - Mapa embebido opcional (patrón del sitio: iframe de Google Maps `output=embed`).
 * - Campos ausentes simplemente no se renderizan (estructura lista para completar).
 */
export default function DirectorioContacto({
  data,
  titulo = 'Dirección e información de contacto',
  paddingBottom = '80px',
  borderBottom = false,
}: {
  data: Directorio
  titulo?: string
  /** Padding inferior de la sección. '80px' si es la última sección; '56px' si va en medio. */
  paddingBottom?: string
  /** Muestra la línea divisoria inferior (cuando la sección no es la última). */
  borderBottom?: boolean
}) {
  const { titular, contacto } = data
  const { direccion, telefonos, correo, mapaQuery } = contacto

  return (
    <div
      className="max-w-content mx-auto site-px"
      style={{ paddingTop: '56px', paddingBottom, ...(borderBottom ? { borderBottom: '1px solid #B8C0B8' } : {}) }}
    >
      <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>
        Contacto
      </p>
      <h2
        className="font-monument text-primary"
        style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', fontWeight: '400', lineHeight: '1.2em', marginBottom: '28px' }}
      >
        {titulo}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2" style={{ gap: '1px', background: '#B8C0B8' }}>
        {/* Titular */}
        <div className="bg-white" style={{ padding: '32px 36px' }}>
          <p className="font-lato text-overlay uppercase mb-4" style={{ fontSize: '11px', letterSpacing: '2px' }}>
            {titular.cargo}
          </p>
          <div className="flex items-start gap-4">
            <Avatar />
            <div>
              <p className="font-monument text-primary" style={{ fontSize: '1.1rem', fontWeight: '400', lineHeight: '1.3em', marginBottom: '4px' }}>
                {titular.nombre}
              </p>
              <p className="font-lato text-overlay" style={{ fontSize: '12px', letterSpacing: '0.5px' }}>
                {titular.cargo}
              </p>
              {titular.grado && (
                <p className="font-lato text-accent" style={{ fontSize: '13px', lineHeight: '1.6em', marginTop: '4px' }}>
                  {titular.grado}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Información de contacto */}
        <div className="bg-white" style={{ padding: '32px 36px' }}>
          <p className="font-lato text-overlay uppercase mb-4" style={{ fontSize: '11px', letterSpacing: '2px' }}>
            Información de contacto
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {direccion && direccion.length > 0 && (
              <div className="flex items-start gap-2 text-overlay">
                <span style={{ marginTop: '2px', flexShrink: 0 }}><IconLocation /></span>
                <span className="font-lato" style={{ fontSize: '13px', lineHeight: '1.65em', letterSpacing: '0.3px' }}>
                  {direccion.map((linea, i) => (
                    <span key={i}>
                      {linea}
                      {i < direccion.length - 1 && <br />}
                    </span>
                  ))}
                </span>
              </div>
            )}

            {telefonos && telefonos.length > 0 && (
              <div className="flex items-start gap-2 text-overlay">
                <span style={{ marginTop: '2px', flexShrink: 0 }}><IconPhone /></span>
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  {telefonos.map((t) => (
                    <span key={t.tel + (t.ext ?? '')} className="font-lato" style={{ fontSize: '13px', letterSpacing: '0.3px' }}>
                      <a href={`tel:${t.tel}`} className="hover:text-primary transition-colors" style={{ textDecoration: 'none' }}>
                        {t.display}
                      </a>
                      {t.ext && <span> · Ext. {t.ext}</span>}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {correo && (
              <a
                href={`mailto:${correo}`}
                className="flex items-center gap-2 text-overlay hover:text-primary transition-colors"
                style={{ textDecoration: 'none' }}
              >
                <IconMail />
                <span className="font-lato" style={{ fontSize: '13px', letterSpacing: '0.3px' }}>
                  {correo}
                </span>
              </a>
            )}
          </div>
        </div>

        {/* Mapa (patrón del sitio: iframe de Google Maps embed) */}
        {mapaQuery && (
          <div className="bg-white overflow-hidden lg:col-span-2" style={{ minHeight: '280px' }}>
            <iframe
              title={`Ubicación · ${titular.cargo}`}
              src={`https://maps.google.com/maps?q=${mapaQuery}&output=embed&z=16`}
              width="100%"
              height="100%"
              style={{ border: 'none', display: 'block', minHeight: '280px' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        )}
      </div>
    </div>
  )
}
