import { NavigationContainer } from "@react-navigation/native";
import { TabNavigator } from "./Tab/TabNavigator";
import AuthProvider from "../Context/Auth/AuthProvider";
import ThemeProvider from "../Context/Theme/ThemeProvider";
import UserProvider from "../Context/User/UserProvider";
import NotificationProvider from "../Context/Notification/NotificationProvider";
import MatchProvider from "../Context/Match/MatchProvider";

export function AppRoutes() {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <AuthProvider>
          <UserProvider>
            <MatchProvider>
              <NotificationProvider>
                <TabNavigator />
              </NotificationProvider>
            </MatchProvider>
          </UserProvider>
        </AuthProvider>
      </ThemeProvider>
    </NavigationContainer >
  );
}
