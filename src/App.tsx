import { Routes, Route } from "react-router-dom";

// ── IMPORTAÇÕES DE PÁGINAS ───────────────────────────────────────────────
import { ProviderHome } from "./pages/ProviderHome";
import { ProviderData } from "./pages/ProviderData";
import { PricingPage } from "./pages/PricingPage";
import { ProviderHistoryPage } from "./pages/ProviderHistoryPage";
import PedidosAtivos from "./pages/PedidosAtivos";

import AndreasIndex from "./pages/AndreasIndex";
import { ProviderProfilePage } from "./pages/ProviderProfilePage";
import { ChooseVisitTypePage } from "./pages/ChooseVisitTypePage";
import { HomePage } from "./pages/HomePage";
import Sobre from "./pages/Sobre";
import { ContactPage } from "./pages/Contato";

import { ClientHome } from "./pages/ClientHome";
import { ClientData } from "./pages/ClientData";
import { ClientAddresses } from "./pages/ClientAddresses";
import { ClientContracts } from "./pages/ClientContracts";
import { ClientSettings } from "./pages/ClientSettings";
import { LoginCliente } from "./pages/LoginCliente";
import { CadastroCliente } from "./pages/CadastroCliente";
import { ContaCriadaCliente } from "./pages/ContaCriadaCliente";

import { LoginPrestador } from "./pages/LoginPrestador.tsx";
import { CadastroPrestador } from "./pages/CadastroPrestador";
import { ContaCriadaPrestador } from "./pages/ContaCriadaPrestador";

import { LoginAdmin } from "./pages/LoginAdmin";
import { AdminDashboard } from "./pages/admin/AdminDashboard.tsx";
import { AdminClientes } from "./pages/admin/AdminClientes.tsx";
import { AdminEspecialistas } from "./pages/admin/AdminEspecialistas.tsx";
import { AdminContratos } from "./pages/admin/AdminContratos.tsx";
import { AdminPagamentos } from "./pages/admin/AdminPagamentos.tsx";
import { AdminAccountNotifications } from "./pages/admin/AdminAccountNotifications.tsx";
import { AdminPerfilDados } from "./pages/admin/AdminPerfilDados.tsx";
import { AdminSegurancaConta } from "./pages/admin/AdminSegurancaConta.tsx";
import { AdminSuporte } from "./pages/admin/AdminSuporte.tsx";

import { PaymentSuccessPage } from "./pages/PaymentSuccessPage";

// ── IMPORTAÇÕES DE SEGURANÇA E CONTEXTO ──────────────────────────────────
import { AuthProvider } from "./contexts/AuthContext"; // Caminho corrigido para src/contexts
import { AdminGuard } from "./components/AdminGuard.tsx";


// ── FUNÇÃO PRINCIPAL UNIFICADA ───────────────────────────────────────────
export default function App() {
  return (
    // O AuthProvider agora abraça todo o aplicativo, garantindo que qualquer 
    // tela saiba quem está logado
    <AuthProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/inicio/servicosdisponiveis" element={<AndreasIndex />} />
        <Route path="/prestador/perfil" element={<ProviderProfilePage />} />
        <Route path="/cliente/escolher-visita" element={<ChooseVisitTypePage />} />
        <Route path="/pagamento/sucesso" element={<PaymentSuccessPage />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<ContactPage />} />

        {/* ── SESSÃO: AUTENTICAÇÃO E CADASTROS ────────────────────────────── */}
        {/* Fluxo do Cliente */}
        <Route path="/login/cliente" element={<LoginCliente />} />
        <Route path="/cadastro/cliente" element={<CadastroCliente />} />
        <Route path="/conta-criada/cliente" element={<ContaCriadaCliente />} />

        {/* Fluxo do Prestador e Admin */}
        <Route path="/login/prestador" element={<LoginPrestador />} />
        <Route path="/cadastro/prestador" element={<CadastroPrestador />} />
        <Route path="/conta-criada/prestador" element={<ContaCriadaPrestador />} />
        <Route path="/prestador/historico" element={<ProviderHistoryPage />} />
        <Route path="/login/admin" element={<LoginAdmin />} />
        <Route path="/prestador/dados" element={<ProviderData />} />
        <Route path="/prestador/pricing" element={<PricingPage mode="day" />} />
        <Route path="/prestador/pedidosativos" element={<PedidosAtivos />} />
        <Route path="/prestador/home" element={<ProviderHome />} />
        <Route path="/cliente" element={<ClientHome />} />
        <Route path="/cliente/dados" element={<ClientData />} />
        <Route path="/cliente/enderecos" element={<ClientAddresses />} />
        <Route path="/cliente/contratos" element={<ClientContracts />} />
        <Route path="/cliente/configuracoes" element={<ClientSettings />} />

        {/* 🛡️ ROTAS PROTEGIDAS PELO ADMIN GUARD */}
        <Route element={<AdminGuard />}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/clientes" element={<AdminClientes />} />
          <Route path="/admin/especialistas" element={<AdminEspecialistas />} />
          <Route path="/admin/contratos" element={<AdminContratos />} />
          <Route path="/admin/pagamentos" element={<AdminPagamentos />} />
          <Route path="/admin/perfil" element={<AdminPerfilDados />} />
          <Route path="/admin/perfil/seguranca" element={<AdminSegurancaConta />} />
          <Route path="/admin/perfil/notificacoes" element={<AdminAccountNotifications />} />
          <Route path="/admin/suporte" element={<AdminSuporte />} />
        </Route>

        {/* fallback para rotas inexistentes */}
        <Route path="*" element={
          <div style={{ padding: '50px', textAlign: 'center', color: 'red' }}>
            <h1>Erro 404 - Rota não encontrada!</h1>
            <p>Verifique a URL no seu navegador.</p>
          </div>
        } />
      </Routes>
    </AuthProvider>
  );
}