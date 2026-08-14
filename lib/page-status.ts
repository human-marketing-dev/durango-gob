import { nav, isNavSection, type NavLeaf, type NavSection } from '@/lib/nav'

/**
 * Estado de cada página del sitio.
 *
 *   listo     — verde    · la página está armada y tiene la información real
 *   armado    — amarillo · la página está armada, faltan los datos definitivos
 *   pendiente — gris     · la página aún no se hace (sólo el stub)
 *
 * Al terminar una página, mueve su ruta al estado que corresponda.
 */
export type PageStatus = 'listo' | 'armado' | 'pendiente'

export const STATUS_META: Record<PageStatus, { label: string; description: string; color: string }> = {
  listo: {
    label: 'Con información',
    description: 'Página armada y con la información definitiva.',
    color: '#2F7D4F',
  },
  armado: {
    label: 'Armada sin información',
    description: 'Estructura y diseño listos, faltan los datos reales.',
    color: '#C8922A',
  },
  pendiente: {
    label: 'Por hacer',
    description: 'Todavía no se construye la página.',
    color: '#B8C0B8',
  },
}

/**
 * Páginas armadas a las que aún les faltan datos definitivos:
 *  - universidad-judicial: correo y dirección pendientes de entrega del cliente.
 *  - recursos-de-revision: textos y campos provisionales, pendientes de validación del cliente.
 */
const ARMADO: string[] = [
  '/pjdgo/organo-de-administracion-judicial/universidad-judicial',
  '/transparencia/autoridad-garante/recursos-de-revision',
]

/** Páginas que sólo tienen el stub de «Contenido en construcción». */
const PENDIENTE: string[] = [
  '/pjdgo',
  '/pjdgo/tribunal-superior-de-justicia',
  '/pjdgo/tribunal-superior-de-justicia/justicia-digital',
  '/pjdgo/tribunal-superior-de-justicia/vinculacion-atencion-ciudadana',
  '/pjdgo/tribunal-disciplina-judicial',
  '/pjdgo/tribunal-disciplina-judicial/evaluaciones-y-sanciones',
  '/pjdgo/tribunal-disciplina-judicial/quejas-y-denuncias',
  '/pjdgo/tribunal-justicia-penal-adolescentes',
  '/pjdgo/tribunal-justicia-penal-adolescentes/sala-unitaria',
  '/pjdgo/tribunal-justicia-penal-adolescentes/comision-de-administracion',
  '/pjdgo/tribunal-justicia-penal-adolescentes/juzgados-especializados',
  '/pjdgo/organo-de-administracion-judicial',
  '/transparencia',
  '/transparencia/autoridad-garante',
  '/transparencia/unidad-de-transparencia',
  '/transparencia/obligaciones',
  '/tramites-y-servicios',
  '/tramites-y-servicios/registro-de-titulos-profesionales',
  '/recursos',
  '/recursos/voluntariado',
  '/noticias',
]

const armado = new Set(ARMADO)
const pendiente = new Set(PENDIENTE)

export function statusOf(href: string): PageStatus {
  if (pendiente.has(href)) return 'pendiente'
  if (armado.has(href)) return 'armado'
  return 'listo'
}

/** Una sección del nav no siempre declara `href`; su índice vive un nivel arriba de sus hijos. */
export function sectionHref(section: NavSection): string {
  if (section.href) return section.href
  const first = section.children[0]?.href ?? '/'
  return first.split('/').slice(0, -1).join('/') || '/'
}

/** Páginas reales que no cuelgan del nav. */
export const EXTRA_PAGES: NavLeaf[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Términos de Uso', href: '/terminos-de-uso' },
]

/** Todas las rutas del sitio, en orden de aparición. */
export function allHrefs(): string[] {
  const hrefs: string[] = ['/']
  for (const entry of nav) {
    hrefs.push(entry.href)
    for (const child of entry.children ?? []) {
      if (isNavSection(child)) {
        hrefs.push(sectionHref(child))
        for (const leaf of child.children) hrefs.push(leaf.href)
      } else {
        hrefs.push(child.href)
      }
    }
  }
  hrefs.push('/terminos-de-uso')
  return [...new Set(hrefs)]
}

export function statusCounts(): Record<PageStatus, number> & { total: number } {
  const counts = { listo: 0, armado: 0, pendiente: 0, total: 0 }
  for (const href of allHrefs()) {
    counts[statusOf(href)]++
    counts.total++
  }
  return counts
}
