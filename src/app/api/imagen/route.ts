export const runtime = 'edge';

import { NextRequest } from 'next/server'
import { generateImage } from '@/lib/image/generateImage'
import versiculos from '@/data/versiculos.json'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)

  const tipo = searchParams.get('tipo')

  let lista = versiculos

  if (tipo !== null) {
    const tipoNum = Number(tipo)
    lista = versiculos.filter((v) => v.emociones.includes(tipoNum))
  }

  const random = lista[Math.floor(Math.random() * lista.length)]

  const image = generateImage({
    texto: random.texto,
    cita: random.cita,
  })

  return new Response(image.body, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}
