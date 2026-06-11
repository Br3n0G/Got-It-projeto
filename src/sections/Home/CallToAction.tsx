export function CallToAction() {
  return (
    <section className="bg-white px-6 py-28 lg:px-9">
      <div className="mx-auto max-w-5xl bg-[#009b35] px-6 py-9 text-center text-white md:px-12">
        <h2 className="text-4xl font-bold">
          Pronto para Viajar com Tranquilidade?
        </h2>

        <p className="mt-8 text-2xl text-white/90">
          Entre em contato e garanta que suas plantas receberão o melhor cuidado
        </p>

        <a
          href="#contato"
          className="mt-9 inline-block rounded-lg bg-white px-10 py-4 text-lg font-medium text-[#009b35] transition hover:bg-gray-100"
        >
          Agende Sua Visita Agora
        </a>
      </div>
    </section>
  )
}