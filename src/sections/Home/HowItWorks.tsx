const steps = [
  {
    number: '1',
    title: 'Agende uma Visita',
    text: 'Entre em contato e agende uma visita inicial para conhecer suas plantas e necessidades.',
  },
  {
    number: '2',
    title: 'Planejamento',
    text: 'Criamos um plano personalizado de cuidados para cada uma das suas plantas.',
  },
  {
    number: '3',
    title: 'Relaxe e Viaje',
    text: 'Viaje tranquilo enquanto cuidamos das suas plantas e enviamos atualizações.',
  },
]

export function HowItWorks() {
  return (
    <section id="sobre" className="bg-[#f9fafb] px-6 py-20 lg:px-9">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-4xl font-bold tracking-wide text-[#111827]">
          Como Funciona
        </h2>

        <p className="mt-6 text-xl text-[#4b5563]">
          Processo simples e rápido em apenas 3 passos
        </p>

        <div className="mt-20 grid gap-12 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.number} className="mx-auto max-w-[360px]">
              <div className="mx-auto flex h-16 w-16 items-center justify-center bg-[#009b35] text-3xl font-bold text-white">
                {step.number}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[#111827]">
                {step.title}
              </h3>

              <p className="mt-4 text-lg leading-relaxed text-[#4b5563]">
                {step.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}