import { Link } from "react-router-dom";

export function AboutCallToAction() {
  return (
    <section className="mx-auto max-w-[900px] px-6 pb-24 text-center">
      <div className="bg-[#ECFDF5] px-6 py-10">
        <h2 className="text-3xl font-bold text-[#111827]">
          Quer Conhecer Melhor Nosso Trabalho?
        </h2>

        <p className="mt-5 text-base text-[#4B5563]">
          Agende uma visita sem compromisso e conheça nossa equipe pessoalmente
        </p>

        <Link
          to="/inicio/servicosdisponiveis"
          className="mt-8 inline-flex rounded-[10px] bg-[#00A63E] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#008236]"
        >
          Agendar Visita
        </Link>
      </div>
    </section>
  );
}