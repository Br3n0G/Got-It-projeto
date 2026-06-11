import { Calendar, Droplets, Heart, Shield, Star, Sun } from 'lucide-react'

const benefits = [
  {
    icon: Droplets,
    title: 'Rega Personalizada',
    text: 'Cada planta recebe a quantidade exata de água que precisa, no momento certo.',
  },
  {
    icon: Sun,
    title: 'Iluminação Adequada',
    text: 'Ajustamos a posição das suas plantas para garantir luz solar ideal.',
  },
  {
    icon: Heart,
    title: 'Cuidado com Amor',
    text: 'Tratamos suas plantas como se fossem nossas, com carinho e atenção.',
  },
  {
    icon: Calendar,
    title: 'Visitas Agendadas',
    text: 'Horários flexíveis que se adaptam à sua rotina e necessidades.',
  },
  {
    icon: Shield,
    title: 'Segurança Garantida',
    text: 'Profissionais verificados e confiáveis para sua tranquilidade.',
  },
  {
    icon: Star,
    title: 'Relatórios Fotográficos',
    text: 'Receba fotos e atualizações sobre suas plantas durante sua ausência.',
  },
]

export function Benefits() {
  return (
    <section id="servicos" className="bg-white px-6 py-20 lg:px-9">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-[0.12em] text-[#111827]">
            Por que escolher o Got It?
          </h2>

          <p className="mt-6 text-xl text-[#4b5563]">
            Oferecemos cuidado especializado e personalizado para cada tipo de
            planta
          </p>
        </div>

        <div className="mt-20 grid gap-9 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-xl border border-black/10 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#dcfce7] text-[#009b35]">
                <Icon size={25} strokeWidth={2} />
              </div>

              <h3 className="mt-12 text-2xl font-bold text-[#111827]">
                {title}
              </h3>

              <p className="mt-4 text-lg leading-relaxed text-[#4b5563]">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}