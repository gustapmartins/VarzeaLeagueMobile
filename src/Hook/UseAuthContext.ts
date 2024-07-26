import { useContext, useEffect } from "react";
import { AuthContext } from "../Context/Auth/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function UseAuthContext() {
  const context = useContext(AuthContext);

  // useEffect(() => {
  //   const storeToken = async (token: string) => {
  //     try {
  //       await AsyncStorage.setItem('@user_token', token);
  //     } catch (error) {
  //       console.error('Error storing token:', error);
  //     }
  //   };

  //   if (context?.token != null) {
  //     storeToken(context?.token);
  //   }
  // }, [context?.token]);

  if (!context) {
    throw new Error(
      "useAuthContext must be used within a AuthProvider"
    );
  }

  return context;
}