export function Footer() {
  return (
    <footer className="bg-footer-dark px-8 py-6 text-white md:px-11">
      <div className="grid gap-8 md:grid-cols-[1.6fr_0.7fr_1fr]">
        <div>
          <div className="text-2xl font-semibold">Plantasitter</div>
          <p className="mt-5 max-w-[390px] text-sm leading-relaxed text-white/65">
            Cuidamos das suas plantas com carinho e dedicação enquanto você está fora.
            Profissionais experientes garantindo que suas plantas recebam todo o amor que merecem.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Links Rápidos</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li><a href="#" className="hover:text-white">Início</a></li>
            <li><a href="#" className="hover:text-white">Serviços</a></li>
            <li><a href="#" className="hover:text-white">Sobre</a></li>
            <li><a href="#" className="hover:text-white">Contato</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Contato</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>contato@plantasitter.com.br</li>
            <li>(11) 98765-4321</li>
            <li>São Paulo, SP</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-white/50">
        © 2026 Got it. Todos os direitos reservados.
      </div>
    </footer>
  )
}
