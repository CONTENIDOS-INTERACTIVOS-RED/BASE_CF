export default {
  global: {
    componenteFormativo: '',
    descripcionCurso: '',
    imagenBannerPrincipal: '',
    fondoBannerPrincipal: '',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '',
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: '',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        unidad: 'UNIDAD 2.',
        numero: '',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        unidad: 'UNIDAD 2.',
        numero: '1',
        titulo: 'Definición de algoritmo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Sistema',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Pensamiento Sistémico o lógico',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Eficiencia de los algoritmos',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        unidad: 'UNIDAD 2.',
        numero: '2',
        titulo: 'Lógica algorítmica: secuencias, condiciones, ciclos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Metodología para la solución de algoritmos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Secuencias, condiciones, ciclos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        unidad: 'UNIDAD 2.',
        numero: '3',
        titulo:
          'Representación de algoritmos: pseudocódigo y diagramas de flujo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Representación de algoritmos: pseudocódigo y diagramas de flujo',
            hash: 't_3_1',
          },
        ],
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-download',
        titulo: 'Descargar PDF',
        download: 'downloads/material.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      // {
      //   icono: 'far fa-registered',
      //   titulo: 'Síntesis',
      //   nombreRuta: 'sintesis',
      // },
    ],
  },
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Algoritmo',
      significado:
        'secuencia de pasos lógicos, finitos que resuelven un problema particular.',
    },
    {
      termino: 'Ciclos',
      significado:
        'conjunto de instrucciones de repetición que se llevan a cabo mientras se cumple una condición.',
    },
    {
      termino: 'Condiciones',
      significado:
        'etapa en la que el algoritmo debe tomar una decisión y según la respuesta obtenida continuará su proceso.',
    },
    {
      termino: 'Constante',
      significado:
        'es una variable almacenada en memoria y cuyo contenido no cambiará durante todo el proceso de ejecución del algoritmo.',
    },
    {
      termino: 'Diagrama de flujo',
      significado:
        'representación gráfica de un proceso, ilustran paso a paso la lógica que debe seguir el programa de manera sencilla.',
    },
    {
      termino: 'Eficiencia',
      significado: 'seleccionar la manera óptima para resolver un problema.',
    },
    {
      termino: 'Identificador',
      significado:
        'corresponde al nombre asignado a una variable en la memoria',
    },
    {
      termino: 'Memoria',
      significado:
        'espacio reservado dentro del sistema que contiene un nombre y una variable',
    },
    {
      termino: 'Proceso',
      significado:
        'conjunto de instrucciones que "manipulan" los datos y entregan la solución al problema.',
    },
    {
      termino: 'Programa',
      significado:
        '"Conjunto de instrucciones que sigue la computadora para alcanzar un resultado específico" (Von Neumann 1946)',
    },
    {
      termino: 'Pseudocódigo',
      significado:
        'permite escribir de manera ordenada la secuencia de pasos lógicos que el algoritmo debe ejecutar, es universal lo que implica su comprensión y lectura sin requerirse un lenguaje de programación formal para su escritura',
    },
    {
      termino: 'Secuencia',
      significado:
        'ejecución de instrucciones de manera ordenada y jerárquica, lineal, una tras otra y sin interrupción hasta su finalización',
    },
    {
      termino: 'Sistema',
      significado:
        'conjunto de elementos que tienen una relación directa entre sí y que interactúan de manera coordinada para obtener un objetivo específico',
    },
    {
      termino: 'Variable',
      significado:
        'diferente a la constante, la variable sí cambia "varía" su valor según los procedimientos que se lleven a cabo dentro del algoritmo.',
    },
  ],
  complementario: [],
  creditos: [],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
