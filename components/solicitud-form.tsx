'use client'

import { useState, useRef } from 'react'

function IconUpload() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  )
}

function IconFile() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  )
}

function IconX() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

function IconCheck() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

const TIPOS = [
  'Solicitud de Acceso a la Información Pública',
  'Solicitud de Corrección de Datos Personales',
  'Solicitud de Acceso a Datos Personales',
  'Solicitud de Cancelación de Datos Personales',
  'Solicitud de Oposición al Tratamiento de Datos',
  'Otro',
]

export default function SolicitudForm() {
  const fileRef = useRef<HTMLInputElement>(null)
  const [archivo, setArchivo] = useState<File | null>(null)
  const [enviado, setEnviado] = useState(false)
  const [enviando, setEnviando] = useState(false)
  const [dragOver, setDragOver] = useState(false)

  function handleFile(file: File | null) {
    if (!file) return
    setArchivo(file)
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    setDragOver(false)
    const file = e.dataTransfer.files[0]
    if (file) handleFile(file)
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setEnviando(true)
    await new Promise(r => setTimeout(r, 1200))
    setEnviando(false)
    setEnviado(true)
  }

  if (enviado) {
    return (
      <div style={{ border: '1px solid #B8C0B8', padding: '56px 40px', textAlign: 'center', maxWidth: '560px' }}>
        <div
          style={{
            width: '56px', height: '56px', borderRadius: '50%',
            background: '#1B1A19', display: 'flex', alignItems: 'center',
            justifyContent: 'center', margin: '0 auto 20px', color: 'white',
          }}
        >
          <IconCheck />
        </div>
        <h3 className="font-monument text-primary" style={{ fontSize: '1.3rem', fontWeight: '400', marginBottom: '12px' }}>
          Solicitud enviada
        </h3>
        <p className="font-lato text-accent" style={{ fontSize: '14px', lineHeight: '1.75em', letterSpacing: '0.3px', marginBottom: '24px' }}>
          Tu solicitud ha sido recibida. Recibirás una respuesta en el correo indicado en un plazo máximo de 20 días hábiles.
        </p>
        <button
          onClick={() => { setEnviado(false); setArchivo(null) }}
          className="font-lato text-primary uppercase hover:text-accent transition-colors"
          style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '1.5px', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          Enviar otra solicitud
        </button>
      </div>
    )
  }

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

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '720px' }}>

      {/* Nombre + Correo */}
      <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '16px' }}>
        <div>
          <label style={labelStyle}>Nombre completo <span style={{ color: '#991B1B' }}>*</span></label>
          <input required type="text" placeholder="Tu nombre completo" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Correo electrónico <span style={{ color: '#991B1B' }}>*</span></label>
          <input required type="email" placeholder="correo@ejemplo.com" style={inputStyle} />
        </div>
      </div>

      {/* Teléfono + Tipo */}
      <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '16px' }}>
        <div>
          <label style={labelStyle}>Teléfono</label>
          <input type="tel" placeholder="(618) 000-0000" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Tipo de solicitud <span style={{ color: '#991B1B' }}>*</span></label>
          <select required style={{ ...inputStyle, appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23666968' stroke-width='2'%3E%3Cpath d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', paddingRight: '32px' }}>
            <option value="">Selecciona una opción</option>
            {TIPOS.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>

      {/* Descripción */}
      <div>
        <label style={labelStyle}>Descripción de la solicitud <span style={{ color: '#991B1B' }}>*</span></label>
        <textarea
          required
          rows={5}
          placeholder="Describe detalladamente tu solicitud..."
          style={{ ...inputStyle, resize: 'vertical', lineHeight: '1.6em' }}
        />
      </div>

      {/* Archivo */}
      <div>
        <label style={labelStyle}>Documento adjunto</label>
        <div
          onClick={() => fileRef.current?.click()}
          onDragOver={e => { e.preventDefault(); setDragOver(true) }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          style={{
            border: `1px dashed ${dragOver ? '#1B1A19' : '#B8C0B8'}`,
            background: dragOver ? '#F4F6F4' : 'white',
            padding: '28px 20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            transition: 'all 150ms',
          }}
        >
          {archivo ? (
            <>
              <div className="flex items-center gap-2 text-primary">
                <IconFile />
                <span className="font-lato" style={{ fontSize: '13px', fontWeight: '500' }}>{archivo.name}</span>
              </div>
              <span className="font-lato text-overlay" style={{ fontSize: '11px' }}>
                {(archivo.size / 1024).toFixed(0)} KB
              </span>
              <button
                type="button"
                onClick={e => { e.stopPropagation(); setArchivo(null); if (fileRef.current) fileRef.current.value = '' }}
                className="flex items-center gap-1 text-overlay hover:text-primary transition-colors"
                style={{ fontSize: '11px', fontFamily: 'var(--font-lato)', background: 'none', border: 'none', cursor: 'pointer', marginTop: '4px' }}
              >
                <IconX /> Quitar archivo
              </button>
            </>
          ) : (
            <>
              <span className="text-overlay"><IconUpload /></span>
              <p className="font-lato text-overlay" style={{ fontSize: '13px', textAlign: 'center', lineHeight: '1.6em' }}>
                Arrastra tu archivo aquí o <span className="text-primary" style={{ fontWeight: '600' }}>haz clic para seleccionar</span>
              </p>
              <p className="font-lato text-overlay" style={{ fontSize: '11px', letterSpacing: '0.3px' }}>
                PDF, DOC, DOCX, JPG, PNG · Máx. 10 MB
              </p>
            </>
          )}
        </div>
        <input
          ref={fileRef}
          type="file"
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
          style={{ display: 'none' }}
          onChange={e => handleFile(e.target.files?.[0] ?? null)}
        />
      </div>

      {/* Submit */}
      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={enviando}
          className="font-lato text-white bg-primary hover:bg-accent transition-colors uppercase"
          style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '1.5px', padding: '14px 32px', border: 'none', cursor: enviando ? 'not-allowed' : 'pointer', opacity: enviando ? 0.7 : 1 }}
        >
          {enviando ? 'Enviando…' : 'Enviar solicitud'}
        </button>
        <p className="font-lato text-overlay" style={{ fontSize: '11px', letterSpacing: '0.3px' }}>
          <span style={{ color: '#991B1B' }}>*</span> Campos obligatorios
        </p>
      </div>

    </form>
  )
}
