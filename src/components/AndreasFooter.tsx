import { Link } from "react-router-dom";

const PlantIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 20C9.24404 20.0053 7.55023 19.3505 6.2545 18.1654C4.95876 16.9803 4.15575 15.3515 4.00471 13.6021C3.85368 11.8527 4.36567 10.1104 5.43913 8.72074C6.51259 7.33112 8.06911 6.3957 9.79998 6.1C15.5 5 17 4.48 19 2C20 4 21 6.18 21 10C21 15.5 16.22 20 11 20Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 21C2 18 3.85 15.64 7.08 15C9.5 14.52 12 13 13 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const quickLinks = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

export default function Footer() {
  return (
    <footer className="bg-app-dark text-white">
      <div className="max-w-[1143px] mx-auto px-4 sm:px-8 pt-10 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center shrink-0">
                <PlantIcon />
              </div>
              <span className="text-white font-semibold text-xl leading-7">Got It</span>
            </div>
            <p className="text-[#99A1AF] text-sm leading-5 max-w-[440px]">
              Cuidamos das suas plantas com carinho e dedicação enquanto você está fora. Profissionais experientes garantindo que suas plantas recebam todo o amor que merecem.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-lg leading-7">Links Rápidos</h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-[#D1D5DC] text-sm leading-5 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-lg leading-7">Contato</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="mailto:contato@plantasitter.com.br" className="text-[#D1D5DC] text-sm leading-5 hover:text-white transition-colors">
                  contato@plantasitter.com.br
                </a>
              </li>
              <li>
                <a href="tel:+5511987654321" className="text-[#D1D5DC] text-sm leading-5 hover:text-white transition-colors">
                  (11) 98765-4321
                </a>
              </li>
              <li className="text-[#D1D5DC] text-sm leading-5">São Paulo, SP</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#1E2939] py-5">
          <p className="text-[#99A1AF] text-sm leading-5 text-center">
            © 2026 PlantaSitter. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
