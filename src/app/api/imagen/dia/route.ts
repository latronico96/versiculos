export const runtime = 'edge'

import { generateImage } from '@/lib/image/generateImage'
import versiculos from '@/data/versiculos.json'

function getDayOfYear(): number {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

export async function GET() {
  const index = getDayOfYear() % versiculos.length
  const v = versiculos[index]

  const image = generateImage({
    texto: v.texto,
    cita: v.cita,
  })

  return new Response(image.body, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}
