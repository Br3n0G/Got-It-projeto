type PriceCardProps = {
  title: string
  price: string
  suffix: string
  description: string
  items: string[]
  featured?: boolean
}

export function PriceCard({
  title,
  price,
  suffix,
  description,
  items,
  featured = false,
}: PriceCardProps) {
  return (
    <article
      className={`flex min-h-[435px] w-full max-w-[440px] flex-col rounded-md border px-9 py-9 shadow-sm ${
        featured
          ? 'border-got-green bg-got-green text-white'
          : 'border-black/15 bg-white text-[#202124]'
      }`}
    >
      <h2 className="text-center text-2xl font-bold">{title}</h2>

      <div className="mt-4 flex items-start justify-center">
        <span className={`mt-2 text-2xl font-bold ${featured ? 'text-white' : 'text-[#202124]'}`}>
          $
        </span>
        <span className="text-6xl font-bold leading-none">{price}</span>
        <span className={`mt-8 text-sm ${featured ? 'text-white' : 'text-gray-700'}`}>
          {suffix}
        </span>
      </div>

      <ul className={`mt-8 space-y-4 text-base ${featured ? 'text-white' : 'text-gray-500'}`}>
        <li>• {description}</li>
        {items.map((item, index) => (
          <li key={`${item}-${index}`}>• {item}</li>
        ))}
      </ul>

      <button
        className={`mt-auto rounded-md px-5 py-3 text-base transition ${
          featured
            ? 'bg-white/90 text-[#202124] hover:bg-white'
            : 'bg-got-green text-white hover:bg-got-green-dark'
        }`}
      >
        Quero esse
      </button>
    </article>
  )
}
