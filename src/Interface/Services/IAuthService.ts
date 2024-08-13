import { AxiosResponse } from "axios";
import { JwtPayload } from "jwt-decode";
import { IUserLoginDto } from "../Dto/IUserLoginDto";

export interface IUserService {
  registerUser(userName: string, email: string, password: string, confirmPassword: string, cpf: string, role: number): Promise<any>;
  login(loginDto: IUserLoginDto): Promise<AxiosResponse<{ token: string }, any>>;
  forgetPassword(email: string): Promise<AxiosResponse<{ email: string }, any>>;
  resetPassword(password: string, confirmPassword: string, token: string): Promise<any>;
  deleteUser(id: string): Promise<any>;
  updateUser(id: string, userName: string, email: string, password: string, cpf: string, role: number): Promise<any>;
  getUsers(page: number, pageSize: number): Promise<any>;
  getUserById(id: string): Promise<any>;
  decodeToken(token: string): Promise<JwtPayload>
}
