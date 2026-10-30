// Modelo de contenido editable del sitio. Los datos vienen de Storyblok y, si
// Storyblok no está configurado o todavía no tiene el contenido, de
// src/content/defaults.ts (el contenido original del sitio).

// Marca de edición del Visual Editor de Storyblok. Solo viene en modo borrador.
export type Editable = { _editable?: string }

export type Imagen = { src: string; alt: string }

export type Dato = Editable & { valor: string; texto: string }
export type Hito = Editable & { anio: string; texto: string }
export type Certificacion = Editable & { nombre: string; descripcion: string }
export type ContactoWhatsapp = Editable & { nombre: string; telefono: string }

export type IconoServicio = 'siembra' | 'cosecha' | 'pulverizacion' | 'logistica'

export type Producto = Editable & {
  slug: string
  titulo: string
  etiqueta: string
  /** Texto corto de la tarjeta en la home. */
  resumen: string
  /** Texto de la página /productos. */
  descripcion: string
  caracteristicas: string[]
  imagen: Imagen
  /** Nombre y descripción para Google y asistentes de IA (JSON-LD y llms.txt). */
  seoNombre: string
  seoDescripcion: string
}

export type Servicio = Editable & {
  slug: string
  titulo: string
  /** Texto corto de la home. */
  resumen: string
  /** Texto de la página /servicios. */
  descripcion: string
  icono: IconoServicio
  imagen: Imagen
  mostrarEnHome: boolean
  seoDescripcion: string
}

type Titulo = { etiqueta: string; titulo: string; tituloDestacado: string }

export type Home = {
  hero: Editable & {
    titulo: string
    tituloDestacado: string
    bajada: string
    imagen: Imagen
    datos: Dato[]
  }
  empresa: Editable & Titulo & { texto: string; imagen: Imagen }
  historia: Editable &
    Titulo & { texto: string; imagen: Imagen; hitosTitulo: string; hitos: Hito[] }
  productos: Editable & { etiqueta: string; titulo: string }
  servicios: Editable & Titulo & { texto: string; imagen: Imagen }
  calidad: Editable &
    Titulo & { texto: string; imagen: Imagen; certificaciones: Certificacion[] }
  contacto: Editable & {
    titulo: string
    texto: string
    whatsapp: ContactoWhatsapp[]
    email: string
    ubicacion: string
    mapaUrl: string
  }
}

/** Encabezado, SEO y llamado a la acción de /productos y /servicios. */
export type PaginaListado = Editable & {
  seoTitulo: string
  seoDescripcion: string
  heroEtiqueta: string
  heroTitulo: string
  heroDestacado: string
  heroMiga: string
  heroTexto: string
  heroImagen: string
  ctaTitulo: string
  ctaTexto: string
}
