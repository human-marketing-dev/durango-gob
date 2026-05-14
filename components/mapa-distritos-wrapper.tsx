'use client'

import dynamic from 'next/dynamic'

const MapaDistritos = dynamic(() => import('@/components/mapa-distritos'), {
  ssr: false,
  loading: () => (
    <div
      style={{
        width: '100%',
        height: '560px',
        border: '1px solid #B8C0B8',
        background: '#F4F6F4',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span className="font-lato text-overlay" style={{ fontSize: '13px', letterSpacing: '0.3px' }}>
        Cargando mapa…
      </span>
    </div>
  ),
})

export default function MapaDistritosWrapper() {
  return <MapaDistritos />
}
