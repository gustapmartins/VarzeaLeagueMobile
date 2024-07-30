import { ReactNode, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ProviderProps {
  children: ReactNode;
}

export default function AuthProvider({ children }: ProviderProps) {
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const loadToken = async () => {
      const storedToken = await AsyncStorage.getItem('token');
      if (storedToken) {
        setToken(storedToken);
      }
    };
    loadToken();
  }, []);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}
