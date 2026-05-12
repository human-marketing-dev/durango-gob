import Image from 'next/image'
import Link from 'next/link'

// ── Icons ─────────────────────────────────────────────────────────────────────

function IconFile() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '28px', height: '28px' }}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  )
}
function IconList() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '28px', height: '28px' }}>
      <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" />
      <line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
    </svg>
  )
}
function IconDiploma() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '28px', height: '28px' }}>
      <rect x="2" y="4" width="20" height="13" />
      <line x1="7" y1="9" x2="17" y2="9" /><line x1="7" y1="12.5" x2="13" y2="12.5" />
      <polyline points="8 17 8 21 12 19 16 21 16 17" />
    </svg>
  )
}
function IconScales() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '28px', height: '28px' }}>
      <line x1="12" y1="3" x2="12" y2="21" />
      <path d="M5 21h14M3 7l9-4 9 4" />
      <path d="M6 7L3 14a3 3 0 0 0 6 0L6 7" />
      <path d="M18 7l-3 7a3 3 0 0 0 6 0l-3-7" />
    </svg>
  )
}
function IconOrg() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '28px', height: '28px' }}>
      <rect x="8" y="1" width="8" height="5" /><rect x="1" y="15" width="6" height="5" />
      <rect x="9" y="15" width="6" height="5" /><rect x="17" y="15" width="6" height="5" />
      <line x1="12" y1="6" x2="12" y2="11" /><line x1="4" y1="11" x2="20" y2="11" />
      <line x1="4" y1="11" x2="4" y2="15" /><line x1="12" y1="11" x2="12" y2="15" /><line x1="20" y1="11" x2="20" y2="15" />
    </svg>
  )
}
function IconBook() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '28px', height: '28px' }}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <circle cx="12" cy="9" r="2" />
      <path d="M9 14s.5-2 3-2 3 2 3 2" />
    </svg>
  )
}
function IconCalendar() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '28px', height: '28px' }}>
      <rect x="3" y="4" width="18" height="18" />
      <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}
function IconHeart() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '28px', height: '28px' }}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

// ── Section 1: Hero ───────────────────────────────────────────────────────────

function Hero() {
  return (
    <section style={{ position: 'relative', height: '80vh', overflow: 'hidden', minHeight: '480px' }}>
      <Image
        src="/dgo-hero-img%20(1).webp"
        alt="Poder Judicial del Estado de Durango"
        fill
        priority
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
    </section>
  )
}

// ── Section 2: Bienvenido ────────────────────────────────────────────────────

const quickLinks = [
  { label: 'Lista de Acuerdos',          href: '/pjdgo/tribunal-superior-de-justicia/listas-de-acuerdos',       Icon: IconList     },
  { label: 'Lista de Peritos',           href: '/tramites-y-servicios/lista-de-peritos',                        Icon: IconFile     },
  { label: 'Calendario',                 href: '/recursos/calendario',                                          Icon: IconCalendar },
  { label: 'Directorio',                 href: '/recursos/directorio',                                          Icon: IconBook     },
  { label: 'Justicia Alternativa (CEJA)', href: '/tramites-y-servicios/justicia-alternativa',                   Icon: IconScales   },
  { label: 'Defensoría Pública (INDEPU)', href: '/tramites-y-servicios/defensoria-publica',                     Icon: IconOrg      },
  { label: 'Carta de Antecedentes',      href: '/tramites-y-servicios/cartas-de-antecedentes-penales',          Icon: IconDiploma  },
  { label: 'Registro de Títulos',        href: '/tramites-y-servicios/registro-de-titulos-profesionales',       Icon: IconHeart    },
]

function WelcomeSection() {
  return (
    <section className="bg-white" style={{ padding: '80px 0', borderBottom: '1px solid #B8C0B8' }}>
      <div className="max-w-content mx-auto site-px">
        <div className="mb-12">
          <h2
            className="font-monument text-primary"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: '400', letterSpacing: '1px', lineHeight: '1.1em', marginBottom: '12px' }}
          >
            Bienvenido
          </h2>
          <p
            className="font-sans text-accent"
            style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)', fontWeight: '400', maxWidth: '520px' }}
          >
            Explora algunas de nuestras búsquedas más comunes.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1px',
            background: '#B8C0B8',
          }}
        >
          {quickLinks.map(({ label, href, Icon }) => (
            <Link
              key={href}
              href={href}
              className="bg-white flex flex-col items-start gap-4 hover:bg-blue-bg transition-colors group"
              style={{ padding: '32px 28px', textDecoration: 'none' }}
            >
              <span className="text-accent group-hover:text-primary transition-colors">
                <Icon />
              </span>
              <span
                className="font-lato text-primary"
                style={{ fontSize: '14px', fontWeight: '500', lineHeight: '1.4em', letterSpacing: '0.3px' }}
              >
                {label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Section 4: Institution Logos ──────────────────────────────────────────────

const institutions = [
  {
    name: 'Tribunal Superior de Justicia',
    img: '/DURANGO-GOB_Superior-de-justicia-scaled.webp',
    href: '/pjdgo/tribunal-superior-de-justicia',
  },
  {
    name: 'Tribunal de Disciplina Judicial',
    img: '/DURANGO-GOB_Disciplina-Judicial-scaled.webp',
    href: '/pjdgo/tribunal-disciplina-judicial',
  },
  {
    name: 'Tribunal de Justicia Penal para Adolescentes',
    img: '/DURANGO-GOB_Justicia-Penal-para-Adolescentes-scaled.webp',
    href: '/pjdgo/tribunal-justicia-penal-adolescentes',
  },
  {
    name: 'Órgano de Administración Judicial',
    img: '/DURANGO-GOB_Administracion-Judicial-scaled.webp',
    href: '/pjdgo/organo-de-administracion-judicial',
  },
]

function InstitutionLogos() {
  return (
    <section className="bg-blue-bg" style={{ padding: '64px 0', borderBottom: '1px solid #B8C0B8' }}>
      <div className="max-w-content mx-auto site-px">
        <div className="mb-10">
          <p
            className="font-lato text-overlay uppercase mb-2"
            style={{ fontSize: '11px', letterSpacing: '2px' }}
          >
            PJDGO
          </p>
          <h2
            className="font-sans text-primary"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: '400', lineHeight: '1.2em' }}
          >
            Órganos del Poder Judicial
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1px',
            background: '#B8C0B8',
          }}
        >
          {institutions.map(({ name, img, href }) => (
            <Link
              key={href}
              href={href}
              className="bg-white flex flex-col items-center gap-6 hover:bg-blue-bg transition-colors"
              style={{ padding: '56px 40px', textDecoration: 'none' }}
            >
              <div style={{ position: 'relative', width: '100%', height: '160px' }}>
                <Image
                  src={img}
                  alt={name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <p
                className="font-lato text-primary text-center"
                style={{ fontSize: '13px', fontWeight: '500', letterSpacing: '0.5px', lineHeight: '1.6em' }}
              >
                {name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Section 5: Blog / Noticias ────────────────────────────────────────────────

const noticias = [
  {
    categoria: 'Comunicado',
    fecha: '15 de abril de 2026',
    titulo: 'El Tribunal Superior de Justicia moderniza sus sistemas de consulta en línea',
    resumen: 'El Poder Judicial del Estado de Durango pone a disposición de la ciudadanía una plataforma renovada para la consulta de expedientes judiciales, garantizando mayor accesibilidad y transparencia en los procesos.',
    href: '/noticias',
  },
  {
    categoria: 'Universidad Judicial',
    fecha: '3 de abril de 2026',
    titulo: 'Universidad Judicial inicia el proceso de admisión para el ciclo 2026',
    resumen: 'La Universidad Judicial del Estado de Durango abre convocatoria para los programas de formación dirigidos a actuarios, secretarios y oficiales judiciales. El período de registro concluye el 30 de mayo.',
    href: '/noticias',
  },
]

function BlogSection() {
  return (
    <section className="bg-white" style={{ padding: '80px 0', borderBottom: '1px solid #B8C0B8' }}>
      <div className="max-w-content mx-auto site-px">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p
              className="font-lato text-overlay uppercase mb-2"
              style={{ fontSize: '11px', letterSpacing: '2px' }}
            >
              Información Institucional
            </p>
            <h2
              className="font-sans text-primary"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: '400', lineHeight: '1.2em' }}
            >
              Noticias
            </h2>
          </div>
          <Link
            href="/noticias"
            className="font-lato text-primary uppercase hover:opacity-70 transition-opacity"
            style={{ fontSize: '12px', fontWeight: '500', letterSpacing: '1.5px', textDecoration: 'underline', marginBottom: '4px' }}
          >
            Ver todas
          </Link>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1px',
            background: '#B8C0B8',
          }}
        >
          {noticias.map((noticia, i) => (
            <article
              key={i}
              className="bg-white flex flex-col"
              style={{ padding: '40px 36px' }}
            >
              <div className="flex items-center gap-4 mb-5">
                <span
                  className="font-lato text-primary uppercase"
                  style={{
                    fontSize: '10px',
                    fontWeight: '500',
                    letterSpacing: '1.5px',
                    padding: '4px 10px',
                    border: '1px solid #1B1A19',
                  }}
                >
                  {noticia.categoria}
                </span>
                <span
                  className="font-lato text-overlay"
                  style={{ fontSize: '12px', letterSpacing: '0.5px' }}
                >
                  {noticia.fecha}
                </span>
              </div>

              <h3
                className="font-sans text-primary mb-4"
                style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.35rem)', fontWeight: '500', lineHeight: '1.3em', letterSpacing: '0.15px' }}
              >
                {noticia.titulo}
              </h3>

              <p
                className="font-lato text-accent flex-1 mb-6"
                style={{ fontSize: '14px', lineHeight: '1.65em', letterSpacing: '0.3px' }}
              >
                {noticia.resumen}
              </p>

              <Link
                href={noticia.href}
                className="font-lato text-primary uppercase hover:opacity-70 transition-opacity self-start"
                style={{ fontSize: '12px', fontWeight: '500', letterSpacing: '1.25px', textDecoration: 'underline' }}
              >
                Leer más
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Section 6: Gallery (full-width, single photo) ────────────────────────────

function Gallery() {
  return (
    <section style={{ position: 'relative', height: '60vh', minHeight: '400px', overflow: 'hidden', width: '100%' }}>
      <Image
        src="/Prueba-DGO.webp"
        alt="Poder Judicial del Estado de Durango"
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
    </section>
  )
}

// ── Section 7: Convocatorias ──────────────────────────────────────────────────

const convocatorias = [
  {
    imagen: '/convocatoria-actuarios-judiciales.webp',
    categoria: 'Convocatoria',
    titulo: 'Formación para Actuarios Judiciales',
    descripcion: 'Programa de formación especializada para aspirantes al cargo de actuario judicial en el Estado de Durango.',
    plazo: 'Cierre: 30 de junio de 2026',
    href: '/pjdgo/organo-de-administracion-judicial/universidad-judicial',
  },
  {
    imagen: '/convocatoria-para-secretarios.webp',
    categoria: 'Convocatoria',
    titulo: 'Formación para Secretarios',
    descripcion: 'Programa dirigido a aspirantes al cargo de secretario judicial, con énfasis en derecho procesal y práctica forense.',
    plazo: 'Cierre: 15 de julio de 2026',
    href: '/pjdgo/organo-de-administracion-judicial/universidad-judicial',
  },
  {
    imagen: '/convocatoria-oficiales-judiciales.webp',
    categoria: 'Convocatoria',
    titulo: 'Formación de Oficiales Judiciales',
    descripcion: 'Proceso de formación para oficiales judiciales con módulos de administración, archivo y procedimientos internos.',
    plazo: 'Cierre: 31 de julio de 2026',
    href: '/pjdgo/organo-de-administracion-judicial/universidad-judicial',
  },
  {
    imagen: '/convocatoria-actuarios-judiciales.webp',
    categoria: 'Convocatoria',
    titulo: 'Formación para Actuarios Judiciales',
    descripcion: 'Programa de formación especializada para aspirantes al cargo de actuario judicial en el Estado de Durango.',
    plazo: 'Cierre: 30 de junio de 2026',
    href: '/pjdgo/organo-de-administracion-judicial/universidad-judicial',
  },
]

function Convocatorias() {
  return (
    <section className="bg-white" style={{ padding: '80px 0' }}>
      <div className="max-w-content mx-auto site-px">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p
              className="font-lato text-overlay uppercase mb-2"
              style={{ fontSize: '11px', letterSpacing: '2px' }}
            >
              Universidad Judicial
            </p>
            <h2
              className="font-sans text-primary"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: '400', lineHeight: '1.2em' }}
            >
              Convocatorias
            </h2>
          </div>
          <Link
            href="/pjdgo/organo-de-administracion-judicial/universidad-judicial"
            className="font-lato text-primary uppercase hover:opacity-70 transition-opacity"
            style={{ fontSize: '12px', fontWeight: '500', letterSpacing: '1.5px', textDecoration: 'underline', marginBottom: '4px' }}
          >
            Ver todas
          </Link>
        </div>

        {/* Grid — add more items to convocatorias[] to auto-extend */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {convocatorias.map((c, i) => (
            <article key={i} className="bg-white flex flex-col">
              {/* Image */}
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <Image
                  src={c.imagen}
                  alt={c.titulo}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1" style={{ padding: '28px 24px' }}>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="font-lato text-primary uppercase"
                    style={{ fontSize: '10px', fontWeight: '500', letterSpacing: '1.5px', padding: '3px 8px', border: '1px solid #1B1A19' }}
                  >
                    {c.categoria}
                  </span>
                  <span
                    className="font-lato text-overlay"
                    style={{ fontSize: '11px', letterSpacing: '0.3px' }}
                  >
                    {c.plazo}
                  </span>
                </div>

                <h3
                  className="font-sans text-primary mb-3"
                  style={{ fontSize: '18px', fontWeight: '500', lineHeight: '1.25em', letterSpacing: '0.15px' }}
                >
                  {c.titulo}
                </h3>

                <p
                  className="font-lato text-accent flex-1 mb-6"
                  style={{ fontSize: '14px', lineHeight: '1.6em', letterSpacing: '0.3px' }}
                >
                  {c.descripcion}
                </p>

                <Link
                  href={c.href}
                  className="font-lato text-white bg-primary uppercase text-center hover:bg-black transition-colors self-start"
                  style={{ fontSize: '12px', fontWeight: '500', letterSpacing: '1.5px', padding: '12px 24px', border: '1px solid #1B1A19', textDecoration: 'none', display: 'inline-block' }}
                >
                  Ver convocatoria
                </Link>
              </div>
            </article>
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
      <Hero />
      <WelcomeSection />
      <InstitutionLogos />
      <BlogSection />
      <Gallery />
      <Convocatorias />
    </>
  )
}
