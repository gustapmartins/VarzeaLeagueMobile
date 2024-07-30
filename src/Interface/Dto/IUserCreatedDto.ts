import { Role } from "../../Enum/Role";

export interface IUserCreatedDto {
    id: string;
    username: string;
    confirmPassword: string;
    email: string;
    cpf: string;
    role: Role;
}