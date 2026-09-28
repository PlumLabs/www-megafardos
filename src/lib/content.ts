import * as D from '@/content/defaults'
import type {
  Editable,
  Home,
  IconoServicio,
  Imagen,
  PaginaListado,
  Producto,
  Servicio,
} from '@/content/types'
import { getStories, getStory, isDraft, type SbAsset, type SbBlok } from './storyblok'

// Convierte el contenido de Storyblok al modelo del sitio (src/content/types.ts).
// Estructura en Storyblok:
//   home                 story "home" (secciones de la página de inicio)
//   pagina-productos     story con el encabezado, SEO y llamado a la acción de /productos
//   pagina-servicios     idem para /servicios
//   productos/*          una story por producto (el orden de la carpeta es el del sitio)
//   servicios/*          una story por servicio
// Si algo no está cargado se usa el contenido original (src/content/defaults.ts).

const str = (v: unknown) => (typeof v === 'string' ? v : '')

function img(asset: unknown, fallback: Imagen): Imagen {
  const a = asset as SbAsset
  if (!a?.filename) return fallback
  return { src: a.filename, alt: a.alt || fallback.alt }
}

function editable(blok: SbBlok): Editable {
  // La marca del Visual Editor solo tiene sentido en modo borrador.
  return isDraft() && blok._editable ? { _editable: blok._editable } : {}
}

function bloks(v: unknown): SbBlok[] {
  return Array.isArray(v) ? (v as SbBlok[]) : []
}

/** Primer bloque de un campo de tipo "bloks" (cada sección de la home es uno). */
function section(content: SbBlok, field: string): SbBlok | null {
  return bloks(content[field])[0] ?? null
}

function lines(v: unknown): string[] {
  return str(v)
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)
}

export async function getHome(): Promise<Home> {
  const story = await getStory('home')
  if (!story) return D.HOME
  const c = story.content
  const d = D.HOME

  const hero = section(c, 'hero')
  const empresa = section(c, 'empresa')
  const historia = section(c, 'historia')
  const productos = section(c, 'productos')
  const servicios = section(c, 'servicios')
  const calidad = section(c, 'calidad')
  const contacto = section(c, 'contacto')

  return {
    hero: hero
      ? {
          ...editable(hero),
          titulo: str(hero.titulo),
          tituloDestacado: str(hero.titulo_destacado),
          bajada: str(hero.bajada),
          imagen: img(hero.imagen, d.hero.imagen),
          datos: bloks(hero.datos).map((b) => ({
            ...editable(b),
            valor: str(b.valor),
            texto: str(b.texto),
          })),
        }
      : d.hero,
    empresa: empresa
      ? {
          ...editable(empresa),
          etiqueta: str(empresa.etiqueta),
          titulo: str(empresa.titulo),
          tituloDestacado: str(empresa.titulo_destacado),
          texto: str(empresa.texto),
          imagen: img(empresa.imagen, d.empresa.imagen),
        }
      : d.empresa,
    historia: historia
      ? {
          ...editable(historia),
          etiqueta: str(historia.etiqueta),
          titulo: str(historia.titulo),
          tituloDestacado: str(historia.titulo_destacado),
          texto: str(historia.texto),
          imagen: img(historia.imagen, d.historia.imagen),
          hitosTitulo: str(historia.hitos_titulo),
          hitos: bloks(historia.hitos).map((b) => ({
            ...editable(b),
            anio: str(b.anio),
            texto: str(b.texto),
          })),
        }
      : d.historia,
    productos: productos
      ? {
          ...editable(productos),
          etiqueta: str(productos.etiqueta),
          titulo: str(productos.titulo),
        }
      : d.productos,
    servicios: servicios
      ? {
          ...editable(servicios),
          etiqueta: str(servicios.etiqueta),
          titulo: str(servicios.titulo),
          tituloDestacado: str(servicios.titulo_destacado),
          texto: str(servicios.texto),
          imagen: img(servicios.imagen, d.servicios.imagen),
        }
      : d.servicios,
    calidad: calidad
      ? {
          ...editable(calidad),
          etiqueta: str(calidad.etiqueta),
          titulo: str(calidad.titulo),
          tituloDestacado: str(calidad.titulo_destacado),
          texto: str(calidad.texto),
          imagen: img(calidad.imagen, d.calidad.imagen),
          certificaciones: bloks(calidad.certificaciones).map((b) => ({
            ...editable(b),
            nombre: str(b.nombre),
            descripcion: str(b.descripcion),
          })),
        }
      : d.calidad,
    contacto: contacto
      ? {
          ...editable(contacto),
          titulo: str(contacto.titulo),
          texto: str(contacto.texto),
          whatsapp: bloks(contacto.whatsapp).map((b) => ({
            ...editable(b),
            nombre: str(b.nombre),
            telefono: str(b.telefono),
          })),
          email: str(contacto.email),
          ubicacion: str(contacto.ubicacion),
          mapaUrl: str(contacto.mapa_url) || d.contacto.mapaUrl,
        }
      : d.contacto,
  }
}

const IMAGEN_GENERICA: Imagen = { src: '/images/fardos.png', alt: '' }

export async function getProductos(): Promise<Producto[]> {
  const stories = await getStories('productos', 'producto')
  if (stories.length === 0) return D.PRODUCTOS

  return stories.map(({ slug, content: c }) => {
    const d = D.PRODUCTOS.find((p) => p.slug === slug)
    const titulo = str(c.titulo)
    const descripcion = str(c.descripcion)
    return {
      ...editable(c),
      slug,
      titulo,
      etiqueta: str(c.etiqueta),
      resumen: str(c.resumen) || descripcion,
      descripcion,
      caracteristicas: lines(c.caracteristicas),
      imagen: img(c.imagen, { ...(d?.imagen ?? IMAGEN_GENERICA), alt: titulo }),
      seoNombre: str(c.seo_nombre) || titulo,
      seoDescripcion: str(c.seo_descripcion) || descripcion,
    }
  })
}

const ICONOS: IconoServicio[] = ['siembra', 'cosecha', 'pulverizacion', 'logistica']

export async function getServicios(): Promise<Servicio[]> {
  const stories = await getStories('servicios', 'servicio')
  if (stories.length === 0) return D.SERVICIOS

  return stories.map(({ slug, content: c }) => {
    const d = D.SERVICIOS.find((s) => s.slug === slug)
    const titulo = str(c.titulo)
    const descripcion = str(c.descripcion)
    const icono = str(c.icono) as IconoServicio
    return {
      ...editable(c),
      slug,
      titulo,
      resumen: str(c.resumen) || descripcion,
      descripcion,
      icono: ICONOS.includes(icono) ? icono : 'siembra',
      imagen: img(c.imagen, { ...(d?.imagen ?? IMAGEN_GENERICA), alt: titulo }),
      mostrarEnHome: c.mostrar_en_home === true,
      seoDescripcion: str(c.seo_descripcion) || descripcion,
    }
  })
}

async function getPagina(slug: string, fallback: PaginaListado): Promise<PaginaListado> {
  const story = await getStory(slug)
  if (!story) return fallback
  const c = story.content
  return {
    ...editable(c),
    seoTitulo: str(c.seo_titulo) || fallback.seoTitulo,
    seoDescripcion: str(c.seo_descripcion) || fallback.seoDescripcion,
    heroEtiqueta: str(c.hero_etiqueta),
    heroTitulo: str(c.hero_titulo),
    heroDestacado: str(c.hero_destacado),
    heroMiga: str(c.hero_miga),
    heroTexto: str(c.hero_texto),
    heroImagen: img(c.hero_imagen, { src: fallback.heroImagen, alt: '' }).src,
    ctaTitulo: str(c.cta_titulo),
    ctaTexto: str(c.cta_texto),
  }
}

export const getPaginaProductos = () => getPagina('pagina-productos', D.PAGINA_PRODUCTOS)
export const getPaginaServicios = () => getPagina('pagina-servicios', D.PAGINA_SERVICIOS)
