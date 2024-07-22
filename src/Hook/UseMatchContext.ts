import { useContext } from "react";
import { MatchContext } from "../Context/Match/MatchContext";

export default function UseMatchContext() {
  const context = useContext(MatchContext);

  if (!context) {
    throw new Error(
      `useMatchContext must be used within a MatchProvider`
    );
  }

  return context;
}