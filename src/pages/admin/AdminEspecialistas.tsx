import { useState, useEffect } from "react";
import { AdminLayout } from "../../layout/AdminLayout";
import { Search, MoreVertical, Star, ShieldCheck, Clock } from "lucide-react";
import { api } from "../../services/api";

interface Especialista {
  id: string;
  nome: string;
  especialidade: string;
  status: "Pendente" | "Aprovado" | "Bloqueado";
  avaliacao: number;
}

const mockEspecialistas: Especialista[] = [
  { id: "1", nome: "Mariana Costa", especialidade: "Plantas Tropicais", status: "Aprovado", avaliacao: 5.0 },
  { id: "2", nome: "Carlos Silva", especialidade: "Suculentas", status: "Aprovado", avaliacao: 4.8 },
  { id: "3", nome: "Ana Santos", especialidade: "Bonsai", status: "Pendente", avaliacao: 0 },
];

export function AdminEspecialistas() {
  const [especialistas, setEspecialistas] = useState<Especialista[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [termoBusca, setTermoBusca] = useState("");

  useEffect(() => {
    async function carregarEspecialistas() {
      try {
        setIsLoading(true);
        const resposta = await api.get('/admin/especialistas');
        setEspecialistas(resposta.data);
      } catch (error) {
        console.warn("API offline. Usando mock de especialistas.");
        setEspecialistas(mockEspecialistas);
      } finally {
        setIsLoading(false);
      }
    }
    carregarEspecialistas();
  }, []);

  const especialistasFiltrados = especialistas.filter(e => 
    e.nome.toLowerCase().includes(termoBusca.toLowerCase()) || 
    e.especialidade.toLowerCase().includes(termoBusca.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto font-sans">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-[#364153]">Gestão de Especialistas</h1>
            <p className="text-sm text-[#99A1AF] mt-1">Aprove ou bloqueie perfis de prestadores.</p>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Buscar prestador..." 
              value={termoBusca}
              onChange={(e) => setTermoBusca(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00A63E]/20 transition-all shadow-sm"
            />
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#00A63E]"></div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-600">
                <thead className="bg-gray-50 border-b border-gray-200 text-gray-700">
                  <tr>
                    <th className="px-6 py-4 font-bold">Especialista</th>
                    <th className="px-6 py-4 font-bold">Nota</th>
                    <th className="px-6 py-4 font-bold">Status</th>
                    <th className="px-6 py-4 font-bold text-center">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {especialistasFiltrados.map((esp) => (
                    <tr key={esp.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-bold text-[#364153]">{esp.nome}</div>
                        <div className="text-xs text-gray-500">{esp.especialidade}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1 font-bold text-[#364153]">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          {esp.avaliacao > 0 ? esp.avaliacao.toFixed(1) : "N/A"}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${
                          esp.status === 'Aprovado' ? 'bg-green-100 text-green-700' : 
                          esp.status === 'Pendente' ? 'bg-yellow-100 text-yellow-700' : 
                          'bg-red-100 text-red-700'
                        }`}>
                          {esp.status === 'Aprovado' && <ShieldCheck className="w-3 h-3" />}
                          {esp.status === 'Pendente' && <Clock className="w-3 h-3" />}
                          {esp.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button className="p-2 text-gray-400 hover:text-[#364153] rounded-lg hover:bg-gray-100 transition-colors">
                          <MoreVertical className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {especialistasFiltrados.length === 0 && (
                    <tr>
                      <td colSpan={4} className="px-6 py-12 text-center text-gray-500">Nenhum especialista encontrado.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}