// Esquema de componentes de Storyblok para el sitio. Lo usa setup.ts para
// crearlos o actualizarlos en el espacio. Los nombres de campo tienen que
// coincidir con src/lib/content.ts.

type Field = Record<string, unknown> & { type: string; display_name: string }
export type ComponentDef = {
  name: string
  display_name: string
  is_root: boolean
  is_nestable: boolean
  preview_field?: string
  schema: Record<string, Field>
}

const TEXTO_AYUDA = 'Separá los párrafos con una línea en blanco. Para negrita: **texto**.'

const text = (display_name: string, extra: Record<string, unknown> = {}): Field => ({
  type: 'text',
  display_name,
  ...extra,
})
const textarea = (display_name: string, extra: Record<string, unknown> = {}): Field => ({
  type: 'textarea',
  display_name,
  ...extra,
})
const image = (display_name: string, extra: Record<string, unknown> = {}): Field => ({
  type: 'asset',
  display_name,
  filetypes: ['images'],
  ...extra,
})
const list = (display_name: string, components: string[], extra: Record<string, unknown> = {}): Field => ({
  type: 'bloks',
  display_name,
  restrict_type: '',
  restrict_components: true,
  component_whitelist: components,
  ...extra,
})
const one = (display_name: string, component: string): Field =>
  list(display_name, [component], {
    maximum: 1,
    description: 'Sección fija de la home. Si se borra, se muestra el texto original.',
  })

/** Asigna "pos" según el orden en que están escritos los campos. */
function ordered(fields: Record<string, Field>) {
  const out: Record<string, Field> = {}
  Object.keys(fields).forEach((key, pos) => {
    out[key] = { ...fields[key], pos }
  })
  return out
}

const titulo = {
  etiqueta: text('Etiqueta', { description: 'Texto chico arriba del título.' }),
  titulo: text('Título'),
  titulo_destacado: text('Título (segunda línea, resaltada)'),
}

const nestable = (name: string, display_name: string, schema: Record<string, Field>, preview_field?: string): ComponentDef => ({
  name,
  display_name,
  is_root: false,
  is_nestable: true,
  preview_field,
  schema: ordered(schema),
})

const root = (name: string, display_name: string, schema: Record<string, Field>): ComponentDef => ({
  name,
  display_name,
  is_root: true,
  is_nestable: false,
  schema: ordered(schema),
})

// Orden: primero los bloques anidados, después los que los usan.
export const COMPONENTS: ComponentDef[] = [
  nestable('dato', 'Dato', { valor: text('Valor', { description: 'Ej.: +1000' }), texto: text('Texto') }, 'valor'),
  nestable('hito', 'Hito', { anio: text('Año'), texto: text('Texto') }, 'anio'),
  nestable('certificacion', 'Certificación', { nombre: text('Nombre'), descripcion: textarea('Descripción') }, 'nombre'),
  nestable('contacto_whatsapp', 'Contacto de WhatsApp', { nombre: text('Nombre'), telefono: text('Teléfono') }, 'nombre'),

  nestable('hero', 'Portada', {
    titulo: text('Título'),
    titulo_destacado: text('Título (segunda línea, resaltada)'),
    bajada: textarea('Bajada'),
    imagen: image('Imagen de fondo'),
    datos: list('Datos destacados', ['dato'], { maximum: 3 }),
  }),
  nestable('seccion_empresa', 'Sección: Sobre nosotros', {
    ...titulo,
    texto: textarea('Texto', { description: TEXTO_AYUDA }),
    imagen: image('Imagen'),
  }),
  nestable('seccion_historia', 'Sección: Nuestra historia', {
    ...titulo,
    texto: textarea('Texto', { description: TEXTO_AYUDA }),
    imagen: image('Imagen'),
    hitos_titulo: text('Título de los hitos'),
    hitos: list('Hitos', ['hito']),
  }),
  nestable('seccion_productos', 'Sección: Productos', {
    etiqueta: text('Etiqueta'),
    titulo: text('Título'),
  }),
  nestable('seccion_servicios', 'Sección: Servicios', {
    ...titulo,
    texto: textarea('Texto', { description: TEXTO_AYUDA }),
    imagen: image('Imagen'),
  }),
  nestable('seccion_calidad', 'Sección: Calidad y certificaciones', {
    ...titulo,
    texto: textarea('Texto', { description: TEXTO_AYUDA }),
    imagen: image('Imagen'),
    certificaciones: list('Certificaciones', ['certificacion']),
  }),
  nestable('seccion_contacto', 'Sección: Contacto', {
    titulo: text('Título'),
    texto: textarea('Texto'),
    whatsapp: list('Contactos de WhatsApp', ['contacto_whatsapp']),
    email: text('Email'),
    ubicacion: text('Ubicación'),
    mapa_url: text('Link a Google Maps'),
  }),

  root('home', 'Página de inicio', {
    hero: one('Portada', 'hero'),
    empresa: one('Sobre nosotros', 'seccion_empresa'),
    historia: one('Nuestra historia', 'seccion_historia'),
    productos: one('Productos', 'seccion_productos'),
    servicios: one('Servicios', 'seccion_servicios'),
    calidad: one('Calidad y certificaciones', 'seccion_calidad'),
    contacto: one('Contacto', 'seccion_contacto'),
  }),

  root('producto', 'Producto', {
    titulo: text('Nombre', { required: true }),
    etiqueta: text('Etiqueta', { description: 'Ej.: Formato exportación' }),
    resumen: textarea('Resumen (tarjeta de la home)'),
    descripcion: textarea('Descripción (página Productos)'),
    caracteristicas: textarea('Características', { description: 'Una por línea.' }),
    imagen: image('Imagen'),
    seo_nombre: text('Nombre para Google e IA', {
      description: 'Opcional. Nombre más descriptivo para buscadores y asistentes de IA.',
    }),
    seo_descripcion: textarea('Descripción para Google e IA', {
      description: 'Opcional. Con medidas, pesos y usos: es lo que leen buscadores y asistentes de IA.',
    }),
  }),

  root('servicio', 'Servicio', {
    titulo: text('Nombre', { required: true }),
    resumen: textarea('Resumen (home)'),
    descripcion: textarea('Descripción (página Servicios)'),
    icono: {
      type: 'option',
      display_name: 'Ícono',
      options: [
        { name: 'Siembra', value: 'siembra' },
        { name: 'Cosecha', value: 'cosecha' },
        { name: 'Pulverización', value: 'pulverizacion' },
        { name: 'Logística', value: 'logistica' },
      ],
      default_value: 'siembra',
    },
    imagen: image('Imagen'),
    mostrar_en_home: { type: 'boolean', display_name: 'Mostrar en la home' },
    seo_descripcion: textarea('Descripción para Google e IA', { description: 'Opcional.' }),
  }),

  root('pagina_listado', 'Página de listado', {
    hero_etiqueta: text('Encabezado: etiqueta'),
    hero_titulo: text('Encabezado: título'),
    hero_destacado: text('Encabezado: título resaltado'),
    hero_miga: text('Encabezado: texto de la miga de pan'),
    hero_texto: textarea('Encabezado: texto'),
    hero_imagen: image('Encabezado: imagen de fondo'),
    cta_titulo: text('Llamado final: título'),
    cta_texto: textarea('Llamado final: texto'),
    seo_titulo: text('Título para Google (pestaña del navegador)'),
    seo_descripcion: textarea('Descripción para Google'),
  }),
]
