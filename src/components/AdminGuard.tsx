import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"; // Importa o nosso hook

export function AdminGuard() {
  const { user, userType, isLoading } = useAuth();

  // Se o contexto ainda estiver lendo o localStorage, mostra uma tela vazia temporária
  if (isLoading) {
    return <div className="flex h-screen w-screen items-center justify-center">Carregando...</div>;
  }

  // Só permite o acesso se houver um utilizador logado E se ele for do tipo ADMIN
  if (!user || userType !== "ADMIN") {
    return <Navigate to="/login/admin" replace />;
  }

  return <Outlet />;
}