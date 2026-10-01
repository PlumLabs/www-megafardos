import { NextResponse, type NextRequest } from 'next/server'
import { MAINTENANCE_MODE, MAINTENANCE_PATH } from '@/lib/maintenance'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (MAINTENANCE_MODE) {
    // Every page shows the "under construction" page without changing the URL.
    if (pathname === MAINTENANCE_PATH) return NextResponse.next()
    return NextResponse.rewrite(new URL(MAINTENANCE_PATH, request.url))
  }

  // While the site is live, the construction page must not be reachable.
  if (pathname === MAINTENANCE_PATH) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  // Skip Next assets, API routes (Storyblok preview and webhook) and static files
  // (images, robots.txt, sitemap.xml, llms.txt...).
  matcher: ['/((?!_next/|api/|.*\\..*).*)'],
}
