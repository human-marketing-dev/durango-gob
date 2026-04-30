export type NavLeaf = {
  label: string
  href: string
}

export type NavSection = {
  label: string
  href: string
  children: NavLeaf[]
}

export type NavEntry = {
  label: string
  href: string
  children?: (NavLeaf | NavSection)[]
}

export function isNavSection(item: NavLeaf | NavSection): item is NavSection {
  return 'children' in item
}

export const nav: NavEntry[] = [
  {
    label: 'PJDGO',
    href: '/pjdgo',
    children: [
      {
        label: 'Tribunal Superior de Justicia',
        href: '/pjdgo/tribunal-superior-de-justicia',
        children: [
          { label: 'Pleno', href: '/pjdgo/tribunal-superior-de-justicia/pleno' },
          { label: 'Órganos Jurisdiccionales', href: '/pjdgo/tribunal-superior-de-justicia/organos-jurisdiccionales' },
          { label: 'Listas de Acuerdos de Primera y Segunda Instancia', href: '/pjdgo/tribunal-superior-de-justicia/listas-de-acuerdos' },
          { label: 'Agenda de Audiencias Oral Mercantil', href: '/pjdgo/tribunal-superior-de-justicia/agenda-audiencias-oral-mercantil' },
          { label: 'Agenda de Audiencias Sistema de Justicia Penal Oral', href: '/pjdgo/tribunal-superior-de-justicia/agenda-audiencias-penal-oral' },
          { label: 'Justicia Digital', href: '/pjdgo/tribunal-superior-de-justicia/justicia-digital' },
          { label: 'Dirección de Vinculación y Atención Ciudadana', href: '/pjdgo/tribunal-superior-de-justicia/vinculacion-atencion-ciudadana' },
          { label: 'Contacto', href: '/pjdgo/tribunal-superior-de-justicia/contacto' },
        ],
      },
      {
        label: 'Tribunal de Disciplina Judicial',
        href: '/pjdgo/tribunal-disciplina-judicial',
        children: [
          { label: 'Pleno y Comisiones', href: '/pjdgo/tribunal-disciplina-judicial/pleno-y-comisiones' },
          { label: 'Evaluaciones y Sanciones', href: '/pjdgo/tribunal-disciplina-judicial/evaluaciones-y-sanciones' },
          { label: 'Quejas y Denuncias', href: '/pjdgo/tribunal-disciplina-judicial/quejas-y-denuncias' },
          { label: 'Contacto', href: '/pjdgo/tribunal-disciplina-judicial/contacto' },
        ],
      },
      {
        label: 'Tribunal de Justicia Penal para Adolescentes',
        href: '/pjdgo/tribunal-justicia-penal-adolescentes',
        children: [
          { label: 'Presidencia', href: '/pjdgo/tribunal-justicia-penal-adolescentes/presidencia' },
          { label: 'Sala Unitaria', href: '/pjdgo/tribunal-justicia-penal-adolescentes/sala-unitaria' },
          { label: 'Comisión de Administración', href: '/pjdgo/tribunal-justicia-penal-adolescentes/comision-de-administracion' },
          { label: 'Juzgados Especializados', href: '/pjdgo/tribunal-justicia-penal-adolescentes/juzgados-especializados' },
          { label: 'Contacto', href: '/pjdgo/tribunal-justicia-penal-adolescentes/contacto' },
        ],
      },
      {
        label: 'Órgano de Administración Judicial',
        href: '/pjdgo/organo-de-administracion-judicial',
        children: [
          { label: 'Pleno y Comisiones', href: '/pjdgo/organo-de-administracion-judicial/pleno-y-comisiones' },
          { label: 'Centro Estatal de Justicia Alternativa (CEJA)', href: '/pjdgo/organo-de-administracion-judicial/ceja' },
          { label: 'Instituto de Defensoría Pública (INDEPU)', href: '/pjdgo/organo-de-administracion-judicial/indepu' },
          { label: 'Centro de Convivencia Familiar (CECOFAM)', href: '/pjdgo/organo-de-administracion-judicial/cecofam' },
          { label: 'Universidad Judicial', href: '/pjdgo/organo-de-administracion-judicial/universidad-judicial' },
          { label: 'Contacto', href: '/pjdgo/organo-de-administracion-judicial/contacto' },
        ],
      },
    ],
  },
  {
    label: 'Transparencia',
    href: '/transparencia',
    children: [
      {
        label: 'Autoridad Garante',
        href: '/transparencia/autoridad-garante',
        children: [
          { label: 'Recursos de Revisión', href: '/transparencia/autoridad-garante/recursos-de-revision' },
          { label: 'Denuncias Ciudadanas', href: '/transparencia/autoridad-garante/denuncias-ciudadanas' },
        ],
      },
      { label: 'Comité de Transparencia', href: '/transparencia/comite-de-transparencia' },
      { label: 'Unidad de Transparencia', href: '/transparencia/unidad-de-transparencia' },
      {
        label: 'Obligaciones',
        href: '/transparencia/obligaciones',
        children: [
          { label: 'Plataforma Nacional de Transparencia', href: '/transparencia/obligaciones/plataforma-nacional-de-transparencia' },
          { label: 'Comunes', href: '/transparencia/obligaciones/comunes' },
          { label: 'Específicas', href: '/transparencia/obligaciones/especificas' },
          { label: 'Transparencia Proactiva', href: '/transparencia/obligaciones/transparencia-proactiva' },
        ],
      },
      { label: 'Avisos de Privacidad', href: '/transparencia/avisos-de-privacidad' },
      { label: 'Solicitudes', href: '/transparencia/solicitudes' },
    ],
  },
  {
    label: 'Trámites y Servicios',
    href: '/tramites-y-servicios',
    children: [
      { label: 'Cartas de Antecedentes Penales', href: '/tramites-y-servicios/cartas-de-antecedentes-penales' },
      { label: 'Lista de Peritos', href: '/tramites-y-servicios/lista-de-peritos' },
      { label: 'Registro de Títulos Profesionales', href: '/tramites-y-servicios/registro-de-titulos-profesionales' },
      { label: 'Justicia Alternativa', href: '/tramites-y-servicios/justicia-alternativa' },
      { label: 'Defensoría Pública', href: '/tramites-y-servicios/defensoria-publica' },
    ],
  },
  {
    label: 'Recursos',
    href: '/recursos',
    children: [
      { label: 'Marco Normativo', href: '/recursos/marco-normativo' },
      { label: 'Organigrama Institucional', href: '/recursos/organigrama-institucional' },
      { label: 'Directorio', href: '/recursos/directorio' },
      { label: 'Calendario', href: '/recursos/calendario' },
      { label: 'Estadística', href: '/recursos/estadistica' },
      { label: 'Voluntariado', href: '/recursos/voluntariado' },
      { label: 'Correo Institucional', href: '/recursos/correo-institucional' },
      { label: 'Sitios de Interés', href: '/recursos/sitios-de-interes' },
    ],
  },
  {
    label: 'Noticias',
    href: '/noticias',
  },
]
