import { AdminLayout } from "../../layout/AdminLayout";
import { 
  Download, 
  Wallet, 
  DollarSign, 
  CreditCard, 
  ArrowUpRight, 
  ArrowDownLeft,
  Filter,
  Calendar
} from "lucide-react";

// MOCK: Lista lateral de repasses a liberar
const repassesMock = [
  {
    id: 1,
    nome: "Roberto Silva",
    especialidade: "Paisagismo Interno",
    valor: "R$ 450,00",
    data: "Hoje",
    urgente: true
  },
  {
    id: 2,
    nome: "Mariana Costa",
    especialidade: "Revitalização",
    valor: "R$ 210,00",
    data: "Amanhã",
    urgente: true
  },
  {
    id: 3,
    nome: "Ana Souza",
    especialidade: "Cuidados Bonsai",
    valor: "R$ 150,00",
    data: "16 Abr 2026",
    urgente: false
  }
];

// MOCK: Tabela de histórico de transações
const transacoesMock = [
  {
    id: "TX-19028",
    data: "14/04/2026",
    contrato: "#CT-9082",
    valorTotal: "R$ 150.00",
    taxa: "+ R$ 22.50",
    liquido: "R$ 127.50",
    status: "LIQUIDADO"
  },
  {
    id: "TX-19027",
    data: "13/04/2026",
    contrato: "#CT-9075",
    valorTotal: "R$ 300.00",
    taxa: "+ R$ 45.00",
    liquido: "R$ 255.00",
    status: "LIQUIDADO"
  },
  {
    id: "TX-19026",
    data: "12/04/2026",
    contrato: "#CT-9060",
    valorTotal: "R$ 450.00",
    taxa: "+ R$ 67.50",
    liquido: "R$ 382.50",
    status: "PENDENTE"
  },
  {
    id: "TX-19025",
    data: "11/04/2026",
    contrato: "#CT-9055",
    valorTotal: "R$ 85.00",
    taxa: "+ R$ 12.75",
    liquido: "R$ 72.25",
    status: "LIQUIDADO"
  },
  {
    id: "TX-19024",
    data: "10/04/2026",
    contrato: "#CT-9042",
    valorTotal: "R$ 500.00",
    taxa: "+ R$ 75.00",
    liquido: "R$ 425.00",
    status: "CANCELADO"
  }
];

export function AdminPagamentos() {
  
  // Função para as cores das tags de status
  const getStatusStyle = (status: string) => {
    switch (status) {
      case "LIQUIDADO": return "bg-green-100 text-[#00A63E]";
      case "PENDENTE": return "bg-orange-100 text-[#FE9A00]";
      case "CANCELADO": return "bg-red-100 text-red-500";
      default: return "bg-gray-100 text-gray-500";
    }
  };

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto space-y-6 font-sans">
        
        {/* CABEÇALHO */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-2">
          <div>
            <h1 className="text-2xl font-bold text-[#364153]">Controle Financeiro</h1>
            <p className="text-sm text-[#99A1AF] mt-1">
              Gerencie repasses aos especialistas, histórico de transações e taxas da plataforma.
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E5E7EB] rounded-lg text-sm font-medium text-[#364153] hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4 text-[#99A1AF]" />
            Exportar Relatório
          </button>
        </div>

        {/* 3 CARDS SUPERIORES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card Escuro - Saldo */}
          <div className="bg-[#364153] p-6 rounded-2xl shadow-sm relative overflow-hidden">
            <div className="flex justify-between items-start mb-4 relative z-10">
              <span className="text-xs font-bold text-gray-300 tracking-wider">SALDO DISPONÍVEL (PLATAFORMA)</span>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                <Wallet className="w-4 h-4" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2 relative z-10">R$ 125.430,50</h2>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#00A63E]/20 rounded-md text-[#00A63E] text-xs font-bold relative z-10">
              <ArrowUpRight className="w-3.5 h-3.5" /> Fluxo Positivo
            </div>
          </div>

          {/* Card Receita */}
          <div className="bg-white p-6 rounded-2xl border border-[#E5E7EB] shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-bold text-[#99A1AF] tracking-wider">RECEITA (TAXA 15%)</span>
              <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-[#00A63E]">
                <DollarSign className="w-4 h-4" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-[#00A63E] mb-2">R$ 45.200,00</h2>
            <p className="text-xs text-[#99A1AF]">Acumulado deste mês</p>
          </div>

          {/* Card Repasses */}
          <div className="bg-white p-6 rounded-2xl border border-[#E5E7EB] shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-bold text-[#99A1AF] tracking-wider">REPASSES PENDENTES</span>
              <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-[#FE9A00]">
                <CreditCard className="w-4 h-4" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-[#364153] mb-2">R$ 14.500,00</h2>
            <p className="text-xs text-[#FE9A00] font-medium">Para 12 especialistas</p>
          </div>

        </div>

        {/* ESTRUTURA INFERIOR: Repasses (1/3) e Tabela (2/3) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* COLUNA ESQUERDA: Repasses a Liberar */}
          <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm p-6 lg:col-span-1 flex flex-col">
            
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-lg font-bold text-[#364153]">Repasses a Liberar</h3>
                <p className="text-sm text-[#99A1AF]">Próximos pagamentos</p>
              </div>
              <span className="px-2.5 py-1 bg-orange-50 text-[#FE9A00] text-[10px] font-bold rounded-md">
                3 pendentes
              </span>
            </div>

            <div className="space-y-4 flex-1">
              {repassesMock.map((rep) => (
                <div key={rep.id} className="p-4 border border-[#E5E7EB] rounded-xl hover:border-[#00A63E] transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-sm font-bold text-[#364153]">{rep.nome}</h4>
                      <p className="text-xs text-[#99A1AF]">{rep.especialidade}</p>
                    </div>
                    <span className="font-bold text-[#364153]">{rep.valor}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className={`flex items-center gap-1.5 text-xs font-bold ${rep.urgente ? 'text-[#FE9A00]' : 'text-[#99A1AF]'}`}>
                      <Calendar className="w-3.5 h-3.5" />
                      {rep.data}
                    </div>
                    <button className="px-4 py-1.5 bg-[#00A63E]/10 hover:bg-[#00A63E]/20 text-[#00A63E] text-xs font-bold rounded-lg transition-colors">
                      Liberar
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-6 py-3 border border-[#E5E7EB] text-[#364153] text-sm font-medium rounded-xl hover:bg-gray-50 transition-colors">
              Ver todos os repasses
            </button>
          </div>

          {/* COLUNA DIREITA: Histórico de Transações */}
          <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm lg:col-span-2 flex flex-col overflow-hidden">
            
            <div className="p-6 border-b border-[#E5E7EB] flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold text-[#364153]">Histórico de Transações</h3>
                <p className="text-sm text-[#99A1AF]">Entradas e saídas de capital</p>
              </div>
              <button className="text-[#99A1AF] hover:text-[#364153]">
                <Filter className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="text-[10px] font-bold text-[#99A1AF] uppercase py-4 px-6 border-b border-[#E5E7EB]">ID / DATA</th>
                    <th className="text-[10px] font-bold text-[#99A1AF] uppercase py-4 px-6 border-b border-[#E5E7EB]">CONTRATO</th>
                    <th className="text-[10px] font-bold text-[#99A1AF] uppercase py-4 px-6 border-b border-[#E5E7EB]">VALOR TOTAL</th>
                    <th className="text-[10px] font-bold text-[#99A1AF] uppercase py-4 px-6 border-b border-[#E5E7EB]">TAXA (15%)</th>
                    <th className="text-[10px] font-bold text-[#99A1AF] uppercase py-4 px-6 border-b border-[#E5E7EB]">LÍQUIDO ESPECIALISTA</th>
                    <th className="text-[10px] font-bold text-[#99A1AF] uppercase py-4 px-6 border-b border-[#E5E7EB]">STATUS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E7EB]">
                  {transacoesMock.map((trx) => (
                    <tr key={trx.id} className="hover:bg-gray-50 transition-colors">
                      
                      <td className="py-4 px-6">
                        <span className="font-bold text-[#364153] text-xs block">{trx.id}</span>
                        <span className="text-[10px] text-[#99A1AF]">{trx.data}</span>
                      </td>

                      <td className="py-4 px-6">
                        <span className="text-xs font-bold text-[#00A63E] flex items-center gap-1 cursor-pointer hover:underline">
                          {trx.contrato} <ArrowUpRight className="w-3 h-3" />
                        </span>
                      </td>

                      <td className="py-4 px-6">
                        <span className="text-xs font-bold text-[#364153]">{trx.valorTotal}</span>
                      </td>

                      <td className="py-4 px-6">
                        <span className="text-xs font-bold text-[#00A63E]">{trx.taxa}</span>
                      </td>

                      <td className="py-4 px-6">
                        <span className="text-xs font-medium text-[#99A1AF] flex items-center gap-1">
                          <ArrowDownLeft className="w-3 h-3 text-red-400" /> {trx.liquido}
                        </span>
                      </td>

                      <td className="py-4 px-6">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold tracking-wider ${getStatusStyle(trx.status)}`}>
                          {trx.status}
                        </span>
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 border-t border-[#E5E7EB] text-center bg-gray-50/30">
              <button className="text-xs font-bold text-[#364153] hover:text-[#00A63E] transition-colors">
                Carregar mais transações
              </button>
            </div>

          </div>

        </div>

      </div>
    </AdminLayout>
  );
}