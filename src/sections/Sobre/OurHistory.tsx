export function OurHistory() {
  return (
    <section className="mx-auto grid max-w-[1143px] gap-12 px-6 py-24 md:grid-cols-2 md:items-center md:px-8">
      <div>
        <img
          src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80"
          alt="Pessoas em viveiro de plantas"
          className="h-[520px] w-full rounded-xl object-cover shadow-2xl"
        />
      </div>

      <div>
        <h2 className="text-3xl font-bold text-[#111827] md:text-4xl">
          Nossa História
        </h2>

        <div className="mt-7 space-y-5 text-base leading-relaxed text-[#4B5563]">
          <p>
            O PlantaSitter nasceu em 2023, quando nossa fundadora Mariana Costa
            percebeu que muitas pessoas enfrentavam um dilema: viajar ou deixar
            suas plantas morrerem sozinhas em casa.
          </p>

          <p>
            Como botânica apaixonada, Mariana sabia que cada planta tem
            necessidades específicas e merece cuidados personalizados. Assim
            surgiu a ideia de criar um serviço profissional de babá de plantas.
          </p>

          <p>
            Hoje, já cuidamos de mais de 500 plantas e ajudamos centenas de
            pessoas a viajarem com tranquilidade, sabendo que suas “amigas
            verdes” estão em boas mãos.
          </p>
        </div>
      </div>
    </section>
  );
}