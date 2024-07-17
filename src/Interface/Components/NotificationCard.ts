import { GestureResponderEvent } from "react-native";

export interface INotificationCard {
    TextNotification?: string;
    dateCreated?: Date;
    readNotification?: boolean;
    onPress?: (event: GestureResponderEvent) => void;
}