import { useState } from "react";
import { Link } from "react-router-dom"; // Adicionado o Link aqui
import { AdminLayout } from "../../layout/AdminLayout";
import { 
  User, 
  ShieldCheck, 
  Bell, 
  LogOut,
  ChevronRight
} from "lucide-react";

// --- COMPONENTE REUTILIZÁVEL: ToggleSwitch ---
interface ToggleSwitchProps {
  isOn: boolean;
  onToggle: () => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isOn, onToggle }) => {
  return (
    <button 
      onClick={onToggle}
      className={`relative inline-flex h-7 w-16 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
        isOn ? 'bg-[#00A63E]' : 'bg-[#E5E7EB]'
      }`}
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none relative inline-block h-6 w-6 rounded-full bg-white shadow-md transform ring-0 transition duration-200 ease-in-out ${
          isOn ? 'translate-x-9' : 'translate-x-0'
        }`}
      />
      <span className={`absolute inset-0 flex items-center justify-center font-bold text-[10px] uppercase transition-opacity duration-150 ease-in-out pl-3 ${isOn ? 'opacity-100 text-white' : 'opacity-0'}`}>
        ON
      </span>
      <span className={`absolute inset-0 flex items-center justify-center font-bold text-[10px] uppercase transition-opacity duration-150 ease-in-out pr-3 ${isOn ? 'opacity-0' : 'opacity-100 text-[#99A1AF]'}`}>
        OFF
      </span>
    </button>
  );
};

// --- COMPONENTE PRINCIPAL DA PÁGINA ---
export function AdminAccountNotifications() {
  const [notificacoes, setNotificacoes] = useState({
    novosEspecialistas: true,
    disputasReclamacoes: true,
    resumosFinanceiros: false,
    alertasSeguranca: true,
  });

  const handleToggle = (key: keyof typeof notificacoes) => {
    setNotificacoes(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const subNavLinks = [
    { icon: User, label: "Perfil e Dados", href: "/admin/perfil", active: false },
    { icon: ShieldCheck, label: "Segurança", href: "/admin/perfil/seguranca", active: false },
    { icon: Bell, label: "Notificações", href: "/admin/perfil/notificacoes", active: true },
  ];

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto font-sans">
        
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-[#364153]">Minha Conta</h1>
          <p className="text-sm text-[#99A1AF] mt-1">Gerencie suas informações pessoais, segurança e preferências.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* MENU LATERAL DE ABAS (Alterado de <a> para <Link>) */}
          <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 lg:col-span-1 h-fit space-y-3">
            {subNavLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`flex items-center gap-3.5 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    link.active 
                      ? "bg-[#00A63E]/10 text-[#00A63E]" 
                      : "text-[#99A1AF] hover:bg-gray-50 hover:text-[#364153]"
                  }`}
                >
                  <Icon className="w-5 h-5 shrink-0" />
                  <span className="flex-1">{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#E5E7EB]" />
                </Link>
              );
            })}

            <div className="pt-3 border-t border-[#E5E7EB]">
              <Link to="/logout" className="flex items-center gap-3.5 px-4 py-3 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 transition-all">
                <LogOut className="w-5 h-5 shrink-0" />
                Sair da Conta
              </Link>
            </div>
          </div>

          {/* CARD PRINCIPAL */}
          <div className="bg-white rounded-xl border border-[#E5E7EB] p-8 lg:col-span-2 shadow-sm flex flex-col">
            <div className="mb-10 pb-6 border-b border-gray-100">
              <h3 className="text-lg font-bold text-[#364153]">Preferências de Notificação</h3>
              <p className="text-sm text-[#99A1AF] mt-1.5 max-w-lg">
                Escolha quais alertas você deseja receber por e-mail ou sistema.
              </p>
            </div>

            <div className="flex-1 space-y-10">
              <div className="flex items-center justify-between gap-6">
                <div>
                  <h4 className="text-sm font-bold text-[#364153]">Novos Especialistas (KYC)</h4>
                  <p className="text-xs text-[#99A1AF] mt-1">Quando um cuidador envia documentos para aprovação.</p>
                </div>
                <ToggleSwitch isOn={notificacoes.novosEspecialistas} onToggle={() => handleToggle('novosEspecialistas')} />
              </div>

              <div className="flex items-center justify-between gap-6">
                <div>
                  <h4 className="text-sm font-bold text-[#364153]">Disputas e Reclamações</h4>
                  <p className="text-xs text-[#99A1AF] mt-1">Alertas críticos de problemas em serviços.</p>
                </div>
                <ToggleSwitch isOn={notificacoes.disputasReclamacoes} onToggle={() => handleToggle('disputasReclamacoes')} />
              </div>

              <div className="flex items-center justify-between gap-6">
                <div>
                  <h4 className="text-sm font-bold text-[#364153]">Resumos Financeiros</h4>
                  <p className="text-xs text-[#99A1AF] mt-1">Relatório semanal de repasses e taxas da plataforma.</p>
                </div>
                <ToggleSwitch isOn={notificacoes.resumosFinanceiros} onToggle={() => handleToggle('resumosFinanceiros')} />
              </div>

              <div className="flex items-center justify-between gap-6">
                <div>
                  <h4 className="text-sm font-bold text-[#364153]">Alertas de Segurança</h4>
                  <p className="text-xs text-[#99A1AF] mt-1">Avisos sobre acessos suspeitos na sua conta.</p>
                </div>
                <ToggleSwitch isOn={notificacoes.alertasSeguranca} onToggle={() => handleToggle('alertasSeguranca')} />
              </div>
            </div>

            <div className="mt-12 text-right">
              <button className="px-10 py-3 bg-[#00A63E] text-white text-sm font-bold rounded-full hover:bg-[#00A63E]/90 transition-all">
                Salvar Preferências
              </button>
            </div>
          </div>

        </div>

      </div>
    </AdminLayout>
  );
}