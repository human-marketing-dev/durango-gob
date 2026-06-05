import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sitios de Interés — Recursos — Poder Judicial del Estado de Durango',
  description: 'Directorio de sitios de interés jurídico, institucional y gubernamental relacionados con el Poder Judicial del Estado de Durango.',
}

// ── Data ───────────────────────────────────────────────────────────────────────

const categorias = [
  {
    titulo: 'Poder Judicial Federal',
    sitios: [
      { nombre: 'Suprema Corte de Justicia de la Nación', url: 'https://www.scjn.gob.mx' },
      { nombre: 'Tribunal Electoral del Poder Judicial de la Federación', url: 'https://www.te.gob.mx' },
      { nombre: 'Consejo de la Judicatura Federal', url: 'https://www.cjf.gob.mx' },
      { nombre: 'Casa de la Cultura Jurídica Federal', url: 'https://www.sitios.scjn.gob.mx/casascultura/' },
      { nombre: 'Casa de la Cultura Jurídica Durango', url: 'https://www.sitios.scjn.gob.mx/casascultura/casas-cultura-juridica/durango-durango' },
      { nombre: 'Escuela Judicial Electoral', url: 'https://www.te.gob.mx/eje' },
    ],
  },
  {
    titulo: 'Gobierno del Estado de Durango',
    sitios: [
      { nombre: 'Gobierno del Estado de Durango', url: 'https://www.durango.gob.mx' },
      { nombre: 'H. Congreso del Estado de Durango', url: 'https://congresodurango.gob.mx/' },
      { nombre: 'Fiscalía General del Estado de Durango', url: 'https://fiscalia.durango.gob.mx/' },
      { nombre: 'Gobierno Municipal de Durango', url: 'https://www.municipiodurango.gob.mx' },
      { nombre: 'Periódico Oficial del Gobierno del Estado de Durango', url: 'https://secretariageneral.durango.gob.mx/periodico-oficial' },
    ],
  },
  {
    titulo: 'Tribunales y Organismos de Durango',
    sitios: [
      { nombre: 'Tribunal para Menores Infractores del Poder Judicial del Estado de Durango', url: 'https://tmidgo.gob.mx/' },
      { nombre: 'Tribunal de Justicia Fiscal y Administrativa de Durango', url: 'https://tja.durango.gob.mx' },
      { nombre: 'Tribunal Estatal Electoral', url: 'https://tedgo.gob.mx' },
      { nombre: 'Instituto Duranguense de Acceso a la Información Pública y Protección de Datos Personales (IDAIP)', url: 'https://idaip.org.mx/sitio/' },
    ],
  },
  {
    titulo: 'Organismos Nacionales',
    sitios: [
      { nombre: 'Comisión Nacional de Derechos Humanos (CNDH)', url: 'https://www.cndh.org.mx' },
      { nombre: 'CONATRIB', url: 'https://conatrib.org.mx/' },
      { nombre: 'Asociación Mexicana de Impartidores de Justicia (AMIJ)', url: 'https://www.amij.org.mx' },
      { nombre: 'Unidad de Enlace para la Reforma al Sistema de Justicia Laboral', url: 'https://reformalaboral.stps.gob.mx/' },
      { nombre: 'Centro Federal de Conciliación y Registro Laboral', url: 'https://www.gob.mx/cfcrl' },
      { nombre: 'Diario Oficial de la Federación', url: 'https://www.dof.gob.mx' },
    ],
  },
  {
    titulo: 'Internacionales',
    sitios: [
      { nombre: 'Corte Interamericana de Derechos Humanos', url: 'https://www.corteidh.or.cr' },
      { nombre: 'Tribunal Europeo de Derechos Humanos', url: 'https://www.echr.coe.int' },
      { nombre: 'ONU-DH México', url: 'https://hchr.org.mx/' },
      { nombre: 'Comisión de Venecia', url: 'https://www.venice.coe.int' },
      { nombre: 'IACL-AIDC', url: 'https://iacl-aidc.org' },
    ],
  },
  {
    titulo: 'Consulta Jurídica',
    sitios: [
      { nombre: 'Consulta de Jurisprudencia — SCJN', url: 'https://sjf.scjn.gob.mx/SJFSem/paginas/tesis.aspx?Tesis=Tesis' },
      { nombre: 'Plataforma de Consulta y Localización de Información Jurídica', url: 'https://bj.scjn.gob.mx' },
      { nombre: 'Sistema de Consulta de Tesis por Ordenamiento', url: 'https://jurislex.scjn.gob.mx' },
    ],
  },
  {
    titulo: 'Investigación y Academia',
    sitios: [
      { nombre: 'Instituto de Investigaciones Jurídicas de la UJED', url: 'https://www.ujed.mx/instituto-de-investigaciones-juridicas' },
      { nombre: 'Instituto de Investigaciones Jurídicas de la UNAM', url: 'https://www.juridicas.unam.mx' },
    ],
  },
  {
    titulo: 'Herramientas PJDGO',
    sitios: [
      { nombre: 'PAJUD — Sistema de Gestión Judicial', url: 'https://pajud.mx' },
      { nombre: 'Plataforma Nacional de Transparencia', url: 'https://www.plataformadetransparencia.org.mx' },
    ],
  },
]

// ── Icon ───────────────────────────────────────────────────────────────────────

function IconExternal() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <div className="bg-white">

      {/* Breadcrumbs */}
      <div style={{ borderBottom: '1px solid #B8C0B8' }}>
        <div className="max-w-content mx-auto site-px py-3 flex items-center gap-2 flex-wrap">
          {[
            { label: 'Inicio',   href: '/' },
            { label: 'Recursos', href: '/recursos' },
          ].map(({ label, href }) => (
            <span key={href} className="flex items-center gap-2">
              <Link href={href} className="font-lato text-overlay hover:text-primary transition-colors" style={{ fontSize: '12px', letterSpacing: '0.3px', textDecoration: 'none' }}>
                {label}
              </Link>
              <span className="text-overlay" style={{ fontSize: '12px' }}>›</span>
            </span>
          ))}
          <span className="font-lato text-primary" style={{ fontSize: '12px', letterSpacing: '0.3px' }}>Sitios de Interés</span>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '64px', paddingBottom: '48px', borderBottom: '1px solid #B8C0B8' }}>
        <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>Recursos</p>
        <h1 className="font-monument text-primary" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '400', letterSpacing: '0.5px', lineHeight: '1.1em', marginBottom: '20px' }}>
          Sitios de Interés
        </h1>
        <p className="font-lato text-accent" style={{ fontSize: '16px', lineHeight: '1.7em', letterSpacing: '0.3px', maxWidth: '680px' }}>
          Directorio de organismos, instituciones y herramientas de consulta jurídica de relevancia para la impartición de justicia en México y el Estado de Durango.
        </p>
      </div>

      {/* Categories */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '56px', paddingBottom: '80px', display: 'flex', flexDirection: 'column', gap: '48px' }}>
        {categorias.map(cat => (
          <section key={cat.titulo}>
            <div style={{ borderBottom: '2px solid #1B1A19', paddingBottom: '10px', marginBottom: '4px' }}>
              <h2 className="font-lato text-primary uppercase" style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '2px' }}>
                {cat.titulo}
              </h2>
            </div>
            <div style={{ display: 'grid', gap: '1px', background: '#B8C0B8', marginTop: '4px' }}>
              {cat.sitios.map(sitio => (
                <a
                  key={sitio.url}
                  href={sitio.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white flex items-center justify-between gap-4 hover:bg-blue-bg transition-colors"
                  style={{ padding: '14px 20px', textDecoration: 'none' }}
                >
                  <span className="font-lato text-primary" style={{ fontSize: '14px', lineHeight: '1.4em', letterSpacing: '0.3px' }}>
                    {sitio.nombre}
                  </span>
                  <span className="text-overlay" style={{ flexShrink: 0 }}>
                    <IconExternal />
                  </span>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>

    </div>
  )
}
