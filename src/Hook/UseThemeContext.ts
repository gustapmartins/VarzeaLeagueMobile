import { useContext } from "react";
import { ThemeContext } from "../Context/Theme/ThemeContext";

export default function UseThemeContext() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "UseThemeContext must be used within a ThemeProvider"
    );
  }

  return context;
}