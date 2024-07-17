import { createContext } from "react";
import { INotificationViewDto } from "../Interface/Dto/INotificationDto";

interface NotificationContextType {
    notifications: INotificationViewDto[];
    loading: boolean;
    refreshNotifications: () => void;
}

export const NotificationContext = createContext<NotificationContextType | null>(null);