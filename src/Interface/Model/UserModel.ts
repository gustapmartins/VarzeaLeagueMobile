export interface UserModel {
    _id: string;
    username: string;
    email: string;
    cpf: string;
    role: Role;
    accountStatus: AccountStatus;
    dateCreated: Date;
}