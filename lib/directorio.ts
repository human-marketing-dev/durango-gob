/**
 * Datos de titular + contacto de los organismos, separados del componente.
 * Los consume <DirectorioContacto data={directorio.<slug>} />.
 *
 * Para completar datos pendientes (ej. correo/dirección de la Universidad
 * Judicial): agrega los campos aquí; el componente los renderiza en cuanto
 * existan. No inventar datos que no estén confirmados.
 *
 * `mapaQuery` es el término de búsqueda para el iframe de Google Maps
 * (patrón del sitio, output=embed). Omítelo si no hay ubicación.
 */
export interface Telefono {
  /** Cómo se muestra, ej. "618 835 03 86". */
  display: string
  /** Dígitos para el link tel:, ej. "6188350386" (sin extensión). */
  tel: string
  /** Extensión opcional; se muestra como texto, no va en el link. */
  ext?: string
}

export interface Directorio {
  titular: { nombre: string; cargo: string; grado?: string }
  contacto: {
    direccion?: string[]
    telefonos?: Telefono[]
    correo?: string
    mapaQuery?: string
  }
}

export const directorio: Record<string, Directorio> = {
  indepu: {
    titular: {
      nombre: 'Lic. Juan Antonio Pescador Cano',
      cargo: 'Director General',
    },
    contacto: {
      direccion: ['Calle 5 de Febrero No. 1002 “A”, zona Centro', 'C.P. 34000, Victoria de Durango, Dgo.'],
      telefonos: [
        { display: '618 812 66 26', tel: '6188126626' },
        { display: '618 811 68 73', tel: '6188116873' },
      ],
      correo: 'defensoriapublicadgo@pjdgo.gob.mx',
    },
  },

  cecofam: {
    titular: {
      nombre: 'L.P. María Josefina Franco Ortega',
      cargo: 'Coordinadora del CECOFAM',
    },
    contacto: {
      direccion: ['Calle Independencia No. 135 Norte, Zona Centro', 'C.P. 34000, Victoria de Durango, Dgo.'],
      telefonos: [{ display: '618 825 89 62', tel: '6188258962' }],
      correo: 'cecofam@pjdgo.gob.mx',
      mapaQuery: 'Calle+Independencia+135+Norte+Zona+Centro+Victoria+de+Durango',
    },
  },

  'universidad-judicial': {
    titular: {
      nombre: 'Dr. César Miguel González Piña Nevárez',
      cargo: 'Rector de la Universidad Judicial',
    },
    contacto: {
      telefonos: [{ display: '618 835 03 86', tel: '6188350386', ext: '262' }],
      // PENDIENTE: correo y dirección de la Universidad Judicial (se agregarán aquí).
    },
  },
}
