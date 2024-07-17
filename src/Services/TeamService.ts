import axios from 'axios';
import { ITeamService } from '../Interface/Services/ITeamService';
import { API_BASE_URL } from './IpConfig';
import { ITeamCreateDto } from '../Interface/Dto/ITeamDto';

export const TeamService: ITeamService = {
  
  async getTeams(page = 1, pageSize = 10) {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/v1/Team/search-teams`, {
        params: { page, pageSize }
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching teams:", error);
      throw error;
    }
  },

  async getTeamById(id: string) {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/v1/Team/search-team/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching team by ID:", error);
      throw error;
    }
  },

  async createTeam(teamData: ITeamCreateDto, Token: String) {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/v1/Team/created-team`, teamData, {
        headers: {
          Authorization: `Bearer ${Token}`,
          'Content-Type': 'application/json',
        }
      });
      return response.data;
    } catch (error) {
      console.error("Error creating team:", error);
      throw error;
    }
  },

  async updateTeam(id: string, teamUpdateDto: {
    name?: string;
    coach?: string;
    players?: string[];
  }) {
    try {
      const response = await axios.patch(`${API_BASE_URL}/api/v1/Team/update-team/${id}`, teamUpdateDto);
      return response.data;
    } catch (error) {
      console.error("Error updating team:", error);
      throw error;
    }
  },

  async deleteTeam(id: string) {
    try {
      const response = await axios.delete(`${API_BASE_URL}/api/v1/Team/delete-team/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting team:", error);
      throw error;
    }
  }
};
