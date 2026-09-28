import type { IconoServicio } from '@/content/types'

export default function ServiceIcon({ icono }: { icono: IconoServicio }) {
  switch (icono) {
    case 'cosecha':
      return (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <path d="M24 20c-2 0-4-1-5-3-1-2-1-5-1-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M6 26h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="22" cy="22" r="4" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )
    case 'pulverizacion':
      return (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <path d="M10 12h12v4H10z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M6 20h20v2H6z" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="16" cy="8" r="2" fill="currentColor" />
        </svg>
      )
    case 'logistica':
      return (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <path d="M4 10h14v10H4z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M18 13h6l4 4v3h-10z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <circle cx="9" cy="23" r="2.5" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="23" cy="23" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )
    case 'siembra':
    default:
      return (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
          <path d="M16 4v12M12 8l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 20c0-4 4-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth="1.5" />
          <path d="M6 26h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
  }
}
