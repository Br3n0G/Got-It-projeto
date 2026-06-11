import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function ContaCriadaPrestador() {
  return (
    <div className="min-h-screen flex flex-col font-inter">
      <Header />
      <main className="flex-1 relative flex items-center justify-center bg-[#F4FBF7]">
        <div className="absolute inset-y-0 left-1/2 w-px bg-black/5 -translate-x-1/2" />

        <div className="relative z-10 bg-[#22c55e] rounded-[14px] p-8 shadow-xl w-full max-w-[420px] text-center flex flex-col justify-center min-h-[240px]">
          <h2 className="text-white text-xl font-medium mb-12">
            Conta Criada!!!
          </h2>
          <Link
            to="/prestador/home"
            className="w-full mx-auto max-w-[280px] bg-[#14532D] hover:bg-[#064E3B] text-white py-3 rounded-lg text-sm font-medium transition-colors"
          >
            Continuar
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}