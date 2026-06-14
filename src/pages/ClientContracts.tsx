import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

import { Layout } from "../components/Layout";
import { api } from "../services/api";

type Contract = {
  id: number;
  title: string;
  price: string;
  provider: string;
  status: "Finalizado" | "Em andamento" | "Cancelado";
};

// O MOCK ATUA COMO NOSSO PLANO B (FALLBACK)
const mockContracts: Contract[] = [
  { id: 1, title: "Manutenção Mensal", price: "R$ 150", provider: "Ana Souza", status: "Finalizado" },
  { id: 2, title: "Consultoria Bonsai", price: "R$ 200", provider: "Carlos Mendes", status: "Em andamento" },
  { id: 3, title: "Poda de Primavera", price: "R$ 120", provider: "Mariana Costa", status: "Finalizado" },
  { id: 4, title: "Instalação de Horta", price: "R$ 450", provider: "Julia Santos", status: "Cancelado" },
  { id: 5, title: "Adubação Especial", price: "R$ 90", provider: "Roberto Alves", status: "Finalizado" },
  { id: 6, title: "Cuidados Férias", price: "R$ 300", provider: "Pedro Oliveira", status: "Em andamento" },
];

function ContractCard({ contract }: { contract: Contract }) {
  return (
    <div className="rounded border border-black/10 bg-white p-3 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex h-44 items-center justify-center bg-gray-100 text-gray-400 rounded-sm">
        <svg
          viewBox="0 0 24 24"
          className="h-16 w-16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        >
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <circle cx="16" cy="9" r="2" />
          <path d="M4 18l5-5 4 4 2-2 5 5" />
        </svg>
      </div>

      <div className="mt-3 text-sm text-gray-800">
        <p className="font-bold text-base">{contract.title}</p>

        <p className="mt-1 text-xs text-gray-500">
          Prestador: <span className="font-medium text-gray-700">{contract.provider}</span>
        </p>

        <div className="mt-3 flex items-center justify-between">
          <strong className="font-black text-[#364153] text-lg">{contract.price}</strong>

          <span
            className={`rounded-full px-2.5 py-1 text-xs font-bold ${
              contract.status === "Finalizado"
                ? "bg-green-100 text-green-700"
                : contract.status === "Em andamento"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-red-100 text-red-700"
            }`}
          >
            {contract.status}
          </span>
        </div>
      </div>
    </div>
  );
}

export function ClientContracts() {
  // 1. ESTADOS DA TELA (Declarados exatamente uma única vez)
  const [contratos, setContratos] = useState<Contract[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [termoBusca, setTermoBusca] = useState("");
  const [ordenacao, setOrdenacao] = useState<"recentes" | "maior_preco" | "menor_preco">("recentes");

  // 2. BUSCA DINÂMICA NA API
  useEffect(() => {
    async function carregarContratos() {
      try {
        setIsLoading(true);
        const resposta = await api.get('/clientes/contratos');
        setContratos(resposta.data);
      } catch (error) {
        console.warn("API offline. Carregando histórico simulado.");
        setContratos(mockContracts);
      } finally {
        setIsLoading(false);
      }
    }

    carregarContratos();
  }, []);

  // 3. FUNÇÃO AUXILIAR PARA PARSE MATEMÁTICO DOS PREÇOS
  const extrairValor = (precoStr: string) => {
    return parseFloat(precoStr.replace("R$ ", "").replace(",", "."));
  };

  // 4. LÓGICA DE FILTRAGEM E ORDENAÇÃO COMBINADAS
  const contratosFiltrados = contratos
    .filter(contract => 
      contract.title.toLowerCase().includes(termoBusca.toLowerCase()) ||
      contract.provider.toLowerCase().includes(termoBusca.toLowerCase())
    )
    .sort((a, b) => {
      if (ordenacao === "maior_preco") return extrairValor(b.price) - extrairValor(a.price);
      if (ordenacao === "menor_preco") return extrairValor(a.price) - extrairValor(b.price);
      return b.id - a.id; // Padrão: Mais recentes (IDs maiores primeiro)
    });

  return (
    <Layout active="Contato">
      <main className="min-h-[900px] bg-white font-sans">
        <section className="bg-soft-panel py-16 text-center border-b border-gray-100">
          <h1 className="text-3xl md:text-4xl font-bold text-[#364153]">
            Histórico de Contratos
          </h1>
          <p className="text-gray-500 mt-2 text-sm">Gerencie seus serviços ativos e finalizados.</p>
        </section>

        <section className="grid gap-8 px-4 py-8 md:grid-cols-[240px_1fr] md:px-11 max-w-7xl mx-auto">
          
          {/* MENU LATERAL DE FILTROS */}
          <aside className="rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm text-gray-700 h-fit">
            <h3 className="mb-4 text-sm font-bold text-[#364153] uppercase tracking-wider">
              Filtros
            </h3>

            <div className="mb-6 space-y-2">
              {["Essa semana", "Esse mês", "Esse ano"].map((item) => (
                <div
                  key={item}
                  className="flex w-fit items-center gap-2 rounded-md bg-white border border-gray-200 px-2.5 py-1.5 text-xs font-medium text-gray-600 shadow-sm"
                >
                  {item}
                  <span className="cursor-pointer hover:text-red-500">×</span>
                </div>
              ))}
            </div>

            <div className="mb-6">
              {["Finalizados", "Em Andamento", "Cancelados"].map((item) => (
                <label key={item} className="mb-3 flex items-start gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="mt-0.5 rounded border-gray-300 text-[#00A63E] focus:ring-[#00A63E]" />
                  <span className="text-sm font-medium text-gray-700">
                    {item}
                  </span>
                </label>
              ))}
            </div>

            <div className="mb-6">
              <div className="mb-2 flex justify-between font-medium">
                <span>Preço</span>
                <span className="text-[#00A63E]">R$0 - R$500</span>
              </div>
              <input type="range" className="w-full accent-[#00A63E]" />
            </div>

            <div className="mb-6">
              <h3 className="mb-3 text-sm font-bold text-[#364153]">Especialização</h3>
              {["Suculentas", "Orquídeas", "Bonsai"].map((item) => (
                <label key={item} className="mb-2 flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded border-gray-300 text-[#00A63E]" />
                  <span className="text-sm text-gray-600">{item}</span>
                </label>
              ))}
            </div>

            <div>
              <h3 className="mb-3 text-sm font-bold text-[#364153]">Cidade</h3>
              {["São Paulo", "Campinas", "Guarulhos"].map((item) => (
                <label key={item} className="mb-2 flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" defaultChecked className="rounded border-gray-300 text-[#00A63E]" />
                  <span className="text-sm text-gray-600">{item}</span>
                </label>
              ))}
            </div>
          </aside>

          {/* ÁREA PRINCIPAL DOS CARDS */}
          <div>
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              
              {/* INPUT DE BUSCA */}
              <div className="relative w-full md:max-w-xs">
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Buscar contrato ou prestador..."
                  value={termoBusca}
                  onChange={(e) => setTermoBusca(e.target.value)}
                  className="w-full rounded-lg border border-gray-200 py-2.5 pl-9 pr-4 text-sm outline-none focus:border-[#00A63E] focus:ring-1 focus:ring-[#00A63E] transition-all shadow-sm"
                />
              </div>

              {/* BOTÕES DE ORDENAÇÃO DINÂMICOS */}
              <div className="flex flex-wrap gap-2 text-xs font-medium">
                <button 
                  type="button"
                  onClick={() => setOrdenacao("recentes")}
                  className={`rounded-lg px-4 py-2 shadow-sm transition-all ${
                    ordenacao === "recentes" 
                      ? "bg-[#364153] text-white" 
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Mais Recentes
                </button>
                <button 
                  type="button"
                  onClick={() => setOrdenacao("maior_preco")}
                  className={`rounded-lg px-4 py-2 shadow-sm transition-all ${
                    ordenacao === "maior_preco" 
                      ? "bg-[#364153] text-white" 
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Maior Preço
                </button>
                <button 
                  type="button"
                  onClick={() => setOrdenacao("menor_preco")}
                  className={`rounded-lg px-4 py-2 shadow-sm transition-all ${
                    ordenacao === "menor_preco" 
                      ? "bg-[#364153] text-white" 
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  Menor Preço
                </button>
              </div>
            </div>

            {/* CONTEÚDO CONDICIONAL (LOADING / TABELA DINÂMICA) */}
            {isLoading ? (
              <div className="flex justify-center items-center py-24">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#00A63E]"></div>
              </div>
            ) : contratosFiltrados.length === 0 ? (
              <div className="flex flex-col justify-center items-center py-24 text-center bg-gray-50 rounded-xl border border-gray-100">
                <p className="text-gray-500 font-medium">Nenhum contrato encontrado para "{termoBusca}".</p>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {contratosFiltrados.map((contract) => (
                  <ContractCard key={contract.id} contract={contract} />
                ))}
              </div>
            )}
          </div>
        </section>

        <div className="px-4 pb-12 md:px-11 max-w-7xl mx-auto">
          <Link
            to="/cliente"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-[#00A63E] px-6 text-sm font-bold text-white transition hover:bg-[#008F35] shadow-sm"
          >
            ← Voltar para o Painel do Cliente
          </Link>
        </div>
      </main>
    </Layout>
  );
}