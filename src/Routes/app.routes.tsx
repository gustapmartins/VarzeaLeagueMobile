import { NavigationContainer } from "@react-navigation/native";
import { ThemeContext } from "../Context/ThemeContext";
import { useState } from "react";
import { TabNavigator } from "./Tab/TabNavigator";
import { AuthContext } from "../Context/AuthContext";

export function AppRoutes() {
  const [theme, setTheme] = useState<string>("light");
  const [token, setToken] = useState<string>("");

  return (
    <NavigationContainer>
      <ThemeContext.Provider
        value={{
          theme,
          toggleTheme: () => {
            setTheme(theme === "light" ? "dark" : "light");
          },
        }}
      >
        <AuthContext.Provider value={{ token, setToken }}>
          <TabNavigator />
        </AuthContext.Provider>
      </ThemeContext.Provider>
    </NavigationContainer>
  );
}
