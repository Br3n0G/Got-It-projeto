const stats = [
  {
    value: "500+",
    label: "Plantas Cuidadas",
  },
  {
    value: "200+",
    label: "Clientes Satisfeitos",
  },
  {
    value: "3+",
    label: "Anos de Experiência",
  },
  {
    value: "98%",
    label: "Taxa de Satisfação",
  },
];

export function Stats() {
  return (
    <section className="mx-auto max-w-[1143px] px-6 pb-20 md:px-8">
      <div className="grid gap-8 rounded-2xl bg-[#00A63E] px-10 py-8 text-center text-white md:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label}>
            <strong className="block text-4xl font-bold">{item.value}</strong>
            <span className="mt-2 block text-sm">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}