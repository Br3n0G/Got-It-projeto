import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { User, Mail, Phone, MapPin, Briefcase, Lock, Eye, EyeOff } from "lucide-react";

// IMPORTAÇÕES DA VALIDAÇÃO E API
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// SCHEMA DE VALIDAÇÃO DO ZOD
const cadastroPrestadorSchema = z.object({
  nome: z.string().min(3, "O nome precisa ter pelo menos 3 letras"),
  email: z.string().email("Digite um e-mail válido"),
  telefone: z.string().min(10, "Digite um telefone válido"),
  cidade: z.string().min(2, "Informe sua cidade"),
  especialidade: z.string().min(3, "Informe sua especialidade (ex: Bonsai)"),
  sobre: z.string().min(15, "Escreva um pouco mais sobre você (mín. 15 caracteres)"),
  senha: z.string().min(8, "A senha precisa ter no mínimo 8 caracteres"),
  confirmarSenha: z.string()
}).refine((dados) => dados.senha === dados.confirmarSenha, {
  message: "As senhas não coincidem",
  path: ["confirmarSenha"],
});

type CadastroPrestadorInputs = z.infer<typeof cadastroPrestadorSchema>;

export function CadastroPrestador() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();

  // INICIANDO O REACT HOOK FORM
  const { register, handleSubmit, formState: { errors } } = useForm<CadastroPrestadorInputs>({
    resolver: zodResolver(cadastroPrestadorSchema)
  });

  // FUNÇÃO ASSÍNCRONA PARA A API
  const onSubmitCadastro = async (dados: CadastroPrestadorInputs) => {
    setIsLoading(true);

    try {
      const resposta = await fetch("http://localhost:3000/api/prestadores/cadastro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });

      if (!resposta.ok) throw new Error("Erro ao cadastrar");

      navigate("/conta-criada/prestador");
      
    } catch (error) {
      console.error("Erro na API:", error);
      alert("Houve um problema de conexão. Tente novamente.");
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
        <div className="flex bg-gray-100 p-1 rounded-lg mb-6">
          <Link to="/cadastro/cliente" className="flex-1 text-center py-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition">
            Sou Cliente
          </Link>
          <Link to="/cadastro/prestador" className="flex-1 text-center py-2 text-sm font-medium bg-white text-[#00A63E] rounded-md shadow-sm">
            Sou Prestador
          </Link>
        </div>

        <div className="flex gap-6 border-b border-gray-200 mb-6">
          <Link to="/login/prestador" className="pb-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition">
            Entrar
          </Link>
          <Link to="/cadastro/prestador" className="pb-2 text-sm font-medium text-[#00A63E] border-b-2 border-[#00A63E]">
            Criar Conta
          </Link>
        </div>

        {/* FORMULÁRIO BLINDADO */}
        <form className="space-y-4" onSubmit={handleSubmit(onSubmitCadastro)}>
          
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700">Nome Completo</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input type="text" placeholder="Seu nome" {...register("nome")} className={`pl-10 ${errors.nome ? "border-red-500 focus-visible:ring-red-500" : ""}`} />
            </div>
            {errors.nome && <p className="text-red-500 text-xs mt-1">{errors.nome.message}</p>}
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700">E-mail</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input type="email" placeholder="seu@email.com" {...register("email")} className={`pl-10 ${errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}`} />
            </div>
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700">Telefone</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input type="text" placeholder="(00) 00000-0000" {...register("telefone")} className={`pl-10 ${errors.telefone ? "border-red-500 focus-visible:ring-red-500" : ""}`} />
            </div>
            {errors.telefone && <p className="text-red-500 text-xs mt-1">{errors.telefone.message}</p>}
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700">Cidade</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input type="text" placeholder="Sua cidade" {...register("cidade")} className={`pl-10 ${errors.cidade ? "border-red-500 focus-visible:ring-red-500" : ""}`} />
            </div>
            {errors.cidade && <p className="text-red-500 text-xs mt-1">{errors.cidade.message}</p>}
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700">Especialidade</label>
            <div className="relative">
              <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input type="text" placeholder="Sua especialidade" {...register("especialidade")} className={`pl-10 ${errors.especialidade ? "border-red-500 focus-visible:ring-red-500" : ""}`} />
            </div>
            {errors.especialidade && <p className="text-red-500 text-xs mt-1">{errors.especialidade.message}</p>}
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700">Sobre Você</label>
            <div className="relative">
              <Textarea placeholder="Conte mais sobre suas experiências com plantas." {...register("sobre")} className={`resize-none h-24 ${errors.sobre ? "border-red-500 focus-visible:ring-red-500" : ""}`} />
            </div>
            {errors.sobre && <p className="text-red-500 text-xs mt-1">{errors.sobre.message}</p>}
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700">Senha</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input type={showPassword ? "text" : "password"} placeholder="••••••••" {...register("senha")} className={`pl-10 pr-10 ${errors.senha ? "border-red-500 focus-visible:ring-red-500" : ""}`} />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {errors.senha && <p className="text-red-500 text-xs mt-1">{errors.senha.message}</p>}
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-700">Confirme a Senha</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input type={showConfirmPassword ? "text" : "password"} placeholder="••••••••" {...register("confirmarSenha")} className={`pl-10 pr-10 ${errors.confirmarSenha ? "border-red-500 focus-visible:ring-red-500" : ""}`} />
              <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {errors.confirmarSenha && <p className="text-red-500 text-xs mt-1">{errors.confirmarSenha.message}</p>}
          </div>

          <Button type="submit" disabled={isLoading} className={`w-full py-6 text-base font-medium rounded-lg transition-colors ${isLoading ? 'bg-gray-400 cursor-not-allowed text-white' : 'bg-[#00A63E] hover:bg-green-700 text-white'}`}>
            {isLoading ? "Criando Conta..." : "Criar Conta Profissional"}
          </Button>
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