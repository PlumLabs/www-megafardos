import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

// Entrada del Visual Editor de Storyblok. En Storyblok → Settings → Visual Editor,
// la URL de preview es:
//   https://www.megafardosdelnorte.com.ar/api/draft?secret=<STORYBLOK_PREVIEW_SECRET>&slug=
// Storyblok le agrega el full_slug de la story y sus propios parámetros.
// Activa el draft mode de Next (contenido en borrador, sin caché) y redirige a
// la página que muestra esa story.

export const dynamic = 'force-dynamic'

function pathFor(slug: string) {
  const s = slug.replace(/^\/+|\/+$/g, '')
  if (!s || s === 'home') return '/'
  if (s === 'pagina-productos') return '/productos'
  if (s === 'pagina-servicios') return '/servicios'
  const [folder, item] = s.split('/')
  if ((folder === 'productos' || folder === 'servicios') && item) return `/${folder}#${item}`
  if (folder === 'productos' || folder === 'servicios') return `/${folder}`
  return '/'
}

export async function GET(request: Request) {
  const url = new URL(request.url)
  const secret = process.env.STORYBLOK_PREVIEW_SECRET

  if (!secret || url.searchParams.get('secret') !== secret) {
    return new Response('No autorizado', { status: 401 })
  }

  // Storyblok puede pegar sus parámetros con "?" en lugar de "&".
  const slug = (url.searchParams.get('slug') ?? '').split('?')[0]

  draftMode().enable()
  redirect(pathFor(slug))
}
