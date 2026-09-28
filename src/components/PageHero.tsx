import Image from 'next/image'
import Link from 'next/link'

export default function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  breadcrumb,
  image = '/images/hero.png',
}: {
  eyebrow: string
  title: string
  highlight?: string
  description?: string
  image?: string
  breadcrumb?: string
}) {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <Image src={image} alt="" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-green/95 via-brand-green/80 to-brand-green/50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <nav className="flex items-center gap-2 text-xs text-white/60 mb-5">
          <Link href="/" className="hover:text-white transition-colors">
            Inicio
          </Link>
          <span>/</span>
          <span className="text-white/90">{breadcrumb}</span>
        </nav>

        <span className="text-xs font-semibold text-brand-gold-light uppercase tracking-widest">
          {eyebrow}
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-4 leading-[1.1]">
          {title}
          {highlight && (
            <>
              {' '}
              <span className="text-brand-gold-light">{highlight}</span>
            </>
          )}
        </h1>
        <div className="w-16 h-0.5 bg-brand-gold mt-6" />
        {description && (
          <p className="text-white/80 leading-relaxed mt-6 max-w-xl">{description}</p>
        )}
      </div>
    </section>
  )
}
