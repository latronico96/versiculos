export const runtime = 'edge'

import { generateImage } from '@/lib/image/generateImage'
import versiculos from '@/data/versiculos.json'

export async function GET() {
  const random = versiculos[Math.floor(Math.random() * versiculos.length)]

  const image = generateImage({
    texto: random.texto,
    cita: random.cita,
  })

  return new Response(image.body, {
    headers: {
      'Content-Type': 'image/png',
      // menos cache porque es random
      'Cache-Control': 'public, max-age=2',
    },
  })
}
