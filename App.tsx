import { useState } from "react";
import { AuthContext } from "./src/Context/AuthContext";
import { ThemeContext } from "./src/Context/ThemeContext";
import { AppRoutes } from "./src/Routes/app.routes";

export default function App() {
  return (
      <AppRoutes />
  );
}
