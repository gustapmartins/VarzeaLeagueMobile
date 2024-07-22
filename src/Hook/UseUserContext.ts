import { useContext } from "react";
import { UserContext } from "../Context/User/UserContext";

export default function UseUserContext() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error(
      "UseUserContext must be used within a UserProvider"
    );
  }

  return context;
}