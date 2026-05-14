import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Términos de Uso — Poder Judicial del Estado de Durango',
  description: 'Términos y condiciones de uso del sitio web oficial del Poder Judicial del Estado de Durango.',
}

// ── Data ──────────────────────────────────────────────────────────────────────

const secciones = [
  {
    id: 'objeto',
    titulo: '1. Objeto',
    contenido: `Los presentes Términos de Uso regulan el acceso y la utilización del sitio web oficial del Poder Judicial del Estado de Durango (en adelante, "el Sitio"), disponible en el dominio pjdgo.gob.mx. El acceso al Sitio implica la aceptación plena y sin reservas de las presentes condiciones. Si no está de acuerdo con ellas, le rogamos que no utilice este Sitio.`,
  },
  {
    id: 'uso-permitido',
    titulo: '2. Uso permitido',
    contenido: `El Sitio ha sido creado con la finalidad de poner a disposición de la ciudadanía información institucional, jurídica y de acceso a servicios del Poder Judicial del Estado de Durango. Usted puede:`,
    lista: [
      'Consultar y descargar los contenidos publicados para uso personal, educativo o informativo.',
      'Citar o reproducir parcialmente el contenido, siempre que se indique la fuente y no se altere su sentido.',
      'Acceder a los trámites y servicios disponibles en línea conforme a las instrucciones publicadas.',
    ],
  },
  {
    id: 'uso-prohibido',
    titulo: '3. Uso prohibido',
    contenido: `Queda expresamente prohibido:`,
    lista: [
      'Reproducir, distribuir o modificar total o parcialmente los contenidos del Sitio con fines comerciales sin autorización expresa.',
      'Utilizar el Sitio para difundir información falsa, engañosa o que atente contra el orden público.',
      'Intentar acceder de manera no autorizada a sistemas, bases de datos o áreas restringidas.',
      'Introducir virus, código malicioso o cualquier elemento que pueda dañar o alterar el funcionamiento del Sitio.',
      'Usar el Sitio para envío masivo de comunicaciones no solicitadas.',
    ],
  },
  {
    id: 'propiedad-intelectual',
    titulo: '4. Propiedad intelectual',
    contenido: `Los contenidos del Sitio, incluyendo textos, imágenes, logotipos, diseño gráfico y estructura, son propiedad del Poder Judicial del Estado de Durango o se encuentran publicados con autorización de sus titulares. Están protegidos por la legislación mexicana en materia de propiedad intelectual. El uso no autorizado de dichos contenidos puede constituir una infracción a las leyes aplicables.`,
  },
  {
    id: 'exactitud',
    titulo: '5. Exactitud de la información',
    contenido: `El Poder Judicial del Estado de Durango procura que la información publicada en el Sitio sea exacta y esté actualizada; sin embargo, no garantiza la integridad, exactitud o vigencia de todos los contenidos en todo momento. La información publicada tiene carácter meramente informativo y no constituye asesoría jurídica. Para asuntos legales concretos, consulte con un profesional del derecho o acuda directamente a las instancias correspondientes.`,
  },
  {
    id: 'disponibilidad',
    titulo: '6. Disponibilidad del servicio',
    contenido: `El Poder Judicial del Estado de Durango no garantiza la disponibilidad ininterrumpida del Sitio. Puede ser necesario suspender temporalmente el acceso por razones de mantenimiento, actualizaciones técnicas, causas de fuerza mayor u otras circunstancias. No nos hacemos responsables por los daños o perjuicios que pudiera ocasionar la falta de disponibilidad del Sitio.`,
  },
  {
    id: 'enlaces',
    titulo: '7. Enlaces a sitios externos',
    contenido: `El Sitio puede contener vínculos a páginas de terceros. Dichos enlaces se incluyen únicamente para facilitar la búsqueda de información. El Poder Judicial del Estado de Durango no controla ni se responsabiliza por los contenidos, políticas de privacidad o prácticas de los sitios enlazados. La inclusión de un enlace no implica respaldo ni recomendación.`,
  },
  {
    id: 'responsabilidad',
    titulo: '8. Limitación de responsabilidad',
    contenido: `En la medida permitida por la legislación vigente, el Poder Judicial del Estado de Durango no será responsable por daños directos, indirectos, incidentales o consecuentes derivados del uso o la imposibilidad de uso del Sitio, ni de los errores u omisiones en la información publicada.`,
  },
  {
    id: 'modificaciones',
    titulo: '9. Modificaciones',
    contenido: `El Poder Judicial del Estado de Durango se reserva el derecho de modificar los presentes Términos de Uso en cualquier momento. Los cambios serán publicados en esta página y entrarán en vigor a partir de su publicación. El uso continuado del Sitio tras la publicación de los cambios implicará su aceptación.`,
  },
  {
    id: 'legislacion',
    titulo: '10. Legislación aplicable y jurisdicción',
    contenido: `Los presentes Términos de Uso se rigen por la legislación mexicana vigente. Para cualquier controversia derivada del uso del Sitio, las partes se someten a la jurisdicción de los tribunales competentes en el Estado de Durango, renunciando expresamente a cualquier otro fuero que pudiera corresponderles.`,
  },
  {
    id: 'contacto',
    titulo: '11. Contacto',
    contenido: `Para cualquier consulta relacionada con los presentes Términos de Uso, puede comunicarse con nosotros a través de:`,
    lista: [
      'Correo electrónico: transparencia@pjdgo.gob.mx',
      'Domicilio: C. Zaragoza esq. con 5 de Febrero S/N, Zona Centro, Durango, Dgo., C.P. 34000.',
      'Teléfono: (618) 811 4712, Ext. 215.',
    ],
  },
]

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <div className="bg-white">

      {/* Breadcrumbs */}
      <div style={{ borderBottom: '1px solid #B8C0B8' }}>
        <div className="max-w-content mx-auto site-px py-3 flex items-center gap-2 flex-wrap">
          <span className="flex items-center gap-2">
            <Link
              href="/"
              className="font-lato text-overlay hover:text-primary transition-colors"
              style={{ fontSize: '12px', letterSpacing: '0.3px', textDecoration: 'none' }}
            >
              Inicio
            </Link>
            <span className="text-overlay" style={{ fontSize: '12px' }}>›</span>
          </span>
          <span className="font-lato text-primary" style={{ fontSize: '12px', letterSpacing: '0.3px' }}>
            Términos de Uso
          </span>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '64px', paddingBottom: '48px', borderBottom: '1px solid #B8C0B8' }}>
        <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>
          Legal
        </p>
        <h1
          className="font-monument text-primary"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '400', letterSpacing: '0.5px', lineHeight: '1.1em', marginBottom: '20px' }}
        >
          Términos de Uso
        </h1>
        <p className="font-lato text-accent" style={{ fontSize: '16px', lineHeight: '1.7em', letterSpacing: '0.3px', maxWidth: '680px' }}>
          Condiciones que regulan el acceso y uso del sitio web oficial del Poder Judicial del Estado de Durango. Al navegar en este sitio, usted acepta los presentes términos.
        </p>
        <p className="font-lato text-overlay" style={{ fontSize: '13px', marginTop: '16px', letterSpacing: '0.3px' }}>
          Última actualización: mayo de 2026
        </p>
      </div>

      {/* Content */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '56px', paddingBottom: '80px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

          {/* Table of contents */}
          <aside className="lg:col-span-1">
            <div style={{ position: 'sticky', top: '24px' }}>
              <p className="font-lato text-overlay uppercase mb-4" style={{ fontSize: '10px', letterSpacing: '2px', fontWeight: '600' }}>
                Contenido
              </p>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                {secciones.map(s => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="font-lato text-overlay hover:text-primary transition-colors"
                    style={{ fontSize: '12px', lineHeight: '1.6em', letterSpacing: '0.3px', textDecoration: 'none', padding: '4px 0', borderBottom: '1px solid #EEF0EE' }}
                  >
                    {s.titulo}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Sections */}
          <div className="lg:col-span-3" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {secciones.map(s => (
              <section key={s.id} id={s.id} style={{ scrollMarginTop: '24px' }}>
                <h2
                  className="font-monument text-primary"
                  style={{ fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', fontWeight: '400', lineHeight: '1.3em', marginBottom: '12px' }}
                >
                  {s.titulo}
                </h2>
                <p className="font-lato text-accent" style={{ fontSize: '14px', lineHeight: '1.8em', letterSpacing: '0.3px', marginBottom: s.lista ? '12px' : '0' }}>
                  {s.contenido}
                </p>
                {s.lista && (
                  <ul style={{ paddingLeft: '20px', margin: '0', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {s.lista.map((item, i) => (
                      <li key={i} className="font-lato text-accent" style={{ fontSize: '14px', lineHeight: '1.75em', letterSpacing: '0.3px' }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                <div style={{ marginTop: '24px', borderBottom: '1px solid #EEF0EE' }} />
              </section>
            ))}
          </div>

        </div>
      </div>

    </div>
  )
}
