import { Link } from 'react-router-dom'
import { Leaf } from 'lucide-react'

type LogoProps = {
  light?: boolean
}

export function Logo({ light = false }: LogoProps) {
  return (
    <Link 
      to="/home" 
      className="flex items-center gap-2 transition hover:opacity-80"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-got-green text-white">
        <Leaf size={24} strokeWidth={2.2} />
      </div>
      <span className={`text-xl font-semibold ${light ? 'text-white' : 'text-[#202124]'}`}>
        Got It
      </span>
    </Link>
  )
}
