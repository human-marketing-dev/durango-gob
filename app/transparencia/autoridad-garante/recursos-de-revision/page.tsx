import type { Metadata } from 'next'
import Link from 'next/link'
import RecursoRevisionForm from '@/components/recurso-revision-form'

export const metadata: Metadata = {
  title: 'Recursos de Revisión — Autoridad Garante — Poder Judicial del Estado de Durango',
  // TODO: descripción pendiente de validación del cliente
  description: 'Presenta un recurso de revisión ante la Autoridad Garante del Poder Judicial del Estado de Durango.',
}

export default function Page() {
  return (
    <div className="bg-white">

      {/* Breadcrumbs */}
      <div style={{ borderBottom: '1px solid #B8C0B8' }}>
        <div className="max-w-content mx-auto site-px py-3 flex items-center gap-2 flex-wrap">
          {[
            { label: 'Inicio',            href: '/' },
            { label: 'Transparencia',     href: '/transparencia' },
            { label: 'Autoridad Garante', href: '/transparencia/autoridad-garante' },
          ].map(({ label, href }) => (
            <span key={href} className="flex items-center gap-2">
              <Link href={href} className="font-lato text-overlay hover:text-primary transition-colors" style={{ fontSize: '12px', letterSpacing: '0.3px', textDecoration: 'none' }}>
                {label}
              </Link>
              <span className="text-overlay" style={{ fontSize: '12px' }}>›</span>
            </span>
          ))}
          <span className="font-lato text-primary" style={{ fontSize: '12px', letterSpacing: '0.3px' }}>Recursos de Revisión</span>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '64px', paddingBottom: '48px', borderBottom: '1px solid #B8C0B8' }}>
        <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>
          Autoridad Garante
        </p>
        <h1 className="font-monument text-primary" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '400', letterSpacing: '0.5px', lineHeight: '1.1em', marginBottom: '20px' }}>
          Recursos de Revisión
        </h1>
        {/* TODO: texto pendiente de validación del cliente */}
        <p className="font-lato text-accent" style={{ fontSize: '16px', lineHeight: '1.7em', letterSpacing: '0.3px', maxWidth: '680px' }}>
          Este medio está destinado a la presentación de recursos de revisión ante la Autoridad Garante del Poder Judicial del Estado de Durango, cuando una persona no esté conforme con la respuesta recaída a su solicitud de acceso a la información pública o de protección de datos personales.
        </p>
      </div>

      {/* Form + Info */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '56px', paddingBottom: '80px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Form — 2/3 */}
          <div className="lg:col-span-2">
            <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>Formulario</p>
            <h2 className="font-monument text-primary" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', fontWeight: '400', lineHeight: '1.2em', marginBottom: '28px' }}>
              Presentar recurso de revisión
            </h2>
            <RecursoRevisionForm />
          </div>

          {/* Info — 1/3 */}
          <aside className="lg:col-span-1">
            <div style={{ position: 'sticky', top: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>

              {/* TODO: contenido pendiente de validación del cliente */}
              <div style={{ border: '1px solid #B8C0B8', padding: '24px' }}>
                <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '10px', letterSpacing: '2px', fontWeight: '600' }}>
                  ¿Qué es un recurso de revisión?
                </p>
                <p className="font-lato text-accent" style={{ fontSize: '13px', lineHeight: '1.75em', letterSpacing: '0.3px' }}>
                  Es el medio por el cual una persona puede inconformarse con la respuesta recaída a su solicitud de acceso a la información pública o de protección de datos personales.
                </p>
              </div>

              <div style={{ border: '1px solid #B8C0B8', padding: '24px' }}>
                <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '10px', letterSpacing: '2px', fontWeight: '600' }}>
                  Contacto directo
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <p className="font-lato text-accent" style={{ fontSize: '13px', lineHeight: '1.65em', letterSpacing: '0.3px' }}>
                    Unidad de Transparencia<br />
                    C. Zaragoza esq. con 5 de Febrero S/N,<br />
                    Zona Centro, Durango, Dgo.
                  </p>
                  <p className="font-lato text-accent" style={{ fontSize: '13px', letterSpacing: '0.3px' }}>
                    (618) 811 4712 · Ext. 215
                  </p>
                  <a href="mailto:transparencia@pjdgo.gob.mx" className="font-lato text-primary hover:text-accent transition-colors" style={{ fontSize: '13px', letterSpacing: '0.3px', textDecoration: 'none' }}>
                    transparencia@pjdgo.gob.mx
                  </a>
                  <p className="font-lato text-overlay" style={{ fontSize: '12px', letterSpacing: '0.3px' }}>
                    Lunes a viernes · 9:00 a 15:00 h
                  </p>
                </div>
              </div>

            </div>
          </aside>

        </div>
      </div>

    </div>
  )
}
