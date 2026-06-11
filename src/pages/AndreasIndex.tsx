import { Link } from "react-router-dom";
import Navbar from "../components/AndreasNavbar";
import Footer from "../components/AndreasFooter";

/* ── SVG Icons ─────────────────────────────────────────── */
const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#99A1AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.5001 17.5L13.9167 13.9167" stroke="#99A1AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.68323 1.52997C7.71245 1.47094 7.75758 1.42126 7.81353 1.38652C7.86949 1.35178 7.93404 1.33337 7.9999 1.33337C8.06576 1.33337 8.13031 1.35178 8.18626 1.38652C8.24222 1.42126 8.28735 1.47094 8.31656 1.52997L9.85656 4.6493C9.95802 4.85461 10.1078 5.03224 10.293 5.16694C10.4782 5.30164 10.6933 5.38938 10.9199 5.42264L14.3639 5.92664C14.4292 5.93609 14.4905 5.96362 14.5409 6.0061C14.5913 6.04859 14.6289 6.10434 14.6492 6.16704C14.6696 6.22975 14.6721 6.29691 14.6563 6.36093C14.6405 6.42495 14.6071 6.48327 14.5599 6.5293L12.0692 8.95464C11.905 9.1147 11.7821 9.31229 11.7111 9.53039C11.6402 9.74849 11.6233 9.98056 11.6619 10.2066L12.2499 13.6333C12.2614 13.6985 12.2544 13.7657 12.2296 13.8271C12.2048 13.8885 12.1632 13.9417 12.1096 13.9806C12.056 14.0196 11.9926 14.0426 11.9265 14.0472C11.8604 14.0518 11.7944 14.0378 11.7359 14.0066L8.65723 12.388C8.45438 12.2815 8.22868 12.2258 7.99956 12.2258C7.77044 12.2258 7.54475 12.2815 7.3419 12.388L4.2639 14.0066C4.20545 14.0376 4.1395 14.0515 4.07353 14.0468C4.00757 14.0421 3.94424 14.019 3.89076 13.9801C3.83728 13.9412 3.79579 13.8881 3.771 13.8268C3.74622 13.7655 3.73914 13.6984 3.75056 13.6333L4.3379 10.2073C4.3767 9.98112 4.35989 9.7489 4.28892 9.53067C4.21796 9.31243 4.09497 9.11474 3.93056 8.95464L1.4399 6.52997C1.39229 6.48399 1.35856 6.42557 1.34254 6.36135C1.32652 6.29714 1.32886 6.22971 1.34928 6.16676C1.36971 6.10381 1.40741 6.04786 1.45808 6.00529C1.50876 5.96272 1.57037 5.93524 1.6359 5.92597L5.07923 5.42264C5.30607 5.38964 5.52149 5.30201 5.70695 5.16729C5.89242 5.03258 6.04237 4.85482 6.1439 4.6493L7.68323 1.52997Z" fill="#FDC700" stroke="#FDC700" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const VerifiedIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip-verified)">
      <path d="M1.9251 4.30999C1.85212 3.98125 1.86332 3.63941 1.95767 3.31616C2.05203 2.99291 2.22647 2.69871 2.46483 2.46085C2.70319 2.22299 2.99775 2.04916 3.3212 1.95548C3.64465 1.86181 3.98651 1.85132 4.3151 1.92499C4.49595 1.64214 4.7451 1.40937 5.03957 1.24813C5.33405 1.08689 5.66437 1.00238 6.0001 1.00238C6.33582 1.00238 6.66615 1.08689 6.96062 1.24813C7.25509 1.40937 7.50424 1.64214 7.6851 1.92499C8.01418 1.851 8.35663 1.86144 8.6806 1.95534C9.00456 2.04925 9.29951 2.22356 9.53802 2.46206C9.77653 2.70057 9.95084 2.99552 10.0447 3.31949C10.1386 3.64345 10.1491 3.9859 10.0751 4.31499C10.3579 4.49584 10.5907 4.74499 10.752 5.03946C10.9132 5.33394 10.9977 5.66426 10.9977 5.99999C10.9977 6.33571 10.9132 6.66604 10.752 6.96051C10.5907 7.25499 10.3579 7.50413 10.0751 7.68499C10.1488 8.01357 10.1383 8.35544 10.0446 8.67888C9.95092 9.00233 9.7771 9.29689 9.53924 9.53525C9.30137 9.77361 9.00718 9.94806 8.68393 10.0424C8.36067 10.1368 8.01883 10.148 7.6901 10.075C7.50948 10.3589 7.26014 10.5927 6.96516 10.7546C6.67018 10.9166 6.33911 11.0015 6.0026 11.0015C5.66608 11.0015 5.33501 10.9166 5.04003 10.7546C4.74506 10.5927 4.49572 10.3589 4.3151 10.075C3.98651 10.1487 3.64465 10.1382 3.3212 10.0445C2.99775 9.95082 2.70319 9.77699 2.46483 9.53913C2.22647 9.30127 2.05203 9.00707 1.95767 8.68382C1.86332 8.36057 1.85212 8.01872 1.9251 7.68999C1.64007 7.50961 1.4053 7.26007 1.24262 6.96459C1.07994 6.66912 0.994629 6.33729 0.994629 5.99999C0.994629 5.66268 1.07994 5.33086 1.24262 5.03538C1.4053 4.7399 1.64007 4.49037 1.9251 4.30999Z" fill="white" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.5 6L5.5 7L7.5 5" fill="white"/>
      <path d="M4.5 6L5.5 7L7.5 5" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
    </g>
    <defs>
      <clipPath id="clip-verified">
        <rect width="12" height="12" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

const BadgeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.3181 8.59332L11.3281 14.2773C11.3394 14.3443 11.33 14.413 11.3012 14.4745C11.2723 14.5359 11.2254 14.5871 11.1667 14.6212C11.108 14.6553 11.0403 14.6706 10.9726 14.6651C10.905 14.6597 10.8406 14.6337 10.7881 14.5907L8.40141 12.7993C8.2862 12.7132 8.14623 12.6667 8.00241 12.6667C7.85859 12.6667 7.71863 12.7132 7.60341 12.7993L5.21274 14.59C5.16029 14.6329 5.09599 14.6589 5.02841 14.6644C4.96083 14.6698 4.89319 14.6545 4.83452 14.6206C4.77585 14.5866 4.72893 14.5355 4.70002 14.4742C4.67112 14.4129 4.6616 14.3442 4.67274 14.2773L5.68208 8.59332" stroke="#99A1AF" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 9.33334C10.2091 9.33334 12 7.54248 12 5.33334C12 3.1242 10.2091 1.33334 8 1.33334C5.79086 1.33334 4 3.1242 4 5.33334C4 7.54248 5.79086 9.33334 8 9.33334Z" stroke="#99A1AF" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.21875 14.0156C10.5411 14.0156 13.2344 11.3223 13.2344 8C13.2344 4.67766 10.5411 1.98438 7.21875 1.98438C3.89641 1.98438 1.20312 4.67766 1.20312 8C1.20312 11.3223 3.89641 14.0156 7.21875 14.0156Z" stroke="#99A1AF" strokeWidth="1.20312" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.21875 4.39062V8L9.625 9.20312" stroke="#99A1AF" strokeWidth="1.20312" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LocationIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.3334 6.66668C13.3334 9.99534 9.64075 13.462 8.40075 14.5327C8.28523 14.6195 8.14461 14.6665 8.00008 14.6665C7.85555 14.6665 7.71493 14.6195 7.59941 14.5327C6.35941 13.462 2.66675 9.99534 2.66675 6.66668C2.66675 5.25219 3.22865 3.89563 4.22885 2.89544C5.22904 1.89525 6.58559 1.33334 8.00008 1.33334C9.41457 1.33334 10.7711 1.89525 11.7713 2.89544C12.7715 3.89563 13.3334 5.25219 13.3334 6.66668Z" stroke="#4A5565" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 8.66666C9.10457 8.66666 10 7.77123 10 6.66666C10 5.56209 9.10457 4.66666 8 4.66666C6.89543 4.66666 6 5.56209 6 6.66666C6 7.77123 6.89543 8.66666 8 8.66666Z" stroke="#4A5565" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ── Data ───────────────────────────────────────────────── */
interface Professional {
  id: number;
  name: string;
  title: string;
  rating: number;
  reviews: number;
  bio: string;
  tags: string[];
  jobs: number;
  responseTime: string;
  location: string;
  price: number;
  available: boolean;
  busyUntil?: string;
  image: string;
}

const professionals: Professional[] = [
  {
    id: 1,
    name: "Mariana Costa",
    title: "Botânica Especialista",
    rating: 5,
    reviews: 127,
    bio: "Botânica com 10 anos de experiência. Especializada em plantas tropicais e orquídeas raras.",
    tags: ["Plantas Tropicais", "Orquídeas", "Samambaias"],
    jobs: 342,
    responseTime: "Responde em 1 hora",
    location: "Jardins, São Paulo",
    price: 95,
    available: true,
    image: "https://api.builder.io/api/v1/image/assets/TEMP/e681747ee745617cc4f004c89d869373acb9f91c?width=120",
  },
  {
    id: 2,
    name: "Julia Santos",
    title: "Consultora de Plantas de Interior",
    rating: 5,
    reviews: 156,
    bio: "Especialista em criar e manter ambientes verdes em apartamentos e escritórios.",
    tags: ["Plantas de Interior", "Ficus", "Monstera"],
    jobs: 421,
    responseTime: "Responde em 30 minutos",
    location: "Vila Madalena, São Paulo",
    price: 89,
    available: true,
    image: "https://api.builder.io/api/v1/image/assets/TEMP/4bc5f9741333c4d4074e83f401478ff55a052a15?width=120",
  },
  {
    id: 3,
    name: "Ana Paula Lima",
    title: "Especialista em Plantas Raras",
    rating: 5,
    reviews: 73,
    bio: "Trabalho com colecionadores de plantas raras. Cuidado premium e especializado.",
    tags: ["Plantas Raras", "Aroides", "Coleções Especiais"],
    jobs: 167,
    responseTime: "Responde em 1 hora",
    location: "Itaim Bibi, São Paulo",
    price: 120,
    available: true,
    image: "https://api.builder.io/api/v1/image/assets/TEMP/e681747ee745617cc4f004c89d869373acb9f91c?width=120",
  },
  {
    id: 4,
    name: "Carlos Silva",
    title: "Especialista em Suculentas",
    rating: 4.9,
    reviews: 98,
    bio: "Apaixonado por suculentas há 8 anos. Cuido de coleções especiais com dedicação.",
    tags: ["Suculentas", "Cactos", "Plantas Desérticas"],
    jobs: 256,
    responseTime: "Responde em 2 horas",
    location: "Pinheiros, São Paulo",
    price: 75,
    available: true,
    image: "https://api.builder.io/api/v1/image/assets/TEMP/0ec8f359ce12a2e701bb8536d22967f614d9139a?width=120",
  },
  {
    id: 5,
    name: "Roberto Alves",
    title: "Cuidador de Bonsai",
    rating: 4.9,
    reviews: 62,
    bio: "Especialista em bonsai e técnicas japonesas de cultivo há 12 anos.",
    tags: ["Bonsai", "Plantas Japonesas", "Poda Artística"],
    jobs: 145,
    responseTime: "Responde em 2 horas",
    location: "Liberdade, São Paulo",
    price: 110,
    available: true,
    image: "https://api.builder.io/api/v1/image/assets/TEMP/0ec8f359ce12a2e701bb8536d22967f614d9139a?width=120",
  },
  {
    id: 6,
    name: "Pedro Oliveira",
    title: "Jardineiro Profissional",
    rating: 4.8,
    reviews: 84,
    bio: "Jardineiro com foco em hortas urbanas e plantas medicinais. Amo o que faço!",
    tags: ["Hortas", "Plantas Medicinais", "Temperos"],
    jobs: 198,
    responseTime: "Responde em 3 horas",
    location: "Moema, São Paulo",
    price: 79,
    available: false,
    busyUntil: "Ocupado até 05/04",
    image: "https://api.builder.io/api/v1/image/assets/TEMP/b4d455635c871a0e8d358f181d059fc970745a53?width=120",
  },
];

const howItWorks = [
  {
    step: 1,
    title: "Encontre",
    desc: "Busque e compare profissionais por especialidade, avaliações e preço",
  },
  {
    step: 2,
    title: "Entre em Contato",
    desc: "Converse diretamente com o profissional e agende uma visita inicial",
  },
  {
    step: 3,
    title: "Contrate",
    desc: "Defina datas, frequência de visitas e forme de pagamento",
  },
  {
    step: 4,
    title: "Relaxe",
    desc: "Viaje tranquilo enquanto suas plantas recebem cuidado profissional",
  },
];

/* ── ProfessionalCard ───────────────────────────────────── */
function ProfessionalCard({ pro }: { pro: Professional }) {
  return (
    <div className="flex flex-col rounded-[14px] border border-[#E5E7EB] bg-white shadow-sm overflow-hidden h-full">
      <div className="flex flex-col gap-0 flex-1 p-6">
        {/* Header: avatar + info */}
        <div className="flex items-start gap-4 mb-4">
          {/* Avatar */}
          <div className="relative shrink-0">
            <div className="w-16 h-16 rounded-full border-2 border-[#DCFCE7] overflow-hidden">
              <img
                src={pro.image}
                alt={pro.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-[#2B7FFF] border-2 border-white flex items-center justify-center">
              <VerifiedIcon />
            </div>
          </div>

          {/* Name, title, rating */}
          <div className="flex-1 min-w-0">
            <h3 className="text-app-dark font-bold text-lg leading-7 tracking-[-0.44px]">
              {pro.name}
            </h3>
            <p className="text-app-gray text-sm leading-5 tracking-[-0.15px] mt-0.5">
              {pro.title}
            </p>
            <div className="flex items-center gap-1 mt-1">
              <StarIcon />
              <span className="text-app-dark font-semibold text-base leading-6 tracking-[-0.31px]">
                {pro.rating}
              </span>
              <span className="text-app-gray2 text-sm leading-5 tracking-[-0.15px]">
                ({pro.reviews} avaliações)
              </span>
            </div>
          </div>
        </div>

        {/* Bio */}
        <p className="text-app-gray text-sm leading-5 tracking-[-0.15px] mb-4 line-clamp-3">
          {pro.bio}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {pro.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-[#F0FDF4] text-[#008236] text-xs font-medium leading-4"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 pb-4 border-b border-[#F3F4F6] mb-4">
          <div className="flex items-center gap-2">
            <BadgeIcon />
            <span className="text-app-gray text-sm leading-5 tracking-[-0.15px]">
              {pro.jobs} trabalhos
            </span>
          </div>
          <div className="flex items-center gap-2">
            <ClockIcon />
            <span className="text-app-gray text-sm leading-5 tracking-[-0.15px]">
              {pro.responseTime}
            </span>
          </div>
        </div>

        {/* Location + Price */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1.5">
            <LocationIcon />
            <span className="text-app-gray text-sm leading-5 tracking-[-0.15px]">
              {pro.location}
            </span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-app-dark font-bold text-2xl leading-8 tracking-[0.07px]">
              R$ {pro.price}
            </span>
            <span className="text-app-gray2 text-xs leading-4">por visita</span>
          </div>
        </div>

        {/* Availability */}
        <div className="mb-4">
          {pro.available ? (
            <span className="inline-flex px-3 py-1 rounded-full bg-[#DCFCE7] text-[#008236] text-xs font-medium leading-4">
              Disponível
            </span>
          ) : (
            <span className="inline-flex px-3 py-1 rounded-full bg-[#FEF9C2] text-[#A65F00] text-xs font-medium leading-4">
              {pro.busyUntil}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-auto">
          <Link 
            to="/cliente" 
            className="flex-1 py-3 rounded-[10px] bg-brand text-white text-sm font-medium leading-5 tracking-[-0.15px] hover:bg-brand-dark transition-colors text-center">
            Contratar
          </Link>
          <Link 
            to="/cliente/perfil" 
            className="flex-1 py-3 rounded-[10px] border-2 border-[#D1D5DC] bg-white text-[#364153] text-sm font-medium leading-5 tracking-[-0.15px] hover:bg-gray-50 transition-colors text-center">
            Ver Perfil
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ── Page ───────────────────────────────────────────────── */
export default function AndreasIndex() {
  return (
    <div className="min-h-screen flex flex-col font-inter">
      <Navbar />

      <main className="flex-1">
        {/* Hero / Search Section */}
        <section className="bg-gradient-to-br from-[#F0FDF4] to-[#ECFDF5] border-b border-[#E5E7EB]">
          <div className="max-w-[1143px] mx-auto px-4 sm:px-8 py-16 flex flex-col items-center gap-8">
            {/* Heading */}
            <div className="flex flex-col items-center gap-4 text-center max-w-3xl">
              <h1 className="text-app-dark font-bold text-4xl sm:text-5xl leading-tight tracking-[0.35px]">
                Encontre o Profissional Ideal
              </h1>
              <p className="text-[#4A5565] text-lg sm:text-xl leading-7 tracking-[-0.45px] max-w-[739px]">
                Escolha entre diversos especialistas em plantas e contrate diretamente quem melhor atende suas necessidades.
              </p>
            </div>

            {/* Search Bar */}
            <div className="w-full max-w-[768px] flex items-center gap-2 bg-white rounded-[14px] shadow-lg px-4 py-2">
              <SearchIcon />
              <input
                type="text"
                placeholder="Busque por especialidade, nome ou tipo de planta..."
                className="flex-1 py-3 text-[#364153] text-base leading-6 tracking-[-0.31px] outline-none bg-transparent placeholder:text-[#364153]"
              />
              <button className="px-6 py-3 rounded-[10px] bg-brand text-white text-base font-medium leading-6 tracking-[-0.31px] hover:bg-brand-dark transition-colors shrink-0">
                Buscar
              </button>
            </div>
          </div>
        </section>

        {/* Professionals Section */}
        <section className="bg-[#F9FAFB]">
          <div className="max-w-[1143px] mx-auto px-4 sm:px-8 py-8 flex flex-col gap-8">
            {/* Filter Bar */}
            <div className="bg-white rounded-[10px] shadow-sm px-4 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <select className="text-sm text-[#364153] border border-[#D1D5DC] rounded-md px-3 py-1.5 outline-none cursor-pointer">
                  <option>Especialidade</option>
                  <option>Plantas Tropicais</option>
                  <option>Plantas de Interior</option>
                  <option>Suculentas</option>
                  <option>Bonsai</option>
                </select>
                <select className="text-sm text-[#364153] border border-[#D1D5DC] rounded-md px-3 py-1.5 outline-none cursor-pointer">
                  <option>Ordenar por</option>
                  <option>Melhor avaliação</option>
                  <option>Menor preço</option>
                  <option>Mais trabalhos</option>
                </select>
              </div>
              <p className="text-[#4A5565] text-sm leading-6">
                <span className="font-semibold">6</span> profissionais encontrados
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {professionals.map((pro) => (
                <ProfessionalCard key={pro.id} pro={pro} />
              ))}
            </div>
          </div>
        </section>

        {/* Como Funciona */}
        <section className="bg-white">
          <div className="max-w-[1143px] mx-auto px-4 sm:px-8 py-20 flex flex-col gap-16">
            {/* Header */}
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="text-app-dark font-bold text-3xl sm:text-4xl leading-10 tracking-[0.37px]">
                Como Funciona
              </h2>
              <p className="text-[#4A5565] text-lg leading-7 tracking-[-0.44px]">
                Contratar um profissional é fácil e seguro
              </p>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorks.map((item) => (
                <div key={item.step} className="flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-brand flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-2xl leading-8">{item.step}</span>
                  </div>
                  <h3 className="text-app-dark font-semibold text-xl leading-7 tracking-[-0.45px]">
                    {item.title}
                  </h3>
                  <p className="text-[#4A5565] text-base leading-6 tracking-[-0.31px]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-white px-4 sm:px-8 pb-16">
          <div className="max-w-[896px] mx-auto bg-brand rounded-2xl px-6 sm:px-12 py-12 flex flex-col items-center text-center gap-5">
            <h2 className="text-white font-bold text-3xl sm:text-4xl leading-10 tracking-[0.37px]">
              Você é Profissional de Plantas?
            </h2>
            <p className="text-[#F0FDF4] text-lg sm:text-xl leading-7 tracking-[-0.45px] max-w-[742px]">
              Cadastre-se em nossa plataforma e comece a oferecer seus serviços hoje mesmo
            </p>
            <Link
              to="/login/prestador" 
              className="mt-2 inline-flex items-center px-8 py-4 rounded-[10px] bg-white text-brand text-lg font-medium leading-7 tracking-[-0.44px] hover:bg-[#F0FDF4] transition-colors"
            >
              Quero me Cadastrar
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
