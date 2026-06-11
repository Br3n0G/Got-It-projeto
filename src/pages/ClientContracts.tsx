import { Link } from "react-router-dom";
import { Search } from "lucide-react";

import { Layout } from "../components/Layout";

const contracts = [
  { title: "Contrato 1", price: "$0" },
  { title: "Contrato 2", price: "$0" },
  { title: "Contrato 3", price: "$0" },
  { title: "Contrato 4", price: "$0" },
  { title: "Contrato 5", price: "$0" },
  { title: "Contrato 6", price: "$0" },
];

export function ClientContracts() {
  return (
    <Layout active="Contato">
      <main className="min-h-[900px] bg-white">
        <section className="bg-soft-panel py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Histórico de Contratos
          </h1>
        </section>

        <section className="grid gap-8 px-8 py-8 md:grid-cols-[230px_1fr] md:px-11">
          <aside className="rounded border border-black/10 p-4 text-sm text-gray-700">
            <h3 className="mb-3 text-sm font-medium text-gray-800">Keywords</h3>

            <div className="mb-4 space-y-2">
              {["Essa semana", "Esse mês", "Esse ano"].map((item) => (
                <div
                  key={item}
                  className="flex w-fit items-center gap-2 rounded bg-gray-100 px-2 py-1 text-xs"
                >
                  {item}
                  <span>x</span>
                </div>
              ))}
            </div>

            <div className="mb-5">
              {["Essa semana", "Esse mês", "Esse ano"].map((item) => (
                <label key={item} className="mb-2 flex items-start gap-2">
                  <input type="checkbox" defaultChecked className="mt-1" />
                  <span>
                    {item}
                    <small className="block text-gray-400">Description</small>
                  </span>
                </label>
              ))}
            </div>

            <div className="mb-5">
              <div className="mb-2 flex justify-between">
                <span>Preço</span>
                <span>$0-100</span>
              </div>

              <input type="range" className="w-full" />
            </div>

            <div className="mb-5">
              <h3 className="mb-2 text-sm font-medium text-gray-800">
                Especialização
              </h3>

              {["Label", "Label", "Label"].map((item, index) => (
                <label key={index} className="mb-2 flex items-center gap-2">
                  <input type="checkbox" defaultChecked />
                  <span>{item}</span>
                </label>
              ))}
            </div>

            <div>
              <h3 className="mb-2 text-sm font-medium text-gray-800">
                Cidade
              </h3>

              {["Label", "Label", "Label"].map((item, index) => (
                <label key={index} className="mb-2 flex items-center gap-2">
                  <input type="checkbox" defaultChecked />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </aside>

          <div>
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="relative w-full max-w-[160px]">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full rounded-full border border-black/10 px-4 py-2 pr-9 text-xs outline-none"
                />

                <Search
                  size={14}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
                />
              </div>

              <div className="flex flex-wrap gap-2 text-xs">
                <button className="rounded bg-gray-900 px-3 py-2 text-white">
                  ✓ New
                </button>

                <button className="rounded bg-gray-100 px-3 py-2 text-gray-600">
                  Price ascending
                </button>

                <button className="rounded bg-gray-100 px-3 py-2 text-gray-600">
                  Price descending
                </button>

                <button className="rounded bg-gray-100 px-3 py-2 text-gray-600">
                  Rating
                </button>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {contracts.map((contract) => (
                <div
                  key={contract.title}
                  className="rounded border border-black/10 bg-white p-3"
                >
                  <div className="flex h-44 items-center justify-center bg-gray-200 text-gray-300">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-24 w-24"
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
                    <p>{contract.title}</p>
                    <strong className="font-semibold">{contract.price}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="px-8 pb-8 md:px-11">
          <Link
            to="/cliente"
            className="inline-block text-sm font-semibold text-got-green transition hover:opacity-80"
          >
            ← Voltar para o Painel
          </Link>
        </div>
      </main>
    </Layout>
  );
}