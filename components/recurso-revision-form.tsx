'use client'

import { useState } from 'react'

function IconCheck() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

/**
 * Campos del formulario. Para agregar o quitar un campo, edita este arreglo:
 * `half: true` → media columna (van de a dos por fila); `half: false` → ancho completo.
 * NOTA: campos propuestos, pendientes de validación con el cliente.
 */
interface Campo {
  name: string
  label: string
  type: 'text' | 'email' | 'textarea'
  required: boolean
  placeholder: string
  half: boolean
}

const CAMPOS: Campo[] = [
  { name: 'nombre', label: 'Nombre completo', type: 'text', required: true, placeholder: 'Tu nombre completo', half: true },
  { name: 'correo', label: 'Correo electrónico', type: 'email', required: true, placeholder: 'correo@ejemplo.com', half: true },
  { name: 'folio', label: 'Número de folio de la solicitud relacionada', type: 'text', required: false, placeholder: 'Ej. 012345600123456 (si aplica)', half: false },
  { name: 'descripcion', label: 'Descripción o motivo del recurso de revisión', type: 'textarea', required: true, placeholder: 'Describe el motivo por el que interpones el recurso de revisión…', half: false },
]

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-lato)',
  fontSize: '11px',
  fontWeight: '600',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  color: '#1B1A19',
  marginBottom: '6px',
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  fontFamily: 'var(--font-lato)',
  fontSize: '14px',
  color: '#1B1A19',
  background: 'white',
  border: '1px solid #B8C0B8',
  borderRadius: 0,
  padding: '10px 14px',
  outline: 'none',
  letterSpacing: '0.3px',
  boxSizing: 'border-box',
}

export default function RecursoRevisionForm() {
  const [enviado, setEnviado] = useState(false)
  const [enviando, setEnviando] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setEnviando(true)
    await new Promise(r => setTimeout(r, 1300))
    setEnviando(false)
    setEnviado(true)
  }

  if (enviado) {
    return (
      <div style={{ border: '1px solid #B8C0B8', padding: '56px 40px', textAlign: 'center', maxWidth: '560px' }}>
        <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#1B1A19', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: 'white' }}>
          <IconCheck />
        </div>
        <h3 className="font-monument text-primary" style={{ fontSize: '1.3rem', fontWeight: '400', marginBottom: '12px' }}>
          Recurso de revisión registrado
        </h3>
        <p className="font-lato text-accent" style={{ fontSize: '14px', lineHeight: '1.75em', letterSpacing: '0.3px', marginBottom: '24px' }}>
          Tu recurso de revisión ha sido recibido y será turnado a la autoridad competente. Recibirás una respuesta en el correo indicado.
        </p>
        <button
          onClick={() => setEnviado(false)}
          className="font-lato text-primary uppercase hover:text-accent transition-colors"
          style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '1.5px', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          Presentar otro recurso
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '720px' }}>
      <div className="grid grid-cols-1 sm:grid-cols-2" style={{ rowGap: '24px', columnGap: '16px' }}>
        {CAMPOS.map(campo => (
          <div key={campo.name} className={campo.half ? '' : 'sm:col-span-2'}>
            <label style={labelStyle}>
              {campo.label} {campo.required && <span style={{ color: '#991B1B' }}>*</span>}
            </label>
            {campo.type === 'textarea' ? (
              <textarea
                name={campo.name}
                required={campo.required}
                rows={6}
                placeholder={campo.placeholder}
                style={{ ...inputStyle, resize: 'vertical', lineHeight: '1.6em' }}
              />
            ) : (
              <input
                name={campo.name}
                type={campo.type}
                required={campo.required}
                placeholder={campo.placeholder}
                style={inputStyle}
              />
            )}
          </div>
        ))}
      </div>

      {/* Submit */}
      <div className="flex items-center gap-4" style={{ marginTop: '24px' }}>
        <button
          type="submit"
          disabled={enviando}
          className="font-lato text-white bg-primary hover:bg-accent transition-colors uppercase"
          style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '1.5px', padding: '14px 32px', border: 'none', cursor: enviando ? 'not-allowed' : 'pointer', opacity: enviando ? 0.7 : 1 }}
        >
          {enviando ? 'Enviando…' : 'Presentar recurso'}
        </button>
        <p className="font-lato text-overlay" style={{ fontSize: '11px', letterSpacing: '0.3px' }}>
          <span style={{ color: '#991B1B' }}>*</span> Campos obligatorios
        </p>
      </div>
    </form>
  )
}
