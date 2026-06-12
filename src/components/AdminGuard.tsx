import { Navigate, Outlet } from "react-router-dom";

export function AdminGuard() {
  // ⚠️ SIMULAÇÃO: No futuro, isso virá do seu Contexto de Autenticação ou Token JWT
  const usuarioLogado = true;
  const cargo = "ADMIN";

  // Se não estiver logado ou não for admin, redireciona para o login
  if (!usuarioLogado || cargo !== "ADMIN") {
    return <Navigate to="/" replace />;
  }

  // Se passar no teste, o <Outlet /> renderiza a página que o admin tentou acessar
  return <Outlet />;
}