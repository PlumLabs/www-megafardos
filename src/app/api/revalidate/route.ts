import { createHmac, timingSafeEqual } from 'node:crypto'
import { revalidateTag } from 'next/cache'
import { STORYBLOK_TAG } from '@/lib/storyblok'

// Webhook de Storyblok (Settings → Webhooks, eventos "Story published",
// "unpublished", "deleted" y "moved"). Invalida la caché y el sitio muestra los
// cambios en segundos en lugar de esperar la revalidación de 1 hora.
//
// Se acepta si coincide cualquiera de las dos:
//  - el "Webhook secret" configurado en Storyblok (firma HMAC en el header webhook-signature)
//  - ?secret=<STORYBLOK_WEBHOOK_SECRET> en la URL

export const dynamic = 'force-dynamic'

function sameText(a: string, b: string) {
  const x = Buffer.from(a)
  const y = Buffer.from(b)
  return x.length === y.length && timingSafeEqual(x, y)
}

export async function POST(request: Request) {
  const secret = process.env.STORYBLOK_WEBHOOK_SECRET
  if (!secret) return Response.json({ ok: false, error: 'Webhook no configurado' }, { status: 500 })

  const body = await request.text()
  const signature = request.headers.get('webhook-signature')
  const querySecret = new URL(request.url).searchParams.get('secret')

  const signed =
    signature !== null && sameText(signature, createHmac('sha1', secret).update(body).digest('hex'))
  const byQuery = querySecret !== null && sameText(querySecret, secret)

  if (!signed && !byQuery) {
    return Response.json({ ok: false, error: 'No autorizado' }, { status: 401 })
  }

  revalidateTag(STORYBLOK_TAG)
  return Response.json({ ok: true, revalidated: true, now: Date.now() })
}
