import { useState } from "react";
import { Link } from "react-router-dom"; // Importação vital para navegar entre as páginas sem recarregar
// Lembre-se de confirmar se o caminho da sua imagem está correto!
import imgShape from "../assets/11dbcb982f9ba115c7d5cc790cc48a457815fb67.png";

// ============================================================================
// 1. COMPONENTE DE ÍCONES
// Este bloco guarda todos os "desenhos" (SVGs) dos ícones usados na sua tela.
// Em vez de importar uma biblioteca, você desenhou os ícones manualmente.
// ============================================================================
const Icon = ({ name, className = "" }: { name: string, className?: string }) => {
  const icons: Record<string, React.ReactNode> = {
    Leaf: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/></svg>,
    ClipboardList: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>,
    FileText: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
    MapPin: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>,
    DollarSign: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
    Settings: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>,
    Star: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
    ChevronRight: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}><path d="m9 18 6-6-6-6"/></svg>,
    Calendar: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
    Clock: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    CheckCircle2: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>,
    XCircle: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>,
    AlertCircle: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>,
    Flower2: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}><path d="M12 22a7 7 0 0 0 7-7 7 7 0 0 0-7-7 7 7 0 0 0-7 7 7 7 0 0 0 7 7z"/><path d="M12 22V8"/><path d="M12 8a7 7 0 0 1 7-7 7 7 0 0 1 7 7 7 7 0 0 1-7 7 7 7 0 0 1-7-7z"/><path d="M22 12H8"/></svg>,
    User: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  };
  return icons[name] || null;
};

// ============================================================================
// 2. BANCO DE DADOS FAKE (MOCK)
// Esta lista simula os pedidos que viriam do seu banco de dados MySQL.
// ============================================================================
const pedidosAtivos = [
  { id: 1, cliente: "Maria Silva", servico: "Regar + Podar", data: "20/05/2026", horario: "08:00", local: "Rua das Flores, 123 — São Paulo", plantas: 3, status: "confirmado", avatar: "MS", cor: "bg-emerald-500" },
  { id: 2, cliente: "João Souza", servico: "Adubação", data: "20/05/2026", horario: "11:00", local: "Av. Paulista, 456 — São Paulo", plantas: 5, status: "confirmado", avatar: "JS", cor: "bg-sky-500" },
  { id: 3, cliente: "Juliana Barbosa", servico: "Regar", data: "20/05/2026", horario: "13:00", local: "Rua Augusta, 789 — São Paulo", plantas: 2, status: "pendente", avatar: "JB", cor: "bg-amber-500" },
  { id: 4, cliente: "Carlos Lima", servico: "Transplante + Poda", data: "21/05/2026", horario: "09:00", local: "Rua Oscar Freire, 321 — São Paulo", plantas: 4, status: "confirmado", avatar: "CL", cor: "bg-purple-500" },
  { id: 5, cliente: "Ana Costa", servico: "Controle de pragas", data: "22/05/2026", horario: "14:00", local: "Alameda Santos, 654 — São Paulo", plantas: 6, status: "cancelado", avatar: "AC", cor: "bg-red-500" },
];

// ============================================================================
// 3. CONFIGURAÇÃO DE MENUS E ROTAS
// Aqui definimos os botões do menu lateral e para qual Rota eles devem apontar
// de acordo com o seu App.tsx. O '#' significa que a página ainda não existe.
// ============================================================================
const menuItems = [
  { icon: "ClipboardList", label: "Histórico de Contratos", path: "#" },
  { icon: "FileText", label: "Dados da Conta", path: "/prestador/dados" },
  { icon: "MapPin", label: "Pedidos ativos", path: "/prestador/pedidosativos" },
  { icon: "DollarSign", label: "Alterar preços de contratação", path: "/prestador/pricing" },
];

const menuItems2 = [
  { icon: "Settings", label: "Configuração", path: "#" },
  { icon: "Star", label: "Ajuda", path: "#" },
];

// Dicionário de cores e ícones para cada status do pedido
const statusConfig: Record<string, { label: string; icon: string; color: string; bg: string; border: string }> = {
  confirmado: { label: "Confirmado", icon: "CheckCircle2", color: "text-emerald-700", bg: "bg-emerald-50", border: "border-emerald-200" },
  pendente: { label: "Pendente", icon: "AlertCircle", color: "text-amber-700", bg: "bg-amber-50", border: "border-amber-200" },
  cancelado: { label: "Cancelado", icon: "XCircle", color: "text-red-700", bg: "bg-red-50", border: "border-red-200" },
};

// ============================================================================
// 4. COMPONENTE PRINCIPAL (A TELA EM SI)
// ============================================================================
export default function PedidosAtivos() {
  // Estado que controla qual menu está "marcado" (destacado de verde)
  const [activeMenu, setActiveMenu] = useState("Pedidos ativos");

  return (
    // Fundo geral da página
    <div className="min-h-screen flex flex-col bg-[#f9fafb]" style={{ fontFamily: "Inter, sans-serif" }}>
      
      {/* -------------------------------------------------------------------------
          CABEÇALHO (HEADER) PERSONALIZADO
          ------------------------------------------------------------------------- */}
      <header className="bg-white border-b border-[#e5e7eb] w-full">
        <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
          <Link to="/home" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="bg-[#00a63e] rounded-full w-10 h-10 flex items-center justify-center">
              <Icon name="Leaf" className="text-white w-5 h-5" />
            </div>
            <span className="text-[#101828] text-xl" style={{ fontWeight: 600 }}>Got It</span>
          </Link>
          <nav className="flex items-center gap-8">
           {[
              { label: "Início", path: "/home" },
              { label: "Serviços", path: "/inicio/servicosdisponiveis" },
              { label: "Sobre", path: "/sobre" },
              { label: "Contato", path: "/contato" }
            ].map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`text-sm cursor-pointer transition-colors ${item.label === "Sobre" ? "text-[#00a63e]" : "text-[#4a5565] hover:text-[#00a63e]"}`}
                style={{ fontWeight: item.label === "Sobre" ? 500 : 400 }}
              >
                {item.label}
              </Link>
            ))}
            <button className="bg-[#00a63e] text-white text-sm px-4 py-2 rounded-[10px] hover:bg-[#007a55] transition-colors" style={{ fontWeight: 500 }}>
              Agende Agora
            </button>
          </nav>
        </div>
      </header>

      {/* -------------------------------------------------------------------------
          CONTEÚDO PRINCIPAL (SPLIT LAYOUT)
          Onde a mágica do gradiente verde e da divisão de tela acontece.
          ------------------------------------------------------------------------- */}
      <div className="flex-1 relative w-full" style={{ minHeight: "calc(100vh - 65px - 209px)" }}>
        
        {/* Lado Esquerdo: Gradiente Verde bonito que você criou */}
        <div
          className="absolute inset-y-0 left-0 w-1/2 overflow-hidden"
          style={{ backgroundImage: "linear-gradient(125.205deg, rgb(0, 166, 62) 0%, rgb(0, 122, 85) 100%)" }}
        >
          {/* Círculos decorativos do fundo verde */}
          <div className="absolute bg-white opacity-10 rounded-full w-96 h-96" style={{ top: "-192px", left: "-192px" }} />
          <div className="absolute bg-white opacity-10 rounded-full w-96 h-96" style={{ bottom: "-192px", right: "-96px" }} />
        </div>

        {/* Lado Direito: Fundo cinza claro */}
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[#f9fafb]" />

        {/* Área central que segura o Menu e a Lista de Pedidos */}
        <div className="relative max-w-7xl mx-auto px-8 py-10 flex gap-6 items-start">

          {/* -------------------------------------------------------------------------
              MENU LATERAL (SIDEBAR)
              ------------------------------------------------------------------------- */}
          <div className="w-72 shrink-0">
            <div className="bg-[#f0fdf4] rounded-lg border border-[#d9d9d9] shadow-[0px_4px_4px_-1px_rgba(12,12,13,0.1),0px_4px_4px_-1px_rgba(12,12,13,0.05)] overflow-hidden">
              
              {/* Foto e Nome do Prestador */}
              <div className="bg-white px-4 pt-3 pb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                    <img src={imgShape} alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-[#757575] text-base" style={{ fontWeight: 600 }}>Nome Prestador</span>
                </div>
              </div>

              {/* Linha separadora */}
              <div className="px-4 py-2">
                <div className="bg-[#d9d9d9] h-px w-full" />
              </div>

              {/* Botões de Navegação Principais (Transformados em Links) */}
              <div className="px-2 pb-1">
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={() => setActiveMenu(item.label)} // Muda a cor do botão clicado
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeMenu === item.label
                        ? "bg-[#00a63e]/10 text-[#00a63e]" // Estilo se estiver selecionado
                        : "text-[#1e1e1e] hover:bg-gray-100" // Estilo padrão
                    }`}
                  >
                    <Icon name={item.icon} className="w-5 h-5 shrink-0" />
                    <span className="text-sm flex-1" style={{ fontWeight: activeMenu === item.label ? 500 : 400 }}>{item.label}</span>
                    {activeMenu === item.label && <Icon name="ChevronRight" className="w-4 h-4 shrink-0" />}
                  </Link>
                ))}
              </div>

              <div className="px-4 py-2">
                <div className="bg-[#d9d9d9] h-px w-full" />
              </div>

              {/* Botões Secundários (Configuração, Ajuda) */}
              <div className="px-2 pb-2">
                {menuItems2.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={() => setActiveMenu(item.label)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeMenu === item.label
                        ? "bg-[#00a63e]/10 text-[#00a63e]"
                        : "text-[#1e1e1e] hover:bg-gray-100"
                    }`}
                  >
                    <Icon name={item.icon} className="w-5 h-5 shrink-0" />
                    <span className="text-sm flex-1" style={{ fontWeight: activeMenu === item.label ? 500 : 400 }}>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* -------------------------------------------------------------------------
              ÁREA DOS PEDIDOS ATIVOS (LADO DIREITO)
              ------------------------------------------------------------------------- */}
          <div className="flex-1 min-w-0">
            <div className="bg-white rounded-lg border border-[#d9d9d9] shadow-[0px_4px_4px_-1px_rgba(12,12,13,0.1),0px_4px_4px_-1px_rgba(12,12,13,0.05)] overflow-hidden">

              {/* Título da Lista */}
              <div className="px-6 py-5 border-b border-[#f0f0f0] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-[#00a63e]/10 rounded-lg p-2">
                    <Icon name="MapPin" className="w-5 h-5 text-[#00a63e]" />
                  </div>
                  <div>
                    <h2 className="text-[#101828] text-lg" style={{ fontWeight: 600 }}>Pedidos Ativos</h2>
                    <p className="text-[#6b7280] text-xs">{pedidosAtivos.filter(p => p.status !== "cancelado").length} pedidos em andamento</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#6b7280] bg-gray-50 rounded-lg px-3 py-1.5 border border-gray-200">
                  <Icon name="Calendar" className="w-3.5 h-3.5" />
                  <span>Maio 2026</span>
                </div>
              </div>

              {/* Renderizando a Lista de Pedidos (usando a função Map) */}
              <div className="divide-y divide-[#f5f5f5]">
                {pedidosAtivos.map((pedido) => {
                  const st = statusConfig[pedido.status]; // Puxa as cores de acordo com o status
                  return (
                    <div
                      key={pedido.id}
                      className={`px-6 py-4 hover:bg-gray-50 transition-colors ${pedido.status === "cancelado" ? "opacity-60" : ""}`}
                    >
                      <div className="flex items-start gap-4">
                        {/* Círculo do Avatar do Cliente */}
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${pedido.cor}`}>
                          <span className="text-white text-xs" style={{ fontWeight: 700 }}>{pedido.avatar}</span>
                        </div>

                        {/* Dados textuais do pedido */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <div>
                              <p className="text-[#101828] text-sm" style={{ fontWeight: 600 }}>{pedido.cliente}</p>
                              <p className="text-[#6b7280] text-xs">{pedido.servico}</p>
                            </div>
                            {/* Etiqueta de Status (ex: Pendente, Confirmado) */}
                            <span className={`inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full border shrink-0 ${st.color} ${st.bg} ${st.border}`} style={{ fontWeight: 500 }}>
                              <Icon name={st.icon} className="w-3 h-3" />
                              {st.label}
                            </span>
                          </div>

                          <div className="flex flex-wrap items-center gap-3 mt-2">
                            <span className="flex items-center gap-1 text-xs text-[#9ca3af]">
                              <Icon name="Clock" className="w-3.5 h-3.5" />
                              {pedido.data} às {pedido.horario}
                            </span>
                            <span className="flex items-center gap-1 text-xs text-[#9ca3af]">
                              <Icon name="MapPin" className="w-3.5 h-3.5" />
                              {pedido.local}
                            </span>
                            <span className="flex items-center gap-1 text-xs text-[#9ca3af]">
                              <Icon name="Flower2" className="w-3.5 h-3.5" />
                              {pedido.plantas} planta{pedido.plantas !== 1 ? "s" : ""}
                            </span>
                          </div>
                        </div>

                        {/* Seta de ação (não aparece se estiver cancelado) */}
                        {pedido.status !== "cancelado" && (
                          <button className="shrink-0 text-[#00a63e] hover:text-[#007a55] p-1.5 rounded-lg hover:bg-[#00a63e]/10 transition-colors">
                            <Icon name="ChevronRight" className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Rodapé da tabela com resumo das bolinhas */}
              <div className="px-6 py-4 bg-[#f9fafb] border-t border-[#f0f0f0] flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs text-[#6b7280]">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                    {pedidosAtivos.filter(p => p.status === "confirmado").length} confirmados
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
                    {pedidosAtivos.filter(p => p.status === "pendente").length} pendentes
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-400 inline-block" />
                    {pedidosAtivos.filter(p => p.status === "cancelado").length} cancelados
                  </span>
                </div>
                <button className="flex items-center gap-1.5 text-sm text-[#00a63e] hover:text-[#007a55] transition-colors" style={{ fontWeight: 500 }}>
                  Ver histórico
                  <Icon name="ChevronRight" className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* -------------------------------------------------------------------------
                CARD DO PERFIL DO PRESTADOR (Abaixo da lista de pedidos)
                ------------------------------------------------------------------------- */}
            <div className="mt-4 bg-white rounded-lg border border-[#d9d9d9] shadow-[0px_4px_4px_-1px_rgba(12,12,13,0.1),0px_4px_4px_-1px_rgba(12,12,13,0.05)] overflow-hidden">
              <div className="px-6 py-4 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#00a63e]/20 shrink-0">
                  <img src={imgShape} alt="Prestador" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#101828] text-sm" style={{ fontWeight: 600 }}>Nome Prestador</p>
                  <p className="text-[#6b7280] text-xs">Especialista em plantas tropicais · São Paulo, SP</p>
                </div>
                <button className="flex items-center gap-1.5 bg-[#00a63e] text-white text-sm px-4 py-2 rounded-lg hover:bg-[#007a55] transition-colors shrink-0" style={{ fontWeight: 500 }}>
                  <Icon name="User" className="w-4 h-4" />
                  Ver perfil
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------------------
          RODAPÉ (FOOTER) PERSONALIZADO
          ------------------------------------------------------------------------- */}
      <footer className="bg-[#101828] text-white">
        <div className="max-w-7xl mx-auto px-8 py-10">
          <div className="grid grid-cols-3 gap-8 pb-8 border-b border-[#1e2939]">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="bg-[#00a63e] rounded-full w-10 h-10 flex items-center justify-center">
                  <Icon name="Leaf" className="text-white w-5 h-5" />
                </div>
                <span className="text-white text-xl" style={{ fontWeight: 600 }}>Got It</span>
              </div>
              <p className="text-[#99a1af] text-sm leading-relaxed">
                Cuidamos das suas plantas com carinho e dedicação enquanto você está fora. Profissionais experientes garantindo que suas plantas recebam todo o amor que merecem.
              </p>
            </div>
            <div>
              <h3 className="text-white text-lg mb-4" style={{ fontWeight: 600 }}>Links Rápidos</h3>
              <ul className="space-y-2">
                {[
                  { label: "Início", path: "/home" },
                  { label: "Serviços", path: "/inicio/servicosdisponiveis" },
                  { label: "Sobre", path: "/sobre" },
                  { label: "Contato", path: "/contato" }
                ].map((link) => (
                  <li key={link.label}>
                    <Link to={link.path} className="text-[#d1d5dc] text-sm hover:text-[#00a63e] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white text-lg mb-4" style={{ fontWeight: 600 }}>Contato</h3>
              <ul className="space-y-2">
                <li className="text-[#d1d5dc] text-sm">contato@plantasitter.com.br</li>
                <li className="text-[#d1d5dc] text-sm">(11) 98765-4321</li>
                <li className="text-[#d1d5dc] text-sm">São Paulo, SP</li>
              </ul>
            </div>
          </div>
          <div className="pt-6 text-center text-[#99a1af] text-sm">
            © 2026 Got It. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}