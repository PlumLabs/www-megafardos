import Image from 'next/image'
import TractorAnimation from '@/components/TractorAnimation'
import CampoDecorativo from '@/components/CampoDecorativo'

export default function Home() {
  return (
    <main className="alfalfa-bg min-h-screen flex flex-col items-center justify-center px-4 relative">
      <CampoDecorativo />

      <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto text-center">
        <div className="relative mb-8">
          <Image
            src="/logo.png"
            alt="Megafardos del Norte"
            width={200}
            height={200}
            className="object-contain drop-shadow-lg"
            priority
            style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.15))' }}
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--green-dark)] mb-4 tracking-tight">
          Megafardos del Norte
        </h1>

        <p className="text-lg md:text-xl text-[var(--green)] font-medium mb-2">
          Alfalfa de primera calidad
        </p>

        <div className="w-24 h-1 bg-[var(--gold)] rounded-full my-6" />

        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-white/50">
          <p className="text-xl md:text-2xl text-[var(--earth)] font-semibold mb-4">
            🚜 Estamos en plena cosecha...
          </p>
          <p className="text-base md:text-lg text-[var(--earth-light)] leading-relaxed mb-3">
            La alfalfa no se cosecha sola (ojalá), y esta página web tampoco.
          </p>
          <p className="text-base md:text-lg text-[var(--earth-light)] leading-relaxed mb-3">
            Estamos poniendo todo a punto —enfardando cada detalle— para recibirte
            como te merecés.
          </p>
          <p className="text-lg md:text-xl text-[var(--green)] font-semibold mt-4">
            Volvé pronto, que ya casi terminamos de enfardar todo 🌿
          </p>
        </div>

        <TractorAnimation />

        <div className="bg-[var(--green-dark)]/10 rounded-xl px-6 py-4 mt-4 backdrop-blur-sm">
          <p className="text-sm text-[var(--green-dark)]">
            Mientras tanto, escribinos a{' '}
            <a
              href="mailto:info@megafardos.com"
              className="font-semibold underline underline-offset-2 hover:text-[var(--gold)] transition-colors"
            >
              info@megafardos.com
            </a>
          </p>
        </div>
      </div>

      <footer className="relative z-10 mt-auto pt-12 pb-6 text-center">
        <p className="text-xs text-[var(--green-dark)]/50">
          Desarrollado por{' '}
          <a
            href="https://plum.com.ar"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[var(--green-dark)]/60 hover:text-[var(--gold)] transition-colors underline underline-offset-2"
          >
            Plum
          </a>
        </p>
      </footer>
    </main>
  )
}
