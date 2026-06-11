import { Star } from 'lucide-react'

const testimonials = [
  {
    text: '"Viajei por 3 semanas e minhas plantas nunca estiveram tão bonitas! Serviço excepcional."',
    author: 'Maria Silva',
  },
  {
    text: '"Profissionais super atenciosos e cuidadosos. Recomendo muito!"',
    author: 'João Costa',
  },
  {
    text: '"Minha coleção de suculentas está impecável graças ao PlantaSitter. Adorei!"',
    author: 'Ana Paula',
  },
]

export function Testimonials() {
  return (
    <section className="bg-[#f1fff6] px-6 py-20 lg:px-9">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-[0.08em] text-[#111827]">
            O que Dizem Nossos Clientes
          </h2>

          <p className="mt-6 text-xl text-[#4b5563]">
            Depoimentos reais de pessoas que confiam em nós
          </p>
        </div>

        <div className="mt-20 grid gap-9 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.author}
              className="rounded-xl bg-white p-7 shadow-lg"
            >
              <div className="flex gap-1 text-yellow-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={21} fill="currentColor" />
                ))}
              </div>

              <p className="mt-6 text-lg leading-relaxed text-[#374151]">
                {item.text}
              </p>

              <h3 className="mt-6 text-lg font-bold text-[#111827]">
                {item.author}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}