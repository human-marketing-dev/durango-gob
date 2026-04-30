import Image from 'next/image'
import Link from 'next/link'

// ── Announcement Banner ───────────────────────────────────────────────────────

function AnnouncementBanner() {
  return (
    <div
      className="bg-blue-bg flex items-center gap-4 flex-wrap px-12 py-3.5"
      style={{ borderLeft: '3px solid #1B1A19' }}
    >
      <span
        className="font-lato text-primary uppercase whitespace-nowrap"
        style={{ fontSize: '10px', fontWeight: '500', letterSpacing: '1.5px' }}
      >
        Aviso Oficial
      </span>
      <span className="font-lato text-accent flex-1" style={{ fontSize: '14px' }}>
        El Poder Judicial del Estado de Durango informa que el sistema de consulta de expedientes en línea se encuentra disponible las 24 horas.
      </span>
      <Link
        href="/noticias"
        className="font-lato text-primary uppercase whitespace-nowrap hover:opacity-70 transition-opacity"
        style={{ fontSize: '12px', fontWeight: '500', letterSpacing: '1px', textDecoration: 'underline' }}
      >
        Leer más
      </Link>
    </div>
  )
}

// ── Hero ──────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="bg-white" style={{ borderBottom: '1px solid #B8C0B8' }}>
      <div
        className="max-w-content mx-auto px-12 flex items-center gap-16"
        style={{ paddingTop: '80px', paddingBottom: '80px' }}
      >
        <div style={{ flex: 1 }}>
          <p
            className="font-lato text-overlay uppercase mb-5"
            style={{ fontSize: '11px', fontWeight: '400', letterSpacing: '2px' }}
          >
            Poder Judicial del Estado de Durango
          </p>
          <h1
            className="t-hero text-primary mb-6"
          >
            Transparencia<br />y Justicia
          </h1>
          <p
            className="font-lato text-accent mb-9"
            style={{ fontSize: '17px', fontWeight: '400', lineHeight: '1.6em', letterSpacing: '0.3px', maxWidth: '480px' }}
          >
            Institución al servicio de la ciudadanía durangueña, garantizando el acceso equitativo a la justicia conforme al marco legal vigente.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="/tramites-y-servicios"
              className="font-lato text-white bg-primary uppercase hover:bg-black transition-colors"
              style={{ fontSize: '13px', fontWeight: '500', letterSpacing: '1.5px', padding: '14px 32px', border: '1px solid #1B1A19', textDecoration: 'none', display: 'inline-block' }}
            >
              Consultar Expediente
            </Link>
            <Link
              href="/pjdgo"
              className="font-lato text-primary bg-transparent uppercase hover:bg-primary hover:text-white transition-colors"
              style={{ fontSize: '13px', fontWeight: '500', letterSpacing: '1.5px', padding: '14px 32px', border: '1px solid #1B1A19', textDecoration: 'none', display: 'inline-block' }}
            >
              Conocer más
            </Link>
          </div>
        </div>

        <div style={{ flexShrink: 0, opacity: 0.05 }} className="hidden md:block">
          <Image src="/logo-negro.webp" alt="" width={280} height={280} aria-hidden />
        </div>
      </div>
    </section>
  )
}

// ── Stats Row ─────────────────────────────────────────────────────────────────

function StatsRow() {
  const stats = [
    { value: '248',   label: 'Juzgados activos' },
    { value: '1,842', label: 'Expedientes resueltos este año' },
    { value: '99%',   label: 'Disponibilidad del sistema' },
    { value: '24/7',  label: 'Consulta en línea' },
  ]

  return (
    <section
      className="bg-primary"
      style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}
    >
      {stats.map((s, i) => (
        <div
          key={s.label}
          className="flex flex-col gap-1.5 px-12 py-10"
          style={{ borderRight: i < stats.length - 1 ? '1px solid #4A535A' : 'none' }}
        >
          <span
            className="font-sans text-white"
            style={{ fontSize: 'clamp(1.75rem,3vw,2.25rem)', fontWeight: '300', letterSpacing: '-1px' }}
          >
            {s.value}
          </span>
          <span
            className="font-lato text-blue-el uppercase"
            style={{ fontSize: '11px', letterSpacing: '1px' }}
          >
            {s.label}
          </span>
        </div>
      ))}
    </section>
  )
}

// ── Services Grid ─────────────────────────────────────────────────────────────

function ServicesGrid() {
  const services = [
    {
      label: 'Trámites',
      title: 'Consulta de Expedientes',
      desc: 'Acceda al estado de su caso judicial de manera rápida y segura.',
      href: '/tramites-y-servicios',
    },
    {
      label: 'Institución',
      title: 'Tribunal Superior de Justicia',
      desc: 'Conozca la estructura orgánica y funciones del Tribunal Superior.',
      href: '/pjdgo/tribunal-superior-de-justicia',
    },
    {
      label: 'Transparencia',
      title: 'Informes y Resoluciones',
      desc: 'Acceda a informes anuales, resoluciones y acuerdos institucionales.',
      href: '/transparencia/obligaciones',
    },
    {
      label: 'Servicios',
      title: 'Antecedentes Penales',
      desc: 'Solicite su carta de antecedentes penales en línea de forma segura.',
      href: '/tramites-y-servicios/cartas-de-antecedentes-penales',
    },
    {
      label: 'Búsqueda',
      title: 'Lista de Peritos',
      desc: 'Consulte el padrón oficial de peritos autorizados por el Poder Judicial.',
      href: '/tramites-y-servicios/lista-de-peritos',
    },
    {
      label: 'Noticias',
      title: 'Comunicados Oficiales',
      desc: 'Boletines, convocatorias y comunicados de prensa institucionales.',
      href: '/noticias',
    },
  ]

  return (
    <section className="max-w-content mx-auto px-12 py-16">
      <div className="mb-10">
        <p
          className="font-lato text-overlay uppercase mb-2"
          style={{ fontSize: '11px', fontWeight: '400', letterSpacing: '2px' }}
        >
          Servicios al Ciudadano
        </p>
        <h2
          className="font-sans text-primary"
          style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: '400', lineHeight: '1.2em' }}
        >
          ¿Qué desea consultar?
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1px',
          background: '#B8C0B8',
        }}
      >
        {services.map(s => (
          <Link
            key={s.href}
            href={s.href}
            className="bg-white flex flex-col gap-2 hover:shadow-lg transition-shadow"
            style={{ padding: '28px 24px', textDecoration: 'none', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}
          >
            <p
              className="font-lato text-blue-el uppercase"
              style={{ fontSize: '10px', fontWeight: '500', letterSpacing: '1.5px' }}
            >
              {s.label}
            </p>
            <h3
              className="font-sans text-primary"
              style={{ fontSize: '18px', fontWeight: '500', lineHeight: '1.2em', letterSpacing: '0.15px' }}
            >
              {s.title}
            </h3>
            <p
              className="font-lato text-accent"
              style={{ fontSize: '14px', lineHeight: '1.5em', letterSpacing: '0.3px', flex: 1 }}
            >
              {s.desc}
            </p>
            <span
              className="font-lato text-primary uppercase mt-2"
              style={{ fontSize: '12px', fontWeight: '500', letterSpacing: '1px' }}
            >
              Acceder →
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}

// ── Quick Access ──────────────────────────────────────────────────────────────

function QuickAccess() {
  const items = [
    { label: 'Consultas Frecuentes', desc: 'Respuestas a las preguntas más comunes.', href: '/tramites-y-servicios' },
    { label: 'Defensoría Pública', desc: 'Asesoría jurídica gratuita para la ciudadanía.', href: '/tramites-y-servicios/defensoria-publica' },
    { label: 'Justicia Alternativa', desc: 'Mediación y conciliación extrajudicial.', href: '/tramites-y-servicios/justicia-alternativa' },
    { label: 'Universidad Judicial', desc: 'Formación y capacitación del personal judicial.', href: '/pjdgo/organo-de-administracion-judicial/universidad-judicial' },
  ]

  return (
    <section className="bg-blue-bg" style={{ padding: '64px 0' }}>
      <div className="max-w-content mx-auto px-12">
        <p
          className="font-lato text-overlay uppercase mb-2"
          style={{ fontSize: '11px', letterSpacing: '2px' }}
        >
          Accesos Rápidos
        </p>
        <h2
          className="font-sans text-primary mb-10"
          style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: '400', lineHeight: '1.2em' }}
        >
          Consultas Frecuentes
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-secondary">
          {items.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="bg-white flex flex-col gap-3 hover:bg-blue-bg transition-colors"
              style={{ padding: '28px 24px', textDecoration: 'none' }}
            >
              <h3
                className="font-sans text-primary"
                style={{ fontSize: '16px', fontWeight: '500', lineHeight: '1.2em' }}
              >
                {item.label}
              </h3>
              <p
                className="font-lato text-accent"
                style={{ fontSize: '13px', lineHeight: '1.5em' }}
              >
                {item.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <AnnouncementBanner />
      <Hero />
      <StatsRow />
      <ServicesGrid />
      <QuickAccess />
    </>
  )
}
