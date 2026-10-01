# Storyblok: edición de contenido

El cliente edita desde [Storyblok](https://app.storyblok.com) los textos e imágenes de la home, los productos, los servicios y los encabezados de /productos y /servicios. El diseño, la navegación, el mapa de exportación y los botones de WhatsApp siguen en el código.

Si Storyblok no está configurado (sin `STORYBLOK_TOKEN`), el sitio muestra el contenido de `src/content/defaults.ts`, que es el contenido original. Así funciona igual en local y en previews.

## Qué se edita y dónde

| En Storyblok | En el sitio |
|---|---|
| **Inicio** (`home`) | Home: portada y datos, Sobre nosotros, Nuestra historia e hitos, títulos de Productos y Servicios, Calidad y certificaciones, Contacto |
| **Página Productos** (`pagina-productos`) | Encabezado, título/descripción para Google y llamado final de /productos |
| **Página Servicios** (`pagina-servicios`) | Idem para /servicios |
| Carpeta **Productos** | Un producto por story. El orden de la carpeta es el orden en el sitio. |
| Carpeta **Servicios** | Un servicio por story. "Mostrar en la home" decide si aparece en la home. |

Detalles para quien edita:

- En los textos largos, los párrafos se separan con una línea en blanco y `**así**` se pone en negrita.
- Las características de un producto van una por línea.
- "Nombre / Descripción para Google e IA" alimentan los datos estructurados y `/llms.txt`, que leen Google, ChatGPT, Perplexity, etc. Conviene que tengan medidas, pesos y usos.
- El slug de cada producto o servicio es su ancla (`/productos#pellets-de-alfalfa`). Cambiarlo rompe links ya compartidos.
- Los cambios se ven en el sitio al **publicar**; guardar solo actualiza la vista previa.

## Puesta en marcha (una sola vez)

1. **Crear el espacio** en Storyblok (plan gratuito alcanza). Anotar la región elegida y el *Space ID* (Settings → Space).
2. **Personal access token**: My account → Account settings → Personal access token → Generate. Es para el script, no va a Vercel.
3. **Preview token del espacio**: Settings → Access Tokens → el de tipo *Preview*.
4. **Inventar dos claves** largas al azar para `STORYBLOK_PREVIEW_SECRET` y `STORYBLOK_WEBHOOK_SECRET` (por ejemplo `openssl rand -hex 24`).
5. **Cargar esquema y contenido** desde la carpeta del proyecto:

   ```bash
   STORYBLOK_OAUTH_TOKEN=... \
   STORYBLOK_SPACE_ID=... \
   STORYBLOK_REGION=eu \
   STORYBLOK_PREVIEW_SECRET=... \
   npm run storyblok:setup
   ```

   Crea los componentes, las carpetas y todas las stories con el contenido actual del sitio (sube las imágenes y publica). También configura la URL del Visual Editor. Se puede volver a correr: actualiza los componentes y no toca stories existentes (salvo con `--sobrescribir`). Con `--solo-esquema` solo actualiza los componentes.

6. **Variables en Vercel** (Settings → Environment Variables, Production y Preview): `STORYBLOK_TOKEN`, `STORYBLOK_REGION`, `STORYBLOK_PREVIEW_SECRET`, `STORYBLOK_WEBHOOK_SECRET`. Redeploy.
7. **Webhook** en Storyblok (Settings → Webhooks → New):
   - URL: `https://www.megafardosdelnorte.com.ar/api/revalidate`
   - Secret: el valor de `STORYBLOK_WEBHOOK_SECRET`
   - Eventos: Story → published, unpublished, deleted, moved
8. **Probar**: abrir la story Inicio en Storyblok. El sitio aparece a la derecha; al pasar el mouse se resaltan las secciones y al hacer clic se abre el formulario de esa sección. Cambiar un texto, guardar (se ve en la vista previa), publicar (se ve en el sitio público en unos segundos).
9. **Invitar al cliente**: Settings → Collaborators. Rol *Editor* alcanza.
10. Opcional: borrar los componentes de ejemplo que trae el espacio (`page`, `teaser`, `grid`, `feature`).

## Cómo funciona

- `src/lib/storyblok.ts`: cliente de la Content Delivery API. En producción cachea con el tag `storyblok` y revalida cada hora como respaldo. Si Storyblok falla, el error se propaga: en una revalidación Next conserva la última versión buena, y en un build el deploy falla en lugar de publicar contenido viejo.
- `src/lib/content.ts`: traduce las stories al modelo del sitio (`src/content/types.ts`) y completa con `defaults.ts` lo que falte (secciones borradas, imágenes vacías, stories inexistentes).
- `/api/draft`: entrada del Visual Editor. Valida `STORYBLOK_PREVIEW_SECRET`, activa el draft mode de Next (lee borradores, sin caché) y redirige a la página de la story. `/api/draft/salir` lo desactiva.
- `src/components/StoryblokBridge.tsx`: solo en draft mode y dentro del iframe de Storyblok. Carga el bridge oficial y recarga la vista previa al guardar.
- `/api/revalidate`: webhook. Acepta la firma HMAC de Storyblok (`webhook-signature`) o `?secret=`. Invalida el tag `storyblok`.
- `/llms.txt` ahora es una ruta (`src/app/llms.txt/route.ts`) que arma el texto con los productos, servicios, hitos y contactos de Storyblok. La introducción y las preguntas frecuentes se editan ahí.
- `scripts/storyblok/`: `schema.ts` (componentes), `stories.ts` (contenido inicial desde `defaults.ts`) y `setup.ts` (Management API).

Si se agrega o renombra un campo: actualizar `schema.ts`, `content.ts` y `types.ts`, y correr `npm run storyblok:setup -- --solo-esquema`.
