/**
 * Directorio de contacto de los organismos del Poder Judicial del Estado de
 * Durango. Fuente única de verdad: la consumen tanto las páginas de Contacto
 * individuales de cada organismo como la página consolidada "Directorio de
 * Contacto" en Recursos. Editar un dato aquí se refleja en ambos lados.
 */
export interface ContactoPersona {
  nombre: string
  cargo: string
  telefono?: string
  ext?: string
  correo?: string
}

export interface ContactoSeccion {
  titulo: string
  domicilio?: string
  conmutador?: string
  personas: ContactoPersona[]
}

export interface OrganismoContacto {
  /** Slug de la página de Contacto individual del organismo (bajo /pjdgo). */
  slug: string
  /** Nombre completo del organismo. */
  nombre: string
  /** Etiqueta corta para la pestaña del directorio consolidado. */
  nombreCorto: string
  secciones: ContactoSeccion[]
}

// ── Tribunal Superior de Justicia ─────────────────────────────────────────────

export const contactoTribunalSuperior: OrganismoContacto = {
  slug: '/pjdgo/tribunal-superior-de-justicia/contacto',
  nombre: 'Tribunal Superior de Justicia',
  nombreCorto: 'Tribunal Superior de Justicia',
  secciones: [
    {
      titulo: 'Presidencia',
      personas: [
        {
          nombre:   'D. D. Manuel Valadez Díaz',
          cargo:    'Magistrado Presidente',
          telefono: '618 811 20 73 / 618 812 79 69',
          ext:      '108 / 141',
          correo:   'presidencia@pjdgo.gob.mx',
        },
      ],
    },
    {
      titulo: 'Vicepresidencia',
      personas: [
        {
          nombre:   'Dra. María Magdalena Alanís Herrera',
          cargo:    'Magistrada Vicepresidenta',
          telefono: '618 811 29 78',
          ext:      '222',
          correo:   'segundasalacivilunitaria@pjdgo.gob.mx',
        },
      ],
    },
    {
      titulo: 'Sala Civil Colegiada',
      personas: [
        {
          nombre:   'M. D. Alejandra Estrada Arreola',
          cargo:    'Magistrada 1ª Ponencia',
          telefono: '618 813 07 98',
          ext:      '220',
          correo:   'ponencia1civilcolegiada@pjdgo.gob.mx',
        },
        {
          nombre:   'M. D. Julio César Piña de la Garza',
          cargo:    'Magistrado 2ª Ponencia y Presidente de la Sala',
          telefono: '618 811 58 90',
          ext:      '122',
          correo:   'ponencia2civilcolegiada@pjdgo.gob.mx',
        },
        {
          nombre:   'M. D. Brenda Lizette Acevedo Castañeda',
          cargo:    'Magistrada 3ª Ponencia',
          telefono: '618 813 19 61',
          ext:      '124',
          correo:   'ponencia3civilcolegiada@pjdgo.gob.mx',
        },
      ],
    },
    {
      titulo: 'Salas Civiles Unitarias',
      personas: [
        {
          nombre:   'Lic. Karina García Montelongo',
          cargo:    'Magistrada 1ª Sala',
          telefono: '618 811 29 09',
          ext:      '221',
          correo:   'primerasalacivilunitaria@pjdgo.gob.mx',
        },
        {
          nombre:   'Dra. María Magdalena Alanís Herrera',
          cargo:    'Magistrada 2ª Sala y Presidenta Sala de Control Constitucional',
          telefono: '618 812 35 30',
          ext:      '222',
          correo:   'segundasalacivilunitaria@pjdgo.gob.mx',
        },
        {
          nombre:   'Lic. Yésika Liliana Ramos Rodríguez',
          cargo:    'Magistrada 3ª Sala',
          telefono: '618 812 35 30',
          ext:      '217',
          correo:   'tercerasalacivilunitaria@pjdgo.gob.mx',
        },
      ],
    },
    {
      titulo: 'Sala Penal Colegiada',
      personas: [
        {
          nombre:   'M. D. Carlos Enrique Guzmán González',
          cargo:    'Magistrado 1ª Ponencia y Presidente de la Sala',
          telefono: '618 811 29 78',
          ext:      '159',
          correo:   'primerasalapenalcolegiada@pjdgo.gob.mx',
        },
        {
          nombre:   'Lic. Iliana Angélica Alvarado Salinas',
          cargo:    'Magistrada 2ª Ponencia',
          telefono: '618 811 29 78',
          ext:      '158',
          correo:   'segundasalapenalcolegiada@pjdgo.gob.mx',
        },
        {
          nombre:   'Lic. Miriam Guadalupe Lanzarín Roldán',
          cargo:    'Magistrada 3ª Ponencia',
          telefono: '618 811 29 77',
          ext:      '161',
          correo:   'tercerasalapenalcolegiada@pjdgo.gob.mx',
        },
      ],
    },
    {
      titulo: 'Sala Colegiada Mixta Regional',
      domicilio: 'Palacio de Justicia (5° piso), Calle Morelos No. 326 Nte., Zona Centro, C.P. 35000, Gómez Palacio, Dgo.',
      personas: [
        {
          nombre:   'Dr. Luis Fernando Contreras Cortés',
          cargo:    'Magistrado 1ª Ponencia',
          telefono: '871 456 58 00',
          ext:      '65806',
          correo:   'ponencia1colegiadagp@pjdgo.gob.mx',
        },
        {
          nombre:   'Lic. Gloria Guadalupe Galván Román',
          cargo:    'Magistrada 2ª Ponencia',
          telefono: '871 456 58 42',
          ext:      '65842',
          correo:   'ponencia2colegiadagp@pjdgo.gob.mx',
        },
        {
          nombre:   'Dr. Álvaro Rodríguez Alcalá',
          cargo:    'Magistrado 3ª Ponencia y Presidente de la Sala',
          telefono: '871 456 58 27',
          ext:      '65827',
          correo:   'ponencia3colegiadagp@pjdgo.gob.mx',
        },
      ],
    },
    {
      titulo: 'Salas Unitarias Regionales',
      personas: [
        {
          nombre:   'Lic. Gerardo Lara Pérez',
          cargo:    'Magistrado Sala Civil Unitaria Regional',
          telefono: '871 456 58 10',
          ext:      '65810',
          correo:   'civilunitariagp@pjdgo.gob.mx',
        },
        {
          nombre:   'Lic. Miguel Ángel Quiñones Orozco',
          cargo:    'Magistrado Sala Penal Unitaria Regional',
          telefono: '871 456 58 08',
          ext:      '65808',
          correo:   'penalunitariagp@pjdgo.gob.mx',
        },
      ],
    },
    {
      titulo: 'Secretaría General de Acuerdos',
      personas: [
        {
          nombre:   'M. D. Juan Guillermo Toro Lerma',
          cargo:    'Secretario General de Acuerdos del TSJ y del Pleno',
          telefono: '618 811 29 76',
          ext:      '129',
          correo:   'secretariopleno@pjdgo.gob.mx',
        },
      ],
    },
    {
      titulo: 'Secretarías de Acuerdos',
      domicilio: 'Palacio de Justicia, Calle Zaragoza s/n esquina con 5 de Febrero, Zona Centro, C.P. 34000, Victoria de Durango, Dgo.',
      conmutador: '618 811 47 12, 811 65 61, 811 29 75, 618 811 29 78 y 812 03 61',
      personas: [
        {
          nombre:  'Lic. Leticia Guadalupe Salazar Rivera',
          cargo:   'Secretaria de Acuerdos — Sala Civil Colegiada',
          ext:     '152',
          correo:  '@pjdgo.gob.mx',
        },
        {
          nombre:  'Lic. Verónica Natalia Garay Burciaga',
          cargo:   'Secretaria de Acuerdos — Salas Civiles Unitarias',
          ext:     '120',
          correo:  '@pjdgo.gob.mx',
        },
        {
          nombre:  'Lic. Laura Gabriela Vidal Guzmán',
          cargo:   'Secretaria de Acuerdos — Sala Penal Colegiada',
          ext:     '261',
          correo:  '@pjdgo.gob.mx',
        },
        {
          nombre:  'M. D. J. Jesús Juventino Valenzuela Serrato',
          cargo:   'Secretario de Acuerdos — Salas Penales Unitarias',
          ext:     '226',
          correo:  '@pjdgo.gob.mx',
        },
      ],
    },
    {
      titulo: 'Secretaría de Acuerdos de las Salas Regionales',
      domicilio: 'Palacio de Justicia (tercer piso), Calle Morelos No. 326 Nte., Zona Centro, C.P. 35000, Gómez Palacio, Dgo.',
      personas: [
        {
          nombre:   'Dr. Juan Rafael Carrillo Ávila',
          cargo:    'Secretario de Acuerdos de las Salas Regionales',
          telefono: '871 456 58 48',
          ext:      '65848',
          correo:   '@pjdgo.gob.mx',
        },
      ],
    },
    {
      titulo: 'Vinculación y Atención Ciudadana',
      personas: [
        {
          nombre:   'C. P. Manuel Isaac Cisneros Meraz',
          cargo:    'Director',
          telefono: '618 811 47 12',
          ext:      '257',
          correo:   'comunicacionsocial@pjdgo.gob.mx',
        },
      ],
    },
    {
      titulo: 'Unidad de Derechos Humanos e Igualdad de Género',
      domicilio: 'Palacio de Justicia, Calle Zaragoza s/n esquina con 5 de Febrero, Zona Centro, C.P. 34000, Victoria de Durango, Dgo.',
      conmutador: '618 811 47 12, 811 65 61, 811 29 75, 618 811 29 78 y 812 03 61',
      personas: [
        {
          nombre:   'Lic. Carlos Rafael Ortiz Gómez',
          cargo:    'Director',
          telefono: '618 811 47 12',
          ext:      '117',
          correo:   'uddhhig@pjdgo.gob.mx',
        },
      ],
    },
    {
      titulo: 'Voluntariado del Poder Judicial',
      personas: [
        {
          nombre:   'Lic. Hilda Güereca Carrera',
          cargo:    'Presidenta del Voluntariado',
          telefono: '618 825 87 14',
          ext:      '126',
          correo:   'voluntariado@tsjdgo.gob.mx',
        },
      ],
    },
  ],
}

// ── Tribunal de Disciplina Judicial ───────────────────────────────────────────

export const contactoDisciplina: OrganismoContacto = {
  slug: '/pjdgo/tribunal-disciplina-judicial/contacto',
  nombre: 'Tribunal de Disciplina Judicial',
  nombreCorto: 'Tribunal de Disciplina Judicial',
  secciones: [
    {
      titulo: 'Magistrados',
      personas: [
        {
          nombre: 'M. A. P. Irma Selene Soto Rodríguez',
          cargo:  'Magistrada Presidenta y titular de la Primera Ponencia',
          correo: 'primeraponencia.tdj@pjdgo.gob.mx',
        },
        {
          nombre: 'M. D. E. José Durán Barrera',
          cargo:  'Magistrado de la Segunda Ponencia',
          correo: 'segundaponencia.tdj@pjdgo.gob.mx',
        },
        {
          nombre: 'Lic. Ángel Gerardo Bonilla Saucedo',
          cargo:  'Magistrado de la Tercera Ponencia',
          correo: 'terceraponencia.tdj@pjdgo.gob.mx',
        },
        {
          nombre: 'M. D. Karen Flores Maciel',
          cargo:  'Magistrada de la Cuarta Ponencia',
          correo: 'cuartaponencia.tdj@pjdgo.gob.mx',
        },
        {
          nombre: 'M. D. Ernestina Terán Rivera',
          cargo:  'Magistrada de la Quinta Ponencia',
          correo: 'quintaponencia.tdj@pjdgo.gob.mx',
        },
      ],
    },
    {
      titulo: 'Secretaría de Acuerdos del Pleno',
      personas: [
        {
          nombre: 'Dr. Teódulo Pérez Martínez',
          cargo:  'Secretario de Acuerdos del Pleno',
          correo: 'secretariadeacuerdos@pjdgo.gob.mx',
        },
      ],
    },
    {
      titulo: 'Unidades',
      personas: [
        {
          nombre: 'Lic. Lilian Carolina Torres Valenzuela',
          cargo:  'Directora de la Unidad de Investigación de Responsabilidades Administrativas',
          correo: 'uira_tdj@pjdgo.gob.mx',
        },
        {
          nombre: 'Lic. Cinthya Guadalupe Mier Gómez',
          cargo:  'Directora de la Unidad de Evaluación del Desempeño Judicial',
          correo: 'uedj_tdj@pjdgo.gob.mx',
        },
      ],
    },
  ],
}

// ── Tribunal de Justicia Penal para Adolescentes ──────────────────────────────

export const contactoAdolescentes: OrganismoContacto = {
  slug: '/pjdgo/tribunal-justicia-penal-adolescentes/contacto',
  nombre: 'Tribunal de Justicia Penal para Adolescentes',
  nombreCorto: 'Justicia Penal para Adolescentes',
  secciones: [
    {
      titulo: 'Presidencia y Secretarías',
      personas: [
        {
          nombre:   'M. D. Martha Elvia Astorga Rivas',
          cargo:    'Magistrada Presidenta y titular de la Sala Unitaria',
          telefono: '618 811 03 93',
          ext:      '104',
          correo:   'presidencia@tmidgo.gob.mx',
        },
        {
          nombre:   'Lic. Salvador Galván Soto',
          cargo:    'Secretario General de Acuerdos en funciones',
          telefono: '618 811 03 93',
          ext:      '103',
          correo:   'secretariageneral@tmidgo.gob.mx',
        },
        {
          nombre:   'C. P. Julia Elena Sánchez Solís',
          cargo:    'Secretaria Administrativa de la Comisión de Administración',
          telefono: '618 811 03 93',
          ext:      '107',
          correo:   'sec.administrativa.comision@tmidgo.gob.mx',
        },
        {
          nombre:   'Lic. Lizeth Carina López Ibáñez',
          cargo:    'Secretaria de Acuerdos adscrita a la Sala Unitaria',
          telefono: '618 811 03 93',
          ext:      '110',
          correo:   'salaunitaria@tmidgo.gob.mx',
        },
        {
          nombre:   'Lic. Antonio Amador Alvarado',
          cargo:    'Secretario de Acuerdos adscrito a la Sala Unitaria (Sección Amparos)',
          telefono: '618 811 03 93',
          ext:      '122',
          correo:   'salaunitaria@tmidgo.gob.mx',
        },
        {
          nombre:   'Lic. Omar Quiñones Valdez',
          cargo:    'Secretario de Acuerdos',
          telefono: '618 811 03 93',
          ext:      '117',
          correo:   'unidaddetransparencia@tmidgo.gob.mx',
        },
      ],
    },
    {
      titulo: 'Juzgados Especializados',
      personas: [
        {
          nombre:   'Lic. Mario Gabriel Rivera Contreras',
          cargo:    'Juez Primero Especializado',
          telefono: '618 811 03 93',
          ext:      '115',
          correo:   'juzgadoprimero@tmidgo.gob.mx',
        },
        {
          nombre:   'Lic. Yareli Palma Olivera',
          cargo:    'Jueza Segunda Especializada',
          telefono: '618 811 03 93',
          ext:      '124',
          correo:   'juzgadosegundo@tmidgo.gob.mx',
        },
        {
          nombre:   'Lic. Joselyn Sildan Gasca Reyes',
          cargo:    'Jueza Tercera Especializada',
          telefono: '618 811 03 93',
          ext:      '118',
          correo:   'juzgadotercero@tmidgo.gob.mx',
        },
      ],
    },
  ],
}

// ── Órgano de Administración ──────────────────────────────────────────

export const contactoOrganoAdministracion: OrganismoContacto = {
  slug: '/pjdgo/organo-de-administracion-judicial/contacto',
  nombre: 'Órgano de Administración',
  nombreCorto: 'Órgano de Administración',
  secciones: [
    {
      titulo: 'Comisionados',
      personas: [
        {
          nombre:   'C. P. Tania Julieta Hernández Maldonado',
          cargo:    'Comisionada Presidenta del Órgano de Administración',
          telefono: '618 827 96 87',
          ext:      '230',
          correo:   'comisionadministracion@pjdgo.gob.mx',
        },
        {
          nombre:   'M. A. P. Alejandra Elizabeth Terrones Ochoa',
          cargo:    'Comisionada de Creación de Nuevos Órganos',
          telefono: '618 827 97 27',
          ext:      '231',
          correo:   'comisionnuevosorganos@pjdgo.gob.mx',
        },
        {
          nombre:   'Lic. Miguel Ángel Olvera Escalera',
          cargo:    'Comisionado de Control Interno',
          telefono: '618 827 67 57',
          ext:      '229 / 183',
          correo:   'comisioncontrolinterno@pjdgo.gob.mx',
        },
        {
          nombre:   'L. A. José Antonio Arzola González',
          cargo:    'Comisionado de Adscripción',
          ext:      '252',
          correo:   'comisionadscripcion@pjdgo.gob.mx',
        },
        {
          nombre:   'M. J. O. Yilma Leonila Rivera Estrada',
          cargo:    'Comisionada de Carrera Judicial',
          telefono: '618 827 96 56',
          ext:      '149',
          correo:   'comisioncarrerajudicial@pjdgo.gob.mx',
        },
      ],
    },
    {
      titulo: 'Secretariado Ejecutivo',
      personas: [
        {
          nombre:   'M. D. Aurea Jennifer Tolentino Vargas',
          cargo:    'Secretaria Ejecutiva del Pleno y Carrera Judicial',
          telefono: '618 813 70 19',
          ext:      '232 / 197',
          correo:   'sriaejecutivaorgano@pjdgo.gob.mx',
        },
        {
          nombre:   'L. A. Héctor Jaime Hernández Guerrero',
          cargo:    'Secretario Ejecutivo de Administración',
          telefono: '618 811 41 76',
          ext:      '114',
          correo:   'secretariaejecutivadeadmon@pjdgo.gob.mx',
        },
      ],
    },
    {
      titulo: 'Órganos Auxiliares',
      personas: [
        {
          nombre:   'C. P. Ana Lorena Sánchez Casas',
          cargo:    'Encargada de la Dirección del Fondo Auxiliar para la Administración de Justicia',
          ext:      '155',
          correo:   'fondoauxiliar@pjdgo.gob.mx',
        },
        {
          nombre:   'Dr. César Miguel González Piña Nevárez',
          cargo:    'Rector de la Universidad Judicial',
          telefono: '618 835 03 86',
          ext:      '262',
          correo:   'rectoruj@pjdgo.gob.mx',
        },
        {
          nombre:   'L. A. Jorge Ramón Mendía Bulnes',
          cargo:    'Director de Archivo',
          ext:      '128',
          correo:   'archivojudicial@pjdgo.gob.mx',
        },
        {
          nombre:   'L. C. T. C. Edith Martínez Jara',
          cargo:    'Encargada de la Dirección de Transparencia y Acceso a la Información Pública',
          ext:      '215',
          correo:   'transparencia@pjdgo.gob.mx',
        },
        {
          nombre:   'L. I. José Humberto Vargas Luna',
          cargo:    'Director de Informática',
          telefono: '618 813 79 96 / 618 825 27 21',
          ext:      '227',
          correo:   'informatica@pjdgo.gob.mx',
        },
        {
          nombre:   'Lic. José Manuel Tinoco Carrasco',
          cargo:    'Encargado de la Dirección de Control Interno',
          telefono: '618 811 01 65',
          ext:      '155',
          correo:   'controlinterno@pjdgo.gob.mx',
        },
        {
          nombre:   'L. A. Brenda Leticia Zamora García',
          cargo:    'Directora de Estadística y Planeación',
          ext:      '113',
          correo:   'estadistica@pjdgo.gob.mx',
        },
        {
          nombre:   'Lic. Juan Antonio Pescador Cano',
          cargo:    'Director de Defensoría Pública',
          telefono: '618 812 66 26 / 618 811 68 73',
          correo:   'defensoriapublicadgo@pjdgo.gob.mx',
        },
        {
          nombre:   'Lic. Lorena Itzel Fernández Hernández',
          cargo:    'Directora Administrativa del Sistema Penal Acusatorio',
          telefono: '618 884 43 45 / 618 884 43 60',
          correo:   'administracionjuiciosorales@pjdgo.gob.mx',
        },
        {
          nombre:   'Lic. Héctor Ayón Nogueira',
          cargo:    'Director General del Centro Estatal de Justicia Alternativa',
          telefono: '618 827 92 56 / 618 827 50 21',
          correo:   'ceja-durango@pjdgo.gob.mx',
        },
        {
          nombre:   'L. T. S. y L. P. María Josefina Franco Ortega',
          cargo:    'Directora del Centro de Convivencia Familiar',
          telefono: '618 825 89 62',
          correo:   'cecofam@pjdgo.gob.mx',
        },
      ],
    },
    {
      titulo: 'Centro Estatal de Justicia Alternativa (CEJA)',
      domicilio: 'Calle Hidalgo No. 328 Sur, Zona Centro, C.P. 34000, Victoria de Durango, Dgo.',
      personas: [
        {
          nombre:   'Lic. Héctor Ayón Nogueira',
          cargo:    'Director General',
          telefono: '618 827 50 21 / 618 827 92 56',
          correo:   'ceja-durango@pjdgo.gob.mx',
        },
        {
          nombre:   'Lic. Mónica del Socorro Mejía Cháirez',
          cargo:    'Encargada de la Subdirección General',
          telefono: '618 827 50 21 / 618 827 92 56',
          correo:   'ceja-durango@pjdgo.gob.mx',
        },
      ],
    },
    {
      titulo: 'Centro Distrital de Justicia Alternativa en Lerdo',
      domicilio: 'Calle Azucena s/n esquina con Azaleas, Colonia Villa de las Flores, Lerdo, Dgo.',
      personas: [
        {
          nombre:   'Lic. Silvia Mayela Salinas Mares',
          cargo:    'Subdirectora del Centro Distrital de Justicia Alternativa en Lerdo',
          telefono: '871 715 38 57',
          correo:   'ceja-lerdo@pjdgo.gob.mx',
        },
      ],
    },
    {
      titulo: 'Centro Distrital de Justicia Alternativa en Gómez Palacio',
      domicilio: 'Avenida Independencia No. 251 Oriente, Zona Centro, Gómez Palacio, Dgo.',
      personas: [
        {
          nombre:   'Lic. María Elena Torres Rodríguez',
          cargo:    'Encargada de la Subdirección del Centro Distrital de Justicia Alternativa en Gómez Palacio',
          telefono: '871 715 58 81',
          correo:   'cejagp@pjdgo.gob.mx',
        },
      ],
    },
    {
      titulo: 'Centro de Convivencia Familiar (CECOFAM)',
      domicilio: 'Calle Independencia No. 135 Nte., Zona Centro, C.P. 34000, Victoria de Durango, Dgo.',
      personas: [
        {
          nombre:   'L. T. S. y L. P. María Josefina Franco Ortega',
          cargo:    'Coordinadora',
          telefono: '618 825 89 62',
          correo:   'cecofam@pjdgo.gob.mx',
        },
      ],
    },
    {
      titulo: 'Instituto de Defensoría Pública (INDEPU)',
      domicilio: 'Calle 5 de Febrero No. 1002 "A", Zona Centro, C.P. 34000, Victoria de Durango, Dgo.',
      personas: [
        {
          nombre:   'Lic. Juan Antonio Pescador Cano',
          cargo:    'Director General',
          telefono: '618 812 66 26 / 618 811 68 73',
          correo:   'defensoriapublicadgo@pjdgo.gob.mx',
        },
        {
          nombre:   'Lic. Bertha Alicia Uribe Salcedo',
          cargo:    'Subdirectora Operativa',
          telefono: '618 812 66 26 / 618 811 68 73',
          correo:   'defensoriapublicadgo@pjdgo.gob.mx',
        },
        {
          nombre:   'Lic. Enrique Alonso Gamero Mejorado',
          cargo:    'Director Administrativo',
          telefono: '618 812 66 26 / 618 811 68 73',
          correo:   'defensoriapublicadgo@pjdgo.gob.mx',
        },
        {
          nombre:   'Lic. Marco Antonio Juárez Ríos',
          cargo:    'Coordinador General',
          telefono: '618 812 66 26 / 618 811 68 73',
          correo:   'defensoriapublicadgo@pjdgo.gob.mx',
        },
      ],
    },
    {
      titulo: 'Secretaría Ejecutiva de Administración — Departamentos',
      personas: [
        {
          nombre:  'C. P. Pamela Isabel Rodríguez Soto',
          cargo:   'Jefa del Departamento de Recursos Humanos',
          ext:     '127',
          correo:  'recursoshumanos@pjdgo.gob.mx',
        },
        {
          nombre:  'C. P. Ana Lorena Sánchez Casas',
          cargo:   'Jefa del Departamento de Recursos Financieros',
          ext:     '264',
          correo:  'recursosfinancieros@pjdgo.gob.mx',
        },
        {
          nombre:  'Lic. Diana Victoria Alvarado Nevárez',
          cargo:   'Jefa del Departamento de Recursos Materiales',
          ext:     '185 / 260',
          correo:  'recursosmateriales@pjdgo.gob.mx',
        },
        {
          nombre:  'Ing. Jaime Andrés Reyes Galván',
          cargo:   'Jefe del Departamento de Servicios Generales',
          ext:     '153',
          correo:  'serviciosgenerales@pjdgo.gob.mx',
        },
        {
          nombre:  'C. Ricardo Alonso Ceballos Aguirre',
          cargo:   'Subjefe de Control Patrimonial',
          ext:     '172 / 188',
          correo:  'patrimonio1@pjdgo.gob.mx',
        },
      ],
    },
    {
      titulo: 'Departamento de Actuaría de Ejecución',
      domicilio: 'Calle Hidalgo No. 408 Sur, Zona Centro, C.P. 34000, Victoria de Durango, Dgo.',
      personas: [
        {
          nombre:   'Lic. Thelma Susana García Cisneros',
          cargo:    'Encargada',
          telefono: '618 811 29 78',
          ext:      '210',
          correo:   'actuaria@pjdgo.gob.mx',
        },
      ],
    },
    {
      titulo: 'Oficialía de Partes Común',
      domicilio: 'Calle 5 de Febrero s/n (entre Zaragoza e Hidalgo), Zona Centro, C.P. 34000, Victoria de Durango, Dgo.',
      personas: [
        {
          nombre:   'Lic. Lizandro Israel Cuevas Faudoa',
          cargo:    'Jefe de Oficialía de Partes Común',
          telefono: '618 811 29 78',
          ext:      '210',
          correo:   'oficialiadepartes@pjdgo.gob.mx',
        },
      ],
    },
  ],
}

/** Los 4 organismos, en el orden en que aparecen en el directorio consolidado. */
export const organismosContacto: OrganismoContacto[] = [
  contactoTribunalSuperior,
  contactoDisciplina,
  contactoAdolescentes,
  contactoOrganoAdministracion,
]
