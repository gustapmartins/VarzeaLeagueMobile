import { INotificationService } from '../Interface/Services/INotificationService';
import ApiVarzeaLeague from './ApiVarzeaLeague';

export const NotificationService: INotificationService = {

  getNotification: async ( token: string, page: number = 1, pageSize: number = 10) => {
    try {
      const response = await ApiVarzeaLeague(`Notification/search-notifications`, {
        params: { page, pageSize },
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      });
      return response;
    } catch (error) {
      console.error('Error fetching Notification:', error);
      throw error;
    }
  },
};
