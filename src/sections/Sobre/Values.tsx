import { Award, Clock, Heart, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Amor pelas Plantas",
    description:
      "Cada planta é tratada com carinho e dedicação, como se fosse nossa.",
  },
  {
    icon: Award,
    title: "Profissionalismo",
    description:
      "Equipe treinada e certificada em cuidados com plantas de todas as espécies.",
  },
  {
    icon: Users,
    title: "Confiança",
    description:
      "Profissionais verificados e avaliados regularmente por nossos clientes.",
  },
  {
    icon: Clock,
    title: "Pontualidade",
    description:
      "Comprometimento com horários e prazos para sua total tranquilidade.",
  },
];

export function Values() {
  return (
    <section className="bg-[#F9FAFB] px-6 py-20">
      <div className="mx-auto max-w-[1143px] text-center">
        <h2 className="text-3xl font-bold text-[#111827] md:text-4xl">
          Nossos Valores
        </h2>

        <p className="mt-4 text-base text-[#4B5563]">
          O que nos guia no cuidado com cada planta
        </p>

        <div className="mt-16 grid gap-10 md:grid-cols-4">
          {values.map(({ icon: Icon, title, description }) => (
            <div key={title} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#DCFCE7] text-[#00A63E]">
                <Icon size={28} strokeWidth={2} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-[#111827]">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-[#4B5563]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}