const faqs = [
  {
    question: "Com quanto tempo de antecedência devo agendar?",
    answer:
      "Recomendamos agendar com pelo menos 1 semana de antecedência, mas podemos atender pedidos de última hora dependendo da disponibilidade.",
  },
  {
    question: "Como funciona a primeira visita?",
    answer:
      "Na primeira visita, conhecemos você e suas plantas, identificamos as necessidades específicas de cada uma e criamos um plano de cuidados personalizado.",
  },
  {
    question: "E se minha planta precisar de cuidados especiais?",
    answer:
      "Nossa equipe é treinada para lidar com diversos tipos de plantas. Durante a visita inicial, você pode nos orientar sobre cuidados específicos ou particularidades das suas plantas.",
  },
  {
    question: "Como é feito o pagamento?",
    answer:
      "Aceitamos pagamento via PIX, transferência bancária ou cartão de crédito. O pagamento pode ser feito antes ou após o serviço, conforme sua preferência.",
  },
];

export function FAQSection() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-5xl bg-[#F9FAFB] px-6 py-12 md:px-10">
        <h2 className="text-center text-3xl font-bold text-[#111827]">
          Perguntas Frequentes
        </h2>

        <div className="mt-10 space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-xl border border-[#E5E7EB] bg-white p-6 shadow-sm"
            >
              <h3 className="font-bold text-[#111827]">{faq.question}</h3>

              <p className="mt-3 text-sm leading-relaxed text-[#4B5563]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}