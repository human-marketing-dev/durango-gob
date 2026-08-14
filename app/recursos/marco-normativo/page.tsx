import type { Metadata } from 'next'
import Link from 'next/link'
import MarcoNormativoLista from '@/components/marco-normativo-lista'
import { marcoNormativo } from '@/data/marco-normativo'

export const metadata: Metadata = {
  title: 'Marco Normativo — Poder Judicial del Estado de Durango',
  description:
    'Consulta y descarga la legislación federal, estatal e internacional aplicable al Poder Judicial del Estado de Durango.',
}

export default function Page() {
  return (
    <div className="bg-white">

      {/* Breadcrumbs */}
      <div style={{ borderBottom: '1px solid #B8C0B8' }}>
        <div className="max-w-content mx-auto site-px py-3 flex items-center gap-2 flex-wrap">
          <Link
            href="/"
            className="font-lato text-overlay hover:text-primary transition-colors"
            style={{ fontSize: '12px', letterSpacing: '0.3px', textDecoration: 'none' }}
          >
            Inicio
          </Link>
          <span className="text-overlay" style={{ fontSize: '12px' }}>›</span>
          <Link
            href="/recursos"
            className="font-lato text-overlay hover:text-primary transition-colors"
            style={{ fontSize: '12px', letterSpacing: '0.3px', textDecoration: 'none' }}
          >
            Recursos
          </Link>
          <span className="text-overlay" style={{ fontSize: '12px' }}>›</span>
          <span className="font-lato text-primary" style={{ fontSize: '12px', letterSpacing: '0.3px' }}>
            Marco Normativo
          </span>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '64px', paddingBottom: '48px', borderBottom: '1px solid #B8C0B8' }}>
        <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>
          Recursos
        </p>
        <h1
          className="font-monument text-primary"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '400', letterSpacing: '0.5px', lineHeight: '1.1em', marginBottom: '20px' }}
        >
          Marco Normativo
        </h1>
        <p
          className="font-lato text-accent"
          style={{ fontSize: '16px', lineHeight: '1.7em', letterSpacing: '0.3px', maxWidth: '680px' }}
        >
          Consulta y descarga la legislación federal, estatal e internacional que rige la actuación del Poder Judicial del Estado de Durango. Usa el buscador para encontrar un ordenamiento por su título o salta directamente al ámbito que te interese.
        </p>
      </div>

      {/* Lista con buscador y navegación */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '40px', paddingBottom: '80px' }}>
        <MarcoNormativoLista ambitos={marcoNormativo} />
      </div>
    </div>
  )
}
