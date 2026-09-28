import Script from 'next/script'

// Google Analytics 4 — propiedad "Megafardos del Norte" (flujo web www.megafardosdelnorte.com.ar).
// Solo se carga en el deploy de producción (no en local ni en los previews de Vercel),
// así no se mezclan visitas de prueba. Se puede sobreescribir con NEXT_PUBLIC_GA_ID.
const DEFAULT_GA_ID = 'G-YC9PF5HL3V'

export default function GoogleAnalytics() {
  const gaId =
    process.env.NEXT_PUBLIC_GA_ID ||
    (process.env.NODE_ENV === 'production' &&
    (process.env.NEXT_PUBLIC_VERCEL_ENV ?? 'production') === 'production'
      ? DEFAULT_GA_ID
      : '')
  if (!gaId) return null

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${gaId}');

          // Conversiones: clics a WhatsApp, email, teléfono e Instagram
          document.addEventListener('click', function (e) {
            var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
            if (!a) return;
            var href = a.getAttribute('href') || '';
            var type = null;
            if (href.indexOf('wa.me') !== -1 || href.indexOf('whatsapp') !== -1) type = 'whatsapp';
            else if (href.indexOf('mailto:') === 0) type = 'email';
            else if (href.indexOf('tel:') === 0) type = 'phone';
            else if (href.indexOf('instagram.com') !== -1) type = 'instagram';
            if (type) gtag('event', 'contact_click', { contact_method: type, link_url: href, page_path: location.pathname });
          }, true);
        `}
      </Script>
    </>
  )
}
