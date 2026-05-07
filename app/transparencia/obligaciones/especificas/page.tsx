import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Obligaciones Específicas — Transparencia — Poder Judicial del Estado de Durango',
  description: 'Información pública de oficio correspondiente a las obligaciones específicas de transparencia del Poder Judicial del Estado de Durango, conforme a los Artículos 62 y 65 de la Ley de Transparencia.',
}

const art62 = [
  { num: 'I',    texto: 'Tesis y ejecutorias' },
  { num: 'II',   texto: 'Sentencias' },
  { num: 'III',  texto: 'Sesiones públicas' },
  { num: 'IV',   texto: 'Listas de acuerdos' },
  { num: 'V',    texto: 'Elección jueces y magistrados' },
  { num: 'VI',   texto: 'Resoluciones de sanciones disciplinarias a los integrantes del Poder Judicial' },
  { num: 'VII',  texto: 'Indicadores relacionados con el desempeño jurisdiccional' },
  { num: 'VIII', texto: 'Disposiciones de observancia general de los plenos' },
  { num: 'IX',   texto: 'Votos plenos' },
  { num: 'X',    texto: 'Resoluciones recaídas a los asuntos de contradicciones de criterios' },
]

const art65 = [
  { num: 'I',   texto: 'La relación de observaciones y resoluciones emitidas y el seguimiento a cada una de ellas, incluyendo las respuestas entregadas por los sujetos obligados a las personas solicitantes en cumplimiento de las resoluciones' },
  { num: 'II',  texto: 'Los criterios orientadores que deriven de sus resoluciones' },
  { num: 'III', texto: 'Los resultados de la evaluación que, en su caso, se realice al cumplimiento de la presente Ley por parte de los sujetos obligados' },
  { num: 'IV',  texto: 'En su caso, las sentencias, ejecutorias o suspensiones judiciales que existan en contra de sus resoluciones' },
  { num: 'V',   texto: 'El número de quejas, denuncias y recursos de revisión dirigidos a cada uno de los sujetos obligados' },
]

function ObligacionesList({ items }: { items: { num: string; texto: string }[] }) {
  return (
    <div style={{ display: 'grid', gap: '1px', background: '#B8C0B8' }}>
      {items.map(({ num, texto }) => (
        <div key={num} className="bg-white flex items-start gap-6" style={{ padding: '16px 24px' }}>
          <span
            className="font-lato text-accent shrink-0"
            style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.5px', minWidth: '48px', paddingTop: '1px' }}
          >
            {num}
          </span>
          <span className="font-lato text-primary" style={{ fontSize: '14px', lineHeight: '1.6em', letterSpacing: '0.3px' }}>
            {texto}
          </span>
        </div>
      ))}
    </div>
  )
}

export default function Page() {
  return (
    <div className="bg-white">

      {/* Breadcrumbs */}
      <div style={{ borderBottom: '1px solid #B8C0B8' }}>
        <div className="max-w-content mx-auto site-px py-3 flex items-center gap-2 flex-wrap">
          {[
            { label: 'Inicio', href: '/' },
            { label: 'Transparencia', href: '/transparencia' },
            { label: 'Obligaciones', href: '/transparencia/obligaciones' },
          ].map(({ label, href }) => (
            <span key={href} className="flex items-center gap-2">
              <Link href={href} className="font-lato text-overlay hover:text-primary transition-colors" style={{ fontSize: '12px', letterSpacing: '0.3px', textDecoration: 'none' }}>
                {label}
              </Link>
              <span className="text-overlay" style={{ fontSize: '12px' }}>›</span>
            </span>
          ))}
          <span className="font-lato text-primary" style={{ fontSize: '12px', letterSpacing: '0.3px' }}>
            Obligaciones Específicas
          </span>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '64px', paddingBottom: '48px', borderBottom: '1px solid #B8C0B8' }}>
        <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>
          Transparencia
        </p>
        <h1
          className="font-monument text-primary"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '400', letterSpacing: '0.5px', lineHeight: '1.1em', marginBottom: '20px' }}
        >
          Obligaciones Específicas
        </h1>
        <p className="font-lato text-accent" style={{ fontSize: '16px', lineHeight: '1.7em', letterSpacing: '0.3px', maxWidth: '700px' }}>
          Información pública de oficio que el Poder Judicial del Estado de Durango publica en cumplimiento de las obligaciones específicas establecidas en los <strong>Artículos 62 y 65</strong> de la Ley de Transparencia y Acceso a la Información Pública del Estado de Durango.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '48px', paddingBottom: '80px' }}>

        {/* Artículo 62 */}
        <div style={{ marginBottom: '56px' }}>
          <div style={{ background: '#CACECF', padding: '24px 28px', marginBottom: '32px', borderLeft: '3px solid #4A535A' }}>
            <p className="font-lato text-primary" style={{ fontSize: '13px', fontWeight: '500', letterSpacing: '0.5px', lineHeight: '1.7em' }}>
              <strong>ARTÍCULO 62.</strong> Los sujetos obligados del Poder Judicial, además de lo señalado en el artículo 59 de la presente Ley, deberán poner a disposición del público y actualizar la información siguiente:
            </p>
          </div>
          <ObligacionesList items={art62} />
        </div>

        {/* Artículo 65 */}
        <div>
          <div style={{ background: '#CACECF', padding: '24px 28px', marginBottom: '32px', borderLeft: '3px solid #4A535A' }}>
            <p className="font-lato text-primary" style={{ fontSize: '13px', fontWeight: '500', letterSpacing: '0.5px', lineHeight: '1.7em' }}>
              <strong>ARTÍCULO 65.</strong> Además de lo señalado en el artículo 59, las Autoridades garantes deberán poner a disposición del público y actualizar:
            </p>
          </div>
          <ObligacionesList items={art65} />
        </div>
      </div>
    </div>
  )
}
