import { GestureResponderEvent } from "react-native";

export interface INotificationCard {
    TextNotification?: string;
    dateCreated?: string;
    readNotification?: boolean;
    onPress?: (event: GestureResponderEvent) => void;
}