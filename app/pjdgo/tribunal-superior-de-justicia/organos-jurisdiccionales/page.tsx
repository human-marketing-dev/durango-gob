import type { Metadata } from 'next'
import Link from 'next/link'
import MapaDistritosWrapper from '@/components/mapa-distritos-wrapper'
import { distritos } from '@/lib/distritos'

export const metadata: Metadata = {
  title: 'Órganos Jurisdiccionales — Tribunal Superior de Justicia — PJDGO',
  description: 'Conoce los órganos jurisdiccionales y distritos judiciales del Tribunal Superior de Justicia del Poder Judicial del Estado de Durango.',
}

export default function Page() {
  return (
    <div className="bg-white">

      {/* Breadcrumbs */}
      <div style={{ borderBottom: '1px solid #B8C0B8' }}>
        <div className="max-w-content mx-auto site-px py-3 flex items-center gap-2 flex-wrap">
          {[
            { label: 'Inicio',                        href: '/' },
            { label: 'PJDGO',                         href: '/pjdgo' },
            { label: 'Tribunal Superior de Justicia', href: '/pjdgo/tribunal-superior-de-justicia/pleno' },
          ].map(({ label, href }) => (
            <span key={href} className="flex items-center gap-2">
              <Link
                href={href}
                className="font-lato text-overlay hover:text-primary transition-colors"
                style={{ fontSize: '12px', letterSpacing: '0.3px', textDecoration: 'none' }}
              >
                {label}
              </Link>
              <span className="text-overlay" style={{ fontSize: '12px' }}>›</span>
            </span>
          ))}
          <span className="font-lato text-primary" style={{ fontSize: '12px', letterSpacing: '0.3px' }}>
            Órganos Jurisdiccionales
          </span>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '64px', paddingBottom: '48px', borderBottom: '1px solid #B8C0B8' }}>
        <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>
          Tribunal Superior de Justicia
        </p>
        <h1
          className="font-monument text-primary"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '400', letterSpacing: '0.5px', lineHeight: '1.1em', marginBottom: '20px' }}
        >
          Órganos Jurisdiccionales
        </h1>
        <p className="font-lato text-accent" style={{ fontSize: '16px', lineHeight: '1.7em', letterSpacing: '0.3px', maxWidth: '680px' }}>
          El Poder Judicial del Estado de Durango cuenta con órganos jurisdiccionales distribuidos en distritos judiciales a lo largo del territorio estatal, garantizando el acceso a la justicia en todas las regiones.
        </p>
      </div>

      {/* Map + List section */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '56px', paddingBottom: '80px' }}>
        <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>
          Distribución Territorial
        </p>
        <h2
          className="font-monument text-primary"
          style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: '400', lineHeight: '1.2em', marginBottom: '12px' }}
        >
          Distritos Judiciales
        </h2>
        <p className="font-lato text-accent" style={{ fontSize: '15px', lineHeight: '1.7em', letterSpacing: '0.3px', maxWidth: '640px', marginBottom: '32px' }}>
          Haz clic en cada marcador para ver la sede y dirección del distrito judicial.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0" style={{ border: '1px solid #B8C0B8' }}>

          {/* Map — 2/3 */}
          <div className="lg:col-span-2" style={{ borderRight: '1px solid #B8C0B8' }}>
            <MapaDistritosWrapper />
          </div>

          {/* List — 1/3 */}
          <div className="lg:col-span-1" style={{ overflowY: 'auto', maxHeight: '560px' }}>
            {distritos.map((d, i) => (
              <div
                key={d.id}
                style={{
                  padding: '16px 20px',
                  borderBottom: i < distritos.length - 1 ? '1px solid #B8C0B8' : 'none',
                }}
              >
                <div className="flex items-start gap-3">
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      background: '#1B1A19',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  >
                    <span className="font-lato text-white" style={{ fontSize: '11px', fontWeight: '700' }}>
                      {d.id}
                    </span>
                  </div>
                  <div>
                    <p className="font-lato text-primary" style={{ fontSize: '13px', fontWeight: '600', marginBottom: '2px', lineHeight: '1.3em' }}>
                      {d.sede}
                    </p>
                    <p className="font-lato text-overlay" style={{ fontSize: '11px', letterSpacing: '0.5px', marginBottom: '6px' }}>
                      {d.nombre}
                    </p>
                    <p className="font-lato text-accent" style={{ fontSize: '12px', lineHeight: '1.55em', letterSpacing: '0.2px' }}>
                      {d.direccion}
                    </p>
                    {d.telefono && (
                      <p className="font-lato text-overlay" style={{ fontSize: '12px', marginTop: '4px' }}>
                        {d.telefono}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  )
}
