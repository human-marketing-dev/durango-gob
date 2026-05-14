'use client'

import { Map, MapMarker, MarkerContent, MarkerTooltip, MarkerPopup } from '@/components/ui/map'
import { distritos } from '@/lib/distritos'

function IconLocation() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export default function MapaDistritos() {
  return (
    <div style={{ width: '100%', height: '560px', border: '1px solid #B8C0B8', overflow: 'hidden' }}>
      <Map
        center={[-105.2, 24.8]}
        zoom={6.5}
      >
        {distritos.map(d => (
          <MapMarker key={d.id} longitude={d.lng} latitude={d.lat}>
            <MarkerContent>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  background: '#1B1A19',
                  border: '2px solid white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                  cursor: 'pointer',
                  transition: 'transform 150ms',
                  color: 'white',
                  fontFamily: 'var(--font-lato)',
                  fontSize: '12px',
                  fontWeight: '700',
                }}
              >
                {d.id}
              </div>
            </MarkerContent>
            <MarkerTooltip>
              {d.nombre} — {d.sede}
            </MarkerTooltip>
            <MarkerPopup>
              <div style={{ minWidth: '200px', padding: '4px 0' }}>
                <p style={{ fontSize: '10px', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase', color: '#9AA1A6', marginBottom: '4px' }}>
                  Distrito Judicial
                </p>
                <p style={{ fontSize: '14px', fontWeight: '600', color: '#1B1A19', marginBottom: '2px', lineHeight: '1.3em' }}>
                  {d.nombre}
                </p>
                <p style={{ fontSize: '13px', color: '#4A535A', marginBottom: '10px' }}>
                  Sede: {d.sede}
                </p>
                <div style={{ display: 'flex', gap: '6px', alignItems: 'flex-start', color: '#6B7280' }}>
                  <span style={{ marginTop: '2px', flexShrink: 0 }}><IconLocation /></span>
                  <p style={{ fontSize: '12px', lineHeight: '1.6em', margin: 0 }}>
                    {d.direccion}
                  </p>
                </div>
                {d.telefono && (
                  <p style={{ fontSize: '12px', color: '#6B7280', marginTop: '6px' }}>
                    Tel: {d.telefono}
                  </p>
                )}
              </div>
            </MarkerPopup>
          </MapMarker>
        ))}
      </Map>
    </div>
  )
}
