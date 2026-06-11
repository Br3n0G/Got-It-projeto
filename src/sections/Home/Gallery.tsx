const images = [
  {
    src: 'https://s2.glbimg.com/zm3S51pOE9eLhjocvGfVIG8ZXD8=/620x750/e.glbimg.com/og/ed/f/original/2018/09/10/plantas-dentro-de-casa.jpg',
    alt: 'Quarto decorado com plantas',
  },
  {
    src: 'https://cdn.assets-casacor.tec.br/file/casacor-images-news/2025/05/07-Gilberto-Elkis-Carolina-Mossin-004.webp',
    alt: 'Ambiente cheio de plantas',
  },
  {
    src: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=900&q=80',
    alt: 'Suculenta em vaso',
  },
]

export function Gallery() {
  return (
    <section className="bg-white px-6 py-24 lg:px-9">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-wide text-[#111827]">
            Plantas Felizes
          </h2>

          <p className="mt-6 text-xl text-[#4b5563]">
            Veja algumas das plantas que cuidamos com carinho
          </p>
        </div>

        <div className="mt-20 grid gap-7 md:grid-cols-3">
          {images.map((image) => (
            <img
              key={image.alt}
              src={image.src}
              alt={image.alt}
              className="h-[345px] w-full rounded-xl object-cover shadow-lg"
            />
          ))}
        </div>
      </div>
    </section>
  )
}