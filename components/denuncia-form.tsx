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

export default function DenunciaForm() {
  const fileRef = useRef<HTMLInputElement>(null)
  const [archivos, setArchivos] = useState<File[]>([])
  const [enviado, setEnviado] = useState(false)
  const [enviando, setEnviando] = useState(false)
  const [dragOver, setDragOver] = useState(false)
  const [anonima, setAnonima] = useState(false)

  function addArchivos(files: FileList | null) {
    if (!files) return
    setArchivos(prev => {
      const nuevos = Array.from(files).filter(f => !prev.find(p => p.name === f.name))
      return [...prev, ...nuevos].slice(0, 5)
    })
  }

  function removeArchivo(nombre: string) {
    setArchivos(prev => prev.filter(f => f.name !== nombre))
    if (fileRef.current) fileRef.current.value = ''
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    setDragOver(false)
    addArchivos(e.dataTransfer.files)
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setEnviando(true)
    await new Promise(r => setTimeout(r, 1400))
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
          Denuncia registrada
        </h3>
        <p className="font-lato text-accent" style={{ fontSize: '14px', lineHeight: '1.75em', letterSpacing: '0.3px', marginBottom: '24px' }}>
          Tu denuncia ha sido recibida y será atendida por la autoridad competente. Si proporcionaste tus datos, recibirás una respuesta en el correo indicado.
        </p>
        <button
          onClick={() => { setEnviado(false); setArchivos([]) }}
          className="font-lato text-primary uppercase hover:text-accent transition-colors"
          style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '1.5px', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          Registrar otra denuncia
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '720px' }}>

      {/* Denuncia anónima toggle */}
      <div style={{ border: '1px solid #B8C0B8', padding: '16px 20px', background: '#FAFAFA' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
          <div
            onClick={() => setAnonima(v => !v)}
            style={{
              width: '20px', height: '20px', border: `2px solid ${anonima ? '#1B1A19' : '#B8C0B8'}`,
              background: anonima ? '#1B1A19' : 'white', flexShrink: 0, display: 'flex',
              alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 150ms',
            }}
          >
            {anonima && (
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            )}
          </div>
          <div>
            <p className="font-lato text-primary" style={{ fontSize: '13px', fontWeight: '600', marginBottom: '2px' }}>
              Denuncia anónima
            </p>
            <p className="font-lato text-overlay" style={{ fontSize: '12px', lineHeight: '1.5em' }}>
              Si marcas esta opción, no será necesario proporcionar tus datos personales.
            </p>
          </div>
        </label>
      </div>

      {/* Datos personales (condicional) */}
      {!anonima && (
        <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '16px' }}>
          <div>
            <label style={labelStyle}>Nombre completo <span style={{ color: '#991B1B' }}>*</span></label>
            <input required={!anonima} type="text" placeholder="Tu nombre completo" style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Correo electrónico <span style={{ color: '#991B1B' }}>*</span></label>
            <input required={!anonima} type="email" placeholder="correo@ejemplo.com" style={inputStyle} />
          </div>
        </div>
      )}

      {/* Servidor público o área denunciada */}
      <div>
        <label style={labelStyle}>Servidor público o área denunciada</label>
        <input type="text" placeholder="Nombre del servidor público o área involucrada (si aplica)" style={inputStyle} />
      </div>

      {/* Hechos */}
      <div>
        <label style={labelStyle}>Descripción de los hechos <span style={{ color: '#991B1B' }}>*</span></label>
        <textarea
          required
          rows={6}
          placeholder="Describe con detalle los hechos que motivan la denuncia: qué ocurrió, cuándo, dónde y quiénes están involucrados..."
          style={{ ...inputStyle, resize: 'vertical', lineHeight: '1.6em' }}
        />
      </div>

      {/* Archivos */}
      <div>
        <label style={labelStyle}>Evidencia o documentos adjuntos</label>
        <div
          onClick={() => fileRef.current?.click()}
          onDragOver={e => { e.preventDefault(); setDragOver(true) }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          style={{
            border: `1px dashed ${dragOver ? '#1B1A19' : '#B8C0B8'}`,
            background: dragOver ? '#F4F6F4' : 'white',
            padding: '24px 20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            transition: 'all 150ms',
          }}
        >
          <span className="text-overlay"><IconUpload /></span>
          <p className="font-lato text-overlay" style={{ fontSize: '13px', textAlign: 'center', lineHeight: '1.6em' }}>
            Arrastra tus archivos aquí o <span className="text-primary" style={{ fontWeight: '600' }}>haz clic para seleccionar</span>
          </p>
          <p className="font-lato text-overlay" style={{ fontSize: '11px', letterSpacing: '0.3px' }}>
            PDF, DOC, DOCX, JPG, PNG · Máx. 10 MB por archivo · Hasta 5 archivos
          </p>
        </div>
        <input
          ref={fileRef}
          type="file"
          multiple
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
          style={{ display: 'none' }}
          onChange={e => addArchivos(e.target.files)}
        />

        {archivos.length > 0 && (
          <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {archivos.map(f => (
              <div key={f.name} className="flex items-center justify-between" style={{ padding: '8px 12px', border: '1px solid #EEF0EE', background: '#FAFAFA' }}>
                <div className="flex items-center gap-2 text-primary">
                  <IconFile />
                  <span className="font-lato" style={{ fontSize: '12px', fontWeight: '500' }}>{f.name}</span>
                  <span className="font-lato text-overlay" style={{ fontSize: '11px' }}>· {(f.size / 1024).toFixed(0)} KB</span>
                </div>
                <button
                  type="button"
                  onClick={() => removeArchivo(f.name)}
                  className="text-overlay hover:text-primary transition-colors"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '2px' }}
                >
                  <IconX />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Aviso */}
      <p className="font-lato text-overlay" style={{ fontSize: '12px', lineHeight: '1.7em', letterSpacing: '0.3px', borderTop: '1px solid #EEF0EE', paddingTop: '16px' }}>
        La información proporcionada será tratada con estricta confidencialidad conforme a la Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados.
      </p>

      {/* Submit */}
      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={enviando}
          className="font-lato text-white bg-primary hover:bg-accent transition-colors uppercase"
          style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '1.5px', padding: '14px 32px', border: 'none', cursor: enviando ? 'not-allowed' : 'pointer', opacity: enviando ? 0.7 : 1 }}
        >
          {enviando ? 'Enviando…' : 'Enviar denuncia'}
        </button>
        <p className="font-lato text-overlay" style={{ fontSize: '11px', letterSpacing: '0.3px' }}>
          <span style={{ color: '#991B1B' }}>*</span> Campos obligatorios
        </p>
      </div>

    </form>
  )
}
