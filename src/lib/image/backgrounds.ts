export const backgrounds = [
  // 🌌 Oscuros elegantes
  'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
  'linear-gradient(135deg, #141e30, #243b55)',
  'linear-gradient(135deg, #000000, #434343)',

  // 🌊 Azules profundos
  'linear-gradient(135deg, #1e3c72, #2a5298)',
  'linear-gradient(135deg, #283e51, #485563)',

  // 🌙 Morados oscuros
  'linear-gradient(135deg, #232526, #414345)',
  'linear-gradient(135deg, #1f1c2c, #928dab)',

  // 🔥 cálidos pero oscuros
  'linear-gradient(135deg, #3a1c71, #1f1c2c)',
  'linear-gradient(135deg, #42275a, #734b6d)',

  // 🌿 verdes oscuros
  'linear-gradient(135deg, #134e5e, #071b1f)',
  'linear-gradient(135deg, #0f2027, #2c7744)',

  // 🌌 night aesthetic
  'linear-gradient(135deg, #0a0f1c, #1a2a6c)',
  'linear-gradient(135deg, #16222a, #3a6073)',

  // 🌅 sunset oscuro (legible)
  'linear-gradient(135deg, #2c3e50, #fd746c)',
  'linear-gradient(135deg, #1a2a6c, #b21f1f)',

  // ⚫ minimal premium
  'linear-gradient(135deg, #000000, #1c1c1c)',
]

export function getRandomBackground(): string {
  return backgrounds[Math.floor(Math.random() * backgrounds.length)]
}
