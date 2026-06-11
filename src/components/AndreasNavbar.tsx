import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const PlantIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 20C9.24404 20.0053 7.55023 19.3505 6.2545 18.1654C4.95876 16.9803 4.15575 15.3515 4.00471 13.6021C3.85368 11.8527 4.36567 10.1104 5.43913 8.72074C6.51259 7.33112 8.06911 6.3957 9.79998 6.1C15.5 5 17 4.48 19 2C20 4 21 6.18 21 10C21 15.5 16.22 20 11 20Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 21C2 18 3.85 15.64 7.08 15C9.5 14.52 12 13 13 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LoginIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 2H12.6667C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H10" stroke="#00A63E" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.66675 11.3333L10.0001 7.99996L6.66675 4.66663" stroke="#00A63E" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 8H2" stroke="#00A63E" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const navLinks = [
  { label: "Início", href: "/home" },
  { label: "Serviços", href: "/inicio/servicosdisponiveis" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/home") return location.pathname === "/home" || location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header className="w-full bg-white border-b border-[#E5E7EB] sticky top-0 z-50">
      <div className="max-w-[1143px] mx-auto px-4 sm:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/home" className="flex items-center gap-2 shrink-0 transition-opacity hover:opacity-80">
          <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center">
            <PlantIcon />
          </div>
          <span className="text-app-dark font-semibold text-xl leading-7">Got It</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm leading-5 tracking-[-0.15px] transition-colors ${
                isActive(link.href)
                  ? "text-brand font-medium"
                  : "text-app-gray font-normal hover:text-app-dark"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            to="/login/cliente"
            className="flex items-center gap-2 px-4 py-2.5 rounded-[10px] border-2 border-brand text-brand text-sm font-medium leading-5 hover:bg-brand-light transition-colors"
          >
            <LoginIcon />
            Entrar
          </Link>
          <Link
            to="/inicio/servicosdisponiveis"
            className="px-4 py-2 rounded-[10px] bg-brand text-white text-sm font-medium leading-5 hover:bg-brand-dark transition-colors"
          >
            Agende Agora
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-app-gray hover:text-app-dark"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-[#E5E7EB] shadow-lg flex flex-col px-4 py-4">
          
          <nav className="flex flex-col gap-4 mb-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-base font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-brand"
                    : "text-app-gray hover:text-app-dark"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3 pt-4 border-t border-[#E5E7EB]">
            <Link
              to="/login/cliente"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-[10px] border-2 border-brand text-brand text-sm font-medium"
            >
              <LoginIcon />
              Entrar
            </Link>
            <Link
              to="/inicio/servicosdisponiveis"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center px-4 py-3 rounded-[10px] bg-brand text-white text-sm font-medium"
            >
              Agende Agora
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}