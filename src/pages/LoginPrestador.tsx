import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

// IMPORTAÇÕES DA VALIDAÇÃO E API
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// SCHEMA DE VALIDAÇÃO DO ZOD
const loginPrestadorSchema = z.object({
  email: z.string().email("Digite um e-mail válido"),
  senha: z.string().min(8, "A senha deve ter no mínimo 8 caracteres"),
});

type LoginPrestadorInputs = z.infer<typeof loginPrestadorSchema>;

export function LoginPrestador() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // INICIANDO O REACT HOOK FORM
  const { register, handleSubmit, formState: { errors } } = useForm<LoginPrestadorInputs>({
    resolver: zodResolver(loginPrestadorSchema)
  });

  // FUNÇÃO ASSÍNCRONA PARA A API
  const onSubmitLogin = async (dados: LoginPrestadorInputs) => {
    setIsLoading(true);

    // ATALHO DE TESTE (MOCK): Remova quando o Back-End estiver pronto
    if (dados.email === "teste@gotit.com") {
      navigate("/prestador/home");
      return;
    }

    try {
      const resposta = await fetch("http://localhost:3000/api/prestadores/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });

      if (!resposta.ok) throw new Error("Credenciais inválidas");

      navigate("/prestador/home"); 
      
    } catch (error) {
      console.error("Erro na API:", error);
      alert("E-mail ou senha incorretos. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

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
        
        <div className="flex bg-gray-100 p-1 rounded-lg mb-8">
          <Link to="/login/cliente" className="flex-1 text-center py-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition">
            Sou Cliente
          </Link>
          <Link to="/login/prestador" className="flex-1 text-center py-2 text-sm font-medium bg-white text-[#00A63E] rounded-md shadow-sm">
            Sou Prestador
          </Link>
        </div>

        <div className="flex gap-6 border-b border-gray-200 mb-8">
          <Link to="/login/prestador" className="pb-2 text-sm font-medium text-[#00A63E] border-b-2 border-[#00A63E]">
            Entrar
          </Link>
          <Link to="/cadastro/prestador" className="pb-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition">
            Criar Conta
          </Link>
        </div>

        {/* FORMULÁRIO BLINDADO */}
        <form className="space-y-5" onSubmit={handleSubmit(onSubmitLogin)}>
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700">E-mail</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                type="email" 
                placeholder="seu@email.com" 
                {...register("email")}
                className={`pl-10 ${errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}`} 
              />
            </div>
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700">Senha</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••" 
                {...register("senha")}
                className={`pl-10 pr-10 ${errors.senha ? "border-red-500 focus-visible:ring-red-500" : ""}`} 
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {errors.senha && <p className="text-red-500 text-xs mt-1">{errors.senha.message}</p>}
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
              <input type="checkbox" className="rounded border-gray-300 text-[#00A63E] focus:ring-[#00A63E]" />
              Lembrar-me
            </label>
            <Link to="/login/admin" className="text-[#00A63E] hover:underline">Admin</Link>
            <a href="#" className="text-[#00A63E] font-medium hover:underline">Esqueci a senha</a>
          </div>

          <Button 
            type="submit" 
            disabled={isLoading}
            className={`w-full py-6 text-base mt-4 transition-all ${
              isLoading ? 'bg-gray-400 cursor-not-allowed text-white' : 'bg-[#00A63E] hover:bg-green-700 text-white'
            }`}
          >
            {isLoading ? "Entrando..." : "Entrar"}
          </Button>
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