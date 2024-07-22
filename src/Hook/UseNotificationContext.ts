import { useContext } from "react";
import { NotificationContext } from "../Context/Notification/NotificationContext";

export default function UseNotificationContext() {
  const context = useContext(NotificationContext);

  if (!context) {
    throw new Error(
      "useNotificationContext must be used within a NotificationProvider"
    );
  }

  return context;
}