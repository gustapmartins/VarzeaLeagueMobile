import axios from 'axios';
import { IMatchService } from '../Interface/Services/IMatchService';
import { matchCreateDto } from '../Dto/MatchDto';
import { API_BASE_URL } from './IpConfig';

export const MatchService: IMatchService = {
  getMatches: async (page: number = 1, pageSize: number = 10) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/v1/Match/search-matchs`, {
        params: { page, pageSize },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching matches:', error);
      throw error;
    }
  },

  getMatchById: async (id: string) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/v1/Match/search-match/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching match by id:', error);
      throw error;
    }
  },

  createMatch: async (matchData: matchCreateDto, token: string) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/v1/Match/created-match`,
        matchData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error creating match:', error);
      throw error;
    }
  },

  updateMatch: async (id: string, matchUpdateDto: { /* Defina os campos necessários para atualização da partida */ }) => {
    try {
      const response = await axios.patch(`${API_BASE_URL}/api/v1/Match/update-match/${id}`, matchUpdateDto);
      return response.data;
    } catch (error) {
      console.error('Error updating match:', error);
      throw error;
    }
  },

  deleteMatch: async (id: string) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/api/v1/Match/delete-match/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting match:', error);
      throw error;
    }
  },
};
