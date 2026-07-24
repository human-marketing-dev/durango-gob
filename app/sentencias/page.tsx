import type { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import Buscador from '@/components/sentencias/buscador'

export const metadata: Metadata = {
  title: 'Buscador de Sentencias',
  description:
    'Consulta y busca las sentencias públicas del Poder Judicial del Estado de Durango por materia, tipo de juicio, año, instancia y sala.',
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
          <span className="text-overlay" style={{ fontSize: '12px' }}>
            ›
          </span>
          <span className="font-lato text-primary" style={{ fontSize: '12px', letterSpacing: '0.3px' }}>
            Sentencias
          </span>
        </div>
      </div>

      {/* Header */}
      <div
        className="max-w-content mx-auto site-px"
        style={{ paddingTop: '64px', paddingBottom: '40px', borderBottom: '1px solid #B8C0B8' }}
      >
        <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>
          Poder Judicial del Estado de Durango
        </p>
        <h1
          className="font-monument text-primary"
          style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 400,
            letterSpacing: '0.5px',
            lineHeight: '1.1em',
            marginBottom: '20px',
          }}
        >
          Buscador de Sentencias
        </h1>
        <p
          className="font-lato text-accent"
          style={{ fontSize: '16px', lineHeight: '1.7em', letterSpacing: '0.3px', maxWidth: '680px' }}
        >
          Consulta las versiones públicas de las sentencias emitidas por los órganos jurisdiccionales del Estado de
          Durango. Filtra por materia, tipo de juicio, año, instancia o sala, o busca por número de expediente.
        </p>
      </div>

      <Suspense
        fallback={
          <div className="max-w-content mx-auto site-px" style={{ paddingTop: '48px', paddingBottom: '80px' }}>
            <p className="font-lato text-overlay" style={{ fontSize: '14px' }}>
              Cargando buscador…
            </p>
          </div>
        }
      >
        <Buscador />
      </Suspense>
    </div>
  )
}
