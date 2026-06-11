import { AdminLayout } from "../../layout/AdminLayout";
import { DollarSign, Clock, CheckCircle2, Users } from "lucide-react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";

// Dados simulados para o gráfico
const data = [
  { name: "Jan", total: 35000 },
  { name: "Fev", total: 42000 },
  { name: "Mar", total: 38000 },
  { name: "Abr", total: 48000 },
  { name: "Mai", total: 52000 },
  { name: "Jun", total: 60000 },
  { name: "Jul", total: 75000 },
];

export function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto space-y-6 font-sans">
        
        {/* Cabeçalho da Página */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-[#364153]">Painel Inicial</h1>
            <p className="text-sm text-[#99A1AF] mt-1">Bem-vindo ao centro de comando do Got It!</p>
          </div>
          <div className="flex items-center gap-4 bg-white border border-[#E5E7EB] px-4 py-2 rounded-lg text-sm text-[#99A1AF]">
            Última atualização: Hoje, 10:42
            <button className="text-[#364153] font-medium ml-2 hover:text-[#00A63E]">Atualizar</button>
          </div>
        </div>

        {/* Linha dos 4 Cards Superiores */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white p-6 rounded-xl border border-[#E5E7EB] shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-bold text-[#99A1AF] tracking-wider">RECEITA TOTAL</span>
              <div className="w-8 h-8 rounded-full bg-[#00A63E]/10 flex items-center justify-center text-[#00A63E]">
                <DollarSign className="w-4 h-4" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-[#364153]">R$ 352.000</h2>
            <p className="text-xs font-medium text-[#00A63E] mt-2 flex items-center gap-1">
              ↗ +15.3% <span className="text-[#99A1AF] font-normal">vs mês passado</span>
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E5E7EB] shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-bold text-[#99A1AF] tracking-wider">APROVAÇÕES PENDENTES</span>
              <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                <Clock className="w-4 h-4" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-[#364153]">12</h2>
            <p className="text-xs font-medium text-orange-500 mt-2">Ação necessária</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E5E7EB] shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-bold text-[#99A1AF] tracking-wider">SERVIÇOS ATIVOS</span>
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-[#364153]">842</h2>
            <p className="text-xs font-medium text-[#00A63E] mt-2 flex items-center gap-1">
              ↗ +4.1% <span className="text-[#99A1AF] font-normal">esta semana</span>
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E5E7EB] shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-bold text-[#99A1AF] tracking-wider">CRESCIMENTO DE USUÁRIOS</span>
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-500">
                <Users className="w-4 h-4" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-[#364153]">+24%</h2>
            <p className="text-xs font-medium text-[#00A63E] mt-2 flex items-center gap-1">
              ↗ 1.2k novos <span className="text-[#99A1AF] font-normal">este mês</span>
            </p>
          </div>

        </div>

        {/* Linha Inferior: Gráfico e Atividades Recentes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Gráfico Gigante (Ocupa 2 colunas) */}
          <div className="bg-white p-6 rounded-xl border border-[#E5E7EB] shadow-sm lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-lg font-bold text-[#364153]">Receita ao Longo do Tempo</h3>
                <p className="text-sm text-[#99A1AF]">Comparativo de faturamento (Taxa da plataforma)</p>
              </div>
              <button className="text-[#99A1AF] hover:text-[#364153]">⋮</button>
            </div>
            
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                  <defs>
                    {/* Aqui criamos o degradê verde maravilhoso */}
                    <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00A63E" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#00A63E" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" stroke="#99A1AF" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis 
                    stroke="#99A1AF" 
                    fontSize={12} 
                    tickLine={false} 
                    axisLine={false} 
                    tickFormatter={(value) => `R$ ${value / 1000}k`}
                  />
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="total" 
                    stroke="#00A63E" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorTotal)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Atividades Recentes (Ocupa 1 coluna) */}
          <div className="bg-white p-6 rounded-xl border border-[#E5E7EB] shadow-sm flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-[#364153]">Atividade Recente</h3>
              <button className="text-sm font-bold text-[#00A63E]">Ver tudo</button>
            </div>

            <div className="flex-1 space-y-6">
              
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#364153]">Novo especialista aguardando aprovação</p>
                  <p className="text-xs text-[#99A1AF] mt-0.5">Maria Silva - Cuidadora de Bonsai</p>
                  <p className="text-xs text-[#99A1AF] mt-1">Há 5 min</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-[#00A63E] shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#364153]">Serviço concluído com sucesso</p>
                  <p className="text-xs text-[#99A1AF] mt-0.5">Contrato #8492 - Cliente: João Pedro</p>
                  <p className="text-xs text-[#99A1AF] mt-1">Há 1 hora</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500 shrink-0">
                  <span className="font-bold">!</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#364153]">Disputa aberta pelo cliente</p>
                  <p className="text-xs text-[#99A1AF] mt-0.5">Contrato #8475 - "Plantas não foram regadas"</p>
                  <p className="text-xs text-[#99A1AF] mt-1">Há 2 horas</p>
                </div>
              </div>

            </div>

            <button className="w-full mt-6 py-3 bg-[#F8F9FA] hover:bg-gray-100 text-[#364153] text-sm font-medium rounded-lg border border-[#E5E7EB] transition-colors">
              Carregar mais
            </button>
          </div>

        </div>
      </div>
    </AdminLayout>
  );
}