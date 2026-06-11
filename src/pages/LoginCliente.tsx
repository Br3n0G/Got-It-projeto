import { Link, useNavigate } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

export function LoginCliente() {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Impede a página de recarregar
    
    // Futuramente, aqui vai o código para verificar a senha no MySQL 5.7
    // Por enquanto, apenas redirecionamos direto para o painel:
    navigate("/cliente"); 
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
        {/* Toggle de Tipo de Usuário */}
        <div className="flex bg-gray-100 p-1 rounded-lg mb-8">
          <Link to="/login/cliente" className="flex-1 text-center py-2 text-sm font-medium bg-white text-[#00A63E] rounded-md shadow-sm">
            Sou Cliente
          </Link>
          <Link to="/login/prestador" className="flex-1 text-center py-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition">
            Sou Prestador
          </Link>
        </div>

        {/* Abas de Entrar / Criar Conta */}
        <div className="flex gap-6 border-b border-gray-200 mb-8">
          <Link to="/login/cliente" className="pb-2 text-sm font-medium text-[#00A63E] border-b-2 border-[#00A63E]">
            Entrar
          </Link>
          <Link to="/cadastro/cliente" className="pb-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition">
            Criar Conta
          </Link>
        </div>

        {/* O Formulário ÚNICO e corrigido */}
        <form className="space-y-5" onSubmit={handleLogin}>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">E-mail</label>
            <Input type="email" placeholder="seu@email.com" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Senha</label>
            <Input type="password" placeholder="••••••••" /> 
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
              <input type="checkbox" className="rounded border-gray-300 text-[#00A63E] focus:ring-[#00A63E]" />
              Lembrar-me
            </label>
            
            <Link to="/login/admin" className="text-[#00A63E] hover:underline">
              Admin
            </Link>
            
            <a href="#" className="text-[#00A63E] font-medium hover:underline">
              Esqueci a senha
            </a>
          </div>

          <Button type="submit" className="w-full bg-[#00A63E] hover:bg-green-700 text-white py-6 text-base mt-4">
            Entrar
          </Button>
        </form>

        {/* Separador e Redes Sociais */}
        <div className="mt-8 flex items-center gap-4 before:h-px before:flex-1 before:bg-gray-200 after:h-px after:flex-1 after:bg-gray-200">
          <span className="text-xs text-gray-500">Ou continue com</span>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <Button variant="outline" className="w-full text-gray-600 font-normal py-5">
            Google
          </Button>
          <Button variant="outline" className="w-full text-gray-600 font-normal py-5">
            Facebook
          </Button>
        </div>
      </div>
    </AuthLayout>
  );
}