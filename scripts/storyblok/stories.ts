// Arma el contenido inicial de Storyblok a partir de src/content/defaults.ts
// (el contenido que hoy tiene el sitio). Los campos coinciden con schema.ts.

import { randomUUID } from 'node:crypto'
import * as D from '../../src/content/defaults'
import type { Imagen } from '../../src/content/types'

export type Blok = { _uid: string; component: string; [field: string]: unknown }
export type StorySpec = {
  name: string
  slug: string
  /** Carpeta a la que pertenece ('productos' | 'servicios'), o ninguna. */
  folder?: string
  /** Orden dentro de la carpeta (ascendente, igual que en Storyblok). */
  position: number
  content: Blok
}
export type FolderSpec = { name: string; slug: string; default_root: string }

/** Convierte una imagen local (/images/x.webp) en un campo asset de Storyblok. */
export type AssetFor = (img: Imagen) => Promise<unknown>

const blok = (component: string, fields: Record<string, unknown>): Blok => ({
  _uid: randomUUID(),
  component,
  ...fields,
})

export const FOLDERS: FolderSpec[] = [
  { name: 'Productos', slug: 'productos', default_root: 'producto' },
  { name: 'Servicios', slug: 'servicios', default_root: 'servicio' },
]

export async function buildStories(asset: AssetFor): Promise<StorySpec[]> {
  const h = D.HOME
  const home = blok('home', {
    hero: [
      blok('hero', {
        titulo: h.hero.titulo,
        titulo_destacado: h.hero.tituloDestacado,
        bajada: h.hero.bajada,
        imagen: await asset(h.hero.imagen),
        datos: h.hero.datos.map((d) => blok('dato', { valor: d.valor, texto: d.texto })),
      }),
    ],
    empresa: [
      blok('seccion_empresa', {
        etiqueta: h.empresa.etiqueta,
        titulo: h.empresa.titulo,
        titulo_destacado: h.empresa.tituloDestacado,
        texto: h.empresa.texto,
        imagen: await asset(h.empresa.imagen),
      }),
    ],
    historia: [
      blok('seccion_historia', {
        etiqueta: h.historia.etiqueta,
        titulo: h.historia.titulo,
        titulo_destacado: h.historia.tituloDestacado,
        texto: h.historia.texto,
        imagen: await asset(h.historia.imagen),
        hitos_titulo: h.historia.hitosTitulo,
        hitos: h.historia.hitos.map((x) => blok('hito', { anio: x.anio, texto: x.texto })),
      }),
    ],
    productos: [blok('seccion_productos', { etiqueta: h.productos.etiqueta, titulo: h.productos.titulo })],
    servicios: [
      blok('seccion_servicios', {
        etiqueta: h.servicios.etiqueta,
        titulo: h.servicios.titulo,
        titulo_destacado: h.servicios.tituloDestacado,
        texto: h.servicios.texto,
        imagen: await asset(h.servicios.imagen),
      }),
    ],
    calidad: [
      blok('seccion_calidad', {
        etiqueta: h.calidad.etiqueta,
        titulo: h.calidad.titulo,
        titulo_destacado: h.calidad.tituloDestacado,
        texto: h.calidad.texto,
        imagen: await asset(h.calidad.imagen),
        certificaciones: h.calidad.certificaciones.map((c) =>
          blok('certificacion', { nombre: c.nombre, descripcion: c.descripcion }),
        ),
      }),
    ],
    contacto: [
      blok('seccion_contacto', {
        titulo: h.contacto.titulo,
        texto: h.contacto.texto,
        whatsapp: h.contacto.whatsapp.map((w) =>
          blok('contacto_whatsapp', { nombre: w.nombre, telefono: w.telefono }),
        ),
        email: h.contacto.email,
        ubicacion: h.contacto.ubicacion,
        mapa_url: h.contacto.mapaUrl,
      }),
    ],
  })

  const pagina = async (p: typeof D.PAGINA_PRODUCTOS) =>
    blok('pagina_listado', {
      hero_etiqueta: p.heroEtiqueta,
      hero_titulo: p.heroTitulo,
      hero_destacado: p.heroDestacado,
      hero_miga: p.heroMiga,
      hero_texto: p.heroTexto,
      hero_imagen: await asset({ src: p.heroImagen, alt: '' }),
      cta_titulo: p.ctaTitulo,
      cta_texto: p.ctaTexto,
      seo_titulo: p.seoTitulo,
      seo_descripcion: p.seoDescripcion,
    })

  const stories: StorySpec[] = [
    { name: 'Inicio', slug: 'home', position: 0, content: home },
    { name: 'Página Productos', slug: 'pagina-productos', position: 10, content: await pagina(D.PAGINA_PRODUCTOS) },
    { name: 'Página Servicios', slug: 'pagina-servicios', position: 20, content: await pagina(D.PAGINA_SERVICIOS) },
  ]

  for (let i = 0; i < D.PRODUCTOS.length; i++) {
    const p = D.PRODUCTOS[i]
    stories.push({
      name: p.titulo,
      slug: p.slug,
      folder: 'productos',
      position: i * 10,
      content: blok('producto', {
        titulo: p.titulo,
        etiqueta: p.etiqueta,
        resumen: p.resumen,
        descripcion: p.descripcion,
        caracteristicas: p.caracteristicas.join('\n'),
        imagen: await asset(p.imagen),
        seo_nombre: p.seoNombre,
        seo_descripcion: p.seoDescripcion,
      }),
    })
  }

  for (let i = 0; i < D.SERVICIOS.length; i++) {
    const s = D.SERVICIOS[i]
    stories.push({
      name: s.titulo,
      slug: s.slug,
      folder: 'servicios',
      position: i * 10,
      content: blok('servicio', {
        titulo: s.titulo,
        resumen: s.resumen,
        descripcion: s.descripcion,
        icono: s.icono,
        imagen: await asset(s.imagen),
        mostrar_en_home: s.mostrarEnHome,
        seo_descripcion: s.seoDescripcion,
      }),
    })
  }

  return stories
}
