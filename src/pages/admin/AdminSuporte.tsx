import { AdminLayout } from "../../layout/AdminLayout";
import { Link } from "react-router-dom";
import { LayoutGrid, ArrowLeft } from "lucide-react";

export function AdminSuporte() {
  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto h-full flex flex-col font-sans">
        
        {/* CABEÇALHO */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[#364153]">Suporte ao Cliente</h1>
          <p className="text-sm text-[#99A1AF] mt-1">Atendimento e resolução de disputas.</p>
        </div>

        {/* ÁREA CENTRALIZADA DE "EM DESENVOLVIMENTO" */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
          
          {/* Ícone de Módulo (Grid) conforme o Figma */}
          <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center text-[#99A1AF] mb-8">
            <LayoutGrid className="w-10 h-10" />
          </div>

          <h2 className="text-2xl font-bold text-[#364153] mb-4">
            Módulo em Desenvolvimento
          </h2>
          
          <p className="text-sm text-[#99A1AF] max-w-sm leading-relaxed mb-10">
            Esta tela está na fila para ser implementada nas próximas iterações. 
            Volte para o painel inicial para continuar navegando.
          </p>

          {/* Botão de Retorno */}
          <Link 
            to="/admin" 
            className="flex items-center gap-2 px-8 py-3 bg-[#00A63E] hover:bg-[#00A63E]/90 text-white text-sm font-bold rounded-xl transition-all shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao Painel Inicial
          </Link>

        </div>
      </div>
    </AdminLayout>
  );
}