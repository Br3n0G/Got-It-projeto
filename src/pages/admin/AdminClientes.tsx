import { AdminLayout } from "../../layout/AdminLayout";
import { Search, Filter, ShieldCheck, MapPin, Eye, MoreVertical } from "lucide-react";

// Simulando os dados que virão do banco de dados
const clientesMock = [
  {
    id: "1",
    nome: "Lucas Fernandes",
    email: "lucas.f@email.com",
    iniciais: "L",
    cor: "bg-blue-100 text-blue-600",
    localizacao: "São Paulo, SP",
    dataCadastro: "14 Jan 2026",
    valorGasto: "R$ 2450.00",
    servicos: 12,
    status: "Ativo",
    verificado: true,
  },
  {
    id: "2",
    nome: "Camila Duarte",
    email: "camila.d@email.com",
    iniciais: "C",
    cor: "bg-purple-100 text-purple-600",
    localizacao: "Rio de Janeiro, RJ",
    dataCadastro: "22 Fev 2026",
    valorGasto: "R$ 1820.00",
    servicos: 8,
    status: "Ativo",
    verificado: false,
  },
  {
    id: "3",
    nome: "Pedro Gomes",
    email: "pedro.gomes@email.com",
    iniciais: "P",
    cor: "bg-blue-100 text-blue-600",
    localizacao: "Curitiba, PR",
    dataCadastro: "05 Mar 2026",
    valorGasto: "R$ 450.00",
    servicos: 2,
    status: "Suspenso",
    verificado: true,
  },
  {
    id: "4",
    nome: "Juliana Costa",
    email: "juh.costa@email.com",
    iniciais: "J",
    cor: "bg-blue-100 text-blue-600",
    localizacao: "Belo Horizonte, MG",
    dataCadastro: "10 Mai 2026",
    valorGasto: "R$ 3100.00",
    servicos: 16,
    status: "Ativo",
    verificado: true,
  },
  {
    id: "5",
    nome: "Renata Lins",
    email: "renata.l@email.com",
    iniciais: "R",
    cor: "bg-blue-100 text-blue-600",
    localizacao: "Porto Alegre, RS",
    dataCadastro: "01 Abr 2026",
    valorGasto: "R$ 890.00",
    servicos: 4,
    status: "Ativo",
    verificado: true,
  },
];

export function AdminClientes() {
  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Cabeçalho e Barra de Busca */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-[#364153]">Usuários (Clientes)</h1>
            <p className="text-sm text-[#99A1AF] mt-1">
              Gerencie a base de clientes, monitore atividades e garanta a segurança da plataforma.
            </p>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#99A1AF]" />
              <input 
                type="text" 
                placeholder="Buscar por nome, email ou ID..." 
                className="w-full pl-9 pr-4 py-2 rounded-lg border border-[#E5E7EB] text-sm focus:outline-none focus:border-[#00A63E] focus:ring-1 focus:ring-[#00A63E] transition-all"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#E5E7EB] rounded-lg text-sm font-medium text-[#364153] hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4" />
              Filtros
            </button>
          </div>
        </div>

        {/* Tabela Branca */}
        <div className="bg-white rounded-xl border border-[#E5E7EB] shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="text-xs font-bold text-[#99A1AF] uppercase tracking-wider py-4 px-6 border-b border-[#E5E7EB]">Cliente</th>
                  <th className="text-xs font-bold text-[#99A1AF] uppercase tracking-wider py-4 px-6 border-b border-[#E5E7EB]">Localização / Cadastro</th>
                  <th className="text-xs font-bold text-[#99A1AF] uppercase tracking-wider py-4 px-6 border-b border-[#E5E7EB]">Métricas</th>
                  <th className="text-xs font-bold text-[#99A1AF] uppercase tracking-wider py-4 px-6 border-b border-[#E5E7EB]">Status</th>
                  <th className="text-xs font-bold text-[#99A1AF] uppercase tracking-wider py-4 px-6 border-b border-[#E5E7EB] text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                {clientesMock.map((cliente) => (
                  <tr key={cliente.id} className="hover:bg-gray-50 transition-colors">
                    
                    {/* Coluna 1: Cliente Info */}
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${cliente.cor}`}>
                          {cliente.iniciais}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-[#364153] text-sm">{cliente.nome}</span>
                            {cliente.verificado && <ShieldCheck className="w-4 h-4 text-[#00A63E]" />}
                          </div>
                          <span className="text-xs text-[#99A1AF]">{cliente.email}</span>
                        </div>
                      </div>
                    </td>

                    {/* Coluna 2: Localização */}
                    <td className="py-4 px-6">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1.5 text-sm text-[#364153]">
                          <MapPin className="w-4 h-4 text-[#99A1AF]" />
                          {cliente.localizacao}
                        </div>
                        <span className="text-xs text-[#99A1AF] ml-5">{cliente.dataCadastro}</span>
                      </div>
                    </td>

                    {/* Coluna 3: Métricas */}
                    <td className="py-4 px-6">
                      <div className="flex flex-col gap-0.5">
                        <span className="text-sm font-bold text-[#00A63E]">{cliente.valorGasto}</span>
                        <span className="text-xs text-[#99A1AF]">{cliente.servicos} SERVIÇOS</span>
                      </div>
                    </td>

                    {/* Coluna 4: Status */}
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${
                        cliente.status === "Ativo" 
                          ? "bg-green-100 text-[#00A63E]" 
                          : "bg-red-100 text-red-600"
                      }`}>
                        {cliente.status.toUpperCase()}
                      </span>
                    </td>

                    {/* Coluna 5: Ações */}
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-end gap-3">
                        <button className="flex items-center gap-1.5 px-3 py-1.5 border border-[#E5E7EB] rounded-lg text-xs font-medium text-[#364153] hover:bg-gray-100 transition-colors">
                          <Eye className="w-3.5 h-3.5 text-[#99A1AF]" />
                          Ver Perfil
                        </button>
                        <button className="text-[#99A1AF] hover:text-[#364153] transition-colors p-1">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Rodapé da Tabela (Paginação) */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-[#E5E7EB] bg-gray-50/50">
            <span className="text-sm text-[#99A1AF]">
              Mostrando 5 de 1.248 usuários
            </span>
            <div className="flex gap-2">
              <button className="px-4 py-2 border border-[#E5E7EB] bg-white rounded-lg text-sm font-medium text-[#99A1AF] hover:bg-gray-50 transition-colors">
                Anterior
              </button>
              <button className="px-4 py-2 border border-[#E5E7EB] bg-white rounded-lg text-sm font-medium text-[#364153] hover:bg-gray-50 transition-colors">
                Próximo
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </AdminLayout>
  );
}