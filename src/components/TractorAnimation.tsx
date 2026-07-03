'use client'

import { useEffect, useRef } from 'react'

export default function TractorAnimation() {
  const tractorRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tractor = tractorRef.current
    const container = containerRef.current
    if (!tractor || !container) return

    const tw = 160
    const th = 100
    const speed = 1.2

    let x = (container.clientWidth - tw) / 2
    let y = (container.clientHeight - th) / 2
    let dx = speed
    let dy = speed

    let animationId: number

    const animate = () => {
      const cw = container.clientWidth
      const ch = container.clientHeight

      x += dx
      y += dy

      if (x + tw > cw) {
        x = cw - tw
        dx = -speed
      }
      if (x < 0) {
        x = 0
        dx = speed
      }
      if (y + th > ch) {
        y = ch - th
        dy = -speed
      }
      if (y < 0) {
        y = 0
        dy = speed
      }

      tractor.style.transform = `translate(${x}px, ${y}px) scaleX(${dx > 0 ? 1 : -1})`

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full flex-1 overflow-hidden"
    >
      <div
        ref={tractorRef}
        className="absolute"
        style={{ willChange: 'transform' }}
      >
        <svg
          width="160"
          height="100"
          viewBox="0 0 220 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Sombra */}
          <ellipse cx="110" cy="122" rx="90" ry="6" fill="rgba(0,0,0,0.06)" />

          {/* Rueda trasera grande */}
          <circle cx="80" cy="100" r="28" fill="#2a2a2a" />
          <circle cx="80" cy="100" r="22" stroke="#3a3a3a" strokeWidth="3" fill="none" />
          <circle cx="80" cy="100" r="16" fill="#555" />
          <circle cx="80" cy="100" r="6" fill="#888" />
          {/* Rieles de la cubierta */}
          <line x1="80" y1="72" x2="80" y2="78" stroke="#3a3a3a" strokeWidth="2.5" />
          <line x1="80" y1="122" x2="80" y2="128" stroke="#3a3a3a" strokeWidth="2.5" />
          <line x1="52" y1="100" x2="58" y2="100" stroke="#3a3a3a" strokeWidth="2.5" />
          <line x1="102" y1="100" x2="108" y2="100" stroke="#3a3a3a" strokeWidth="2.5" />

          {/* Rueda delantera chica */}
          <circle cx="175" cy="94" r="18" fill="#2a2a2a" />
          <circle cx="175" cy="94" r="13" fill="#555" />
          <circle cx="175" cy="94" r="5" fill="#888" />

          {/* Chasis principal */}
          <rect x="60" y="78" width="120" height="8" rx="3" fill="#3a5a30" />

          {/* Capó / motor (adelante) */}
          <rect x="150" y="52" width="48" height="28" rx="5" fill="#4a7c3f" />
          <rect x="153" y="55" width="42" height="6" rx="2" fill="#5a8c4f" />
          {/* Parilla */}
          <rect x="188" y="55" width="8" height="22" rx="2" fill="#2d5a25" />
          <line x1="190" y1="58" x2="190" y2="75" stroke="#4a7c3f" strokeWidth="1.5" />
          <line x1="194" y1="58" x2="194" y2="75" stroke="#4a7c3f" strokeWidth="1.5" />

          {/* Cabina */}
          <rect x="55" y="35" width="65" height="45" rx="4" fill="#3d6b33" />
          {/* Techo */}
          <rect x="52" y="30" width="71" height="8" rx="3" fill="#2d5a25" />
          {/* Vidrio frontal */}
          <rect x="60" y="40" width="26" height="22" rx="3" fill="#b8d8b0" opacity="0.5" />
          {/* Vidrio trasero */}
          <rect x="90" y="40" width="26" height="22" rx="3" fill="#b8d8b0" opacity="0.35" />
          {/* Volante */}
          <circle cx="68" cy="53" r="4" stroke="#222" strokeWidth="1.5" fill="none" />

          {/* Escape */}
          <rect x="155" y="25" width="5" height="28" rx="2" fill="#555" />
          <rect x="153" y="23" width="9" height="4" rx="2" fill="#555" />

          {/* Faro */}
          <circle cx="196" cy="62" r="4" fill="#e8b830" />
          <circle cx="196" cy="62" r="2" fill="#fff" />

          {/* Guardabarros trasero */}
          <path d="M45 80 Q45 65 80 65 Q115 65 115 80" fill="#4a7c3f" stroke="#3d6b33" strokeWidth="1" />
        </svg>
      </div>
    </div>
  )
}
