import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../../App/ProfileScreen";
import RegisterScreen from "../../App/RegisterUserScreen";
import LoginScreen from "../../App/LoginScreen";
import ProfileParamList from "./ProfileParamList";
import NewPasswordScreen from "../../App/NewPasswordScreen";
import ForgetPasswordScreen from "../../App/ForgetPasswordScreen";
import React, { useEffect, useState } from "react";
import NotificationScreen from "../../App/NotificationScreen";
import ConfigurationScreen from "../../App/ConfigurationScreen";
import { AuthService } from "../../Services/AuthService";
import useAuthContext from "../../Hook/UseAuthContext";

const ProfileStack = createNativeStackNavigator<ProfileParamList>();

export default function ProfileStackScreen() {
  const { token, setToken } = useAuthContext()!; // Usando o AuthContext
  
  const [isSignedIn, setIsSignedIn] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      if (token) {
        try {
          const decoded = await AuthService.decodeToken(token);
          const currentTime = Date.now() / 1000; // current time in seconds
          if (decoded.exp! < currentTime) {
            setToken(""); // Limpa o token no contexto
            setIsSignedIn(false);
          } else {
            setIsSignedIn(true);
          }
        } catch (error) {
          console.error("Erro ao verificar token:", error);
          setIsSignedIn(false);
        }
      } else {
        setIsSignedIn(false);
      }
    };

    checkToken();
  }, [token]);

  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {isSignedIn ? (
        <>
          <ProfileStack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ headerShown: false }}
          />

          <ProfileStack.Screen
            name="Notification"
            component={NotificationScreen}
            options={{ headerShown: false }}
          />

          <ProfileStack.Screen
            name="Configuration"
            component={ConfigurationScreen}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <>
          <ProfileStack.Screen
            name="RegisterUser"
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
          <ProfileStack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <ProfileStack.Screen
            name="NewPassword"
            component={NewPasswordScreen}
            options={{ headerShown: false }}
          />
          <ProfileStack.Screen
            name="ForgetPassword"
            component={ForgetPasswordScreen}
            options={{ headerShown: false }}
          />
        </>
      )}
    </ProfileStack.Navigator>
  );
}
