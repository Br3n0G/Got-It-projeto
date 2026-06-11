import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { User, Mail, Phone, MapPin, Briefcase, Lock, Eye, EyeOff } from "lucide-react";

export function CadastroPrestador() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <AuthLayout
      title="Transforme sua Paixão em Renda"
      subtitle="Junte-se a centenas de profissionais que já atendem clientes através da nossa plataforma."
      features={[
        { title: "Clientes Qualificados", desc: "Acesse uma base de clientes que valorizam o cuidado profissional com plantas" },
        { title: "Pagamentos Garantidos", desc: "Receba seus pagamentos de forma rápida e segura" },
        { title: "Flexibilidade Total", desc: "Defina sua própria agenda, preços e área de atendimento" }
      ]}
      testimonial={{ quote: "Plataforma incrível! Consegui triplicar minha renda atendendo clientes pela plataforma." }}
    >
      <div className="w-full">
        {/* Toggle de Tipo de Usuário */}
        <div className="flex bg-gray-100 p-1 rounded-lg mb-6">
          <Link to="/cadastro/cliente" className="flex-1 text-center py-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition">
            Sou Cliente
          </Link>
          <Link to="/cadastro/prestador" className="flex-1 text-center py-2 text-sm font-medium bg-white text-[#00A63E] rounded-md shadow-sm">
            Sou Prestador
          </Link>
        </div>

        {/* Abas de Entrar / Criar Conta */}
        <div className="flex gap-6 border-b border-gray-200 mb-6">
          <Link to="/login/prestador" className="pb-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition">
            Entrar
          </Link>
          <Link to="/cadastro/prestador" className="pb-2 text-sm font-medium text-[#00A63E] border-b-2 border-[#00A63E]">
            Criar Conta
          </Link>
        </div>

        {/* Formulário de Cadastro do Prestador */}
        <form className="space-y-4">
          
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700">Nome Completo</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input type="text" placeholder="Seu nome" className="pl-10" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700">E-mail</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input type="email" placeholder="seu@email.com" className="pl-10" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700">Telefone</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input type="text" placeholder="(00) 00000-0000" className="pl-10" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700">Cidade</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input type="text" placeholder="Sua cidade" className="pl-10" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700">Especialidade</label>
            <div className="relative">
              <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input type="text" placeholder="Sua especialidade" className="pl-10" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700">Sobre Você</label>
            <div className="relative">
              <Textarea 
                placeholder="Conte mais sobre suas experiências com plantas." 
                className="resize-none h-24" 
              />
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

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700">Confirme a Senha</label>
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

          <Link to="/conta-criada/prestador" className="block mt-4">
            <Button className="w-full bg-[#00A63E] hover:bg-green-700 text-white py-6 text-base font-medium rounded-lg transition-colors">
              Criar Conta Profissional
            </Button>
          </Link>
        </form>

        <div className="mt-6 flex items-center gap-4 before:h-px before:flex-1 before:bg-gray-200 after:h-px after:flex-1 after:bg-gray-200">
          <span className="text-xs text-gray-500 whitespace-nowrap">Ou continue com</span>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <Button variant="outline" className="w-full text-gray-600 font-normal py-5">Google</Button>
          <Button variant="outline" className="w-full text-gray-600 font-normal py-5">Facebook</Button>
        </div>
      </div>
    </AuthLayout>
  );
}