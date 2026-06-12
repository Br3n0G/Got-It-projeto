import React, { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api';

// Definição dos tipos de utilizadores suportados pela plataforma
export type UserType = 'CLIENTE' | 'PRESTADOR' | 'ADMIN';

interface UserData {
  id: string;
  nome: string;
  email: string;
}

interface AuthContextType {
  user: UserData | null;
  userType: UserType | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (token: string, userData: UserData, type: UserType) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserData | null>(null);
  const [userType, setUserType] = useState<UserType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Carrega a sessão guardada no navegador ao iniciar a aplicação
    const token = localStorage.getItem('gotit_token');
    const savedType = localStorage.getItem('gotit_user_type') as UserType | null;
    const savedUser = localStorage.getItem('gotit_user_data');

    if (token && savedType && savedUser) {
      setUser(JSON.parse(savedUser));
      setUserType(savedType);
      // Garante que o Axios usa o token recuperado
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    setIsLoading(false);
  }, []);

  // Função chamada após o login com sucesso na API
  const login = (token: string, userData: UserData, type: UserType) => {
    localStorage.setItem('gotit_token', token);
    localStorage.setItem('gotit_user_type', type);
    localStorage.setItem('gotit_user_data', JSON.stringify(userData));

    setUser(userData);
    setUserType(type);
    
    // Injeta o token nas configurações do Axios
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  };

  // Função para limpar a sessão (Logout)
  const logout = () => {
    localStorage.removeItem('gotit_token');
    localStorage.removeItem('gotit_user_type');
    localStorage.removeItem('gotit_user_data');
    setUser(null);
    setUserType(null);
    
    // Remove o token do Axios
    delete api.defaults.headers.common['Authorization'];
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      userType, 
      isAuthenticated: !!user, 
      isLoading, 
      login, 
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar a autenticação em qualquer ecrã
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser utilizado dentro de um AuthProvider');
  }
  return context;
};