import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

export function LoginAdmin() {
  const [showPassword, setShowPassword] = useState(false);

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
        
        {/* Toggle Exclusivo do Admin */}
        <div className="flex bg-gray-100 p-1 rounded-lg mb-8">
          <Link to="/login/admin" className="flex-1 text-center py-2 text-sm font-medium bg-white text-[#00A63E] rounded-md shadow-sm">
            Sou admin
          </Link>
          <Link to="/login/cliente" className="flex-1 text-center py-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition">
            Voltar ao login cliente
          </Link>
        </div>

        {/* Aba Única */}
        <div className="flex gap-6 border-b border-gray-200 mb-8">
          <span className="pb-2 text-sm font-medium text-[#00A63E] border-b-2 border-[#00A63E]">
            Entrar
          </span>
        </div>

        <form className="space-y-5">
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700">E-mail</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input type="email" placeholder="seu@email.com" className="pl-10" />
            </div>
          </div>

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

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
              <input type="checkbox" className="rounded border-gray-300 text-[#00A63E] focus:ring-[#00A63E]" />
              Lembrar-me
            </label>
            <a href="#" className="text-[#00A63E] font-medium hover:underline">
              Esqueci a senha
            </a>
          </div>

          {/* O Admin pode ser direcionado para um painel gerencial no futuro */}
          <Link to="/admin" className="block mt-4">
            <Button className="w-full bg-[#00A63E] hover:bg-green-700 text-white py-6 text-base font-medium">
              Entrar
            </Button>
          </Link>
        </form>

        <div className="mt-8 flex items-center gap-4 before:h-px before:flex-1 before:bg-gray-200 after:h-px after:flex-1 after:bg-gray-200">
          <span className="text-xs text-gray-500 whitespace-nowrap">Ou continue com</span>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <Button variant="outline" className="w-full text-gray-600 font-normal py-5">Google</Button>
          <Button variant="outline" className="w-full text-gray-600 font-normal py-5">Facebook</Button>
        </div>
      </div>
    </AuthLayout>
  );
}