const heroImage =
  'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1000&q=80'

export function Hero() {
  return (
    <section id="inicio" className="bg-[#f1fff6]">
      <div className="mx-auto grid min-h-[760px] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:px-9">
        <div>
          <h1 className="max-w-[620px] text-5xl font-bold leading-tight tracking-wide text-[#111827] md:text-6xl">
            Suas Plantas
            <br />
            em <span className="text-[#009b35]">Boas Mãos</span>
          </h1>

          <p className="mt-8 max-w-[560px] text-xl leading-relaxed text-[#4b5563]">
            Vai viajar? Relaxe! Nós cuidamos das suas plantas com o carinho e
            atenção que elas merecem. Serviço profissional de babá de plantas
            para você ter tranquilidade durante suas férias.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contato"
              className="rounded-lg bg-[#009b35] px-9 py-4 text-center text-lg font-semibold text-white transition hover:bg-[#00842d]"
            >
              Agendar Visita
            </a>

            <a
              href="#servicos"
              className="rounded-lg border-2 border-[#009b35] px-9 py-4 text-center text-lg font-semibold text-[#009b35] transition hover:bg-[#009b35] hover:text-white"
            >
              Ver Serviços
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={heroImage}
            alt="Planta decorativa em vaso"
            className="h-[360px] w-full max-w-[575px] rounded-xl object-cover shadow-sm md:h-[515px]"
          />
        </div>
      </div>
    </section>
  )
}