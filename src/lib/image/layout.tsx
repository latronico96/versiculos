import React from 'react'

type Props = {
  texto: string
  cita: string
  background: string
  width: number
  height: number
}

export function buildLayout({
  texto,
  cita,
  background,
  width,
  height,
}: Props): React.JSX.Element {
  return (
    <div
      style={{
        display: 'flex',
        width,
        height,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 80,
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Arial',

        // 🔥 overlay integrado
        background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), ${background}`,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <p
          style={{
            fontSize: 64,
            lineHeight: 1.3,
            marginBottom: 40,
          }}
        >
          {texto}
        </p>

        <p
          style={{
            fontSize: 36,
          }}
        >
          {cita}
        </p>
      </div>
    </div>
  )
}
