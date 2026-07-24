import type { Metadata } from 'next'
import CtaLink from '@/components/cta-link'

export const metadata: Metadata = {
  title: 'Correo Institucional',
}

export default function Page() {
  return (
    <div className="max-w-content mx-auto site-px" style={{ paddingTop: '64px', paddingBottom: '80px' }}>
      <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>
        Recursos
      </p>
      <h1
        className="font-monument text-primary"
        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, letterSpacing: '0.5px', lineHeight: '1.1em', marginBottom: '20px' }}
      >
        Correo Institucional
      </h1>
      <p className="font-lato text-accent" style={{ fontSize: '16px', lineHeight: '1.7em', letterSpacing: '0.3px', maxWidth: '680px', marginBottom: '32px' }}>
        Accede a tu cuenta de correo institucional del Poder Judicial del Estado de Durango.
      </p>
      <CtaLink href="https://micorreo.telmex.com/#/login" external>
        Acceder al Correo Institucional
      </CtaLink>
    </div>
  )
}
