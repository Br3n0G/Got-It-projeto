import { useState } from 'react' 
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { PriceCard } from '../components/PriceCard'

type PricingPageProps = {
  mode: 'week' | 'day'
}

export function PricingPage({ mode }: PricingPageProps) {
  const [currentMode, setCurrentMode] = useState<'week' | 'day'>(mode)
  
   const isWeek = currentMode === 'week'

  return (
    <div className="overflow-hidden bg-white shadow-2xl">
      <Header active="Contato" />

      <main className="px-6 py-24 md:px-12">
        <section className="mx-auto max-w-[1120px] text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[#202124] md:text-6xl lg:text-7xl">
            Alteração de tabela de preços
          </h1>
          <p className="mt-4 text-2xl text-gray-500 md:text-3xl">
            Altere o preço e descrição dos seus serviços
          </p>

          <div className="mt-10 flex items-center justify-center gap-2 text-base">
            <button
              onClick={() => setCurrentMode('day')}
              className={`rounded-md px-3 py-2 transition ${
                !isWeek ? 'bg-gray-100 text-[#202124]' : 'text-[#202124] hover:bg-gray-100'
              }`}
            >
              Dia
            </button>
            <button
              onClick={() => setCurrentMode('week')}
              className={`rounded-md px-3 py-2 transition ${
                isWeek ? 'bg-gray-100 text-[#202124]' : 'text-[#202124] hover:bg-gray-100'
              }`}
            >
              Semana
            </button>
          </div>

          <div className="mt-16 grid justify-items-center gap-16 lg:grid-cols-2">
            <PriceCard
              title="Hora"
              price="00"
              suffix={isWeek ? '/ dia' : '/ hr'}
              description={isWeek ? 'Escolha quantos dias deseja.' : 'Poucas plantas? Essa opção é pra você'}
              items={['List item', 'List item', 'List item', 'List item']}
            />

            <PriceCard
              title="Visita"
              price="00"
              suffix={isWeek ? '/ semana' : '/ visita'}
              description={isWeek ? 'Escolha quantas semanas deseja.' : 'Muitas plantas, ou carentes de cuidado'}
              items={['List item', 'List item', 'List item', 'List item']}
              featured
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}