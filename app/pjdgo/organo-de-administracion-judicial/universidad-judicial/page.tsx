import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import DirectorioContacto from '@/components/directorio-contacto'
import { directorio } from '@/lib/directorio'

export const metadata: Metadata = {
  title: 'Universidad Judicial — Órgano de Administración Judicial — PJDGO',
  description: 'La Universidad Judicial del Poder Judicial del Estado de Durango fortalece la excelencia en la impartición de justicia mediante formación, capacitación, evaluación y certificación.',
}

// ── Data ───────────────────────────────────────────────────────────────────────

const ejes = [
  {
    num: '01',
    titulo: 'Gestión Académica',
    descripcion: 'Impartición de posgrados (Maestrías y Doctorado), programas de educación continua, investigación, seminarios, talleres y diplomados de alta especialidad.',
  },
  {
    num: '02',
    titulo: 'Carrera Judicial',
    descripcion: 'Organización y ejecución de los concursos de oposición, cursos y exámenes necesarios para el ingreso y ascenso en las categorías de la carrera judicial, en estricto apego a las directrices del Órgano de Administración del Poder Judicial.',
  },
  {
    num: '03',
    titulo: 'Capacitación Especializada',
    descripcion: 'Formación continua y actualización técnica de los servidores públicos, garantizando un ejercicio profesional eficiente y de excelencia.',
  },
]

const principios = [
  'Excelencia', 'Objetividad', 'Imparcialidad',
  'Profesionalismo', 'Independencia', 'Paridad de género',
]

const convocatorias = [
  {
    imagen: '/convocatoria-actuarios-judiciales.webp',
    titulo: 'Formación para Actuarios Judiciales',
    descripcion: 'Programa de formación especializada para aspirantes al cargo de actuario judicial en el Estado de Durango.',
    plazo: 'Cierre: 30 de junio de 2026',
  },
  {
    imagen: '/convocatoria-para-secretarios.webp',
    titulo: 'Formación para Secretarios',
    descripcion: 'Programa dirigido a aspirantes al cargo de secretario judicial, con énfasis en derecho procesal y práctica forense.',
    plazo: 'Cierre: 15 de julio de 2026',
  },
  {
    imagen: '/convocatoria-oficiales-judiciales.webp',
    titulo: 'Formación de Oficiales Judiciales',
    descripcion: 'Proceso de formación para oficiales judiciales con módulos de administración, archivo y procedimientos internos.',
    plazo: 'Cierre: 31 de julio de 2026',
  },
]

// ── Icons ──────────────────────────────────────────────────────────────────────

function IconArrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
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
            { label: 'Inicio',                           href: '/' },
            { label: 'PJDGO',                            href: '/pjdgo' },
            { label: 'Órgano de Administración Judicial', href: '/pjdgo/organo-de-administracion-judicial/pleno-y-comisiones' },
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
            Universidad Judicial
          </span>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '64px', paddingBottom: '48px', borderBottom: '1px solid #B8C0B8' }}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-end">
          <div className="lg:col-span-2">
            <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>
              Órgano de Administración Judicial
            </p>
            <h1
              className="font-monument text-primary"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '400', letterSpacing: '0.5px', lineHeight: '1.1em', marginBottom: '20px' }}
            >
              Universidad Judicial
            </h1>
            <p className="font-lato text-accent" style={{ fontSize: '16px', lineHeight: '1.7em', letterSpacing: '0.3px' }}>
              Como área auxiliar del Órgano de Administración del Poder Judicial, la Universidad Judicial ejerce sus atribuciones académicas con plena autonomía técnica y de gestión. Su misión es fortalecer la excelencia en la impartición de justicia mediante el diseño e implementación de procesos integrales de formación, capacitación, evaluación, certificación y actualización.
            </p>
          </div>
          <div className="lg:col-span-1 flex justify-start lg:justify-end">
            <a
              href="#convocatorias"
              className="font-lato text-white bg-primary hover:bg-accent transition-colors uppercase flex items-center gap-2"
              style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '1.5px', padding: '14px 24px', textDecoration: 'none', alignSelf: 'flex-end' }}
            >
              Ver convocatorias abiertas
              <IconArrow />
            </a>
          </div>
        </div>
      </div>

      {/* Misión y principios */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '56px', paddingBottom: '56px', borderBottom: '1px solid #B8C0B8' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>Misión</p>
            <h2 className="font-monument text-primary" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', fontWeight: '400', lineHeight: '1.2em', marginBottom: '16px' }}>
              Nuestra labor
            </h2>
            <p className="font-lato text-accent" style={{ fontSize: '15px', lineHeight: '1.8em', letterSpacing: '0.3px', marginBottom: '16px' }}>
              Nuestra labor se orienta al desarrollo profesional del personal de Carrera Judicial, administrativo y de las y los Defensores Públicos, extendiendo nuestra oferta académica a la sociedad en general.
            </p>
            <p className="font-lato text-accent" style={{ fontSize: '15px', lineHeight: '1.8em', letterSpacing: '0.3px' }}>
              La Universidad Judicial opera bajo un estricto marco normativo —sustentado en la Ley, su Reglamento y los acuerdos del H. Pleno del Órgano de Administración del Poder Judicial—, lo que asegura una gestión transparente y apegada a derecho.
            </p>
          </div>
          <div>
            <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>Valores</p>
            <h2 className="font-monument text-primary" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', fontWeight: '400', lineHeight: '1.2em', marginBottom: '20px' }}>
              Principios institucionales
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: '#B8C0B8' }}>
              {principios.map(p => (
                <div key={p} className="bg-white" style={{ padding: '14px 16px' }}>
                  <p className="font-lato text-primary" style={{ fontSize: '13px', fontWeight: '500', letterSpacing: '0.3px' }}>
                    {p}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Ejes estratégicos */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '56px', paddingBottom: '56px', borderBottom: '1px solid #B8C0B8' }}>
        <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>Áreas de trabajo</p>
        <h2 className="font-monument text-primary" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', fontWeight: '400', lineHeight: '1.2em', marginBottom: '32px' }}>
          Ejes estratégicos
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: '1px', background: '#B8C0B8' }}>
          {ejes.map(eje => (
            <div key={eje.num} className="bg-white" style={{ padding: '32px 28px' }}>
              <p className="font-monument text-overlay" style={{ fontSize: '2.5rem', fontWeight: '400', lineHeight: '1', marginBottom: '16px', opacity: 0.3 }}>
                {eje.num}
              </p>
              <h3 className="font-monument text-primary" style={{ fontSize: '1.1rem', fontWeight: '400', lineHeight: '1.3em', marginBottom: '12px' }}>
                {eje.titulo}
              </h3>
              <p className="font-lato text-accent" style={{ fontSize: '13px', lineHeight: '1.75em', letterSpacing: '0.3px' }}>
                {eje.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Rector y Contacto */}
      <DirectorioContacto
        data={directorio['universidad-judicial']}
        titulo="Información de contacto"
        paddingBottom="56px"
        borderBottom
      />

      {/* Convocatorias */}
      <div id="convocatorias" className="max-w-content mx-auto site-px" style={{ paddingTop: '56px', paddingBottom: '80px' }}>
        <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>Carrera Judicial</p>
        <h2 className="font-monument text-primary" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', fontWeight: '400', lineHeight: '1.2em', marginBottom: '32px' }}>
          Convocatorias abiertas
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: '24px' }}>
          {convocatorias.map((c, i) => (
            <article key={i} className="flex flex-col" style={{ border: '1px solid #B8C0B8' }}>
              <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                <Image
                  src={c.imagen}
                  alt={c.titulo}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <p className="font-lato text-overlay uppercase" style={{ fontSize: '10px', letterSpacing: '1.5px', marginBottom: '8px' }}>
                  Convocatoria
                </p>
                <h3 className="font-monument text-primary" style={{ fontSize: '1rem', fontWeight: '400', lineHeight: '1.35em', marginBottom: '10px' }}>
                  {c.titulo}
                </h3>
                <p className="font-lato text-accent" style={{ fontSize: '13px', lineHeight: '1.65em', letterSpacing: '0.3px', marginBottom: '16px', flex: 1 }}>
                  {c.descripcion}
                </p>
                <div style={{ borderTop: '1px solid #EEF0EE', paddingTop: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="font-lato text-overlay" style={{ fontSize: '11px', letterSpacing: '0.3px' }}>
                    {c.plazo}
                  </span>
                  <a
                    href="#"
                    className="font-lato text-primary hover:text-accent transition-colors uppercase flex items-center gap-1.5"
                    style={{ fontSize: '10px', fontWeight: '600', letterSpacing: '1px', textDecoration: 'none' }}
                  >
                    Ver
                    <IconArrow />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

    </div>
  )
}
