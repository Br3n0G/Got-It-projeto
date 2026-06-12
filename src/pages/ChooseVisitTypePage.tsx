import { useState } from "react";
import { Link } from "react-router-dom";
import AndreasNavbar from "../components/AndreasNavbar";
import AndreasFooter from "../components/AndreasFooter";

type Mode = "day" | "week";

type PlanCardProps = {
  title: string;
  price: string;
  suffix: string;
  description: string;
  items: string[];
  featured?: boolean;
};

function PlanCard({
  title,
  price,
  suffix,
  description,
  items,
  featured = false,
}: PlanCardProps) {
  return (
    <div
      className={`flex min-h-[305px] w-full max-w-[420px] flex-col rounded-lg border p-8 ${
        featured
          ? "border-[#008236] bg-[#00A63E] text-white"
          : "border-[#D1D5DB] bg-white text-[#202124]"
      }`}
    >
      <h2 className="text-center text-2xl font-bold">{title}</h2>

      <div className="mt-3 flex items-end justify-center">
        <span className="mb-7 text-2xl font-bold">$</span>
        <span className="text-6xl font-bold leading-none">{price}</span>
        <span className="mb-2 ml-1 text-sm">{suffix}</span>
      </div>

      <ul className="mt-6 space-y-3 text-left text-base">
        <li className={featured ? "text-white" : "text-[#7A7A7A]"}>
          • {description}
        </li>

        {items.map((item, index) => (
          <li
            key={index}
            className={featured ? "text-white" : "text-[#7A7A7A]"}
          >
            • {item}
          </li>
        ))}
      </ul>

      <Link
        to="/pagamento/sucesso"
        className={`mt-auto flex h-10 items-center justify-center rounded-md text-sm font-medium transition ${
          featured
            ? "bg-[#F3F4F6] text-[#202124] hover:bg-white"
            : "bg-[#00A63E] text-white hover:bg-[#008F35]"
        }`}
      >
        Quero esse
      </Link>
    </div>
  );
}

export function ChooseVisitTypePage() {
  const [currentMode, setCurrentMode] = useState<Mode>("day");

  const isWeek = currentMode === "week";

  return (
    <div className="min-h-screen bg-white">
      <AndreasNavbar />

      <main className="px-6 py-24 md:px-12">
        <section className="mx-auto max-w-[980px] text-center">
          <div className="flex items-center justify-center gap-2 text-base">
            <button
              type="button"
              onClick={() => setCurrentMode("day")}
              className={`rounded-md px-3 py-2 transition ${
                !isWeek
                  ? "bg-[#F3F4F6] text-[#202124]"
                  : "text-[#202124] hover:bg-[#F3F4F6]"
              }`}
            >
              Dia
            </button>

            <button
              type="button"
              onClick={() => setCurrentMode("week")}
              className={`rounded-md px-3 py-2 transition ${
                isWeek
                  ? "bg-[#F3F4F6] text-[#202124]"
                  : "text-[#202124] hover:bg-[#F3F4F6]"
              }`}
            >
              Semana
            </button>
          </div>

          <div className="mt-16 grid justify-items-center gap-16 lg:grid-cols-2">
            <PlanCard
              title={isWeek ? "Dia" : "Hora"}
              price="00"
              suffix={isWeek ? "/ dia" : "/ hr"}
              description={
                isWeek
                  ? "Escolha quantos dias deseja."
                  : "Poucas plantas? Essa opção é pra você"
              }
              items={["List item", "List item", "List item", "List item"]}
            />

            <PlanCard
              title={isWeek ? "Semana" : "Visita"}
              price="00"
              suffix={isWeek ? "/ semana" : "/ visita"}
              description={
                isWeek
                  ? "Escolha quantas semanas deseja."
                  : "Muitas plantas, ou carentes de cuidado"
              }
              items={["List item", "List item", "List item", "List item"]}
              featured
            />
          </div>
        </section>
      </main>

      <AndreasFooter />
    </div>
  );
}