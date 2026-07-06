import Image from 'next/image'
import TractorAnimation from '@/components/TractorAnimation'
import CampoDecorativo from '@/components/CampoDecorativo'

export default function Home() {
  return (
    <main className="alfalfa-bg h-screen flex flex-col relative overflow-hidden">
      <CampoDecorativo />

      <div className="relative z-10 flex flex-col items-center text-center pt-12 md:pt-12 px-4 shrink-0">
        <Image
          src="/logo.png"
          alt="Megafardos del Norte"
          width={200}
          height={200}
          className="object-contain"
          priority
        />

        <h1 className="text-2xl md:text-3xl font-extrabold text-[var(--green-dark)] leading-tight mt-12">
          Megafardos del Norte
        </h1>
      </div>

      <TractorAnimation />

      <div className="relative z-10 shrink-0 px-4 pb-3 text-center space-y-1">
        <div className="bg-white/70 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg border border-white/50 inline-block mx-auto max-w-md w-full">
          <p className="text-sm md:text-base text-[var(--earth)] font-semibold">
            🚜 Sitio en construcción
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 text-xs text-[var(--green-dark)]/60">
          <a
            href="https://plum.com.ar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--gold)] transition-colors"
          >
            Desarrollado por <span className="underline underline-offset-2">Plum</span>
          </a>
        </div>
      </div>
    </main>
  )
}
