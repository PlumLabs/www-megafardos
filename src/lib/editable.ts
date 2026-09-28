import type { Editable } from '@/content/types'

// Atributos que el Visual Editor de Storyblok usa para resaltar un bloque y
// abrirlo al hacer clic (equivale a storyblokEditable() del SDK oficial).
// Fuera del modo borrador _editable no viene y no se agrega nada al HTML.
export function editable(item: Editable | undefined): Record<string, string> {
  const raw = item?._editable
  if (!raw) return {}
  try {
    const options = JSON.parse(raw.replace(/^<!--#storyblok#/, '').replace(/-->$/, ''))
    return {
      'data-blok-c': JSON.stringify(options),
      'data-blok-uid': `${options.id}-${options.uid}`,
    }
  } catch {
    return {}
  }
}
