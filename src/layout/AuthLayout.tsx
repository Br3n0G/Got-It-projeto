import type { ReactNode } from "react";
import { Check } from "lucide-react";
import { Logo } from "../components/Logo"; // Reaproveitando a logo do seu grupo!

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  features: { title: string; desc: string }[];
  testimonial: { quote: string };
  children: ReactNode; // Aqui entra o formulário específico de cada tela
}

export function AuthLayout({ title, subtitle, features, testimonial, children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex w-full bg-[#F9FAFB]" style={{ fontFamily: "Inter, sans-serif" }}>
      
      {/* =========================================================================
          LADO ESQUERDO: Painel Verde Dinâmico (Fixo para as 4 telas)
          ========================================================================= */}
      <div 
        className="hidden lg:flex w-5/12 text-white p-12 flex-col relative overflow-hidden shrink-0"
        style={{ backgroundImage: "linear-gradient(125.205deg, rgb(0, 166, 62) 0%, rgb(0, 122, 85) 100%)" }}
      >
        {/* Círculos decorativos do fundo verde idênticos aos que você usou em PedidosAtivos */}
        <div className="absolute bg-white opacity-10 rounded-full w-96 h-96" style={{ top: "-192px", left: "-192px" }} />
        <div className="absolute bg-white opacity-10 rounded-full w-96 h-96" style={{ bottom: "-192px", right: "-96px" }} />
        
        {/* Logo do seu grupo (em versão branca) */}
        <div className="relative z-10 mb-16">
          <Logo light={true} />
        </div>

        {/* Textos Principais do Figma */}
        <div className="relative z-10 mb-12">
          <h1 className="text-4xl font-bold leading-tight mb-4 tracking-[-0.44px]">{title}</h1>
          <p className="text-[#E5F6EB] text-lg leading-relaxed font-normal">{subtitle}</p>
        </div>

        {/* Lista de Benefícios (Bullets com Check) */}
        <div className="space-y-8 relative z-10 flex-1">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4">
              <div className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-1 text-white">
                <Check size={14} strokeWidth={3} />
              </div>
              <div>
                <h3 className="font-semibold text-lg leading-6">{feature.title}</h3>
                <p className="text-[#E5F6EB] text-sm mt-1 leading-relaxed font-normal">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testemunho (Card Translúcido do final da tela) */}
        <div className="relative z-10 mt-auto w-full">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-2xl">
             <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white rounded-full shrink-0" />
                <div className="space-y-2 flex-1">
                  <div className="w-24 h-2 bg-white/40 rounded-full" />
                  <div className="w-16 h-2 bg-white/20 rounded-full" />
                </div>
             </div>
             <p className="italic text-[#E5F6EB] text-sm leading-relaxed font-normal">
               "{testimonial.quote}"
             </p>
          </div>
        </div>
      </div>

      {/* =========================================================================
          LADO DIREITO: Área Branca dos Formulários (Muda o conteúdo)
          ========================================================================= */}
      <div className="w-full lg:w-7/12 flex flex-col justify-center items-center p-6 sm:p-12 overflow-y-auto">
        <div className="w-full max-w-[460px]">
          {children} 
        </div>
      </div>

    </div>
  );
}