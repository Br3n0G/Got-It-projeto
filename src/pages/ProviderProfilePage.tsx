import { Link } from "react-router-dom";
import { Heart, Star } from "lucide-react";
import AndreasNavbar from "../components/AndreasNavbar";
import AndreasFooter from "../components/AndreasFooter";

const testimonials = [
  {
    text: '"Viajei por 3 semanas e minhas plantas nunca estiveram tão bonitas! Serviço excepcional."',
    name: "Maria Silva",
  },
  {
    text: '"Profissionais super atenciosos e cuidadosos. Recomendo muito!"',
    name: "João Costa",
  },
  {
    text: '"Minha coleção de suculentas está impecável graças ao PlantaSitter. Adorei!"',
    name: "Ana Paula",
  },
];

export function ProviderProfilePage() {
  return (
    <div className="min-h-screen bg-[#ECFDF5]">
      <AndreasNavbar />

      <main className="px-6 py-16">
        <section className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[1fr_1fr]">
          <div className="relative h-[560px] w-full bg-[#E5E5E5]">
            <button className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#262626] text-white">
              <Heart size={20} />
            </button>

            <div className="flex h-full items-center justify-center text-[#DADADA]">
              <svg
                width="240"
                height="240"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="15" cy="9" r="2" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold text-[#111827]">
                Nome Prestador
              </h1>

              <p className="mt-4 text-sm text-[#4B5563]">
                Sobre o prestador
              </p>

              <div className="mt-4 flex gap-1 text-[#FACC15]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={20} fill="currentColor" />
                ))}
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#111827]">
                    Cidade
                  </label>

                  <div className="flex h-11 w-full items-center rounded-md border border-[#D1D5DB] bg-white px-4 text-sm text-[#6B7280]">
                    Cidade prestador
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-[#111827]">
                    Especialização
                  </label>

                  <select className="h-11 w-full rounded-md border border-[#D1D5DB] bg-white px-4 text-sm text-[#111827] outline-none focus:border-[#00A63E] focus:ring-2 focus:ring-[#00A63E]/20">
                    <option>Orquídeas</option>
                    <option>Suculentas</option>
                    <option>Plantas de interior</option>
                    <option>Jardinagem geral</option>
                    <option>Bonsai</option>
                  </select>
                </div>
              </div>

              <div className="mt-8 rounded-md border border-[#D1D5DB] bg-white p-5">
                <h2 className="text-sm font-bold text-[#111827]">
                  Sobre o meu trabalho
                </h2>

                <p className="mt-5 text-sm leading-relaxed text-[#111827]">
                  Fale sobre a sua especialização e as tarefas que você executa
                  em uma visita.
                </p>
              </div>
            </div>

            <Link
              to="/cliente/pagamento"
              className="mt-16 flex h-11 w-full items-center justify-center rounded-md bg-[#00A63E] text-sm font-medium text-white transition hover:bg-[#008F35]"
            >
              Contratar
            </Link>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-6xl">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#111827]">
              O que os clientes dizem
            </h2>

            <p className="mt-4 text-sm text-[#4B5563]">
              Depoimentos reais de pessoas que confiam em mim
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="rounded-xl bg-white p-6 shadow-xl shadow-black/10"
              >
                <div className="flex gap-1 text-[#FACC15]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={18} fill="currentColor" />
                  ))}
                </div>

                <p className="mt-5 text-sm leading-relaxed text-[#374151]">
                  {item.text}
                </p>

                <h3 className="mt-6 text-sm font-bold text-[#111827]">
                  {item.name}
                </h3>
              </div>
            ))}
          </div>
        </section>
      </main>

      <AndreasFooter />
    </div>
  );
}