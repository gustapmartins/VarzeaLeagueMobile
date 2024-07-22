import { ReactNode, useState } from "react";
import { NotificationContext } from "./NotificationContext";
import { INotificationViewDto } from "../../Interface/Dto/INotificationDto";

interface ProviderProps {
  children: ReactNode;
}

export default function NotificationProvider({ children }: ProviderProps) {
  const [notifications, setNotifications] = useState<INotificationViewDto[]>([]);
  var loading = false;

  return (
    <NotificationContext.Provider value={{ notifications, setNotifications, loading }}>
      {children}
    </NotificationContext.Provider>
  );
}
