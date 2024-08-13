import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../../App/ProfileScreen";
import RegisterScreen from "../../App/RegisterUserScreen";
import LoginScreen from "../../App/LoginScreen";
import ProfileParamList from "./ProfileParamList";
import NewPasswordScreen from "../../App/NewPasswordScreen";
import ForgetPasswordScreen from "../../App/ForgetPasswordScreen";
import React from "react";
import NotificationScreen from "../../App/NotificationScreen";
import ConfigurationScreen from "../../App/ConfigurationScreen";
import useAuthContext from "../../Hook/UseAuthContext";
import VerifyTokenPassword from "../../App/VerifyTokenPassword";

const ProfileStack = createNativeStackNavigator<ProfileParamList>();

export default function ProfileStackScreen() {
  const { token } = useAuthContext()!;

  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {token !== "" ? (
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
            name="VerifyTokenPassword"
            component={VerifyTokenPassword}
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
