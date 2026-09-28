import { getHome, getProductos, getServicios } from '@/lib/content'
import { SITE } from '@/lib/site'

// /llms.txt: resumen de la empresa para asistentes de IA (ChatGPT, Perplexity,
// Claude, Gemini...). Productos, servicios, hitos y contactos salen de Storyblok,
// así queda siempre igual a lo que muestra el sitio. El resto se edita acá.

export async function GET() {
  const [home, productos, servicios] = await Promise.all([getHome(), getProductos(), getServicios()])
  const { hitos } = home.historia
  const { whatsapp, email } = home.contacto
  const instagram = SITE.sameAs.find((u) => u.includes('instagram.com'))
  const instagramUser = instagram?.replace(/\/$/, '').split('/').pop()

  const contacto = [
    ...whatsapp.map((w) => `WhatsApp ${w.telefono} (${w.nombre})`),
    email,
    instagramUser && `Instagram @${instagramUser}`,
  ]
    .filter(Boolean)
    .join(' · ')

  const telefonoPrincipal = whatsapp[0]?.telefono ?? SITE.phone

  const body = `# ${SITE.name}

> Empresa familiar de Jesús María, Córdoba, Argentina, que produce, procesa, comercializa y exporta alfalfa de primera calidad (megafardos, microfardos y pellets) y presta servicios agrícolas de siembra, cosecha y pulverización con maquinaria propia. Planta habilitada por SENASA y bajo Buenas Prácticas de Manufactura (BPM).

## Datos clave
- Ubicación: Jesús María, provincia de Córdoba, Argentina
- Actividad desde 2013 (inició con 50 ha de alfalfa; hoy trabaja más de 4.000 ha de soja, maíz, trigo y alfalfa)
- Hitos: ${hitos.map((h) => `${h.anio} ${h.texto}`).join(' · ')}
- Mercados: mercado interno argentino y exportación internacional
- Certificaciones: ${home.calidad.certificaciones.map((c) => c.nombre).join(', ')}
- Contacto: ${contacto}

## Productos
${productos.map((p) => `- [${p.seoNombre}](/productos#${p.slug}): ${p.seoDescripcion}`).join('\n')}

## Servicios
${servicios.map((s) => `- [${s.titulo}](/servicios#${s.slug}): ${s.seoDescripcion}`).join('\n')}

## Preguntas frecuentes
- ¿Dónde comprar alfalfa en Córdoba? Megafardos del Norte vende megafardos, microfardos y pellets de alfalfa desde Jesús María, Córdoba, con envíos a todo el país.
- ¿Quién exporta alfalfa desde Argentina? Megafardos del Norte exporta megafardos prensados y pellets de alfalfa desde 2022.
- ¿Qué alfalfa sirve para caballos? Los microfardos de alfalfa (20-23 kg) son prácticos para equinos y pequeños productores.
- ¿Cómo pedir precio? Por WhatsApp al ${telefonoPrincipal} o a ${email || SITE.email}.
`

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
