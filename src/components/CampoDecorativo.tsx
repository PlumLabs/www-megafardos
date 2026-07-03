export default function CampoDecorativo() {
  return (
    <>
      {/* Líneas de campo simétricas */}
      <div className="absolute bottom-0 left-0 right-0 h-32">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent 30px,
              #2d5a25 30px,
              #2d5a25 32px
            )`,
          }}
        />
      </div>

      {/* Hojas decorativas flotando - izquierda */}
      <div className="absolute top-1/4 left-4 md:left-12 text-4xl animate-float opacity-20 select-none pointer-events-none">
        🌿
      </div>
      <div
        className="absolute top-2/3 left-8 md:left-20 text-3xl opacity-15 select-none pointer-events-none"
        style={{ animation: 'float 4s ease-in-out infinite', animationDelay: '1s' }}
      >
        🌾
      </div>

      {/* Hojas decorativas flotando - derecha */}
      <div
        className="absolute top-1/3 right-4 md:right-12 text-4xl opacity-20 select-none pointer-events-none"
        style={{ animation: 'float 3.5s ease-in-out infinite', animationDelay: '0.5s' }}
      >
        🌿
      </div>
      <div
        className="absolute top-3/4 right-8 md:right-20 text-3xl opacity-15 select-none pointer-events-none"
        style={{ animation: 'float 4.5s ease-in-out infinite', animationDelay: '2s' }}
      >
        🌾
      </div>

      {/* Sol decorativo */}
      <div className="absolute top-8 right-8 md:right-16 w-20 h-20 md:w-28 md:h-28 rounded-full bg-[var(--gold-light)]/20 blur-xl select-none pointer-events-none" />
      <div className="absolute top-10 right-10 md:right-20 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[var(--gold-light)]/30 blur-lg select-none pointer-events-none" />
    </>
  )
}
