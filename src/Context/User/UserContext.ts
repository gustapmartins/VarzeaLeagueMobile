import { createContext } from "react";
import { IUserModel } from "../../Interface/Model/IUserModel";

interface UserContextType {
    user: IUserModel;
    setUser: (user: IUserModel) => void;
}

export const UserContext = createContext<UserContextType | null>(null);