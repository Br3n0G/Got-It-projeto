import { Mail, MapPin, Phone, Send } from "lucide-react";

export function ContactFormSection() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-[#111827]">Fale Conosco</h2>

          <p className="mt-6 max-w-[470px] text-base leading-relaxed text-[#4B5563]">
            Estamos sempre prontos para ajudar você e suas plantas. Entre em
            contato através de qualquer um dos canais abaixo ou preencha o
            formulário ao lado.
          </p>

          <div className="mt-8 space-y-6">
            <ContactInfo
              icon={<Phone size={22} />}
              title="Telefone / WhatsApp"
              main="(11) 98765-4321"
              description="Segunda a Sábado, 8h às 20h"
            />

            <ContactInfo
              icon={<Mail size={22} />}
              title="E-mail"
              main="contato@plantsitter.com.br"
              description="Respondemos em até 24h"
            />

            <ContactInfo
              icon={<MapPin size={22} />}
              title="Localização"
              main="São Paulo, SP"
              description="Atendemos toda região metropolitana"
            />
          </div>

          <img
            src="https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?q=80&w=900&auto=format&fit=crop"
            alt="Planta suculenta em vaso"
            className="mt-10 h-[320px] w-full max-w-[520px] rounded-xl object-cover shadow-lg"
          />
        </div>

        <div className="rounded-2xl bg-[#F9FAFB] p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-[#111827]">
            Solicite um Orçamento
          </h2>

          <form className="mt-6 space-y-5">
            <FormInput label="Nome Completo *" placeholder="Seu nome" />

            <FormInput label="E-mail *" placeholder="seu@email.com" />

            <FormInput label="Telefone / WhatsApp *" placeholder="(11) 98765-4321" />

            <FormInput label="Período de Ausência *" placeholder="" />

            <FormInput label="Quantidade de Plantas *" placeholder="" />

            <div>
              <label className="mb-2 block text-sm font-medium text-[#374151]">
                Mensagem Adicional
              </label>

              <textarea
                placeholder="Conte-nos mais sobre suas plantas e necessidades..."
                className="min-h-[130px] w-full resize-none rounded-lg border border-[#D1D5DB] bg-white px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#00A63E] focus:ring-2 focus:ring-[#00A63E]/20"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#00A63E] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#008F35]"
            >
              <Send size={18} />
              Enviar Solicitação
            </button>

            <p className="text-center text-xs text-[#6B7280]">
              * Campos obrigatórios
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

type ContactInfoProps = {
  icon: React.ReactNode;
  title: string;
  main: string;
  description: string;
};

function ContactInfo({ icon, title, main, description }: ContactInfoProps) {
  return (
    <div className="flex gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#DCFCE7] text-[#00A63E]">
        {icon}
      </div>

      <div>
        <h3 className="font-bold text-[#111827]">{title}</h3>
        <p className="mt-1 text-sm text-[#4B5563]">{main}</p>
        <p className="text-sm text-[#6B7280]">{description}</p>
      </div>
    </div>
  );
}

type FormInputProps = {
  label: string;
  placeholder: string;
};

function FormInput({ label, placeholder }: FormInputProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-[#374151]">
        {label}
      </label>

      <input
        placeholder={placeholder}
        className="h-12 w-full rounded-lg border border-[#D1D5DB] bg-white px-4 text-sm text-[#111827] outline-none transition focus:border-[#00A63E] focus:ring-2 focus:ring-[#00A63E]/20"
      />
    </div>
  );
}