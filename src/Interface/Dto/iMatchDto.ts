import { GestureResponderEvent } from "react-native";
import { ITeamModel } from "../Model/ITeamModel";

export interface MatchCreateDto {
    HomeTeamName: string;
    VisitingTeamName: string;
    Local: string;
    Date: string;
}

export interface MatchViewDto {
    id: string;
    homeTeamModel: ITeamModel;
    visitingTeamModel: ITeamModel;
    local?: string;
    date?: string;
    teamWin?: string;
    dateCreated?: string;
    onPress?: (event: GestureResponderEvent) => void;
}