import { useState } from "react";
import { AdminLayout } from "../../layout/AdminLayout";
import { 
  Search, 
  Filter, 
  MoreVertical, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  Calendar
} from "lucide-react";

// 1. MOCK DE DADOS (Simulando a tabela 'contratos' do  MySQL)
const contratosMock = [
  {
    id: "ACT-9082",
    data: "14 Jan 2026",
    titulo: "Cuidados Mensais - Bonsai",
    valor: "R$ 150,00",
    status: "Em Andamento",
    cliente: "Lucas Fernandes",
    clienteIniciais: "LF",
    clienteCor: "bg-blue-100 text-blue-600",
    especialista: "Ana Souza",
    especialistaIniciais: "AS",
    especialistaCor: "bg-green-100 text-[#00A63E]",
  },
  {
    id: "ACT-9075",
    data: "12 Jan 2026",
    titulo: "Horta Vertical",
    valor: "R$ 220,00",
    status: "Em Disputa",
    cliente: "Camila Duarte",
    clienteIniciais: "CD",
    clienteCor: "bg-purple-100 text-purple-600",
    especialista: "Carlos Mendes",
    especialistaIniciais: "CM",
    especialistaCor: "bg-green-100 text-[#00A63E]",
  },
  {
    id: "ACT-9060",
    data: "10 Jan 2026",
    titulo: "Paisagismo Interno",
    valor: "R$ 450,00",
    status: "Concluído",
    cliente: "Pedro Gomes",
    clienteIniciais: "PG",
    clienteCor: "bg-blue-100 text-blue-600",
    especialista: "Carlos Mendes",
    especialistaIniciais: "CM",
    especialistaCor: "bg-green-100 text-[#00A63E]",
  },
  {
    id: "ACT-9055",
    data: "08 Jan 2026",
    titulo: "Visita Técnica - Samambaia",
    valor: "R$ 85,00",
    status: "Em Andamento",
    cliente: "Juliana Costa",
    clienteIniciais: "JC",
    clienteCor: "bg-blue-100 text-blue-600",
    especialista: "Ana Souza",
    especialistaIniciais: "AS",
    especialistaCor: "bg-green-100 text-[#00A63E]",
  },
  {
    id: "ACT-9042",
    data: "05 Jan 2026",
    titulo: "Revitalização de Varanda",
    valor: "R$ 310,00",
    status: "Concluído",
    cliente: "Renata Lins",
    clienteIniciais: "RL",
    clienteCor: "bg-blue-100 text-blue-600",
    especialista: "Mariana Costa",
    especialistaIniciais: "MC",
    especialistaCor: "bg-green-100 text-[#00A63E]",
  }
];

export function AdminContratos() {
  // Estado para controlar qual aba está ativa
  const [abaAtiva, setAbaAtiva] = useState("Todos os Contratos");

  // Lógica de filtragem baseada na aba selecionada
  const contratosFiltrados = contratosMock.filter(contrato => {
    if (abaAtiva === "Todos os Contratos") return true;
    return contrato.status === abaAtiva;
  });

  // Função para definir as cores das tags de status
  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Em Andamento": return "bg-blue-50 text-blue-600 border-blue-100";
      case "Concluído": return "bg-green-50 text-[#00A63E] border-green-100";
      case "Em Disputa": return "bg-red-50 text-red-600 border-red-100";
      default: return "bg-gray-50 text-gray-600 border-gray-100";
    }
  };

  // Função para retornar o ícone correto do status
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Em Andamento": return <Clock className="w-3 h-3" />;
      case "Concluído": return <CheckCircle2 className="w-3 h-3" />;
      case "Em Disputa": return <AlertCircle className="w-3 h-3" />;
      default: return null;
    }
  };

  const abas = ["Todos os Contratos", "Em Andamento", "Concluído", "Em Disputa"];

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto space-y-6 font-sans">
        
        {/* HEADER E BUSCA */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-2">
          <div>
            <h1 className="text-2xl font-bold text-[#364153]">Monitoramento de Serviços & Contratos</h1>
            <p className="text-sm text-[#99A1AF] mt-1">Acompanhe e gerencie todos os acordos ativos na plataforma.</p>
          </div>
          
          <div className="flex items-center gap-3 w-full lg:w-auto">
            <div className="relative flex-1 lg:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#99A1AF]" />
              <input 
                type="text" 
                placeholder="Buscar contrato, cliente ou especialista..." 
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E5E7EB] text-sm focus:outline-none focus:border-[#00A63E] transition-all"
              />
            </div>
            <button className="p-2.5 bg-white border border-[#E5E7EB] rounded-xl text-[#364153] hover:bg-gray-50 transition-colors">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* TABS (ABAS) */}
        <div className="flex border-b border-[#E5E7EB] gap-8 mb-6 overflow-x-auto scrollbar-hide">
          {abas.map((aba) => (
            <button
              key={aba}
              onClick={() => setAbaAtiva(aba)}
              className={`pb-4 text-sm font-bold transition-all relative whitespace-nowrap ${
                abaAtiva === aba ? "text-[#00A63E]" : "text-[#99A1AF] hover:text-[#364153]"
              }`}
            >
              {aba}
              {abaAtiva === aba && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00A63E] rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* GRID DE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {contratosFiltrados.map((contrato) => (
            <div key={contrato.id} className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm hover:shadow-md transition-all p-5 flex flex-col group">
              
              {/* Header do Card */}
              <div className="flex justify-between items-start mb-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#364153]">{contrato.id}</span>
                  <div className="flex items-center gap-1.5 text-[10px] text-[#99A1AF]">
                    <Calendar className="w-3 h-3" />
                    {contrato.data}
                  </div>
                </div>
                <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold border ${getStatusStyle(contrato.status)}`}>
                  {getStatusIcon(contrato.status)}
                  {contrato.status.toUpperCase()}
                </div>
              </div>

              {/* Título e Valor */}
              <div className="mb-6">
                <h3 className="text-sm font-bold text-[#364153] mb-1">{contrato.titulo}</h3>
                <span className="text-xl font-bold text-[#00A63E]">{contrato.valor}</span>
              </div>

              {/* Envolvidos (Cliente e Especialista) */}
              <div className="space-y-3 pt-4 border-t border-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold ${contrato.clienteCor}`}>
                      {contrato.clienteIniciais}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-[#99A1AF] uppercase font-bold tracking-tighter">Cliente</span>
                      <span className="text-xs font-bold text-[#364153]">{contrato.cliente}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-right">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-[#99A1AF] uppercase font-bold tracking-tighter">Especialista</span>
                      <span className="text-xs font-bold text-[#364153]">{contrato.especialista}</span>
                    </div>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold ${contrato.especialistaCor}`}>
                      {contrato.especialistaIniciais}
                    </div>
                  </div>
                </div>
              </div>

              {/* Botões de Ação */}
              <div className="flex items-center gap-2 mt-6">
                <button className="flex-1 py-2.5 text-[#00A63E] text-xs font-bold border border-[#00A63E] rounded-xl hover:bg-[#00A63E]/5 transition-colors">
                  Ver Detalhes
                </button>
                <button className="p-2.5 text-[#99A1AF] hover:text-[#364153] border border-gray-100 rounded-xl transition-colors">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Mensagem caso não haja contratos */}
        {contratosFiltrados.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
            <p className="text-[#99A1AF]">Nenhum contrato encontrado nesta categoria.</p>
          </div>
        )}

      </div>
    </AdminLayout>
  );
}