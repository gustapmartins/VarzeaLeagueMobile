import { GestureResponderEvent } from "react-native";
import { MatchViewDto } from "../Dto/IMatchDto";

export interface ISearch {
    matches: MatchViewDto[];
    onPress?: (event: GestureResponderEvent) => void;
}