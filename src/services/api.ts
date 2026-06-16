import axios from 'axios';

// 1. Cria a instância centralizada do Axios
export const api = axios.create({
  baseURL: 'http://127.0.0.1:8000', 
  
  // Timeout: Se o MySQL demorar mais de 10 segundos para responder, 
  // cancela a requisição para não deixar a tela do usuário travada para sempre.
  timeout: 10000, 
});

// 2. Interceptor de Requisição (O "Porteiro" de Saída)
// Tudo que o React tentar enviar para o Back-End vai passar por aqui primeiro.
api.interceptors.request.use(
  (config) => {
    // Busca o "crachá" (Token JWT) do usuário que está salvo no navegador
    const token = localStorage.getItem('gotit_token');

    // Se o usuário estiver logado, anexa o crachá na requisição automaticamente
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 3. Interceptor de Resposta (O "Porteiro" de Entrada)
// Tudo que o Back-End responder para o React vai passar por aqui primeiro.
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Se o back-end avisar que o token do usuário expirou (Erro 401 - Não Autorizado)
    if (error.response && error.response.status === 401) {
      console.warn("Sessão expirada. O usuário será deslogado.");
      localStorage.removeItem('gotit_token');
      localStorage.removeItem('gotit_user_data');
      
      // Chuta o usuário de volta para a tela inicial
      window.location.href = '/login/cliente'; 
    }
    return Promise.reject(error);
  }
);