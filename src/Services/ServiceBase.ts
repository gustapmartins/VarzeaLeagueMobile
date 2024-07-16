import axios, { AxiosResponse } from 'axios';

export abstract class AbstractService<T> {
  
  protected abstract resourceUrl: string;

  protected async get(url: string, params?: any): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.get(url, { params });
      return response.data;
    } catch (error) {
      console.error(`Error fetching data from ${url}:`, error);
      throw error;
    }
  }

  protected async post(url: string, data: any): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.post(url, data);
      return response.data;
    } catch (error) {
      console.error(`Error creating data at ${url}:`, error);
      throw error;
    }
  }

  protected async patch(url: string, data: any): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.patch(url, data);
      return response.data;
    } catch (error) {
      console.error(`Error updating data at ${url}:`, error);
      throw error;
    }
  }

  protected async delete(url: string): Promise<T> {
    try {
      const response: AxiosResponse<T> = await axios.delete(url);
      return response.data;
    } catch (error) {
      console.error(`Error deleting data at ${url}:`, error);
      throw error;
    }
  }
}
