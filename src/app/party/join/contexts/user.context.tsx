import { ReactElement, createContext, useState } from "react";
import { PlayerRole, UserContext as UserContextType } from "../types";

export const UserContext = createContext<UserContextType | null>(null)

export function UserProvider({ children }: { children: JSX.Element | ReactElement }) {
    const [username, setUsername] = useState('')
    const [userRole, setUserRole] = useState<PlayerRole>('player')
    const [isOwner, setIsOwner] = useState(false)

    return (
        <UserContext.Provider value={
            {
                username,
                setUsername,
                userRole,
                setUserRole,
                isOwner,
                setIsOwner
            }
        }>
            {children}
        </UserContext.Provider>
    )
}