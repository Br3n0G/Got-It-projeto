import { Link } from 'react-router-dom'

export function AccountHeader() {
  return (
    <Link 
      to="/prestador/dados"
      className="mb-2 flex items-center gap-3 bg-white px-4 py-3 transition-colors hover:bg-gray-50"
    >
      <img
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face"
        alt="Foto do prestador"
        className="h-9 w-9 rounded-full object-cover"
      />
      <div>
        <p className="text-base leading-5 text-gray-700">Nome</p>
        <p className="text-base leading-5 text-gray-700">Prestador</p>
      </div>
    </Link>
  )
}
