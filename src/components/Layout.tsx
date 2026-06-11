import type { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

type LayoutProps = {
  children: ReactNode
  active?: string
}

export function Layout({ children, active }: LayoutProps) {
  return (
    <div className="overflow-hidden bg-white shadow-2xl">
      <Header active={active} />
      {children}
      <Footer />
    </div>
  )
}
