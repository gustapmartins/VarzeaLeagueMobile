import { useContext } from "react";
import { AuthContext } from "../Context/Auth/AuthContext";

export default function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuthContext must be used within a AuthProvider"
    );
  }

  return context;
}