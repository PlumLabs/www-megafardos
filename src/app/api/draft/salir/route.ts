import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

// Sale del modo borrador (por si alguien abrió el preview fuera de Storyblok).
export const dynamic = 'force-dynamic'

export async function GET() {
  draftMode().disable()
  redirect('/')
}
