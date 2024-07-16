import { JwtPayload } from "jwt-decode";

export interface IUserService {
  registerUser(userName: string, email: string, password: string, confirmPassword: string, cpf: string, role: number): Promise<any>;
  login(email: string, password: string): Promise<any>;
  forgetPassword(email: string): Promise<any>;
  resetPassword(token: string, newPassword: string): Promise<any>;
  deleteUser(id: string): Promise<any>;
  updateUser(id: string, userName: string, email: string, password: string, cpf: string, role: number): Promise<any>;
  getUsers(page: number, pageSize: number): Promise<any>;
  getUserById(id: string): Promise<any>;
  decodeToken(token: string): Promise<JwtPayload>
}
