'use client'

import { useState } from 'react'
import Organigrama from '@/components/organigrama'
import type { Organigrama as OrganigramaTipo } from '@/lib/organigrama'

export default function OrganigramasTabs({ organigramas }: { organigramas: OrganigramaTipo[] }) {
  const [active, setActive] = useState(0)
  const actual = organigramas[active]

  return (
    <div>
      {/* Pestañas */}
      <div role="tablist" aria-label="Organigramas" className="flex flex-wrap gap-2" style={{ marginBottom: '32px' }}>
        {organigramas.map((org, i) => {
          const selected = i === active
          return (
            <button
              key={org.nombre}
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(i)}
              className="font-lato uppercase transition-colors"
              style={{
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '1px',
                padding: '10px 18px',
                border: `1px solid ${selected ? '#1B1A19' : '#B8C0B8'}`,
                background: selected ? '#1B1A19' : 'white',
                color: selected ? 'white' : '#1B1A19',
                cursor: selected ? 'default' : 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              {org.nombre}
            </button>
          )
        })}
      </div>

      {/* Organigrama activo */}
      <div role="tabpanel">
        {actual.arboles.map((arbol, i) => (
          <div key={i} style={{ marginBottom: actual.arboles.length > 1 ? '40px' : 0 }}>
            {arbol.titulo && (
              <p className="font-lato text-overlay uppercase mb-4" style={{ fontSize: '11px', letterSpacing: '1.5px', fontWeight: 600 }}>
                {arbol.titulo}
              </p>
            )}
            <Organigrama root={arbol.raiz} />
          </div>
        ))}
      </div>
    </div>
  )
}
