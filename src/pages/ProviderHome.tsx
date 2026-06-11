import { Link } from 'react-router-dom'
import {
  ClipboardList,
  FileText,
  MapPin,
  PlusSquare,
  Settings,
  Star,
} from 'lucide-react'
import { AccountHeader } from '../components/AccountHeader'
import { GreenIllustration } from '../components/GreenIllustration'
import { Layout } from '../components/Layout'

const menu = [
  { icon: ClipboardList, label: 'Histórico de Contratos', path: '#' },
  { icon: FileText, label: 'Dados da Conta', path: '/prestador/dados' },
  { icon: MapPin, label: 'Pedidos ativos', path: '/prestador/pedidosativos' },
  { icon: PlusSquare, label: 'Alterar preços de contratação', path: '/prestador/pricing' },
]

export function ProviderHome() {
  return (
    <Layout active="Sobre">
      <main className="grid min-h-[900px] md:grid-cols-[1fr_1fr]">
        <GreenIllustration />

        <section className="bg-soft-panel px-6 py-2 md:px-7">
          <AccountHeader />

          <div className="border-y border-black/10 py-3">
            {menu.map(({ icon: Icon, label, path }) => (
              <Link
                to={path}
                key={label}
                className="flex items-center gap-4 py-4 text-base text-gray-700 transition hover:text-got-green"
              >
                <Icon size={22} strokeWidth={1.6} />
                {label}
              </Link>
            ))}
          </div>

          <div className="pt-4">
            <Link to="#" className="flex items-center gap-4 py-3 text-base text-gray-700 hover:text-got-green">
              <Settings size={22} strokeWidth={1.6} />
              Configuração
            </Link>
            <Link to="#" className="flex items-center gap-4 py-3 text-base text-gray-700 hover:text-got-green">
              <Star size={22} strokeWidth={1.6} />
              Ajuda
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  )
}