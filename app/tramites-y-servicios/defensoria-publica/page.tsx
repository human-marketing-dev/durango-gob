import type { Metadata } from 'next'
import CtaLink from '@/components/cta-link'

export const metadata: Metadata = {
  title: 'Defensoría Pública',
}

export default function Page() {
  return (
    <div className="max-w-content mx-auto site-px" style={{ paddingTop: '64px', paddingBottom: '80px' }}>
      <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>
        Trámites y Servicios
      </p>
      <h1
        className="font-monument text-primary"
        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, letterSpacing: '0.5px', lineHeight: '1.1em', marginBottom: '20px' }}
      >
        Defensoría Pública
      </h1>
      <p className="font-lato text-accent" style={{ fontSize: '16px', lineHeight: '1.7em', letterSpacing: '0.3px', maxWidth: '680px', marginBottom: '32px' }}>
        El servicio de defensoría pública en el Estado de Durango lo presta el Instituto de Defensoría Pública
        (INDEPU).
      </p>
      <CtaLink href="/pjdgo/organo-de-administracion-judicial/indepu">
        Ir al Instituto de Defensoría Pública
      </CtaLink>
    </div>
  )
}
