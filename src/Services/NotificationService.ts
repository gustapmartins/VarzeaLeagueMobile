import axios from 'axios';
import { API_BASE_URL } from './IpConfig';
import { INotificationService } from '../Interface/Services/INotificationService';

export const NotificationService: INotificationService = {

  getNotification: async ( token: string, page: number = 1, pageSize: number = 10) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/v1/Notification/search-notifications`, {
        params: { page, pageSize },
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching players:', error);
      throw error;
    }
  },
};
