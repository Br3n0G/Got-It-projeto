import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  UserCircle, 
  FileText, 
  CreditCard, 
  HelpCircle,
  Bell
} from "lucide-react";

// Um componente simples para a logo do Got It no topo do menu
const PlantIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 20C9.24404 20.0053 7.55023 19.3505 6.2545 18.1654C4.95876 16.9803 4.15575 15.3515 4.00471 13.6021C3.85368 11.8527 4.36567 10.1104 5.43913 8.72074C6.51259 7.33112 8.06911 6.3957 9.79998 6.1C15.5 5 17 4.48 19 2C20 4 21 6.18 21 10C21 15.5 16.22 20 11 20Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 21C2 18 3.85 15.64 7.08 15C9.5 14.52 12 13 13 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  // Função para verificar se a aba está ativa (e pintar de verde)
  const isActive = (path: string) => location.pathname === path;

  // Nossa lista de navegação lateral
  const sidebarLinks = [
    { icon: LayoutDashboard, label: "Painel Inicial", href: "/admin" },
    { icon: Users, label: "Usuários (Clientes)", href: "/admin/clientes" },
    { icon: UserCircle, label: "Especialistas", href: "/admin/especialistas" },
    { icon: FileText, label: "Contratos", href: "/admin/contratos" },
    { icon: CreditCard, label: "Pagamentos", href: "/admin/pagamentos" },
    { icon: HelpCircle, label: "Suporte", href: "/admin/suporte" },
  ];

  return (
    <div className="flex h-screen bg-[#F8F9FA] font-sans">
      
      {/* BARRA LATERAL (SIDEBAR) */}
      <aside className="w-64 bg-white border-r border-[#E5E7EB] flex flex-col">
        {/* Header da Sidebar com Logo */}
        <div className="h-20 flex items-center px-6 border-b border-[#E5E7EB]">
          <Link to="/home" className="flex items-center gap-2 outline-none">
            <div className="w-8 h-8 rounded-full bg-[#00A63E] flex items-center justify-center">
              <PlantIcon />
            </div>
            <span className="font-bold text-xl text-[#364153]">Got It</span>
          </Link>
        </div>

        {/* Links de Navegação */}
        <nav className="flex-1 py-6 px-4 space-y-2">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  active 
                    ? "bg-[#00A63E]/10 text-[#00A63E]" // Fundo verde com 10% de opacidade
                    : "text-[#99A1AF] hover:bg-gray-50 hover:text-[#364153]"
                }`}
              >
                <Icon className="w-5 h-5" />
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Perfil Admin no Rodapé da Sidebar */}
        <div className="p-4 border-t border-[#E5E7EB]">
          <Link to="/admin/perfil" className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg transition-colors">
            <div className="w-10 h-10 rounded-full bg-[#00A63E]/20 text-[#00A63E] flex items-center justify-center font-bold text-sm">
              AD
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-[#364153]">Admin Admin</span>
              <span className="text-xs text-[#99A1AF]">Super Administrador</span>
            </div>
          </Link>
        </div>
      </aside>

      {/* ÁREA DE CONTEÚDO PRINCIPAL */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Cabeçalho Branco (Header) */}
        <header className="h-20 bg-white border-b border-[#E5E7EB] flex items-center justify-end px-8">
          <button className="text-[#99A1AF] hover:text-[#00A63E] transition-colors relative">
            <Bell className="w-6 h-6" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>
        </header>

        {/* Aqui é onde a página específica vai ser desenhada (com rolagem) */}
        <div className="flex-1 overflow-y-auto p-8">
          {children}
        </div>
      </main>
    </div>
  );
}