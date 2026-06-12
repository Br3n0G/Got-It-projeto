import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { User, Mail, Phone, Lock, Eye, EyeOff } from "lucide-react";

// IMPORTAÇÕES DA VALIDAÇÃO E API
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// SCHEMA DE VALIDAÇÃO DO ZOD
const cadastroSchema = z.object({
  nome: z.string().min(3, "O nome precisa ter pelo menos 3 letras"),
  email: z.string().email("Digite um e-mail válido"),
  telefone: z.string().min(10, "Digite um telefone válido"),
  senha: z.string().min(8, "A senha precisa ter no mínimo 8 caracteres"),
  confirmarSenha: z.string()
}).refine((dados) => dados.senha === dados.confirmarSenha, {
  message: "As senhas não coincidem",
  path: ["confirmarSenha"],
});

type CadastroFormInputs = z.infer<typeof cadastroSchema>;

export function CadastroCliente() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  // INICIANDO O REACT HOOK FORM
  const { register, handleSubmit, formState: { errors } } = useForm<CadastroFormInputs>({
    resolver: zodResolver(cadastroSchema)
  });

  // FUNÇÃO ASSÍNCRONA PARA A API
  const onSubmitCadastro = async (dados: CadastroFormInputs) => {
    setIsLoading(true);

    try {
      const resposta = await fetch("http://localhost:3000/api/clientes/cadastro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: dados.nome,
          email: dados.email,
          telefone: dados.telefone,
          senha: dados.senha
        }),
      });

      if (!resposta.ok) {
        throw new Error("Erro ao cadastrar");
      }

      // Redireciona para a tela de confirmação de conta criada do cliente
      navigate("/conta-criada/cliente");
      
    } catch (error) {
      console.error("Erro na API:", error);
      alert("Houve um problema de conexão. Tente novamente.");
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

        {/* Formulário de Cadastro Blindado */}
        <form className="space-y-4" onSubmit={handleSubmit(onSubmitCadastro)}>
          
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700">Nome Completo</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                type="text" 
                placeholder="Seu nome" 
                {...register("nome")}
                className={`pl-10 ${errors.nome ? "border-red-500 focus-visible:ring-red-500" : ""}`} 
              />
            </div>
            {errors.nome && <p className="text-red-500 text-xs mt-1">{errors.nome.message}</p>}
          </div>

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
            <label className="text-sm font-medium text-gray-700">Telefone</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                type="text" 
                placeholder="(00) 00000-0000" 
                {...register("telefone")}
                className={`pl-10 ${errors.telefone ? "border-red-500 focus-visible:ring-red-500" : ""}`} 
              />
            </div>
            {errors.telefone && <p className="text-red-500 text-xs mt-1">{errors.telefone.message}</p>}
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
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {errors.senha && <p className="text-red-500 text-xs mt-1">{errors.senha.message}</p>}
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700">Confirme a senha</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••••"
                {...register("confirmarSenha")}
                className={`pl-10 pr-10 ${errors.confirmarSenha ? "border-red-500 focus-visible:ring-red-500" : ""}`}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {errors.confirmarSenha && <p className="text-red-500 text-xs mt-1">{errors.confirmarSenha.message}</p>}
          </div>

          <Button 
            type="submit" 
            disabled={isLoading}
            className={`w-full mt-2 transition-all ${isLoading ? 'bg-gray-400 cursor-not-allowed text-white' : ''}`}
          >
            {isLoading ? "Criando Conta..." : "Criar Conta"}
          </Button>
        </form>
      </div>
    </AuthLayout>
  );
}