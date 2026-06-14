import { useState, useEffect } from "react";
import { AdminLayout } from "../../layout/AdminLayout";
import { Search, MoreVertical, FileText } from "lucide-react";
import { api } from "../../services/api";

interface Contrato {
  id: string;
  cliente: string;
  especialista: string;
  valor: string;
  status: "Em Andamento" | "Finalizado" | "Cancelado";
  data: string;
}

const mockContratos: Contrato[] = [
  { id: "101", cliente: "João Silva", especialista: "Mariana Costa", valor: "R$ 150,00", status: "Em Andamento", data: "14/06/2026" },
  { id: "102", cliente: "Maria Oliveira", especialista: "Carlos Silva", valor: "R$ 80,00", status: "Finalizado", data: "10/06/2026" },
  { id: "103", cliente: "Carlos Souza", especialista: "Ana Santos", valor: "R$ 200,00", status: "Cancelado", data: "05/06/2026" },
];

export function AdminContratos() {
  const [contratos, setContratos] = useState<Contrato[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [termoBusca, setTermoBusca] = useState("");

  useEffect(() => {
    async function carregarContratos() {
      try {
        setIsLoading(true);
        const resposta = await api.get('/admin/contratos');
        setContratos(resposta.data);
      } catch (error) {
        console.warn("API offline. Usando mock de contratos.");
        setContratos(mockContratos);
      } finally {
        setIsLoading(false);
      }
    }
    carregarContratos();
  }, []);

  const contratosFiltrados = contratos.filter(c => 
    c.cliente.toLowerCase().includes(termoBusca.toLowerCase()) || 
    c.especialista.toLowerCase().includes(termoBusca.toLowerCase()) ||
    c.id.includes(termoBusca)
  );

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto font-sans">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-[#364153]">Gestão de Contratos</h1>
            <p className="text-sm text-[#99A1AF] mt-1">Acompanhe todos os serviços em andamento na plataforma.</p>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Buscar por cliente ou ID..." 
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
                    <th className="px-6 py-4 font-bold">ID</th>
                    <th className="px-6 py-4 font-bold">Cliente / Especialista</th>
                    <th className="px-6 py-4 font-bold">Valor</th>
                    <th className="px-6 py-4 font-bold">Status</th>
                    <th className="px-6 py-4 font-bold text-center">Detalhes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {contratosFiltrados.map((contrato) => (
                    <tr key={contrato.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-500">#{contrato.id}</td>
                      <td className="px-6 py-4">
                        <div className="font-bold text-[#364153]">{contrato.cliente}</div>
                        <div className="text-xs text-[#00A63E]">Atendido por: {contrato.especialista}</div>
                      </td>
                      <td className="px-6 py-4 font-bold text-[#364153]">{contrato.valor}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${
                          contrato.status === 'Finalizado' ? 'bg-green-100 text-green-700' : 
                          contrato.status === 'Em Andamento' ? 'bg-blue-100 text-blue-700' : 
                          'bg-red-100 text-red-700'
                        }`}>
                          {contrato.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button className="p-2 text-gray-400 hover:text-[#00A63E] rounded-lg hover:bg-gray-100 transition-colors">
                          <FileText className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {contratosFiltrados.length === 0 && (
                    <tr>
                      <td colSpan={5} className="px-6 py-12 text-center text-gray-500">Nenhum contrato encontrado.</td>
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