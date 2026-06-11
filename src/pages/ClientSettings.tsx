import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Bell,
  CreditCard,
  History,
  LogOut,
  Trash2,
} from "lucide-react";

import { GreenIllustration } from "../components/GreenIllustration";
import { Layout } from "../components/Layout";

const menu = [
  {
    icon: Bell,
    label: "Notificações",
    path: "#",
    hasToggle: true,
  },
  {
    icon: History,
    label: "Limpar histórico de busca",
    path: "#",
  },
  {
    icon: CreditCard,
    label: "Cadastrar um cartão",
    path: "#",
  },
  {
    icon: CreditCard,
    label: "Histórico de cartões",
    path: "#",
  },
];

export function ClientSettings() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  return (
    <Layout active="Sobre">
      <main className="grid min-h-[900px] md:grid-cols-[1fr_1fr]">
        <GreenIllustration />

        <section className="bg-soft-panel px-6 py-0 md:px-7">
          <div className="border-y border-black/10 py-3 text-center">
            <Link
              to="/cliente"
              className="mb-2 inline-block text-sm font-semibold text-got-green transition hover:opacity-80"
            >
              ← Voltar para o Painel
            </Link>

            <h1 className="text-base font-normal text-gray-800">
              Configurações
            </h1>
          </div>

          <div className="pt-5">
            {menu.map(({ icon: Icon, label, path, hasToggle }) => {
              if (hasToggle) {
                return (
                  <div
                    key={label}
                    className="flex items-center justify-between py-3 text-sm text-gray-700"
                  >
                    <div className="flex items-center gap-4">
                      <Icon size={18} strokeWidth={1.6} />
                      <span>{label}</span>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        setNotificationsEnabled(!notificationsEnabled)
                      }
                      className={`relative flex h-6 w-11 items-center rounded-full border-2 transition ${
                        notificationsEnabled
                          ? "border-got-green bg-got-green"
                          : "border-gray-800 bg-transparent"
                      }`}
                    >
                      <span
                        className={`absolute h-3.5 w-3.5 rounded-full transition ${
                          notificationsEnabled
                            ? "translate-x-6 bg-white"
                            : "translate-x-1 bg-gray-800"
                        }`}
                      />
                    </button>
                  </div>
                );
              }

              return (
                <Link
                  to={path}
                  key={label}
                  className="flex items-center gap-4 py-3 text-sm text-gray-700 transition hover:text-got-green"
                >
                  <Icon size={18} strokeWidth={1.6} />
                  <span>{label}</span>
                </Link>
              );
            })}

            <Link
              to="#"
              className="flex items-center gap-4 py-3 text-sm text-red-500 transition hover:text-red-600"
            >
              <Trash2 size={18} strokeWidth={1.6} />
              <span>Excluir conta</span>
            </Link>
          </div>

          <div className="mt-3 border-t border-black/10 pt-3">
            <Link
              to="/"
              className="flex items-center gap-4 py-3 text-sm text-gray-700 transition hover:text-got-green"
            >
              <LogOut size={18} strokeWidth={1.6} />
              <span>Sair</span>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}