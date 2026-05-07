import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Obligaciones Comunes — Transparencia — Poder Judicial del Estado de Durango',
  description: 'Información pública de oficio correspondiente a las obligaciones comunes de transparencia del Poder Judicial del Estado de Durango, conforme al Artículo 59 de la Ley de Transparencia.',
}

const obligaciones = [
  { num: 'I',       texto: 'El marco normativo' },
  { num: 'II',      texto: 'Estructura orgánica completa' },
  { num: 'III',     texto: 'Facultades legales de cada área' },
  { num: 'IV',      texto: 'Metas y objetivos' },
  { num: 'V',       texto: 'Indicadores' },
  { num: 'VI',      texto: 'Directorio' },
  { num: 'VII',     texto: 'Sueldos' },
  { num: 'VIII',    texto: 'Viáticos' },
  { num: 'IX',      texto: 'Plazas base y confianza' },
  { num: 'X',       texto: 'Contratos honorarios' },
  { num: 'XI',      texto: 'Declaraciones patrimoniales' },
  { num: 'XII',     texto: 'Domicilio Unidad de Transparencia' },
  { num: 'XIII',    texto: 'Convocatorias a concursos' },
  { num: 'XIV',     texto: 'Plan Operativo Anual' },
  { num: 'XV',      texto: 'NO APLICA', noAplica: true },
  { num: 'XVI',     texto: 'Condiciones generales de trabajo' },
  { num: 'XVII',    texto: 'Currículos' },
  { num: 'XVIII',   texto: 'Sanciones administrativas firmes' },
  { num: 'XIX',     texto: 'Los servicios y trámites' },
  { num: 'XX',      texto: 'Presupuesto asignado' },
  { num: 'XXI',     texto: 'NO APLICA', noAplica: true },
  { num: 'XXII',    texto: 'Gastos Comunicación Social' },
  { num: 'XXIII',   texto: 'Auditorías' },
  { num: 'XXIV',    texto: 'Estados financieros' },
  { num: 'XXV',     texto: 'NO APLICA', noAplica: true },
  { num: 'XXVI',    texto: 'Concesiones' },
  { num: 'XXVII',   texto: 'Adjudicación directa, invitación restringida y licitación' },
  { num: 'XXVIII',  texto: 'Los informes que generen de conformidad con las disposiciones jurídicas' },
  { num: 'XXIX',    texto: 'Estadística Judicial' },
  { num: 'XXX',     texto: 'Informes' },
  { num: 'XXXI',    texto: 'Padrón de proveedores y contratistas' },
  { num: 'XXXII',   texto: 'Convenios' },
  { num: 'XXXIII',  texto: 'Inventario bienes muebles e inmuebles' },
  { num: 'XXXIV',   texto: 'Recomendaciones en DDHH' },
  { num: 'XXXV',    texto: 'Resoluciones que se emitan en procesos o procedimientos seguidos en forma de juicio' },
  { num: 'XXXVI',   texto: 'Mecanismos de participación ciudadana' },
  { num: 'XXXVII',  texto: 'NO APLICA', noAplica: true },
  { num: 'XXXVIII', texto: 'Actas y resoluciones del Comité de Transparencia' },
  { num: 'XXXIX',   texto: 'NO APLICA', noAplica: true },
  { num: 'XL',      texto: 'NO APLICA', noAplica: true },
  { num: 'XLI',     texto: 'Listado de personas jubiladas y pensionadas' },
  { num: 'XLII',    texto: 'Ingresos' },
  { num: 'XLIII',   texto: 'Donaciones' },
  { num: 'XLIV',    texto: 'Instrumentos archivísticos' },
  { num: 'XLV',     texto: 'Actas consejos consultivos' },
  { num: 'XLVI',    texto: 'NO APLICA', noAplica: true },
  { num: 'XLVII',   texto: 'Transparencia proactiva' },
]

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
            Obligaciones Comunes
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
          Obligaciones Comunes
        </h1>
        <p className="font-lato text-accent" style={{ fontSize: '16px', lineHeight: '1.7em', letterSpacing: '0.3px', maxWidth: '700px' }}>
          Información pública de oficio que el Poder Judicial del Estado de Durango pone a disposición del público conforme al <strong>Artículo 59</strong> de la Ley de Transparencia y Acceso a la Información Pública del Estado de Durango.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '48px', paddingBottom: '80px' }}>

        {/* Article reference */}
        <div style={{ background: '#CACECF', padding: '24px 28px', marginBottom: '40px', borderLeft: '3px solid #4A535A' }}>
          <p className="font-lato text-primary" style={{ fontSize: '13px', fontWeight: '500', letterSpacing: '0.5px', lineHeight: '1.7em' }}>
            <strong>DE LAS OBLIGACIONES COMUNES — ARTÍCULO 59.</strong> Los sujetos obligados pondrán a disposición del público y mantendrán actualizada, en los respectivos medios electrónicos, de acuerdo con sus facultades, atribuciones, funciones u objeto social, según corresponda, la información, por lo menos, de los temas, documentos y políticas que a continuación se señalan:
          </p>
        </div>

        {/* Obligations list */}
        <div style={{ display: 'grid', gap: '1px', background: '#B8C0B8' }}>
          {obligaciones.map(({ num, texto, noAplica }) => (
            <div
              key={num}
              className="bg-white flex items-start gap-6"
              style={{ padding: '16px 24px', opacity: noAplica ? 0.45 : 1 }}
            >
              <span
                className="font-lato text-accent shrink-0"
                style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.5px', minWidth: '64px', paddingTop: '1px' }}
              >
                {num}
              </span>
              <span
                className="font-lato text-primary"
                style={{ fontSize: '14px', lineHeight: '1.6em', letterSpacing: '0.3px', fontStyle: noAplica ? 'italic' : 'normal' }}
              >
                {texto}
              </span>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div style={{ marginTop: '40px', padding: '20px 24px', border: '1px solid #B8C0B8' }}>
          <p className="font-lato text-overlay" style={{ fontSize: '12px', lineHeight: '1.7em', letterSpacing: '0.3px' }}>
            <strong className="text-primary">Tabla de aplicabilidad, conservación y actualización de información pública.</strong>{' '}
            La información señalada deberá mantenerse actualizada conforme a los plazos y periodicidades establecidos en la normativa aplicable.
          </p>
        </div>
      </div>
    </div>
  )
}
