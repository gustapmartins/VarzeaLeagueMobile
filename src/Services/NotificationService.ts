import axios from 'axios';
import { API_BASE_URL } from './IpConfig';
import { INotificationService } from '../Interface/Services/INotificationService';

export const NotificationService: INotificationService = {
  getNotification: async (page: number = 1, pageSize: number = 10, teamId: string | null = null) => {
    try {
      const params: any = { page, pageSize };
      if (teamId) {
        params.teamId = teamId;
      }
      const response = await axios.get(`${API_BASE_URL}/api/v1/Player/search-players`, {
        params,
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching players:', error);
      throw error;
    }
  },
};
