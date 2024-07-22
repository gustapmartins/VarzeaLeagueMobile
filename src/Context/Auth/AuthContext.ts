import { createContext } from 'react';

// Definindo o tipo do contexto
interface AuthContextType {
    token: string;
    setToken: (token: string) => void;
}

// Criação do contexto com valor padrão
export const AuthContext = createContext<AuthContextType | null>(null);