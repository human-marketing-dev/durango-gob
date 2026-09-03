// lib/fotos-magistrados.ts
// Fotos de magistrados disponibles en public/imagenes/magistrados/.
// El archivo se llama igual que el magistrado (con su título) + .webp.
//
// Para agregar una foto: sube el .webp a esa carpeta con el nombre del
// magistrado y agrega ese mismo nombre a la lista de abajo. El emparejamiento
// con las páginas es insensible a acentos y espacios, así que pequeñas
// diferencias (p. ej. "Yésika" vs "Yesika") no rompen el enlace.

const NOMBRES_CON_FOTO = [
  'D. D. Manuel Valadez Díaz',
  'Dr. Álvaro Rodríguez Alcalá',
  'Dr. Luis Fernando Contreras Cortés',
  'Dra. María Magdalena Alanís Herrera',
  'Lic. Gerardo Lara Pérez',
  'Lic. Gloria Guadalupe Galván Román',
  'Lic. Iliana Angélica Alvarado Salinas',
  'Lic. Karina García Montelongo',
  'Lic. Miguel Ángel Quiñones Orozco',
  'Lic. Miriam Guadalupe Lanzarín Roldán',
  'Lic. Yesika Liliana Ramos Rodríguez',
  'M. D. Alejandra Estrada Arreola',
  'M. D. Brenda Lizette Acevedo Castañeda',
  'M. D. Carlos Enrique Guzmán González',
  'M. D. Juan Guillermo Toro Lerma',
  'M. D. Julio César Piña de la Garza',
]

// Ignora acentos, y trata los puntos/comas del t\u00edtulo como espacios, para que
// "M. D." y "M.D." (o "Y\u00e9sika" y "Yesika") emparejen igual.
const normaliza = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[.,]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()

const PORNOMBRE = new Map(NOMBRES_CON_FOTO.map((n) => [normaliza(n), n]))

/** Devuelve la URL de la foto del magistrado, o null si no hay foto para ese nombre. */
export function fotoMagistrado(nombre: string): string | null {
  const archivo = PORNOMBRE.get(normaliza(nombre))
  return archivo ? `/imagenes/magistrados/${encodeURIComponent(archivo)}.webp` : null
}
