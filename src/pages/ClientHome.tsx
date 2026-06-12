import { Link } from "react-router-dom";
import {
  ClipboardList,
  FileText,
  MapPin,
  Search,
  Settings,
  Star,
  User,
} from "lucide-react";

import { GreenIllustration } from "../components/GreenIllustration";
import { Layout } from "../components/Layout";

const menu = [
  {
    icon: ClipboardList,
    label: "Histórico de Contratos",
    path: "/cliente/contratos",
  },
  {
    icon: FileText,
    label: "Dados da Conta",
    path: "/cliente/dados",
  },
  {
    icon: MapPin,
    label: "Endereços",
    path: "/cliente/enderecos",
  },
];

export function ClientHome() {
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
            <div className="border-b border-black/10 pb-3">
              {menu.map(({ icon: Icon, label, path }) => (
                <Link
                  to={path}
                  key={label}
                  className="flex items-center gap-4 py-3 text-sm text-gray-700 transition hover:text-got-green"
                >
                  <Icon size={18} strokeWidth={1.6} />
                  <span>{label}</span>
                </Link>
              ))}
            </div>

            <div className="pt-3">
              <Link
                to="/inicio/servicosdisponiveis"
                className="mb-2 flex items-center gap-4 py-3 text-sm font-semibold text-brand transition hover:text-got-green-dark"
              >
                <Search size={18} strokeWidth={1.6} />
                <span>Buscar Profissionais</span>
              </Link>

              <Link
                to="/cliente/configuracoes"
                className="flex items-center gap-4 py-3 text-sm text-gray-700 transition hover:text-got-green"
              >
                <Settings size={18} strokeWidth={1.6} />
                <span>Configuração</span>
              </Link>

              <Link
                to="/contato"
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