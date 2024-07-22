import { ReactNode, useState } from "react";
import { AuthContext } from "./AuthContext";

interface ProviderProps {
  children: ReactNode;
}

export default function AuthProvider({ children }: ProviderProps) {
  const [token, setToken] = useState<string>("");

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}
