import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Centro Estatal de Justicia Alternativa (CEJA) — Órgano de Administración Judicial — PJDGO',
  description: 'El CEJA ofrece mecanismos alternativos de solución de controversias como mediación, conciliación, arbitraje y justicia restaurativa de forma gratuita.',
}

// ── Data ───────────────────────────────────────────────────────────────────────

const sedes = [
  {
    nombre: 'Centro Estatal de Justicia Alternativa',
    ciudad: 'Durango',
    direccion: 'Calle Hidalgo #328 sur, Zona Centro, Durango, Dgo.',
    telefonos: ['618 827-92-56', '618 827-50-21'],
    correo: 'ceja-dgo@pjdgo.gob.mx',
  },
  {
    nombre: 'Centro de Justicia Alternativa',
    ciudad: 'Gómez Palacio',
    direccion: 'Av. Independencia #251 oriente, Zona Centro, Gómez Palacio, Dgo.',
    telefonos: ['871 715-58-81'],
    correo: 'cejagp@pjdgo.gob.mx',
  },
  {
    nombre: 'Centro de Justicia Alternativa',
    ciudad: 'Lerdo',
    direccion: 'Calle Azucenas s/n esq. con Azaleas, Col. Villa de las Flores, Lerdo, Dgo.',
    telefonos: ['871 715-38-57'],
    correo: 'justiciaalternativa.lerdo@gmail.com',
  },
]

const mecanismos = [
  { titulo: 'Mediación',           descripcion: 'Una persona facilitadora certificada ayuda a las partes a comunicarse y llegar a un acuerdo mutuamente satisfactorio.' },
  { titulo: 'Conciliación',        descripcion: 'El facilitador propone soluciones para ayudar a las partes a resolver su controversia de manera rápida y eficaz.' },
  { titulo: 'Arbitraje',           descripcion: 'Un árbitro imparcial escucha a ambas partes y emite una resolución vinculante para solucionar la controversia.' },
  { titulo: 'Justicia Restaurativa', descripcion: 'Proceso que busca reparar el daño causado mediante el diálogo entre la víctima, el ofensor y la comunidad.' },
]

const materias = ['Familiar', 'Civil', 'Mercantil', 'Penal']

// ── Icons ──────────────────────────────────────────────────────────────────────

function IconMail() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

function IconPhone() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6 6l.86-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.5 16z" />
    </svg>
  )
}

function IconLocation() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function IconClock() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function IconCheck() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function AvatarPlaceholder() {
  return (
    <div style={{ width: '64px', height: '64px', background: '#CACECF', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#9AA1A6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    </div>
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
          <span className="font-lato text-primary" style={{ fontSize: '12px', letterSpacing: '0.3px' }}>CEJA</span>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '64px', paddingBottom: '48px', borderBottom: '1px solid #B8C0B8' }}>
        <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>
          Órgano de Administración Judicial
        </p>
        <h1 className="font-monument text-primary" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '400', letterSpacing: '0.5px', lineHeight: '1.1em', marginBottom: '20px' }}>
          Centro Estatal de Justicia Alternativa
        </h1>
        <p className="font-lato text-accent" style={{ fontSize: '16px', lineHeight: '1.7em', letterSpacing: '0.3px', maxWidth: '720px', marginBottom: '20px' }}>
          Órgano Auxiliar del Órgano de Administración Judicial encargado de ofrecer Mecanismos Alternativos de Solución de Controversias, aplicados por personas facilitadoras certificadas, para que las personas puedan resolver sus controversias mediante el diálogo de una manera ágil, sencilla y flexible.
        </p>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#F4F6F4', padding: '8px 16px', border: '1px solid #B8C0B8' }}>
          <span className="font-lato text-primary" style={{ fontSize: '13px', fontWeight: '600' }}>Servicios completamente gratuitos</span>
        </div>
      </div>

      {/* Mecanismos y Materias */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '56px', paddingBottom: '56px', borderBottom: '1px solid #B8C0B8' }}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Mecanismos */}
          <div className="lg:col-span-2">
            <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>Servicios</p>
            <h2 className="font-monument text-primary" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', fontWeight: '400', lineHeight: '1.2em', marginBottom: '28px' }}>
              Mecanismos alternativos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '1px', background: '#B8C0B8' }}>
              {mecanismos.map(m => (
                <div key={m.titulo} className="bg-white" style={{ padding: '24px' }}>
                  <h3 className="font-monument text-primary" style={{ fontSize: '1rem', fontWeight: '400', marginBottom: '8px' }}>
                    {m.titulo}
                  </h3>
                  <p className="font-lato text-accent" style={{ fontSize: '13px', lineHeight: '1.7em', letterSpacing: '0.3px' }}>
                    {m.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Materias + Horario + Requisitos */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>

            <div>
              <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>Materias</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: '#B8C0B8' }}>
                {materias.map(m => (
                  <div key={m} className="bg-white flex items-center gap-3" style={{ padding: '12px 16px' }}>
                    <span className="text-primary" style={{ flexShrink: 0 }}><IconCheck /></span>
                    <span className="font-lato text-primary" style={{ fontSize: '13px', fontWeight: '500' }}>{m}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>Horario</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: '#B8C0B8' }}>
                <div className="bg-white flex items-start gap-3" style={{ padding: '14px 16px' }}>
                  <span className="text-overlay" style={{ marginTop: '2px', flexShrink: 0 }}><IconClock /></span>
                  <p className="font-lato text-accent" style={{ fontSize: '13px', lineHeight: '1.6em' }}>
                    Lunes a viernes<br />
                    <strong className="text-primary">9:00 a 15:00 horas</strong>
                  </p>
                </div>
                <div className="bg-white flex items-start gap-3" style={{ padding: '14px 16px' }}>
                  <span className="text-overlay" style={{ marginTop: '2px', flexShrink: 0 }}><IconClock /></span>
                  <p className="font-lato text-accent" style={{ fontSize: '13px', lineHeight: '1.6em' }}>
                    Lunes a viernes<br />
                    <strong className="text-primary">18:00 a 20:00 horas</strong>
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>Para atenderte</p>
              <div style={{ border: '1px solid #B8C0B8', padding: '16px' }}>
                <p className="font-lato text-accent" style={{ fontSize: '13px', lineHeight: '1.75em', letterSpacing: '0.3px' }}>
                  Proporciona tu <strong className="text-primary">nombre, dirección y teléfono</strong>, así como el nombre, dirección y teléfono de la persona con quien deseas resolver la controversia.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Dirección General */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '56px', paddingBottom: '56px', borderBottom: '1px solid #B8C0B8' }}>
        <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>Dirección</p>
        <h2 className="font-monument text-primary" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', fontWeight: '400', lineHeight: '1.2em', marginBottom: '28px' }}>
          Directivos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: '1px', background: '#B8C0B8' }}>
          {[
            { cargo: 'Director General', nombre: 'Lic. Héctor Ayón Nogueira', grado: '' },
            { cargo: 'Subdirectora',     nombre: '[Nombre de Subdirectora]',      grado: '[Grado académico]' },
            { cargo: 'Subdirectora',     nombre: '[Nombre de Subdirectora]',      grado: '[Grado académico]' },
          ].map((p, i) => (
            <div key={i} className="bg-white" style={{ padding: '28px' }}>
              <div className="flex items-start gap-4">
                <AvatarPlaceholder />
                <div>
                  <span className="font-lato text-overlay uppercase inline-block" style={{ fontSize: '9px', fontWeight: '600', letterSpacing: '1.5px', padding: '3px 8px', border: '1px solid #B8C0B8', marginBottom: '10px' }}>
                    {p.cargo}
                  </span>
                  <p className="font-monument text-primary" style={{ fontSize: '0.95rem', fontWeight: '400', lineHeight: '1.3em', marginBottom: '4px' }}>
                    {p.nombre}
                  </p>
                  <p className="font-lato text-accent" style={{ fontSize: '12px', lineHeight: '1.5em' }}>
                    {p.grado}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sedes */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '56px', paddingBottom: '80px' }}>
        <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>Sedes</p>
        <h2 className="font-monument text-primary" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', fontWeight: '400', lineHeight: '1.2em', marginBottom: '28px' }}>
          Dónde encontrarnos
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3" style={{ gap: '1px', background: '#B8C0B8' }}>
          {sedes.map(s => (
            <div key={s.ciudad} className="bg-white" style={{ padding: '28px' }}>
              <p className="font-lato text-overlay uppercase mb-1" style={{ fontSize: '10px', letterSpacing: '1.5px' }}>{s.nombre}</p>
              <h3 className="font-monument text-primary" style={{ fontSize: '1.1rem', fontWeight: '400', lineHeight: '1.2em', marginBottom: '20px' }}>
                {s.ciudad}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div className="flex items-start gap-2 text-overlay">
                  <span style={{ marginTop: '2px', flexShrink: 0 }}><IconLocation /></span>
                  <p className="font-lato" style={{ fontSize: '13px', lineHeight: '1.65em', letterSpacing: '0.3px' }}>
                    {s.direccion}
                  </p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {s.telefonos.map(t => (
                    <div key={t} className="flex items-center gap-2 text-overlay">
                      <IconPhone />
                      <span className="font-lato" style={{ fontSize: '13px', letterSpacing: '0.3px' }}>{t}</span>
                    </div>
                  ))}
                </div>
                <a href={`mailto:${s.correo}`} className="flex items-center gap-2 text-overlay hover:text-primary transition-colors" style={{ textDecoration: 'none' }}>
                  <IconMail />
                  <span className="font-lato" style={{ fontSize: '13px', letterSpacing: '0.3px' }}>{s.correo}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
