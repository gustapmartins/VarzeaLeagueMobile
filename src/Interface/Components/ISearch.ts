import { GestureResponderEvent } from "react-native";
import { MatchViewDto } from "../Dto/iMatchDto";

export interface ISearch {
    matches: MatchViewDto[];
    onPress?: (event: GestureResponderEvent) => void;
}