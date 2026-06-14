import { useState, useEffect } from "react";
import { AdminLayout } from "../../layout/AdminLayout";
import { Search, MoreVertical, CheckCircle, Ban } from "lucide-react";
import { api } from "../../services/api";

interface Cliente {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  status: "Ativo" | "Bloqueado";
  dataCadastro: string;
}

const mockClientes: Cliente[] = [
  { id: "1", nome: "João Silva", email: "joao@email.com", telefone: "(11) 98765-4321", status: "Ativo", dataCadastro: "10/05/2026" },
  { id: "2", nome: "Maria Oliveira", email: "maria@email.com", telefone: "(11) 91234-5678", status: "Ativo", dataCadastro: "12/05/2026" },
  { id: "3", nome: "Carlos Souza", email: "carlos@email.com", telefone: "(21) 99999-8888", status: "Bloqueado", dataCadastro: "14/05/2026" },
];

export function AdminClientes() {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [termoBusca, setTermoBusca] = useState("");

  useEffect(() => {
    async function carregarClientes() {
      try {
        setIsLoading(true);
        const resposta = await api.get('/admin/clientes');
        setClientes(resposta.data);
      } catch (error) {
        console.warn("API offline. Usando mock de clientes.");
        setClientes(mockClientes);
      } finally {
        setIsLoading(false);
      }
    }
    carregarClientes();
  }, []);

  const clientesFiltrados = clientes.filter(c => 
    c.nome.toLowerCase().includes(termoBusca.toLowerCase()) || 
    c.email.toLowerCase().includes(termoBusca.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="max-w-7xl mx-auto font-sans">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-[#364153]">Gestão de Clientes</h1>
            <p className="text-sm text-[#99A1AF] mt-1">Gerencie os usuários contratantes da plataforma.</p>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Buscar cliente..." 
              value={termoBusca}
              onChange={(e) => setTermoBusca(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#00A63E]/20 focus:border-[#00A63E] transition-all shadow-sm"
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
                    <th className="px-6 py-4 font-bold">Nome / E-mail</th>
                    <th className="px-6 py-4 font-bold">Telefone</th>
                    <th className="px-6 py-4 font-bold">Data de Cadastro</th>
                    <th className="px-6 py-4 font-bold">Status</th>
                    <th className="px-6 py-4 font-bold text-center">Ações</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {clientesFiltrados.map((cliente) => (
                    <tr key={cliente.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-bold text-[#364153]">{cliente.nome}</div>
                        <div className="text-xs text-gray-500">{cliente.email}</div>
                      </td>
                      <td className="px-6 py-4">{cliente.telefone}</td>
                      <td className="px-6 py-4">{cliente.dataCadastro}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${
                          cliente.status === 'Ativo' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {cliente.status === 'Ativo' ? <CheckCircle className="w-3 h-3" /> : <Ban className="w-3 h-3" />}
                          {cliente.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button className="p-2 text-gray-400 hover:text-[#364153] rounded-lg hover:bg-gray-100 transition-colors">
                          <MoreVertical className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {clientesFiltrados.length === 0 && (
                    <tr>
                      <td colSpan={5} className="px-6 py-12 text-center text-gray-500">Nenhum cliente encontrado.</td>
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