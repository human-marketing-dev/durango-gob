'use client'

import { useState } from 'react'
import ContactoSecciones from '@/components/contacto-secciones'
import type { OrganismoContacto } from '@/lib/contactos'

/**
 * Directorio consolidado con pestañas: una por organismo. Al elegir una pestaña
 * se muestra su directorio (mismas secciones que su página de Contacto).
 */
export default function ContactosTabs({ organismos }: { organismos: OrganismoContacto[] }) {
  const [active, setActive] = useState(0)

  return (
    <div>
      {/* Pestañas */}
      <div
        role="tablist"
        aria-label="Organismos"
        className="flex flex-wrap gap-2"
        style={{ marginBottom: '40px' }}
      >
        {organismos.map((org, i) => {
          const selected = i === active
          return (
            <button
              key={org.slug}
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
              {org.nombreCorto}
            </button>
          )
        })}
      </div>

      {/* Directorio del organismo activo */}
      <div role="tabpanel">
        <ContactoSecciones secciones={organismos[active].secciones} />
      </div>
    </div>
  )
}
