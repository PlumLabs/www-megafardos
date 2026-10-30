import { Fragment, type ReactNode } from 'react'

// Texto editable: los párrafos se separan con una línea en blanco y **así** se
// escribe en negrita. Es lo único que se interpreta, a propósito.

function inline(texto: string): ReactNode[] {
  return texto.split(/\*\*(.+?)\*\*/g).map((parte, i) =>
    i % 2 === 1 ? <strong key={i}>{parte}</strong> : <Fragment key={i}>{parte}</Fragment>,
  )
}

export function Parrafos({
  texto,
  className,
  primero,
}: {
  texto: string
  /** Clases de cada párrafo. */
  className: string
  /** Clases del primer párrafo, si son distintas. */
  primero?: string
}) {
  const parrafos = texto
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean)
  return (
    <>
      {parrafos.map((p, i) => (
        <p key={i} className={i === 0 && primero ? primero : className}>
          {inline(p)}
        </p>
      ))}
    </>
  )
}

/** Título en dos líneas con la segunda resaltada, el patrón de todas las secciones. */
export function TituloDestacado({
  titulo,
  destacado,
  className,
}: {
  titulo: string
  destacado: string
  className: string
}) {
  return (
    <>
      {titulo}
      {destacado && (
        <>
          <br />
          <span className={className}>{destacado}</span>
        </>
      )}
    </>
  )
}
