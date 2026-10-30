import { draftMode } from 'next/headers'

// Cliente mínimo de la Content Delivery API de Storyblok (v2).
//
// Variables de entorno (solo servidor, nunca NEXT_PUBLIC_):
//   STORYBLOK_TOKEN   Access token "Preview" del espacio (lee publicado y borradores).
//   STORYBLOK_REGION  eu (default) | us | ca | ap, según dónde se creó el espacio.
//
// Sin STORYBLOK_TOKEN el sitio usa el contenido de src/content/defaults.ts.

/** Tag de caché de todo lo que viene de Storyblok. El webhook lo invalida. */
export const STORYBLOK_TAG = 'storyblok'

/** Revalidación de respaldo por si el webhook no llega (segundos). */
const REVALIDATE_SECONDS = 3600

const HOSTS: Record<string, string> = {
  eu: 'https://api.storyblok.com',
  us: 'https://api-us.storyblok.com',
  ca: 'https://api-ca.storyblok.com',
  ap: 'https://api-ap.storyblok.com',
}

export type SbStory<C = SbBlok> = {
  id: number
  uuid: string
  name: string
  slug: string
  full_slug: string
  position: number
  content: C
}

export type SbBlok = {
  _uid: string
  component: string
  _editable?: string
  [field: string]: unknown
}

export type SbAsset = { filename?: string | null; alt?: string | null } | null | undefined

export function storyblokEnabled() {
  return Boolean(process.env.STORYBLOK_TOKEN)
}

/** true cuando la página se está viendo desde el Visual Editor (Next draft mode). */
export function isDraft() {
  try {
    return draftMode().isEnabled
  } catch {
    // Fuera de un request (build de rutas estáticas) no hay draft mode.
    return false
  }
}

function baseUrl() {
  // STORYBLOK_API_URL solo para pruebas contra un servidor local.
  if (process.env.STORYBLOK_API_URL) return process.env.STORYBLOK_API_URL.replace(/\/$/, '')
  const region = (process.env.STORYBLOK_REGION || 'eu').toLowerCase()
  return `${HOSTS[region] ?? HOSTS.eu}/v2/cdn`
}

class NotFound extends Error {}

async function request<T>(path: string, params: Record<string, string>, draft: boolean): Promise<T> {
  const url = new URL(`${baseUrl()}/${path}`)
  url.searchParams.set('token', process.env.STORYBLOK_TOKEN as string)
  for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v)

  const res = await fetch(
    url,
    draft ? { cache: 'no-store' } : { next: { tags: [STORYBLOK_TAG], revalidate: REVALIDATE_SECONDS } },
  )
  if (res.status === 404) throw new NotFound(path)
  if (!res.ok) {
    throw new Error(`Storyblok ${res.status} en ${path}: ${(await res.text()).slice(0, 200)}`)
  }
  return res.json() as Promise<T>
}

// La CDN de Storyblok cachea por "cv" (versión de caché del espacio). Pedimos la
// versión actual primero para que, al invalidar el tag, se lea contenido nuevo.
async function cacheVersion(draft: boolean) {
  if (draft) return String(Date.now())
  const { space } = await request<{ space: { version: number } }>('spaces/me', {}, false)
  return String(space.version)
}

/**
 * Trae una story por slug. Devuelve null si no existe (contenido todavía no
 * cargado). Cualquier otro error se propaga: así, si Storyblok falla durante una
 * revalidación, Next conserva la última versión buena de la página en lugar de
 * mostrar contenido viejo.
 */
export async function getStory<C = SbBlok>(slug: string): Promise<SbStory<C> | null> {
  if (!storyblokEnabled()) return null
  const draft = isDraft()
  try {
    const cv = await cacheVersion(draft)
    const { story } = await request<{ story: SbStory<C> }>(
      `stories/${slug}`,
      { version: draft ? 'draft' : 'published', cv },
      draft,
    )
    return story
  } catch (e) {
    if (e instanceof NotFound) return null
    throw e
  }
}

/** Trae todas las stories de una carpeta, en el orden en que están en Storyblok. */
export async function getStories<C = SbBlok>(folder: string, contentType: string): Promise<SbStory<C>[]> {
  if (!storyblokEnabled()) return []
  const draft = isDraft()
  const cv = await cacheVersion(draft)
  const { stories } = await request<{ stories: SbStory<C>[] }>(
    'stories',
    {
      version: draft ? 'draft' : 'published',
      cv,
      starts_with: `${folder}/`,
      content_type: contentType,
      sort_by: 'position:asc',
      per_page: '100',
    },
    draft,
  )
  return stories
}
