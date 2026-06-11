import { Link } from 'react-router-dom'
import { Logo } from './Logo'

const menuItems = [
  { label: 'Início', path: '/home' },
  { label: 'Serviços', path: '/inicio/servicosdisponiveis' },
  { label: 'Sobre', path: '/sobre' },
  { label: 'Contato', path: '/contato' }
]

type HeaderProps = {
  active?: string
}

export function Header({ active = 'Sobre' }: HeaderProps) {
  return (
    <header className="flex h-[72px] items-center justify-between border-b border-black/5 bg-white px-8 md:px-11">
      <Logo />

      <nav className="hidden items-center gap-8 text-sm text-gray-600 md:flex">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={`transition hover:text-got-green ${
              active === item.label ? 'font-medium text-got-green' : ''
            }`}
          >
            {item.label}
          </Link>
        ))}

        {/* Botão Agende Agora apontando para a busca do serviços */}
        <Link
          to="/inicio/servicosdisponiveis"
          className="rounded-lg bg-got-green px-5 py-3 font-medium text-white transition hover:bg-got-green-dark"
        >
          Agende Agora
        </Link>
      </nav>
    </header>
  )
}