export default function TractorAnimation() {
  return (
    <div className="relative w-full h-48 overflow-hidden mt-8 mb-4">
      <div className="animate-tractor-drive absolute" style={{ bottom: '20px' }}>
        <div className="animate-tractor-bounce">
          <svg
            width="180"
            height="100"
            viewBox="0 0 180 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-lg"
          >
            {/* Cuerpo del tractor */}
            <rect x="50" y="25" width="80" height="35" rx="4" fill="#2d5a25" />
            <rect x="60" y="15" width="60" height="15" rx="3" fill="#4a7c3f" />
            {/* Cabina */}
            <rect x="65" y="5" width="40" height="15" rx="3" fill="#6ba85e" />
            <rect x="70" y="8" width="12" height="9" rx="1" fill="#d4e8c2" opacity="0.6" />
            {/* Escape */}
            <rect x="110" y="8" width="6" height="20" rx="2" fill="#555" />
            {/* Faro */}
            <circle cx="130" cy="40" r="5" fill="#e8b830" />
            <circle cx="130" cy="40" r="3" fill="#fff" />
            {/* Rueda grande */}
            <circle cx="80" cy="68" r="22" fill="#3a3a3a" />
            <circle cx="80" cy="68" r="17" stroke="#555" strokeWidth="2" fill="#4a4a4a" />
            <circle cx="80" cy="68" r="5" fill="#888" />
            {/* Rueda chica */}
            <circle cx="125" cy="63" r="14" fill="#3a3a3a" />
            <circle cx="125" cy="63" r="10" stroke="#555" strokeWidth="2" fill="#4a4a4a" />
            <circle cx="125" cy="63" r="3" fill="#888" />
            {/* Parabrisas */}
            <rect x="105" y="28" width="22" height="28" rx="2" fill="#a8c8a0" opacity="0.5" />
          </svg>
        </div>
      </div>
      {/* Sombra del tractor en el suelo */}
      <div
        className="animate-tractor-drive absolute"
        style={{ bottom: '10px' }}
      >
        <div
          className="w-24 h-3 bg-black/10 rounded-full mx-auto"
          style={{ marginLeft: '28px' }}
        />
      </div>
    </div>
  )
}
