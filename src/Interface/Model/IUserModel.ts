import { Role } from "../../Enum/Role";


export interface IUserModel {
    id: string;
    username: string;
    email: string;
    cpf: string;
    role: Role;
    accountStatus: AccountStatus;
    dataCreated: string;
}