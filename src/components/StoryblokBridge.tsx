'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

// Solo se monta en draft mode (dentro del Visual Editor de Storyblok).
// Carga el bridge oficial, que resalta los bloques editables y abre cada uno al
// hacer clic, y vuelve a renderizar la página cuando el editor guarda o publica.

type Bridge = { on: (events: string[], cb: () => void) => void }
declare global {
  interface Window {
    StoryblokBridge?: new () => Bridge
  }
}

const SRC = 'https://app.storyblok.com/f/storyblok-v2-latest.js'

export default function StoryblokBridge() {
  const router = useRouter()

  useEffect(() => {
    // Fuera del iframe de Storyblok no hay nada que hacer.
    if (window.self === window.top) return

    const start = () => {
      if (!window.StoryblokBridge) return
      const bridge = new window.StoryblokBridge()
      bridge.on(['change', 'published'], () => router.refresh())
    }

    if (window.StoryblokBridge) return start()
    const script = document.createElement('script')
    script.src = SRC
    script.async = true
    script.onload = start
    document.body.appendChild(script)
  }, [router])

  return null
}
