import type { Metadata } from 'next'
import Link from 'next/link'
import DirectorioContacto from '@/components/directorio-contacto'
import { directorio } from '@/lib/directorio'

export const metadata: Metadata = {
  title: 'Centro de Convivencia Familiar (CECOFAM) — Órgano de Administración Judicial — PJDGO',
  description: 'El CECOFAM facilita la convivencia de niñas, niños y adolescentes con su padre o madre no custodio en los casos determinados por resolución judicial.',
}

// ── Page ───────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <div className="bg-white">

      {/* Breadcrumbs */}
      <div style={{ borderBottom: '1px solid #B8C0B8' }}>
        <div className="max-w-content mx-auto site-px py-3 flex items-center gap-2 flex-wrap">
          {[
            { label: 'Inicio',                            href: '/' },
            { label: 'PJDGO',                             href: '/pjdgo' },
            { label: 'Órgano de Administración Judicial',  href: '/pjdgo/organo-de-administracion-judicial/pleno-y-comisiones' },
          ].map(({ label, href }) => (
            <span key={href} className="flex items-center gap-2">
              <Link href={href} className="font-lato text-overlay hover:text-primary transition-colors" style={{ fontSize: '12px', letterSpacing: '0.3px', textDecoration: 'none' }}>
                {label}
              </Link>
              <span className="text-overlay" style={{ fontSize: '12px' }}>›</span>
            </span>
          ))}
          <span className="font-lato text-primary" style={{ fontSize: '12px', letterSpacing: '0.3px' }}>CECOFAM</span>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '64px', paddingBottom: '48px', borderBottom: '1px solid #B8C0B8' }}>
        <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>
          Órgano de Administración Judicial
        </p>
        <h1 className="font-monument text-primary" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '400', letterSpacing: '0.5px', lineHeight: '1.1em', marginBottom: '20px' }}>
          Centro de Convivencia Familiar
        </h1>
        <p className="font-lato text-accent" style={{ fontSize: '16px', lineHeight: '1.7em', letterSpacing: '0.3px', maxWidth: '720px' }}>
          Órgano administrativo con autonomía técnica y operativa del Órgano de Administración Judicial del Poder Judicial del Estado de Durango, cuyo objeto es facilitar la convivencia de niñas, niños y adolescentes con su padre o madre no custodio o familia extensa.
        </p>
      </div>

      {/* Descripción */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '56px', paddingBottom: '56px', borderBottom: '1px solid #B8C0B8' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          <div>
            <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>Objeto</p>
            <h2 className="font-monument text-primary" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', fontWeight: '400', lineHeight: '1.2em', marginBottom: '20px' }}>
              ¿Qué es el CECOFAM?
            </h2>
            <p className="font-lato text-accent" style={{ fontSize: '15px', lineHeight: '1.8em', letterSpacing: '0.3px', marginBottom: '16px' }}>
              El CECOFAM es un lugar de encuentros filiales que facilita la convivencia de niñas, niños y adolescentes con su padre o madre no custodio o familia extensa, en aquellos casos en que, por resolución de la autoridad judicial, se determine que ésta no pueda realizarse de manera libre o se ponga en riesgo el interés superior de la infancia.
            </p>
            <p className="font-lato text-accent" style={{ fontSize: '15px', lineHeight: '1.8em', letterSpacing: '0.3px' }}>
              El CECOFAM funciona en los términos que establecen la Ley, la legislación sustantiva y procesal aplicable, los acuerdos generales vigentes que crean y reglamentan este Centro, la <strong className="text-primary">Ley General de los Derechos de las Niñas, Niños y Adolescentes</strong> y los tratados internacionales aplicables.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: '#B8C0B8', alignSelf: 'start' }}>
            {[
              { titulo: 'Tipo de órgano', valor: 'Administrativo con autonomía técnica y operativa' },
              { titulo: 'Adscripción', valor: 'Órgano de Administración Judicial del Poder Judicial del Estado de Durango' },
              { titulo: 'Población objetivo', valor: 'Niñas, niños y adolescentes y sus familias' },
              { titulo: 'Marco normativo', valor: 'Ley, Reglamento, acuerdos generales, Ley General de Derechos de NNA y tratados internacionales' },
            ].map(item => (
              <div key={item.titulo} className="bg-white" style={{ padding: '16px 20px' }}>
                <p className="font-lato text-overlay uppercase" style={{ fontSize: '10px', letterSpacing: '1px', marginBottom: '4px' }}>
                  {item.titulo}
                </p>
                <p className="font-lato text-primary" style={{ fontSize: '13px', lineHeight: '1.6em', fontWeight: '500' }}>
                  {item.valor}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Coordinadora y Contacto */}
      <DirectorioContacto data={directorio.cecofam} titulo="Coordinación e información de contacto" />

    </div>
  )
}
