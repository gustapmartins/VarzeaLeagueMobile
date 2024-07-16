import { GestureResponderEvent } from "react-native";
export interface IButtonNavigation {
    LabelButton: string;
    IconName: string;
    onPress?: (event: GestureResponderEvent) => void;
}