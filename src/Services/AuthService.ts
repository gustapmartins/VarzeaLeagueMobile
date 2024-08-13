import axios from 'axios';
import { IUserService } from '../Interface/Services/IAuthService';
import { JwtPayload, jwtDecode } from 'jwt-decode';
import { API_BASE_URL } from './IpConfig';
import { IUserLoginDto } from '../Interface/Dto/IUserLoginDto';
import ApiVarzeaLeague from './ApiVarzeaLeague';

export const AuthService: IUserService = {
  registerUser: async (userName: string, email: string, password: string, confirmPassword: string, cpf: string, role: number) => {
    try {
      const response = await ApiVarzeaLeague(`Auth/created-user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          userName,
          email,
          password,
          confirmPassword,
          cpf,
          role,
        }
      });
      return response;
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  },

  login: async ({ email, password }: IUserLoginDto) => {
    try {
      const response = await ApiVarzeaLeague(`Auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          email,
          password,
        },
      });
      return response;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  },

  forgetPassword: async (email: string) => {
    try {
      const response = await ApiVarzeaLeague(`Auth/forget-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Email': email,
        },
      });
      return response;
    } catch (error) {
      console.error('Error sending forget password request:', error);
      throw error;
    }
  },

  resetPassword: async (Password: string, ConfirmPassword: string, token: string) => {
    try {
      const response = await ApiVarzeaLeague(`Auth/reset-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          Password,
          ConfirmPassword,
          token,
        }
      });
      return response;
    } catch (error) {
      console.error('Error resetting password:', error);
      throw error;
    }
  },

  deleteUser: async (id: string) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/api/v1/Auth/delete-user/${id}`);
      return response;
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  },

  updateUser: async (id: string, userName: string, email: string, password: string, cpf: string, role: number) => {
    try {
      const response = await axios.patch(`${API_BASE_URL}/api/v1/Auth/update-user/${id}`, {
        userName,
        email,
        password,
        cpf,
        role,
      });
      return response;
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  },

  getUsers: async (page: number = 1, pageSize: number = 10) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/v1/Auth/search-users`, {
        params: { page, pageSize },
      });
      return response;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  },

  getUserById: async (id: string) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/v1/Auth/search-user/${id}`);
      return response;
    } catch (error) {
      console.error('Error fetching user by id:', error);
      throw error;
    }
  },

  decodeToken: async (token: string) => {
    try {
      const decoded: JwtPayload = jwtDecode(token);
      console.log(decoded);
      return decoded;
    } catch (error) {
      console.error('Erro ao decodificar token:', error);
      throw error;
    }
  }
};
