import { GestureResponderEvent } from "react-native";
import { TeamModel } from "./TeamDto";

export interface matchCreateDto {
    HomeTeamName: string;
    VisitingTeamName: string;
    Local: string;
    Date: string;
}

export interface MatchViewDto {
    id: string;
    homeTeamModel: TeamModel;
    homeTeamName?: string;
    visitingTeamModel: TeamModel;
    visitingTeamName?: string;
    local?: string;
    date?: string;
    teamWin?: string;
    dateCreated?: string;
    onPress?: (event: GestureResponderEvent) => void;
}