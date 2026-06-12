import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

// IMPORTAÇÕES DA VALIDAÇÃO E API
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// SCHEMA DE VALIDAÇÃO DO ZOD
const loginSchema = z.object({
  email: z.string().email("Digite um e-mail válido"),
  senha: z.string().min(8, "A senha deve ter no mínimo 8 caracteres"),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

export function LoginCliente() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // INICIANDO O REACT HOOK FORM
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema)
  });

  // FUNÇÃO ASSÍNCRONA PARA A API
  const onSubmitLogin = async (dados: LoginFormInputs) => {
    setIsLoading(true);

    // ATALHO DE TESTE (MOCK): Remova quando o Back-End estiver pronto
    if (dados.email === "teste@gotit.com") {
      navigate("/prestador/home");
      return;
    }

    try {
      // Conexão com a futura API
      const resposta = await fetch("http://localhost:3000/api/clientes/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: dados.email,
          senha: dados.senha
        }),
      });

      if (!resposta.ok) {
        throw new Error("Credenciais inválidas");
      }

      // Sucesso! Redireciona para o painel do cliente
      navigate("/cliente"); 
      
    } catch (error) {
      console.error("Erro na API:", error);
      alert("E-mail ou senha incorretos. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
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

        {/* Formulário Blindado */}
        <form className="space-y-5" onSubmit={handleSubmit(onSubmitLogin)}>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">E-mail</label>
            <Input 
              type="email" 
              placeholder="seu@email.com" 
              {...register("email")}
              className={errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Senha</label>
            <Input 
              type="password" 
              placeholder="••••••••" 
              {...register("senha")}
              className={errors.senha ? "border-red-500 focus-visible:ring-red-500" : ""}
            />
            {errors.senha && <p className="text-red-500 text-xs mt-1">{errors.senha.message}</p>}
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