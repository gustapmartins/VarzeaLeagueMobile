import { GestureResponderEvent } from "react-native";

export interface INotification {
    counter: number;
    onPress?: (event: GestureResponderEvent) => void;
}