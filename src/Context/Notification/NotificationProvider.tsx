import { ReactNode, useState } from "react";
import { NotificationContext } from "./NotificationContext";
import { INotificationViewDto } from "../../Interface/Dto/INotificationDto";

interface ProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ProviderProps) {
  const [notifications, setNotifications] = useState<INotificationViewDto[]>([]);

  return (
    <NotificationContext.Provider value={{ notifications, setNotifications }}>
      {children}
    </NotificationContext.Provider>
  );
}
