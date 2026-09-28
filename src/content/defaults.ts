import type { Home, PaginaListado, Producto, Servicio } from './types'

// Contenido original del sitio. Se usa cuando Storyblok no está configurado
// (por ejemplo en local sin STORYBLOK_TOKEN) o todavía no tiene el contenido.
// El script scripts/storyblok-setup.mjs carga exactamente esto en Storyblok.

export const HOME: Home = {
  hero: {
    titulo: 'Alfalfa',
    tituloDestacado: 'de calidad',
    bajada: 'Tecnología, excelencia y compromiso en cada etapa del proceso productivo.',
    imagen: { src: '/images/hero.png', alt: 'Campo de alfalfa' },
    datos: [
      { valor: '+1000', texto: 'hectáreas de alfalfa' },
      { valor: '+8000', texto: 'm² de galpones' },
      { valor: '+13', texto: 'años de experiencia' },
    ],
  },
  empresa: {
    etiqueta: 'Sobre nosotros',
    titulo: 'MegaFardos',
    tituloDestacado: 'del Norte',
    texto: [
      'Somos una empresa ubicada en Jesús María, Córdoba, especializada en la producción, procesamiento y comercialización de alfalfa de alta calidad.',
      'Aplicamos tecnología, maquinaria propia y controles de calidad en cada etapa, para responder a las exigencias de mercados nacionales e internacionales.',
      'Además, brindamos servicios de siembra, cosecha y pulverización con equipamiento de última generación.',
    ].join('\n\n'),
    imagen: { src: '/images/megafardo-campo.webp', alt: 'Planta MegaFardos del Norte' },
  },
  historia: {
    etiqueta: 'Nuestra historia',
    titulo: 'Familia, campo y',
    tituloDestacado: 'tecnología',
    texto: [
      'Somos una empresa familiar que comenzó su actividad agropecuaria en 2013 con 50 hectáreas de alfalfa. Desde entonces, hemos crecido hasta trabajar más de **4.000 hectáreas** de soja, maíz, trigo y alfalfa.',
      'Trabajamos con maquinaria propia con tecnología de última generación. Integramos todas las etapas del proceso productivo, desde la siembra y la cosecha hasta la elaboración de megafardos y pellets.',
    ].join('\n\n'),
    imagen: { src: '/images/megafardos_almacen_web.webp', alt: 'Equipo de Megafardos del Norte' },
    hitosTitulo: 'Hitos de crecimiento',
    hitos: [
      { anio: '2013', texto: 'Inicio con 50 hectáreas de alfalfa' },
      { anio: '2015', texto: 'Incorporación de equipos propios para trilla' },
      { anio: '2022', texto: 'Primera exportación de megafardos' },
      { anio: '2023', texto: 'Importación de prensa para producción de megafardos de exportación' },
      { anio: '2026', texto: 'Instalación de planta pelletizadora' },
    ],
  },
  productos: {
    etiqueta: 'Catálogo',
    titulo: 'Nuestros productos',
  },
  servicios: {
    etiqueta: 'Servicios',
    titulo: 'También ofrecemos',
    tituloDestacado: 'servicios al campo',
    texto:
      'Además de producir alfalfa de primera calidad, ponemos nuestra experiencia y maquinaria a disposición de otros productores.',
    imagen: { src: '/images/equipo2.png', alt: 'Maquinaria agrícola' },
  },
  calidad: {
    etiqueta: 'Certificaciones',
    titulo: 'Calidad',
    tituloDestacado: 'garantizada',
    texto: 'Trabajamos para cumplir con los estándares más exigentes del mercado.',
    imagen: { src: '/images/calidad.webp', alt: 'Logística de Megafardos del Norte' },
    certificaciones: [
      {
        nombre: 'SENASA',
        descripcion: 'Certificación del Servicio Nacional de Sanidad y Calidad Agroalimentaria.',
      },
      { nombre: 'BPM', descripcion: 'Buenas Prácticas de Manufactura en nuestra planta.' },
    ],
  },
  contacto: {
    titulo: 'Contacto',
    texto: 'Comunicate con nosotros por WhatsApp.',
    whatsapp: [
      { nombre: 'Emilio Dianotti', telefono: '+54 9 3525 48-0178' },
      { nombre: 'Franco Dianotti', telefono: '+54 9 3525 48-0177' },
    ],
    email: 'info@megafardosdelnorte.com',
    ubicacion: 'Jesús María, Córdoba',
    mapaUrl:
      'https://www.google.com/maps?q=Megafardos+del+Norte,+Zona+rural+camino+a+nintes,+X5220+Jesus+Mar%C3%ADa,+C%C3%B3rdoba',
  },
}

export const PRODUCTOS: Producto[] = [
  {
    slug: 'megafardos-prensados',
    titulo: 'Megafardos prensados',
    etiqueta: 'Formato exportación',
    resumen:
      'Alfalfa seleccionada, compactada y preparada para transporte eficiente y conservación de calidad.',
    descripcion:
      'Alfalfa seleccionada, compactada y preparada para transporte eficiente y conservación de calidad.',
    caracteristicas: [
      'Materia prima seleccionada',
      'Alta densidad de compactación',
      'Apto para exportación',
      'Conservación de calidad',
    ],
    imagen: { src: '/images/microfardos-product.webp', alt: 'Megafardos prensados' },
    seoNombre: 'Megafardos prensados de alfalfa (formato exportación)',
    seoDescripcion:
      'Alfalfa seleccionada, compactada con alta densidad y preparada para transporte eficiente en contenedor y conservación de calidad. Apto para exportación.',
  },
  {
    slug: 'pellets-de-alfalfa',
    titulo: 'Pellets de alfalfa',
    etiqueta: 'Alta densidad',
    resumen:
      'Producto obtenido mediante compresión de alfalfa deshidratada, ideal para una alimentación práctica y uniforme.',
    descripcion:
      'Producto obtenido mediante compresión de alfalfa deshidratada, ideal para una alimentación práctica y uniforme. Producción propia con calidad constante.',
    caracteristicas: [
      'Alimentación práctica y uniforme',
      'Bolsa 25 kg · Big Bag · Granel',
      '8 mm x 40 mm',
      'Mercado interno y exportación',
    ],
    imagen: { src: '/images/pellets.png', alt: 'Pellets de alfalfa' },
    seoNombre: 'Pellets de alfalfa',
    seoDescripcion:
      'Alfalfa deshidratada comprimida en pellets de 8 mm x 40 mm, para una alimentación práctica y uniforme. Presentación en bolsa de 25 kg, big bag o granel. Mercado interno y exportación.',
  },
  {
    slug: 'microfardos-de-alfalfa',
    titulo: 'Microfardos de alfalfa',
    etiqueta: 'Fácil manejo',
    resumen:
      'Fardos pequeños, perfectos para ganadería, equinos y productores de pequeña y mediana escala.',
    descripcion:
      'Fardos pequeños, perfectos para ganadería, equinos y productores de pequeña y mediana escala.',
    caracteristicas: ['20 a 23 kg', '60x25x35 cm', 'Fácil manipulación', 'Ideal para feedlots y tambos'],
    imagen: { src: '/images/prensado-product.webp', alt: 'Microfardos de alfalfa' },
    seoNombre: 'Microfardos de alfalfa',
    seoDescripcion:
      'Fardos pequeños de 20 a 23 kg (60x25x35 cm), de fácil manipulación, ideales para ganadería, equinos, feedlots, tambos y productores de pequeña y mediana escala.',
  },
  {
    slug: 'megafardos-de-alfalfa',
    titulo: 'Megafardos de alfalfa',
    etiqueta: 'Mercado interno',
    resumen:
      'Alfalfa secada al sol, procesada para conservar sus propiedades y valor nutricional. Humedad controlada y calidad constante todo el año.',
    descripcion:
      'Alfalfa secada al sol, procesada para conservar sus propiedades y valor nutricional. Humedad controlada y calidad constante durante todo el año.',
    caracteristicas: [
      '0.90x1.20x2.4 m',
      'Humedad controlada <18%',
      '550 a 750 kg',
      'Calidad constante todo el año',
    ],
    imagen: { src: '/images/deshidratada-product.webp', alt: 'Megafardos de alfalfa' },
    seoNombre: 'Megafardos de alfalfa (mercado interno)',
    seoDescripcion:
      'Megafardos de 0,90 x 1,20 x 2,4 m y 550 a 750 kg, alfalfa secada al sol con humedad controlada menor al 18% y calidad constante todo el año.',
  },
]

export const SERVICIOS: Servicio[] = [
  {
    slug: 'siembra',
    titulo: 'Siembra',
    resumen:
      'Servicio de siembra para soja, maíz, trigo y alfalfa. Realizado con maquinaria de última generación.',
    descripcion:
      'Servicio de siembra para soja, maíz, trigo y alfalfa con maquinaria de última generación.',
    icono: 'siembra',
    imagen: { src: '/images/siembra.webp', alt: 'Siembra' },
    mostrarEnHome: true,
    seoDescripcion:
      'Servicio de siembra de soja, maíz, trigo y alfalfa con maquinaria propia de última generación.',
  },
  {
    slug: 'cosecha',
    titulo: 'Cosecha',
    resumen:
      'Cosecha de soja, maíz, trigo y alfalfa. Contamos con equipos de trilla y enfardado de última generación.',
    descripcion:
      'Cosecha de soja, maíz, trigo y alfalfa con equipos de trilla y enfardado de última generación. Control total del proceso productivo para garantizar la mejor calidad del grano y el forraje.',
    icono: 'cosecha',
    imagen: { src: '/images/hero-2.png', alt: 'Cosecha' },
    mostrarEnHome: true,
    seoDescripcion:
      'Cosecha de soja, maíz, trigo y alfalfa con equipos propios de trilla y enfardado.',
  },
  {
    slug: 'pulverizacion',
    titulo: 'Pulverización',
    resumen:
      'Pulverización para todo tipo de cultivos. Aplicación precisa y eficiente con equipos modernos.',
    descripcion:
      'Pulverización terrestre para todo tipo de cultivos. Aplicación precisa y eficiente con equipos modernos que optimizan el uso de insumos y cuidan el rendimiento de cada lote.',
    icono: 'pulverizacion',
    imagen: { src: '/images/pulverizacion.webp', alt: 'Pulverización' },
    mostrarEnHome: true,
    seoDescripcion:
      'Pulverización terrestre para todo tipo de cultivos, con aplicación precisa y eficiente.',
  },
  {
    slug: 'logistica-y-exportacion',
    titulo: 'Logística y exportación',
    resumen:
      'Logística integral para mercado interno y exportación: prensado, carga en contenedores y transporte.',
    descripcion:
      'Logística integral para mercado interno y exportación. Coordinamos el prensado, la carga en contenedores y el transporte cumpliendo con los estándares internacionales de calidad.',
    icono: 'logistica',
    imagen: { src: '/images/logistica.webp', alt: 'Logística y exportación' },
    mostrarEnHome: false,
    seoDescripcion:
      'Prensado, carga en contenedores y transporte de alfalfa para mercado interno y exportación.',
  },
]

export const PAGINA_PRODUCTOS: PaginaListado = {
  seoTitulo: 'Productos — Megafardos del Norte',
  seoDescripcion:
    'Megafardos, microfardos y pellets de alfalfa de primera calidad desde Jesús María, Córdoba. Planta habilitada por SENASA y BPM. Mercado interno y exportación.',
  heroEtiqueta: 'Productos',
  heroTitulo: 'Nuestros',
  heroDestacado: 'productos',
  heroMiga: 'Nuestros Productos',
  heroTexto:
    'Ofrecemos alfalfa de calidad en distintos formatos para adaptarnos a las necesidades de cada cliente. Planta habilitada por SENASA y bajo estándares de Buenas Prácticas de Manufactura (BPM).',
  heroImagen: '/images/fardos.png',
  ctaTitulo: '¿Buscás alfalfa de primera calidad?',
  ctaTexto: 'Contactanos y te asesoramos sobre el producto que mejor se adapta a tu operación.',
}

export const PAGINA_SERVICIOS: PaginaListado = {
  seoTitulo: 'Servicios — Megafardos del Norte',
  seoDescripcion:
    'Servicios agropecuarios: siembra, cosecha, pulverización y logística. Maquinaria de última generación al servicio del campo.',
  heroEtiqueta: 'Servicios',
  heroTitulo: 'Servicios al',
  heroDestacado: 'campo',
  heroMiga: 'Servicios al campo',
  heroTexto:
    'Además de producir alfalfa de primera calidad, ponemos nuestra experiencia y maquinaria de última generación a disposición de otros productores.',
  heroImagen: '/images/equipo2.png',
  ctaTitulo: '¿Necesitás servicios para tu campo?',
  ctaTexto:
    'Contactanos y coordinamos siembra, cosecha, pulverización o logística según tu necesidad.',
}
