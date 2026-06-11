import { Link } from "react-router-dom";
import {
  MapPin,
  Settings,
  Star,
  User,
} from "lucide-react";

import { GreenIllustration } from "../components/GreenIllustration";
import { Layout } from "../components/Layout";

const addresses = [
  {
    title: "Casa 1",
    name: "João da Silva",
    street: "Rua das Flores, 123 - Apto 42",
    neighborhood: "Jardim Paulista",
    city: "São Paulo - SP",
    zipCode: "01234-567",
  },
  {
    title: "Casa 2",
    name: "João da Silva",
    street: "Rua das Flores, 123 - Apto 50",
    neighborhood: "Jardim Paulista",
    city: "São Paulo - SP",
    zipCode: "01234-567",
  },
];

export function ClientAddresses() {
  return (
    <Layout active="Sobre">
      <main className="grid min-h-[900px] md:grid-cols-[1fr_1fr]">
        <GreenIllustration />

        <section className="bg-soft-panel px-6 py-0 md:px-7">
          <div className="border border-got-green/20 bg-white px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-got-green text-white">
                <User size={24} strokeWidth={1.8} />
              </div>

              <div>
                <h2 className="text-base font-medium text-gray-700">Nome</h2>
                <p className="text-base text-gray-600">Cliente</p>
              </div>
            </div>
          </div>

          <div className="px-4 pt-4">
            <div className="border-y border-black/10 py-3 text-center">
              <Link
                to="/cliente"
                className="mb-2 inline-block text-sm font-semibold text-got-green transition hover:opacity-80"
              >
                ← Voltar para o Painel
              </Link>

              <h1 className="text-base font-normal text-gray-800">
                Endereços
              </h1>
            </div>

            <div>
              {addresses.map((address) => (
                <div
                  key={address.title}
                  className="border-b border-black/10 py-5 text-sm text-gray-700"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <MapPin size={18} strokeWidth={1.6} />
                    <span>{address.title}</span>
                  </div>

                  <div className="space-y-1 pl-8">
                    <p>{address.name}</p>
                    <p>{address.street}</p>
                    <p>{address.neighborhood}</p>
                    <p>{address.city}</p>
                    <p>{address.zipCode}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-3">
              <Link
                to="/cliente/configuracoes"
                className="flex items-center gap-4 py-3 text-sm text-gray-700 transition hover:text-got-green"
              >
                <Settings size={18} strokeWidth={1.6} />
                <span>Configuração</span>
              </Link>

              <Link
                to="#"
                className="flex items-center gap-4 py-3 text-sm text-gray-700 transition hover:text-got-green"
              >
                <Star size={18} strokeWidth={1.6} />
                <span>Ajuda</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}