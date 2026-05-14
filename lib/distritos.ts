export interface Distrito {
  id: number
  nombre: string
  sede: string
  direccion: string
  telefono?: string
  lat: number
  lng: number
}

export const distritos: Distrito[] = [
  {
    id: 1,
    nombre: 'Primer Distrito Judicial',
    sede: 'Durango',
    direccion: 'C. Zaragoza esq. con 5 de Febrero S/N, Zona Centro, Durango, Dgo.',
    telefono: '(618) 811 4712',
    lat: 24.0277,
    lng: -104.6532,
  },
  {
    id: 2,
    nombre: 'Segundo Distrito Judicial',
    sede: 'Gómez Palacio',
    direccion: 'Av. Francisco I. Madero, Gómez Palacio, Dgo.',
    lat: 25.5671,
    lng: -103.5006,
  },
  {
    id: 3,
    nombre: 'Tercer Distrito Judicial',
    sede: 'Santiago Papasquiaro',
    direccion: 'Centro, Santiago Papasquiaro, Dgo.',
    lat: 25.0467,
    lng: -105.4158,
  },
  {
    id: 4,
    nombre: 'Cuarto Distrito Judicial',
    sede: 'Canatlán',
    direccion: 'Centro, Canatlán, Dgo.',
    lat: 24.5167,
    lng: -104.7833,
  },
  {
    id: 5,
    nombre: 'Quinto Distrito Judicial',
    sede: 'Nombre de Dios',
    direccion: 'Centro, Nombre de Dios, Dgo.',
    lat: 23.8500,
    lng: -104.2167,
  },
  {
    id: 6,
    nombre: 'Sexto Distrito Judicial',
    sede: 'El Salto',
    direccion: 'Centro, El Salto, Pueblo Nuevo, Dgo.',
    lat: 23.7833,
    lng: -105.3667,
  },
  {
    id: 7,
    nombre: 'Séptimo Distrito Judicial',
    sede: 'Tepehuanes',
    direccion: 'Centro, Tepehuanes, Dgo.',
    lat: 25.3500,
    lng: -105.7333,
  },
  {
    id: 8,
    nombre: 'Octavo Distrito Judicial',
    sede: 'Tamazula',
    direccion: 'Centro, Tamazula, Dgo.',
    lat: 25.9633,
    lng: -106.9736,
  },
]
