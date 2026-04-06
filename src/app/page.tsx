import React from 'react'

export default function Home() {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        background: '#0f172a',
        color: '#e2e8f0',
        minHeight: '100vh',
      }}
    >
      {' '}
      <header
        style={{ padding: '2rem', textAlign: 'center', background: '#1e293b' }}
      >
        {' '}
        <h1 style={{ margin: 0, fontSize: '2rem' }}>
          Generador de Imágenes de Versículos
        </h1>{' '}
        <p>
          API para crear imágenes listas para compartir en Instagram (historias
          o posts)
        </p>{' '}
      </header>
      <div style={{ maxWidth: 900, margin: 'auto', padding: '2rem' }}>
        <Card title="📌 ¿Qué es esto?">
          <p>
            Esta API genera imágenes dinámicas (1080x1920) con versículos
            bíblicos. Están diseñadas para ser compartidas fácilmente en
            historias de Instagram.
          </p>
        </Card>

        <Card title="📖 Versículo del día">
          <p>Perfecto para publicar contenido diario.</p>
          <a href="/api/imagen/dia" target="_blank">
            Ver imagen
          </a>
          <Endpoint text="GET /api/imagen/dia" />
        </Card>

        <Card title="🎲 Versículo random">
          <p>Genera un versículo aleatorio en formato imagen.</p>
          <a href="/api/imagen/random" target="_blank">
            Ver imagen
          </a>
          <Endpoint text="GET /api/imagen/random" />
        </Card>

        <Card title="😊 Versículo por emoción">
          <p>Elegí una emoción y obtené un versículo relacionado.</p>

          <ul>
            <li>
              <a href="/api/imagen/emocion?tipo=0" target="_blank">
                Feliz
              </a>
            </li>
            <li>
              <a href="/api/imagen/emocion?tipo=1" target="_blank">
                Triste
              </a>
            </li>
            <li>
              <a href="/api/imagen/emocion?tipo=2" target="_blank">
                Motivación
              </a>
            </li>
            <li>
              <a href="/api/imagen/emocion?tipo=3" target="_blank">
                Ansiedad
              </a>
            </li>
            <li>
              <a href="/api/imagen/emocion?tipo=4" target="_blank">
                Paz
              </a>
            </li>
            <li>
              <a href="/api/imagen/emocion?tipo=5" target="_blank">
                Fe
              </a>
            </li>
            <li>
              <a href="/api/imagen/emocion?tipo=6" target="_blank">
                Fortaleza
              </a>
            </li>
            <li>
              <a href="/api/imagen/emocion?tipo=7" target="_blank">
                Esperanza
              </a>
            </li>
          </ul>

          <Endpoint text="GET /api/imagen/emocion?tipo={id}" />
        </Card>

        <Card title="📱 Cómo usarlo">
          <ul>
            <li>Abrí cualquier endpoint</li>
            <li>Descargá la imagen</li>
            <li>Subila a historias de Instagram</li>
          </ul>
        </Card>
      </div>
    </div>
  )
}

function Card({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div
      style={{
        background: '#1e293b',
        padding: '1.5rem',
        borderRadius: 12,
        marginBottom: '1rem',
        transition: 'transform 0.2s',
      }}
    >
      {' '}
      <h2>{title}</h2> {children}{' '}
    </div>
  )
}

function Endpoint({ text }: { text: string }) {
  return (
    <span
      style={{
        marginTop: '0.5rem',
        fontFamily: 'monospace',
        display: 'block',
        color: '#94a3b8',
      }}
    >
      {' '}
      {text}{' '}
    </span>
  )
}
