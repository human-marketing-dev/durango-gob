export interface Distrito {
  /** Número para el marcador del mapa y el orden (1..13). */
  id: number
  /** Ordinal oficial, tal cual la tabla: 'Primero' … 'Décimo Tercero'. */
  numero: string
  /** Cabecera del distrito (columna del medio de la tabla oficial). */
  cabecera: string
  /** Municipios que comprende, con los nombres EXACTOS de la fuente oficial. */
  municipios: string[]
  lat: number
  lng: number
}

/**
 * Fuente de verdad: tabla oficial de los 13 Distritos Judiciales del Estado de
 * Durango. Los nombres de municipios se copian exactamente (acentos incluidos);
 * no corregir.
 *
 * NOTA sobre coordenadas: lat/lng son la ubicación aproximada de cada cabecera
 * municipal, solo para colocar el marcador en el mapa (no vienen en la tabla
 * oficial). Conviene verificarlas visualmente; las más remotas (Topia, Santa
 * María del Oro) son las más propensas a requerir ajuste.
 */
export const distritos: Distrito[] = [
  {
    id: 1,
    numero: 'Primero',
    cabecera: 'Durango',
    municipios: ['Durango', 'El Mezquital', 'Tayoltita', 'San Dimas', 'Rafael Buelna', 'Guarisamey', 'Carboneras del Municipio de San Dimas'],
    lat: 24.0277,
    lng: -104.6532,
  },
  {
    id: 2,
    numero: 'Segundo',
    cabecera: 'Lerdo',
    municipios: ['Lerdo', 'Mapimí'],
    lat: 25.5344,
    lng: -103.5253,
  },
  {
    id: 3,
    numero: 'Tercero',
    cabecera: 'Gómez Palacio',
    municipios: ['Gómez Palacio', 'Tlahualilo'],
    lat: 25.5686,
    lng: -103.4956,
  },
  {
    id: 4,
    numero: 'Cuarto',
    cabecera: 'Santiago Papasquiaro',
    municipios: ['Santiago Papasquiaro', 'Tepehuanes', 'Guanaceví', 'Otáez'],
    lat: 25.0447,
    lng: -105.4181,
  },
  {
    id: 5,
    numero: 'Quinto',
    cabecera: 'Canatlán',
    municipios: ['Canatlán', 'Nuevo Ideal'],
    lat: 24.5197,
    lng: -104.7789,
  },
  {
    id: 6,
    numero: 'Sexto',
    cabecera: 'El Salto, P.N.',
    municipios: ['El Salto, P.N.', 'San Dimas, con excepción de las poblaciones incluidas en el Primer Distrito'],
    lat: 23.7828,
    lng: -105.3606,
  },
  {
    id: 7,
    numero: 'Séptimo',
    cabecera: 'Topia',
    municipios: ['Topia', 'Canelas'],
    lat: 25.2122,
    lng: -106.5719,
  },
  {
    id: 8,
    numero: 'Octavo',
    cabecera: 'Guadalupe Victoria',
    municipios: ['Guadalupe Victoria', 'Panuco de Coronado'],
    lat: 24.4469,
    lng: -104.1206,
  },
  {
    id: 9,
    numero: 'Noveno',
    cabecera: 'Cuencamé',
    municipios: ['Cuencamé', 'Peñón Blanco', 'Santa Clara', 'San Juan de Guadalupe', 'Simón Bolívar'],
    lat: 24.8703,
    lng: -103.6942,
  },
  {
    id: 10,
    numero: 'Décimo',
    cabecera: 'Nazas',
    municipios: ['Nazas', 'San Luis del Cordero', 'San Pedro del Gallo'],
    lat: 25.2267,
    lng: -104.1092,
  },
  {
    id: 11,
    numero: 'Décimo Primero',
    cabecera: 'San Juan del Río',
    municipios: ['San Juan del Río', 'Rodeo', 'Coneto de Comonfort'],
    lat: 24.7847,
    lng: -104.4553,
  },
  {
    id: 12,
    numero: 'Décimo Segundo',
    cabecera: 'Santa María del Oro',
    municipios: ['Santa María del Oro', 'Indé', 'Ocampo', 'San Bernardo', 'Hidalgo'],
    lat: 25.9497,
    lng: -105.3686,
  },
  {
    id: 13,
    numero: 'Décimo Tercero',
    cabecera: 'Nombre de Dios',
    municipios: ['Nombre de Dios', 'Súchil', 'Poanas', 'Vicente Guerrero'],
    lat: 23.8497,
    lng: -104.2372,
  },
]
