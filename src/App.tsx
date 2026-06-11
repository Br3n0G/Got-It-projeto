import { Routes, Route } from "react-router-dom";
import {ProviderHome} from "./pages/ProviderHome";
import {ProviderData} from "./pages/ProviderData";
import {PricingPage} from "./pages/PricingPage";
import PedidosAtivos from "./pages/PedidosAtivos";
import AndreasIndex from "./pages/AndreasIndex";
import { HomePage } from "./pages/HomePage";
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

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/inicio/servicosdisponiveis" element={<AndreasIndex />} />
      {/* ── SESSÃO: AUTENTICAÇÃO E CADASTROS ────────────────────────────── */}
      {/* Fluxo do Cliente */}
      <Route path="/login/cliente" element={<LoginCliente />} />
      <Route path="/cadastro/cliente" element={<CadastroCliente />} />
      <Route path="/conta-criada/cliente" element={<ContaCriadaCliente />} />

      {/* Fluxo do Prestador e Admin (Ativar quando os arquivos forem criados) */}
       <Route path="/login/prestador" element={<LoginPrestador />} />
      <Route path="/cadastro/prestador" element={<CadastroPrestador />} />
      <Route path="/conta-criada/prestador" element={<ContaCriadaPrestador />} />
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
      {/* fallback para rotas inexistentes */}
      <Route path="*" element={
        <div style={{ padding: '50px', textAlign: 'center', color: 'red' }}>
          <h1>Erro 404 - Rota não encontrada!</h1>
          <p>Verifique a URL no seu navegador.</p>
        </div>
      } />
    </Routes>
  );
}