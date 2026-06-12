import { Link } from "react-router-dom";
import AndreasNavbar from "../components/AndreasNavbar";
import AndreasFooter from "../components/AndreasFooter";

export function PaymentSuccessPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#ECFDF5]">
      <AndreasNavbar />

      <main className="flex flex-1 items-center justify-center px-6 py-24">
        <div className="w-full max-w-[420px] rounded-xl bg-[#2EDB71] p-8 shadow-xl shadow-black/20">
          <p className="text-sm font-medium text-white">
            Pagamento efetuado!!!
          </p>

          <Link
            to="/home"
            className="mt-16 flex h-10 w-full items-center justify-center rounded-md bg-[#007F4E] text-sm font-medium text-white transition hover:bg-[#006B41]"
          >
            Voltar para o menu
          </Link>
        </div>
      </main>

      <AndreasFooter />
    </div>
  );
}