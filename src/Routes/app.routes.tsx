import { NavigationContainer } from "@react-navigation/native";
import { TabNavigator } from "./Tab/TabNavigator";
import AuthProvider from "../Context/Auth/AuthProvider";
import ThemeProvider from "../Context/Theme/ThemeProvider";
import UserProvider from "../Context/User/UserProvider";

export function AppRoutes() {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <AuthProvider>
          <UserProvider>
            <TabNavigator />
          </UserProvider>
        </AuthProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
