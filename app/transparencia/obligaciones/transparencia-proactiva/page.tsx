import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Transparencia Proactiva — Poder Judicial del Estado de Durango',
  description: 'Información publicada de manera voluntaria por el Poder Judicial del Estado de Durango para fomentar la transparencia, la rendición de cuentas y el acceso a la información pública.',
}

// ── Icons ─────────────────────────────────────────────────────────────────────

function IconDownload() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  )
}

function IconEye() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function IconFile() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  )
}

// ── File Card ─────────────────────────────────────────────────────────────────

interface FileCardProps {
  nombre: string
  tipo: string
  href: string
  showView?: boolean
}

function FileCard({ nombre, tipo, href, showView = false }: FileCardProps) {
  return (
    <div
      className="flex items-center justify-between flex-wrap gap-4"
      style={{ border: '1px solid #B8C0B8', padding: '24px 28px' }}
    >
      <div className="flex items-center gap-4">
        <div className="text-overlay" style={{ flexShrink: 0 }}>
          <IconFile />
        </div>
        <div>
          <p className="font-lato text-primary" style={{ fontSize: '14px', fontWeight: '600', marginBottom: '4px' }}>
            {nombre}
          </p>
          <p className="font-lato text-overlay" style={{ fontSize: '12px', letterSpacing: '0.3px' }}>
            {tipo}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 flex-wrap">
        {showView && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-lato text-primary uppercase hover:text-accent transition-colors"
            style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '1.5px', padding: '10px 20px', textDecoration: 'none', border: '1px solid #B8C0B8', flexShrink: 0 }}
          >
            <IconEye />
            Ver
          </a>
        )}
        <a
          href={href}
          download
          className="flex items-center gap-2 font-lato text-white bg-primary hover:bg-accent transition-colors uppercase"
          style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '1.5px', padding: '10px 20px', textDecoration: 'none', flexShrink: 0 }}
        >
          <IconDownload />
          Descargar
        </a>
      </div>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <div className="bg-white">

      {/* Breadcrumbs */}
      <div style={{ borderBottom: '1px solid #B8C0B8' }}>
        <div className="max-w-content mx-auto site-px py-3 flex items-center gap-2 flex-wrap">
          {[
            { label: 'Inicio',        href: '/' },
            { label: 'Transparencia', href: '/transparencia' },
            { label: 'Obligaciones',  href: '/transparencia/obligaciones' },
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
            Transparencia Proactiva
          </span>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '64px', paddingBottom: '48px', borderBottom: '1px solid #B8C0B8' }}>
        <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>
          Transparencia · Obligaciones
        </p>
        <h1
          className="font-monument text-primary"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '400', letterSpacing: '0.5px', lineHeight: '1.1em', marginBottom: '20px' }}
        >
          Transparencia Proactiva
        </h1>
        <p className="font-lato text-accent" style={{ fontSize: '16px', lineHeight: '1.7em', letterSpacing: '0.3px', maxWidth: '680px' }}>
          Información publicada de manera voluntaria por el Poder Judicial del Estado de Durango con el objetivo de fomentar la transparencia, la rendición de cuentas y el acceso a la información pública.
        </p>
      </div>

      {/* RNOA General */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '56px', paddingBottom: '56px', borderBottom: '1px solid #B8C0B8' }}>
        <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>
          Registro
        </p>
        <h2
          className="font-monument text-primary"
          style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: '400', lineHeight: '1.2em', marginBottom: '16px' }}
        >
          Reporte Nacional de Obligaciones Alimentarias (RNOA)
        </h2>
        <p className="font-lato text-accent" style={{ fontSize: '15px', lineHeight: '1.7em', letterSpacing: '0.3px', maxWidth: '640px', marginBottom: '32px' }}>
          Reporte del Registro Nacional de Obligaciones Alimentarias correspondiente al Tribunal Superior de Justicia y al Poder Judicial del Estado de Durango.
        </p>

        <FileCard
          nombre="REPORTE RNOA TSJ-PJED"
          tipo="Archivo Excel · .xlsx"
          href="/REPORTE%20RNOA%20TSJ-PJED.xlsx"
        />
      </div>

      {/* RNOA Mensual */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '56px', paddingBottom: '56px', borderBottom: '1px solid #B8C0B8' }}>
        <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>
          Publicación Mensual
        </p>
        <h2
          className="font-monument text-primary"
          style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: '400', lineHeight: '1.2em', marginBottom: '16px' }}
        >
          Reporte Nacional de Deudores Alimentarios (RNOA)
        </h2>
        <p className="font-lato text-accent" style={{ fontSize: '15px', lineHeight: '1.7em', letterSpacing: '0.3px', maxWidth: '640px', marginBottom: '32px' }}>
          Publicación mensual del padrón de deudores alimentarios. El archivo se actualiza cada mes.
        </p>

        <FileCard
          nombre="RNOA Abril 2026"
          tipo="Archivo PDF · Actualización mensual"
          href="/RNOA%20ABRIL%202026.pdf"
        />
      </div>

      {/* Sentencias en Lectura Fácil */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '56px', paddingBottom: '80px' }}>
        <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>
          Accesibilidad
        </p>
        <h2
          className="font-monument text-primary"
          style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: '400', lineHeight: '1.2em', marginBottom: '16px' }}
        >
          Sentencias en Lectura Fácil
        </h2>
        <p className="font-lato text-accent" style={{ fontSize: '15px', lineHeight: '1.7em', letterSpacing: '0.3px', maxWidth: '640px', marginBottom: '32px' }}>
          Resoluciones judiciales redactadas en formato de lectura fácil para garantizar el acceso a la información a todas las personas.
        </p>

        <FileCard
          nombre="Sentencias Lectura Fácil"
          tipo="Archivo Word · .doc"
          href="/sentencias%20lectura%20f%C3%A1cil.DOC"
        />
      </div>

    </div>
  )
}
