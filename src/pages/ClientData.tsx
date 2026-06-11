import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  Lock,
  Globe,
  User,
  Settings,
  Star,
} from "lucide-react";

import { GreenIllustration } from "../components/GreenIllustration";
import { Layout } from "../components/Layout";

const accountData = [
  {
    icon: Mail,
    label: "nome@email.com",
  },
  {
    icon: Phone,
    label: "(00) 0000 - 0000",
  },
  {
    icon: Lock,
    label: "**********",
  },
  {
    icon: Globe,
    label: "Conectado pelo Google",
  },
  {
    icon: User,
    label: "Alterar foto",
  },
];

export function ClientData() {
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
                Dados da conta
              </h1>
            </div>

            <div className="border-b border-black/10 py-3">
              {accountData.map(({ icon: Icon, label }) => (
                <button
                  type="button"
                  key={label}
                  className="flex w-full items-center gap-4 py-3 text-left text-sm text-gray-700 transition hover:text-got-green"
                >
                  <Icon size={18} strokeWidth={1.6} className="text-gray-500" />
                  <span>{label}</span>
                </button>
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