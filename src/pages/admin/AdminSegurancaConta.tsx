import { useState } from "react";
import { Link } from "react-router-dom";
import { AdminLayout } from "../../layout/AdminLayout";
import { User, ShieldCheck, Bell, LogOut, ChevronRight, Lock, Smartphone } from "lucide-react";

// IMPORTAÇÕES DA VALIDAÇÃO
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// CRIANDO AS REGRAS (SCHEMA) COM O ZOD
const senhaSchema = z.object({
  senhaAtual: z.string().min(1, "A senha atual é obrigatória"),
  novaSenha: z.string().min(8, "A nova senha precisa ter no mínimo 8 caracteres"),
  confirmarSenha: z.string()
}).refine((dados) => dados.novaSenha === dados.confirmarSenha, {
  message: "As senhas não coincidem",
  path: ["confirmarSenha"], // O erro vai aparecer debaixo do input de confirmar
});

// Criando o tipo TypeScript baseado nas regras acima
type SenhaFormInputs = z.infer<typeof senhaSchema>;

// --- COMPONENTE DO SWITCH ---
interface ToggleSwitchProps {
  isOn: boolean;
  onToggle: () => void;
}
const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isOn, onToggle }) => {
  return (
    <button onClick={onToggle} className={`relative inline-flex h-7 w-16 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${isOn ? 'bg-[#00A63E]' : 'bg-[#E5E7EB]'}`}>
      <span className={`pointer-events-none relative inline-block h-6 w-6 rounded-full bg-white shadow-md transform transition duration-200 ease-in-out ${isOn ? 'translate-x-9' : 'translate-x-0'}`} />
      <span className={`absolute inset-0 flex items-center justify-center font-bold text-[10px] uppercase transition-opacity duration-150 ease-in-out pl-3 ${isOn ? 'opacity-100 text-white' : 'opacity-0'}`}>ON</span>
      <span className={`absolute inset-0 flex items-center justify-center font-bold text-[10px] uppercase transition-opacity duration-150 ease-in-out pr-3 ${isOn ? 'opacity-0' : 'opacity-100 text-[#99A1AF]'}`}>OFF</span>
    </button>
  );
};

export function AdminSegurancaConta() {
  const [faEnabled, setFaEnabled] = useState(false);
  
  // Estado para dizer se o sistema está "pensando" (carregando)
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<SenhaFormInputs>({
    resolver: zodResolver(senhaSchema)
  });

  // Função ASYNC (assíncrona) para esperar a resposta do back-end
  const onSubmitSenha = async (dados: SenhaFormInputs) => {
    setIsLoading(true); // Trava o botão para o usuário não clicar duas vezes

    try {
      // A CONEXÃO COM A API 
      const resposta = await fetch("http://localhost:3000/api/admin/atualizar-senha", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          senhaAtual: dados.senhaAtual,
          novaSenha: dados.novaSenha
        }),
      });

      if (!resposta.ok) {
        throw new Error("Falha ao comunicar com o servidor.");
      }

      alert("Sucesso! O MySQL foi atualizado com a nova senha.");
      
    } catch (error) {
      console.error("Erro na API:", error);
      alert("Ops! Houve um problema ao enviar os dados para o servidor.");
    } finally {
      setIsLoading(false); // Libera o botão novamente
    }
  };

  const subNavLinks = [
    { icon: User, label: "Perfil e Dados", href: "/admin/perfil", active: false },
    { icon: ShieldCheck, label: "Segurança", href: "/admin/perfil/seguranca", active: true },
    { icon: Bell, label: "Notificações", href: "/admin/perfil/notificacoes", active: false },
  ];

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto font-sans">
        
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-[#364153]">Minha Conta</h1>
          <p className="text-sm text-[#99A1AF] mt-1">Gerencie suas informações pessoais, segurança e preferências.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Menu Lateral */}
          <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 lg:col-span-1 h-fit space-y-3">
            {subNavLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link key={link.label} to={link.href} className={`flex items-center gap-3.5 px-4 py-3 rounded-lg text-sm font-medium transition-all ${link.active ? "bg-[#00A63E]/10 text-[#00A63E]" : "text-[#99A1AF] hover:bg-gray-50 hover:text-[#364153]"}`}>
                  <Icon className="w-5 h-5 shrink-0" />
                  <span className="flex-1">{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#E5E7EB]" />
                </Link>
              );
            })}
            <div className="pt-3 border-t border-[#E5E7EB]">
              <Link to="/login" className="flex items-center gap-3.5 px-4 py-3 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 transition-all">
                <LogOut className="w-5 h-5 shrink-0" />
                Sair da Conta
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            
            {/* CARD DO FORMULÁRIO BLINDADO */}
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-100">
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-[#364153]">
                    <Lock className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#364153]">Alterar Senha</h3>
              </div>

              {/* APLICANDO NO HTML */}
              <form className="space-y-6" onSubmit={handleSubmit(onSubmitSenha)}>
                <div>
                  <label className="block text-xs font-bold text-[#364153] mb-2 uppercase tracking-wide">Senha Atual</label>
                  <input 
                    type="password" 
                    placeholder="••••••••" 
                    {...register("senhaAtual")} 
                    className={`w-full md:w-1/2 px-4 py-3 border rounded-xl text-sm focus:outline-none transition-all ${errors.senhaAtual ? 'border-red-500 focus:border-red-500' : 'border-[#E5E7EB] focus:border-[#00A63E]'}`} 
                  />
                  {errors.senhaAtual && <p className="text-red-500 text-xs mt-1.5">{errors.senhaAtual.message}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#364153] mb-2 uppercase tracking-wide">Nova Senha</label>
                    <input 
                      type="password" 
                      placeholder="Mínimo 8 caracteres" 
                      {...register("novaSenha")}
                      className={`w-full px-4 py-3 border rounded-xl text-sm focus:outline-none transition-all ${errors.novaSenha ? 'border-red-500 focus:border-red-500' : 'border-[#E5E7EB] focus:border-[#00A63E]'}`} 
                    />
                    {errors.novaSenha && <p className="text-red-500 text-xs mt-1.5">{errors.novaSenha.message}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#364153] mb-2 uppercase tracking-wide">Confirmar Nova Senha</label>
                    <input 
                      type="password" 
                      placeholder="Repita a nova senha" 
                      {...register("confirmarSenha")}
                      className={`w-full px-4 py-3 border rounded-xl text-sm focus:outline-none transition-all ${errors.confirmarSenha ? 'border-red-500 focus:border-red-500' : 'border-[#E5E7EB] focus:border-[#00A63E]'}`} 
                    />
                    {errors.confirmarSenha && <p className="text-red-500 text-xs mt-1.5">{errors.confirmarSenha.message}</p>}
                  </div>
                </div>

                <div className="pt-4">
                  {/* 👇 BOTÃO ATUALIZADO AQUI 👇 */}
                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className={`px-8 py-3 text-white text-sm font-bold rounded-xl transition-all ${
                      isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#364153] hover:bg-[#2a3341]'}`}
                  >
                    {isLoading ? "Atualizando no banco..." : "Atualizar Senha"}
                  </button>
                </div>
              </form>
            </div>

            {/* SEÇÃO: 2FA */}
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                 <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-[#364153]">
                    <Smartphone className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#364153]">Autenticação em Duas Etapas (2FA)</h3>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <div className="max-w-md">
                  <h4 className="text-sm font-bold text-[#364153] mb-1">Proteger minha conta com 2FA</h4>
                  <p className="text-xs text-[#99A1AF]">
                    Recomendamos o uso de aplicativos como Google Authenticator ou Authy para gerar códigos de segurança extras.
                  </p>
                </div>
                <ToggleSwitch isOn={faEnabled} onToggle={() => setFaEnabled(!faEnabled)} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </AdminLayout>
  );
}