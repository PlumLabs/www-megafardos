// Configura el espacio de Storyblok para el sitio:
//   1. crea o actualiza los componentes (schema.ts)
//   2. crea las carpetas Productos y Servicios
//   3. carga el contenido actual del sitio (defaults.ts) con sus imágenes, y lo publica
//   4. opcional: configura la URL del Visual Editor
//
// Uso:
//   STORYBLOK_OAUTH_TOKEN=... STORYBLOK_SPACE_ID=... npm run storyblok:setup
//
// Variables:
//   STORYBLOK_OAUTH_TOKEN      Personal access token (Storyblok → My account → Account settings → Personal access token)
//   STORYBLOK_SPACE_ID         ID numérico del espacio (Settings → Space)
//   STORYBLOK_REGION           eu (default) | us | ca | ap
//   STORYBLOK_PREVIEW_SECRET   si está, configura la URL del Visual Editor apuntando al sitio
//   NEXT_PUBLIC_SITE_URL       dominio del sitio para esa URL (default: producción)
//
// Opciones:
//   --solo-esquema    solo componentes, no toca contenido
//   --sobrescribir    reemplaza el contenido de stories que ya existen (por defecto no se tocan)
//
// Se puede correr varias veces: los componentes se actualizan y las stories que
// ya existen se dejan como están (salvo --sobrescribir).

import { readFileSync, statSync } from 'node:fs'
import { basename, join } from 'node:path'
import type { Imagen } from '../../src/content/types'
import { COMPONENTS } from './schema'
import { FOLDERS, buildStories, type StorySpec } from './stories'

const HOSTS: Record<string, string> = {
  eu: 'https://mapi.storyblok.com/v1',
  us: 'https://api-us.storyblok.com/v1',
  ca: 'https://api-ca.storyblok.com/v1',
  ap: 'https://api-ap.storyblok.com/v1',
}

const TOKEN = process.env.STORYBLOK_OAUTH_TOKEN
const SPACE = process.env.STORYBLOK_SPACE_ID
const REGION = (process.env.STORYBLOK_REGION || 'eu').toLowerCase()
const ONLY_SCHEMA = process.argv.includes('--solo-esquema')
const OVERWRITE = process.argv.includes('--sobrescribir')

if (!TOKEN || !SPACE) {
  console.error('Faltan STORYBLOK_OAUTH_TOKEN y/o STORYBLOK_SPACE_ID. Ver docs/storyblok.md.')
  process.exit(1)
}
if (!HOSTS[REGION]) {
  console.error(`STORYBLOK_REGION inválida: ${REGION} (eu, us, ca o ap)`)
  process.exit(1)
}

// STORYBLOK_MAPI_URL solo para pruebas contra un servidor local.
const API = `${process.env.STORYBLOK_MAPI_URL || HOSTS[REGION]}/spaces/${SPACE}`
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

// Límite de la Management API: 3 pedidos por segundo en el plan gratuito.
async function api<T = any>(method: string, path: string, body?: unknown, attempt = 1): Promise<T> {
  await sleep(350)
  const res = await fetch(`${API}${path}`, {
    method,
    headers: { Authorization: TOKEN as string, 'Content-Type': 'application/json' },
    body: body === undefined ? undefined : JSON.stringify(body),
  })
  if (res.status === 429 && attempt < 5) {
    await sleep(1000 * attempt)
    return api<T>(method, path, body, attempt + 1)
  }
  const text = await res.text()
  if (!res.ok) throw new Error(`${method} ${path} → ${res.status}: ${text.slice(0, 500)}`)
  return (text ? JSON.parse(text) : {}) as T
}

async function syncComponents() {
  const { components } = await api<{ components: { id: number; name: string }[] }>('GET', '/components/')
  const existing: Record<string, number> = {}
  components.forEach((c) => (existing[c.name] = c.id))

  for (const def of COMPONENTS) {
    const id = existing[def.name]
    if (id) {
      await api('PUT', `/components/${id}`, { component: def })
      console.log(`  componente actualizado: ${def.name}`)
    } else {
      await api('POST', '/components/', { component: def })
      console.log(`  componente creado: ${def.name}`)
    }
  }
}

type SbStory = { id: number; full_slug: string; is_folder: boolean }

async function findStory(fullSlug: string): Promise<SbStory | null> {
  const { stories } = await api<{ stories: SbStory[] }>(
    'GET',
    `/stories/?with_slug=${encodeURIComponent(fullSlug)}`,
  )
  return stories.find((s) => s.full_slug.replace(/\/$/, '') === fullSlug) ?? null
}

// Sube cada imagen local una sola vez por ejecución.
const uploaded: Record<string, { id: number; filename: string }> = {}

async function uploadAsset(img: Imagen) {
  const src = img.src
  if (!src.startsWith('/')) throw new Error(`Imagen no local: ${src}`)
  if (!uploaded[src]) {
    const file = join(process.cwd(), 'public', src)
    const name = basename(file)
    const signed = await api<{
      id: number
      pretty_url: string
      post_url: string
      fields: Record<string, string>
    }>('POST', '/assets/', { filename: name })

    const form = new FormData()
    Object.keys(signed.fields).forEach((k) => form.append(k, signed.fields[k]))
    form.append('file', new Blob([readFileSync(file)]), name)
    const res = await fetch(signed.post_url, { method: 'POST', body: form })
    if (!res.ok) throw new Error(`Subida de ${name} → ${res.status}: ${(await res.text()).slice(0, 300)}`)

    const url = signed.pretty_url.startsWith('//') ? `https:${signed.pretty_url}` : signed.pretty_url
    uploaded[src] = { id: signed.id, filename: url }
    console.log(`  imagen subida: ${name} (${Math.round(statSync(file).size / 1024)} KB)`)
  }
  const { id, filename } = uploaded[src]
  return {
    fieldtype: 'asset',
    id,
    filename,
    alt: img.alt,
    name: '',
    title: '',
    focus: '',
    copyright: '',
    is_external_url: false,
  }
}

async function ensureFolders() {
  const ids: Record<string, number> = {}
  for (const f of FOLDERS) {
    const found = await findStory(f.slug)
    if (found) {
      ids[f.slug] = found.id
      continue
    }
    const { story } = await api<{ story: SbStory }>('POST', '/stories/', {
      story: { name: f.name, slug: f.slug, is_folder: true, default_root: f.default_root },
    })
    ids[f.slug] = story.id
    console.log(`  carpeta creada: ${f.slug}/`)
  }
  return ids
}

async function syncStories() {
  const folders = await ensureFolders()

  // Las imágenes se suben solo si hace falta crear o sobrescribir alguna story.
  const pending: StorySpec[] = []
  const existing: Record<string, SbStory | null> = {}
  const specs = await buildStories(async (img) => img) // primera pasada: solo slugs
  for (const s of specs) {
    const fullSlug = s.folder ? `${s.folder}/${s.slug}` : s.slug
    const found = await findStory(fullSlug)
    existing[fullSlug] = found
    if (!found || OVERWRITE) {
      pending.push(s)
      continue
    }
    // Los espacios nuevos traen una story "home" de ejemplo (tipo "page"):
    // si el tipo no es el nuestro, se reemplaza.
    const { story } = await api<{ story: { content?: { component?: string } } }>('GET', `/stories/${found.id}`)
    if (story.content?.component !== s.content.component) {
      console.log(`  ${fullSlug} es de tipo "${story.content?.component}", se reemplaza`)
      pending.push(s)
    } else {
      console.log(`  ya existe, no se toca: ${fullSlug}`)
    }
  }
  if (pending.length === 0) return

  const withAssets = await buildStories(uploadAsset)
  for (const spec of withAssets) {
    const fullSlug = spec.folder ? `${spec.folder}/${spec.slug}` : spec.slug
    if (!pending.some((p) => p.slug === spec.slug && p.folder === spec.folder)) continue

    const story = {
      name: spec.name,
      slug: spec.slug,
      parent_id: spec.folder ? folders[spec.folder] : 0,
      position: spec.position,
      content: spec.content,
    }
    const found = existing[fullSlug]
    if (found) {
      await api('PUT', `/stories/${found.id}`, { story, publish: 1, force_update: 1 })
      console.log(`  story sobrescrita y publicada: ${fullSlug}`)
    } else {
      await api('POST', '/stories/', { story, publish: 1 })
      console.log(`  story creada y publicada: ${fullSlug}`)
    }
  }
}

async function configurePreview() {
  const secret = process.env.STORYBLOK_PREVIEW_SECRET
  if (!secret) {
    console.log('  (sin STORYBLOK_PREVIEW_SECRET: la URL del Visual Editor se configura a mano)')
    return
  }
  const site = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.megafardosdelnorte.com.ar').replace(/\/$/, '')
  const domain = `${site}/api/draft?secret=${encodeURIComponent(secret)}&slug=`
  await api('PUT', '', { space: { domain } })
  console.log(`  URL del Visual Editor: ${site}/api/draft?secret=***&slug=`)
}

async function main() {
  console.log(`Storyblok espacio ${SPACE} (${REGION})`)
  console.log('1. Componentes')
  await syncComponents()
  if (ONLY_SCHEMA) return
  console.log('2. Contenido')
  await syncStories()
  console.log('3. Visual Editor')
  await configurePreview()
  console.log('Listo.')
}

main().catch((e) => {
  console.error(e instanceof Error ? e.message : e)
  process.exit(1)
})
