/**
 * Organigramas del Poder Judicial del Estado de Durango, como datos (no PDF).
 * Cada organigrama es un árbol de nodos; el componente <Organigrama> lo dibuja
 * en HTML/CSS acomodando los puestos en filas para caber en el ancho.
 * Fuente: Organigrama-Institucional-2026.pdf. Los textos y las repeticiones se
 * conservan tal cual el documento (una caja repetida = un puesto más).
 *
 * variant: 'raiz' (caja superior) · 'organo' (unidad/sección) · 'cargo' (puesto).
 */
export type OrgVariant = 'raiz' | 'organo' | 'cargo'

export interface OrgNode {
  label: string
  variant?: OrgVariant
  children?: OrgNode[]
}

export interface Organigrama {
  nombre: string
  arboles: { titulo?: string; raiz: OrgNode }[]
}

// ── Helpers ───────────────────────────────────────────────────────────────────
const org = (label: string, children?: OrgNode[]): OrgNode => ({ label, variant: 'organo', children })
const car = (label: string, children?: OrgNode[]): OrgNode => ({ label, variant: 'cargo', children })
const raiz = (label: string, children?: OrgNode[]): OrgNode => ({ label, variant: 'raiz', children })
/** Cadena vertical: primer nivel 'organo', el resto 'cargo' anidados. */
const chain = (head: string, ...cargos: string[]): OrgNode => {
  let node: OrgNode | undefined
  for (let i = cargos.length - 1; i >= 0; i--) node = car(cargos[i], node ? [node] : undefined)
  return org(head, node ? [node] : undefined)
}
/** Juzgado (organo) con un titular Juez(a). */
const juez = (label: string): OrgNode => org(label, [car('Juez(a)')])

// ── 1. Poder Judicial (general) ───────────────────────────────────────────────

const general = raiz('Poder Judicial del Estado de Durango', [
  org('Tribunal Superior de Justicia'),
  org('Tribunal de Disciplina Judicial'),
  org('Tribunal de Justicia Penal para Adolescentes'),
  org('Órgano de Administración'),
])

// ── 2. Tribunal Superior de Justicia (por sección) ────────────────────────────

const tsjPlenoPresidencia = raiz('Pleno del Tribunal Superior de Justicia', [
  chain('Secretaría General de Acuerdos del Pleno', 'Secretario(a) General'),
  chain('Presidencia', 'Magistrado(a) Presidente(a)'),
])
const tsjSalaCivilColegiada = raiz('Sala Civil Colegiada', [
  chain('Primera Ponencia de la Sala Civil Colegiada', 'Magistrado(a)'),
  chain('Primera Ponencia de la Sala Civil Colegiada', 'Magistrado(a)'),
  chain('Primera Ponencia de la Sala Civil Colegiada', 'Magistrado(a)'),
  chain('Secretaría de Acuerdos de la Sala Civil Colegiada', 'Secretario(a) de Acuerdos'),
])
const tsjSalasCivilesUnitarias = raiz('Salas Civiles Unitarias', [
  chain('Primera Sala Civil Unitaria', 'Magistrado(a)'),
  chain('Segunda Sala Civil Unitaria', 'Magistrado(a)'),
  chain('Tercera Sala Civil Unitaria', 'Magistrado(a)'),
  chain('Secretaría de Acuerdos de las Salas Civiles Unitarias', 'Secretario(a) de Acuerdos'),
])
const tsjSalaPenalColegiada = raiz('Sala Penal Colegiada "B"', [
  chain('Primera Ponencia de la Sala Penal Colegiada "B"', 'Magistrado(a)'),
  chain('Primera Ponencia de la Sala Penal Colegiada "B"', 'Magistrado(a)'),
  chain('Primera Ponencia de la Sala Penal Colegiada "B"', 'Magistrado(a)'),
  chain('Secretaría de Acuerdos de la Sala Penal Colegiada "B"', 'Secretario(a) de Acuerdos'),
  chain('Secretaría de Acuerdos de las Salas Penales Unitarias "B"', 'Secretario(a) de Acuerdos'),
])
const tsjSalaColegiadaMixta = raiz('Sala Colegiada Mixta Regional', [
  chain('Primera Ponencia de la Sala Colegiada Mixta', 'Magistrado(a)'),
  chain('Primera Ponencia de la Sala Colegiada Mixta', 'Magistrado(a)'),
  chain('Primera Ponencia de la Sala Colegiada Mixta', 'Magistrado(a)'),
  chain('Sala Civil Unitaria', 'Magistrado(a)'),
  chain('Sala Penal Unitaria', 'Magistrado(a)'),
  chain('Secretaría de Acuerdos de las Salas Regionales', 'Secretario(a) de Acuerdos'),
])

// ── 3. Tribunal de Disciplina Judicial ────────────────────────────────────────

const ponenciaDisc = (nombre: string) =>
  chain(nombre, 'Magistrado(a)', 'Proyectista', 'Auxiliar de Proyectista', 'Secretaria Escribiente')

const disciplinaMain = raiz('Pleno del Tribunal de Disciplina Judicial', [
  chain('Secretaría de Acuerdos del Pleno', 'Secretario(a) General'),
  org('Presidencia', [
    car('Magistrado(a) Presidente(a) (Titular de la Primera Ponencia)'),
    ponenciaDisc('Primera Ponencia'),
    ponenciaDisc('Segunda Ponencia'),
    ponenciaDisc('Tercera Ponencia'),
    ponenciaDisc('Cuarta Ponencia'),
    ponenciaDisc('Quinta Ponencia'),
    chain('Unidad de Investigación de Responsabilidades Administrativas', 'Agentes investigadores'),
    chain('Unidad de Evaluación del Desempeño Judicial', 'Director de procesos de Evaluación y Seguimiento', 'Auxiliar Jurídico', 'Visitadores Judiciales'),
    chain('Actuaría', 'Coordinador', 'Auxiliar'),
    org('Oficialía de Partes'),
    org('Auxiliar de Archivo'),
  ]),
])

const disciplinaUnidades = raiz('Presidencia', [
  car('Magistrado(a) Presidente(a) (Titular de la Primera Ponencia)'),
  org('Secretaría de Acuerdos', [
    car('Secretaria'),
    car('Auxiliar de Sala del Pleno'),
    car('Secretaria de Actas'),
    car('Auxiliar de Acuerdos de las Comisiones'),
    car('Asesor Jurídico (Amparos)'),
    car('Apoyo Administrativo'),
  ]),
  org('Secretaria Técnica'),
  chain('Asesor Jurídico', 'Auxiliar Jurídico'),
  org('Secretaria Recepción'),
  org('Auxiliares Administrativos'),
  org('Programador Analista Informática'),
])

// ── 4. Tribunal de Justicia Penal para Adolescentes ───────────────────────────

const adolescentes = raiz('Presidencia', [
  car('Magistrado(a) Presidente(a)'),
  org('Comisión de Administración', [
    org('Secretaria Administrativa de la Comisión', [
      chain('Jefatura de Administración del Capital Humano', 'Auxiliares de la Secretaría Administrativa'),
      org('Departamento de Informática'),
      org('Unidad de Coordinación y Planeación'),
    ]),
    org('Centro de Documentación y Estadística e Información Jurisdiccional y Titular de la Unidad de Transparencia'),
  ]),
  org('Departamento de Difusión'),
  org('Secretaría General de Acuerdos', [org('Oficialía de Partes')]),
  org('Sala Unitaria Especializada'),
  org('Sala Unitaria de Competencia Ampliada'),
  org('Juzgados Especializados', [
    org('Juzgado Primero'),
    org('Juzgado Segundo'),
    org('Juzgado Tercero'),
    org('Juzgado Gómez Palacio'),
  ]),
])

// ── 5. Órgano de Administración ───────────────────────────────────────────────

const organoAdmin = raiz('Pleno del Órgano de Administración', [
  car('Presidente(a)'),
  org('Comisiones', [
    car('Comisionado(a) Presidente(a) de la Comisión de Administración'),
    car('Comisionado(a) Presidente(a) de la Comisión de Carrera Judicial'),
    car('Comisionado(a) Presidente(a) de la Comisión de Creación de Nuevos Órganos'),
    car('Comisionado(a) Presidente(a) de la Comisión de Control Interno'),
    car('Comisionado(a) Presidente(a) de la Comisión de Adscripción'),
  ]),
  org('Secretariado Ejecutivo', [
    car('Secretario(a) Ejecutivo del Pleno y Carrera Judicial del Órgano de Administración'),
    car('Secretario(a) Ejecutivo de Control Interno'),
    car('Secretario(a) Ejecutivo de Administración', [
      car('Secretario(a) Técnico(a)'),
      car('Jefe(a) del Departamento de Recursos Humanos'),
      car('Jefe(a) del Departamento de Recursos Financieros'),
      car('Jefe(a) del Departamento de Recursos Materiales'),
    ]),
  ]),
  org('Órganos Auxiliares', [
    org('Dirección del Fondo Auxiliar para la Administración de Justicia'),
    org('Universidad Judicial'),
    org('Dirección de Archivo'),
    org('Dirección de Transparencia y Acceso a la Información Pública y de Comunicación Social'),
    org('Dirección de Informática'),
    org('Dirección de Control Interno'),
    org('Dirección de Estadística y Planeación'),
    org('Instituto de Defensoría Pública'),
    org('Dirección Administrativa del Sistema Penal Acusatorio'),
    org('Centro Estatal de Justicia Alternativa'),
    org('Centro de Convivencia Familiar'),
  ]),
])

// ── 6. Juzgados de Primera Instancia ──────────────────────────────────────────

const juzgadosPrimerDistrito = raiz('Primer Distrito Judicial — Durango, Dgo.', [
  juez('Juzgado Segundo de lo Civil'),
  juez('Juzgado Tercero de lo Civil'),
  juez('Juzgado Cuarto de lo Civil'),
  juez('Juzgado Primero de lo Familiar'),
  juez('Juzgado Segundo de lo Familiar'),
  juez('Juzgado Tercero de lo Familiar'),
  juez('Juzgado Cuarto de lo Familiar'),
  juez('Juzgado Quinto de lo Familiar'),
  juez('Juzgado Primero de lo Mercantil'),
  juez('Juzgado Segundo de lo Mercantil'),
  juez('Juzgado Tercero de lo Mercantil'),
  juez('Juzgado Oral Mercantil'),
  juez('Juzgado Primero Auxiliar Civil'),
  juez('Juzgado Segundo Auxiliar Civil'),
  juez('Juzgado Laboral'),
  juez('Juzgado Cuarto Penal Tradicional'),
  juez('Tribunal Laboral Burocrático'),
  juez('Juzgado Primero Especializado en Materia Familiar y de Control y Enjuiciamiento en Materia Penal para Niñas, Niños y Adolescentes'),
  juez('Juzgado Segundo Especializado en Materia Familiar y de Control y Enjuiciamiento en Materia Penal para Niñas, Niños y Adolescentes'),
  juez('Juzgado Primero Especializado en Materia Familiar y de Control y Enjuiciamiento en Materia Penal'),
  juez('Juzgado Segundo Especializado en Materia Familiar y de Control y Enjuiciamiento en Materia Penal'),
])

const juzgadosPrimerDistritoControl = raiz(
  'Dirección Administrativa de Jueces de Control, Tribunal de Enjuiciamiento y Juzgados de Ejecución de Sentencias y Medidas de Seguridad — Primer Distrito (Durango)',
  [
    car('Juez(a)'),
    org('Coordinación de Jueces de Control', [
      car('Juez(a)'),
      juez('Unidad de Control 1'),
      juez('Unidad de Control 2'),
      juez('Unidad de Control 3'),
      juez('Unidad de Control 4'),
      juez('Unidad de Control 5'),
      juez('Unidad de Control 6'),
      juez('Unidad de Control 7'),
      org('Tribunal de Control y Enjuiciamiento', [car('Juez(a)'), car('Juez(a)'), car('Juez(a)')]),
      juez('Ejecución de Sentencias y Medidas de Seguridad 1'),
      juez('Ejecución de Sentencias y Medidas de Seguridad 2'),
      juez('Ejecución de Sentencias y Medidas de Seguridad 3'),
    ]),
  ],
)

const juzgadosSegundoDistrito = raiz('Segundo Distrito Judicial — Cd. Lerdo, Dgo.', [
  juez('Juzgado Primero con Jurisdicción Mixta'),
  juez('Juzgado Segundo con Jurisdicción Mixta'),
])

const juzgadosTercerDistrito = raiz('Tercer Distrito Judicial — Gómez Palacio, Dgo.', [
  juez('Juzgado Primero de lo Civil'),
  juez('Juzgado Segundo de lo Civil'),
  juez('Juzgado Primero de lo Familiar'),
  juez('Juzgado Segundo de lo Familiar'),
  juez('Juzgado Tercero de lo Familiar y Auxiliar Civil'),
  juez('Juzgado Segundo Penal Tradicional'),
  juez('Juzgado Primero Especializado en Materia Familiar y de Control y Enjuiciamiento en Materia Penal para Niñas, Niños y Adolescentes'),
  juez('Tribunal Laboral'),
])

const juzgadosTercerDistritoControl = raiz(
  'Subdirección Administrativa de Jueces de Control, Tribunal de Enjuiciamiento y Juzgados de Ejecución de Sentencias y Medidas de Seguridad — Tercer Distrito',
  [
    car('Juez(a) Enlace'),
    juez('Unidad de Control 1'),
    juez('Unidad de Control 2'),
    juez('Unidad de Control 3'),
    juez('Unidad de Control 4'),
    juez('Unidad de Control 5'),
    juez('Ejecución de Sentencias y Medidas de Seguridad 4'),
  ],
)

const juzgadosCuartoDistrito = raiz('Cuarto Distrito Judicial — Santiago Papasquiaro, Dgo.', [
  juez('Juzgado de lo Civil'),
  juez('Juzgado Penal'),
])

const juzgadosDemasDistritos = raiz('Distritos Judiciales Quinto a Décimo Tercero', [
  juez('Quinto Distrito — Canatlán, Dgo. · Juzgado con Jurisdicción Mixta'),
  juez('Sexto Distrito — El Salto, P.N., Dgo. · Juzgado con Jurisdicción Mixta'),
  juez('Séptimo Distrito — Topia, Dgo. · Juzgado con Jurisdicción Mixta'),
  juez('Octavo Distrito — Guadalupe Victoria, Dgo. · Juzgado con Jurisdicción Mixta'),
  juez('Noveno Distrito — Cuencamé, Dgo. · Juzgado con Jurisdicción Mixta'),
  juez('Décimo Distrito — Nazas, Dgo. · Juzgado con Jurisdicción Mixta'),
  juez('Décimo Primer Distrito — San Juan del Río, Dgo. · Juzgado con Jurisdicción Mixta'),
  juez('Décimo Segundo Distrito — Santa María del Oro, Dgo. · Juzgado con Jurisdicción Mixta'),
  juez('Décimo Tercer Distrito — Nombre de Dios, Dgo. · Juzgado con Jurisdicción Mixta'),
])

// ── Colección ─────────────────────────────────────────────────────────────────

export const organigramas: Organigrama[] = [
  { nombre: 'General', arboles: [{ raiz: general }] },
  {
    nombre: 'Tribunal Superior de Justicia',
    arboles: [
      { raiz: tsjPlenoPresidencia },
      { raiz: tsjSalaCivilColegiada },
      { raiz: tsjSalasCivilesUnitarias },
      { raiz: tsjSalaPenalColegiada },
      { raiz: tsjSalaColegiadaMixta },
    ],
  },
  {
    nombre: 'Tribunal de Disciplina Judicial',
    arboles: [
      { titulo: 'Estructura orgánica', raiz: disciplinaMain },
      { titulo: 'Unidades Auxiliares', raiz: disciplinaUnidades },
    ],
  },
  { nombre: 'Justicia Penal para Adolescentes', arboles: [{ raiz: adolescentes }] },
  { nombre: 'Órgano de Administración', arboles: [{ raiz: organoAdmin }] },
  {
    nombre: 'Juzgados de Primera Instancia',
    arboles: [
      { titulo: 'Primer Distrito — Juzgados', raiz: juzgadosPrimerDistrito },
      { titulo: 'Primer Distrito — Jueces de Control y Ejecución', raiz: juzgadosPrimerDistritoControl },
      { titulo: 'Segundo Distrito', raiz: juzgadosSegundoDistrito },
      { titulo: 'Tercer Distrito', raiz: juzgadosTercerDistrito },
      { titulo: 'Tercer Distrito — Jueces de Control y Ejecución', raiz: juzgadosTercerDistritoControl },
      { titulo: 'Cuarto Distrito', raiz: juzgadosCuartoDistrito },
      { titulo: 'Distritos Quinto a Décimo Tercero', raiz: juzgadosDemasDistritos },
    ],
  },
]
