// data/marco-normativo.ts
// Marco Normativo del Poder Judicial del Estado de Durango
// Fuente: https://pjdgo.gob.mx/marco-normativo/ (extraído el 14/ago/2026)
//
// Los `path` son relativos a PDF_MARCO_BASE_URL y conservan la codificación
// EXACTA del sitio viejo (espacios %20, acentos, dobles espacios, paréntesis
// %28 %29, comas %2C). NO normalizar: el servidor actual es sensible a estos
// caracteres y "corregirlos" rompería los links.
//
// Los títulos sí fueron corregidos ortográficamente respecto al sitio viejo
// (ej. "Victimas"→"Víctimas", "Accesos"→"Acceso", "Procuradoría"→"Procuraduría").

export const PDF_MARCO_BASE_URL =
  process.env.NEXT_PUBLIC_PDF_MARCO_BASE_URL ??
  "https://pjdgo.gob.mx/contenido/Contenido%20web%202020/Marco%20Normativo/";

export interface DocumentoNormativo {
  titulo: string;
  path: string; // relativo a PDF_MARCO_BASE_URL, codificación intacta
}

export interface CategoriaNormativa {
  nombre: string;
  etiquetaBoton: string; // "Descargar Código" | "Descargar Ley" | etc.
  documentos: DocumentoNormativo[];
}

export interface AmbitoNormativo {
  nombre: string;
  categorias: CategoriaNormativa[];
}

export const marcoNormativo: AmbitoNormativo[] = [
  {
    nombre: "Documentos Federales",
    categorias: [
      {
        nombre: "Códigos",
        etiquetaBoton: "Descargar Código",
        documentos: [
          { titulo: "Código Nacional de Procedimientos Civiles y Familiares", path: "Federal/PDF/C%C3%B3digo%20Nacional%20Civil%20y%20Familiar.pdf" },
          { titulo: "Código Civil Federal", path: "Federal/PDF/Codigo%20Civil%20Federal.pdf" },
          { titulo: "Código Federal de Procedimientos Civiles", path: "Federal/PDF/Codigo%20Federal%20de%20Procedimientos%20Civiles.pdf" },
          { titulo: "Código Fiscal de la Federación", path: "Federal/PDF/Codigo%20Fiscal%20de%20la%20Federacion.pdf" },
          { titulo: "Código Nacional de Procedimientos Penales", path: "Federal/PDF/Codigo%20Nacional%20de%20Procedimientos%20Penales.pdf" },
          { titulo: "Código Penal Federal", path: "Federal/PDF/Codigo%20Penal%20Federal.pdf" },
          { titulo: "Código de Comercio", path: "Federal/PDF/C%C3%B3digo%20de%20Comercio.pdf" },
        ],
      },
      {
        nombre: "Leyes",
        etiquetaBoton: "Descargar Ley",
        documentos: [
          { titulo: "Ley de Amparo", path: "Federal/PDF/Ley%20de%20Amparo.pdf" },
          { titulo: "Ley de Ciencia y Tecnología", path: "Federal/PDF/Ley%20de%20Ciencia%20y%20Tecnolog%C3%ADa.pdf" },
          { titulo: "Ley de Firma Electrónica Avanzada", path: "Federal/PDF/Ley%20de%20Firma%20Electronica%20Avanzada.pdf" },
          { titulo: "Ley de la Comisión Nacional de los Derechos Humanos", path: "Federal/PDF/Ley%20de%20la%20Comision%20Nacional%20de%20los%20Derechos%20Humanos.pdf" },
          { titulo: "Ley del Instituto del Fondo Nacional de la Vivienda para los Trabajadores", path: "Federal/PDF/Ley%20del%20Instituto%20del%20Fondo%20Nacional%20de%20la%20Vivienda%20para%20los%20Trabajadores.pdf" },
          { titulo: "Ley del Notariado", path: "Federal/PDF/Ley%20del%20Notariado.pdf" },
          { titulo: "Ley del Seguro Social", path: "Federal/PDF/Ley%20del%20Seguro%20Social.pdf" },
          { titulo: "Ley Federal de Defensoría Pública", path: "Federal/PDF/Ley%20Federal%20de%20Defensor%C3%ADa%20P%C3%BAblica.pdf" },
          { titulo: "Ley Federal de Derechos", path: "Federal/PDF/Ley%20Federal%20de%20Derechos.pdf" },
          { titulo: "Ley Federal de Transparencia y Acceso a la Información Pública", path: "Federal/PDF/Ley%20Federal%20de%20Transparencia%20y%20Acceso%20a%20la%20Informaci%C3%B3n%20P%C3%BAblica.pdf" },
          { titulo: "Ley Federal del Trabajo", path: "Federal/PDF/Ley%20Federal%20del%20Trabajo.pdf" },
          { titulo: "Ley Federal para Prevenir y Eliminar la Discriminación", path: "Federal/PDF/Ley%20Federal%20para%20Prevenir%20y%20Eliminar%20la%20Discriminaci%C3%B3n.pdf" },
          { titulo: "Ley Federal para la Protección a Personas que Intervienen en el Procedimiento Penal", path: "Federal/PDF/Ley%20Federal%20para%20Proteccion%20a%20Personas%20que%20Intervienen%20Procediemiento%20Penal.pdf" },
        ],
      },
      {
        nombre: "Leyes Generales",
        etiquetaBoton: "Descargar Ley",
        documentos: [
          { titulo: "Ley General del Sistema Nacional Anticorrupción", path: "Federal/PDF/Ley%20General%20%20del%20Sistema%20Nacional%20Anticorrupci%C3%B3n.pdf" },
          { titulo: "Ley General de Archivos", path: "Federal/PDF/Ley%20General%20de%20Archivos.pdf" },
          { titulo: "Ley General de los Derechos de Niñas, Niños y Adolescentes", path: "Federal/PDF/Ley%20General%20de%20los%20Derechos%20de%20Ni%C3%B1as%2C%20Ni%C3%B1os%20y%20Adolescentes.pdf" },
          { titulo: "Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados", path: "Federal/PDF/Ley%20General%20de%20Proteccion%20de%20Datos%20Personales%20en%20Posesi%C3%B3n%20de%20Sujetos%20Obligados.pdf" },
          { titulo: "Ley General de Transparencia y Acceso a la Información Pública", path: "Federal/PDF/Ley%20General%20de%20Transparencia%20y%20Acceso%20a%20la%20Informaci%C3%B3n%20P%C3%BAblica.pdf" },
          { titulo: "Ley General de Víctimas", path: "Federal/PDF/Ley%20General%20de%20V%C3%ADctimas.pdf" },
          { titulo: "Ley General para la Igualdad entre Mujeres y Hombres", path: "Federal/PDF/Ley%20General%20para%20la%20Igualdad%20entre%20Mujeres%20y%20Hombres.pdf" },
          { titulo: "Ley General para la Inclusión de las Personas con Discapacidad", path: "Federal/PDF/Ley%20General%20para%20la%20Inclusi%C3%B3n%20de%20las%20Personas%20con%20Discapacidad.pdf" },
        ],
      },
      {
        nombre: "Leyes Nacionales",
        etiquetaBoton: "Descargar Ley",
        documentos: [
          { titulo: "Ley Nacional de Ejecución Penal", path: "Federal/PDF/Ley%20Nacional%20de%20Ejecuci%C3%B3n%20Penal.pdf" },
          { titulo: "Ley Nacional del Sistema Integral de Justicia Penal para Adolescentes", path: "Federal/PDF/Ley%20Nacional%20del%20Sistema%20Integral%20de%20Justicia%20Penal%20para%20Adolescentes.pdf" },
        ],
      },
      {
        nombre: "Leyes Orgánicas",
        etiquetaBoton: "Descargar Ley",
        documentos: [
          { titulo: "Ley Orgánica del Consejo Nacional de Ciencia y Tecnología", path: "Federal/PDF/Ley%20Org%C3%A1nica%20del%20Consejo%20Nacional%20de%20Ciencia%20y%20Tecnolog%C3%ADa.pdf" },
          { titulo: "Ley Orgánica del Poder Judicial de la Federación", path: "Federal/PDF/Ley%20Org%C3%A1nica%20del%20Poder%20Judicial%20de%20la%20Federaci%C3%B3n.pdf" },
        ],
      },
      {
        nombre: "Reglamentos",
        etiquetaBoton: "Descargar Reglamento",
        documentos: [
          { titulo: "Reglamento de la Ley General de Acceso de las Mujeres a una Vida Libre de Violencia", path: "Federal/PDF/REGLAMENTO%20DE%20LA%20LEY%20GENERAL%20DE%20ACCESO%20DE%20LAS%20MUJERES%20A%20UNA%20VIDA%20LIBRE%20DE%20VIOLENCIA.pdf" },
          { titulo: "Reglamento de la Ley General de los Derechos de Niñas, Niños y Adolescentes", path: "Federal/PDF/REGLAMENTO%20DE%20LA%20LEY%20GENERAL%20DE%20LOS%20DERECHOS%20DE%20NI%C3%91AS%2C%20NI%C3%91OS%20Y.pdf" },
          { titulo: "Reglamento de la Ley General de Víctimas", path: "Federal/PDF/REGLAMENTO%20DE%20LA%20LEY%20GENERAL%20DE%20V%C3%8DCTIMAS.pdf" },
          { titulo: "Reglamento de la Ley General para la Prevención Social de la Violencia y la Delincuencia", path: "Federal/PDF/REGLAMENTO%20DE%20LA%20LEY%20GENERAL%20PARA%20LA%20PREVENCI%C3%93N%20SOCIAL%20DE%20LA%20VIOLENCIA%20Y%20LA.pdf" },
        ],
      },
    ],
  },
  {
    nombre: "Documentos Estatales",
    categorias: [
      {
        nombre: "Códigos",
        etiquetaBoton: "Descargar Código",
        documentos: [
          { titulo: "Código Civil", path: "Estatal/PDF/CODIGO%20CIVIL.pdf" },
          { titulo: "Código de Procedimientos Civiles", path: "Estatal/PDF/CODIGO%20DE%20PROC.%20CIVILES.pdf" },
          // OJO: en el sitio viejo este documento federal aparece también en la
          // tabla estatal, apuntando al MISMO archivo federal. Probable error
          // del sitio viejo — pendiente confirmar con el cliente si se elimina.
          { titulo: "Código Fiscal de la Federación", path: "Federal/PDF/Codigo%20Fiscal%20de%20la%20Federacion.pdf" },
          { titulo: "Código de Procedimientos Penales (anterior)", path: "Estatal/PDF/CODIGO%20DE%20PROC.%20PENALES%20%28ANTERIOR%29.pdf" },
          { titulo: "Código Fiscal", path: "Estatal/PDF/CODIGO%20FISCAL.pdf" },
          { titulo: "Código Penal (anterior)", path: "Estatal/PDF/CODIGO%20PENAL%20%28ANTERIOR%29.pdf" },
          { titulo: "Código Penal (nuevo)", path: "Estatal/PDF/CODIGO%20PENAL%20%28NUEVO%29.pdf" },
          { titulo: "Código Procesal Penal (nuevo)", path: "Estatal/PDF/CODIGO%20PROCESAL%20PENAL%20%28NUEVO%29.pdf" },
        ],
      },
      {
        nombre: "Leyes",
        etiquetaBoton: "Descargar Ley",
        documentos: [
          { titulo: "Ley de Adopciones", path: "Estatal/PDF/LEY%20DE%20ADOPCIONES.pdf" },
          { titulo: "Ley de Adquisiciones, Arrendamientos y Servicios", path: "Estatal/PDF/LEY%20DE%20ADQUISICIONES%2C%20ARRENDAMIENTOS%20Y%20SERVICIOS.pdf" },
          { titulo: "Ley de Arancel de los Notarios Públicos", path: "Estatal/PDF/LEY%20DE%20ARANCEL%20DE%20LOS%20NOTARIOS%20PUB..pdf" },
          { titulo: "Ley de Aranceles de los Licenciados en Derecho", path: "Estatal/PDF/LEY%20DE%20ARANCELES%20DE%20LOS%20LICENCIADOS%20EN%20DERECHO.pdf" },
          { titulo: "Ley de Archivos", path: "Estatal/PDF/LEY%20DE%20ARCHIVOS.pdf" },
          { titulo: "Ley de Bienes", path: "Estatal/PDF/LEY%20DE%20BIENES.pdf" },
          { titulo: "Ley de Ciencia y Tecnología", path: "Estatal/PDF/LEY%20DE%20CIENCIA%20Y%20TECNOLOGIA.pdf" },
          { titulo: "Ley de Ejecución de Penas y Medidas de Seguridad", path: "Estatal/PDF/LEY%20DE%20EJECUCION%20DE%20PENAS%20Y%20MEDIDAS%20DE%20SEGURIDAD.pdf" },
          { titulo: "Ley de Firma Electrónica Avanzada", path: "Estatal/PDF/LEY%20DE%20FIRMA%20ELECTRONICA%20AVANZADA.pdf" },
          { titulo: "Ley de Fiscalización Superior", path: "Estatal/PDF/LEY%20DE%20FISCALIZACION%20SUPERIOR.pdf" },
          { titulo: "Ley de Hacienda", path: "Estatal/PDF/LEY%20DE%20HACIENDA.pdf" },
          { titulo: "Ley de Igualdad entre Mujeres y Hombres", path: "Estatal/PDF/LEY%20DE%20IGUALDAD%20ENTRE%20MUJERES%20Y%20HOMBRES.pdf" },
          { titulo: "Ley de Imagen Institucional", path: "Estatal/PDF/LEY%20DE%20IMAGEN%20INSTITUCIONAL.pdf" },
          { titulo: "Ley de Inclusión para las Personas con Discapacidad", path: "Estatal/PDF/LEY%20DE%20INCLUSION%20PARA%20LAS%20PERSONAS%20CON%20DISCAPACIDAD.pdf" },
          { titulo: "Ley del Indulto", path: "Estatal/PDF/LEY%20DE%20INDULTO.pdf" },
          { titulo: "Ley de Justicia Administrativa", path: "Estatal/PDF/LEY%20DE%20JUSTICIA%20ADMINISTRATIVA.pdf" },
          { titulo: "Ley de Justicia Alternativa", path: "Estatal/PDF/LEY%20DE%20JUSTICIA%20ALTERNATIVA.pdf" },
          { titulo: "Ley de Justicia Penal Restaurativa", path: "Estatal/PDF/LEY%20DE%20JUSTICIA%20PENAL%20RESTAURATIVA.pdf" },
          { titulo: "Ley de la Comisión Estatal de Derechos Humanos", path: "Estatal/PDF/LEY%20DE%20LA%20COMISION%20ESTATAL%20DE%20DERECHOS%20HUMANOS.pdf" },
          { titulo: "Ley de la Procuraduría de Protección de Niñas, Niños y Adolescentes", path: "Estatal/PDF/LEY%20DE%20LA%20PROCURADURIA%20DE%20PROTECCION%20DE%20NINAS.pdf" },
          { titulo: "Ley de las Mujeres para una Vida sin Violencia", path: "Estatal/PDF/LEY%20DE%20LAS%20MUJERES%20PARA%20UNA%20VIDA%20SIN%20VIOLENCIA.pdf" },
          { titulo: "Ley de las y los Jóvenes", path: "Estatal/PDF/LEY%20DE%20LAS%20Y%20LOS%20JOVENES.pdf" },
          { titulo: "Ley de los Derechos de Niñas, Niños y Adolescentes", path: "Estatal/PDF/LEY%20DE%20LOS%20DERECHOS%20DE%20NINAS%2C%20NINOS%20Y%20ADOLESCENTES.pdf" },
          { titulo: "Ley de los Trabajadores al Servicio de los Tres Poderes", path: "Estatal/PDF/LEY%20DE%20LOS%20TRABAJADORES%20AL%20SERVICIO%20DE%20LOS%20TRES%20PODERES.pdf" },
          { titulo: "Ley de Presupuesto, Contabilidad y Gasto Público", path: "Estatal/PDF/LEY%20DE%20PRESUPUESTO%2C%20CONTABILIDAD%20Y%20GASTO%20PUBLICO.pdf" },
          { titulo: "Ley de Prevención de la Violencia y la Delincuencia", path: "Estatal/PDF/LEY%20DE%20PREVENCION%20DE%20LA%20VIOLENCIA%20Y%20LA%20DELINCUENCIA.pdf" },
          { titulo: "Ley de Prevención y Asistencia para la Atención de las Adicciones", path: "Estatal/PDF/LEY%20DE%20PREVENCION%20Y%20ASISTENCIA%20PARA%20LA%20ATENCION%20DE%20LAS%20ADICCIONES.pdf" },
          { titulo: "Ley de Protección de Datos Personales en Posesión de Sujetos Obligados", path: "Estatal/PDF/LEY%20DE%20PROTECCION%20DE%20DATOS%20PERSONALES%20EN%20POSESION.pdf" },
          { titulo: "Ley de Protección de Datos Personales", path: "Estatal/PDF/LEY%20DE%20PROTECCION%20DE%20DATOS%20PERSONALES.pdf" },
          { titulo: "Ley de Responsabilidades de los Servidores Públicos (nueva)", path: "Estatal/PDF/LEY%20DE%20RESPONSABILIDADES%20DE%20LOS%20SERVIDORES%20PUBLICOS%20%28NUEVA%29.pdf" },
          { titulo: "Ley de Seguridad Pública", path: "Estatal/PDF/LEY%20DE%20SEGURIDAD%20PUBLICA.pdf" },
          { titulo: "Ley de Servicios para el Desarrollo Integral Infantil", path: "Estatal/PDF/LEY%20DE%20SERVICIOS%20PARA%20EL%20DESARROLLO%20INTEGRAL%20INFANTIL.pdf" },
          { titulo: "Ley de Transparencia y Acceso a la Información (nueva)", path: "Estatal/PDF/LEY%20DE%20TRANSPARENCIA%20Y%20ACCESO%20A%20LA%20INFORMACION%20%28NUEVA%29.pdf" },
          { titulo: "Ley de Víctimas", path: "Estatal/PDF/LEY%20DE%20VICTIMAS.pdf" },
          { titulo: "Ley del Gobierno Digital", path: "Estatal/PDF/LEY%20DEL%20GOBIERNO%20DIGITAL.pdf" },
          { titulo: "Ley del Instituto de Defensoría Pública", path: "Estatal/PDF/LEY%20DEL%20INSTITUTO%20DE%20DEFENSORIA%20PUBLICA.pdf" },
          { titulo: "Ley del Instituto Estatal de las Mujeres", path: "Estatal/PDF/LEY%20DEL%20INSTITUTO%20ESTATAL%20DE%20LAS%20MUJERES.pdf" },
          { titulo: "Ley del Notariado", path: "Estatal/PDF/LEY%20DEL%20NOTARIADO.pdf" },
          { titulo: "Ley del Periódico Oficial", path: "Estatal/PDF/LEY%20DEL%20PERIODICO%20OFICIAL.pdf" },
          { titulo: "Ley del Sistema Local Anticorrupción", path: "Estatal/PDF/LEY%20DEL%20SISTEMA%20LOCAL%20ANTICORRUPCION.pdf" },
          { titulo: "Ley para la Prevención y Eliminación de la Discriminación", path: "Estatal/PDF/LEY%20ESTATAL%20PARA%20LA%20PREVENCION%20Y%20ELIMINACION%20DE%20LA%20DISCRIMINACION.pdf" },
          { titulo: "Ley para la Protección de Personas en el Procedimiento Penal", path: "Estatal/PDF/LEY%20ESTATAL%20PARA%20LA%20PROTECCION%20DE%20PERSONAS%20EN%20EL%20PROCEDIMIENTO%20PENAL.pdf" },
          { titulo: "Ley para la Atención, Prevención y Erradicación de la Violencia Familiar", path: "Estatal/PDF/LEY%20PARA%20LA%20ATENCION%2C%20PREV.%20Y%20ERRAD.%20DE%20LA%20VIOLENCIA%20FAMILIAR.pdf" },
          { titulo: "Ley para la Prevención, Atención y Erradicación de la Trata de Personas", path: "Estatal/PDF/LEY%20PARA%20LA%20PREVENCION%2C%20ATENCION%20Y%20ERRADICACION%20DE%20LA%20TRATA%20DE%20PERSONAS.pdf" },
          { titulo: "Ley para la Reforma Penal", path: "Estatal/PDF/LEY%20PARA%20LA%20REFORMA%20PENAL.pdf" },
          { titulo: "Ley que Crea el Instituto de Evaluación de Políticas", path: "Estatal/PDF/LEY%20QUE%20CREA%20EL%20INSTITUTO%20DE%20EVALUACION%20DE%20POLITICAS.pdf" },
          { titulo: "Ley que Establece las Bases para la Video Vigilancia", path: "Estatal/PDF/LEY%20QUE%20ESTABLECE%20LAS%20BASES%20PARA%20LA%20VIDEO%20VIGILANCIA.pdf" },
        ],
      },
      {
        nombre: "Leyes Orgánicas",
        etiquetaBoton: "Descargar Ley Orgánica",
        documentos: [
          { titulo: "Ley Orgánica de la Administración Pública", path: "Estatal/PDF/LEY%20ORGANICA%20DE%20LA%20ADMINISTRACION%20PUBLICA.pdf" },
          { titulo: "Ley Orgánica del Congreso del Estado de Durango", path: "Estatal/PDF/LEY%20ORGANICA%20DEL%20CONGRESO%20DEL%20ESTADO.pdf" },
          { titulo: "Ley Orgánica del Municipio Libre de Durango", path: "Estatal/PDF/LEY%20ORGANICA%20DEL%20MUNICIPIO%20LIBRE.pdf" },
          { titulo: "Ley Orgánica del Poder Judicial", path: "Estatal/PDF/LEY%20ORGANICA%20DEL%20PODER%20JUDICIAL.pdf" },
          { titulo: "Ley Orgánica del Tribunal de Justicia Administrativa", path: "Estatal/PDF/LEY%20ORGANICA%20DEL%20TRIBUNAL%20DE%20JUSTICIA%20ADMINISTRATIVA.pdf" },
        ],
      },
      {
        nombre: "Reglamentos",
        etiquetaBoton: "Descargar Reglamento",
        documentos: [
          { titulo: "Reglamento de la Ley de Justicia Alternativa del Estado de Durango", path: "Estatal/PDF/REGLAMENTO%20DE%20LA%20LEY%20DE%20JUSTICIA%20ALTERNATIVA%20DEL%20ESTADO%20DE%20DURANGO.pdf" },
          { titulo: "Reglamento de la Universidad Judicial del Estado de Durango", path: "Estatal/PDF/REGLAMENTO%20DE%20LA%20UNIVERSIDAD%20JUDICIAL%20DEL%20ESTADO%20DE%20DURANGO.pdf" },
          { titulo: "Reglamento del Haber por Retiro de los Jueces de Primera Instancia del Poder Judicial del Estado de Durango", path: "Estatal/PDF/REGLAMENTO%20DEL%20HABER%20POR%20RETIRO%20DE%20LOS%20JUECES%20DE%20PRIMERA%20INSTANCIA%20DEL%20PODER%20JUDICIAL%20DEL%20ESTADO.pdf" },
          { titulo: "Reglamento del Programa Anual de Meritorios del Consejo de la Judicatura del Poder Judicial del Estado de Durango", path: "Estatal/PDF/REGLAMENTO%20DEL%20PROGRAMA%20ANUAL%20DE%20MERITORIOS%20DEL%20CONSEJO%20DE%20LA%20JUDICATURA%20DEL%20PODER%20JUDICIAL%20DEL%20ESTADO%20DE%20DURANGO.pdf" },
          { titulo: "Reglamento del Tribunal para Menores Infractores del Poder Judicial del Estado para la Aplicación de la Ley de Transparencia y Acceso a la Información Pública", path: "Estatal/PDF/REGLAMENTO%20DEL%20TRIBUNAL%20PARA%20MENORES%20INFRACTORES%20DEL%20PODER%20JUDICIAL%20DEL%20ESTADO%20PARA%20LA%20APLICACI%C3%93N%20DE%20LA%20LEY%20DE%20TRANSPARENCIA%20Y%20ACCESO%20A%20LA%20INFORMACI%C3%93N%20P%C3%9ABLICA%20DEL%20ESTADO%20DE%20DURANGO.pdf" },
          { titulo: "Reglamento Interior de la Comisión de Administración del Tribunal para Menores Infractores", path: "Estatal/PDF/REGLAMENTO%20INTERIOR%20DE%20LA%20COMISION%20DE%20ADMINISTRACION%20DEL%20TRIBUNAL%20PARA%20MENORES%20INFRACTORES%20DEL%20PODER%20JUDICIAL%20DEL%20ESTADO%20DE%20DURANGO.pdf" },
          { titulo: "Reglamento para la Transparencia y el Acceso a la Información Pública", path: "Estatal/PDF/REGLAMENTO%20PARA%20LA%20TRANSPARENCIA%20Y%20EL%20ACCESO%20A%20LA%20INFORMACION.pdf" },
        ],
      },
    ],
  },
  {
    nombre: "Tratados",
    categorias: [
      {
        nombre: "Tratados, Protocolos y Otros Documentos",
        etiquetaBoton: "Descargar Documento",
        documentos: [
          { titulo: "Convención sobre la Eliminación de Todas las Formas de Discriminación contra la Mujer", path: "Tratados/convencion%20sobre%20la%20eliminaci%C3%B3n%20de%20todas%20las%20formas%20de%20discriminacion%20contra%20la%20mujer.pdf" },
          { titulo: "Convención sobre los Derechos del Niño", path: "Tratados/Convenci%C3%B3n%20sobre%20los%20Derechos%20del%20Ni%C3%B1o.pdf" },
          { titulo: "Declaración Americana de los Derechos y Deberes del Hombre", path: "Tratados/Declaracion%20Americana%20de%20los%20Derechos%20y%20deberes%20del%20Hombre.pdf" },
          { titulo: "Declaración Universal de Derechos Humanos", path: "Tratados/Declaraci%C3%B3n%20Universal%20de%20Derechos%20Humanos.pdf" },
          { titulo: "Pacto Internacional de Derechos Civiles y Políticos", path: "Tratados/Pacto%20Internacional%20de%20Derechos%20Civiles%20y%20Pol%C3%ADticos.pdf" },
          { titulo: "Protocolo Facultativo del Pacto Internacional de Derechos Civiles y Políticos", path: "Tratados/PROTOCOLO%20FACULTATIVO%20DEL%20PACTO%20INTERNACIONAL%20DE%20DERECHOS%20CIVILES%20Y%20POL%C3%8DTICOS.pdf" },
          { titulo: "Protocolo Facultativo de la Convención sobre la Eliminación de Todas las Formas de Discriminación contra la Mujer", path: "Tratados/protocolo_facultativo%20de%20la%20convencion%20sobre%20la%20eliminaci%C3%B3n%20de%20todas%20las%20formas%20de%20discriminacion%20contra%20la%20mujer.pdf" },
          { titulo: "Segundo Protocolo Facultativo del Pacto Internacional de Derechos Civiles y Políticos", path: "Tratados/SEGUNDO%20PROTOCOLO%20FACULTATIVO%20DEL%20PACTO%20INTERNACIONAL%20DE%20DERECHOS%20CIVILES%20Y.pdf" },
        ],
      },
    ],
  },
];

export function urlDocumento(doc: DocumentoNormativo): string {
  return PDF_MARCO_BASE_URL + doc.path;
}
