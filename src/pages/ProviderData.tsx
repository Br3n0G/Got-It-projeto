import {
  Briefcase,
  Globe2,
  Lock,
  Mail,
  MapPin,
  Phone,
  Settings,
  Star,
  Tag,
  User,
} from 'lucide-react'
import { Link } from 'react-router-dom' 
import { AccountHeader } from '../components/AccountHeader'
import { GreenIllustration } from '../components/GreenIllustration'
import { Layout } from '../components/Layout'

const accountItems = [
  { icon: Mail, label: 'nome@email.com' },
  { icon: Phone, label: '(00) 0000 - 0000' },
  { icon: Lock, label: '***********' },
  { icon: Globe2, label: 'Conectado pelo Google' },
  { icon: MapPin, label: 'Cidade - Estado' },
  { icon: Briefcase, label: 'Especialidade' },
  { icon: Tag, label: 'Sobre mim......' },
  { icon: Tag, label: 'Sobre o meu trabalho......' },
  { icon: User, label: 'Alterar foto' },
]

export function ProviderData() {
  return (
    <Layout active="Sobre">
      <main className="grid min-h-[900px] md:grid-cols-[1fr_1fr]">
        <GreenIllustration />

        <section className="bg-soft-panel px-6 py-2 md:px-7">
          <AccountHeader />

          <div className="border-t border-black/10">
            <div className="pt-4 pb-2 text-center">
              <Link to="/prestador/home" className="text-sm font-medium text-got-green hover:underline">
                ← Voltar para o Painel
              </Link>
            </div>

            <h1 className="border-b border-black/10 pb-7 text-center text-base font-normal text-gray-700">
              Dados da conta
            </h1>

            <div className="py-2">
              {accountItems.map(({ icon: Icon, label }) => (
                <Link
                  to="#"
                  key={label}
                  className="flex items-center gap-4 py-4 text-base text-gray-700 transition hover:text-got-green"
                >
                  <Icon size={22} strokeWidth={1.5} className="text-gray-500" />
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div className="border-t border-black/10 pt-4">
            <Link to="/prestador/perfil" className="flex items-center gap-4 py-3 text-base text-gray-700 hover:text-got-green">
              <Globe2 size={22} strokeWidth={1.6} />
              Ver perfil de prestador
            </Link>
            <Link to="/prestador/configuracoes" className="flex items-center gap-4 py-3 text-base text-gray-700 hover:text-got-green">
              <Settings size={22} strokeWidth={1.6} />
              Configuração
            </Link>
            <Link to="/prestador/ajuda" className="flex items-center gap-4 py-3 text-base text-gray-700 hover:text-got-green">
              <Star size={22} strokeWidth={1.6} />
              Ajuda
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  )
}