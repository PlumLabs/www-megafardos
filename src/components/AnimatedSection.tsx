'use client'

import { useEffect, useRef } from 'react'

export default function AnimatedSection({
  children,
  className = '',
  type = 'reveal',
  delay = 0,
  ...attrs
}: {
  children: React.ReactNode
  className?: string
  type?: 'reveal' | 'reveal-left' | 'reveal-right' | 'reveal-scale'
  delay?: number
  /** Atributos data-* (por ejemplo los del Visual Editor de Storyblok). */
  [data: `data-${string}`]: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} {...attrs} className={`${type} ${className}`}>
      {children}
    </div>
  )
}
