import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { User, Mail, Phone, Lock, Eye, EyeOff } from "lucide-react";

export function CadastroCliente() {
  // Estados para controlar a visibilidade das senhas (olhinho)
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  // Função que impede recarregamento e navega para a tela de conta criada
  const handleCadastro = (e: React.FormEvent) => {
    e.preventDefault();
    // Redireciona para a tela de confirmação de conta criada do cliente
    navigate("/conta-criada/cliente");
  };

  return (
    <AuthLayout
      title="Suas Plantas em Boas Mãos"
      subtitle="Conecte-se com especialistas que cuidarão das suas plantas com carinho e dedicação."
      features={[
        { title: "Profissionais Verificados", desc: "Todos os prestadores passam por verificação de identidade e avaliação" },
        { title: "Pagamento Seguro", desc: "Sistema de pagamento protegido e múltiplas opções disponíveis" },
        { title: "Suporte 24/7", desc: "Estamos sempre disponíveis para ajudar você e suas plantas" }
      ]}
      testimonial={{ quote: "Plataforma incrível! Encontrei uma profissional excelente que cuida das minhas plantas perfeitamente." }}
    >
      <div className="w-full">
        {/* Toggle de Tipo de Usuário (Cliente / Prestador) */}
        <div className="flex bg-gray-100 p-1 rounded-lg mb-8">
          <Link to="/cadastro/cliente" className="flex-1 text-center py-2 text-sm font-medium bg-white text-[#00A63E] rounded-md shadow-sm">
            Sou Cliente
          </Link>
          <Link to="/cadastro/prestador" className="flex-1 text-center py-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition">
            Sou Prestador
          </Link>
        </div>

        {/* Abas de Entrar / Criar Conta */}
        <div className="flex gap-6 border-b border-gray-200 mb-6">
          <Link to="/login/cliente" className="pb-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition">
            Entrar
          </Link>
          <Link to="/cadastro/cliente" className="pb-2 text-sm font-medium text-[#00A63E] border-b-2 border-[#00A63E]">
            Criar Conta
          </Link>
        </div>

        {/* Formulário de Cadastro */}
        <form className="space-y-4" onSubmit={handleCadastro}>
          
          {/* Campo: Nome Completo */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700">Nome Completo</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input type="text" placeholder="seu nome" className="pl-10" />
            </div>
          </div>

          {/* Campo: E-mail */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700">E-mail</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input type="email" placeholder="seu@email.com" className="pl-10" />
            </div>
          </div>

          {/* Campo: Telefone */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700">Telefone</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input type="text" placeholder="(00) 00000-0000" className="pl-10" />
            </div>
          </div>

          {/* Campo: Senha */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700">Senha</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••" 
                className="pl-10 pr-10" 
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Campo: Confirme a Senha */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700">Confirme a senha</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••••"
                className="pl-10 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <Button type="submit" className="w-full mt-2">
            Criar Conta
          </Button>
        </form>
      </div>
    </AuthLayout>
  );
}
