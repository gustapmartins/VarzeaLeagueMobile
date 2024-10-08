import { createContext } from "react";
import { MatchViewDto } from "../../Interface/Dto/IMatchDto";

interface MatchContextType {
    matchs: MatchViewDto[];
    setMatchs: (notifications: MatchViewDto[]) => void;
}

export const MatchContext = createContext<MatchContextType | null>(null);