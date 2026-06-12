const team = [
  {
    name: "Mariana Costa",
    role: "Fundadora e Botânica",
    description: "Especialista em plantas tropicais com 10 anos de experiência.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Carlos Silva",
    role: "Especialista em Suculentas",
    description:
      "Apaixonado por suculentas e cactos, cuida de coleções há 8 anos.",
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Julia Santos",
    role: "Consultora de Plantas",
    description: "Especialista em criar ambientes verdes e harmonizadores.",
    image:
      "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=400&q=80",
  },
];

export function Team() {
  return (
    <section className="mx-auto max-w-[1143px] px-6 py-24 text-center md:px-8">
      <h2 className="text-3xl font-bold text-[#111827] md:text-4xl">
        Nossa Equipe
      </h2>

      <p className="mt-4 text-base text-[#4B5563]">
        Conheça os especialistas que cuidam das suas plantas
      </p>

      <div className="mt-16 grid gap-14 md:grid-cols-3">
        {team.map((person) => (
          <div key={person.name} className="text-center">
            <img
              src={person.image}
              alt={person.name}
              className="mx-auto h-40 w-40 rounded-full object-cover shadow-lg"
            />

            <h3 className="mt-5 text-lg font-bold text-[#111827]">
              {person.name}
            </h3>

            <p className="mt-2 text-sm font-semibold text-[#00A63E]">
              {person.role}
            </p>

            <p className="mx-auto mt-3 max-w-[260px] text-sm leading-relaxed text-[#4B5563]">
              {person.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}