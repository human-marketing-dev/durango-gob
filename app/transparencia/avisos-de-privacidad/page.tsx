import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Aviso de Privacidad — Poder Judicial del Estado de Durango',
  description: 'Aviso de privacidad del Poder Judicial del Estado de Durango. Conoce cómo tratamos y protegemos tus datos personales.',
}

// ── Data ──────────────────────────────────────────────────────────────────────

const secciones = [
  {
    id: 'responsable',
    titulo: '1. Responsable del tratamiento de datos personales',
    contenido: `El Poder Judicial del Estado de Durango, con domicilio en C. Zaragoza esq. con 5 de Febrero S/N, Zona Centro, Durango, Dgo., C.P. 34000, es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente.`,
  },
  {
    id: 'finalidades',
    titulo: '2. Finalidades del tratamiento',
    contenido: `Sus datos personales serán utilizados para las siguientes finalidades:`,
    lista: [
      'Atender solicitudes de acceso a la información pública y de datos personales.',
      'Tramitar y resolver solicitudes, trámites y servicios que ofrece este Poder Judicial.',
      'Integrar expedientes judiciales y administrativos conforme a la legislación aplicable.',
      'Dar cumplimiento a obligaciones legales y reglamentarias.',
      'Estadística e informes institucionales en forma anonimizada.',
      'Comunicar información institucional de interés público.',
    ],
  },
  {
    id: 'datos',
    titulo: '3. Datos personales recabados',
    contenido: `Para las finalidades señaladas, podemos recabar las siguientes categorías de datos personales:`,
    lista: [
      'Datos de identificación: nombre completo, CURP, RFC, número de identificación oficial.',
      'Datos de contacto: domicilio, correo electrónico, número de teléfono.',
      'Datos laborales: cargo, institución o empresa, área de adscripción.',
      'Datos procesales: información relacionada con procedimientos judiciales o administrativos.',
    ],
  },
  {
    id: 'transferencias',
    titulo: '4. Transferencias de datos personales',
    contenido: `Sus datos personales podrán ser transferidos y tratados dentro y fuera del país por las siguientes personas, empresas, organizaciones o autoridades distintas a nosotros:`,
    lista: [
      'Autoridades judiciales o administrativas, cuando sea requerido por mandato legal o resolución judicial.',
      'Organismos de fiscalización y control gubernamental, en el ejercicio de sus atribuciones.',
      'Otras instituciones del Poder Judicial Federal o de otras entidades federativas, para la coordinación de funciones.',
    ],
    pie: 'Le informamos que para las transferencias indicadas no requerimos su consentimiento, al encontrarse previstas en el artículo 70 de la Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados.',
  },
  {
    id: 'derechos',
    titulo: '5. Derechos ARCO',
    contenido: `Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento de sus datos personales (derechos ARCO). Para ejercer estos derechos deberá presentar su solicitud ante la Unidad de Transparencia del Poder Judicial del Estado de Durango:`,
    lista: [
      'Domicilio: C. Zaragoza esq. con 5 de Febrero S/N, Zona Centro, Durango, Dgo., C.P. 34000.',
      'Correo electrónico: transparencia@pjdgo.gob.mx',
      'Teléfono: (618) 811 4712, Ext. 215.',
      'Horario de atención: lunes a viernes de 9:00 a 15:00 horas.',
    ],
    pie: 'Su solicitud deberá contener: nombre completo y domicilio, copia de identificación oficial, descripción clara de los datos y del derecho que desea ejercer. Se dará respuesta en un plazo máximo de 20 días hábiles.',
  },
  {
    id: 'revocacion',
    titulo: '6. Revocación del consentimiento',
    contenido: `Usted puede revocar el consentimiento que haya otorgado para el tratamiento de sus datos personales, siempre que el tratamiento no sea necesario para el cumplimiento de una obligación legal. Para revocar su consentimiento deberá presentar su solicitud ante la Unidad de Transparencia en los medios de contacto indicados en el apartado anterior.`,
  },
  {
    id: 'cookies',
    titulo: '7. Uso de cookies y tecnologías de rastreo',
    contenido: `Este sitio web puede utilizar cookies y tecnologías similares para mejorar la experiencia de navegación, analizar el uso del sitio y optimizar el rendimiento. Las cookies son archivos de texto que se almacenan en su dispositivo. Usted puede configurar su navegador para rechazar cookies; sin embargo, algunas funcionalidades del sitio podrían verse afectadas.`,
  },
  {
    id: 'cambios',
    titulo: '8. Cambios al aviso de privacidad',
    contenido: `El presente aviso de privacidad puede ser modificado. Cualquier cambio será comunicado a través de este sitio web con al menos 10 días hábiles de anticipación a su entrada en vigor. Se recomienda revisar periódicamente esta página para conocer la versión más reciente.`,
  },
  {
    id: 'contacto',
    titulo: '9. Contacto y quejas',
    contenido: `Si usted considera que su derecho a la protección de datos personales ha sido lesionado por alguna conducta de este Poder Judicial, puede interponer una queja o denuncia ante el Instituto Duranguense de Acceso a la Información Pública y Protección de Datos Personales (IDAIPD), órgano garante en la materia.`,
  },
]

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <div className="bg-white">

      {/* Breadcrumbs */}
      <div style={{ borderBottom: '1px solid #B8C0B8' }}>
        <div className="max-w-content mx-auto site-px py-3 flex items-center gap-2 flex-wrap">
          {[
            { label: 'Inicio',        href: '/' },
            { label: 'Transparencia', href: '/transparencia' },
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
            Aviso de Privacidad
          </span>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-content mx-auto site-px" style={{ paddingTop: '64px', paddingBottom: '48px', borderBottom: '1px solid #B8C0B8' }}>
        <p className="font-lato text-overlay uppercase mb-3" style={{ fontSize: '11px', letterSpacing: '2px' }}>
          Transparencia
        </p>
        <h1
          className="font-monument text-primary"
          style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '400', letterSpacing: '0.5px', lineHeight: '1.1em', marginBottom: '20px' }}
        >
          Aviso de Privacidad
        </h1>
        <p className="font-lato text-accent" style={{ fontSize: '16px', lineHeight: '1.7em', letterSpacing: '0.3px', maxWidth: '680px' }}>
          El Poder Judicial del Estado de Durango, en cumplimiento a la Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados, le informa sobre el tratamiento que se dará a sus datos personales.
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
                  <ul style={{ paddingLeft: '20px', margin: '0 0 12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {s.lista.map((item, i) => (
                      <li key={i} className="font-lato text-accent" style={{ fontSize: '14px', lineHeight: '1.75em', letterSpacing: '0.3px' }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {s.pie && (
                  <p className="font-lato text-accent" style={{ fontSize: '14px', lineHeight: '1.8em', letterSpacing: '0.3px' }}>
                    {s.pie}
                  </p>
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
