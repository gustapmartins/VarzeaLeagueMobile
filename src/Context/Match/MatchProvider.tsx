import { ReactNode, useState } from "react";
import { MatchContext } from "./MatchContext";
import { MatchViewDto } from "../../Interface/Dto/IMatchDto";

interface ProviderProps {
  children: ReactNode;
}

export default function MatchProvider({ children }: ProviderProps) {
  const [matchs, setMatchs] = useState<MatchViewDto[]>([]);

  return (
    <MatchContext.Provider value={{ matchs, setMatchs }}>
      {children}
    </MatchContext.Provider>
  );
}
