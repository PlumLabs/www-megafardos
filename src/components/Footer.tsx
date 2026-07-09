export default function Footer() {
  return (
    <footer className="bg-brand-green text-white/60 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs">
          © {new Date().getFullYear()} Megafardos del Norte. Todos los derechos reservados.
        </p>
        <p className="text-xs">
          Desarrollado por{' '}
          <a
            href="https://plum.com.ar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-brand-gold-light transition-colors underline underline-offset-2"
          >
            Plum
          </a>
        </p>
      </div>
    </footer>
  )
}
