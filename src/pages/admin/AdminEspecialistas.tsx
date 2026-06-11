import { AdminLayout } from "../../layout/AdminLayout";
import { Search, Filter, Eye, MoreVertical, CheckCircle, XCircle } from "lucide-react";

// Simulando os dados idênticos ao seu design do Figma
const especialistasMock = [
  {
    id: "1",
    nome: "Carlos Mendes",
    email: "carlos.m@email.com",
    iniciais: "C",
    corPerfil: "bg-green-100 text-[#00A63E]",
    especialidade: "Paisagismo e Jardins",
    dataCadastro: "13 Abr 2026",
    status: "Aguardando",
  },
  {
    id: "2",
    nome: "Ana Souza",
    email: "ana.s@email.com",
    iniciais: "A",
    corPerfil: "bg-green-100 text-[#00A63E]",
    especialidade: "Cuidados com Bonsais",
    dataCadastro: "12 Abr 2026",
    status: "Aprovado",
  },
  {
    id: "3",
    nome: "Roberto Silva",
    email: "roberto.s@email.com",
    iniciais: "R",
    corPerfil: "bg-green-100 text-[#00A63E]",
    especialidade: "Hortas Urbanas",
    dataCadastro: "10 Abr 2026",
    status: "Rejeitado",
  },
  {
    id: "4",
    nome: "Mariana Costa",
    email: "mari.costa@email.com",
    iniciais: "M",
    corPerfil: "bg-green-100 text-[#00A63E]",
    especialidade: "Plantas de Interior",
    dataCadastro: "09 Abr 2026",
    status: "Aguardando",
  },
  {
    id: "5",
    nome: "Julio Batista",
    email: "julio.b@email.com",
    iniciais: "J",
    corPerfil: "bg-green-100 text-[#00A63E]",
    especialidade: "Paisagismo e Jardins",
    dataCadastro: "08 Abr 2026",
    status: "Aprovado",
  },
];

export function AdminEspecialistas() {
  
  // Função auxiliar para pintar a tag de status com a cor correta
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Aprovado":
        return "bg-green-100 text-[#00A63E]";
      case "Aguardando":
        return "bg-orange-100 text-orange-500";
      case "Rejeitado":
        return "bg-red-100 text-red-500";
      default:
        return "bg-gray-100 text-gray-500";
    }
  };

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Cabeçalho e Barra de Busca */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-[#364153]">Gestão de Especialistas</h1>
            <p className="text-sm text-[#99A1AF] mt-1">
              Aprove novos cuidadores de plantas e gerencie o fluxo KYC.
            </p>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#99A1AF]" />
              <input 
                type="text" 
                placeholder="Buscar pelo nome..." 
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
                  <th className="text-xs font-bold text-[#99A1AF] uppercase tracking-wider py-4 px-6 border-b border-[#E5E7EB]">Perfil / Nome</th>
                  <th className="text-xs font-bold text-[#99A1AF] uppercase tracking-wider py-4 px-6 border-b border-[#E5E7EB]">Especialidade</th>
                  <th className="text-xs font-bold text-[#99A1AF] uppercase tracking-wider py-4 px-6 border-b border-[#E5E7EB]">Data do Cadastro</th>
                  <th className="text-xs font-bold text-[#99A1AF] uppercase tracking-wider py-4 px-6 border-b border-[#E5E7EB]">Status</th>
                  <th className="text-xs font-bold text-[#99A1AF] uppercase tracking-wider py-4 px-6 border-b border-[#E5E7EB] text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                {especialistasMock.map((especialista) => (
                  <tr key={especialista.id} className="hover:bg-gray-50 transition-colors">
                    
                    {/* Coluna 1: Perfil / Nome */}
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${especialista.corPerfil}`}>
                          {especialista.iniciais}
                        </div>
                        <div>
                          <span className="font-bold text-[#364153] text-sm block">{especialista.nome}</span>
                          <span className="text-xs text-[#99A1AF]">{especialista.email}</span>
                        </div>
                      </div>
                    </td>

                    {/* Coluna 2: Especialidade */}
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-[#364153]">
                        {especialista.especialidade}
                      </span>
                    </td>

                    {/* Coluna 3: Data */}
                    <td className="py-4 px-6">
                      <span className="text-sm text-[#364153]">{especialista.dataCadastro}</span>
                    </td>

                    {/* Coluna 4: Status Dinâmico */}
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${getStatusColor(especialista.status)}`}>
                        {especialista.status}
                      </span>
                    </td>

                    {/* Coluna 5: Ações Dinâmicas baseadas no Status */}
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-end gap-2">
                        {/* Se estiver aguardando, mostra botões de aprovar/rejeitar rápido */}
                        {especialista.status === "Aguardando" ? (
                          <>
                            <button className="p-1.5 text-green-600 hover:bg-green-50 rounded transition-colors" title="Aprovar">
                              <CheckCircle className="w-5 h-5" />
                            </button>
                            <button className="p-1.5 text-red-500 hover:bg-red-50 rounded transition-colors" title="Rejeitar">
                              <XCircle className="w-5 h-5" />
                            </button>
                          </>
                        ) : (
                          /* Se já foi decidido, mostra botão de ver perfil */
                          <button className="flex items-center gap-1.5 px-3 py-1.5 border border-[#E5E7EB] rounded-lg text-xs font-medium text-[#364153] hover:bg-gray-100 transition-colors">
                            <Eye className="w-3.5 h-3.5 text-[#99A1AF]" />
                            Ver Perfil
                          </button>
                        )}
                        
                        <button className="text-[#99A1AF] hover:text-[#364153] transition-colors p-1 ml-1">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Rodapé da Tabela */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-[#E5E7EB] bg-gray-50/50">
            <span className="text-sm text-[#99A1AF]">
              Mostrando 5 de 42 aguardando
            </span>
            <div className="flex gap-2">
              <button className="px-4 py-2 border border-[#E5E7EB] bg-white rounded-lg text-sm font-medium text-[#99A1AF] hover:bg-gray-50 transition-colors cursor-not-allowed">
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