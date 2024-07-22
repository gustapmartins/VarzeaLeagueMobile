import { ReactNode, useState } from "react";
import { UserContext } from "./UserContext";
import { IUserModel } from "../../Interface/Model/IUserModel";

interface ProviderProps {
  children: ReactNode;
}

export default function UserProvider({ children }: ProviderProps) {
  const [user, setUser] = useState({} as IUserModel);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
