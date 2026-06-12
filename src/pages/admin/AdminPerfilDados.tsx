import { useState } from "react";
import { Link } from "react-router-dom";
import { AdminLayout } from "../../layout/AdminLayout";
import { 
  User, 
  ShieldCheck, 
  Bell, 
  LogOut,
  ChevronRight,
  Camera
} from "lucide-react";

export function AdminPerfilDados() {
  // Estados dos inputs do formulário
  const [nome, setNome] = useState("Admin Admin");
  const [telefone, setTelefone] = useState("(11) 90000-0000");

  const subNavLinks = [
    { icon: User, label: "Perfil e Dados", href: "/admin/perfil", active: true },
    { icon: ShieldCheck, label: "Segurança", href: "/admin/perfil/seguranca", active: false },
    { icon: Bell, label: "Notificações", href: "/admin/perfil/notificacoes", active: false },
  ];

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto font-sans">
        
        {/* CABEÇALHO */}
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-[#364153]">Minha Conta</h1>
          <p className="text-sm text-[#99A1AF] mt-1">Gerencie suas informações pessoais, segurança e preferências.</p>
        </div>

        {/* CORPO: Menu Lateral de Abas (1/3) e Formulário (2/3) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* MENU DE SUB-NAVEGAÇÃO */}
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
              <Link to="/login/admin" className="flex items-center gap-3.5 px-4 py-3 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 transition-all">
                <LogOut className="w-5 h-5 shrink-0" />
                Sair da Conta
              </Link>
            </div>
          </div>

          {/* CARD PRINCIPAL: Informações Pessoais */}
          <div className="bg-white rounded-xl border border-[#E5E7EB] p-8 lg:col-span-2 shadow-sm">
            
            <div className="mb-8 pb-6 border-b border-gray-100">
              <h3 className="text-lg font-bold text-[#364153]">Informações Pessoais</h3>
            </div>

            {/* SEÇÃO DA FOTO DE PERFIL */}
            <div className="flex items-center gap-5 mb-8">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-[#155DFC]/10 text-[#155DFC] flex items-center justify-center font-bold text-2xl border-2 border-white ring-4 ring-gray-50">
                  AD
                </div>
                <button className="absolute bottom-0 right-0 p-1.5 bg-white border border-[#E5E7EB] rounded-full shadow-sm hover:bg-gray-50 transition-colors">
                  <Camera className="w-3.5 h-3.5 text-[#364153]" />
                </button>
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#364153]">Foto de Perfil</h4>
                <p className="text-xs text-[#99A1AF] mt-1">Formatos suportados: JPG, PNG ou GIF. Tamanho máximo: 5MB.</p>
              </div>
            </div>

            {/* FORMULÁRIO EM GRID (2 COLUNAS) */}
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Nome Completo */}
                <div>
                  <label className="block text-xs font-bold text-[#364153] mb-2 uppercase tracking-wide">Nome Completo</label>
                  <input 
                    type="text" 
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl text-sm text-[#364153] focus:outline-none focus:border-[#00A63E] transition-all"
                  />
                </div>

                {/* Endereço de E-mail */}
                <div>
                  <label className="block text-xs font-bold text-[#364153] mb-2 uppercase tracking-wide">Endereço de E-mail</label>
                  <input 
                    type="email" 
                    value="admin@gotit.com.br" 
                    disabled
                    className="w-full px-4 py-3 border border-[#E5E7EB] bg-gray-50 rounded-xl text-sm text-[#99A1AF] cursor-not-allowed"
                  />
                  <span className="text-[10px] text-[#99A1AF] mt-1.5 block">O e-mail não pode ser alterado diretamente.</span>
                </div>

                {/* Cargo / Função */}
                <div>
                  <label className="block text-xs font-bold text-[#364153] mb-2 uppercase tracking-wide">Cargo / Função</label>
                  <input 
                    type="text" 
                    value="Super Administrador" 
                    disabled
                    className="w-full px-4 py-3 border border-[#E5E7EB] bg-gray-50 rounded-xl text-sm text-[#99A1AF] cursor-not-allowed"
                  />
                </div>

                {/* Telefone Celular */}
                <div>
                  <label className="block text-xs font-bold text-[#364153] mb-2 uppercase tracking-wide">Telefone Celular</label>
                  <input 
                    type="text" 
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    className="w-full px-4 py-3 border border-[#E5E7EB] rounded-xl text-sm text-[#364153] focus:outline-none focus:border-[#00A63E] transition-all"
                  />
                </div>

              </div>

              {/* BOTÃO SALVAR */}
              <div className="text-right pt-4">
                <button type="submit" className="px-8 py-3 bg-[#00A63E] hover:bg-[#00A63E]/90 text-white text-sm font-bold rounded-xl transition-all shadow-sm">
                  Salvar Alterações
                </button>
              </div>
            </form>

          </div>

        </div>

      </div>
    </AdminLayout>
  );
}