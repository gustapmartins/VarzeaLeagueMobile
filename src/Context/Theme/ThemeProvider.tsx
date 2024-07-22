import { ReactNode, useState } from "react";
import { ThemeContext } from "./ThemeContext";

interface ProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ProviderProps) {
  const [theme, setTheme] = useState("Light");

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme() {
          setTheme(theme === "Light" ? "Dark" : "Light");
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
