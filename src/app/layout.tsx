import React from 'react'
import './globals.css'

export const metadata = {
  title: 'Generador de Imágenes de Versículos',
  description:
    'API para generar imágenes de versículos listas para compartir en Instagram',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
<html lang="es">
      <body
        style={{
          margin: 0,
          backgroundColor: '#0f172a',
          color: '#e2e8f0',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        {' '}
        <main>{children}</main>
        <footer
          style={{
            textAlign: 'center',
            padding: '1.5rem',
            borderTop: '1px solid #1e293b',
            marginTop: '2rem',
            color: '#94a3b8',
            fontSize: '0.9rem',
          }}
        >
          Generador de imágenes de versículos • Next.js + @vercel/og
        </footer>
      </body>
    </html>
  )
}
