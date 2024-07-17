import axios from 'axios';
import { IPlayerService } from '../Interface/Services/IPlayerService';
import { PlayerCreateDto } from '../Interface/Dto/IPlayerDto';
import { API_BASE_URL } from './IpConfig';

export const PlayerService: IPlayerService = {
  getPlayers: async (page: number = 1, pageSize: number = 10, teamId: string | null = null) => {
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

  getPlayerById: async (id: string) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/v1/Player/search-player/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching player by id:', error);
      throw error;
    }
  },

  createPlayer: async (playerData: PlayerCreateDto, token: string) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/v1/Player/created-player`, playerData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error creating player:', error);
      throw error;
    }
  },

  updatePlayer: async (id: string, playerUpdateDto: { /* Defina os campos necessários para atualização do jogador */ }) => {
    try {
      const response = await axios.patch(`${API_BASE_URL}/api/v1/Player/update-player/${id}`, playerUpdateDto);
      return response.data;
    } catch (error) {
      console.error('Error updating player:', error);
      throw error;
    }
  },

  deletePlayer: async (id: string) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/api/v1/Player/delete-player/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting player:', error);
      throw error;
    }
  },
};
