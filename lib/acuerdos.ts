/**
 * Acuerdos del Consejo de la Judicatura, agrupados por año.
 *
 * Para agregar un acuerdo: añade un objeto al arreglo del año correspondiente.
 * Para agregar un año: añade un objeto { anio, acuerdos: [...] }; la página
 * ordena los años de más reciente a más antiguo automáticamente.
 *
 * Los PDF viven en /public/acuerdos/{anio}/ con nombres limpios (kebab-case,
 * sin acentos). `archivo` es solo el nombre del PDF; si se omite, la página
 * muestra el acuerdo con estado "Documento no disponible" (sin botón).
 */
export interface Acuerdo {
  titulo: string
  archivo?: string
}

export interface AcuerdosAnio {
  anio: number
  acuerdos: Acuerdo[]
}

export const acuerdosPorAnio: AcuerdosAnio[] = [
  {
    anio: 2025,
    acuerdos: [
      {
        titulo:
          'Acuerdo del Consejo de la Judicatura por el que se ordena que las y los Jueces que concluyan su cargo, se les conceda el estatus de «Jueces en Retiro».',
        archivo: 'acuerdo-general-5-2025.pdf',
      },
      {
        titulo:
          'Acuerdo General número 5/2025, relativo a la conclusión de labores del Pleno, las Comisiones Permanentes, Órganos Auxiliares y Áreas Administrativas.',
        archivo: 'acuerdo-general-5-2025.pdf',
      },
      {
        titulo:
          'Acuerdo General número 4/2025, que modifica el diverso 4/2013 y reforma el artículo 103 del Reglamento Interior de la Universidad Judicial.',
        archivo: 'acuerdo-general-4-2025.pdf',
      },
      {
        titulo:
          'Acuerdo General número 3/2025, por el que se prorroga la lista de peritos (vigente del 16 de agosto de 2024 al 15 de agosto de 2025).',
        archivo: 'acuerdo-general-3-2025.pdf',
      },
      {
        titulo:
          'Acuerdo Administrativo por el que se conceden 5 (cinco) días más de Licencia Económica al Personal de Confianza de Primera Instancia.',
        archivo: 'acuerdo-administrativo-licencia-economica-2025.pdf',
      },
      {
        titulo:
          'Acuerdo General número 2/2025, por el que se cambia la denominación de la Dirección de Estadística a Dirección de Estadística y Planeación.',
        archivo: 'acuerdo-general-2-2025.pdf',
      },
      {
        titulo:
          'Acuerdo General número 1/2025, por el que se prescinde de los procesos para la ratificación de Juezas y Jueces.',
        archivo: 'acuerdo-general-1-2025.pdf',
      },
    ],
  },
  {
    anio: 2024,
    acuerdos: [
      {
        titulo:
          'Acuerdo General número 5/2024, relativo al funcionamiento de las Coordinaciones de Jueces de Primera Instancia en las Materias Civil, Familiar y Mercantil.',
        archivo: 'acuerdo-general-5-2024.pdf',
      },
      {
        titulo:
          'Acuerdo General número 4/2024, por el que se aprueba la adhesión al Protocolo para Juzgar con Perspectiva de Infancia y Adolescencia, elaborado por la Suprema Corte de Justicia de la Nación.',
        archivo: 'acuerdo-general-4-2024.pdf',
      },
      {
        titulo:
          'Acuerdo del Consejo de la Judicatura relativo a la implementación y funcionamiento del Juzgado Especializado en Materia Familiar y de Control y Enjuiciamiento en Materia Penal, con residencia en Gómez Palacio, Durango.',
        archivo: 'acuerdo-implementacion-juzgado-gomez-palacio-2024.pdf',
      },
      {
        titulo:
          'Acuerdo General número 02/2024, por el que se crea el Juzgado Especializado en Materia Familiar y de Control y Enjuiciamiento en Materia Penal, con residencia en Gómez Palacio, Durango.',
        archivo: 'acuerdo-general-2-2024.pdf',
      },
    ],
  },
]
